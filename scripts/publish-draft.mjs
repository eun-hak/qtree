/**
 * 대기열(content/queue/)의 첫 번째 초안을 공개 데이터로 승격합니다.
 *
 * 동작 순서:
 *   1. content/queue/ 에서 파일명 오름차순으로 첫 번째 JSON을 읽음
 *   2. src/app/data/posts-content.ts 맨 앞에 본문(HTML) 추가
 *   3. src/app/data/mock.ts POSTS 배열 맨 앞에 메타데이터 추가
 *   4. 처리한 JSON 파일 삭제
 *
 * git 커밋/푸시는 GitHub Actions 워크플로우에서 처리합니다.
 */

import { readdir, readFile, writeFile, unlink } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const QUEUE_DIR = join(ROOT, "content/queue");
const MOCK_FILE = join(ROOT, "src/app/data/mock.ts");
const CONTENT_FILE = join(ROOT, "src/app/data/posts-content.ts");

async function main() {
  // 1. 대기열에서 첫 번째 파일 선택
  const files = (await readdir(QUEUE_DIR))
    .filter((f) => f.endsWith(".json"))
    .sort();

  if (files.length === 0) {
    console.log("대기열이 비어 있습니다. 오늘은 발행할 글이 없습니다.");
    process.exit(0);
  }

  const draftPath = join(QUEUE_DIR, files[0]);
  const draft = JSON.parse(await readFile(draftPath, "utf-8"));
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  console.log(`발행 준비: ${draft.title} (${draft.slug})`);

  // 2. mock.ts에서 현재 최대 id를 찾아 +1
  const mockContent = await readFile(MOCK_FILE, "utf-8");
  const idMatches = [...mockContent.matchAll(/\bid:\s*"(\d+)"/g)];
  if (idMatches.length === 0) {
    throw new Error("mock.ts에서 id를 찾을 수 없습니다.");
  }
  const maxId = Math.max(...idMatches.map((m) => parseInt(m[1], 10)));
  const newId = String(maxId + 1);

  // 3. posts-content.ts 에 본문 추가 (맨 앞에 삽입)
  const contentFile = await readFile(CONTENT_FILE, "utf-8");
  const CONTENT_MARKER = "export const POST_CONTENTS = {";
  if (!contentFile.includes(CONTENT_MARKER)) {
    throw new Error("posts-content.ts 구조가 예상과 다릅니다.");
  }
  const newContentEntry = `  "${draft.slug}": \`${draft.content}\`,\n`;
  const updatedContentFile = contentFile.replace(
    CONTENT_MARKER,
    `${CONTENT_MARKER}\n${newContentEntry}`
  );
  await writeFile(CONTENT_FILE, updatedContentFile, "utf-8");

  // 4. mock.ts POSTS 배열 맨 앞에 메타데이터 추가
  const POSTS_MARKER = "export const POSTS: Post[] = [";
  if (!mockContent.includes(POSTS_MARKER)) {
    throw new Error("mock.ts 구조가 예상과 다릅니다.");
  }
  const tagsJson = JSON.stringify(draft.tags ?? []);
  const newPostEntry = `  {
    id: "${newId}",
    title: "${draft.title.replace(/"/g, '\\"')}",
    summary:
      "${draft.summary.replace(/"/g, '\\"')}",
    content: POST_CONTENTS["${draft.slug}"],
    category: LIST_CATEGORY_SLUG,
    date: "${today}",
    slug: "${draft.slug}",
    views: 0,
    tags: ${tagsJson},
    readingTime: ${draft.readingTime ?? 6},
  },\n`;
  const updatedMock = mockContent.replace(
    POSTS_MARKER,
    `${POSTS_MARKER}\n${newPostEntry}`
  );
  await writeFile(MOCK_FILE, updatedMock, "utf-8");

  // 5. 처리한 초안 파일 삭제
  await unlink(draftPath);

  console.log(`완료: "${draft.title}" → id ${newId}, date ${today}`);
  console.log(`남은 대기열: ${files.length - 1}개`);
}

main().catch((err) => {
  console.error("publish-draft 실패:", err.message);
  process.exit(1);
});

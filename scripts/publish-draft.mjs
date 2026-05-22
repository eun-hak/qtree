/**
 * 대기열(content/queue/)의 첫 번째 초안을 공개 데이터로 승격합니다.
 *
 * GitHub Actions schedule은 지연·누락될 수 있어, 워크플로는 10분마다 돌고
 * 이 스크립트가 KST 10시 이후·당일 미발행일 때만 실제 발행합니다.
 *
 * 환경 변수:
 *   FORCE_PUBLISH=1  → 시간·당일 발행 가드 무시 (수동 Run workflow용)
 */

import { readdir, readFile, writeFile, unlink, access } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const QUEUE_DIR = join(ROOT, "content/queue");
const MOCK_FILE = join(ROOT, "src/app/data/mock.ts");
const CONTENT_FILE = join(ROOT, "src/app/data/posts-content.ts");
const LAST_PUBLISH_FILE = join(ROOT, "content/.last-publish-date");

/** KST 기준 발행 시작 시각 (0~23) */
const PUBLISH_HOUR_KST = 10;

function getKstNow() {
  const now = new Date();
  const date = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);

  const hour = parseInt(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Seoul",
      hour: "numeric",
      hour12: false,
    }).format(now),
    10
  );

  return { date, hour };
}

async function readLastPublishDate() {
  try {
    await access(LAST_PUBLISH_FILE);
    return (await readFile(LAST_PUBLISH_FILE, "utf-8")).trim();
  } catch {
    return null;
  }
}

async function shouldSkipPublish() {
  if (process.env.FORCE_PUBLISH === "1") {
    console.log("FORCE_PUBLISH=1 — 발행 가드 건너뜀 (수동 실행)");
    return false;
  }

  const { date, hour } = getKstNow();
  console.log(`KST 현재: ${date} ${hour}시`);

  if (hour < PUBLISH_HOUR_KST) {
    console.log(
      `KST ${PUBLISH_HOUR_KST}시 이전 — 발행 대기 (다음 ${PUBLISH_HOUR_KST}시 이후 10분 주기 실행 시 재시도)`
    );
    return true;
  }

  const lastPublish = await readLastPublishDate();
  if (lastPublish === date) {
    console.log(`오늘(${date}) 이미 발행됨 — 건너뜀`);
    return true;
  }

  return false;
}

async function main() {
  if (await shouldSkipPublish()) {
    process.exit(0);
  }

  const { date: today } = getKstNow();

  const files = (await readdir(QUEUE_DIR))
    .filter((f) => f.endsWith(".json"))
    .sort();

  if (files.length === 0) {
    console.log("대기열이 비어 있습니다.");
    process.exit(0);
  }

  const draftPath = join(QUEUE_DIR, files[0]);
  const draft = JSON.parse(await readFile(draftPath, "utf-8"));

  console.log(`발행 준비: ${draft.title} (${draft.slug})`);

  const mockContent = await readFile(MOCK_FILE, "utf-8");
  const idMatches = [...mockContent.matchAll(/\bid:\s*"(\d+)"/g)];
  if (idMatches.length === 0) {
    throw new Error("mock.ts에서 id를 찾을 수 없습니다.");
  }
  const maxId = Math.max(...idMatches.map((m) => parseInt(m[1], 10)));
  const newId = String(maxId + 1);

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

  await unlink(draftPath);
  await writeFile(LAST_PUBLISH_FILE, `${today}\n`, "utf-8");

  console.log(`완료: "${draft.title}" → id ${newId}, date ${today} (KST)`);
  console.log(`남은 대기열: ${files.length - 1}개`);
}

main().catch((err) => {
  console.error("publish-draft 실패:", err.message);
  process.exit(1);
});

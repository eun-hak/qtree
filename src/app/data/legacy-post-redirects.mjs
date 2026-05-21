/**
 * 예전 /post/1 숫자 URL → slug URL (next.config 전용, mock POSTS와 id·slug 동기화)
 * 글 추가 시 mock.ts만 수정하면 되고, 기존에 공개했던 숫자 id가 있을 때만 여기에 한 줄 추가.
 */
export const LEGACY_NUMERIC_POST_REDIRECTS = [
  { id: "1", slug: "burnt-pot-baking-soda-clean" },
  { id: "2", slug: "hood-grease-percarbonate-clean" },
  { id: "3", slug: "microwave-steam-vinegar-clean" },
];

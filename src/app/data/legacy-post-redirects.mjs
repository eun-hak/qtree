/**
 * 예전 /post/1 숫자 URL → slug URL (next.config 전용, mock POSTS와 id·slug 동기화)
 * 글 추가 시 mock.ts만 수정하면 되고, 기존에 공개했던 숫자 id가 있을 때만 여기에 한 줄 추가.
 *
 * 2026-07 사이트 주제 전환(청소 → 염증·통증 기록)으로 이전 글이 모두 내려가면서,
 * 옛 청소 글로 향하던 매핑은 제거했습니다. (해당 URL은 404로 응답)
 */
export const LEGACY_NUMERIC_POST_REDIRECTS = [];

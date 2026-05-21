/**
 * 큐트리 — 사이트 공통 메타데이터 (도메인: qtree.kr)
 */
export const SITE_BRAND = "qtree";

export const SITE_DOMAIN = "qtree.kr";

/** 화면·SEO에 표시되는 사이트명 */
export const SITE_NAME = "큐트리";

export const SITE_NAME_SHORT = "큐트리";

export const SITE_TAGLINE = "생활 고민을 단계별로 해결";

export const SITE_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`;

export const SITE_DESCRIPTION =
  "청소·세탁부터 공공서비스 이용, 앱 설정까지. 막막할 때 바로 찾아볼 수 있도록 직접 해보고 단계별로 정리한 실전 생활 가이드입니다.";

export const SITE_KEYWORDS = [
  SITE_NAME,
  SITE_BRAND,
  "생활 가이드",
  "생활 꿀팁",
  "청소 방법",
  "세탁 방법",
  "베이킹소다",
  "구연산",
  "욕실 청소",
  "주방 청소",
  "얼룩 제거",
  "공공서비스",
  "앱 사용법",
  "생활 정보",
] as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  `https://${SITE_DOMAIN}`;

export const GOOGLE_SITE_VERIFICATION =
  "YG1phv7_kh_MV7lNeiDmTZaKhebEHdySYocO85vrLz8";

export const GOOGLE_ANALYTICS_ID = "G-YNYS81PEJB";

export const SITE_EMAIL = "contact@qtree.kr";

export const SITE_EMAIL_PRIVACY = "privacy@qtree.kr";

export const SITE_EMAIL_PARTNER = "partner@qtree.kr";

export function siteUrl(path = ""): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(segment?: string): string {
  return segment ? `${segment} | ${SITE_NAME}` : SITE_TITLE;
}

/**
 * 큐트리 — 사이트 공통 메타데이터 (도메인: qtree.com)
 */
export const SITE_BRAND = "qtree";

export const SITE_DOMAIN = "qtree.com";

/** 화면·SEO에 표시되는 사이트명 */
export const SITE_NAME = "큐트리";

export const SITE_NAME_SHORT = "큐트리";

export const SITE_TAGLINE = "일상 서비스 사용법을 쉽게";

export const SITE_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`;

export const SITE_DESCRIPTION =
  "택배 조회, 공공서비스 발급, 우편·등기, 앱 설정까지. 생활에서 자주 쓰는 온라인 서비스의 조회·신청·발급 방법을 초보자도 따라 할 수 있게 정리합니다.";

export const SITE_KEYWORDS = [
  SITE_NAME,
  SITE_BRAND,
  "생활서비스",
  "배송조회",
  "정부24",
  "주민등록등본",
  "인터넷 발급",
  "택배 조회",
  "공공서비스",
  "앱 사용법",
  "생활정보",
] as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  `https://${SITE_DOMAIN}`;

export const SITE_EMAIL = "contact@qtree.com";

export const SITE_EMAIL_PRIVACY = "privacy@qtree.com";

export const SITE_EMAIL_PARTNER = "partner@qtree.com";

export function siteUrl(path = ""): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(segment?: string): string {
  return segment ? `${segment} | ${SITE_NAME}` : SITE_TITLE;
}

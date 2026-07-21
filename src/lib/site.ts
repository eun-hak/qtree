/**
 * 큐트리 — 사이트 공통 메타데이터 (도메인: qtree.kr)
 */
export const SITE_BRAND = "qtree";

export const SITE_DOMAIN = "qtree.kr";

/** 화면·SEO에 표시되는 사이트명 */
export const SITE_NAME = "큐트리";

/** JSX `{SITE_NAME}는` 패턴의 띄어쓰기(큐트리 는) 방지 */
export const SITE_NAME_EUN = `${SITE_NAME}는`;

/** JSX `{SITE_NAME}의` 패턴의 띄어쓰기(큐트리 의) 방지 */
export const SITE_NAME_EUI = `${SITE_NAME}의`;

/** JSX `{SITE_NAME}에` 패턴의 띄어쓰기(큐트리 에) 방지 */
export const SITE_NAME_E = `${SITE_NAME}에`;

export const SITE_NAME_SHORT = "큐트리";

export const SITE_TAGLINE = "염증과 통증을 겪으며 기록한 것";

export const SITE_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`;

export const SITE_DESCRIPTION =
  "운동과 일상에서 겪은 염증·통증을 병원 진료와 함께 기록합니다. 늑연골염, 어깨 통증, 골반 전방경사, 위염·식도염, 수면과 식습관까지 — 증상부터 진단, 회복까지의 실제 경험 기록입니다.";

export const SITE_KEYWORDS = [
  SITE_NAME,
  SITE_BRAND,
  "염증 기록",
  "통증 경험",
  "늑연골염",
  "어깨 통증",
  "골반 전방경사",
  "허리 통증",
  "위염",
  "역류성 식도염",
  "수면 습관",
  "식습관 개선",
  "운동 부상",
  "회복 기록",
] as const;

/**
 * 글쓴이 표기 — 건강(YMYL) 글은 익명 "편집팀"이면 신뢰가 떨어집니다.
 * 실명 또는 일관되게 쓸 필명으로 바꿔 주세요.
 */
export const SITE_AUTHOR = "이안(IAN)";

/** 글쓴이 소개 한 줄 — 당사자 경험임을 명확히 */
export const SITE_AUTHOR_BIO =
  "웨이트 트레이닝을 하다 늑연골염과 어깨·허리 통증을 겪었습니다. 의료인이 아니며, 병원에서 들은 내용과 회복까지 걸린 과정을 겪은 그대로 기록합니다.";

/** 의료 면책 고지 — 모든 글 하단에 노출 (YMYL 필수) */
export const MEDICAL_DISCLAIMER =
  "이 글은 글쓴이가 직접 겪은 개인적인 경험 기록이며, 의학적 진단이나 치료를 대신할 수 없습니다. 같은 증상이라도 원인은 사람마다 다릅니다. 통증·증상이 있다면 반드시 의료진의 진료를 받으세요.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  `https://${SITE_DOMAIN}`;

export const GOOGLE_SITE_VERIFICATION =
  "YG1phv7_kh_MV7lNeiDmTZaKhebEHdySYocO85vrLz8";

export const GOOGLE_ANALYTICS_ID = "G-YNYS81PEJB";

export const GOOGLE_ADSENSE_CLIENT_ID = "ca-pub-2643737170468374";

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

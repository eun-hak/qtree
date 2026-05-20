export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface Post {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  slug: string;
  views: number;
  tags?: string[];
  readingTime?: number;
  coverImage?: string;
}

/** 단일 목록 카테고리 slug (헤더·URL 공통) */
export const LIST_CATEGORY_SLUG = "services";

import { POST_CONTENTS } from "./posts-content";

export const POSTS: Post[] = [
  {
    id: "1",
    title: "택배 배송조회 방법 — 송장번호로 상태 확인하기",
    summary:
      "CJ·한진·롯데·우체국 등 택배사별 배송조회 방법과 집하·배송출발·완료 상태 읽는 법을 단계별로 정리했습니다.",
    content: POST_CONTENTS["parcel-tracking-guide"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-20",
    slug: "parcel-tracking-guide",
    views: 0,
    tags: ["택배 배송조회", "송장번호", "배송조회", "택배 추적"],
    readingTime: 4,
  },
  {
    id: "2",
    title: "정부24 주민등록등본 인터넷 발급 — 준비물과 순서",
    summary:
      "정부24에서 주민등록등본·초본을 인터넷으로 발급받는 방법, 필요한 인증 수단, 등본·초본 차이를 안내합니다.",
    content: POST_CONTENTS["gov24-resident-registration-copy"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-19",
    slug: "gov24-resident-registration-copy",
    views: 0,
    tags: ["정부24", "주민등록등본", "인터넷 발급", "주민등록표"],
    readingTime: 5,
  },
  {
    id: "3",
    title: "크롬 팝업 차단 해제 — 공공·은행 사이트 인증 창이 안 열릴 때",
    summary:
      "크롬에서 특정 사이트 팝업 허용하는 방법과 설정 메뉴 경로, 그래도 안 될 때 점검할 항목을 정리했습니다.",
    content: POST_CONTENTS["chrome-popup-block-fix"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-18",
    slug: "chrome-popup-block-fix",
    views: 0,
    tags: ["크롬 팝업 차단", "팝업 허용", "브라우저 설정"],
    readingTime: 4,
  },
];

export const CATEGORIES: Category[] = [
  {
    id: "1",
    name: "생활서비스",
    slug: LIST_CATEGORY_SLUG,
    description:
      "택배·우편·공공서비스 발급, 신청·접수, 앱·도구 설정 등 일상에서 쓰는 온라인 서비스 사용법을 모았습니다.",
    count: POSTS.length,
  },
];

export const LIST_CATEGORY = CATEGORIES[0];

export function listCategoryPath(): string {
  return `/category/${LIST_CATEGORY_SLUG}`;
}

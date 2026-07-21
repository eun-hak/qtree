export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
  /** 매거진 섹션·메뉴에서 쓰는 이모지 아이콘(현재 UI는 lucide 라인 아이콘 사용) */
  emoji?: string;
}

export interface Faq {
  q: string;
  a: string;
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
  /** 글 하단 자주 묻는 질문 — FAQPage 구조화 데이터로도 노출 */
  faqs?: Faq[];
  /** 마지막으로 내용을 점검·갱신한 날짜(YYYY-MM-DD). 없으면 date 사용 */
  updated?: string;
}

import { POST_CONTENTS } from "./posts-content";

/**
 * 게시글 목록.
 *
 * 사이트 축: "운동·생활 속에서 겪은 염증과 통증을, 병원 진료와 함께 기록한다."
 * 이 축에 맞지 않는 주제는 쓰지 않습니다. (기획: docs/health-content-plan.md)
 *
 * 새 글 추가 순서:
 *   1) posts-content.ts 의 POST_CONTENTS 에 slug → 본문 HTML 추가
 *   2) 아래 POSTS 배열 맨 앞에 메타데이터 추가 (content: POST_CONTENTS["slug"])
 *   3) POST_CATEGORY 에 slug → 카테고리 매핑 추가
 *   4) 필요하면 POST_FAQS 에 slug → FAQ 추가
 */
export const POSTS: Post[] = [
  {
    id: "2",
    title:
      "골반 전방경사 허리 통증 — 병원 3곳 진단이 갈리고, 둔근 운동으로 나아지기까지",
    summary:
      "2021년 가벼운 교통사고 이후 심해진 허리 통증으로 30분도 앉기 힘들었습니다. 병원 3곳에서 진단이 갈렸고(2곳 퇴행성 디스크, 1곳 단순 통증) 스테로이드 주사도 효과가 없었습니다. 스스로 자료를 찾아 골반 전방경사를 알게 된 뒤, 중둔근 운동을 주 3~4회 두 달간 하며 회복한 기록입니다.",
    content: POST_CONTENTS["anterior-pelvic-tilt-back-pain-glute-recovery"],
    category: "pain",
    date: "2026-07-20",
    updated: "2026-07-20",
    slug: "anterior-pelvic-tilt-back-pain-glute-recovery",
    views: 0,
    tags: [
      "골반 전방경사",
      "허리 통증",
      "중둔근",
      "힙 어브덕션",
      "퇴행성 디스크",
      "앉는 자세",
    ],
    readingTime: 8,
  },

  {
    id: "1",
    title:
      "가슴 운동 중 생긴 늑연골염, 약으로 안 낫다가 흉근 마사지로 나아진 4개월 기록",
    summary:
      "인클라인 벤치프레스를 깊게 하다 생긴 가슴 통증으로 늑연골염 진단을 받았습니다. 1~2개월 방치, 소염제 3주와 침·물리치료로도 잘 낫지 않다가 겨드랑이 앞쪽 흉근을 마사지볼로 한 달간 풀면서 회복한 전체 경과를 기록했습니다.",
    content: POST_CONTENTS["costochondritis-chest-workout-massage-recovery"],
    category: "inflammation",
    date: "2026-07-20",
    updated: "2026-07-20",
    slug: "costochondritis-chest-workout-massage-recovery",
    views: 0,
    tags: [
      "늑연골염",
      "가슴 통증",
      "흉근 마사지",
      "인클라인 벤치프레스",
      "운동 부상",
      "염증",
    ],
    readingTime: 7,
  },
];

/**
 * 카테고리 정의 — 콘텐츠가 실제로 존재하는 분류만 노출합니다.
 * (글이 0편인 카테고리는 thin 페이지가 되므로 자동으로 숨겨집니다.)
 * 배열 순서 = 헤더 메뉴·홈 섹션 노출 순서.
 */
const CATEGORY_DEFS: Omit<Category, "count">[] = [
  {
    id: "inflammation",
    name: "염증 기록",
    slug: "inflammation",
    emoji: "🔥",
    description:
      "늑연골염·위염·식도염처럼 직접 겪은 염증의 증상과 진단 과정, 회복까지의 기록을 모았습니다.",
  },
  {
    id: "pain",
    name: "통증·자세",
    slug: "pain",
    emoji: "🦴",
    description:
      "운동 중 생긴 어깨 통증, 골반 전방경사로 인한 허리 통증 등 근골격계 통증을 겪으며 기록한 내용입니다.",
  },
  {
    id: "recovery",
    name: "회복 습관",
    slug: "recovery",
    emoji: "🌙",
    description:
      "수면과 식습관처럼 염증·통증의 회복에 영향을 준 생활 습관을 직접 바꿔보며 기록했습니다.",
  },
];

/** 글 slug → 카테고리 slug 매핑 (한 곳에서 관리) */
const POST_CATEGORY: Record<string, string> = {
  "costochondritis-chest-workout-massage-recovery": "inflammation",
  "anterior-pelvic-tilt-back-pain-glute-recovery": "pain",
};

// POSTS의 category 값을 분류표대로 일괄 재지정
for (const p of POSTS) {
  const c = POST_CATEGORY[p.slug];
  if (c) p.category = c;
}

/**
 * 글 slug → 자주 묻는 질문(FAQ) 매핑.
 * 여기에 추가하면 본문 데이터를 건드리지 않아도 FAQ + FAQPage 구조화 데이터가 적용됩니다.
 */
const POST_FAQS: Record<string, Faq[]> = {
  "anterior-pelvic-tilt-back-pain-glute-recovery": [
    {
      q: "병원마다 진단이 다르면 어떻게 해야 하나요?",
      a: "제 경우 3곳 중 2곳은 퇴행성 디스크, 1곳은 단순 통증이라고 했습니다. 우선 어떤 검사를 받았는지 확인해 보세요. 저는 세 곳 모두 X-ray만 찍었는데, 디스크 상태를 정확히 보려면 보통 MRI가 필요합니다. 진단이 엇갈리거나 오래 낫지 않는다면 추가 검사를 상의해 보시길 권합니다.",
    },
    {
      q: "허리가 아픈데 왜 엉덩이 운동을 하나요?",
      a: "제 체감으로는 둔근이 골반을 잡아주면서 허리 부담이 줄어드는 느낌이 확실했습니다. 다만 이건 제 경험이고, 원인에 따라 맞는 운동이 다릅니다. 특히 디스크 진단을 받았다면 운동 전에 반드시 의료진과 상의하세요.",
    },
    {
      q: "효과를 보기까지 얼마나 걸렸나요?",
      a: "힙 어브덕션을 주 3~4회 하면서 약 2개월쯤 되니 확실히 좋아졌습니다. 하루 이틀로는 변화가 없었고, 꾸준히 하는 게 중요했습니다.",
    },
    {
      q: "무게는 얼마로 하면 되나요?",
      a: "제 무게를 적지 않는 이유는 사람마다 근력과 상태가 달라 기준이 될 수 없기 때문입니다. 가벼운 무게로 자세를 먼저 잡고, 허리에 통증이 오면 즉시 낮추세요.",
    },
    {
      q: "운동만 하면 되나요? 자세는 안 바꿔도 되나요?",
      a: "제 경우 자세가 근본 원인이었다고 생각합니다. 등받이에 45도로 눕듯이 앉던 습관을 허리를 세워 앉는 것으로 바꿨습니다. 운동만 하고 자세를 그대로 뒀다면 다시 아팠을 거라고 봅니다.",
    },
  ],
  "costochondritis-chest-workout-massage-recovery": [
    {
      q: "늑연골염은 보통 얼마나 걸려 낫나요?",
      a: "사람마다 크게 다릅니다. 저는 통증이 시작되고 일상 통증이 거의 사라지기까지 약 4개월이 걸렸고, 그중 1~2개월은 방치한 기간이었습니다. 경과는 원인과 관리에 따라 달라지므로 진료받은 의료진의 설명을 기준으로 하세요.",
    },
    {
      q: "가슴이 아픈데 심장 문제인지 근육 문제인지 어떻게 구분하나요?",
      a: "스스로 확실히 구분하려 하지 마세요. 쥐어짜는 압박감, 왼팔·턱으로 뻗치는 통증, 식은땀, 호흡곤란이 있으면 즉시 응급실로 가야 합니다. 저는 운동 중 발생했고 가슴 근육을 쓸 때 아픈 양상이었지만, 심장 검사를 받지 않았던 건 지금 생각하면 아쉬운 부분입니다.",
    },
    {
      q: "아픈 부위를 직접 마사지해도 되나요?",
      a: "제가 푼 곳은 통증이 있던 갈비뼈 부위가 아니라 겨드랑이 앞쪽 가슴 근육입니다. 염증이 있는 부위를 직접 세게 누르면 악화될 수 있고, 갈비뼈에 강한 압력을 주는 것은 위험할 수 있습니다. 누른 뒤 통증이 더 심해지면 중단하세요.",
    },
    {
      q: "마사지는 얼마나 자주, 얼마나 세게 해야 하나요?",
      a: "저는 하루 3회, 회당 5분씩 한 달간 했고 시작 1주일쯤부터 편해졌습니다. 강도는 '시원하다'고 느껴지는 선까지였습니다. 다만 이건 제 기준이라, 통증이 다음 날까지 남거나 멍이 든다면 과한 것이니 강도를 낮추세요.",
    },
    {
      q: "지금은 운동을 다시 하나요?",
      a: "강도를 줄여서 하고 있습니다. 아직 애매한 느낌이 남아 있어 인클라인 벤치프레스를 예전처럼 깊게 내리지는 않습니다. 완치라고 말하기는 조심스러운 상태입니다.",
    },
  ],
};

// FAQ·갱신일 일괄 적용
for (const p of POSTS) {
  const f = POST_FAQS[p.slug];
  if (f) {
    p.faqs = f;
  }
}

/** 글이 1편 이상 있는 카테고리만 노출 (빈 카테고리 = thin 페이지 방지) */
export const CATEGORIES: Category[] = CATEGORY_DEFS.map((c) => ({
  ...c,
  count: POSTS.filter((p) => p.category === c.slug).length,
})).filter((c) => c.count > 0);

/** 아직 글이 없을 때도 소개용으로 쓸 전체 분류 정의 */
export const ALL_CATEGORY_DEFS = CATEGORY_DEFS;

/** 카테고리 페이지 경로 */
export function categoryPath(slug: string): string {
  return `/category/${slug}`;
}

/** 하위 호환용 "전체 글" 진입점 (not-found·search 등에서 참조) */
export const LIST_CATEGORY: Category = {
  id: "all",
  name: "전체 기록",
  slug: "",
  description: "염증·통증·회복 습관 전체 기록",
  count: POSTS.length,
};

export function listCategoryPath(): string {
  return "/";
}

/** 글 상세 URL (slug 기준) */
export function postPath(post: Pick<Post, "slug">): string {
  return `/post/${post.slug}`;
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** URL 세그먼트(slug 또는 예전 숫자 id)로 글 조회 */
export function getPostByParam(param: string): Post | undefined {
  const bySlug = getPostBySlug(param);
  if (bySlug) return bySlug;
  if (/^\d+$/.test(param)) {
    return POSTS.find((p) => p.id === param);
  }
  return undefined;
}

export function isLegacyNumericPostUrl(param: string): boolean {
  return /^\d+$/.test(param) && POSTS.some((p) => p.id === param);
}

// POST_CONTENTS는 글 추가 시 사용합니다(현재 글 0편).
void POST_CONTENTS;

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
  /** 매거진 섹션·메뉴에서 쓰는 이모지 아이콘 */
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

/** 단일 목록 카테고리 slug (헤더·URL 공통) */
export const LIST_CATEGORY_SLUG = "services";

import { POST_CONTENTS } from "./posts-content";

export const POSTS: Post[] = [
  {
    id: "55",
    title: "섞으면 위험한 세제 조합 총정리 — 락스·산성·암모니아·과산화수소",
    summary:
      "락스+산성(염소가스), 락스+암모니아(클로라민), 과산화수소+식초 등 가정에서 섞으면 유독가스가 발생하는 세제 조합과 증상, 흔한 실수 상황, 안전 원칙을 한 표로 정리했습니다.",
    content: POST_CONTENTS["cleaner-mixing-danger-guide"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-26",
    updated: "2026-06-26",
    slug: "cleaner-mixing-danger-guide",
    views: 0,
    tags: ["세제 안전","락스","염소가스","세제 혼합","구연산","과산화수소"],
    readingTime: 6,
  },

  {
    id: "54",
    title: "세제 산도(pH)별 정리 — 기름때엔 알칼리, 물때엔 산성",
    summary:
      "오염과 반대 성질의 세제로 중화하는 원리를 바탕으로, 과탄산소다·베이킹소다·주방세제·식초·구연산을 산도(pH)별로 나누고 각각 잘 듣는 오염과 주의할 재질을 표로 정리했습니다.",
    content: POST_CONTENTS["cleaner-ph-acid-alkaline-guide"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-25",
    updated: "2026-06-25",
    slug: "cleaner-ph-acid-alkaline-guide",
    views: 0,
    tags: ["세제 상식","산성 세제","알칼리 세제","구연산","과탄산소다","pH"],
    readingTime: 6,
  },

  {
    id: "53",
    title: "재질별 쓰면 안 되는 세제 — 손상 막는 안전표",
    summary:
      "알루미늄·천연대리석·원목·가죽·코팅 팬 등 재질마다 쓰면 변색·부식·손상되는 세제를 정리했습니다. 금지 세제와 안전한 대안, 그 이유를 재질별 표로 한눈에 담았습니다.",
    content: POST_CONTENTS["material-cleaner-safety-guide"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-24",
    updated: "2026-06-24",
    slug: "material-cleaner-safety-guide",
    views: 0,
    tags: ["세제 안전","재질별 청소","알루미늄","대리석","가죽","코팅팬"],
    readingTime: 6,
  },

  {
    id: "52",
    title: "베란다 우수관(배수관) 악취 및 벌레 트랩 활용 차단 청소법",
    summary:
      "베란다 우수관 악취·해충 유입 원인, 락스 살균·차단 트랩 원리, 환기·희석액 불림·솔 세척·헹굼·트랩 설치 순서, 찬물 사용·규격 측정·배수 점검 팁을 정리했습니다.",
    content: POST_CONTENTS["balcony-drain-trap-bleach-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-14",
    slug: "balcony-drain-trap-bleach-clean",
    views: 17,
    tags: ["우수관","베란다","락스","악취","배수관","욕실 청소"],
    readingTime: 7,
  },

  {
    id: "51",
    title: "기계식 키보드 및 마우스 손때(유분기) 알코올 활용 살균 청소법",
    summary:
      "키보드·마우스 손때·세균 번식 원인, 알코올 유분 용해·살균·휘발 원리, 전원 차단·먼지 제거·천 닦기·면봉 틈새·건조 순서, 액체 분사 금지·코팅 테스트·딥클리닝 주기 팁을 정리했습니다.",
    content: POST_CONTENTS["keyboard-mouse-alcohol-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-13",
    slug: "keyboard-mouse-alcohol-clean",
    views: 186,
    tags: ["키보드","마우스","알코올","손때","살균","전자기기 청소"],
    readingTime: 7,
  },

  {
    id: "50",
    title: "코팅 프라이팬 끈적한 기름때 밀가루 흡착 세척 및 시즈닝 관리법",
    summary:
      "코팅 팬 기름때·코팅 손상 원인, 밀가루 유분 흡착·오일 시즈닝 원리, 밀가루 문지르기·세척·가열·오일 코팅 순서, 철수세미 금지·발연점 높은 오일·급냉각 주의 팁을 정리했습니다.",
    content: POST_CONTENTS["coated-pan-flour-seasoning-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-12",
    updated: "2026-06-26",
    slug: "coated-pan-flour-seasoning-clean",
    views: 454,
    tags: ["프라이팬","밀가루","기름때","시즈닝","코팅팬","주방 청소"],
    readingTime: 6,
    faqs: [
      {
        q: "테플론(불소수지) 코팅 팬도 시즈닝을 해야 하나요?",
        a: "필수는 아닙니다. 시즈닝(기름 길들이기)은 무쇠·탄소강 팬에서 보호막을 만드는 과정이고, 불소수지 코팅 팬은 이미 코팅이 있어 보조적인 의미만 있습니다. 오히려 빈 팬을 고온으로 가열하면 코팅이 손상되고 약 260℃ 이상에서 유해 가스가 나올 수 있으므로, 코팅 팬은 약불·소량 기름 원칙을 지키는 것이 좋습니다.",
      },
      {
        q: "기름때를 닦을 때 밀가루 대신 베이킹소다를 써도 되나요?",
        a: "표면이 매끈한 코팅 팬에는 밀가루처럼 흡착해 떼어내는 방식이 더 안전합니다. 베이킹소다는 약한 연마 작용이 있어 무쇠·스테인리스에는 괜찮지만, 불소수지 코팅면을 반복해 문지르면 미세 스크래치가 생길 수 있습니다. 코팅 팬에는 가루를 문지르기보다 따뜻한 물에 불려 부드러운 스펀지로 닦는 편이 낫습니다.",
      },
      {
        q: "시즈닝에 올리브유를 써도 되나요?",
        a: "권장하지 않습니다. 엑스트라 버진 올리브유는 발연점이 약 160~190℃로 낮아 시즈닝 온도에서 연기가 나고 끈적한 막(폴리머)이 고르지 않게 생깁니다. 발연점이 높은 정제 카놀라유·포도씨유·아보카도유 같은 무향 오일을 아주 얇게 바르는 것이 깔끔합니다.",
      },
      {
        q: "코팅이 벗겨진 팬은 시즈닝으로 되살릴 수 있나요?",
        a: "되살릴 수 없습니다. 불소수지 코팅이 긁혀 회색 금속이 드러났다면 시즈닝으로 복구되지 않으며, 벗겨진 코팅 조각이 음식에 섞일 수 있어 교체가 안전합니다. 시즈닝으로 보호막을 다시 만들 수 있는 것은 코팅이 아니라 금속면 자체가 조리면인 무쇠·탄소강 팬입니다.",
      },
    ],
  },

  {
    id: "49",
    title: "비데 노즐 누런 때, 식초·베이킹소다로 안전하게 닦는 법",
    summary:
      "처음 노즐을 꺼냈다가 누런 때를 보고 닦기 시작했습니다. 강한 세제 대신 식초·베이킹소다를 쓴 이유와, 분사구를 찌르면 안 되는 이유까지 정리했습니다.",
    content: POST_CONTENTS["bidet-nozzle-vinegar-baking-soda-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-11",
    slug: "bidet-nozzle-vinegar-baking-soda-clean",
    views: 130,
    tags: ["비데","노즐 청소","식초","베이킹소다","욕실 청소"],
    readingTime: 7,
  },

  {
    id: "48",
    title: "다리미 누런 물 떨어질 때, 치약과 구연산으로 잡는 법",
    summary:
      "다리미에서 누런 물이 떨어지는 두 원인(바닥 탄 자국·스팀 구멍 석회질)을 치약과 구연산으로 잡는 법, 열판 소재별 치약 주의, 보관 요령까지 정리했습니다.",
    content: POST_CONTENTS["steam-iron-toothpaste-limescale-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-10",
    slug: "steam-iron-toothpaste-limescale-clean",
    views: 432,
    tags: ["스팀 다리미","치약","탄 자국","석회질","구연산"],
    readingTime: 5,
  },

  {
    id: "47",
    title: "강아지가 같은 자리에 실수할 때, 식초로 냄새 뿌리 없애기",
    summary:
      "닦아도 같은 자리에 반복하는 이유는 남은 암모니아 냄새였습니다. 식초로 중화하는 순서와, 마루를 상하지 않게 물기를 빨리 없애야 하는 이유를 정리했습니다.",
    content: POST_CONTENTS["pet-urine-vinegar-deodorize"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-09",
    slug: "pet-urine-vinegar-deodorize",
    views: 352,
    tags: ["반려동물","소변 탈취","식초","마룻바닥","거실 청소"],
    readingTime: 7,
  },

  {
    id: "46",
    title: "욕실 선반에 핀 붉은 녹, 케첩으로 긁지 않고 벗기기",
    summary:
      "욕실 금속 선반의 붉은 녹을 케첩(유기산)으로 녹여 떼는 법, 녹 정도별 케첩·콜라·구연산 선택, 철수세미 금지와 재발 막는 코팅까지 정리했습니다.",
    content: POST_CONTENTS["bathroom-rust-ketchup-restore"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-08",
    slug: "bathroom-rust-ketchup-restore",
    views: 227,
    tags: ["녹 제거","케첩","욕실 선반","금속 복원","욕실 청소"],
    readingTime: 5,
  },

  {
    id: "45",
    title: "무거워서 못 빠는 러그, 굵은 소금으로 건식 청소하는 법",
    summary:
      "물세탁이 힘든 대형 러그를 굵은 소금으로 건식 청소하는 원리와 순서, 맛소금·눅눅한 소금을 피해야 하는 이유, 박힌 얼룩 부분 처리법까지 정리했습니다.",
    content: POST_CONTENTS["rug-carpet-salt-dry-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-07",
    slug: "rug-carpet-salt-dry-clean",
    views: 231,
    tags: ["러그","카페트","굵은 소금","건식 세탁","거실 청소"],
    readingTime: 6,
  },

  {
    id: "44",
    title: "블라인드 먼지, 분리 없이 면장갑으로 닦는 법",
    summary:
      "블라인드 슬랫 먼지를 젖은 걸레 대신 면장갑으로 닦는 법과 그 원리, 우드·천·알루미늄·플라스틱 소재별 물기 주의를 정리했습니다.",
    content: POST_CONTENTS["blind-dust-cotton-glove-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-06",
    slug: "blind-dust-cotton-glove-clean",
    views: 57,
    tags: ["블라인드","면장갑","먼지 제거","우드 블라인드","창문 청소"],
    readingTime: 5,
  },

  {
    id: "43",
    title: "커버 못 빼는 패브릭 소파, 물 적게 쓰고 얼룩 빼기",
    summary:
      "커피를 쏟고 물을 부었다가 더 번진 경험에서 시작합니다. 수분을 최소화해 흡착으로 빼는 순서와, 시작 전 꼭 해야 할 테스트를 정리했습니다.",
    content: POST_CONTENTS["fabric-sofa-stain-spot-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-05",
    slug: "fabric-sofa-stain-spot-clean",
    views: 272,
    tags: ["패브릭 소파","얼룩 제거","중성 세제","거실 청소","소파 관리"],
    readingTime: 6,
  },

  {
    id: "42",
    title: "물세탁 안 되는 매트리스, 베이킹소다로 냄새·진드기 잡기",
    summary:
      "물세탁이 불가능한 매트리스를 베이킹소다 건식 청소로 습기·냄새·진드기 사체까지 잡는 순서와, 진드기는 열·건조에 약한 점, 청소기 필터 주의를 정리했습니다.",
    content: POST_CONTENTS["mattress-stain-dust-mite-dry-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-04",
    slug: "mattress-stain-dust-mite-dry-clean",
    views: 254,
    tags: ["매트리스","베이킹소다","진드기","건식 청소","침실 위생"],
    readingTime: 5,
  },

  {
    id: "41",
    title: "닦아도 다시 꼬질한 현관 타일, 코팅으로 끝내는 법",
    summary:
      "닦아도 다시 꼬질해지는 현관 타일을 청소 후 발수 코팅으로 막는 법, 타일 종류별 코팅제 선택, 완전 건조·논슬립 주의까지 정리했습니다.",
    content: POST_CONTENTS["entrance-tile-stain-coating"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-03",
    slug: "entrance-tile-stain-coating",
    views: 447,
    tags: ["현관 타일","발수 코팅","줄눈 청소","현관 관리","찌든 때"],
    readingTime: 7,
  },

  {
    id: "40",
    title: "파우더 쌓인 화장품 보관함, 알코올로 정리하고 라이너로 유지하기",
    summary:
      "보관함 바닥에 엉긴 가루를 보고 싹 정리했습니다. 물 대신 알코올을 쓴 이유와, 라이너로 청소를 줄이는 법, 아크릴 주의점을 정리했습니다.",
    content: POST_CONTENTS["cosmetic-storage-dust-hygiene"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-02",
    slug: "cosmetic-storage-dust-hygiene",
    views: 215,
    tags: ["화장품 보관함","알코올 살균","위생 관리","아크릴","정리 수납"],
    readingTime: 5,
  },

  {
    id: "39",
    title: "끈적해진 수저 서랍, 라이너 깔고 트레이로 끝내기",
    summary:
      "서랍 바닥이 끈적여 통째로 비웠습니다. 살균 후 라이너로 청소를 줄이는 법과, 물기 있는 도구를 넣으면 안 되는 이유를 정리했습니다.",
    content: POST_CONTENTS["kitchen-drawer-hygiene-storage"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-01",
    slug: "kitchen-drawer-hygiene-storage",
    views: 65,
    tags: ["주방 서랍","수납 정리","라이너","위생 관리","에탄올 살균"],
    readingTime: 4,
  },

  {
    id: "38",
    title: "장마철 신발장 곰팡이, 가죽 구두 상하지 않게 관리하는 법",
    summary:
      "신발장 냄새·곰팡이의 원인인 습기를 잡는 제습·탈취 순서와, 가죽에 핀 곰팡이를 안전하게 처리하는 법, 물·락스·직사광선 금지까지 정리했습니다.",
    content: POST_CONTENTS["shoe-cabinet-odor-leather-care"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-31",
    slug: "shoe-cabinet-odor-leather-care",
    views: 292,
    tags: ["신발장","가죽 신발","탈취","제습","곰팡이 방지"],
    readingTime: 6,
  },

  {
    id: "37",
    title: "옷장 곰팡이, 옷 간격 띄우고 비닐 벗겨 잡기",
    summary:
      "옷장 벽에 곰팡이가 번진 뒤 빽빽한 수납을 포기했습니다. 공기 흐름을 만드는 법과, 세탁소 비닐을 꼭 벗겨야 하는 이유를 정리했습니다.",
    content: POST_CONTENTS["closet-mold-airflow-storage"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-30",
    slug: "closet-mold-airflow-storage",
    views: 144,
    tags: ["옷장","곰팡이 방지","제습","공기 순환","의류 보관"],
    readingTime: 5,
  },

  {
    id: "36",
    title: "선풍기 먼지, 분해 없이 섬유유연제 물로 닦는 법",
    summary:
      "선풍기 안전망 먼지를 분해 없이 섬유유연제 물로 닦는 법과 원리, 두꺼운 먼지는 실외에서 먼저 털기, 전원 차단·모터 침수 주의까지 정리했습니다.",
    content: POST_CONTENTS["fan-grill-dust-clean-no-disassemble"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-29",
    slug: "fan-grill-dust-clean-no-disassemble",
    views: 434,
    tags: ["선풍기","먼지 제거","섬유유연제","전자기기 청소","분해 없이"],
    readingTime: 5,
  },

  {
    id: "35",
    title: "가습량 줄어든 가습기, 구연산으로 석회질 녹이기",
    summary:
      "분무량이 줄어 수조를 열었더니 석회질이 끼어 있었습니다. 주방세제 대신 구연산을 써야 하는 이유와, 진동자를 다루는 법을 정리했습니다.",
    content: POST_CONTENTS["humidifier-tank-limescale-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-28",
    slug: "humidifier-tank-limescale-clean",
    views: 49,
    tags: ["가습기","석회질","구연산","진동자","살균 세척"],
    readingTime: 7,
  },

  {
    id: "34",
    title: "종일 돌려도 안 마르는 제습기, 필터와 물탱크부터 보기",
    summary:
      "습도가 안 떨어져 제습기를 열었더니 필터가 막혀 있었습니다. 필터와 물탱크를 나눠 관리하는 순서와, 젖은 필터를 끼우면 안 되는 이유를 정리했습니다.",
    content: POST_CONTENTS["dehumidifier-filter-tank-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-27",
    slug: "dehumidifier-filter-tank-clean",
    views: 209,
    tags: ["제습기","필터 청소","물탱크","구연산","장마철"],
    readingTime: 5,
  },

  {
    id: "33",
    title: "빨래에서 쉰내 날 때, 세탁기 고무 패킹 곰팡이 잡기",
    summary:
      "깨끗이 빤 옷에서 냄새가 나 패킹을 들췄더니 곰팡이였습니다. 문지르기보다 습포가 효과적인 이유와, 락스를 절대 섞으면 안 되는 경고를 정리했습니다.",
    content: POST_CONTENTS["washer-gasket-mold-bleach-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-26",
    slug: "washer-gasket-mold-bleach-clean",
    views: 303,
    tags: ["세탁기","고무 패킹","곰팡이 제거","락스","드럼 세탁기"],
    readingTime: 4,
  },

  {
    id: "32",
    title: "그릇에서 비린내 날 때, 식기세척기 필터와 석회질 청소",
    summary:
      "그릇에서 비린내가 나 필터를 꺼냈더니 찌꺼기와 석회질이었습니다. 구연산 공회전의 원리와, 일반 세제를 넣으면 안 되는 이유를 정리했습니다.",
    content: POST_CONTENTS["dishwasher-limescale-filter-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-25",
    slug: "dishwasher-limescale-filter-clean",
    views: 133,
    tags: ["식기세척기","석회질","구연산","배수 필터","공회전"],
    readingTime: 4,
  },

  {
    id: "31",
    title: "방문 '끼익' 소리, 경첩에 바세린 발라 잡는 법",
    summary:
      "방문 경첩 '끼익' 소리를 잡는 윤활 방법과 WD-40(침투제)·바세린·식용유의 차이, 먼지를 먼저 닦고 소량만 발라야 하는 이유를 정리했습니다.",
    content: POST_CONTENTS["door-handle-hinge-squeak-lubricate"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-24",
    slug: "door-handle-hinge-squeak-lubricate",
    views: 144,
    tags: ["문 경첩","윤활제","소음 제거","바세린","문 손잡이"],
    readingTime: 6,
  },

  {
    id: "30",
    title: "겨울 창틀 결로와 곰팡이, 신문지로 불려 잡는 법",
    summary:
      "아침마다 고이는 결로와 실리콘 곰팡이를 잡았습니다. 굳은 먼지를 신문지로 불려 떼는 법과, 결로 자체를 줄이는 습도 관리를 정리했습니다.",
    content: POST_CONTENTS["window-frame-dust-condensation-mold"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-23",
    slug: "window-frame-dust-condensation-mold",
    views: 82,
    tags: ["창틀","결로 방지","곰팡이 제거","신문지","겨울 관리"],
    readingTime: 4,
  },

  {
    id: "29",
    title: "거뭇해진 스위치 커버, 물 안 쓰고 안전하게 닦기",
    summary:
      "스위치 손때를 물티슈로 닦으려다 멈칫했습니다. 전기 시설이라 수분을 최소화해야 하는 이유와, 콘센트 구멍에 액체가 들어가면 안 되는 경고를 정리했습니다.",
    content: POST_CONTENTS["outlet-switch-cover-safe-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-22",
    slug: "outlet-switch-cover-safe-clean",
    views: 477,
    tags: ["콘센트","스위치 커버","안전 청소","감전 예방","손때 제거"],
    readingTime: 5,
  },

  {
    id: "28",
    title: "뿌예진 벽지 먼지, 섬유유연제 물로 다시 안 붙게 닦기",
    summary:
      "흰 벽지가 뿌예져 마른걸레로 닦았다 금방 또 더러워졌습니다. 정전기를 잡는 섬유유연제 물 활용법과, 합지 벽지를 조심해야 하는 이유를 정리했습니다.",
    content: POST_CONTENTS["wallpaper-molding-dust-antistatic"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-22",
    slug: "wallpaper-molding-dust-antistatic",
    views: 402,
    tags: ["벽지","몰딩","정전기 방지","먼지 제거","섬유유연제"],
    readingTime: 4,
  },

  {
    id: "27",
    title: "방충망 먼지, 분리 없이 신문지로 안전하게 닦는 법",
    summary:
      "약한 방충망을 분리 없이 닦는 법 — 세제 물 + 반대편 신문지, 가벼운 먼지는 돌돌이·스펀지 건식, 고층 추락·강풍 주의까지 정리했습니다.",
    content: POST_CONTENTS["window-screen-dust-bug-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-21",
    slug: "window-screen-dust-bug-clean",
    views: 64,
    tags: ["방충망","먼지 제거","벌레 사체","신문지","창문 청소"],
    readingTime: 7,
  },

  {
    id: "26",
    title: "텀블러 뚜껑 냄새, 패킹 분리해 곰팡이 뿌리 뽑기",
    summary:
      "잘 씻은 텀블러 뚜껑에서 냄새가 나 패킹을 뺐더니 곰팡이였습니다. 겉닦기와 분리 침지의 차이, 물 온도와 건조가 관건인 이유를 정리했습니다.",
    content: POST_CONTENTS["tumbler-lid-silicone-packing-mold-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-21",
    slug: "tumbler-lid-silicone-packing-mold-clean",
    views: 417,
    tags: ["텀블러","실리콘 패킹","곰팡이 제거","과탄산소다","위생 관리"],
    readingTime: 4,
  },
  {
    id: "25",
    title: "갈색으로 물든 텀블러, 베이킹소다로 담가서 빼기",
    summary:
      "스테인리스 텀블러 안쪽 커피 얼룩을 베이킹소다·과탄산소다로 담가 빼는 법과 얼룩 강도별 선택, 락스(염소계)를 피해야 하는 이유를 정리했습니다.",
    content: POST_CONTENTS["tumbler-coffee-stain-baking-soda-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-20",
    slug: "tumbler-coffee-stain-baking-soda-clean",
    views: 190,
    tags: ["텀블러","커피 얼룩","베이킹소다","스테인리스","냄새 제거"],
    readingTime: 4,
  },
  {
    id: "24",
    title: "누레진 운동화 끈, 과탄산소다로 새것처럼 표백하기",
    summary:
      "운동화는 깨끗한데 끈만 누레서 따로 표백했습니다. 표면만 닦으면 안 되는 이유와 지퍼백 침지법, 완전 건조 후 끼워야 하는 이유를 정리했습니다.",
    content: POST_CONTENTS["white-shoelace-yellow-bleach"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-19",
    slug: "white-shoelace-yellow-bleach",
    views: 308,
    tags: ["운동화 끈","황변","과탄산소다","표백","신발 관리"],
    readingTime: 4,
  },
  {
    id: "23",
    title: "꼬질해진 흰 운동화, 폼클렌징으로 닦는 법",
    summary:
      "전용 세제 없이 폼클렌징으로 흰 운동화를 닦는 원리와 순서, 캔버스·가죽·스웨이드 소재별 강도, 그늘 건조·충분한 헹굼의 중요성을 정리했습니다.",
    content: POST_CONTENTS["white-sneaker-foam-cleanser-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-18",
    slug: "white-sneaker-foam-cleanser-clean",
    views: 194,
    tags: ["흰 운동화","폼클렌징","밑창 청소","신발 세탁","얼룩 제거"],
    readingTime: 7,
  },
  {
    id: "22",
    title: "옷에 붙은 껌, 얼려서 떼고 아세톤으로 마무리하기",
    summary:
      "지하철에서 바지에 붙은 껌을 손으로 떼다 더 박았습니다. 얼음으로 굳혀 떼고 아세톤으로 잔여물 빼는 순서와, 아세테이트·진한 색 옷 테스트를 정리했습니다.",
    content: POST_CONTENTS["gum-stain-ice-acetone-remove"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-17",
    slug: "gum-stain-ice-acetone-remove",
    views: 166,
    tags: ["껌 제거","얼음","아세톤","의류 얼룩","응급 처치"],
    readingTime: 7,
  },
  {
    id: "21",
    title: "세탁 후 줄어든 니트, 린스로 사이즈 되살리는 법",
    summary:
      "세탁기에 잘못 돌려 줄어든 니트를 린스로 복구했습니다. 린스가 섬유를 푸는 원리와, 옷걸이에 걸면 다시 늘어나는 건조 실수를 정리했습니다.",
    content: POST_CONTENTS["shrunken-knit-rinse-restore"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-16",
    slug: "shrunken-knit-rinse-restore",
    views: 273,
    tags: ["니트 복구","린스","수축","울 세탁","의류 관리"],
    readingTime: 5,
  },
  {
    id: "20",
    title: "납작해진 패딩, 집에서 빨고 털 숨 살리는 법",
    summary:
      "드라이만 맡기다 납작해진 패딩을 집에서 빨았습니다. 드라이와 물세탁을 언제 나눠야 하는지와, 페트병으로 볼륨을 되살리는 법을 정리했습니다.",
    content: POST_CONTENTS["puffer-jacket-home-wash-down-restore"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-15",
    slug: "puffer-jacket-home-wash-down-restore",
    views: 342,
    tags: ["패딩 세탁","오리털","볼륨 복원","울 코스","겨울 의류"],
    readingTime: 5,
  },
  {
    id: "19",
    title: "장마철 수건 쉰내, 삶지 않고 구연산으로 잡기",
    summary:
      "세제를 늘려도 반복되던 수건 쉰내를 구연산으로 잡았습니다. 모락셀라균이 산성에 약한 원리와, 섬유유연제를 피하고 빨리 말려야 하는 이유를 정리했습니다.",
    content: POST_CONTENTS["musty-towel-citric-acid-wash"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-14",
    slug: "musty-towel-citric-acid-wash",
    views: 428,
    tags: ["수건 쉰내","구연산","모락셀라균","살균 세탁","장마철"],
    readingTime: 5,
  },
  {
    id: "18",
    title: "옷에 묻은 핏자국, 과산화수소로 찬물에 빼는 법",
    summary:
      "아이 코피 자국을 과산화수소로 뺐습니다. 뜨거운 물을 쓰면 안 되는 이유와 거품으로 빼는 순서, 색깔 옷 테스트가 필요한 점을 정리했습니다.",
    content: POST_CONTENTS["blood-stain-hydrogen-peroxide-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-13",
    slug: "blood-stain-hydrogen-peroxide-clean",
    views: 266,
    tags: ["핏자국","과산화수소","찬물 세탁","단백질 얼룩","얼룩 제거"],
    readingTime: 6,
  },
  {
    id: "17",
    title: "흰옷에 쏟은 커피, 갈색 자국 남기 전에 빼는 법",
    summary:
      "물로 헹궈도 안 지워지는 커피 자국을 잡았습니다. 그냥 물론 안 되고 알칼리를 더해야 하는 이유와, 얼룩 남은 채 건조기에 넣으면 안 되는 점을 정리했습니다.",
    content: POST_CONTENTS["coffee-stain-emergency-wash"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-12",
    slug: "coffee-stain-emergency-wash",
    views: 347,
    tags: ["커피 얼룩","응급 세탁","베이킹소다","타닌","얼룩 제거"],
    readingTime: 5,
  },
  {
    id: "16",
    title: "누레진 흰 티 목둘레, 과탄산소다로 다시 하얗게",
    summary:
      "흰 티 목둘레 황변을 과탄산소다로 표백하는 법과 강도별 처리, 면에만 써야 하는(울·실크 금지) 이유와 담금 시간 주의를 정리했습니다.",
    content: POST_CONTENTS["white-tshirt-collar-yellow-bleach"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-11",
    slug: "white-tshirt-collar-yellow-bleach",
    views: 378,
    tags: ["흰 티셔츠","황변","과탄산소다","목둘레","표백"],
    readingTime: 6,
  },
  {
    id: "15",
    title: "욕조 분홍 물때, 누런 때와 나눠서 잡는 법",
    summary:
      "욕조 구석 분홍 띠는 세라티아균이었습니다. 누런 때와 분홍 물때를 다르게 처리해야 하는 이유와, 물기 제거가 재발 방지 핵심인 점을 정리했습니다.",
    content: POST_CONTENTS["bathtub-stain-serratia-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-10",
    slug: "bathtub-stain-serratia-clean",
    views: 359,
    tags: ["욕조","분홍 물때","세라티아균","락스","욕실 청소"],
    readingTime: 7,
  },
  {
    id: "14",
    title: "덜덜거리는 화장실 환풍기, 먼지 걷어 소음 줄이기",
    summary:
      "화장실 환풍기 소음·습기 저하의 원인인 먼지 쏠림을 잡는 청소법과, 날개 분해 가능 여부별 접근, 전원 차단·모터 노후 교체 판단을 정리했습니다.",
    content: POST_CONTENTS["bathroom-exhaust-fan-clean-noise"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-09",
    slug: "bathroom-exhaust-fan-clean-noise",
    views: 388,
    tags: ["화장실 환풍기","소음","먼지 제거","분해 청소","욕실 관리"],
    readingTime: 5,
  },
  {
    id: "13",
    title: "뿌연 욕실 거울, 구연산으로 닦고 린스로 김서림 막기",
    summary:
      "샤워 후 안 보이는 거울을 두 단계로 잡았습니다. 물때는 구연산, 김서림은 린스로 역할이 다른 이유와, 코팅을 얇게 해야 하는 이유를 정리했습니다.",
    content: POST_CONTENTS["bathroom-mirror-scale-rinse-antifog"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-08",
    slug: "bathroom-mirror-scale-rinse-antifog",
    views: 86,
    tags: ["욕실 거울","물때","구연산","김서림 방지","린스"],
    readingTime: 7,
  },
  {
    id: "12",
    title: "물 안 내려가는 세면대, 머리카락 녹여 뚫는 법",
    summary:
      "물이 찔끔거려 배수구를 보니 머리카락 뭉치였습니다. 뚫는 도구로 안 되는 이유와 단백질을 녹이는 순서, 너무 뜨거운 물을 피해야 하는 이유를 정리했습니다.",
    content: POST_CONTENTS["bathroom-sink-drain-hair-unclog"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-07",
    slug: "bathroom-sink-drain-hair-unclog",
    views: 128,
    tags: ["세면대","배수구 막힘","머리카락","세정제","욕실 청소"],
    readingTime: 5,
  },
  {
    id: "11",
    title: "변기 누런 띠, 솔 말고 산성 세제로 녹여 빼기",
    summary:
      "솔로 문질러도 안 빠지던 변기 누런 띠는 요석이었습니다. 긁지 말고 산으로 녹여야 하는 이유와, 미리 발라 두는 예방 습관을 정리했습니다.",
    content: POST_CONTENTS["toilet-bowl-uric-scale-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-06",
    slug: "toilet-bowl-uric-scale-clean",
    views: 497,
    tags: ["변기","요석","구연산","산성 세제","욕실 청소"],
    readingTime: 7,
  },
  {
    id: "10",
    title: "약해진 샤워기 수압, 구연산으로 물때 뚫는 법",
    summary:
      "수압이 약해져 샤워기 헤드를 보니 물때가 막고 있었습니다. 수전엔 락스보다 구연산이 맞는 이유와, 물때 재발을 막는 습관을 정리했습니다.",
    content: POST_CONTENTS["faucet-showerhead-citric-acid-scale-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-05",
    slug: "faucet-showerhead-citric-acid-scale-clean",
    views: 172,
    tags: ["수전","샤워기 헤드","물때","구연산","욕실 청소"],
    readingTime: 6,
  },
  {
    id: "9",
    title: "욕실 줄눈 검은 곰팡이, 락스 밀착으로 뿌리 뽑기",
    summary:
      "솔로 문질러도 안 빠지던 줄눈 곰팡이를 잡았습니다. 표면만 닦으면 안 되는 이유와 락스를 밀착시키는 법, 절대 섞으면 안 되는 경고를 정리했습니다.",
    content: POST_CONTENTS["bathroom-grout-mold-bleach-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-04",
    slug: "bathroom-grout-mold-bleach-clean",
    views: 404,
    tags: ["욕실 곰팡이","타일 줄눈","실리콘","락스","곰팡이 제거"],
    readingTime: 7,
  },
  {
    id: "8",
    title: "인덕션 상판 탄 자국, 행주로 긁지 말고 전용 세제로",
    summary:
      "인덕션 세라믹 상판 탄 자국을 흠집 없이 닦는 법 — 연마제를 피하고 전용 세제·전용 스크래퍼로 녹여 미는 순서, 도구 가부와 예방 습관을 정리했습니다.",
    content: POST_CONTENTS["induction-cooktop-burnt-stain-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-03",
    slug: "induction-cooktop-burnt-stain-clean",
    views: 8,
    tags: ["인덕션","하이라이트","탄 자국","전용 세제","상판 보호"],
    readingTime: 6,
  },
  {
    id: "7",
    title: "에어프라이어 쩐내, 코팅 안 벗기고 기름때 닦는 법",
    summary:
      "오랜만에 연 에어프라이어 쩐내에서 시작합니다. 철수세미가 코팅을 벗기는 이유와, 레몬 공회전으로 열선을 닦는 법, 호일 화재 주의점을 정리했습니다.",
    content: POST_CONTENTS["air-fryer-grease-coating-care"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-02",
    slug: "air-fryer-grease-coating-care",
    views: 250,
    tags: ["에어프라이어","기름때","코팅 보호","열선 청소","주방 가전"],
    readingTime: 7,
  },
  {
    id: "6",
    title: "냉동실 성에와 냉장고 냄새, 긁지 않고 잡는 법",
    summary:
      "냉동실 성에와 냉장고 냄새를 잡는 법 — 성에를 긁으면 안 되는 이유와 안전한 자연 해동 순서, 성에 원인(정상·고장) 구분, 베이킹소다 탈취까지 정리했습니다.",
    content: POST_CONTENTS["refrigerator-frost-odor-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-01",
    slug: "refrigerator-frost-odor-clean",
    views: 215,
    tags: ["냉장고","성에 제거","탈취","베이킹소다","주방 가전"],
    readingTime: 4,
  },
  {
    id: "5",
    title: "거름망 비워도 꼬이는 초파리, 배관 속부터 잡기",
    summary:
      "거름망을 비워도 초파리가 끊이질 않아 배관 안쪽을 청소했습니다. 베이킹소다·식초 발포와 끓는 물 살균의 원리, 환기·화상 주의점을 정리했습니다.",
    content: POST_CONTENTS["sink-drain-odor-fruit-fly-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-04-30",
    slug: "sink-drain-odor-fruit-fly-clean",
    views: 25,
    tags: ["싱크대 배수구","초파리","악취 제거","베이킹소다","열수 소독"],
    readingTime: 5,
  },
  {
    id: "1",
    title: "새까맣게 탄 냄비, 철수세미 말고 베이킹소다로 불려 빼기",
    summary:
      "새까맣게 탄 냄비를 긁지 않고 베이킹소다로 끓여 불려 떼는 법, 안쪽·바깥 면 접근 차이, 알루미늄 냄비엔 쓰면 안 되는 이유를 정리했습니다.",
    content: POST_CONTENTS["burnt-pot-baking-soda-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-04-29",
    slug: "burnt-pot-baking-soda-clean",
    views: 187,
    tags: ["탄 냄비","베이킹소다","냄비 세척","스테인리스","주방 청소"],
    readingTime: 6,
  },
  {
    id: "2",
    title: "연기 안 빠지는 주방 후드, 과탄산소다로 기름때 녹이기",
    summary:
      "환기가 안 돼 후드 필터를 떼니 기름으로 막혀 있었습니다. 과탄산소다와 끓는 물로 녹이는 순서와, 알루미늄 필터엔 쓰면 안 되는 이유를 정리했습니다.",
    content: POST_CONTENTS["hood-grease-percarbonate-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-04-28",
    slug: "hood-grease-percarbonate-clean",
    views: 67,
    tags: ["주방 후드","기름때","과탄산소다","필터 청소","주방 청소"],
    readingTime: 7,
  },
  {
    id: "3",
    title: "말라붙은 전자레인지 양념, 수증기로 불려 닦는 법",
    summary:
      "전자레인지에 굳은 양념을 수증기로 불려 닦는 법과 식초를 더하는 이유, 냄새·기름때 목적별 재료 선택, 금속 수세미 스파크 위험을 정리했습니다.",
    content: POST_CONTENTS["microwave-steam-vinegar-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-04-27",
    slug: "microwave-steam-vinegar-clean",
    views: 346,
    tags: ["전자레인지","수증기","식초","찌든 때","주방 가전"],
    readingTime: 7,
  },
];

/**
 * 카테고리 정의 — 콘텐츠가 실제로 존재하는 5개 분류.
 * (빈 카테고리는 thin 페이지가 되어 역효과이므로 만들지 않습니다.)
 * 배열 순서 = 헤더 메뉴·홈 섹션 노출 순서.
 */
const CATEGORY_DEFS: Omit<Category, "count">[] = [
  {
    id: "kitchen",
    name: "주방",
    slug: "kitchen",
    emoji: "🍳",
    description:
      "프라이팬·냄비·후드·전자레인지·인덕션·냉장고 등 주방 기구와 공간의 청소·관리 방법을 모았습니다.",
  },
  {
    id: "bathroom",
    name: "욕실",
    slug: "bathroom",
    emoji: "🚿",
    description:
      "변기·욕조·줄눈 곰팡이·거울 물때·샤워기·환풍기 등 욕실 청소·관리 방법을 모았습니다.",
  },
  {
    id: "laundry",
    name: "세탁·의류",
    slug: "laundry",
    emoji: "👕",
    description:
      "운동화·니트·패딩·수건·각종 얼룩 제거 등 세탁과 의류 관리 방법을 모았습니다.",
  },
  {
    id: "appliance",
    name: "가전",
    slug: "appliance",
    emoji: "🔌",
    description:
      "키보드·선풍기·가습기·제습기·세탁기·다리미 등 생활가전 청소·관리 방법을 모았습니다.",
  },
  {
    id: "living",
    name: "생활공간",
    slug: "living",
    emoji: "🛋️",
    description:
      "러그·소파·매트리스·현관·창틀·벽지·신발장·옷장 등 집안 공간 관리 방법을 모았습니다.",
  },
  {
    id: "safety",
    name: "세제·안전상식",
    slug: "safety",
    emoji: "🧪",
    description:
      "섞으면 위험한 세제 조합, 산도(pH)별 세제 선택, 재질별 사용 금지 세제 등 청소 전 꼭 알아야 할 안전 기준을 모았습니다.",
  },
];

/** 글 slug → 카테고리 slug 매핑 (한 곳에서 관리) */
const POST_CATEGORY: Record<string, string> = {
  // 세제·안전상식 (레퍼런스 허브)
  "cleaner-mixing-danger-guide": "safety",
  "cleaner-ph-acid-alkaline-guide": "safety",
  "material-cleaner-safety-guide": "safety",
  // 주방
  "coated-pan-flour-seasoning-clean": "kitchen",
  "kitchen-drawer-hygiene-storage": "kitchen",
  "tumbler-lid-silicone-packing-mold-clean": "kitchen",
  "tumbler-coffee-stain-baking-soda-clean": "kitchen",
  "induction-cooktop-burnt-stain-clean": "kitchen",
  "air-fryer-grease-coating-care": "kitchen",
  "refrigerator-frost-odor-clean": "kitchen",
  "sink-drain-odor-fruit-fly-clean": "kitchen",
  "burnt-pot-baking-soda-clean": "kitchen",
  "hood-grease-percarbonate-clean": "kitchen",
  "microwave-steam-vinegar-clean": "kitchen",
  // 욕실
  "bidet-nozzle-vinegar-baking-soda-clean": "bathroom",
  "bathroom-rust-ketchup-restore": "bathroom",
  "bathtub-stain-serratia-clean": "bathroom",
  "bathroom-exhaust-fan-clean-noise": "bathroom",
  "bathroom-mirror-scale-rinse-antifog": "bathroom",
  "bathroom-sink-drain-hair-unclog": "bathroom",
  "toilet-bowl-uric-scale-clean": "bathroom",
  "faucet-showerhead-citric-acid-scale-clean": "bathroom",
  "bathroom-grout-mold-bleach-clean": "bathroom",
  // 세탁·의류
  "white-shoelace-yellow-bleach": "laundry",
  "white-sneaker-foam-cleanser-clean": "laundry",
  "gum-stain-ice-acetone-remove": "laundry",
  "shrunken-knit-rinse-restore": "laundry",
  "puffer-jacket-home-wash-down-restore": "laundry",
  "musty-towel-citric-acid-wash": "laundry",
  "blood-stain-hydrogen-peroxide-clean": "laundry",
  "coffee-stain-emergency-wash": "laundry",
  "white-tshirt-collar-yellow-bleach": "laundry",
  // 가전
  "keyboard-mouse-alcohol-clean": "appliance",
  "steam-iron-toothpaste-limescale-clean": "appliance",
  "fan-grill-dust-clean-no-disassemble": "appliance",
  "humidifier-tank-limescale-clean": "appliance",
  "dehumidifier-filter-tank-clean": "appliance",
  "washer-gasket-mold-bleach-clean": "appliance",
  "dishwasher-limescale-filter-clean": "appliance",
  // 생활공간
  "balcony-drain-trap-bleach-clean": "living",
  "pet-urine-vinegar-deodorize": "living",
  "rug-carpet-salt-dry-clean": "living",
  "blind-dust-cotton-glove-clean": "living",
  "fabric-sofa-stain-spot-clean": "living",
  "mattress-stain-dust-mite-dry-clean": "living",
  "entrance-tile-stain-coating": "living",
  "cosmetic-storage-dust-hygiene": "living",
  "shoe-cabinet-odor-leather-care": "living",
  "closet-mold-airflow-storage": "living",
  "door-handle-hinge-squeak-lubricate": "living",
  "window-frame-dust-condensation-mold": "living",
  "outlet-switch-cover-safe-clean": "living",
  "wallpaper-molding-dust-antistatic": "living",
  "window-screen-dust-bug-clean": "living",
};

// POSTS의 category 값을 분류표대로 일괄 재지정
for (const p of POSTS) {
  const c = POST_CATEGORY[p.slug];
  if (c) p.category = c;
}

/**
 * 글 slug → 자주 묻는 질문(FAQ) 매핑.
 * 레퍼런스 표준으로 재작성한 글에만 채웁니다. FAQPage 구조화 데이터로도 노출됩니다.
 * (재작성 시 여기에 추가하면 본문 데이터 엔트리를 건드리지 않아도 됩니다.)
 */
const POST_FAQS: Record<string, Faq[]> = {
  "cleaner-mixing-danger-guide": [
    {
      q: "락스와 식초를 아주 조금만 섞어도 위험한가요?",
      a: "네. 소량이라도 염소가스가 발생할 수 있고, 환기가 안 되는 욕실 같은 공간에서는 적은 양도 위험합니다. 절대 섞지 말고 한 가지만 쓰세요.",
    },
    {
      q: "세제를 바꿔 쓸 때는 어떻게 해야 하나요?",
      a: "한 세제로 청소한 뒤 물로 충분히 헹궈 잔여물을 없앤 다음, 완전히 마른 상태에서 다른 세제를 쓰세요. 같은 자리에 연달아 다른 계열을 쓰면 잔류물끼리 반응할 수 있습니다.",
    },
  ],
  "cleaner-ph-acid-alkaline-guide": [
    {
      q: "오염 종류를 모를 땐 어떤 세제를 쓰나요?",
      a: "중성 세제(주방세제)로 시작하는 것이 가장 안전합니다. 그래도 안 지워지면 기름때·찌든때는 알칼리(베이킹소다), 물때·요석은 산성(구연산)으로 좁혀 가세요.",
    },
    {
      q: "베이킹소다와 식초를 같이 쓰면 더 강력하지 않나요?",
      a: "거품은 일지만 약알칼리와 산이 서로 중화되어 세정력이 오히려 떨어집니다. 둘은 용도가 달라 각각 따로 써야 효과적입니다.",
    },
  ],
  "material-cleaner-safety-guide": [
    {
      q: "재질을 모를 때는 어떻게 확인하나요?",
      a: "눈에 띄지 않는 구석에 소량 발라 1~2분 뒤 변색·얼룩을 확인하는 것이 가장 안전합니다. 제품 바닥의 재질 표기나 제조사 안내도 함께 보세요.",
    },
    {
      q: "천연 대리석에 식초를 쓰면 안 되는 이유가 뭔가요?",
      a: "대리석(탄산칼슘)은 산과 반응해 표면이 부식되고 광택이 사라집니다(에칭). 물때가 끼어도 산성 세제 대신 대리석 전용 중성 세제를 써야 합니다.",
    },
  ],
  "kitchen-drawer-hygiene-storage": [
    {
      q: "서랍 라이너로 신문지를 써도 되나요?",
      a: "임시로는 가능하지만 신문 잉크가 묻어날 수 있어 수저·식품이 직접 닿는 면에는 권하지 않습니다. 종이 호일이나 전용 라이너, 펠트 깔개가 더 안전합니다.",
    },
    {
      q: "끈적임이 심한데 물청소만 해도 되나요?",
      a: "굳은 유증기 때는 물만으로는 잘 풀리지 않습니다. 주방세제를 푼 미온수로 닦은 뒤 에탄올로 마무리 살균하고, 완전히 말린 다음 도구를 넣으세요.",
    },
  ],
  "burnt-pot-baking-soda-clean": [
    {
      q: "베이킹소다와 식초를 처음부터 같이 넣으면 더 강력한가요?",
      a: "아닙니다. 둘을 바로 섞으면 서로 중화되어 세정력이 오히려 떨어집니다. 베이킹소다 물로 먼저 끓여 불린 뒤, 남은 자국에만 식초를 소량 더하는 순서가 효과적입니다.",
    },
    {
      q: "코팅(불소수지) 냄비도 베이킹소다로 끓여도 되나요?",
      a: "끓여서 불리는 것 자체는 가능하지만, 가루로 문지르면 코팅이 상합니다. 페이스트로 불려 부드러운 스펀지로만 닦으세요. 알루미늄(양은) 냄비에는 알칼리 자체가 금지입니다.",
    },
  ],
  "hood-grease-percarbonate-clean": [
    {
      q: "과탄산소다 대신 베이킹소다를 써도 되나요?",
      a: "가능하지만 세정력이 약합니다. 굳은 후드 기름때에는 강알칼리인 과탄산소다가 효과적입니다. 단, 둘 다 알루미늄 필터에는 사용하면 안 됩니다.",
    },
    {
      q: "후드 필터는 얼마나 자주 청소해야 하나요?",
      a: "사용 빈도에 따라 다르지만 보통 1~2개월에 한 번이 적당합니다. 요리할 때 연기가 잘 안 빠지기 시작하면 막힘 신호입니다.",
    },
  ],
  "microwave-steam-vinegar-clean": [
    {
      q: "식초 냄새가 부담스러운데 대체할 수 있나요?",
      a: "네. 레몬·귤껍질을 띄운 물을 끓여도 세정력은 비슷하고 향이 상큼합니다. 냄새 제거가 목적이라면 레몬이 오히려 낫습니다.",
    },
    {
      q: "회전 유리판도 같이 넣고 돌려도 되나요?",
      a: "유리판은 본체에 둔 채로 가열하고, 청소는 따로 빼서 중성세제로 세척하세요. 식기세척기 사용 가능 여부는 제품 표기에서 확인하세요.",
    },
  ],
  "sink-drain-odor-fruit-fly-clean": [
    {
      q: "락스를 부으면 더 확실하지 않나요?",
      a: "살균력은 강하지만 다른 세제와 섞이면 유독가스 위험이 있고 배관·정화조에 부담을 줍니다. 베이킹소다+식초+열수로 충분하며 더 안전합니다.",
    },
    {
      q: "끓는 물을 부으면 배관이 상하지 않나요?",
      a: "스테인리스·일반 PVC 배수관은 일시적인 열수에 견딥니다. 다만 노후 배관이나 일부 플라스틱은 변형될 수 있어, 걱정되면 70~80℃ 정도로 낮춰 붓습니다.",
    },
  ],
  "refrigerator-frost-odor-clean": [
    {
      q: "드라이기로 성에를 녹여도 되나요?",
      a: "가능하지만 물이 전기부에 닿지 않게 주의하고 한 곳에 열을 오래 가하지 마세요. 가장 안전한 것은 전원을 끄고 자연 해동하는 방법입니다.",
    },
    {
      q: "베이킹소다 탈취제는 얼마나 자주 갈아야 하나요?",
      a: "보통 2~3개월에 한 번 교체하면 흡착력이 유지됩니다. 냄새가 다시 나기 시작하면 교체 신호입니다.",
    },
  ],
  "air-fryer-grease-coating-care": [
    {
      q: "바스켓을 식기세척기에 넣어도 되나요?",
      a: "제품에 따라 다릅니다. 식기세척기 사용 가능 표기가 있으면 되지만, 고온·강알칼리 세제가 코팅을 약하게 할 수 있어 손세척이 더 오래갑니다.",
    },
    {
      q: "열선에 눌어붙은 기름은 직접 닦아도 되나요?",
      a: "전원을 빼고 완전히 식힌 뒤 물 묻힌 천으로 살짝만 닦으세요. 열선을 세게 문지르거나 물을 붓는 것은 금물입니다. 레몬물 공회전으로 불리는 방법이 안전합니다.",
    },
  ],
  "induction-cooktop-burnt-stain-clean": [
    {
      q: "멜라민 스펀지(매직블록)로 닦아도 되나요?",
      a: "권하지 않습니다. 멜라민 스펀지도 미세 연마 작용이 있어 광택면에 흠집을 낼 수 있습니다. 전용 세제나 베이킹소다 페이스트가 안전합니다.",
    },
    {
      q: "전용 스크래퍼가 없으면 칼로 긁어도 되나요?",
      a: "안 됩니다. 칼날은 상판을 긁습니다. 전용 스크래퍼를 30도로 눕혀 쓰거나, 세제로 충분히 불려 부드럽게 닦으세요.",
    },
  ],
  "tumbler-coffee-stain-baking-soda-clean": [
    {
      q: "텀블러를 식기세척기에 돌려도 되나요?",
      a: "진공 단열 텀블러는 고온에 단열 성능이 떨어질 수 있어 손세척을 권장하는 제품이 많습니다. 제품 표기를 확인하세요.",
    },
    {
      q: "베이킹소다 대신 치약으로 닦아도 되나요?",
      a: "소량의 연마제가 있어 가벼운 얼룩은 지워지지만, 향·계면활성제가 남기 쉽고 광택면에 미세 흠집을 낼 수 있어 베이킹소다 침지가 낫습니다.",
    },
  ],
  "tumbler-lid-silicone-packing-mold-clean": [
    {
      q: "패킹에 락스를 써도 되나요?",
      a: "단시간 희석 침지는 가능하나 헹굼을 매우 충분히 해야 하고, 실리콘이 변색·경화될 수 있습니다. 과탄산소다 침지가 더 무난합니다.",
    },
    {
      q: "곰팡이가 계속 재발하는데 패킹을 교체해야 하나요?",
      a: "침지·건조를 반복해도 검은 점이 고무 안쪽까지 박혔다면 교체가 답입니다. 호환 패킹은 보통 저렴하게 구할 수 있습니다.",
    },
  ],
  "bidet-nozzle-vinegar-baking-soda-clean": [
    {
      q: "비데 노즐을 알코올로 닦아도 되나요?",
      a: "노즐 표면을 면봉에 묻혀 가볍게 닦는 정도는 괜찮지만, 알코올을 분사하거나 본체에 들이붓는 것은 전자부품 손상 위험이 있어 피하세요. 식초+베이킹소다가 더 무난합니다.",
    },
    {
      q: "노즐 청소는 얼마나 자주 해야 하나요?",
      a: "2주~한 달에 한 번 노즐을 빼서 칫솔로 닦는 정도면 충분합니다. 정수 필터가 있는 모델은 권장 주기에 맞춰 교체하세요.",
    },
  ],
  "bathroom-rust-ketchup-restore": [
    {
      q: "케첩 말고 식초로도 녹을 닦을 수 있나요?",
      a: "가능합니다. 식초나 구연산수에 적신 키친타월을 밀착시키면 됩니다. 다만 점도가 낮아 흘러내리므로 세워진 부위에는 점성이 있는 케첩이 더 편합니다.",
    },
    {
      q: "녹을 닦은 자리에 또 녹이 슬어요.",
      a: "녹 제거 후 물기를 완전히 말리고 광택제·왁스로 얇게 코팅해 공기·습기를 차단하세요. 코팅 없이 두면 습한 욕실에서 금방 재발합니다.",
    },
  ],
  "bathtub-stain-serratia-clean": [
    {
      q: "분홍 물때가 인체에 해로운가요?",
      a: "세라티아균은 건강한 사람에게는 보통 큰 문제를 일으키지 않지만, 위생상 좋지 않고 빠르게 번지므로 보이면 살균해 제거하는 것이 좋습니다.",
    },
    {
      q: "과탄산소다와 락스 중 무엇이 나은가요?",
      a: "살균력은 락스가 강하지만 변색·냄새 부담이 있습니다. 유색 욕조나 환기가 어려운 환경이면 과탄산소다가 더 안전합니다. 둘 다 산성 세제와 섞으면 안 됩니다.",
    },
  ],
  "bathroom-exhaust-fan-clean-noise": [
    {
      q: "환풍기 모터에 물이 닿으면 어떻게 하나요?",
      a: "즉시 차단기를 내리고 완전히 건조될 때까지(하루 이상) 작동하지 마세요. 모터 부위는 애초에 물·세제가 닿지 않게 마른 솔·진공으로만 청소하는 것이 안전합니다.",
    },
    {
      q: "청소했는데도 소음이 그대로면 어떻게 하나요?",
      a: "먼지를 고르게 걷어내고 축에 윤활유 한 방울을 더해도 소음이 여전하면 모터 노후일 가능성이 큽니다. 이 경우 청소로는 해결되지 않아 환풍기 교체를 검토하세요.",
    },
  ],
  "bathroom-mirror-scale-rinse-antifog": [
    {
      q: "신문지로 거울을 닦으면 깨끗해진다는데 맞나요?",
      a: "신문지의 미세 섬유가 물기와 얼룩을 잘 닦는 건 맞지만 잉크가 묻을 수 있고 굳은 물때는 못 녹입니다. 물때는 구연산으로 녹인 뒤 극세사로 마무리하는 편이 깨끗합니다.",
    },
    {
      q: "김서림 코팅을 했는데 거울이 얼룩져요.",
      a: "코팅제를 너무 많이 발랐을 때 생기는 현상입니다. 마른 천으로 광내듯 더 닦아 잔여물을 줄이고, 다음엔 2~3방울만 소량 사용하세요.",
    },
  ],
  "bathroom-sink-drain-hair-unclog": [
    {
      q: "뚫어뻥(압축기)으로도 충분하지 않나요?",
      a: "입구 근처 막힘은 빠질 수 있지만 관 안쪽에 엉긴 머리카락 뭉치는 그대로인 경우가 많습니다. 세정제로 분해하거나 P트랩을 분리하는 편이 확실합니다.",
    },
    {
      q: "베이킹소다+식초와 액상 세정제를 같이 쓰면 더 강하지 않나요?",
      a: "함께 쓰지 마세요. 세정제 잔류물과 산이 반응하면 위험할 수 있고 효과도 떨어집니다. 한 방법으로 충분히 헹군 뒤 다른 방법을 시도하세요.",
    },
  ],
  "toilet-bowl-uric-scale-clean": [
    {
      q: "식초와 베이킹소다를 같이 넣으면 변기때가 잘 빠지나요?",
      a: "거품은 보기 좋지만 서로 중화되어 세정력은 떨어집니다. 요석에는 산성(구연산·식초·산성 세제) 하나로 충분히 불리는 편이 효과적입니다.",
    },
    {
      q: "도기 변기에 산성 세제를 자주 써도 괜찮나요?",
      a: "도기 변기는 산에 강한 편이라 일반적인 사용은 문제없습니다. 다만 금속 부속에 오래 닿지 않게 하고, 사용 후 충분히 물을 내려 헹구세요.",
    },
  ],
  "faucet-showerhead-citric-acid-scale-clean": [
    {
      q: "구연산 대신 식초로 담가도 되나요?",
      a: "됩니다. 식초도 산성이라 물때를 녹입니다. 다만 냄새가 강하고 도금에 오래 닿으면 변색될 수 있어 30분~1시간 정도만 담그고 잘 헹구세요.",
    },
    {
      q: "크롬 도금 수전을 구연산에 오래 담가도 되나요?",
      a: "보통 30분~1시간은 괜찮지만 너무 오래 두거나 고농도로 쓰면 광택이 흐려질 수 있습니다. 적정 시간만 담그고 바로 헹궈 말리세요.",
    },
  ],
  "bathroom-grout-mold-bleach-clean": [
    {
      q: "락스 대신 과탄산소다로 줄눈 곰팡이를 잡을 수 있나요?",
      a: "과탄산소다도 살균·표백이 되지만 깊이 박힌 검은 곰팡이에는 락스의 표백력이 더 강합니다. 다만 둘 다 산성 세제와 섞으면 안 되고, 색 줄눈에는 표백 얼룩을 주의하세요.",
    },
    {
      q: "곰팡이가 자꾸 같은 자리에 다시 펴요.",
      a: "실리콘·줄눈 속에 뿌리가 남았거나 습기가 빠지지 않는 환경입니다. 표백으로 안 되면 실리콘을 재시공하고, 샤워 후 환기·물기 제거로 습기를 줄이세요.",
    },
  ],
  "white-tshirt-collar-yellow-bleach": [
    {
      q: "락스로 표백하면 더 빨리 하얘지지 않나요?",
      a: "염소계 락스는 면을 오히려 누렇게 되돌리거나 약하게 만들 수 있고 냄새도 강합니다. 흰 면 황변에는 산소계인 과탄산소다가 섬유 손상이 적고 안전합니다.",
    },
    {
      q: "과탄산소다를 찬물에 풀어도 되나요?",
      a: "찬물에서는 산소 발생 반응이 느려 효과가 약합니다. 40~60℃ 따뜻한 물에 풀어야 거품이 활발해 표백이 잘됩니다.",
    },
  ],
  "coffee-stain-emergency-wash": [
    {
      q: "이미 말라서 굳은 커피 얼룩도 빠지나요?",
      a: "갓 묻은 것보다 어렵지만 가능합니다. 미온수에 충분히 불린 뒤 주방세제+베이킹소다로 처리하고, 안 빠지면 산소계 표백제를 추가하세요. 단, 건조기에 한 번 들어간 얼룩은 고착돼 잘 안 빠집니다.",
    },
    {
      q: "베이킹소다 대신 산소계 표백제를 써도 되나요?",
      a: "흰옷이라면 더 강력합니다. 다만 색깔 옷·약한 섬유는 변색 위험이 있어 베이킹소다가 무난하고, 흰 면에는 과탄산소다가 효과적입니다.",
    },
  ],
  "blood-stain-hydrogen-peroxide-clean": [
    {
      q: "과산화수소 대신 락스를 써도 되나요?",
      a: "락스는 표백력이 강하지만 색깔 옷을 망치고 섬유를 약하게 합니다. 핏자국에는 과산화수소나 효소 세제가 더 안전하고 효과적입니다.",
    },
    {
      q: "과산화수소를 부었는데 거품이 안 나요.",
      a: "핏자국이 오래돼 효소 반응이 약하거나 농도가 낮을 수 있습니다. 찬물에 더 불린 뒤 다시 시도하거나 효소 세제를 병행하세요. 거품 유무와 상관없이 색이 옅어지면 작용하는 것입니다.",
    },
  ],
  "musty-towel-citric-acid-wash": [
    {
      q: "식초 냄새가 수건에 배지 않나요?",
      a: "헹굼 과정에서 거의 날아가 마른 뒤에는 남지 않습니다. 오히려 균을 잡아 쉰내를 없애 줍니다. 냄새가 걱정되면 무취인 구연산을 쓰세요.",
    },
    {
      q: "삶는 것과 비교하면 효과가 어떤가요?",
      a: "삶기는 강력하지만 모든 수건이 고온에 견디는 건 아니고 번거롭습니다. 구연산 담금 + 60℃ 세탁이면 삶기에 가까운 살균 효과를 더 간편하게 얻을 수 있습니다.",
    },
  ],
  "puffer-jacket-home-wash-down-restore": [
    {
      q: "패딩을 일반 세탁 코스로 빨면 안 되나요?",
      a: "강한 회전·탈수가 충전재를 한쪽으로 쏠리게 하고 터질 위험이 있습니다. 세탁망에 넣고 울 코스·약탈수로 돌리세요.",
    },
    {
      q: "건조기가 없으면 털 볼륨을 어떻게 살리나요?",
      a: "그늘에 눕혀 말리며 자주 두드리고, 거의 마를 때 페트병·테니스공으로 팡팡 쳐서 뭉친 털을 풉니다. 완전히 마른 뒤 한 번 더 털어주면 볼륨이 살아납니다.",
    },
  ],
  "shrunken-knit-rinse-restore": [
    {
      q: "린스 대신 일반 샴푸를 써도 되나요?",
      a: "샴푸는 세정 위주라 큐티클을 정돈하는 효과가 약합니다. 컨디셔너·트리트먼트 성분이 든 린스가 섬유를 부드럽게 만들어 복구에 더 효과적입니다.",
    },
    {
      q: "줄어든 옷이 합성 섬유인데 복구되나요?",
      a: "어렵습니다. 이 방법은 울·캐시미어 같은 천연 단백질 섬유에 효과적이고, 폴리에스터 등 합성 섬유의 열 변형은 되돌리기 어렵습니다.",
    },
  ],
  "gum-stain-ice-acetone-remove": [
    {
      q: "냉동실에 옷을 통째로 넣어 얼려도 되나요?",
      a: "가능합니다. 껌 부위를 비닐에 넣어 냉동실에 1~2시간 두면 단단히 굳습니다. 얼음팩을 직접 대는 것보다 깔끔하게 굳혀 떼기 좋습니다.",
    },
    {
      q: "아세톤과 네일 리무버는 같은 건가요?",
      a: "아세톤이 든 리무버는 거의 같지만 '아세톤 프리' 리무버는 성분이 달라 효과가 약합니다. 라벨에 아세톤이 들어 있는지 확인하고, 위험 소재엔 쓰지 마세요.",
    },
  ],
  "white-sneaker-foam-cleanser-clean": [
    {
      q: "폼클렌징 대신 치약으로 닦아도 되나요?",
      a: "치약의 약한 연마제로 밑창 고무나 천 운동화의 가벼운 얼룩은 지워집니다. 다만 향·색소가 남을 수 있어 헹굼을 충분히 하고, 가죽·스웨이드엔 쓰지 마세요.",
    },
    {
      q: "세탁기에 운동화를 돌려도 되나요?",
      a: "천 소재는 세탁망에 넣어 약한 코스로 돌릴 수 있지만, 밑창 접착이 약해지거나 통 안에서 부딪혀 손상될 수 있습니다. 손세척이 더 안전합니다.",
    },
  ],
  "white-shoelace-yellow-bleach": [
    {
      q: "끈을 세탁기에 같이 돌려도 되나요?",
      a: "끈만 세탁망에 넣어 돌릴 수 있지만 박힌 황변은 잘 안 빠집니다. 과탄산소다에 따로 담가 불린 뒤 세탁하는 편이 훨씬 하얘집니다.",
    },
    {
      q: "플라스틱 팁(끈 끝)이 누런데 어떻게 닦나요?",
      a: "팁 부분은 칫솔에 세제를 묻혀 문지르면 됩니다. 변색이 심하면 면봉에 묽은 과탄산소다 용액을 묻혀 닦되, 너무 오래 두면 손상될 수 있으니 짧게 하세요.",
    },
  ],
  "keyboard-mouse-alcohol-clean": [
    {
      q: "손소독제로 키보드를 닦아도 되나요?",
      a: "손소독제는 보습제·점증제가 들어 있어 끈적임이 남을 수 있습니다. 순수 소독용 에탄올(70~75%)을 천에 묻혀 쓰는 편이 깔끔합니다.",
    },
    {
      q: "키캡을 물에 담가 씻어도 되나요?",
      a: "분리되는 키캡은 미온수+중성세제로 씻어도 되지만, 본체(기판)는 절대 물에 담그면 안 됩니다. 키캡은 완전히 말린 뒤 끼우세요.",
    },
  ],
  "steam-iron-toothpaste-limescale-clean": [
    {
      q: "셀프클리닝 기능이 있는데도 구연산 청소가 필요한가요?",
      a: "셀프클리닝은 가벼운 석회질 배출에 도움이 되지만, 오래 쌓인 석회질엔 구연산 순환이 더 확실합니다. 둘을 병행하면 좋습니다.",
    },
    {
      q: "정제수 대신 생수를 넣어도 되나요?",
      a: "생수에도 미네랄이 들어 있어 석회질이 낍니다. 다리미에는 미네랄을 제거한 정제수(증류수)가 가장 좋습니다.",
    },
  ],
  "fan-grill-dust-clean-no-disassemble": [
    {
      q: "선풍기 안전망을 물로 통째로 씻어도 되나요?",
      a: "분리되는 안전망·날개는 물세척 후 완전히 말려 끼우면 됩니다. 다만 모터가 있는 본체는 물에 닿으면 안 되니 분리해서 따로 다루세요.",
    },
    {
      q: "섬유유연제 대신 쓸 수 있는 게 있나요?",
      a: "헤어 린스나 묽은 주방세제도 정전기 저감에 비슷한 효과가 있습니다. 어느 쪽이든 천에 묻혀 닦고 본체엔 물기가 가지 않게 하세요.",
    },
  ],
  "humidifier-tank-limescale-clean": [
    {
      q: "락스로 가습기를 소독해도 되나요?",
      a: "권하지 않습니다. 락스 잔류 성분이 분무로 호흡기에 들어갈 수 있습니다. 구연산·식초로 세척하고 충분히 헹구는 편이 안전합니다.",
    },
    {
      q: "진동자가 잘 안 닦이는데 칼로 긁어도 되나요?",
      a: "절대 안 됩니다. 진동자 표면이 긁히면 분무 성능이 떨어집니다. 구연산수로 더 오래 불린 뒤 면봉으로 살살 닦으세요.",
    },
  ],
  "dehumidifier-filter-tank-clean": [
    {
      q: "제습기 필터를 세탁기에 돌려도 되나요?",
      a: "안 됩니다. 변형·손상 위험이 있습니다. 청소기로 먼지를 빨아들이고 미온수에 손세척한 뒤 그늘에서 말리세요.",
    },
    {
      q: "자동 배수를 쓰면 물탱크 청소를 안 해도 되나요?",
      a: "연속 배수를 써도 물이 지나는 통로에 물때가 낄 수 있습니다. 주기적으로 점검·세척하는 것이 위생에 좋습니다.",
    },
  ],
  "washer-gasket-mold-bleach-clean": [
    {
      q: "통세척 코스가 없는 세탁기는 어떻게 하나요?",
      a: "가장 높은 온도의 일반 코스에 과탄산소다나 세탁조 클리너를 넣고 그릇 없이 빈 상태로 돌리면 비슷한 효과를 냅니다.",
    },
    {
      q: "패킹 곰팡이가 락스로도 안 빠져요.",
      a: "고무 깊숙이 박힌 곰팡이는 표백으로 색만 옅어질 뿐 완전히 안 빠질 수 있습니다. 위생상 문제가 크면 패킹 교체를 고려하세요(부품으로 구입·교체 가능).",
    },
  ],
  "dishwasher-limescale-filter-clean": [
    {
      q: "식초를 매번 넣어 돌려도 되나요?",
      a: "가끔은 괜찮지만 산이 고무 패킹·금속 부속에 자주 닿으면 노화를 앞당길 수 있습니다. 월 1회 정도 구연산·식초 공회전을 권합니다.",
    },
    {
      q: "그릇이 하얗게 얼룩져 나오는데 석회질 때문인가요?",
      a: "네, 경수(미네랄이 많은 물) 지역에서 흔합니다. 린스(헹굼 보조제)를 넣고 정기적으로 구연산 공회전을 하면 줄어듭니다.",
    },
  ],
  "balcony-drain-trap-bleach-clean": [
    {
      q: "우수관에 트랩을 달면 빗물이 안 빠지지 않나요?",
      a: "차단 트랩은 물이 내려갈 때만 열리는 구조라 빗물 배수는 정상적으로 됩니다. 다만 거름망에 낙엽·머리카락이 끼면 배수가 느려지니 가끔 걷어내세요.",
    },
    {
      q: "락스 냄새가 베란다에 오래 남아요.",
      a: "환기가 부족했을 수 있습니다. 작업 후 창문을 활짝 열고 찬물로 충분히 헹궈 내리면 냄새가 빨리 가십니다. 산성 세제로 중화하려 하면 절대 안 됩니다(가스 발생).",
    },
  ],
  "pet-urine-vinegar-deodorize": [
    {
      q: "식초 냄새를 반려동물이 싫어하지 않나요?",
      a: "마른 뒤에는 식초 냄새가 거의 날아갑니다. 오히려 남은 소변 냄새를 없애 같은 자리 실수를 줄여 줍니다. 향이 강한 게 걱정되면 효소 탈취제를 쓰세요.",
    },
    {
      q: "카펫 속까지 스민 오래된 소변은 어떻게 하나요?",
      a: "식초만으론 부족합니다. 반려동물 전용 효소 탈취제를 충분히 적셔 요산을 분해해야 하며, 깊이 스민 경우 여러 번 반복하거나 패드 교체가 필요할 수 있습니다.",
    },
  ],
  "rug-carpet-salt-dry-clean": [
    {
      q: "굵은 소금 대신 베이킹소다로 해도 되나요?",
      a: "가능합니다. 베이킹소다도 흡습·탈취가 되어 냄새 제거엔 오히려 낫습니다. 굵은 소금은 결정이 커 먼지를 긁어내는 효과가 있어 섞어 쓰기도 합니다. 어느 쪽이든 완전히 마른 가루를 쓰세요.",
    },
    {
      q: "소금이 러그 색을 바래게 하지 않나요?",
      a: "일반적으로 굵은 소금은 색을 빼지 않습니다. 다만 천연 염색·진한 색 러그는 안 보이는 구석에 먼저 시험하고, 청소 후 가루를 완전히 빨아들이면 됩니다.",
    },
  ],
  "blind-dust-cotton-glove-clean": [
    {
      q: "면장갑이 없으면 뭘 쓰나요?",
      a: "안 쓰는 양말이나 극세사 걸레를 손에 끼워도 됩니다. 핵심은 슬랫을 손가락으로 감싸 앞뒷면을 한 번에 쓸어내는 것입니다.",
    },
    {
      q: "우드 블라인드에 손때가 끈적하게 묻었어요.",
      a: "물기를 피해야 하므로 마른 천에 우드 전용 클리너나 소량의 가구 왁스를 묻혀 살짝 닦으세요. 물·강한 세제는 나무를 상하게 합니다.",
    },
  ],
  "fabric-sofa-stain-spot-clean": [
    {
      q: "스팀청소기로 소파를 청소해도 되나요?",
      a: "합성 섬유 소파는 가능하지만 가죽·일부 혼방은 열·수분에 변형될 수 있습니다. 라벨의 세탁 기호(특히 'W/S' 표시)를 확인하고, 물세탁 불가 소재면 건식 위주로 하세요.",
    },
    {
      q: "얼룩이 빠진 자리만 더 깨끗해서 얼룩처럼 보여요.",
      a: "부분 세척 후 흔한 '워터링' 자국입니다. 주변까지 넓게 같은 농도로 가볍게 닦아 경계를 풀고, 전체를 고르게 말리면 줄어듭니다.",
    },
  ],
  "mattress-stain-dust-mite-dry-clean": [
    {
      q: "베이킹소다를 뿌리고 얼마나 둬야 하나요?",
      a: "최소 30분, 냄새가 심하면 2시간까지 두면 좋습니다. 길게 둘수록 흡착이 잘 되지만, 반드시 청소기로 가루를 완전히 빨아들여야 합니다.",
    },
    {
      q: "진드기를 확실히 없애려면 어떻게 하나요?",
      a: "가루로는 사체만 걷힙니다. 침구를 60℃ 이상 고온 세탁하고, 맑은 날 매트리스를 햇볕에 통풍시키며, 침실 습도를 50% 이하로 유지하는 것이 핵심입니다. 스팀(고온)도 효과적입니다.",
    },
  ],
  "entrance-tile-stain-coating": [
    {
      q: "코팅 없이 깨끗하게 유지할 방법은 없나요?",
      a: "매번 닦는 수밖에 없습니다. 다공성 타일은 오염이 스며 닦아도 금방 거뭇해지므로, 손이 덜 가려면 발수 코팅이 결국 효율적입니다.",
    },
    {
      q: "줄눈만 까맣게 변하는데 코팅으로 되나요?",
      a: "줄눈 곰팡이·오염이 심하면 먼저 곰팡이를 제거하고 줄눈 보수제로 덧바른 뒤 코팅해야 합니다. 깨진 줄눈을 그대로 코팅하면 안쪽 오염이 그대로 남습니다.",
    },
  ],
  "cosmetic-storage-dust-hygiene": [
    {
      q: "보관함을 물비누로 씻어도 되나요?",
      a: "분리되는 아크릴함은 미온수+중성 세제로 씻어도 되지만, 완전히 말린 뒤 화장품을 넣어야 합니다. 틈이 많아 잘 안 마르면 알코올 마무리가 더 위생적입니다.",
    },
    {
      q: "개봉 후 사용기간이 지나면 꼭 버려야 하나요?",
      a: "권장 기한이 지난 제품, 특히 눈가용·수분 많은 제품은 세균 번식 위험이 있어 버리는 것이 안전합니다. 색·냄새·질감이 변했다면 기한 전이라도 사용을 멈추세요.",
    },
  ],
  "shoe-cabinet-odor-leather-care": [
    {
      q: "신발장 냄새에 탈취제만 두면 안 되나요?",
      a: "탈취제는 보조일 뿐입니다. 습기가 그대로면 냄새가 계속 생기므로 제습(숯·실리카겔·환기)을 먼저 해야 근본적으로 잡힙니다.",
    },
    {
      q: "운동화에 핀 곰팡이도 같은 방법인가요?",
      a: "천 운동화는 가죽보다 물에 강해 곰팡이를 털어낸 뒤 과탄산소다 물에 담가 세탁할 수 있습니다. 가죽·스웨이드 부분만 알코올·전용 클리너로 따로 관리하세요.",
    },
  ],
  "closet-mold-airflow-storage": [
    {
      q: "옷장 제습제는 얼마나 자주 갈아야 하나요?",
      a: "통이 가득 차면 바로 교체해야 합니다. 장마철엔 한 달, 평소엔 2~3개월이 기준이지만 다 차면 더 빨리 갈아야 효과가 유지됩니다.",
    },
    {
      q: "옷에 곰팡이가 옮았는데 빨면 되나요?",
      a: "흰 면이면 과탄산소다 고온 세탁으로 표백·살균이 됩니다. 색깔 옷·약한 소재는 변색 위험이 있어 전문 세탁을 권하고, 포자가 퍼지지 않게 실외에서 털고 분리해 빠세요.",
    },
  ],
  "door-handle-hinge-squeak-lubricate": [
    {
      q: "식용유를 발라도 정말 괜찮나요?",
      a: "급할 때 임시로는 마찰을 줄여 주지만, 시간이 지나면 산패해 냄새가 나고 끈적여 먼지를 끌어당깁니다. 가능하면 바세린·실리콘 그리스나 전용 제품으로 바꾸세요.",
    },
    {
      q: "경첩이 아니라 손잡이(레버)가 뻑뻑해요.",
      a: "레버 회전축 틈에도 같은 방식으로 소량 윤활하면 됩니다. 다만 내부 잠금 모듈 고장이면 윤활로 안 되니, 분해가 어려우면 손잡이 교체를 고려하세요.",
    },
  ],
  "window-frame-dust-condensation-mold": [
    {
      q: "결로 방지 테이프나 뽁뽁이가 효과 있나요?",
      a: "도움이 됩니다. 단열 효과로 창 표면 온도가 덜 떨어져 결로가 줄어듭니다. 다만 환기와 습도 관리를 함께 해야 효과가 큽니다.",
    },
    {
      q: "곰팡이를 닦았는데 자국이 남아요.",
      a: "락스로 표백하면 색은 옅어지지만 실리콘 속까지 박힌 자국은 완전히 안 빠질 수 있습니다. 보기 싫을 정도면 실리콘을 걷어내고 재시공하는 것이 깔끔합니다.",
    },
  ],
  "outlet-switch-cover-safe-clean": [
    {
      q: "물티슈로 살짝 닦는 것도 안 되나요?",
      a: "거의 마른 물티슈로 표면만 가볍게 닦는 정도는 가능하지만, 물기가 구멍·틈으로 들어가면 위험합니다. 전원을 차단하고 거의 마른 상태로만 쓰는 것이 안전합니다.",
    },
    {
      q: "콘센트 구멍 안 먼지는 어떻게 제거하나요?",
      a: "전원을 차단한 뒤 마른 면봉이나 에어 스프레이(압축 공기)로 살살 빼냅니다. 금속 도구를 넣거나 물기를 대는 것은 절대 안 됩니다.",
    },
  ],
  "wallpaper-molding-dust-antistatic": [
    {
      q: "벽지에 핀 곰팡이도 섬유유연제 물로 닦이나요?",
      a: "아닙니다. 곰팡이는 살균이 필요해 표면이면 알코올로 닦되, 종이 합지 벽지는 물·알코올에 얼룩지니 번지면 해당 부분 도배가 필요할 수 있습니다.",
    },
    {
      q: "멜라민 스펀지로 벽지를 닦아도 되나요?",
      a: "실크(코팅) 벽지의 국소 손때엔 효과적이지만, 종이 합지나 엠보싱 벽지는 표면이 일어나거나 광이 달라질 수 있어 안 보이는 곳에 먼저 테스트하세요.",
    },
  ],
  "window-screen-dust-bug-clean": [
    {
      q: "방충망을 분리해서 물로 씻는 게 더 깨끗하지 않나요?",
      a: "분리 세척이 가장 깨끗하지만 고층에서는 추락 위험이 있고 재설치가 번거롭습니다. 분리할 거면 안전한 곳(욕실·베란다 안)에서 하고, 어렵다면 제자리 청소로 충분합니다.",
    },
    {
      q: "돌돌이나 스펀지가 망을 상하게 하지 않나요?",
      a: "가볍게 쓰면 괜찮습니다. 다만 세게 누르면 망이 늘어나거나 찢어질 수 있으니 살살 쓸어내리듯 사용하세요.",
    },
  ],
};

// 재작성된 글에 FAQ·갱신일 일괄 적용
for (const p of POSTS) {
  const f = POST_FAQS[p.slug];
  if (f) {
    p.faqs = f;
    p.updated = "2026-06-26";
  }
}

export const CATEGORIES: Category[] = CATEGORY_DEFS.map((c) => ({
  ...c,
  count: POSTS.filter((p) => p.category === c.slug).length,
}));

/** 카테고리 페이지 경로 */
export function categoryPath(slug: string): string {
  return `/category/${slug}`;
}

/**
 * 하위 호환용 "전체 글" 진입점.
 * 단일 카테고리 시절 코드(not-found, search 등)가 참조합니다.
 */
export const LIST_CATEGORY: Category = {
  id: "all",
  name: "생활 가이드",
  slug: "",
  description: "주방·욕실·세탁·가전·생활공간 전체 가이드",
  count: POSTS.length,
};

export function listCategoryPath(): string {
  return "/";
}

/** 글 상세 URL (slug 기준 — 글 추가 시 config 수정 불필요) */
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

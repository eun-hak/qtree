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
    slug: "coated-pan-flour-seasoning-clean",
    views: 454,
    tags: ["프라이팬","밀가루","기름때","시즈닝","코팅팬","주방 청소"],
    readingTime: 4,
  },

  {
    id: "49",
    title: "비데 노즐 누런 때, 식초·베이킹소다로 직접 닦아본 후기",
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
      "흰 셔츠에 누런 물이 떨어져 다리미를 손봤습니다. 바닥 탄 자국은 치약으로, 막힌 스팀 구멍은 구연산으로 풀었고, 코팅 긁었다 망친 경험도 적었습니다.",
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
      "습한 욕실 금속 선반에 녹이 피어 케첩으로 닦아봤습니다. 철수세미가 왜 녹을 더 키우는지, 케첩과 콜라 중 뭘 골라야 하는지, 재발 막는 코팅까지 적었습니다.",
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
    title: "무거워서 못 빠는 러그, 굵은 소금으로 건식 청소한 후기",
    summary:
      "물세탁이 힘든 대형 러그를 굵은 소금으로 청소해봤습니다. 소금이 먼지를 빨아들이는 과정과, 맛소금 썼다가 망친 실수, 적당한 주기까지 정리했습니다.",
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
    title: "블라인드 먼지, 떼지 않고 면장갑으로 쓸어낸 후기",
    summary:
      "걸레로 닦다 줄을 비뚤어뜨린 뒤 면장갑으로 바꿨습니다. 정전기로 먼지를 잡는 법과, 우드·알루미늄 소재별로 다르게 다뤄야 하는 이유를 정리했습니다.",
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
      "물로 닦았다 곰팡이 날 뻔한 뒤 건식으로 바꿨습니다. 베이킹소다로 습기·냄새를 흡착하는 순서와, 청소기 필터가 막히는 함정까지 적었습니다.",
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
      "걸레질만 반복하던 현관을 청소 후 발수 코팅으로 바꿨습니다. 그냥 청소와 코팅의 차이, 덜 마른 채 코팅했다 망친 실수를 정리했습니다.",
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
    title: "장마철 신발장 곰팡이, 가죽 구두 망치고 배운 관리법",
    summary:
      "아끼던 가죽 구두에 곰팡이가 핀 뒤 관리법을 바꿨습니다. 제습이 먼저인 이유와, 직사광선·신문지 방치로 망친 실수를 정리했습니다.",
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
      "오랜만에 켠 선풍기에서 먼지가 날려 분해 없이 닦았습니다. 섬유유연제 물이 먼지를 덜 붙게 하는 원리와, 모터에 물 들어가면 안 되는 주의점을 정리했습니다.",
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
      "밤마다 나는 방문 소리를 잡으려 경첩을 손봤습니다. WD-40과 식용유·바세린 중 뭘 골라야 하는지, 기름을 너무 많이 쓰면 안 되는 이유를 정리했습니다.",
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
    title: "찢어질 뻔한 방충망, 분리 없이 신문지로 먼지 잡기",
    summary:
      "청소기로 빨다 방충망이 찢어질 뻔한 뒤 방법을 바꿨습니다. 반대편에 신문지를 대 먼지를 잡는 법과, 고층·강풍 주의점을 정리했습니다.",
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
      "매일 쓰던 텀블러 안쪽이 갈색으로 물들어 베이킹소다로 닦았습니다. 문지르지 않고 담가 빼는 순서와, 염소계 표백제를 피해야 하는 이유를 정리했습니다.",
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
      "전용 세제 대신 폼클렌징으로 흰 운동화를 닦아봤습니다. 폼클렌징이 통하는 이유와, 그늘 건조·꼼꼼한 헹굼이 중요한 이유를 정리했습니다.",
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
      "버리려던 흰 티 황변을 과탄산소다로 살렸습니다. 일반 세탁으로 안 빠지는 이유와, 오래 담가 망친 실수, 울·실크엔 쓰면 안 되는 점을 정리했습니다.",
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
      "환풍기에서 덜덜 소리가 나 분해해 닦았습니다. 먼지 쏠림이 소음을 만드는 원리와, 청소 후에도 시끄러우면 교체를 봐야 하는 이유를 정리했습니다.",
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
      "가루 세제로 박박 닦다 상판에 흠집을 낸 뒤 방법을 바꿨습니다. 연마제를 피하고 전용 세제로 녹여 미는 순서와, 식기 전 닦는 예방 습관을 정리했습니다.",
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
      "성에로 서랍이 안 움직이고 냄새도 가시질 않아 손봤습니다. 성에를 긁으면 안 되는 이유와 안전한 해동 순서, 베이킹소다 탈취법을 정리했습니다.",
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
      "냄비를 태워 철수세미로 밀다 코팅을 벗긴 뒤 방법을 바꿨습니다. 끓여 불려서 떼는 순서와, 알루미늄 냄비엔 쓰면 안 되는 이유를 정리했습니다.",
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
      "튄 양념이 굳어버린 전자레인지를 수증기로 닦았습니다. 물만으론 부족해 식초를 더하는 이유와, 철수세미가 스파크를 부르는 위험을 정리했습니다.",
    content: POST_CONTENTS["microwave-steam-vinegar-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-04-27",
    slug: "microwave-steam-vinegar-clean",
    views: 346,
    tags: ["전자레인지","수증기","식초","찌든 때","주방 가전"],
    readingTime: 7,
  },
];

export const CATEGORIES: Category[] = [
  {
    id: "1",
    name: "생활서비스",
    slug: LIST_CATEGORY_SLUG,
    description:
      "주방·욕실·세탁·거실·현관 등 집안 청소, 세탁, 가전·공간 관리 방법을 단계별로 모았습니다.",
    count: POSTS.length,
  },
];

export const LIST_CATEGORY = CATEGORIES[0];

export function listCategoryPath(): string {
  return `/category/${LIST_CATEGORY_SLUG}`;
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

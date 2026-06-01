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
    id: "39",
    title: "주방 서랍장 위생 관리 및 수납 효율 극대화법",
    summary:
      "주방 서랍장 기름·습기 오염 원인, 분리 수납·라이너 원리, 비우기·살균·라이너·트레이·점검 순서, 건조 수납·동선·나무 소재 관리 팁을 정리했습니다.",
    content: POST_CONTENTS["kitchen-drawer-hygiene-storage"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-06-01",
    slug: "kitchen-drawer-hygiene-storage",
    views: 0,
    tags: ["주방 서랍장","수납","위생","라이너","주방 청소"],
    readingTime: 7,
  },

  {
    id: "38",
    title: "신발장 냄새 탈취 및 가죽 신발 보관 관리법",
    summary:
      "신발장 악취·가죽 손상 원인, 제습·베이킹소다·커피 탈취 원리, 먼지 제거·신발 정리·신문지·환기 순서, 신문지 교체·직사광선·물기 제거 팁을 정리했습니다.",
    content: POST_CONTENTS["shoe-cabinet-odor-leather-care"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-31",
    slug: "shoe-cabinet-odor-leather-care",
    views: 0,
    tags: ["신발장","탈취","가죽 신발","베이킹소다","거실 청소"],
    readingTime: 7,
  },

  {
    id: "37",
    title: "옷장 곰팡이 예방 및 공기 흐름을 고려한 수납 관리법",
    summary:
      "옷장 곰팡이·습기 원인, 공기 순환·천연 제습 원리, 비우기·간격 수납·제습제·환기 순서, 냄새 체크·비닐 제거·수납 박스 팁을 정리했습니다.",
    content: POST_CONTENTS["closet-mold-airflow-storage"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-30",
    slug: "closet-mold-airflow-storage",
    views: 0,
    tags: ["옷장","곰팡이","제습","수납","거실 청소"],
    readingTime: 7,
  },

  {
    id: "36",
    title: "선풍기 분해 없이 송풍구 먼지 및 필터 위생 관리법",
    summary:
      "선풍기 먼지·정전기 원인, 린스·섬유유연제 코팅 원리, 방지액·안전망·틈새·날개 순서, 전원 차단·물기·2주 주기 팁을 정리했습니다.",
    content: POST_CONTENTS["fan-grill-dust-clean-no-disassemble"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-29",
    slug: "fan-grill-dust-clean-no-disassemble",
    views: 0,
    tags: ["선풍기","송풍구","먼지","린스","정전기","거실 청소"],
    readingTime: 6,
  },

  {
    id: "35",
    title: "가습기 수조 석회질 분해 및 살균 세척법",
    summary:
      "가습기 석회질·진동자 오염 원인, 구연산 중화·살균 원리, 비우기·불림·세척·헹굼·건조 순서, 주 1~2회·세제 금지·완전 건조 팁을 정리했습니다.",
    content: POST_CONTENTS["humidifier-tank-limescale-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-28",
    slug: "humidifier-tank-limescale-clean",
    views: 0,
    tags: ["가습기","석회질","수조","구연산","거실 청소"],
    readingTime: 7,
  },

  {
    id: "34",
    title: "제습기 필터 먼지 제거 및 내부 물탱크 위생 관리법",
    summary:
      "제습기 필터·물탱크 오염 원인, 진공·베이킹소다·구연산 살균 원리, 필터·물탱크 세척·헹굼·재조립 순서, 2주·주 1회·완전 건조·배수구 점검 팁을 정리했습니다.",
    content: POST_CONTENTS["dehumidifier-filter-tank-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-27",
    slug: "dehumidifier-filter-tank-clean",
    views: 0,
    tags: ["제습기","필터","물탱크","베이킹소다","구연산","거실 청소"],
    readingTime: 7,
  },

  {
    id: "33",
    title: "세탁기 문 주변 고무 패킹 곰팡이 제거 및 위생 관리법",
    summary:
      "고무 패킹 곰팡이 원인, 락스 습포 살균 원리, 이물질 제거·습포·세척·건조 순서, 환기·혼합 금지·세탁 후 물기 제거 팁을 정리했습니다.",
    content: POST_CONTENTS["washer-gasket-mold-bleach-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-26",
    slug: "washer-gasket-mold-bleach-clean",
    views: 0,
    tags: ["세탁기","고무 패킹","곰팡이","락스","세탁"],
    readingTime: 7,
  },

  {
    id: "32",
    title: "식기세척기 내부 석회질 제거 및 필터 위생 관리법",
    summary:
      "석회질·필터 오염 원인, 구연산·식초 중화·고온 공회전 원리, 필터 세척·내부 세척·노즐·패킹 순서, 월 1회·전용 세제·건조 관리 팁을 정리했습니다.",
    content: POST_CONTENTS["dishwasher-limescale-filter-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-25",
    slug: "dishwasher-limescale-filter-clean",
    views: 0,
    tags: ["식기세척기","석회질","필터","구연산","주방 청소"],
    readingTime: 7,
  },

  {
    id: "31",
    title: "뻑뻑해진 문 손잡이 및 경첩 소음 제거하는 법",
    summary:
      "문 손잡이·경첩 소음 원인, 윤활제·바세린 메커니즘, 먼지 제거·도포·여닫기·잔여물 닦기 순서, 윤활제 선택·6개월 점검·소량 사용 팁을 정리했습니다.",
    content: POST_CONTENTS["door-handle-hinge-squeak-lubricate"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-24",
    slug: "door-handle-hinge-squeak-lubricate",
    views: 0,
    tags: ["문 손잡이","경첩","끼익 소음","윤활제","WD-40","거실 청소"],
    readingTime: 6,
  },

  {
    id: "30",
    title: "창틀 흙먼지 제거 및 겨울철 결로·곰팡이 방지 관리법",
    summary:
      "창틀 흙먼지·결로·곰팡이 원인, 불리기·실리콘 살균·물기 제거·환기 원리, 신문지 불림·곰팡이·건조 순서, 월 1회·결로 테이프·부드러운 도구 팁을 정리했습니다.",
    content: POST_CONTENTS["window-frame-dust-condensation-mold"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-23",
    slug: "window-frame-dust-condensation-mold",
    views: 0,
    tags: ["창틀","흙먼지","결로","곰팡이","실리콘","창문 청소"],
    readingTime: 7,
  },

  {
    id: "29",
    title: "콘센트 및 스위치 커버 찌든 때 안전 세척법",
    summary:
      "콘센트·스위치 찌든 때 원인, 수분 최소화·면봉 세척 원리, 전원 차단·먼지 제거·찌든 때·건조·전원 복구 순서, 물기 금지·코팅·월 1회 관리 팁을 정리했습니다.",
    content: POST_CONTENTS["outlet-switch-cover-safe-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-22",
    slug: "outlet-switch-cover-safe-clean",
    views: 0,
    tags: ["콘센트","스위치","찌든 때","감전 예방","거실 청소"],
    readingTime: 6,
  },

  {
    id: "28",
    title: "벽지 및 몰딩 틈새 먼지, 정전기 방지법으로 관리하기",
    summary:
      "벽지 먼지·알레르기 원인, 린스·섬유유연제 정전기 방지 원리, 방지액 제조·밀대·몰딩 틈새·건조 순서, 합지 벽지·물기·월 1회 관리 팁을 정리했습니다.",
    content: POST_CONTENTS["wallpaper-molding-dust-antistatic"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-22",
    slug: "wallpaper-molding-dust-antistatic",
    views: 0,
    tags: ["벽지","몰딩","먼지","정전기","린스","거실 청소"],
    readingTime: 6,
  },

  {
    id: "27",
    title: "방충망 분리 없이 미세먼지 및 벌레 사체 제거하는 법",
    summary:
      "방충망 오염 원인, 정전기·계면활성제 활용 원리, 보양·도포·불리기·닦기·건조 순서, 계절 청소 주기·날씨 선택·고층 안전 주의를 정리했습니다.",
    content: POST_CONTENTS["window-screen-dust-bug-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-21",
    slug: "window-screen-dust-bug-clean",
    views: 0,
    tags: ["방충망","미세먼지","벌레 사체","주방세제","창문 청소"],
    readingTime: 6,
  },

  {
    id: "26",
    title: "텀블러 뚜껑 실리콘 패킹 곰팡이 제거 및 위생 관리법",
    summary:
      "패킹 곰팡이·냄새 원인, 과탄산소다·베이킹소다 침지 살균 원리, 분리·고온 불림·칫솔·건조·재조립 순서, 주 1회 세척·70도·완전 건조 팁을 정리했습니다.",
    content: POST_CONTENTS["tumbler-lid-silicone-packing-mold-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-21",
    slug: "tumbler-lid-silicone-packing-mold-clean",
    views: 0,
    tags: ["텀블러", "실리콘 패킹", "곰팡이", "과탄산소다", "주방 청소"],
    readingTime: 6,
  },
  {
    id: "25",
    title: "텀블러 내벽 커피 얼룩 및 냄새, 베이킹소다로 해결하는 법",
    summary:
      "타닌·냄새 원인, 베이킹소다 중화·흡착 원리, 온수·흔들기·불림·솔 세척·헹굼·건조 순서, 매일 헹굼·패킹 관리·락스 금지를 정리했습니다.",
    content: POST_CONTENTS["tumbler-coffee-stain-baking-soda-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-20",
    slug: "tumbler-coffee-stain-baking-soda-clean",
    views: 0,
    tags: ["텀블러", "커피 얼룩", "베이킹소다", "냄새", "주방 청소"],
    readingTime: 6,
  },
  {
    id: "24",
    title: "흰 운동화 끈 누런 때 완벽 제거 및 복원법",
    summary:
      "끈 황변 원인, 과탄산소다 표백 원리, 지퍼백 침지·불림·문지르기·헹굼·건조 순서, 헹굼·완전 건조·환기 유의사항을 정리했습니다.",
    content: POST_CONTENTS["white-shoelace-yellow-bleach"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-19",
    slug: "white-shoelace-yellow-bleach",
    views: 0,
    tags: ["운동화 끈", "누런 때", "과탄산소다", "황변", "세탁"],
    readingTime: 6,
  },
  {
    id: "23",
    title: "흰 운동화 찌든 때 및 밑창 오염 폼 클렌징으로 제거하는 법",
    summary:
      "운동화·밑창 오염 원인, 폼 클렌징 계면활성제 원리, 먼지 제거·도포·방치·헹굼·건조 순서, 패브릭 소재·헹굼·신문지 냄새 팁을 정리했습니다.",
    content: POST_CONTENTS["white-sneaker-foam-cleanser-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-18",
    slug: "white-sneaker-foam-cleanser-clean",
    views: 0,
    tags: ["흰 운동화", "폼 클렌징", "밑창", "찌든 때", "세탁"],
    readingTime: 7,
  },
  {
    id: "22",
    title: "껌 붙은 옷, 얼음과 아세톤으로 흔적 없이 제거하는 법",
    summary:
      "껌 고착 원리, 얼음 냉각·아세톤 용해 메커니즘, 냉각 박리·두드려 제거·애벌빨래 순서, 아세톤 테스트·비비지 않기 유의사항을 정리했습니다.",
    content: POST_CONTENTS["gum-stain-ice-acetone-remove"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-17",
    slug: "gum-stain-ice-acetone-remove",
    views: 0,
    tags: ["껌 자국", "얼음", "아세톤", "얼룩 제거", "세탁"],
    readingTime: 6,
  },
  {
    id: "21",
    title: "세탁 후 줄어든 니트 린스로 원래 사이즈 복구하는 방법",
    summary:
      "펠트화·수축 원인, 린스·실리콘 유연화 원리, 희석액·침지·당겨 형태 복구·평평 건조 순서, 울·캐시미어·찬물 세탁 팁을 정리했습니다.",
    content: POST_CONTENTS["shrunken-knit-rinse-restore"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-16",
    slug: "shrunken-knit-rinse-restore",
    views: 0,
    tags: ["니트", "줄어든 옷", "린스", "울", "세탁"],
    readingTime: 7,
  },
  {
    id: "20",
    title: "겨울 패딩 집에서 물세탁하는 법 및 죽은 털 숨 살리기",
    summary:
      "충전재·물세탁 원리, 애벌빨래·세탁망·울 코스·그늘 건조·두드리기·볼륨 복원 순서, 헹굼 추가·보관법 팁을 정리했습니다.",
    content: POST_CONTENTS["puffer-jacket-home-wash-down-restore"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-15",
    slug: "puffer-jacket-home-wash-down-restore",
    views: 0,
    tags: ["패딩", "물세탁", "다운", "털 복원", "세탁"],
    readingTime: 7,
  },
  {
    id: "19",
    title: "장마철 수건 쉰내 원인 및 삶지 않고 냄새 없애는 법",
    summary:
      "모락셀라·쉰내 원인, 구연산·식초 산성 살균 원리, 온수 불림·헹굼·고온 세탁·신속 건조 순서, 말린 뒤 세탁·매일 세탁 팁을 정리했습니다.",
    content: POST_CONTENTS["musty-towel-citric-acid-wash"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-14",
    slug: "musty-towel-citric-acid-wash",
    views: 0,
    tags: ["수건", "쉰내", "장마철", "구연산", "세탁"],
    readingTime: 7,
  },
  {
    id: "18",
    title: "오래된 핏자국 과산화수소로 얼룩 지우는 원리 및 제거법",
    summary:
      "핏자국·헤모글로빈 원인, 과산화수소 산화·기포 원리, 찬물 1차 세척·도포·문지르기·헹굼 순서, 열 금지·색옷 테스트·즉시 대응을 정리했습니다.",
    content: POST_CONTENTS["blood-stain-hydrogen-peroxide-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-13",
    slug: "blood-stain-hydrogen-peroxide-clean",
    views: 0,
    tags: ["핏자국", "과산화수소", "얼룩 제거", "찬물 세탁", "세탁"],
    readingTime: 7,
  },
  {
    id: "17",
    title: "옷에 묻은 커피 자국 안 지워질 때 응급 대처 및 세탁법",
    summary:
      "타닌·얼룩 원인, 주방세제·베이킹소다 분해 원리, 흡수·도포·불림·헹굼·건조 확인 순서, 즉시 대응·민감 소재 유의사항을 정리했습니다.",
    content: POST_CONTENTS["coffee-stain-emergency-wash"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-12",
    slug: "coffee-stain-emergency-wash",
    views: 0,
    tags: ["커피 얼룩", "얼룩 제거", "베이킹소다", "응급 세탁", "세탁"],
    readingTime: 6,
  },
  {
    id: "16",
    title: "흰 티셔츠 목 둘레 누런 때(황변) 하얗게 표백하는 방법",
    summary:
      "목 황변 원인, 과탄산소다 산화·표백 원리, 온수 세척액·침지·문지르기·헹굼·건조 순서, 면 소재만·방치 시간·환기 유의사항을 정리했습니다.",
    content: POST_CONTENTS["white-tshirt-collar-yellow-bleach"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-11",
    slug: "white-tshirt-collar-yellow-bleach",
    views: 0,
    tags: ["티셔츠", "목 황변", "과탄산소다", "표백", "세탁"],
    readingTime: 7,
  },
  {
    id: "15",
    title: "욕조 찌든 때 및 분홍색 물때(세라티아균) 없애는 법",
    summary:
      "찌든 때·세라티아균 원인, 중성 세제·락스 살균 원리, 1차 세척·도포·방치·헹굼·건조 순서, 환기·락스 혼합 금지·습기 관리 팁을 정리했습니다.",
    content: POST_CONTENTS["bathtub-stain-serratia-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-10",
    slug: "bathtub-stain-serratia-clean",
    views: 0,
    tags: ["욕조", "찌든 때", "분홍 물때", "세라티아균", "락스", "욕실 청소"],
    readingTime: 7,
  },
  {
    id: "14",
    title: "화장실 환풍기 먼지 청소 및 소음 줄이는 방법",
    summary:
      "먼지·밸런스·소음 원인, 전원 차단·커버 분리·날개 세척·본체 닦기·건조 조립 순서, 3개월 주기·모터 점검·교체 검토 팁을 정리했습니다.",
    content: POST_CONTENTS["bathroom-exhaust-fan-clean-noise"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-09",
    slug: "bathroom-exhaust-fan-clean-noise",
    views: 0,
    tags: ["환풍기", "먼지 청소", "소음", "화장실", "욕실 청소"],
    readingTime: 7,
  },
  {
    id: "13",
    title: "화장실 거울 물때 제거 및 린스를 활용한 김서림 방지 코팅",
    summary:
      "거울 물때 원인, 구연산 중화·린스 방담 코팅 원리, 분사·닦기·헹굼·린스 코팅 순서, 1~2주 주기 재코팅·극세사 사용 팁을 정리했습니다.",
    content: POST_CONTENTS["bathroom-mirror-scale-rinse-antifog"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-08",
    slug: "bathroom-mirror-scale-rinse-antifog",
    views: 0,
    tags: ["화장실 거울", "물때", "구연산", "린스", "김서림", "욕실 청소"],
    readingTime: 6,
  },
  {
    id: "12",
    title: "세면대 막힘 머리카락 녹이는 배수구 뚫는 법",
    summary:
      "머리카락·슬러지 막힘 원인, 배수구 세정제(수산화나트륨) 분해 원리, 1차 제거·도포·침지·온수 헹굼 순서, 거름망·온수 관리·세정제 안전을 정리했습니다.",
    content: POST_CONTENTS["bathroom-sink-drain-hair-unclog"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-07",
    slug: "bathroom-sink-drain-hair-unclog",
    views: 0,
    tags: ["세면대", "배수구", "머리카락", "막힘", "욕실 청소"],
    readingTime: 7,
  },
  {
    id: "11",
    title: "변기 안쪽 찌든 때 및 요석 제거하는 가장 확실한 방법",
    summary:
      "요석 원인·악취, 산성 세제 분해 원리, 물 수위 조절·도포·불림·솔 세척 순서, 주기적 소독·즉시 물내림·락스 혼합 금지를 정리했습니다.",
    content: POST_CONTENTS["toilet-bowl-uric-scale-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-06",
    slug: "toilet-bowl-uric-scale-clean",
    views: 0,
    tags: ["변기", "요석", "찌든 때", "구연산", "욕실 청소"],
    readingTime: 7,
  },
  {
    id: "10",
    title: "수전 및 샤워기 헤드 하얀 물때 구연산으로 지우기",
    summary:
      "스케일(물때) 원인, 구연산 중화 원리, 수용액 제조·분사·불림, 헤드 침지·닦기, 사용 후 물기 제거·장갑 등 관리 팁을 정리했습니다.",
    content: POST_CONTENTS["faucet-showerhead-citric-acid-scale-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-05",
    slug: "faucet-showerhead-citric-acid-scale-clean",
    views: 0,
    tags: ["수전", "샤워기", "물때", "구연산", "욕실 청소"],
    readingTime: 6,
  },
  {
    id: "9",
    title: "화장실 타일 줄눈 실리콘 곰팡이 락스로 완벽 제거하는 방법",
    summary:
      "곰팡이 원인, 락스 산화·표백 원리, 물기 제거·키친타월 도포·랩핑 방치·헹굼 순서, 환기·혼합 금지·장갑 등 안전 유의사항을 정리했습니다.",
    content: POST_CONTENTS["bathroom-grout-mold-bleach-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-04",
    slug: "bathroom-grout-mold-bleach-clean",
    views: 0,
    tags: ["화장실", "줄눈", "실리콘", "곰팡이", "락스", "욕실 청소"],
    readingTime: 7,
  },
  {
    id: "8",
    title: "인덕션(하이라이트) 상판 탄 자국 및 찌든 때 전용 세제 활용 제거법",
    summary:
      "세라믹 상판 탄 자국 특성, 전용 세제·스크래퍼 세척 원리, 냉각·도포·불림·닦기 공정, 즉시 닦기·냄비 바닥·전용 세제 습관을 정리했습니다.",
    content: POST_CONTENTS["induction-cooktop-burnt-stain-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-03",
    slug: "induction-cooktop-burnt-stain-clean",
    views: 0,
    tags: ["인덕션", "하이라이트", "탄 자국", "전용 세제", "주방 청소"],
    readingTime: 7,
  },
  {
    id: "7",
    title: "에어프라이어 내부 기름때 세척 및 코팅 보호 관리법: 오래 사용하는 노하우",
    summary:
      "기름때·탄화 원인, 코팅 보호 세척 원리, 바스켓 온수 불림·열선 수증기 관리, 철수세미 금지·호일·완전 건조 등 사용 습관을 정리했습니다.",
    content: POST_CONTENTS["air-fryer-grease-coating-care"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-02",
    slug: "air-fryer-grease-coating-care",
    views: 0,
    tags: ["에어프라이어", "기름때", "코팅 보호", "주방 청소", "에어프라이어 관리"],
    readingTime: 7,
  },
  {
    id: "6",
    title: "냉장고 성에 제거 및 오래된 반찬 냄새 완벽 해결법: 냉장고 관리 가이드",
    summary:
      "성에·악취 원인, 전원 차단·자연 해동·물기 제거, 베이킹소다 내부 청소·탈취, 반찬 정리, 문 여닫기·패킹·뜨거운 음식 보관 습관을 정리했습니다.",
    content: POST_CONTENTS["refrigerator-frost-odor-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-05-01",
    slug: "refrigerator-frost-odor-clean",
    views: 0,
    tags: ["냉장고", "성에 제거", "냉장고 악취", "베이킹소다", "냉장고 관리"],
    readingTime: 7,
  },
  {
    id: "5",
    title: "싱크대 배수구 악취 및 초파리 완벽 퇴치 가이드: 천연 세제 발포 원리 활용법",
    summary:
      "배수구 악취·초파리 원인, 베이킹소다·식초 발포·중화 원리, 거름망 분리·도포·15~20분 침지·끓는 물 살균 순서, 환기·화상 예방 등 유의사항을 정리했습니다.",
    content: POST_CONTENTS["sink-drain-odor-fruit-fly-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-04-30",
    slug: "sink-drain-odor-fruit-fly-clean",
    views: 0,
    tags: ["싱크대 배수구", "악취", "초파리", "베이킹소다", "식초", "주방 청소"],
    readingTime: 8,
  },
  {
    id: "1",
    title: "베이킹소다(탄산수소나트륨)를 활용한 탄 냄비 복원 기술: 물리적 손상을 방지하는 친환경 세척 원리 및 가이드",
    summary:
      "철수세미의 위험성, 베이킹소다의 중화·열분해 원리, 표준 세척 공정(도포·가열·침지·헹굼), 식초 시너지, 재질별 주의사항을 원고 전체 기준으로 정리했습니다.",
    content: POST_CONTENTS["burnt-pot-baking-soda-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-04-29",
    slug: "burnt-pot-baking-soda-clean",
    views: 0,
    tags: ["탄 냄비", "베이킹소다", "냄비 청소", "탄산수소나트륨", "주방 청소"],
    readingTime: 9,
  },
  {
    id: "2",
    title: "주방 후드 끈적이는 기름때 완벽 제거 가이드: 과탄산소다 활용법",
    summary:
      "후드 필터 기름때의 원인, 과탄산소다 비누화·산소 기포 원리, 비닐봉지 침지 세척 순서, 환기·장갑·재질 확인 등 유의사항을 정리했습니다.",
    content: POST_CONTENTS["hood-grease-percarbonate-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-04-28",
    slug: "hood-grease-percarbonate-clean",
    views: 0,
    tags: ["주방 후드", "기름때", "과탄산소다", "후드 필터 청소", "주방 청소"],
    readingTime: 8,
  },
  {
    id: "3",
    title: "전자레인지 내부 찌든 때 5분 만에 청소하는 완벽 가이드: 수증기 활용법",
    summary:
      "전자레인지 찌든 때 원인, 식초·수증기 분해 원리, 5분 가열·3~5분 불림·닦기 순서, 회전판 세척, 환기 건조 및 안전 유의사항을 정리했습니다.",
    content: POST_CONTENTS["microwave-steam-vinegar-clean"],
    category: LIST_CATEGORY_SLUG,
    date: "2026-04-27",
    slug: "microwave-steam-vinegar-clean",
    views: 0,
    tags: ["전자레인지 청소", "찌든 때", "식초", "수증기", "주방 청소"],
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

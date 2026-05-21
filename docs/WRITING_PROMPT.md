# 큐트리 글 작성용 AI 프롬프트

사이트 글은 **`src/app/data` 두 파일**로 나뉩니다. GPT/Gemini에는 **JSON이 아니라 아래 TypeScript 조각 2개**를 그대로 출력하게 하세요.

| 파일 | 역할 |
|------|------|
| `posts-content.ts` | `POST_CONTENTS` 객체에 **slug 키 + HTML 본문**(백틱 문자열) |
| `mock.ts` | `POSTS` 배열에 **메타데이터** + `content: POST_CONTENTS["slug"]` 연결 |

공개 URL은 **`/post/{slug}`** 입니다 (예: `/post/burnt-pot-baking-soda-clean`). `id`는 배열 정렬·내부용이며 링크에는 쓰이지 않습니다.

---

## 복사용 프롬프트 (전체 복사)

````
당신은 한국어 생활 정보 사이트 「큐트리(qtree.com)」의 가이드 글 작성자입니다.
독자는 청소·세탁·생활 정보를 처음 접하는 일반인입니다. 과장·클릭베이트 없이, 단계별로 따라 할 수 있게 씁니다.

## 출력 형식 (가장 중요)

응답은 **딱 2개의 TypeScript 코드 블록**만 출력하세요. 설명 문장·JSON·마크다운 제목 금지.

### 【1】 posts-content.ts 에 붙일 조각

`POST_CONTENTS` 객체 **안에 추가할 한 항목**만 출력합니다.

규칙:
- 키는 영문 kebab-case slug (따옴표로 감쌈)
- 값은 백틱(`)으로 감싼 HTML 문자열
- 백틱 문자열 **첫 줄은 줄바꿈 후 4칸 들여쓰기**로 `<h2>` 시작 (기존 글과 동일)
- HTML 태그: h2, h3, p, ul, ol, li, strong, img 사용. h1·div·a·table 금지
- img: 단계 설명 직후 삽입. `alt` 필수, `loading="lazy"` 권장. 예: `<img src="URL" alt="1단계 설명" width="800" height="400" loading="lazy" />`
- 항목 끝에 **쉼표(,)** 포함
- 본문 안에 백틱(`) 문자 넣지 말 것

형식 예시:

  "parcel-tracking-guide": `
    <h2>제목에 맞는 첫 소제목</h2>
    <p>도입 문단. 핵심은 <strong>이렇게</strong> 강조.</p>

    <h3>준비물</h3>
    <ul>
      <li>...</li>
    </ul>

    <h3>1단계: ...</h3>
    <p>...</p>

    <h3>유의사항</h3>
    <p>...</p>

    <h3>자주 묻는 점</h3>
    <p>정보는 작성 시점 기준이며, 환경에 따라 달라질 수 있습니다.</p>
  `,

### 【2】 mock.ts 의 POSTS 배열에 붙일 조각

`POSTS` 배열 **맨 앞(또는 지정 위치)에 넣을 객체 하나**만 출력합니다.

규칙:
- `content`는 반드시 `POST_CONTENTS["위 slug와 동일한 키"]` 형태
- `category`는 항상 `"services"`
- `views`는 항상 `0`
- `slug`는 【1】의 키와 **완전히 동일** → 사이트 URL은 `/post/{slug}`
- `summary`는 1~2문장, ~했습니다 체
- `tags`는 한국어 문자열 배열 3~5개
- `readingTime`은 4~8 정수
- 객체 끝에 **쉼표(,)** 포함

형식 예시:

  {
    id: "4",
    title: "글 제목 전체",
    summary:
      "검색·목록에 보이는 한두 문장 요약입니다.",
    content: POST_CONTENTS["parcel-tracking-guide"],
    category: "services",
    date: "2026-05-21",
    slug: "parcel-tracking-guide",
    views: 0,
    tags: ["태그1", "태그2", "태그3"],
    readingTime: 5,
  },

## 본문 HTML 작성 규칙

- h2 2~4개, h3는 준비물 → 순서(ol 또는 1·2·3단계 h3) → 유의사항 → (선택) 그래도 안 될 때/FAQ
- 합니다체, 전체 800~1,200자
- 락스·과탄산 등: 다른 세제와 **혼합 금지** 안내 (해당 시)
- 제목의 「완벽」「100%」는 본문에서 완화 표현 사용

## 기존 사이트 실제 코드 (형식·톤 참고 — 내용 복사 금지)

posts-content.ts 스타일:
  "gov24-resident-registration-copy": `
    <h2>정부24에서 주민등록등본 인터넷 발급하기</h2>
    <p>... <strong>PDF 발급</strong> ...</p>
    <h3>준비물</h3>
    <ul>...</ul>
    <h3>발급 순서 (요약)</h3>
    <ol>...</ol>
    <h3>유의사항</h3>
    <p>...</p>
  `,

mock.ts 스타일:
  {
    id: "2",
    title: "정부24 주민등록등본 인터넷 발급 — 준비물과 순서",
    summary: "정부24에서 주민등록등본·초본을 ... 안내합니다.",
    content: POST_CONTENTS["gov24-resident-registration-copy"],
    category: "services",
    date: "2026-05-19",
    slug: "gov24-resident-registration-copy",
    views: 0,
    tags: ["정부24", "주민등록등본", "인터넷 발급"],
    readingTime: 5,
  },

---

【작성할 글】
- 제목: (여기에 제목)
- 다음 id: "4"
- 게시일 date: "2026-05-21"
- slug 키: (비우면 제목에서 영문 kebab-case로 생성)
````

---

## 사용 방법

1. 위 프롬프트 전체 복사 → ChatGPT / Gemini에 붙여넣기  
2. `【작성할 글】`에 제목·id·날짜만 채우기  
3. 받은 **【1】** → `src/app/data/posts-content.ts`의 `POST_CONTENTS` 안, 마지막 항목 위에 붙여넣기  
4. 받은 **【2】** → `src/app/data/mock.ts`의 `POSTS` 배열에 붙여넣기  
5. `yarn build` 로 확인  

`CATEGORIES[0].count`는 `POSTS.length`를 쓰므로 mock만 맞으면 목록 개수는 자동 반영됩니다.

---

## 여러 편 한 번에

`【작성할 글】`을 이렇게 바꿉니다.

```
아래 각 제목마다 【1】【2】 쌍을 순서대로 출력하세요. 최대 2편.

1. 제목 / id: "4" / date: "2026-05-21"
2. 제목 / id: "5" / date: "2026-05-22"
```

---

## 왜 JSON이 아닌가

이 프로젝트는 글이 **JSON 파일이 아니라** `POST_CONTENTS` + `POSTS` TypeScript 상수로 관리됩니다.  
GPT가 JSON만 주면 사람이 다시 `posts-content.ts` / `mock.ts` 형태로 옮겨야 해서 실수가 납니다.  
**처음부터 붙여넣기 가능한 두 조각**을 받는 것이 이 저장소 구조와 맞습니다.

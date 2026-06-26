# Google AdSense 승인 체크리스트 — 큐트리(qtree.kr)

생활관리(청소·세탁·가전·생활공간) 정보 매거진의 AdSense 승인 준비 상태를 정리한 문서입니다.
2026-06-26 전면 개편(레퍼런스형 전환) 기준으로 갱신했습니다.

## 콘텐츠 (Content)

- [x] **54편 게시글** — 6개 카테고리로 분류
  - 주방 11 · 욕실 9 · 세탁·의류 9 · 가전 7 · 생활공간 15 · 세제·안전상식 3
- [x] **레퍼런스 표준** — 전 글에 TL;DR 요약 / 재질·오염별 비교표 / 안전 콜아웃 / FAQ / 참고 출처
- [x] **독창적 콘텐츠** — 복사·표절 없음. 세제·재질의 원리와 안전 기준 중심
- [x] **객관적 톤** — 가짜 1인칭 경험담 제거, "출처 검증·정리" 기조로 통일(제목·요약·About 포함)
- [x] **고유 가치 허브** — "세제·안전상식"에 섞으면 위험한 조합·pH별 세제·재질별 금지 세제 표
- [ ] **이미지** — 실사진 없음(AI 제작). 표·도식으로 보완 중. (잔존 약점)

## 필수 페이지 (Required Pages)

- [x] About `/about` · Contact `/contact`(이메일 + 폼)
- [x] Privacy Policy `/privacy-policy` — Google AdSense·제3자 쿠키·맞춤형 광고 고지 포함(필수요건)
- [x] Terms `/terms` · Cookies `/cookies`

## 네비게이션·구조

- [x] 헤더 6개 카테고리 + 소개·문의, 푸터 카테고리·법적고지 링크
- [x] 매거진형 홈(카테고리 섹션) · 카테고리별 목록 · 글 상세 관련글 추천 · Breadcrumb
- [x] 커스텀 404 · 로딩 Skeleton

## SEO·기술

- [x] robots.txt(주요 페이지 색인 허용, /api·/admin 차단)
- [x] sitemap.xml 자동 생성(글·카테고리·법적페이지 포함, 검색결과 제외)
- [x] 메타 태그·OG(동적 opengraph-image.tsx PNG)·canonical(홈/글/카테고리/about/contact)
- [x] JSON-LD: 글 BlogPosting + FAQPage 구조화 데이터
- [x] 검색결과 페이지 noindex(thin content 방지)
- [x] Next.js 16 · 반응형 · 한국어(lang=ko)

## 광고 설정

- [x] ads.txt(`pub-2643737170468374`)
- [x] AdSense 스크립트 로드 / google-adsense-account 메타
- [x] 승인 전 빈 광고 유닛 없음(권장 상태) — 승인 후 ad unit 배치

## 재신청 전 할 일

1. 배포(빌드 클린 확인됨)
2. Search Console에 sitemap 재제출 + 변경 콘텐츠 색인 요청
3. 며칠 색인 대기 후 AdSense 재신청

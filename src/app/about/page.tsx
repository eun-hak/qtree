import React from "react";
import Link from "next/link";
import { ChevronRight, Target, Users, BookOpen, Shield, PencilLine } from "lucide-react";
import { pageTitle, SITE_DESCRIPTION, SITE_NAME } from "../../lib/site";

export const metadata = {
  title: pageTitle("사이트 소개"),
  description: `${SITE_NAME}는 주방·욕실·세탁·거실 등 집안 청소와 세탁, 가전·공간 관리를 단계별로 정리하는 실전 생활 가이드입니다.`,
  openGraph: {
    title: pageTitle("사이트 소개"),
    description: SITE_DESCRIPTION,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 max-w-3xl py-8">
      <div className="mb-5">
        <div className="flex items-center text-xs text-gray-500">
          <Link href="/" className="hover:text-emerald-600 cursor-pointer">
            홈
          </Link>
          <ChevronRight className="h-3 w-3 mx-1" />
          <span className="font-medium text-gray-900">사이트 소개</span>
        </div>
      </div>

      <article className="prose prose-sm max-w-none">
        <h1 className="text-2xl font-bold mb-2 text-gray-900">
          {SITE_NAME} 소개
        </h1>
        <p className="text-base text-gray-600 mb-8 leading-relaxed">
          {SITE_DESCRIPTION}
        </p>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-emerald-100 p-2 rounded-md">
              <Target className="h-4 w-4 text-emerald-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 m-0">사이트 목적</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3 text-sm">
            {SITE_NAME}는 집안에서 자주 겪는 청소·세탁·가전·공간 관리 문제를{" "}
            <strong>직접 해보고 단계별로 정리</strong>하는 것을 목표로 합니다.
            준비물, 순서, 주의할 점을 골라 바로 따라 할 수 있게 씁니다.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            같은 세제라도 재질·오염 종류에 따라 방법이 달라 막막한 경우가
            많습니다. 화학 원리와 실제 작업 순서를 함께 설명해, 안전하고
            효율적으로 해결할 수 있도록 돕습니다.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-teal-100 p-2 rounded-md">
              <BookOpen className="h-4 w-4 text-teal-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 m-0">다루는 주제 예시</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <h3 className="text-sm font-bold text-emerald-900 mb-1.5">주방</h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                탄 냄비, 후드 기름때, 싱크대 배수구, 전자레인지·식기세척기
                내부 청소 등
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="text-sm font-bold text-green-900 mb-1.5">욕실</h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                변기·욕조 찌든 때, 줄눈 곰팡이, 거울 물때, 환풍기·배수구
                관리 등
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <h3 className="text-sm font-bold text-amber-900 mb-1.5">세탁·의류</h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                얼룩·핏자국 제거, 패딩·니트 세탁, 운동화·수건 관리,
                세탁기 패킹 위생 등
              </p>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
              <h3 className="text-sm font-bold text-rose-900 mb-1.5">거실·침실·현관</h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                벽지·방충망 먼지, 제습기·가습기·선풍기 청소, 옷장·신발장
                관리, 현관 타일 등
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-indigo-100 p-2 rounded-md">
              <PencilLine className="h-4 w-4 text-indigo-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 m-0">
              누가, 어떻게 쓰나요
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3 text-sm">
            {SITE_NAME}는 1인 가구·신혼·반려동물 가정 등에서 실제로 살림을 해 온
            운영자와 편집팀이 함께 만듭니다. 새로 다루는 청소·세탁 방법은
            글로 정리하기 전에 <strong>직접 집에서 따라 해 보는 것</strong>을 원칙으로 합니다.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3 text-sm">
            그래서 각 글에는 단순 정보뿐 아니라 <strong>실제로 해 보니 효과가 있었던
            순서</strong>, 처음에 실패했던 부분, 재질을 상하게 했던 실수처럼
            직접 겪은 시행착오를 함께 담으려고 합니다. 제품 사용법이 헷갈릴 때는
            제조사 공식 안내와 성분 표기를 교차 확인한 뒤 반영합니다.
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <strong>직접 시험</strong> — 가능한 방법은 집안 환경에서 먼저 따라 해 보고 기록
            </li>
            <li>
              <strong>정기 점검</strong> — 더 나은 방법을 찾으면 기존 글을 수정·보완
            </li>
            <li>
              <strong>독자 피드백 반영</strong> — 제보된 오류·보완점을 검토 후 갱신
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-100 p-2 rounded-md">
              <Shield className="h-4 w-4 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 m-0">콘텐츠 원칙</h2>
          </div>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <strong>실용성</strong> — 준비물·단계·주의사항을 중심으로 정리
            </li>
            <li>
              <strong>명확한 표현</strong> — 세제·재질별 차이를 풀어서 설명
            </li>
            <li>
              <strong>안전</strong> — 락스·산성 세제 혼합 금지 등 위험 요소 명시
            </li>
            <li>
              <strong>신뢰</strong> — 과장·클릭 유도 제목을 피하고 정보 목적 유지
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-sky-100 p-2 rounded-md">
              <Users className="h-4 w-4 text-sky-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 m-0">운영 안내</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3 text-sm">
            {SITE_NAME}의 안내는 작성 시점에 직접 시도한 일반적인 방법을
            바탕으로 합니다. 제품·재질·오염 상태에 따라 결과가 달라질 수
            있으니, 민감한 소재는 눈에 띄지 않는 곳에서 먼저 테스트하고{" "}
            <strong>제품 공식 안내</strong>를 함께 확인해 주세요.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            오류나 보완이 필요한 내용이 있으면 알려주시면 검토 후 반영하겠습니다.
          </p>
        </section>

        <section className="mb-6">
          <div className="bg-emerald-600 text-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-2">문의·제안</h2>
            <p className="mb-4 text-emerald-100 text-sm">
              다루었으면 하는 주제나 수정이 필요한 부분이 있으면 연락해 주세요.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-emerald-600 px-5 py-2 rounded-md font-semibold text-sm hover:bg-emerald-50 transition-colors no-underline"
            >
              문의하기
            </Link>
          </div>
        </section>

        <section className="text-xs text-gray-500 border-t pt-6">
          <p>
            <strong>면책:</strong> 본 사이트 콘텐츠는 참고용이며, 세제 사용·
            청소 작업에 따른 손상·건강 문제에 대한 책임은 이용자에게 있습니다.
            전기·가스 작업은 전문가에게 문의하세요.
          </p>
        </section>
      </article>
    </div>
  );
}

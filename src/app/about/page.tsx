import React from "react";
import Link from "next/link";
import { ChevronRight, Target, Users, BookOpen, Shield } from "lucide-react";
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

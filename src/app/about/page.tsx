import React from "react";
import Link from "next/link";
import { ChevronRight, Target, Users, BookOpen, Shield } from "lucide-react";
import { pageTitle, SITE_DESCRIPTION, SITE_NAME } from "../../lib/site";

export const metadata = {
  title: pageTitle("사이트 소개"),
  description: `${SITE_NAME}는 생활 속 온라인 서비스 조회·신청·발급·설정 방법을 정리하는 정보 사이트입니다.`,
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
            {SITE_NAME}는 일상에서 자주 쓰는 온라인 서비스—택배 조회, 우편·등기,
            정부24 발급, 각종 신청·접수, 앱·브라우저 설정 등—을{" "}
            <strong>처음 접하는 분도 따라 할 수 있게</strong> 정리하는 것을
            목표로 합니다.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            화면마다 메뉴 이름이 바뀌고 인증 방식이 달라 막막한 경우가 많습니다.
            우리는 필요한 준비물, 순서, 주의할 점만 골라 실용적으로 안내합니다.
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
              <h3 className="text-sm font-bold text-emerald-900 mb-1.5">조회·발급</h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                택배 배송조회, 등기·우편, 정부24 주민등록등본·가족관계증명서,
                자동차세 조회 등
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="text-sm font-bold text-green-900 mb-1.5">신청·접수</h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                전입신고, 확정일자, 큐넷 원서접수, 요양보호사 CBT 등 온라인
                신청 절차
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <h3 className="text-sm font-bold text-amber-900 mb-1.5">앱·도구</h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                카카오톡 백업, PDF 용량 줄이기, 크롬 팝업 설정, 네이버·토스
                인증 등
              </p>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
              <h3 className="text-sm font-bold text-rose-900 mb-1.5">생활 정보</h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                무료 챗GPT 이용, 쿠팡 영수증 출력 등 일상에서 유용한 디지털
                사용 팁
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
              <strong>실용성</strong> — 바로 따라 할 수 있는 순서와 준비물 중심
            </li>
            <li>
              <strong>명확한 표현</strong> — 어려운 용어는 풀어서 설명
            </li>
            <li>
              <strong>신뢰</strong> — 과장·클릭 유도 제목을 피하고 정보 목적 유지
            </li>
            <li>
              <strong>최신성</strong> — 서비스 개편에 맞춰 정기적으로 내용 점검
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
            {SITE_NAME}의 안내는 작성 시점의 일반적인 절차를 바탕으로 합니다.
            기관·앱·웹사이트 정책이 바뀌면 실제 화면과 다를 수 있으니, 반드시{" "}
            <strong>해당 서비스 공식 안내</strong>를 함께 확인해 주세요.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            오류나 최신 변경 사항을 알려주시면 검토 후 반영하겠습니다.
          </p>
        </section>

        <section className="mb-6">
          <div className="bg-emerald-600 text-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-2">문의·제안</h2>
            <p className="mb-4 text-emerald-100 text-sm">
              다루었으면 하는 서비스나 수정이 필요한 부분이 있으면 연락해 주세요.
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
            <strong>면책:</strong> 본 사이트 콘텐츠는 참고용이며, 법적·행정적
            효력은 각 공식 기관·서비스의 안내를 따릅니다.
          </p>
        </section>
      </article>
    </div>
  );
}

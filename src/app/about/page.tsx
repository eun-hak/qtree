import React from "react";
import Link from "next/link";
import { ChevronRight, Target, Flame, Shield, PencilLine, AlertTriangle } from "lucide-react";
import {
  pageTitle,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_NAME_EUN,
  SITE_AUTHOR,
  SITE_AUTHOR_BIO,
  MEDICAL_DISCLAIMER,
} from "../../lib/site";
import { ALL_CATEGORY_DEFS } from "../data/mock";

export const metadata = {
  title: pageTitle("사이트 소개"),
  description: `${SITE_NAME_EUN} 운동과 일상에서 겪은 염증·통증을 병원 진료와 함께 기록하는 개인 사이트입니다.`,
  alternates: { canonical: "/about" },
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
          <Link href="/" className="hover:text-teal-600 cursor-pointer">
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
          운동과 일상에서 겪은 염증·통증을 병원 진료와 함께 기록하는
          개인 사이트입니다.
        </p>

        {/* 무엇을 기록하나 */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-teal-100 p-2 rounded-md">
              <Target className="h-4 w-4 text-teal-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 m-0">무엇을 기록하나요</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3 text-sm">
            운동을 하다, 또 일상을 지내다 생긴 염증과 통증을 겪었습니다.
            증상이 시작된 시점부터 병원에서 진단을 받고 회복하기까지의 과정을
            기억나는 대로가 아니라 <strong>남아 있는 기록 그대로</strong> 정리합니다.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            같은 증상을 검색하던 때, 정작 알고 싶었던 것은 &ldquo;무슨 병인지&rdquo;보다
            <strong> &ldquo;이게 위험한 건지, 병원에 가야 하는지, 얼마나 걸리는지&rdquo;</strong>
            였습니다. 그 답이 잘 보이지 않아 답답했던 경험이 이 기록을 남기는 이유입니다.
          </p>
        </section>

        {/* 다루는 주제 */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-orange-100 p-2 rounded-md">
              <Flame className="h-4 w-4 text-orange-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 m-0">다루는 주제</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ALL_CATEGORY_DEFS.map((cat) => (
              <div
                key={cat.slug}
                className="bg-gray-50 p-4 rounded-lg border border-gray-100"
              >
                <h3 className="text-sm font-bold text-gray-900 mb-1.5">
                  {cat.name}
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 누가 쓰나 */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-indigo-100 p-2 rounded-md">
              <PencilLine className="h-4 w-4 text-indigo-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 m-0">누가 쓰나요</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3 text-sm">
            <strong>{SITE_AUTHOR}</strong>가 씁니다. {SITE_AUTHOR_BIO}
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            그래서 이 사이트는 <strong>겪지 않은 증상은 다루지 않습니다.</strong>
            직접 겪은 일만, 진료받은 내용과 남은 기록을 근거로 씁니다.
          </p>
        </section>

        {/* 글을 쓰는 원칙 */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-slate-100 p-2 rounded-md">
              <Shield className="h-4 w-4 text-slate-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 m-0">글을 쓰는 원칙</h2>
          </div>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <strong>치료법을 말하지 않습니다</strong> — &ldquo;이렇게 하면 낫는다&rdquo;가 아니라
              &ldquo;나는 이랬고, 병원에서 이런 말을 들었다&rdquo;로 씁니다.
            </li>
            <li>
              <strong>병원에 가야 하는 신호를 먼저 씁니다</strong> — 위험한 증상은 글 맨 앞에 둡니다.
            </li>
            <li>
              <strong>효과 없던 것도 씁니다</strong> — 도움이 된 것만 골라 쓰지 않습니다.
            </li>
            <li>
              <strong>의학 정보는 출처를 밝힙니다</strong> — 진료받은 내용과 공개된 의학 자료를 구분해 표기합니다.
            </li>
            <li>
              <strong>약·보조제 효능을 단정하지 않습니다.</strong>
            </li>
          </ul>
        </section>

        {/* 의료 면책 */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-red-100 p-2 rounded-md">
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 m-0">
              꼭 읽어주세요 (의료 면책)
            </h2>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-900 leading-relaxed m-0">
              {MEDICAL_DISCLAIMER}
            </p>
          </div>
        </section>

        <section className="mb-6">
          <div className="bg-teal-600 text-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-2">문의·정정 요청</h2>
            <p className="mb-4 text-teal-100 text-sm">
              내용에 사실과 다른 부분이 있거나, 더 궁금한 점이 있으면 알려주세요.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-teal-600 px-5 py-2 rounded-md font-semibold text-sm hover:bg-teal-50 transition-colors no-underline"
            >
              문의하기
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

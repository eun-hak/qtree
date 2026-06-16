import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { pageTitle, SITE_EMAIL, SITE_NAME, SITE_NAME_EUN } from '../../lib/site';

export const metadata = {
  title: pageTitle('쿠키 정책'),
  description: `${SITE_NAME}의 쿠키 정책을 확인하세요.`,
};

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-600 cursor-pointer">홈</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium text-gray-900">쿠키 정책</span>
        </div>
      </div>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">쿠키 정책</h1>
        <p className="text-gray-500 mb-8">최종 수정일: 2026년 6월 16일</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">1. 쿠키란?</h2>
          <p className="text-gray-700 leading-relaxed">
            쿠키는 웹사이트를 방문할 때 브라우저에 저장되는 작은 텍스트 파일입니다. 쿠키는 웹사이트가 사용자의 기기를 인식하고, 
            방문 통계를 수집하며, 맞춤형 광고를 제공하는 데 활용됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">2. 쿠키의 사용 목적</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {SITE_NAME_EUN} 다음의 목적을 위해 쿠키를 사용합니다:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>성능 쿠키:</strong> 방문자 통계 및 웹사이트 성능 분석을 위한 쿠키입니다.</li>
            <li><strong>광고 쿠키:</strong> Google AdSense 등 제3자 광고 서비스에서 맞춤형 광고를 제공하기 위해 사용되는 쿠키입니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">3. 사용하는 쿠키의 종류</h2>

          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-4">
            <h3 className="font-semibold mb-3 text-gray-900">성능 및 분석 쿠키</h3>
            <p className="text-gray-700 mb-3 text-base leading-relaxed">
              방문자가 웹사이트를 이용하는 방식을 수집하여 서비스 개선에 활용합니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-300 bg-gray-100">
                    <th className="text-left py-2 px-3 font-semibold text-gray-900 w-[22%]">쿠키 이름</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-900">목적</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-900 w-[18%]">보관 기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-3 text-gray-700 font-mono">_ga</td>
                    <td className="py-2 px-3 text-gray-700">Google Analytics - 방문자 구분</td>
                    <td className="py-2 px-3 text-gray-700">2년</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-3 text-gray-700 font-mono">_gid</td>
                    <td className="py-2 px-3 text-gray-700">Google Analytics - 방문자 구분</td>
                    <td className="py-2 px-3 text-gray-700">24시간</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="not-prose bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-900">광고 쿠키 (Google AdSense)</h3>
            <p className="text-gray-700 mb-3 text-base leading-relaxed">
              Google AdSense는 사용자의 이전 방문 정보를 기반으로 관련성 높은 광고를 제공하기 위해 쿠키를 사용합니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-300 bg-gray-100">
                    <th className="text-left py-2 px-3 font-semibold text-gray-900 w-[22%]">쿠키 이름</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-900">목적</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-900 w-[18%]">보관 기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-3 text-gray-700 font-mono">_gads</td>
                    <td className="py-2 px-3 text-gray-700">Google AdSense - 광고 게재</td>
                    <td className="py-2 px-3 text-gray-700">13개월</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-3 text-gray-700 font-mono">_gac_*</td>
                    <td className="py-2 px-3 text-gray-700">Google 광고 캠페인 정보</td>
                    <td className="py-2 px-3 text-gray-700">90일</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-3 text-gray-700 font-mono">id</td>
                    <td className="py-2 px-3 text-gray-700">Google 맞춤형 광고 - 관심사 기반 식별</td>
                    <td className="py-2 px-3 text-gray-700">13개월</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">4. 제3자 쿠키</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {SITE_NAME_EUN} 서비스 향상을 위해 다음과 같은 제3자 서비스를 사용할 수 있으며, 이러한 서비스들은 자체 쿠키를 사용할 수 있습니다:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Google Analytics:</strong> 웹사이트 방문 통계 분석</li>
            <li><strong>Google AdSense:</strong> 맞춤형 광고 제공. 사용자는 <a href="https://www.google.com/settings/ads" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">Google 광고 설정</a>에서 맞춤형 광고를 해제할 수 있습니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">5. 쿠키 관리 방법</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            대부분의 웹 브라우저는 쿠키에 대한 선택권을 제공합니다. 브라우저 설정을 통해 쿠키를 차단하거나 삭제할 수 있습니다. 
            다만, 쿠키를 차단할 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
          </p>

          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-lg mb-4">
            <h3 className="font-semibold mb-3 text-gray-900">주요 브라우저별 쿠키 설정 방법</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Chrome:</strong> 설정 &gt; 개인정보 및 보안 &gt; 쿠키 및 기타 사이트 데이터</li>
              <li><strong>Firefox:</strong> 옵션 &gt; 개인정보 보호 &amp; 보안 &gt; 쿠키 및 사이트 데이터</li>
              <li><strong>Safari:</strong> 환경설정 &gt; 개인정보 보호 &gt; 쿠키 및 웹 사이트 데이터</li>
              <li><strong>Edge:</strong> 설정 &gt; 쿠키 및 사이트 권한 &gt; 쿠키 및 사이트 데이터</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">6. 쿠키 정책 변경</h2>
          <p className="text-gray-700 leading-relaxed">
            {SITE_NAME_EUN} 법률, 규정 또는 운영상의 필요에 따라 이 쿠키 정책을 수정할 수 있습니다. 
            변경사항이 있는 경우 웹사이트를 통해 공지합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">7. 문의</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            쿠키 정책에 대한 질문이나 문의사항이 있으시면 아래 연락처로 문의해 주세요.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700">
              <strong>이메일:</strong> {SITE_EMAIL}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

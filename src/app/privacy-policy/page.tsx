import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { pageTitle, SITE_EMAIL, SITE_NAME, SITE_NAME_E, SITE_NAME_EUN } from '../../lib/site';

export const metadata = {
  title: pageTitle('개인정보 처리 방침'),
  description: `${SITE_NAME}의 개인정보 처리 방침을 확인하세요.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-teal-600 cursor-pointer">홈</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium text-gray-900">개인정보 처리 방침</span>
        </div>
      </div>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">개인정보 처리 방침</h1>
        <p className="text-gray-500 mb-8">최종 수정일: 2026년 6월 16일</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">1. 개인정보의 처리 목적</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {SITE_NAME_EUN} 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
            이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>문의 접수 및 답변 처리</li>
            <li>콘텐츠 제공 및 서비스 운영</li>
            <li>광고 서비스 제공 (Google AdSense 등 제3자 광고)</li>
            <li>서비스 이용 통계 분석 및 품질 개선</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">2. 개인정보의 처리 및 보유기간</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {SITE_NAME_EUN} 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 보유·이용기간 내에서 
            개인정보를 처리·보유합니다.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>문의 폼 접수 정보: 문의 처리 완료 후 1년</li>
            <li>접속 로그 및 자동 수집 정보: 수집일로부터 1년</li>
            <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">3. 처리하는 개인정보의 항목</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {SITE_NAME_EUN} 다음의 개인정보 항목을 처리하고 있습니다:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <h3 className="font-semibold mb-2 text-gray-900">문의 폼 이용 시 수집 항목</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>이름</li>
              <li>이메일 주소</li>
              <li>문의 제목 및 내용</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">서비스 이용 중 자동 수집 항목</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>IP 주소</li>
              <li>브라우저 종류 및 OS 정보</li>
              <li>방문 일시 및 서비스 이용 기록</li>
              <li>쿠키 및 기기 정보</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">4. 개인정보의 제3자 제공</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {SITE_NAME_EUN} 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 
            법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">5. 쿠키(Cookie) 및 자동 수집 정보</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {SITE_NAME_EUN} 서비스 제공 및 광고 운영을 위해 쿠키를 사용합니다. 쿠키는 웹사이트가 귀하의 브라우저에 전송하는 작은 텍스트 파일로, 
            귀하의 컴퓨터 하드디스크에 저장됩니다.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>쿠키의 사용 목적:</strong> 방문 통계 분석 및 맞춤형 광고 제공</li>
            <li><strong>쿠키의 거부:</strong> 웹 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다</li>
            <li><strong>쿠키 거부 시:</strong> 일부 서비스 이용에 제한이 생길 수 있습니다</li>
          </ul>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <p className="text-sm text-amber-900">
              <strong>자동으로 수집되는 정보:</strong> IP 주소, 브라우저 종류, OS 종류, 방문 일시, 서비스 이용 기록 등이 자동으로 생성되어 수집될 수 있습니다.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">5-1. 광고 서비스 및 제3자 쿠키</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {SITE_NAME_EUN} 광고 서비스를 제공하기 위해 제3자 광고 제공업체(Google AdSense 등)를 이용합니다.
          </p>
          <div className="not-prose bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
            <h3 className="font-semibold mb-3 text-blue-900">Google AdSense</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-blue-900">
              <li>본 사이트는 Google AdSense를 사용하여 광고를 게재합니다. Google 및 제3자 광고 사업자는 쿠키를 사용하여 사용자의 이전 방문 기록을 기반으로 광고를 게재할 수 있습니다.</li>
              <li>사용자는 <a href="https://www.google.com/settings/ads" className="underline" target="_blank" rel="noopener noreferrer">Google 광고 설정</a>에서 맞춤형 광고를 관리하거나 해제할 수 있습니다.</li>
              <li>Google의 개인정보처리방침: <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            제3자 광고 제공업체는 사용자의 관심사에 기반한 광고를 게재하기 위해 쿠키, 웹 비콘 등의 기술을 사용할 수 있으며, 
            이러한 기술을 통해 수집되는 정보는 해당 제3자의 개인정보처리방침에 따라 관리됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">5-2. 웹 로그 분석</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            서비스 개선 및 통계 분석을 위해 다음과 같은 정보가 자동으로 수집될 수 있습니다:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>방문자의 IP 주소</li>
            <li>브라우저 종류 및 OS 정보</li>
            <li>방문 일시 및 서비스 이용 기록</li>
            <li>방문 경로 (referrer)</li>
            <li>페이지 조회 수 및 체류 시간</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            이러한 정보는 개인을 식별할 수 없는 형태로 수집되며, 통계 자료로만 활용됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">6. 정보주체의 권리·의무 및 행사방법</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            정보주체는 {SITE_NAME_E} 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>개인정보 열람 요구</li>
            <li>개인정보 정정·삭제 요구</li>
            <li>개인정보 처리정지 요구</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">7. 개인정보의 파기</h2>
          <p className="text-gray-700 leading-relaxed">
            {SITE_NAME_EUN} 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">8. 개인정보 보호책임자</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {SITE_NAME_EUN} 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 
            아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700">
              <strong>개인정보 보호책임자</strong><br />
              이메일: {SITE_EMAIL}<br />
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">9. 개인정보 처리방침 변경</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            이 개인정보 처리방침은 2026년 6월 16일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 
            변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
          </p>
          <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
            <p className="text-sm text-teal-900">
              <strong>문의 및 신고:</strong><br />
              개인정보 처리방침에 대한 문의사항이 있으시면 <Link href="/contact" className="underline font-semibold">문의하기</Link> 페이지를 통해 연락해 주시기 바랍니다.<br />
              이메일: {SITE_EMAIL}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

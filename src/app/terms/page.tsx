import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { pageTitle, SITE_NAME } from '../../lib/site';

export const metadata = {
  title: pageTitle('이용약관'),
  description: `${SITE_NAME}의 서비스 이용약관을 확인하세요.`,
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-teal-600 cursor-pointer">홈</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium text-gray-900">이용약관</span>
        </div>
      </div>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">서비스 이용약관</h1>
        <p className="text-gray-500 mb-8">최종 수정일: 2026년 6월 16일</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">제1조 (목적)</h2>
          <p className="text-gray-700 leading-relaxed">
            이 약관은 {SITE_NAME}(이하 &quot;사이트&quot;)가 제공하는 콘텐츠 서비스(이하 &quot;서비스&quot;)의 이용과 관련하여 
            사이트와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">제2조 (정의)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>&quot;서비스&quot;</strong>란 사이트가 제공하는 개인 건강 경험 기록 콘텐츠 조회 서비스를 의미합니다.</li>
            <li><strong>&quot;이용자&quot;</strong>란 이 약관에 따라 서비스에 접속하여 콘텐츠를 이용하는 자를 말합니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">제3조 (약관의 게시와 개정)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            사이트는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            사이트는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있으며, 약관을 개정할 경우에는 
            적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스 화면에 7일 이전부터 공지합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">제4조 (서비스의 제공)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">사이트는 다음과 같은 서비스를 제공합니다:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>염증·통증·회복 습관 등 운영자가 직접 겪은 건강 경험 기록 콘텐츠 제공</li>
            <li>콘텐츠 검색 및 조회 서비스</li>
            <li>기타 사이트가 추가 개발하거나 제휴계약 등을 통해 이용자에게 제공하는 서비스</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">제5조 (서비스의 중단)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            사이트는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 
            서비스의 제공을 일시적으로 중단할 수 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            사이트는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 
            단, 사이트가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">제6조 (이용자의 의무)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">이용자는 다음 행위를 하여서는 안 됩니다:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>타인의 정보 도용</li>
            <li>사이트가 게시한 정보의 변경</li>
            <li>사이트와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
            <li>사이트 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
            <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 게시하는 행위</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">제7조 (개인정보보호)</h2>
          <p className="text-gray-700 leading-relaxed">
            사이트는 이용자의 개인정보 수집 시 서비스 제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집합니다. 
            사이트는 이용자의 개인정보를 수집·이용하는 때에는 당해 이용자에게 그 목적을 고지하고 동의를 받습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">제8조 (면책조항)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            사이트는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            사이트는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">제9조 (저작권의 귀속 및 이용제한)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            사이트가 작성한 저작물에 대한 저작권 기타 지적재산권은 사이트에 귀속합니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            이용자는 서비스를 이용함으로써 얻은 정보 중 사이트에게 지적재산권이 귀속된 정보를 사이트의 사전 승낙 없이 
            복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">제10조 (콘텐츠 및 광고)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            사이트는 서비스 운영과 관련하여 이용자에게 다양한 정보를 공지사항, 서비스 화면 등의 방법으로 제공할 수 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            사이트는 서비스의 운영과 관련하여 서비스 화면, 홈페이지 등에 광고를 게재할 수 있습니다.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <p className="text-sm text-yellow-900">
              <strong>광고 제공:</strong> 본 서비스는 Google AdSense를 포함한 제3자 광고 서비스를 이용하여 광고를 게재합니다. 
              광고주 또는 광고 네트워크는 쿠키 등의 기술을 사용할 수 있으며, 이는 해당 제3자의 개인정보처리방침을 따릅니다.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">제11조 (금지행위)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">이용자는 서비스 이용 시 다음 각 호의 행위를 하여서는 안 됩니다:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>타인의 정보 도용 및 부정 사용</li>
            <li>사이트의 서비스 정보를 이용하여 얻은 정보를 사이트의 사전 승낙 없이 복제, 유통, 조장하거나 상업적으로 이용하는 행위</li>
            <li>타인의 명예를 손상시키거나 불이익을 주는 행위</li>
            <li>음란물을 게재하거나 음란사이트를 링크하는 행위</li>
            <li>사이트의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위</li>
            <li>공공질서 및 미풍양속에 위반되는 내용을 타인에게 유포하는 행위</li>
            <li>서비스와 관련된 설비의 오동작이나 정보 등의 파괴 및 혼란을 유발시키는 컴퓨터 바이러스 감염 자료를 유포하는 행위</li>
            <li>기타 불법적이거나 부당한 행위</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">제12조 (준거법 및 관할법원)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            이 약관의 해석 및 사이트와 이용자 간의 분쟁에 대하여는 대한민국의 법을 적용합니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            이 약관 및 서비스 이용과 관련하여 발생한 분쟁에 대하여는 대한민국 서울중앙지방법원을 관할법원으로 합니다.
          </p>
        </section>

        <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-gray-900">부칙</h3>
          <p className="text-sm text-gray-600">본 약관은 2026년 6월 16일부터 시행됩니다.</p>
          <p className="text-sm text-gray-600 mt-2">
            이용약관에 대한 문의사항이 있으시면 <Link href="/contact" className="text-teal-600 underline font-semibold">문의하기</Link> 페이지를 통해 연락해 주시기 바랍니다.
          </p>
        </div>
      </article>
    </div>
  );
}

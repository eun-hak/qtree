import React from 'react';
import Link from 'next/link';
import { listCategoryPath } from '../../data/mock';
import { SITE_NAME } from '../../../lib/site';

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-base mb-2 text-gray-900">{SITE_NAME}</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs mb-2">
              택배·우편·공공서비스·앱 설정 등 일상에서 자주 쓰는 온라인 서비스
              사용법을 단계별로 정리하는 생활 정보 블로그입니다.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed max-w-md">
              본 사이트의 안내는 정보 제공 목적이며, 각 기관·서비스의 최신 정책과
              화면은 달라질 수 있습니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">사이트</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="/" className="hover:text-emerald-600">홈</Link></li>
              <li><Link href={listCategoryPath()} className="hover:text-emerald-600">생활서비스</Link></li>
              <li><Link href="/about" className="hover:text-emerald-600">사이트 소개</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-600">문의하기</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">법적 고지</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="/privacy-policy" className="hover:text-emerald-600">개인정보처리방침</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-600">서비스 이용약관</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-600">쿠키 정책</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

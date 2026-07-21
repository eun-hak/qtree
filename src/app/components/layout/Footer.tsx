import React from 'react';
import Link from 'next/link';
import { CATEGORIES, categoryPath } from '../../data/mock';
import { SITE_NAME } from '../../../lib/site';

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="col-span-2">
            <h3 className="font-bold text-base mb-2 text-gray-900">{SITE_NAME}</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs mb-2">
              운동과 일상에서 겪은 염증·통증을 병원 진료와 함께 기록하는
              개인 사이트입니다.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed max-w-md">
              본 사이트의 글은 개인의 경험 기록이며 의학적 진단·치료를
              대신할 수 없습니다. 증상이 있다면 반드시 의료진의 진료를 받으세요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">카테고리</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={categoryPath(cat.slug)} className="hover:text-teal-600">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">사이트</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="/" className="hover:text-teal-600">홈</Link></li>
              <li><Link href="/about" className="hover:text-teal-600">사이트 소개</Link></li>
              <li><Link href="/contact" className="hover:text-teal-600">문의하기</Link></li>
              <li><Link href="/search" className="hover:text-teal-600">검색</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">법적 고지</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="/privacy-policy" className="hover:text-teal-600">개인정보처리방침</Link></li>
              <li><Link href="/terms" className="hover:text-teal-600">서비스 이용약관</Link></li>
              <li><Link href="/cookies" className="hover:text-teal-600">쿠키 정책</Link></li>
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

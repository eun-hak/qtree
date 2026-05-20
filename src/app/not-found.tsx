import React from 'react';
import Link from 'next/link';
import { Button } from './components/ui/button';
import { NotFoundActions } from './components/NotFoundActions';
import { pageTitle } from '../lib/site';
import { LIST_CATEGORY, listCategoryPath } from './data/mock';

export const metadata = {
  title: pageTitle('페이지를 찾을 수 없습니다'),
  description: '요청하신 페이지를 찾을 수 없습니다.',
};

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="mb-6">
          <h1 className="text-7xl font-bold text-gray-200 mb-3">404</h1>
          <h2 className="text-xl font-bold text-gray-900 mb-2">페이지를 찾을 수 없습니다</h2>
          <p className="text-sm text-gray-600 mb-6">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
        </div>

        <NotFoundActions />

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link href={listCategoryPath()}>
            <Button variant="ghost" size="sm" className="text-xs">
              {LIST_CATEGORY.name} 글 목록
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

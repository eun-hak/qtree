'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, ChevronRight } from 'lucide-react';
import { Input } from '../components/ui/input';
import { PostCard } from '../components/blog/PostCard';
import { POSTS, LIST_CATEGORY, listCategoryPath } from '../data/mock';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return POSTS.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const summaryMatch = post.summary.toLowerCase().includes(query);
      const tagsMatch = post.tags?.some(tag => tag.toLowerCase().includes(query));
      const contentMatch = post.content.toLowerCase().includes(query);

      return titleMatch || summaryMatch || tagsMatch || contentMatch;
    });
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 max-w-3xl py-8">
      <div className="mb-5">
        <div className="flex items-center text-xs text-gray-500">
          <Link href="/" className="hover:text-teal-600 cursor-pointer">홈</Link>
          <ChevronRight className="h-3 w-3 mx-1" />
          <span className="font-medium text-gray-900">검색</span>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-xl font-bold mb-1 text-gray-900">게시글 검색</h1>
        <p className="text-sm text-gray-600">
          원하는 정보를 빠르게 찾아보세요
        </p>
      </div>

      <div className="mb-8">
        <div className="relative max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="제목, 내용, 태그로 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 text-sm bg-white border-gray-200 focus:border-teal-500"
            autoFocus
          />
        </div>
        {searchQuery.trim() && (
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-medium">&quot;{searchQuery}&quot;</span> 검색 결과:
            <span className="ml-1 text-teal-600 font-bold">{filteredPosts.length}개</span>
          </p>
        )}
      </div>

      {searchQuery.trim() ? (
        filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPosts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-10 w-10 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-900 mb-1">검색 결과가 없습니다</h3>
            <p className="text-sm text-gray-600 mb-4">
              다른 키워드로 다시 검색해보세요
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              <span className="text-xs text-gray-500">추천 키워드:</span>
              {['늑연골염', '어깨 통증', '전방경사', '위염', '수면'].map(keyword => (
                <Badge
                  key={keyword}
                  variant="secondary"
                  className="cursor-pointer hover:bg-teal-100 text-xs"
                  onClick={() => setSearchQuery(keyword)}
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        )
      ) : (
        <div className="text-center py-12">
          <Search className="h-10 w-10 text-gray-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-gray-900 mb-1">검색어를 입력하세요</h3>
          <p className="text-sm text-gray-600 mb-4">
            제목, 내용, 태그로 원하는 게시글을 찾을 수 있습니다
          </p>
          <div className="flex flex-wrap gap-1.5 justify-center">
            <span className="text-xs text-gray-500">인기 검색어:</span>
            {['염증', '허리 통증', '식도염', '식습관', '회복'].map(keyword => (
              <Badge
                key={keyword}
                variant="secondary"
                className="cursor-pointer hover:bg-teal-100 text-xs"
                onClick={() => setSearchQuery(keyword)}
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 pt-8 border-t border-gray-200 text-center">
        <Link href={listCategoryPath()}>
          <Button variant="outline" size="sm">
            {LIST_CATEGORY.name} 전체 글 보기
          </Button>
        </Link>
      </div>
    </div>
  );
}

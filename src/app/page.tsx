import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS, LIST_CATEGORY, listCategoryPath, postPath } from "./data/mock";
import { PostCard } from "./components/blog/PostCard";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "../lib/site";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
  },
};

function getPopularTags(limit = 16): { tag: string; count: number }[] {
  const counts: Record<string, number> = {};
  for (const post of POSTS) {
    for (const tag of post.tags ?? []) {
      counts[tag] = (counts[tag] ?? 0) + 1;
    }
  }
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag, count]) => ({ tag, count }));
}

export default function Home() {
  const listPath = listCategoryPath();
  const featuredPosts = POSTS.slice(0, 3);
  const popularTags = getPopularTags();

  return (
    <div className="container mx-auto px-4 max-w-5xl flex flex-col gap-12 md:gap-16 pb-16">

      {/* Hero */}
      <section className="py-10 md:py-14 text-center space-y-4 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-gray-900 leading-snug">
          생활 고민,{" "}
          <span className="text-emerald-600">단계별로 정리했습니다</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500 leading-relaxed">
          청소·세탁부터 공공서비스·앱 설정까지
          <br className="hidden sm:block" />
          막막할 때 찾아보기 좋게 직접 해보고 썼습니다.
        </p>
        <div className="flex justify-center pt-3">
          <Link href={listPath}>
            <Button
              size="default"
              className="rounded-full px-8 h-10 bg-emerald-600 hover:bg-emerald-700 text-sm md:text-base"
            >
              {LIST_CATEGORY.name} 보기
            </Button>
          </Link>
        </div>
      </section>

      {/* 추천 콘텐츠 */}
      <section className="w-full">
        <div className="flex items-center justify-between mb-5 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            추천 콘텐츠
          </h2>
          <Link href={listPath}>
            <Button variant="link" className="text-emerald-600 hidden sm:flex text-sm md:text-base p-0 h-auto">
              전체 보기 <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={postPath(post)} className="group block rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all bg-white p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  생활서비스
                </span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                {post.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 최신 글 + 인기 주제 */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">

        {/* 최신 글 */}
        <section className="w-full md:flex-1 min-w-0">
          <div className="flex items-center justify-between mb-5 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              최신 글
            </h2>
            <Link href={listPath}>
              <Button variant="link" className="text-emerald-600 hidden sm:flex text-sm md:text-base p-0 h-auto">
                전체 보기 <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-0.5">
            {POSTS.slice(0, 10).map((post) => (
              <PostCard key={post.slug} post={post} variant="compact" />
            ))}
          </div>
          <div className="mt-5 sm:hidden">
            <Link href={listPath}>
              <Button variant="outline" className="w-full text-emerald-600 border-emerald-200">
                전체 글 보기 <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* 인기 주제 */}
        <aside className="w-full md:w-56 lg:w-64 shrink-0">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 mb-5 md:mb-6">
            인기 주제
          </h2>
          <div className="flex flex-wrap gap-2">
            {popularTags.map(({ tag }) => (
              <Link
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
              >
                <Badge
                  variant="secondary"
                  className="cursor-pointer bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-100 hover:border-emerald-200 transition-colors px-3 py-1 text-sm font-normal rounded-full"
                >
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </aside>
      </div>

    </div>
  );
}

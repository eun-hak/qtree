import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS, CATEGORIES, categoryPath, postPath } from "./data/mock";
import { categoryIcon } from "./data/category-icons";
import { PostCard } from "./components/blog/PostCard";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { SITE_DESCRIPTION, SITE_TITLE } from "../lib/site";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
  },
};

function getPopularTags(limit = 14): { tag: string; count: number }[] {
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

function postsInCategory(slug: string, limit?: number) {
  const list = POSTS.filter((p) => p.category === slug);
  return typeof limit === "number" ? list.slice(0, limit) : list;
}

export default function Home() {
  const [lead, ...restFeatured] = POSTS.slice(0, 3);
  const leadCategory = CATEGORIES.find((c) => c.slug === lead.category);
  const LeadIcon = leadCategory ? categoryIcon(leadCategory.slug) : null;
  const popularTags = getPopularTags();

  return (
    <div className="container mx-auto px-4 max-w-5xl flex flex-col gap-12 md:gap-16 pb-16">

      {/* Hero */}
      <section className="pt-8 pb-2 md:pt-10 text-center space-y-3 max-w-3xl mx-auto w-full">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 leading-snug">
          집안 관리,{" "}
          <span className="text-emerald-600">재질별로 정확하게</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-500 leading-relaxed">
          주방·욕실·세탁·가전·생활공간까지, 세제와 재질의 원리를 확인해
          <br className="hidden sm:block" />
          안전하고 효율적인 방법만 단계별로 정리합니다.
        </p>
      </section>

      {/* 카테고리 바로가기 */}
      <nav aria-label="카테고리" className="-mt-6 md:-mt-10">
        <ul className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const Icon = categoryIcon(cat.slug);
            return (
              <li key={cat.slug}>
                <Link
                  href={categoryPath(cat.slug)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                >
                  <Icon className="h-3.5 w-3.5 text-emerald-600" />
                  {cat.name}
                  <span className="text-xs text-gray-400">{cat.count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 메인 추천 (리드 + 보조 2) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Link
          href={postPath(lead)}
          className="group md:col-span-2 block rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all bg-gradient-to-br from-emerald-50 to-white p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-3 text-xs">
            <span className="inline-flex items-center gap-1 font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              {LeadIcon && <LeadIcon className="h-3 w-3" />}
              {leadCategory?.name}
            </span>
            <span className="text-gray-400">{lead.updated || lead.date}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2">
            {lead.title}
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
            {lead.summary}
          </p>
          <span className="mt-4 inline-flex items-center text-sm font-medium text-emerald-600">
            자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </Link>

        <div className="flex flex-col gap-4">
          {restFeatured.map((post) => {
            const cat = CATEGORIES.find((c) => c.slug === post.category);
            return (
              <Link
                key={post.slug}
                href={postPath(post)}
                className="group flex-1 block rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all bg-white p-4"
              >
                <div className="flex items-center gap-2 mb-2 text-xs">
                  <span className="font-medium text-emerald-600">{cat?.name}</span>
                  <span className="text-gray-400">{post.updated || post.date}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 카테고리별 섹션 (매거진) */}
      {CATEGORIES.map((cat) => {
        const posts = postsInCategory(cat.slug, 3);
        if (posts.length === 0) return null;
        const Icon = categoryIcon(cat.slug);
        return (
          <section key={cat.slug} className="w-full">
            <div className="flex items-end justify-between mb-4 md:mb-5 border-b border-gray-100 pb-2">
              <div>
                <h2 className="flex items-center gap-1.5 text-lg md:text-xl font-bold tracking-tight text-gray-900">
                  <Icon className="h-5 w-5 text-emerald-600" />
                  {cat.name}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">
                  {cat.description}
                </p>
              </div>
              <Link href={categoryPath(cat.slug)}>
                <Button variant="link" className="text-emerald-600 text-sm p-0 h-auto shrink-0">
                  전체 {cat.count}편 <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        );
      })}

      {/* 최신 글 + 인기 주제 */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">
        <section className="w-full md:flex-1 min-w-0">
          <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 mb-4 md:mb-5">
            최근 업데이트
          </h2>
          <div className="space-y-0.5">
            {POSTS.slice(0, 8).map((post) => (
              <PostCard key={post.slug} post={post} variant="compact" />
            ))}
          </div>
        </section>

        <aside className="w-full md:w-56 lg:w-64 shrink-0">
          <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 mb-4 md:mb-5">
            인기 주제
          </h2>
          <div className="flex flex-wrap gap-2">
            {popularTags.map(({ tag }) => (
              <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
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

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  POSTS,
  CATEGORIES,
  ALL_CATEGORY_DEFS,
  categoryPath,
  postPath,
} from "./data/mock";
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

function getPopularTags(limit = 14): string[] {
  const counts: Record<string, number> = {};
  for (const post of POSTS) {
    for (const tag of post.tags ?? []) {
      counts[tag] = (counts[tag] ?? 0) + 1;
    }
  }
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
}

function postsInCategory(slug: string, limit?: number) {
  const list = POSTS.filter((p) => p.category === slug);
  return typeof limit === "number" ? list.slice(0, limit) : list;
}

export default function Home() {
  const hasPosts = POSTS.length > 0;
  const [lead, ...restFeatured] = POSTS.slice(0, 3);
  const leadCategory = lead
    ? CATEGORIES.find((c) => c.slug === lead.category)
    : undefined;
  const LeadIcon = leadCategory ? categoryIcon(leadCategory.slug) : null;
  const popularTags = getPopularTags();

  return (
    <div className="container mx-auto px-4 max-w-5xl flex flex-col gap-12 md:gap-16 pb-16">

      {/* Hero */}
      <section className="pt-8 pb-2 md:pt-10 text-center space-y-3 max-w-3xl mx-auto w-full">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 leading-snug">
          염증과 통증을{" "}
          <span className="text-teal-600">겪으며 기록한 것</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-500 leading-relaxed">
          운동과 일상에서 겪은 증상을 병원 진료와 함께 기록합니다.
          <br className="hidden sm:block" />
          치료법을 말하지 않습니다. 겪은 과정을 남깁니다.
        </p>
      </section>

      {/* 카테고리 바로가기 (글이 있는 분류만) */}
      {CATEGORIES.length > 0 && (
        <nav aria-label="카테고리" className="-mt-6 md:-mt-10">
          <ul className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = categoryIcon(cat.slug);
              return (
                <li key={cat.slug}>
                  <Link
                    href={categoryPath(cat.slug)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm text-gray-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5 text-teal-600" />
                    {cat.name}
                    <span className="text-xs text-gray-400">{cat.count}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* 글이 아직 없을 때: 다룰 주제 안내 */}
      {!hasPosts && (
        <section className="w-full max-w-3xl mx-auto">
          <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-6 md:p-8">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              기록을 준비하고 있습니다
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              직접 겪은 증상만 다룹니다. 진단 과정과 회복까지의 기록을
              차례로 올릴 예정입니다.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ALL_CATEGORY_DEFS.map((cat) => {
                const Icon = categoryIcon(cat.slug);
                return (
                  <li
                    key={cat.slug}
                    className="rounded-xl bg-white border border-gray-100 p-4"
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Icon className="h-4 w-4 text-teal-600" />
                      <span className="font-semibold text-gray-900 text-sm">
                        {cat.name}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {cat.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* 메인 추천 (리드 + 보조 2) */}
      {hasPosts && lead && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link
            href={postPath(lead)}
            className="group md:col-span-2 block rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all bg-gradient-to-br from-teal-50 to-white p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-3 text-xs">
              <span className="inline-flex items-center gap-1 font-medium text-teal-700 bg-teal-100 px-2 py-0.5 rounded">
                {LeadIcon && <LeadIcon className="h-3 w-3" />}
                {leadCategory?.name}
              </span>
              <span className="text-gray-400">{lead.updated || lead.date}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors leading-snug mb-2">
              {lead.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
              {lead.summary}
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-teal-600">
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
                  className="group flex-1 block rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-sm transition-all bg-white p-4"
                >
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span className="font-medium text-teal-600">{cat?.name}</span>
                    <span className="text-gray-400">{post.updated || post.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-teal-700 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* 카테고리별 섹션 */}
      {CATEGORIES.map((cat) => {
        const posts = postsInCategory(cat.slug, 3);
        if (posts.length === 0) return null;
        const Icon = categoryIcon(cat.slug);
        return (
          <section key={cat.slug} className="w-full">
            <div className="flex items-end justify-between mb-4 md:mb-5 border-b border-gray-100 pb-2">
              <div>
                <h2 className="flex items-center gap-1.5 text-lg md:text-xl font-bold tracking-tight text-gray-900">
                  <Icon className="h-5 w-5 text-teal-600" />
                  {cat.name}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">
                  {cat.description}
                </p>
              </div>
              <Link href={categoryPath(cat.slug)}>
                <Button variant="link" className="text-teal-600 text-sm p-0 h-auto shrink-0">
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

      {/* 최근 기록 + 태그 */}
      {hasPosts && (
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">
          <section className="w-full md:flex-1 min-w-0">
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 mb-4 md:mb-5">
              최근 기록
            </h2>
            <div className="space-y-0.5">
              {POSTS.slice(0, 8).map((post) => (
                <PostCard key={post.slug} post={post} variant="compact" />
              ))}
            </div>
          </section>

          {popularTags.length > 0 && (
            <aside className="w-full md:w-56 lg:w-64 shrink-0">
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 mb-4 md:mb-5">
                주요 키워드
              </h2>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
                    <Badge
                      variant="secondary"
                      className="cursor-pointer bg-gray-50 text-gray-700 hover:bg-teal-50 hover:text-teal-700 border border-gray-100 hover:border-teal-200 transition-colors px-3 py-1 text-sm font-normal rounded-full"
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      )}

    </div>
  );
}

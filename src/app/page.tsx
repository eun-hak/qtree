import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS, LIST_CATEGORY, listCategoryPath } from "./data/mock";
import { PostCard } from "./components/blog/PostCard";
import { Button } from "./components/ui/button";
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

export default function Home() {
  const listPath = listCategoryPath();

  return (
    <div className="container mx-auto px-4 max-w-5xl flex flex-col gap-10 md:gap-12 pb-14">
      <section className="py-10 md:py-14 text-center space-y-4 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-gray-900 leading-snug">
          일상 서비스 사용법을{" "}
          <span className="text-emerald-600">쉽게 정리했습니다</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500 leading-relaxed">
          택배 조회, 공공서비스 발급, 앱·브라우저 설정까지
          <br className="hidden sm:block" />
          필요한 절차만 골라 따라 할 수 있습니다.
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

      <section className="w-full">
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
          {POSTS.map((post) => (
            <PostCard key={post.slug} post={post} variant="compact" />
          ))}
        </div>
      </section>
    </div>
  );
}

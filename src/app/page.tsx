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
    <div className="flex flex-col gap-8 pb-12">
      <section className="py-8 md:py-10 text-center space-y-3 max-w-xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 leading-snug">
          일상 서비스 사용법을{" "}
          <span className="text-emerald-600">쉽게 정리했습니다</span>
        </h1>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
          택배 조회, 공공서비스 발급, 앱·브라우저 설정까지
          <br className="hidden sm:block" />
          필요한 절차만 골라 따라 할 수 있습니다.
        </p>
        <div className="flex justify-center pt-2">
          <Link href={listPath}>
            <Button
              size="sm"
              className="rounded-full px-6 bg-emerald-600 hover:bg-emerald-700 text-sm"
            >
              {LIST_CATEGORY.name} 보기
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold tracking-tight text-gray-900">
            최신 글
          </h2>
          <Link href={listPath}>
            <Button variant="link" className="text-emerald-600 hidden sm:flex text-sm p-0 h-auto">
              전체 보기 <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
        <div className="space-y-1">
          {POSTS.map((post) => (
            <PostCard key={post.id} post={post} variant="compact" />
          ))}
        </div>
      </section>
    </div>
  );
}

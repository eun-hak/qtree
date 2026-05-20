import React from "react";
import { Metadata } from "next";
import { POSTS, CATEGORIES } from "../../data/mock";
import { PostCard } from "../../components/blog/PostCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageTitle, SITE_NAME } from "../../../lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "카테고리를 찾을 수 없습니다",
    };
  }

  return {
    title: pageTitle(category.name),
    description: category.description,
    keywords: [category.name, category.slug, "블로그", "카테고리", SITE_NAME],
    openGraph: {
      title: pageTitle(category.name),
      description: category.description,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug || typeof slug !== "string") {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.slug === slug);
  const posts = POSTS.filter((p) => p.category === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 max-w-3xl py-8">
      <div className="mb-3 flex items-center text-xs text-gray-500">
        <Link href="/" className="hover:text-emerald-600 cursor-pointer">
          홈
        </Link>
        <ChevronRight className="h-3 w-3 mx-1" />
        <span className="font-medium text-gray-900">{category.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="mb-6 border-b border-gray-100 pb-4">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
              {category.name}
            </h1>
            <p className="text-sm text-gray-500">{category.description}</p>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id}>
                <PostCard post={post} />
              </div>
            ))}

            {posts.length === 0 && (
              <div className="py-12 text-center text-gray-500 bg-gray-50 rounded-lg text-sm">
                <p>이 카테고리에 글이 없습니다.</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-64 shrink-0 space-y-5">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2 text-sm">
              {category.name} 소개
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {category.description} {category.name} 관련 글을 모아 두었습니다.
              새로운 서비스 사용법 안내가 추가될 때마다 업데이트합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

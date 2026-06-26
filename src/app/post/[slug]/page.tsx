import React from 'react';
import { Metadata } from 'next';
import { POSTS, CATEGORIES, getPostByParam, isLegacyNumericPostUrl, postPath } from '../../data/mock';
import { PostCard } from '../../components/blog/PostCard';
import { TableOfContents } from '../../components/blog/TableOfContents';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { ChevronRight, Calendar, Tag, Share2, Facebook, Twitter, Linkedin, BadgeCheck, PencilLine } from 'lucide-react';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { SITE_NAME, siteUrl } from '../../../lib/site';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostByParam(slug);

    if (!post) {
        return {
            title: '게시물을 찾을 수 없습니다',
        };
    }

    const category = CATEGORIES.find(c => c.slug === post.category);
    const canonical = siteUrl(postPath(post));

    return {
        title: post.title,
        description: post.summary,
        keywords: [post.category, category?.name || '', '블로그', '게시물'],
        alternates: { canonical },
        openGraph: {
            title: post.title,
            description: post.summary,
            type: 'article',
            url: canonical,
            publishedTime: post.date,
            authors: [SITE_NAME],
            tags: [category?.name || post.category],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.summary,
        },
    };
}

export async function generateStaticParams() {
    return POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PostDetailPage({ params }: PageProps) {
    const { slug } = await params;

    if (!slug || typeof slug !== 'string') {
        notFound();
    }

    const post = getPostByParam(slug);

    if (!post) {
        notFound();
    }

    if (isLegacyNumericPostUrl(slug)) {
        redirect(postPath(post));
    }

    const category = CATEGORIES.find(c => c.slug === post.category);
    const relatedPosts = POSTS.filter(
        (p) => p.slug !== post.slug && p.category === post.category
    );

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.summary,
        image: post.coverImage || siteUrl('/opengraph-image'),
        datePublished: post.date,
        dateModified: post.updated || post.date,
        author: {
            '@type': 'Organization',
            name: `${SITE_NAME} 편집팀`,
            description: '집안 청소·세탁·생활관리 방법을 제조사 안내와 공개 자료로 검증해 단계별로 정리하는 편집팀',
            url: siteUrl('/about'),
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
                '@type': 'ImageObject',
                url: siteUrl('/opengraph-image'),
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': siteUrl(postPath(post)),
        },
        keywords: post.tags?.join(', ') || category?.name || '',
        articleSection: category?.name || post.category,
        wordCount: post.content.length,
    };

    const faqJsonLd = post.faqs && post.faqs.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    } : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}

            <article className="pb-8">
            <nav className="bg-gray-50 border-b border-gray-100" aria-label="Breadcrumb">
                <div className="container mx-auto px-4 max-w-5xl py-2">
                    <div className="flex items-center text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-emerald-600 cursor-pointer">홈</Link>
                        <ChevronRight className="h-3 w-3 mx-1 flex-shrink-0" />
                        <Link href={`/category/${post.category}`} className="hover:text-emerald-600 cursor-pointer">
                            {category?.name || post.category}
                        </Link>
                        <ChevronRight className="h-3 w-3 mx-1 flex-shrink-0" />
                        <span className="font-medium text-gray-900 truncate max-w-[200px]">{post.title}</span>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-4 max-w-5xl py-5 flex flex-col md:flex-row gap-5">
                <div className="flex-1 max-w-[680px] mx-auto w-full">

                    <header className="mb-4 text-center md:text-left">
                        <div className="mb-2 flex flex-wrap gap-1.5 items-center justify-center md:justify-start text-xs">
                            <Link href={`/category/${post.category}`}>
                                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 cursor-pointer text-xs px-1.5 py-0">
                                    {category?.name}
                                </Badge>
                            </Link>
                            <span className="text-gray-500 flex items-center gap-1">
                                <Calendar className="h-3 w-3" /> {post.date}
                            </span>
                            {post.readingTime && (
                                <span className="text-gray-500">{post.readingTime}분 읽기</span>
                            )}
                            {post.updated && post.updated !== post.date && (
                                <span className="text-gray-400">업데이트 {post.updated}</span>
                            )}
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-500">
                            <span className="inline-flex items-center gap-1 font-medium text-gray-700">
                                <PencilLine className="h-3 w-3 text-emerald-600" />
                                {SITE_NAME} 편집팀
                            </span>
                            <span className="text-gray-300">·</span>
                            <span className="inline-flex items-center gap-1 text-emerald-700">
                                <BadgeCheck className="h-3 w-3" />
                                자료 검증·정리
                            </span>
                        </div>

                        <h1 className="text-lg md:text-2xl font-bold tracking-tight text-gray-900 leading-snug mb-2">
                            {post.title}
                        </h1>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            {post.summary}
                        </p>
                    </header>

                    {post.tags && post.tags.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-1 items-center">
                            <Tag className="h-3 w-3 text-gray-400" />
                            {post.tags.map((tag, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs px-1.5 py-0">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}

                    <section className="article-content text-gray-800">
                        <div className="[&_h2]:text-base md:[&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-5 [&_h2]:mb-2 [&_h2]:pb-1.5 [&_h2]:border-b [&_h2]:border-gray-200
                            [&_h3]:text-sm md:[&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-4 [&_h3]:mb-2
                            [&_p]:text-sm [&_p]:leading-relaxed [&_p]:mb-2.5 [&_p]:text-gray-700
                            [&_ul]:my-2 [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1
                            [&_ol]:my-2 [&_ol]:ml-4 [&_ol]:list-decimal [&_ol]:space-y-1
                            [&_li]:text-sm [&_li]:text-gray-700 [&_li]:leading-relaxed
                            [&_strong]:font-semibold [&_strong]:text-gray-900
                            [&_a]:text-emerald-600 [&_a]:no-underline hover:[&_a]:underline
                            [&_img]:my-4 [&_img]:w-full [&_img]:max-w-full [&_img]:h-auto [&_img]:max-h-[400px] [&_img]:object-cover [&_img]:rounded-lg [&_img]:border [&_img]:border-gray-200">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>
                    </section>

                    {post.faqs && post.faqs.length > 0 && (
                        <section className="mt-7">
                            <h2 className="text-base md:text-lg font-bold text-gray-900 mb-3 pb-1.5 border-b border-gray-200">
                                자주 묻는 질문
                            </h2>
                            <div className="divide-y divide-gray-100">
                                {post.faqs.map((faq, idx) => (
                                    <details key={idx} className="group py-3">
                                        <summary className="flex items-start gap-2 cursor-pointer list-none text-sm font-semibold text-gray-900 marker:content-['']">
                                            <span className="text-emerald-600 shrink-0">Q.</span>
                                            <span className="flex-1">{faq.q}</span>
                                            <ChevronRight className="h-4 w-4 text-gray-400 shrink-0 mt-0.5 transition-transform group-open:rotate-90" />
                                        </summary>
                                        <p className="mt-2 pl-5 text-sm text-gray-600 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>
                    )}

                    <section className="mt-6 p-4 bg-white border border-gray-200 rounded-lg flex gap-3">
                        <div className="shrink-0">
                            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                <PencilLine className="h-5 w-5 text-emerald-600" />
                            </div>
                        </div>
                        <div className="min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="font-semibold text-gray-900 text-sm">{SITE_NAME} 편집팀</span>
                                <BadgeCheck className="h-3.5 w-3.5 text-emerald-600" />
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                이 글은 {SITE_NAME} 편집팀이 제조사 사용설명서와 공개된 화학·안전 자료를
                                교차 확인해, 재질·오염 종류별 안전한 방법과 주의할 점을 정리한 내용입니다.
                                제품·재질·오염 상태에 따라 결과가 다를 수 있어, 새로운 방법은 눈에 띄지 않는 곳에서
                                먼저 시험해 보시길 권합니다.
                                <span className="block mt-1 text-gray-400">최종 점검: {post.updated || post.date}</span>
                            </p>
                        </div>
                    </section>

                    <section className="mt-5 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                        <h3 className="font-semibold text-emerald-900 mb-1 text-xs">궁금한 점이 있으신가요?</h3>
                        <p className="text-xs text-emerald-800 mb-2 leading-relaxed">
                            이 글에 대한 질문이나 정정 요청이 있으시다면 언제든 연락주세요.
                        </p>
                        <Link href="/contact">
                            <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-xs h-7 px-3">
                                문의하기
                            </Button>
                        </Link>
                    </section>

                    <section className="border-t border-gray-200 mt-5 pt-4">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                            <h4 className="font-semibold text-gray-900 text-sm">이 글 공유하기</h4>
                            <div className="flex gap-1.5">
                                <Button size="icon" variant="outline" className="rounded-full h-8 w-8 text-blue-600 border-gray-200 hover:bg-gray-50"><Twitter className="h-3.5 w-3.5" /></Button>
                                <Button size="icon" variant="outline" className="rounded-full h-8 w-8 text-blue-800 border-gray-200 hover:bg-gray-50"><Facebook className="h-3.5 w-3.5" /></Button>
                                <Button size="icon" variant="outline" className="rounded-full h-8 w-8 text-blue-700 border-gray-200 hover:bg-gray-50"><Linkedin className="h-3.5 w-3.5" /></Button>
                                <Button size="icon" variant="outline" className="rounded-full h-8 w-8 text-gray-600 border-gray-200 hover:bg-gray-50"><Share2 className="h-3.5 w-3.5" /></Button>
                            </div>
                        </div>
                    </section>
                </div>

                <aside className="hidden lg:block w-64 shrink-0 space-y-5 sticky top-16 self-start">
                    <TableOfContents content={post.content} />

                    <section>
                        <h3 className="font-semibold text-gray-900 mb-2 text-xs uppercase tracking-wider">{category?.name} 인기글</h3>
                        <div className="space-y-2">
                            {relatedPosts.slice(0, 3).map((p) => (
                                <Link key={p.slug} href={postPath(p)}>
                                    <div className="group cursor-pointer">
                                        <h4 className="text-xs font-medium text-gray-900 group-hover:text-emerald-600 leading-snug mb-0.5">{p.title}</h4>
                                        <span className="text-xs text-gray-400">{p.date}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </aside>
            </div>

            <section className="bg-gray-50 py-6 mt-5 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-base md:text-lg font-bold text-gray-900 mb-4">다음 읽을 글</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {relatedPosts.slice(0, 3).map((relatedPost) => (
                            <PostCard key={relatedPost.slug} post={relatedPost} />
                        ))}
                    </div>
                </div>
            </section>
        </article>
        </>
    );
}

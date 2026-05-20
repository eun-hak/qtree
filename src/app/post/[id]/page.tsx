import React from 'react';
import { Metadata } from 'next';
import { POSTS, CATEGORIES } from '../../data/mock';
import { PostCard } from '../../components/blog/PostCard';
import { TableOfContents } from '../../components/blog/TableOfContents';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { ChevronRight, Calendar, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_NAME, siteUrl } from '../../../lib/site';

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const post = POSTS.find(p => p.id === id);

    if (!post) {
        return {
            title: '게시물을 찾을 수 없습니다',
        };
    }

    const category = CATEGORIES.find(c => c.slug === post.category);

    return {
        title: post.title,
        description: post.summary,
        keywords: [post.category, category?.name || '', '블로그', '게시물'],
        openGraph: {
            title: post.title,
            description: post.summary,
            type: 'article',
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
        id: post.id,
    }));
}

export default async function PostDetailPage({ params }: PageProps) {
    const { id } = await params;

    if (!id || typeof id !== 'string') {
        notFound();
    }

    const post = POSTS.find(p => p.id === id);

    if (!post) {
        notFound();
    }

    const category = CATEGORIES.find(c => c.slug === post.category);
    const relatedPosts = POSTS.filter(p => p.id !== post.id && p.category === post.category);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.summary,
        image: post.coverImage || siteUrl('/og-image.png'),
        datePublished: post.date,
        dateModified: post.date,
        author: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: siteUrl(),
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
                '@type': 'ImageObject',
                url: siteUrl('/og-image.png'),
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': siteUrl(`/post/${post.id}`),
        },
        keywords: post.tags?.join(', ') || category?.name || '',
        articleSection: category?.name || post.category,
        wordCount: post.content.length,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

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
                            <span className="text-gray-400">조회 {post.views.toLocaleString()}</span>
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
                            [&_a]:text-emerald-600 [&_a]:no-underline hover:[&_a]:underline">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
                            {relatedPosts.slice(0, 3).map(p => (
                                <Link key={p.id} href={`/post/${p.id}`}>
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
                        {relatedPosts.slice(0, 3).map(relatedPost => (
                            <PostCard key={relatedPost.id} post={relatedPost} />
                        ))}
                    </div>
                </div>
            </section>
        </article>
        </>
    );
}

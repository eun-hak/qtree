'use client';

import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { CATEGORIES, categoryPath } from '../../data/mock';
import { categoryIcon } from '../../data/category-icons';
import { cn } from '../../../lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SITE_NAME } from '../../../lib/site';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const pathname = usePathname();

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  const navLinkClass = (active: boolean) =>
    cn(
      "text-sm font-medium transition-colors hover:text-emerald-600",
      active ? "text-gray-900" : "text-gray-500"
    );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-12 flex items-center justify-between max-w-5xl">
        <Link href="/" className="flex items-center gap-1.5 shrink-0">
          <div className="bg-emerald-600 text-white w-7 h-7 rounded-md font-bold text-sm flex items-center justify-center aspect-square shrink-0">Q</div>
          <span className="text-base font-bold tracking-tight text-gray-900">{SITE_NAME}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-5">
          {CATEGORIES.map((cat) => {
            const path = categoryPath(cat.slug);
            return (
              <Link key={cat.slug} href={path} className={navLinkClass(pathname === path)}>
                {cat.name}
              </Link>
            );
          })}
          <span className="h-3.5 w-px bg-gray-200" aria-hidden />
          <Link href="/about" className={navLinkClass(pathname === "/about")}>
            소개
          </Link>
          <Link href="/contact" className={navLinkClass(pathname === "/contact")}>
            문의
          </Link>
        </nav>

        <div className="flex items-center gap-1.5">
          <form onSubmit={handleSearch} className="hidden sm:flex relative">
            <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-gray-400" />
            <Input
              type="search"
              placeholder="검색..."
              className="w-[140px] lg:w-[180px] pl-8 h-8 text-sm bg-gray-50 focus:bg-white transition-colors border-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white p-3 absolute w-full shadow-lg">
          <nav className="flex flex-col gap-1">
            <form onSubmit={handleSearch} className="relative mb-2">
              <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-gray-400" />
              <Input
                type="search"
                placeholder="글 검색..."
                className="w-full pl-8 h-8 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            {CATEGORIES.map((cat) => {
              const Icon = categoryIcon(cat.slug);
              return (
                <Link
                  key={cat.slug}
                  href={categoryPath(cat.slug)}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-medium text-left py-2 border-b border-gray-100"
                >
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-emerald-600" />
                    {cat.name}
                  </span>
                  <span className="text-xs text-gray-400">{cat.count}</span>
                </Link>
              );
            })}
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-left py-2 border-b border-gray-100 block"
            >
              소개
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-left py-2 block"
            >
              문의
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

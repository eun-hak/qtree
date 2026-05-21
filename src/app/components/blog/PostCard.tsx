import React from 'react';
import { Post, CATEGORIES, postPath } from '../../data/mock';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Clock, Eye } from 'lucide-react';
import { cn } from '../../../lib/utils';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
}

export function PostCard({ post, variant = 'default', className }: PostCardProps) {
  const category = CATEGORIES.find(c => c.slug === post.category);
  const href = postPath(post);

  if (variant === 'compact') {
    return (
      <Link href={href}>
        <div
          className={cn("group cursor-pointer py-3 md:py-3.5 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors px-1 rounded-sm", className)}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs md:text-sm font-medium text-emerald-600">{category?.name}</span>
            <span className="text-xs md:text-sm text-gray-400">{post.date}</span>
          </div>
          <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-2 md:line-clamp-1 leading-snug">
            {post.title}
          </h3>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href}>
      <Card
        className={cn("cursor-pointer border-none shadow-none bg-transparent hover:bg-gray-50/50 transition-colors rounded-lg overflow-hidden", className)}
      >
        <CardContent className="p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-normal rounded px-1.5 py-0 text-xs">
              {category?.name || post.category}
            </Badge>
            <div className="flex items-center text-xs text-gray-400 gap-2">
              <span className="flex items-center gap-1"><Clock size={11} /> {post.date}</span>
              <span className="flex items-center gap-1"><Eye size={11} /> {post.views}</span>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-snug group-hover:text-emerald-700">
            {post.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm line-clamp-2">
            {post.summary}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

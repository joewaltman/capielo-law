import Link from 'next/link';
import { BlogPost } from '@/types';
import { cn, formatDate } from '@/lib/utils';

interface BlogPostCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

export default function BlogPostCard({
  post,
  variant = 'default',
  className,
}: BlogPostCardProps) {
  if (variant === 'featured') {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          'group block bg-white rounded-xl border border-cream-200 shadow-sm overflow-hidden card-hover',
          className
        )}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 aspect-video lg:aspect-auto bg-cream-200 relative overflow-hidden">
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-cream-400">
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h6v6h6v10H6z" />
                </svg>
              </div>
            )}
          </div>
          <div className="flex-1 p-6 lg:p-8">
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <span className="font-medium text-accent-500">{post.category}</span>
              <span>·</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-primary group-hover:text-accent-500 transition-colors">
              {post.title}
            </h3>
            <p className="mt-3 text-text-muted leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-cream-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-primary">
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          'group flex items-start gap-4 py-4',
          className
        )}
      >
        <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-cream-200 overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-cream-400">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h6v6h6v10H6z" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-text-muted">
            {formatDate(post.publishedAt)}
          </p>
          <h4 className="mt-1 font-display font-semibold text-primary group-hover:text-accent-500 transition-colors line-clamp-2">
            {post.title}
          </h4>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        'group block bg-white rounded-xl border border-cream-200 shadow-sm overflow-hidden card-hover h-full',
        className
      )}
    >
      <div className="aspect-video bg-cream-200 relative overflow-hidden">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-cream-400">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h6v6h6v10H6z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-text-muted">
          <span className="font-medium text-accent-500">{post.category}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold text-primary group-hover:text-accent-500 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-text-muted line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-text-light">
            {formatDate(post.publishedAt)}
          </span>
          <span className="text-accent-500 text-sm font-medium inline-flex items-center">
            Read Article
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

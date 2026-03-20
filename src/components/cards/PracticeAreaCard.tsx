import Link from 'next/link';
import { PracticeArea } from '@/types';
import { cn } from '@/lib/utils';

interface PracticeAreaCardProps {
  practiceArea: PracticeArea;
  variant?: 'default' | 'compact';
  className?: string;
}

const icons: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  scale: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      />
    </svg>
  ),
  document: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  briefcase: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
};

export default function PracticeAreaCard({
  practiceArea,
  variant = 'default',
  className,
}: PracticeAreaCardProps) {
  const icon = icons[practiceArea.icon] || icons.briefcase;

  if (variant === 'compact') {
    return (
      <Link
        href={`/practice-areas/${practiceArea.slug}`}
        className={cn(
          'group flex items-start gap-4 p-5 bg-white rounded-xl border border-cream-200 shadow-sm card-hover',
          className
        )}
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-50 text-accent-500 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-semibold text-primary group-hover:text-accent-500 transition-colors">
            {practiceArea.title}
          </h3>
          <p className="mt-1 text-sm text-text-muted line-clamp-2">
            {practiceArea.shortDescription}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/practice-areas/${practiceArea.slug}`}
      className={cn(
        'group block p-8 bg-white rounded-xl border border-cream-200 shadow-sm card-hover h-full',
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-accent-50 text-accent-500 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-primary group-hover:text-accent-500 transition-colors">
        {practiceArea.title}
      </h3>
      <p className="mt-3 text-text-muted leading-relaxed">
        {practiceArea.shortDescription}
      </p>
      <div className="mt-5 inline-flex items-center text-accent-500 font-medium text-sm">
        Learn More
        <svg
          className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
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
      </div>
    </Link>
  );
}

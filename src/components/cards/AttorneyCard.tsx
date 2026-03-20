import Link from 'next/link';
import { Attorney } from '@/types';
import { cn } from '@/lib/utils';

interface AttorneyCardProps {
  attorney: Attorney;
  variant?: 'default' | 'featured';
  className?: string;
}

export default function AttorneyCard({
  attorney,
  variant = 'default',
  className,
}: AttorneyCardProps) {
  if (variant === 'featured') {
    return (
      <Link
        href={`/attorneys/${attorney.slug}`}
        className={cn(
          'group block h-full bg-white rounded-xl border border-cream-200 shadow-sm overflow-hidden card-hover',
          className
        )}
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5 aspect-[3/4] md:aspect-auto bg-cream-200 relative overflow-hidden">
            <img
              src={attorney.image}
              alt={attorney.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex-1 p-6 md:p-8 flex flex-col">
            <p className="text-sm text-accent-500 font-medium mb-1">
              {attorney.title}
            </p>
            <h3 className="font-display text-2xl font-semibold text-primary group-hover:text-accent-500 transition-colors">
              {attorney.name}
            </h3>
            <p className="mt-3 text-text-muted leading-relaxed line-clamp-4">
              {attorney.shortBio}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {attorney.practiceAreas.slice(0, 3).map((area) => (
                <span
                  key={area}
                  className="inline-block px-3 py-1 text-xs font-medium bg-cream-100 text-text-muted rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-6 inline-flex items-center text-accent-500 font-medium group-hover:text-accent-600">
              View Profile
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
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/attorneys/${attorney.slug}`}
      className={cn(
        'group block bg-white rounded-xl border border-cream-200 shadow-sm overflow-hidden card-hover',
        className
      )}
    >
      <div className="aspect-[4/5] bg-cream-200 relative overflow-hidden">
        <img
          src={attorney.image}
          alt={attorney.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-accent-500 font-medium">{attorney.title}</p>
        <h3 className="mt-1 font-display text-xl font-semibold text-primary group-hover:text-accent-500 transition-colors">
          {attorney.name}
        </h3>
        <p className="mt-2 text-sm text-text-muted line-clamp-3">
          {attorney.shortBio}
        </p>
        <div className="mt-4 inline-flex items-center text-accent-500 text-sm font-medium">
          View Profile
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
        </div>
      </div>
    </Link>
  );
}

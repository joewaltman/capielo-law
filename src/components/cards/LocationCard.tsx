import Link from 'next/link';
import { Location } from '@/types';
import { cn } from '@/lib/utils';

interface LocationCardProps {
  location: Location;
  variant?: 'default' | 'compact';
  className?: string;
}

export default function LocationCard({
  location,
  variant = 'default',
  className,
}: LocationCardProps) {
  if (variant === 'compact') {
    return (
      <div className={cn('p-5 bg-white rounded-xl border border-cream-200', className)}>
        <h3 className="font-display text-lg font-semibold text-primary">
          {location.shortName}
        </h3>
        <address className="mt-2 text-sm text-text-muted not-italic">
          {location.address.street}
          {location.address.suite && <>, {location.address.suite}</>}
          <br />
          {location.address.city}, {location.address.state} {location.address.zip}
        </address>
        <a
          href={`tel:${location.phone.replace(/\D/g, '')}`}
          className="mt-2 block text-sm text-accent-500 hover:text-accent-600 font-medium"
        >
          {location.phone}
        </a>
      </div>
    );
  }

  return (
    <Link
      href={`/locations/${location.slug}`}
      className={cn(
        'group block bg-white rounded-xl border border-cream-200 shadow-sm overflow-hidden card-hover',
        className
      )}
    >
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent-500 transition-colors">
          {location.name}
        </h3>
        <address className="mt-3 text-sm text-text-muted not-italic">
          {location.address.street}
          {location.address.suite && <>, {location.address.suite}</>}
          <br />
          {location.address.city}, {location.address.state} {location.address.zip}
        </address>
        <span className="mt-2 block text-sm text-accent-500 font-medium">
          {location.phone}
        </span>
        <div className="mt-4 text-sm text-text-muted">
          <span className="font-medium text-primary">Serving: </span>
          {location.servingAreas.slice(0, 4).join(', ')}
          {location.servingAreas.length > 4 && '...'}
        </div>
        <div className="mt-4 inline-flex items-center text-accent-500 text-sm font-medium">
          View Office Details
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

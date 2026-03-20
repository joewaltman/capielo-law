import { Testimonial } from '@/types';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'p-8 bg-white rounded-xl border border-cream-200 shadow-sm h-full flex flex-col',
        className
      )}
    >
      <svg
        className="w-10 h-10 text-accent-300 mb-4 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote className="flex-1">
        <p className="text-text-muted leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>
      <div className="mt-6 pt-4 border-t border-cream-200">
        <p className="font-display font-semibold text-primary">
          {testimonial.author}
        </p>
        {(testimonial.title || testimonial.location) && (
          <p className="text-sm text-text-light mt-0.5">
            {testimonial.title}
            {testimonial.title && testimonial.location && ' · '}
            {testimonial.location}
          </p>
        )}
      </div>
    </div>
  );
}

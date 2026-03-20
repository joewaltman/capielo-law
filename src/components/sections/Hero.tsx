import Link from 'next/link';
import { Button } from '@/components/ui';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  variant?: 'home' | 'page';
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'page',
}: HeroProps) {
  if (variant === 'home') {
    return (
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            {subtitle && (
              <p className="text-accent-500 font-medium tracking-wide uppercase text-sm mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="heading-1 text-primary text-balance">
              {title}
            </h1>
            {description && (
              <p className="mt-6 body-large text-text-muted max-w-2xl">
                {description}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="mt-10 flex flex-wrap gap-4">
                {primaryCTA && (
                  <Button href={primaryCTA.href} size="lg">
                    {primaryCTA.label}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button href={secondaryCTA.href} variant="outline" size="lg">
                    {secondaryCTA.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent" />
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="text-accent-500 font-medium tracking-wide uppercase text-sm mb-3">
              {subtitle}
            </p>
          )}
          <h1 className="heading-1 text-primary">{title}</h1>
          {description && (
            <p className="mt-5 body-large text-text-muted">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

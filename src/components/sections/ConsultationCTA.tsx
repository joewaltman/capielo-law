import { Button } from '@/components/ui';
import { FadeInOnScroll } from '@/components/animations';

interface ConsultationCTAProps {
  title?: string;
  description?: string;
  variant?: 'light' | 'dark';
}

export default function ConsultationCTA({
  title = 'Ready to Protect What Matters Most?',
  description = 'Schedule a consultation with our experienced attorneys to discuss your legal needs. We take the time to understand your situation and provide personalized guidance.',
  variant = 'dark',
}: ConsultationCTAProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={`py-20 md:py-28 ${
        isDark ? 'bg-primary-800 text-white' : 'bg-cream-100'
      }`}
    >
      <div className="container-custom">
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className={`heading-2 ${
                isDark ? 'text-cream-50' : 'text-primary'
              }`}
            >
              {title}
            </h2>
            <p
              className={`mt-4 body-large ${
                isDark ? 'text-cream-200' : 'text-text-muted'
              }`}
            >
              {description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                href="/contact"
                variant={isDark ? 'primary' : 'primary'}
                size="lg"
              >
                Schedule a Free Consultation
              </Button>
              <Button
                href="tel:9253979529"
                variant={isDark ? 'outline' : 'outline'}
                size="lg"
                className={isDark ? 'border-cream-300 text-cream-100 hover:bg-cream-100 hover:text-primary-800' : ''}
              >
                Call (925) 397-9529
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

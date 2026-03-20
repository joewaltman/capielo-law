import Link from 'next/link';
import { PracticeArea } from '@/types';
import { Hero, ConsultationCTA } from '@/components/sections';
import { FadeInOnScroll } from '@/components/animations';
import { Accordion, Button } from '@/components/ui';
import { PracticeAreaCard } from '@/components/cards';
import { practiceAreas } from '@/data/practice-areas';

interface PracticeAreaDetailProps {
  practiceArea: PracticeArea;
}

export default function PracticeAreaDetail({ practiceArea }: PracticeAreaDetailProps) {
  const otherAreas = practiceAreas.filter((a) => a.slug !== practiceArea.slug);

  return (
    <>
      <Hero
        title={practiceArea.title}
        subtitle="Practice Area"
        description={practiceArea.shortDescription}
      />

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <FadeInOnScroll>
                <h2 className="heading-3 text-primary mb-6">Overview</h2>
                <div className="prose prose-lg text-text-muted">
                  {practiceArea.fullDescription.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </FadeInOnScroll>
            </div>

            <div>
              <FadeInOnScroll delay={200}>
                <div className="bg-cream-50 rounded-xl p-6 lg:sticky lg:top-28">
                  <h3 className="font-display text-lg font-semibold text-primary mb-4">
                    Our Services Include
                  </h3>
                  <ul className="space-y-2">
                    {practiceArea.services.map((service, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-text-muted">
                        <svg
                          className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-cream-200">
                    <Button href="/contact" className="w-full">
                      Schedule a Consultation
                    </Button>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {practiceArea.faqs.length > 0 && (
        <section className="section-padding bg-cream-50">
          <div className="container-custom">
            <FadeInOnScroll>
              <div className="max-w-3xl mx-auto">
                <h2 className="heading-3 text-primary text-center mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="bg-white rounded-xl p-6 md:p-8 border border-cream-200">
                  <Accordion
                    items={practiceArea.faqs.map((faq, index) => ({
                      id: `faq-${index}`,
                      question: faq.question,
                      answer: faq.answer,
                    }))}
                  />
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      )}

      {/* Other Practice Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeInOnScroll>
            <h2 className="heading-3 text-primary text-center mb-8">
              Other Practice Areas
            </h2>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {otherAreas.map((area, index) => (
              <FadeInOnScroll key={area.id} delay={index * 100}>
                <PracticeAreaCard practiceArea={area} variant="compact" />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}

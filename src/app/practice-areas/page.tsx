import { Metadata } from 'next';
import { Hero, ConsultationCTA } from '@/components/sections';
import { FadeInOnScroll } from '@/components/animations';
import { PracticeAreaCard } from '@/components/cards';
import { practiceAreas } from '@/data/practice-areas';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description: 'Capielo Law Group provides legal services in Trust & Estate Planning, Trust & Estate Litigation, Civil Appeals, and Civil Litigation throughout California.',
};

export default function PracticeAreasPage() {
  return (
    <>
      <Hero
        title="Areas of Practice"
        subtitle="Our Services"
        description="We focus on areas where we can make the greatest impact, bringing deep expertise and genuine care to every matter we handle."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <FadeInOnScroll key={area.id} delay={index * 100}>
                <PracticeAreaCard practiceArea={area} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeInOnScroll>
              <h2 className="heading-3 text-primary text-center mb-6">
                Our Approach
              </h2>
              <div className="prose prose-lg text-text-muted mx-auto">
                <p>
                  No matter which practice area brings you to us, you can expect
                  the same commitment to understanding your unique situation
                  before recommending a course of action. We don&apos;t believe in
                  one-size-fits-all solutions.
                </p>
                <p>
                  Our focused practice areas allow us to develop deep expertise
                  rather than superficial familiarity with many fields. When you
                  work with us, you benefit from attorneys who handle matters like
                  yours regularly and understand the nuances that make a
                  difference.
                </p>
                <p>
                  We also recognize that legal matters don&apos;t always fit neatly
                  into categories. Estate planning clients sometimes face
                  litigation. Litigation clients often need planning advice. Our
                  team&apos;s combined expertise across these areas means we can serve
                  your needs comprehensively.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}

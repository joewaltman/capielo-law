import { Metadata } from 'next';
import Link from 'next/link';
import { Hero, ConsultationCTA } from '@/components/sections';
import { FadeInOnScroll } from '@/components/animations';
import { PracticeAreaCard, AttorneyCard, TestimonialCard, LocationCard } from '@/components/cards';
import { Button } from '@/components/ui';
import { practiceAreas } from '@/data/practice-areas';
import { attorneys } from '@/data/attorneys';
import { testimonials } from '@/data/testimonials';
import { locations } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Capielo Law Group LLP | Trust & Estate Attorneys in California',
  description: 'Boutique law firm providing personalized trust & estate planning, estate litigation, civil appeals, and civil litigation services across the San Francisco Bay Area and San Diego.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        variant="home"
        subtitle="Trusted Legal Counsel"
        title="Protecting Your Family's Future with Care and Expertise"
        description="At Capielo Law Group, we combine sophisticated legal expertise with genuine compassion. Whether you're planning for the future or navigating a complex dispute, we're here to guide you every step of the way."
        primaryCTA={{ label: 'Schedule a Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Our Practice Areas', href: '/practice-areas' }}
      />

      {/* Practice Areas Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="heading-2 text-primary">How We Can Help</h2>
              <p className="mt-4 body-large text-text-muted">
                Our practice focuses on areas where we can make the greatest
                impact for our clients.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <FadeInOnScroll key={area.id} delay={index * 100}>
                <PracticeAreaCard practiceArea={area} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About/Trust Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeInOnScroll>
              <div>
                <p className="text-accent-500 font-medium tracking-wide uppercase text-sm mb-3">
                  A Different Kind of Law Firm
                </p>
                <h2 className="heading-2 text-primary">
                  Personalized Attention.{' '}
                  <span className="text-accent">Sophisticated Solutions.</span>
                </h2>
                <div className="mt-6 space-y-4 text-text-muted body-base">
                  <p>
                    Capielo Law Group is a boutique firm founded on a simple
                    belief: families facing important legal decisions deserve
                    attorneys who truly listen and care about their unique
                    circumstances.
                  </p>
                  <p>
                    As a brother-and-sister team with complementary expertise, we
                    offer the sophisticated legal capabilities of larger firms
                    while maintaining the personal relationships that matter. When
                    you work with us, you work directly with experienced partners
                    who know your case inside and out.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="/about">Learn About Our Firm</Button>
                  <Button href="/attorneys" variant="ghost">
                    Meet the Attorneys
                  </Button>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                    alt="Professional legal consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Stats overlay */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-display text-2xl font-bold text-accent">20+</p>
                    <p className="text-xs text-text-muted mt-1">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-accent">2</p>
                    <p className="text-xs text-text-muted mt-1">Office Locations</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-accent">500+</p>
                    <p className="text-xs text-text-muted mt-1">Clients Served</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Attorneys Section */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="heading-2 text-primary">Meet Our Attorneys</h2>
              <p className="mt-4 body-large text-text-muted">
                Our team brings decades of combined experience and a genuine
                commitment to every client we serve.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {attorneys.map((attorney, index) => (
              <FadeInOnScroll key={attorney.id} delay={index * 100}>
                <AttorneyCard attorney={attorney} variant="featured" />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="heading-2 text-primary">What Our Clients Say</h2>
              <p className="mt-4 body-large text-text-muted">
                The trust our clients place in us is our greatest accomplishment.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <FadeInOnScroll key={testimonial.id} delay={index * 100}>
                <TestimonialCard testimonial={testimonial} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="heading-2 text-primary">Our Offices</h2>
              <p className="mt-4 body-large text-text-muted">
                Conveniently located to serve clients throughout California.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <FadeInOnScroll key={location.id} delay={index * 100}>
                <LocationCard location={location} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ConsultationCTA />
    </>
  );
}

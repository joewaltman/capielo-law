import { Metadata } from 'next';
import { Hero, ConsultationCTA } from '@/components/sections';
import { FadeInOnScroll } from '@/components/animations';
import { Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Our Firm',
  description: 'Learn about Capielo Law Group LLP, a boutique law firm founded by Georg and Katie Capielo to provide personalized, sophisticated legal services to families throughout California.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="A Firm Built on Trust and Expertise"
        subtitle="About Us"
        description="Capielo Law Group was founded on the belief that families deserve attorneys who genuinely care about their futures."
      />

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeInOnScroll>
              <h2 className="heading-3 text-primary mb-6">Our Story</h2>
              <div className="prose prose-lg text-text-muted">
                <p>
                  Capielo Law Group LLP was founded by Georg and Katie Capielo, a
                  husband-and-wife team who shared a vision of practicing law
                  differently. After years of experience at larger firms, they
                  recognized that many families weren&apos;t getting the
                  personalized attention their important legal matters deserved.
                </p>
                <p>
                  They created Capielo Law Group to bridge that gap—offering the
                  sophisticated legal expertise typically found at major firms,
                  combined with the genuine care and personal service of a small
                  practice. Every client works directly with experienced partners
                  who take the time to truly understand their situation.
                </p>
                <p>
                  Today, with offices in the San Francisco Bay Area and San Diego,
                  we serve clients throughout California who value thoughtful,
                  relationship-driven legal counsel for their most important matters.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="heading-2 text-primary">Our Values</h2>
              <p className="mt-4 body-large text-text-muted">
                These principles guide everything we do.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <FadeInOnScroll key={value.title} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-500 flex items-center justify-center mb-5">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-text-muted">
                    {value.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeInOnScroll>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                  alt="Legal documents and consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <div>
                <h2 className="heading-3 text-primary">Our Philosophy</h2>
                <div className="mt-6 space-y-4 text-text-muted body-base">
                  <p>
                    We believe that legal counsel should be a partnership, not a
                    transaction. When you face important decisions about your
                    family&apos;s future or find yourself in a dispute, you deserve
                    attorneys who will take the time to understand your goals and
                    concerns—not just the legal technicalities.
                  </p>
                  <p>
                    Our approach starts with listening. We want to understand not
                    just what you need, but why it matters to you. This
                    understanding allows us to provide advice and representation
                    that truly serves your interests, not just a generic legal
                    solution.
                  </p>
                  <p>
                    We&apos;re also committed to honest communication. We&apos;ll tell you
                    what you need to hear, not just what you want to hear. We
                    believe that informed clients make better decisions, so we
                    explain the law in plain language and help you understand your
                    options and their likely consequences.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="/attorneys">Meet Our Attorneys</Button>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="heading-2 text-cream-50">Why Choose Capielo Law Group?</h2>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FadeInOnScroll key={benefit.title} delay={index * 100}>
                <div className="text-center">
                  <div className="text-accent-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-cream-50">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream-300">
                    {benefit.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA variant="light" />
    </>
  );
}

const values = [
  {
    title: 'Client-Centered Service',
    description: 'Your goals and concerns drive our approach. We listen first, then advise.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Excellence in Practice',
    description: 'We bring rigorous preparation and sophisticated analysis to every matter.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Honest Communication',
    description: 'We tell you what you need to hear and explain the law in plain language.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Lasting Relationships',
    description: 'We build long-term relationships, not just handle transactions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Responsive Service',
    description: 'We return calls promptly and keep you informed throughout your matter.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Integrity First',
    description: 'We uphold the highest ethical standards in everything we do.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: 'Direct Partner Access',
    description: 'Work directly with experienced partners who know your case intimately.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Two Office Locations',
    description: 'Convenient offices in SF Bay Area and San Diego serving all of California.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Complementary Expertise',
    description: 'A team with strengths in both planning and litigation for comprehensive service.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Clear Communication',
    description: 'Complex legal matters explained in plain language you can understand.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
];

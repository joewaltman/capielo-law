import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Hero, ConsultationCTA } from '@/components/sections';
import { FadeInOnScroll } from '@/components/animations';
import { Button } from '@/components/ui';
import { getAttorneyBySlug, attorneys } from '@/data/attorneys';

const attorney = getAttorneyBySlug('georg-capielo');

export const metadata: Metadata = {
  title: attorney ? `${attorney.name} - ${attorney.title}` : 'Attorney Profile',
  description: attorney?.shortBio || 'Attorney profile at Capielo Law Group LLP.',
};

export default function GeorgCapieloPage() {
  if (!attorney) {
    notFound();
  }

  const otherAttorneys = attorneys.filter((a) => a.slug !== attorney.slug);

  return (
    <>
      <section className="bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            <FadeInOnScroll>
              <div className="lg:sticky lg:top-28">
                <div className="aspect-[3/4] rounded-2xl bg-cream-300 overflow-hidden">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <a
                    href={`mailto:${attorney.email}`}
                    className="flex items-center gap-3 text-text-muted hover:text-accent-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {attorney.email}
                  </a>
                  <a
                    href={`tel:${attorney.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 text-text-muted hover:text-accent-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {attorney.phone}
                  </a>
                </div>
              </div>
            </FadeInOnScroll>

            <div className="lg:col-span-2">
              <FadeInOnScroll>
                <p className="text-accent-500 font-medium tracking-wide uppercase text-sm mb-2">
                  {attorney.title}
                </p>
                <h1 className="heading-1 text-primary">{attorney.name}</h1>
              </FadeInOnScroll>

              <FadeInOnScroll delay={100}>
                <div className="mt-8 space-y-4 text-text-muted body-base">
                  {attorney.fullBio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Education */}
            <FadeInOnScroll>
              <div>
                <h2 className="heading-4 text-primary mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Education
                </h2>
                <ul className="space-y-3">
                  {attorney.education.map((edu, index) => (
                    <li key={index} className="text-text-muted">
                      <p className="font-medium text-primary">{edu.degree}</p>
                      <p className="text-sm">{edu.institution}</p>
                      {edu.year && <p className="text-sm text-text-light">{edu.year}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOnScroll>

            {/* Bar Admissions */}
            <FadeInOnScroll delay={100}>
              <div>
                <h2 className="heading-4 text-primary mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Bar Admissions
                </h2>
                <ul className="space-y-2">
                  {attorney.barAdmissions.map((admission, index) => (
                    <li key={index} className="text-text-muted text-sm">
                      {admission}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOnScroll>

            {/* Practice Areas */}
            <FadeInOnScroll delay={200}>
              <div>
                <h2 className="heading-4 text-primary mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Practice Areas
                </h2>
                <ul className="space-y-2">
                  {attorney.practiceAreas.map((area, index) => (
                    <li key={index} className="text-text-muted text-sm">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Other Attorneys */}
      {otherAttorneys.length > 0 && (
        <section className="section-padding bg-cream-50">
          <div className="container-custom">
            <FadeInOnScroll>
              <h2 className="heading-3 text-primary text-center mb-8">
                Meet Our Other Attorney
              </h2>
            </FadeInOnScroll>
            <div className="max-w-md mx-auto">
              {otherAttorneys.map((other) => (
                <FadeInOnScroll key={other.id}>
                  <Link
                    href={`/attorneys/${other.slug}`}
                    className="group flex items-center gap-5 bg-white rounded-xl p-5 border border-cream-200 card-hover"
                  >
                    <div className="w-20 h-20 rounded-full bg-cream-200 flex-shrink-0 overflow-hidden">
                      <img
                        src={other.image}
                        alt={other.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-accent-500 font-medium">{other.title}</p>
                      <p className="font-display text-lg font-semibold text-primary group-hover:text-accent-500 transition-colors">
                        {other.name}
                      </p>
                    </div>
                  </Link>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      <ConsultationCTA />
    </>
  );
}

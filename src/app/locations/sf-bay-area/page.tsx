import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Hero, ConsultationCTA } from '@/components/sections';
import { FadeInOnScroll } from '@/components/animations';
import { Button } from '@/components/ui';
import { PracticeAreaCard } from '@/components/cards';
import { getLocationBySlug, locations } from '@/data/locations';
import { practiceAreas } from '@/data/practice-areas';

const location = getLocationBySlug('sf-bay-area');

export const metadata: Metadata = {
  title: location ? `${location.name} Office` : 'Office Location',
  description: location
    ? `Visit our ${location.name} office. ${location.description}`
    : 'Capielo Law Group office location.',
};

export default function SFBayAreaPage() {
  if (!location) {
    notFound();
  }

  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  return (
    <>
      <Hero
        title={`${location.name} Office`}
        subtitle="Our Location"
        description={location.description}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeInOnScroll>
                <div className="aspect-video rounded-xl overflow-hidden mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1200&q=80"
                    alt="San Francisco Bay Area"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={100}>
                <h2 className="heading-3 text-primary mb-4">
                  Serving the San Francisco Bay Area
                </h2>
                <div className="prose prose-lg text-text-muted">
                  <p>
                    Our San Francisco office is located in the heart of the
                    Financial District, providing convenient access for clients
                    throughout the Bay Area. Whether you&apos;re in San Francisco,
                    Oakland, San Jose, or the surrounding communities, we&apos;re here
                    to serve you.
                  </p>
                  <p>
                    The Bay Area is home to diverse families with unique estate
                    planning needs. From tech entrepreneurs with stock options and
                    complex compensation packages to multi-generational families
                    with real estate holdings, we understand the specific
                    challenges facing Bay Area residents.
                  </p>
                  <p>
                    Our office is easily accessible by BART, Muni, and major
                    freeways. We offer both in-person and virtual consultations to
                    accommodate your schedule.
                  </p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={200}>
                <div className="mt-8">
                  <h3 className="heading-4 text-primary mb-4">Areas We Serve</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {location.servingAreas.map((area) => (
                      <div
                        key={area}
                        className="px-4 py-2 bg-cream-50 rounded-lg text-sm text-text-muted text-center"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>
            </div>

            {/* Sidebar */}
            <div>
              <FadeInOnScroll delay={300}>
                <div className="bg-cream-50 rounded-xl p-6 lg:sticky lg:top-28">
                  <h3 className="font-display text-lg font-semibold text-primary mb-4">
                    Office Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Address</p>
                      <address className="text-sm text-text-muted not-italic">
                        {location.address.street}
                        {location.address.suite && (
                          <>, {location.address.suite}</>
                        )}
                        <br />
                        {location.address.city}, {location.address.state}{' '}
                        {location.address.zip}
                      </address>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Phone</p>
                      <a
                        href={`tel:${location.phone.replace(/\D/g, '')}`}
                        className="text-sm text-accent-500 hover:text-accent-600"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Email</p>
                      <a
                        href={`mailto:${location.email}`}
                        className="text-sm text-accent-500 hover:text-accent-600"
                      >
                        {location.email}
                      </a>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Hours</p>
                      <p className="text-sm text-text-muted">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: By Appointment
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-cream-300 rounded-lg text-sm font-medium text-primary hover:bg-cream-100 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Get Directions
                    </a>
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

      {/* Practice Areas */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <FadeInOnScroll>
            <h2 className="heading-3 text-primary text-center mb-8">
              Services Available at This Location
            </h2>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <FadeInOnScroll key={area.id} delay={index * 100}>
                <PracticeAreaCard practiceArea={area} variant="compact" />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Other Location */}
      {otherLocations.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <FadeInOnScroll>
              <h2 className="heading-3 text-primary text-center mb-8">
                Our Other Office
              </h2>
            </FadeInOnScroll>
            <div className="max-w-md mx-auto">
              {otherLocations.map((other) => (
                <FadeInOnScroll key={other.id}>
                  <Link
                    href={`/locations/${other.slug}`}
                    className="group block bg-cream-50 rounded-xl p-6 border border-cream-200 card-hover"
                  >
                    <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent-500 transition-colors">
                      {other.name}
                    </h3>
                    <address className="mt-2 text-sm text-text-muted not-italic">
                      {other.address.street}
                      {other.address.suite && <>, {other.address.suite}</>}
                      <br />
                      {other.address.city}, {other.address.state} {other.address.zip}
                    </address>
                    <p className="mt-2 text-sm text-accent-500 font-medium">
                      {other.phone}
                    </p>
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

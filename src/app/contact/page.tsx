import { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { FadeInOnScroll } from '@/components/animations';
import ContactForm from './ContactForm';
import { locations } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Schedule a consultation with Capielo Law Group. Contact our offices in the San Francisco Bay Area or San Diego to discuss your legal needs.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Let's Discuss Your Legal Needs"
        subtitle="Contact Us"
        description="Schedule a consultation with our experienced attorneys. We're here to listen, answer your questions, and help you understand your options."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeInOnScroll>
                <div className="bg-cream-50 rounded-2xl p-8 md:p-10">
                  <h2 className="heading-3 text-primary mb-2">
                    Request a Consultation
                  </h2>
                  <p className="text-text-muted mb-8">
                    Fill out the form below and we&apos;ll get back to you within one
                    business day. All consultations are confidential.
                  </p>
                  <ContactForm />
                </div>
              </FadeInOnScroll>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <FadeInOnScroll delay={200}>
                <div className="space-y-8">
                  {/* Office Locations */}
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className="bg-white rounded-xl border border-cream-200 p-6"
                    >
                      <h3 className="font-display text-lg font-semibold text-primary mb-3">
                        {location.name}
                      </h3>
                      <address className="not-italic text-sm text-text-muted space-y-2">
                        <p>
                          {location.address.street}
                          {location.address.suite && (
                            <>, {location.address.suite}</>
                          )}
                          <br />
                          {location.address.city}, {location.address.state}{' '}
                          {location.address.zip}
                        </p>
                        <p>
                          <a
                            href={`tel:${location.phone.replace(/\D/g, '')}`}
                            className="text-accent-500 hover:text-accent-600 font-medium"
                          >
                            {location.phone}
                          </a>
                        </p>
                        <p>
                          <a
                            href={`mailto:${location.email}`}
                            className="text-accent-500 hover:text-accent-600"
                          >
                            {location.email}
                          </a>
                        </p>
                      </address>
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-accent-500 hover:text-accent-600 mt-3"
                      >
                        Get Directions
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  ))}

                  {/* Hours */}
                  <div className="bg-white rounded-xl border border-cream-200 p-6">
                    <h3 className="font-display text-lg font-semibold text-primary mb-3">
                      Office Hours
                    </h3>
                    <div className="text-sm text-text-muted space-y-1">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium text-primary">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>By Appointment</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-primary-800 rounded-xl p-6 text-white">
                    <h3 className="font-display text-lg font-semibold text-cream-50 mb-2">
                      Need Immediate Assistance?
                    </h3>
                    <p className="text-sm text-cream-300 mb-4">
                      For urgent matters, please call our main line directly.
                    </p>
                    <a
                      href="tel:9253979529"
                      className="inline-flex items-center justify-center w-full rounded-md bg-accent px-4 py-3 text-sm font-semibold text-white hover:bg-accent-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Call (925) 397-9529
                    </a>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-cream-100">
        <div className="container-custom">
          <p className="text-xs text-text-light text-center max-w-3xl mx-auto">
            Contacting the firm does not create an attorney-client relationship.
            Please do not send any confidential information until an
            attorney-client relationship has been established. We will contact you
            to schedule an initial consultation, at which time we can discuss the
            details of your matter and determine if we are able to assist you.
          </p>
        </div>
      </section>
    </>
  );
}

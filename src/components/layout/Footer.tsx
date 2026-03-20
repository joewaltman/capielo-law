import Link from 'next/link';
import { SITE_NAME, FOOTER_LINKS, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants';
import { locations } from '@/data/locations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-cream-100">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <img
                src="/images/capielo-logo.png"
                alt={SITE_NAME}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-cream-300 leading-relaxed">
              A boutique law firm providing personalized legal services in trust
              and estate matters, civil litigation, and appeals throughout
              California.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-cream-200 hover:text-accent-300 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
                className="block text-cream-200 hover:text-accent-300 transition-colors"
              >
                {CONTACT_PHONE}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream-50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-300 hover:text-accent-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream-50 mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.practiceAreas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-300 hover:text-accent-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream-50 mb-4">
              Offices
            </h3>
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.id}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-sm font-medium text-cream-100 hover:text-accent-300 transition-colors"
                  >
                    {location.shortName}
                  </Link>
                  <p className="mt-1 text-xs text-cream-400">
                    {location.address.street}
                    {location.address.suite && `, ${location.address.suite}`}
                    <br />
                    {location.address.city}, {location.address.state}{' '}
                    {location.address.zip}
                  </p>
                  <a
                    href={`tel:${location.phone.replace(/\D/g, '')}`}
                    className="mt-1 block text-xs text-cream-300 hover:text-accent-300"
                  >
                    {location.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream-400">
            <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-cream-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-cream-200 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/disclaimer"
                className="hover:text-cream-200 transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
          <p className="mt-4 text-2xs text-cream-500 text-center md:text-left">
            This website is for informational purposes only and does not
            constitute legal advice. The information on this website does not
            create an attorney-client relationship. Prior results do not
            guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
}

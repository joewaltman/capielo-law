import { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { FadeInOnScroll } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Legal Disclaimer',
  description: 'Important legal disclaimers regarding the use of the Capielo Law Group LLP website and the information contained herein.',
};

export default function DisclaimerPage() {
  return (
    <>
      <Hero
        title="Legal Disclaimer"
        subtitle="Important Information"
        description="Please read these disclaimers carefully before using our website."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeInOnScroll>
              <div className="prose prose-lg text-text-muted">
                <h2 className="heading-3 text-primary">No Attorney-Client Relationship</h2>
                <p>
                  The use of this website, including sending an email or other communication
                  to Capielo Law Group LLP or any of its attorneys, does not create an
                  attorney-client relationship. An attorney-client relationship is only
                  established through a formal written engagement agreement signed by both
                  the client and the firm.
                </p>
                <p>
                  Until such a relationship has been established, any information you send
                  to us may not be protected by attorney-client privilege. Please do not
                  send any confidential or sensitive information to us until you have
                  received written confirmation that an attorney-client relationship has
                  been established.
                </p>
                <p>
                  Contacting us through this website, by phone, email, or any other means
                  does not constitute legal representation. We reserve the right to decline
                  representation for any reason.
                </p>

                <h2 className="heading-3 text-primary mt-12">No Legal Advice</h2>
                <p>
                  The information provided on this website is for general informational
                  purposes only and should not be construed as legal advice on any matter.
                  Nothing on this site should be taken as legal advice for any individual
                  case or situation.
                </p>
                <p>
                  The content of this website is not intended to create, and receipt or
                  viewing of this information does not constitute, a solicitation or
                  provision of legal advice. You should not act or rely on any information
                  on this website without first seeking the advice of a qualified attorney
                  licensed in your jurisdiction.
                </p>
                <p>
                  Legal advice must be tailored to the specific circumstances of each case.
                  The law changes frequently, and the information on this website may not
                  reflect the most current legal developments. We make no representations,
                  warranties, or guarantees about the accuracy, completeness, or adequacy
                  of the information contained on this website.
                </p>

                <h2 className="heading-3 text-primary mt-12">Past Results</h2>
                <p>
                  Each legal matter is unique, and the outcome of any particular case
                  depends on a variety of factors, including the specific facts and
                  circumstances of the case, the applicable law, and the actions of
                  opposing parties and decision-makers. Past successes do not guarantee
                  similar results in future cases.
                </p>
                <p>
                  Any case results referenced on this website should not be interpreted
                  as a promise or guarantee of a particular result in your case.
                  Prospective clients should not make decisions about legal
                  representation based solely on past results.
                </p>

                <h2 className="heading-3 text-primary mt-12">Jurisdictional Limitations</h2>
                <p>
                  Capielo Law Group LLP is licensed to practice law in the State of
                  California. The attorneys at our firm are admitted to practice before
                  the courts listed on their individual biography pages. We do not seek
                  to represent anyone in any jurisdiction where this website does not
                  comply with applicable laws and bar rules.
                </p>

                <h2 className="heading-3 text-primary mt-12">Third-Party Links</h2>
                <p>
                  This website may contain links to third-party websites. These links
                  are provided solely for your convenience and informational purposes.
                  Capielo Law Group LLP does not endorse, control, or assume
                  responsibility for the content or privacy practices of any third-party
                  websites. Access to any third-party website is at your own risk.
                </p>

                <h2 className="heading-3 text-primary mt-12">Contact Us</h2>
                <p>
                  If you have any questions about these disclaimers, please contact us at{' '}
                  <a href="mailto:office@capielollp.com" className="text-accent-500 hover:text-accent-600">
                    office@capielollp.com
                  </a>.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

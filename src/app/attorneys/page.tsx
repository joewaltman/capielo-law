import { Metadata } from 'next';
import { Hero, ConsultationCTA } from '@/components/sections';
import { FadeInOnScroll } from '@/components/animations';
import { AttorneyCard } from '@/components/cards';
import { attorneys } from '@/data/attorneys';

export const metadata: Metadata = {
  title: 'Our Attorneys',
  description: 'Meet the experienced attorneys at Capielo Law Group LLP. Georg and Katie Capielo bring decades of combined experience in trust & estate law, litigation, and civil appeals.',
};

export default function AttorneysPage() {
  return (
    <>
      <Hero
        title="Meet Our Attorneys"
        subtitle="Our Team"
        description="At Capielo Law Group, you work directly with experienced partners who are personally invested in your success."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="body-large text-text-muted">
                As a boutique firm, we offer something larger practices cannot:
                direct access to senior attorneys who know every detail of your
                case. When you work with us, you&apos;re not handed off to junior
                associates—you work with partners from start to finish.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="space-y-8">
            {attorneys.map((attorney, index) => (
              <FadeInOnScroll key={attorney.id} delay={index * 150}>
                <AttorneyCard attorney={attorney} variant="featured" />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Complementary Expertise Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-3 text-primary text-center mb-6">
                Complementary Expertise
              </h2>
              <div className="prose prose-lg text-text-muted mx-auto">
                <p>
                  Georg and Katie bring complementary skills that benefit every
                  client. Georg&apos;s deep experience in estate planning means he
                  understands how to structure plans that minimize the risk of
                  future disputes. Katie&apos;s litigation expertise means she knows
                  exactly what issues lead to courtroom battles—insight that
                  informs our planning work.
                </p>
                <p>
                  When disputes do arise, our combined experience in both planning
                  and litigation gives us unique advantages. We understand estate
                  documents from the inside out, making us effective advocates
                  whether we&apos;re challenging a document&apos;s validity or defending
                  one.
                </p>
                <p>
                  This collaboration means our clients receive well-rounded
                  counsel that considers all angles, whether they come to us for
                  planning, litigation, or both.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}

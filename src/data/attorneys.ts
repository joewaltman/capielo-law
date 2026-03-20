import { Attorney } from '@/types';

export const attorneys: Attorney[] = [
  {
    id: '1',
    slug: 'georg-capielo',
    name: 'Georg M. Capielo',
    title: 'Founding Partner',
    image: '/images/georg-capielo.jpg',
    shortBio: 'Georg leads the firm\'s civil litigation, civil appeals, and trial practice. With nearly two decades of litigation experience across California\'s state and federal courts, he has earned a reputation as a tenacious advocate and formidable adversary.',
    fullBio: [
      'Georg M. Capielo is the founding partner of Capielo Law Group LLP, where he leads the firm\'s civil litigation, civil appeals, and trial practice. With nearly two decades of litigation experience across California\'s state and federal courts, Georg has earned a reputation in the San Diego legal community as a tenacious advocate and a formidable adversary — the kind of attorney other lawyers call when they need someone who will fight relentlessly for a client\'s rights.',
      'Georg\'s practice spans complex civil litigation, employment and labor disputes, insurance matters, and appellate advocacy. He represents individuals and businesses in high-stakes disputes involving breach of contract, fraud, wrongful termination, discrimination, and insurance bad faith, among other claims. Whether navigating a case through pre-trial motions, trying it before a jury, or briefing it on appeal, Georg approaches every matter with the same discipline: meticulous preparation, creative strategy, and a refusal to back down.',
      'What gives Georg an unusual edge in the courtroom is the international dimension of his legal training. Before entering private practice, Georg served as a judicial extern at the Cámara Nacional de Apelaciones en lo Penal Económico in Buenos Aires, Argentina — one of the country\'s national appellate courts specializing in economic and financial crimes. This experience gave Georg a deep appreciation for the precision of appellate writing and the art of persuasion on the page, continuing to inform his approach to civil appeals where first-class research and writing are often the difference between reversal and affirmance.',
      'Before co-founding Capielo Law Group, Georg founded and operated Capielo Law, APC in San Diego beginning in 2008, building a client-centered litigation practice from the ground up. He also served as an associate at Winters & Associates, a well-established Insurance Bad Faith firm with roots dating back to 1978, where he honed his trial skills across a broad range of civil matters. This combination of entrepreneurial solo practice and mentorship within a respected litigation firm shaped Georg\'s philosophy: deliver big-firm strategic depth with the personal attention and accessibility that only a boutique practice can provide.',
      'Georg is actively involved in the San Diego business and legal community as a member of the Louis M. Welsh American Inn of Court. He is a member of Provisors and is recognized by peers as a trusted referral partner, particularly for complex litigation and appellate matters. Beyond his legal practice, Georg serves as Chairperson of the City of Encinitas Parks and Recreation Commission, a city-appointed role overseeing public recreational resources and community programming.',
    ],
    education: [
      {
        degree: 'J.D., cum laude',
        institution: 'California Western School of Law',
      },
      {
        degree: 'B.A.',
        institution: 'San Francisco State University',
      },
    ],
    barAdmissions: [
      'State Bar of California',
      'U.S. Court of Appeals, Ninth Circuit',
    ],
    practiceAreas: [
      'Civil Litigation',
      'Civil Appeals',
      'Employment & Labor Litigation',
      'Insurance Litigation',
      'Breach of Contract',
      'Business Disputes',
    ],
    email: 'georg@capielollp.com',
    phone: '(619) 393-5573',
  },
  {
    id: '2',
    slug: 'katie-capielo',
    name: 'Katie L. Capielo',
    title: 'Partner',
    image: '/images/katie-capielo.webp',
    shortBio: 'Katie leads the firm\'s trust and estate planning and litigation practice. With an LL.M. in Taxation (with honors) and years of experience representing trustees, beneficiaries, and fiduciaries, she combines deep technical expertise with a compassionate, client-centered approach.',
    fullBio: [
      'Katie L. Capielo is a partner at Capielo Law Group LLP, where she leads the firm\'s trust and estate planning and litigation practice. With an LL.M. in Taxation (with honors) from Golden Gate University and years of experience representing trustees, beneficiaries, and fiduciaries in some of the most emotionally charged legal disputes, Katie combines deep technical expertise with a compassionate, client-centered approach.',
      'Katie\'s practice encompasses the full spectrum of trust and estate matters: fiduciary accounting and surcharge actions, trust litigation, will and trust contests, interpretation of testamentary instruments, beneficiary representation, elder abuse litigation, and conservatorship disputes. She handles cases from pre-litigation planning and discovery through trial or settlement. On the transactional side, Katie advises individuals and families on estate planning strategies to preserve wealth across multiple generations, including tax-efficient trust structures, asset protection, and business succession planning.',
      'She has designed estate plans for ultra-high-net-worth clients, prepared irrevocable life insurance trusts, irrevocable defective grantor trusts for lifetime gifting and legacy trust planning, partnership agreements, and LLC formation documents.',
      'Before co-founding Capielo Law Group, Katie served as Special Counsel at Candelaria LLP, a prominent women-owned Bay Area law firm, and prior to that rose to partnership at Brothers Smith LLP. Her earlier career included working at boutique trust and estate firms in the East Bay and starting at a tax and accounting firm advising high-net-worth clients on estate and gift tax planning strategies — a foundation that gives her unusual fluency in the tax dimensions of estate planning.',
      'What truly sets Katie apart is her path to law. Before becoming an attorney, Katie worked as a film editor and writer, with a particular fascination for the dynamics of family relationships — stories centered on trauma, competitiveness, and rivalry. That creative background sharpened her attention to detail and her ability to identify inconsistencies in opposing narratives. Today, she brings that same storytelling instinct to her legal practice, crafting compelling client narratives that faithfully, professionally, and persuasively present her clients\' positions.',
      'Katie is also available for educational presentations to financial advisors, real estate professionals, and insurance groups on topics related to estate planning and trust administration.',
    ],
    education: [
      {
        degree: 'LL.M. in Taxation, with honors',
        institution: 'Golden Gate University School of Law',
      },
      {
        degree: 'J.D.',
        institution: 'Golden Gate University School of Law',
      },
    ],
    barAdmissions: [
      'State Bar of California (#303195, admitted 2015)',
    ],
    practiceAreas: [
      'Trust & Estate Litigation',
      'Estate Planning',
      'Probate',
      'Trust Administration',
      'Conservatorships',
      'Elder Abuse Litigation',
      'Fiduciary Accounting',
    ],
    email: 'katie@capielollp.com',
    phone: '(925) 397-9529',
  },
];

export function getAttorneyBySlug(slug: string): Attorney | undefined {
  return attorneys.find((attorney) => attorney.slug === slug);
}

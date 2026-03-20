import { PracticeArea } from '@/types';

export const practiceAreas: PracticeArea[] = [
  {
    id: '1',
    slug: 'trust-estate-planning',
    title: 'Trust & Estate Planning',
    shortDescription: 'Thoughtful strategies to protect your family and preserve your legacy for generations to come.',
    icon: 'shield',
    fullDescription: [
      'Estate planning is about more than documents—it\'s about peace of mind. At Capielo Law Group, we take the time to understand your family, your values, and your goals before crafting a plan tailored specifically to your needs.',
      'Whether you need a straightforward living trust or a sophisticated multi-generational wealth transfer strategy, we guide you through every decision with clarity and care. Our goal is to create a plan that not only minimizes taxes and avoids probate but also reflects your wishes and protects the people you love.',
      'We believe that good estate planning requires ongoing attention. Life changes—marriages, births, divorces, business developments—and your estate plan should evolve accordingly. We build lasting relationships with our clients, reviewing and updating their plans as circumstances change.',
    ],
    services: [
      'Revocable Living Trusts',
      'Irrevocable Trusts (Including ILITs, GRATs, QPRTs)',
      'Last Wills and Testaments',
      'Powers of Attorney (Financial and Healthcare)',
      'Advance Healthcare Directives',
      'Special Needs Trusts',
      'Charitable Planning',
      'Business Succession Planning',
      'Asset Protection Strategies',
      'Trust Funding and Administration Guidance',
    ],
    faqs: [
      {
        question: 'What is the difference between a will and a living trust?',
        answer: 'A will takes effect only after death and must go through probate court. A living trust, by contrast, takes effect during your lifetime and can help your estate avoid the time and expense of probate. A trust also provides privacy (probate is public) and can be especially helpful if you own property in multiple states.',
      },
      {
        question: 'Do I need an estate plan if I don\'t have a large estate?',
        answer: 'Yes. Estate planning is important regardless of wealth. Even a modest estate benefits from clear instructions about healthcare decisions, guardianship of minor children, and distribution of assets. Without a plan, state law determines these decisions for you—often not the way you would have chosen.',
      },
      {
        question: 'How often should I update my estate plan?',
        answer: 'We recommend reviewing your estate plan every three to five years, or whenever you experience a major life event such as marriage, divorce, birth of a child, death of a beneficiary, significant change in assets, or a move to a new state.',
      },
      {
        question: 'What is the probate process, and how can I avoid it?',
        answer: 'Probate is the court-supervised process of validating a will and distributing assets. In California, it can take a year or more and costs a percentage of the estate\'s value. A properly funded living trust avoids probate for the assets held in trust, allowing for faster, private, and less expensive administration.',
      },
    ],
  },
  {
    id: '2',
    slug: 'trust-estate-litigation',
    title: 'Trust & Estate Litigation',
    shortDescription: 'Resolving trust and estate disputes with skill, sensitivity, and a commitment to justice.',
    icon: 'scale',
    fullDescription: [
      'When families face disputes over trusts, wills, or estates, the emotional stakes are high. At Capielo Law Group, we understand that these conflicts often involve not just legal rights but deeply personal relationships. We approach each matter with sensitivity while providing the vigorous advocacy our clients deserve.',
      'Our litigation practice covers the full spectrum of trust and estate disputes, from will and trust contests to breach of fiduciary duty claims. We have the experience to handle complex, high-value matters and the judgment to know when litigation is necessary and when resolution through negotiation or mediation better serves our clients.',
      'We represent both those seeking to enforce the terms of estate plans and those challenging improper conduct. Our goal in every case is to achieve the best possible outcome efficiently, whether that means aggressive courtroom advocacy or creative settlement negotiations.',
    ],
    services: [
      'Will and Trust Contests',
      'Breach of Fiduciary Duty Claims',
      'Trust Interpretation Disputes',
      'Trustee Removal and Surcharge Actions',
      'Contested Accountings',
      'Undue Influence and Lack of Capacity Claims',
      'Elder Financial Abuse Litigation',
      'Creditor Claims and Defense',
      'Beneficiary Representation',
      'Fiduciary Representation and Defense',
    ],
    faqs: [
      {
        question: 'What are grounds for contesting a will or trust?',
        answer: 'Common grounds include lack of mental capacity (the person didn\'t understand what they were signing), undue influence (someone improperly pressured them), fraud, forgery, or improper execution of the document. Time limits apply to these claims, so it\'s important to consult an attorney promptly if you have concerns.',
      },
      {
        question: 'What is a breach of fiduciary duty?',
        answer: 'Trustees and executors owe fiduciary duties to beneficiaries, including duties of loyalty, prudent investment, impartiality, and accurate accounting. A breach occurs when a fiduciary violates these duties—for example, by self-dealing, failing to diversify investments, or refusing to provide accountings.',
      },
      {
        question: 'Can a trustee be removed?',
        answer: 'Yes. California law allows courts to remove a trustee for breach of trust, failure to administer the trust properly, unfitness, hostility to beneficiaries, or other good cause. The court may also remove a trustee if there has been a substantial change in circumstances.',
      },
      {
        question: 'How long does trust litigation typically take?',
        answer: 'Timeline varies significantly based on complexity and whether the case settles. Simple matters may resolve in months; complex contested cases can take one to three years or more if tried. Many cases settle through mediation, which can significantly shorten the timeline.',
      },
    ],
  },
  {
    id: '3',
    slug: 'civil-appeals',
    title: 'Civil Appeals',
    shortDescription: 'Persuasive appellate advocacy to protect your rights and shape the law.',
    icon: 'document',
    fullDescription: [
      'Appellate practice requires a different skill set than trial work. At Capielo Law Group, we have the research ability, writing skill, and oral advocacy experience to excel in California\'s appellate courts.',
      'We handle appeals in trust and estate matters as well as general civil cases. Whether you\'re seeking to overturn an adverse judgment or defending a favorable verdict, we provide the focused attention and sophisticated analysis that appellate work demands.',
      'Our appellate experience also benefits our trial practice. Understanding how appellate courts review decisions helps us build stronger records at the trial level and identify winning arguments early in litigation.',
    ],
    services: [
      'Appeals in California Courts of Appeal',
      'California Supreme Court Petitions',
      'Federal Circuit Court Appeals',
      'Writs of Mandate and Prohibition',
      'Amicus Curiae Briefs',
      'Post-Trial Motions',
      'Appellate Consultation for Trial Counsel',
      'Record Preservation Strategy',
    ],
    faqs: [
      {
        question: 'What can be appealed?',
        answer: 'Generally, you can appeal final judgments and certain interim orders. Not every trial court error is reversible—appellate courts typically reverse only for prejudicial error, meaning errors that likely affected the outcome. An experienced appellate attorney can evaluate whether you have viable grounds for appeal.',
      },
      {
        question: 'What is the deadline to file an appeal?',
        answer: 'In California civil cases, you generally must file a notice of appeal within 60 days of the entry of judgment or order. Some orders have shorter deadlines. Missing the deadline usually forfeits your right to appeal, so it\'s critical to consult an attorney immediately after an adverse ruling.',
      },
      {
        question: 'How long does an appeal take?',
        answer: 'California appeals typically take 14 to 24 months from notice of appeal to decision, depending on the court and complexity. The briefing process alone takes several months, followed by oral argument (if requested) and the court\'s decision.',
      },
      {
        question: 'Can new evidence be presented on appeal?',
        answer: 'Generally, no. Appellate courts review the record from the trial court and do not consider new evidence. This is why it\'s crucial to build a complete record at trial. In rare circumstances involving newly discovered evidence, a motion for new trial or other relief may be available.',
      },
    ],
  },
  {
    id: '4',
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    shortDescription: 'Strategic representation in complex business and civil disputes.',
    icon: 'briefcase',
    fullDescription: [
      'Beyond our trust and estate practice, Capielo Law Group represents clients in a range of civil litigation matters. We bring the same analytical rigor, thorough preparation, and client focus to every dispute we handle.',
      'We have particular experience in business disputes, real property matters, and cases arising from fiduciary relationships. Our litigation philosophy emphasizes early case assessment, efficient discovery, and knowing when to fight and when to negotiate.',
      'As a boutique firm, we offer something larger firms cannot: direct access to experienced partners throughout your case. We handle matters personally, not through armies of associates, ensuring consistent quality and attention.',
    ],
    services: [
      'Business and Partnership Disputes',
      'Breach of Contract',
      'Real Property Litigation',
      'Fraud and Business Tort Claims',
      'Shareholder and LLC Disputes',
      'Professional Malpractice',
      'Employment Disputes',
      'Alternative Dispute Resolution',
    ],
    faqs: [
      {
        question: 'Should I try to settle my case or go to trial?',
        answer: 'This depends on many factors: the strength of your case, the opposing party\'s resources and resolve, the costs of litigation, and your goals. We help clients make informed decisions by providing honest assessments of risks and likely outcomes. Most cases settle, but we prepare every case as if it will go to trial.',
      },
      {
        question: 'What is the litigation process like?',
        answer: 'Litigation typically involves several phases: initial pleadings, discovery (exchanging information), motions, and trial if the case doesn\'t settle. Most cases last one to three years. We keep clients informed at every stage and involve them in key strategic decisions.',
      },
      {
        question: 'What are my options for resolving a dispute without going to court?',
        answer: 'Mediation and arbitration are common alternatives to trial. In mediation, a neutral facilitates settlement discussions; in arbitration, a neutral decides the case like a judge. Many contracts require arbitration. Each approach has advantages and disadvantages we can discuss based on your specific situation.',
      },
      {
        question: 'How are attorney fees handled in litigation?',
        answer: 'We typically bill hourly for litigation matters, though fee arrangements vary based on the case. In some matters, the prevailing party may recover fees from the other side if a contract or statute provides for fee-shifting. We discuss fees and cost expectations candidly at the outset of every engagement.',
      },
    ],
  },
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}

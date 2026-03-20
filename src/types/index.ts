export interface Attorney {
  id: string;
  slug: string;
  name: string;
  title: string;
  image: string;
  shortBio: string;
  fullBio: string[];
  education: {
    degree: string;
    institution: string;
    year?: string;
  }[];
  barAdmissions: string[];
  practiceAreas: string[];
  email: string;
  phone: string;
}

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  icon: string;
  services: string[];
  faqs: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title?: string;
  location?: string;
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  address: {
    street: string;
    suite?: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
  mapUrl: string;
  description: string;
  servingAreas: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

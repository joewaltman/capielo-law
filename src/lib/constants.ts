import { NavItem } from '@/types';

export const SITE_NAME = 'Capielo Law Group LLP';
export const SITE_DESCRIPTION = 'A boutique law firm providing personalized legal services in Trust & Estate Planning, Trust & Estate Litigation, Civil Appeals, and Civil Litigation across the San Francisco Bay Area and San Diego.';
export const SITE_URL = 'https://capielolawgroup.com';

export const CONTACT_EMAIL = 'office@capielollp.com';
export const CONTACT_PHONE = '(925) 397-9529';

export const NAVIGATION: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Attorneys',
    href: '/attorneys',
    children: [
      { label: 'Georg Capielo', href: '/attorneys/georg-capielo' },
      { label: 'Katie Capielo', href: '/attorneys/katie-capielo' },
    ],
  },
  {
    label: 'Practice Areas',
    href: '/practice-areas',
    children: [
      { label: 'Trust & Estate Planning', href: '/practice-areas/trust-estate-planning' },
      { label: 'Trust & Estate Litigation', href: '/practice-areas/trust-estate-litigation' },
      { label: 'Civil Appeals', href: '/practice-areas/civil-appeals' },
      { label: 'Civil Litigation', href: '/practice-areas/civil-litigation' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Attorneys', href: '/attorneys' },
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  practiceAreas: [
    { label: 'Trust & Estate Planning', href: '/practice-areas/trust-estate-planning' },
    { label: 'Trust & Estate Litigation', href: '/practice-areas/trust-estate-litigation' },
    { label: 'Civil Appeals', href: '/practice-areas/civil-appeals' },
    { label: 'Civil Litigation', href: '/practice-areas/civil-litigation' },
  ],
  locations: [
    { label: 'SF Bay Area', href: '/locations/sf-bay-area' },
    { label: 'San Diego', href: '/locations/san-diego' },
  ],
};

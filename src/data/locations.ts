import { Location } from '@/types';

export const locations: Location[] = [
  {
    id: '1',
    slug: 'sf-bay-area',
    name: 'San Francisco Bay Area',
    shortName: 'Walnut Creek',
    address: {
      street: '1990 N California Blvd',
      suite: '8th Floor #1101',
      city: 'Walnut Creek',
      state: 'CA',
      zip: '94596',
    },
    phone: '(925) 397-9529',
    email: 'office@capielollp.com',
    mapUrl: 'https://maps.google.com/?q=1990+N+California+Blvd+Walnut+Creek+CA+94596',
    description: 'Our Walnut Creek office serves clients throughout the Bay Area, including San Francisco, Oakland, Contra Costa County, and the surrounding communities. Conveniently located in the heart of Walnut Creek, we are easily accessible from anywhere in the region.',
    servingAreas: [
      'Walnut Creek',
      'San Francisco',
      'Oakland',
      'Concord',
      'Pleasant Hill',
      'Lafayette',
      'Danville',
      'Contra Costa County',
    ],
  },
  {
    id: '2',
    slug: 'san-diego',
    name: 'San Diego / North County',
    shortName: 'Encinitas',
    address: {
      street: '1470 Encinitas Blvd',
      suite: '#102',
      city: 'Encinitas',
      state: 'CA',
      zip: '92024',
    },
    phone: '(619) 393-5573',
    email: 'office@capielollp.com',
    mapUrl: 'https://maps.google.com/?q=1470+Encinitas+Blvd+Encinitas+CA+92024',
    description: 'Our Encinitas office serves clients throughout San Diego County and North County. We serve individuals and families in Encinitas, Carlsbad, Del Mar, La Jolla, and surrounding communities.',
    servingAreas: [
      'Encinitas',
      'Carlsbad',
      'Del Mar',
      'La Jolla',
      'San Diego',
      'Solana Beach',
      'Oceanside',
      'North County',
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

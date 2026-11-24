// ===================================================================
// CENTRALIZED BUSINESS DATA — Edit this file to update all pages
// ===================================================================

export const BUSINESS = {
  name: 'K.S. Raja Cattle Feeds',
  brandName: 'K.S. RAJA CATTLE FEEDS',
  officialName: 'K.S. Raja Animal Feeds',
  established: '2022',
  tagline: 'Trusted Animal Nutrition Since 2022',
  description:
    'Quality Feed Solutions for Cattle, Goats and Poultry. Serving farmers with animal-feed products and dedicated customer service.',

  address: {
    line1: 'V3CP+VM6, Danishpet Main Road,',
    line2: 'Nachinampatty, Kadayampatti,',
    line3: 'Deevattipatti, Tamil Nadu – 636351,',
    line4: 'India',
    full: 'V3CP+VM6, Danishpet Main Road, Nachinampatty, Kadayampatti, Deevattipatti, Tamil Nadu – 636351, India',
    city: 'Kadayampatti',
    district: 'Salem District',
    state: 'Tamil Nadu',
    pincode: '636351',
    plusCode: 'V3CP+VM6',
  },

  phones: [
    { number: '+91 97517 47766', href: 'tel:+919751747766', display: '97517 47766' },
    { number: '+91 98439 47766', href: 'tel:+919843947766', display: '98439 47766' },
    { number: '+91 94428 08466', href: 'tel:+919442808466', display: '94428 08466' },
  ],

  whatsapp: {
    number: '919751747766',
    display: '+91 97517 47766',
    baseUrl: 'https://wa.me/919751747766',
  },

  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=V3CP%2BVM6+Danishpet+Main+Road+Nachinampatty+Kadayampatti+Deevattipatti+Tamil+Nadu+636351',

  categories: ['Cattle Feed', 'Goat Feed', 'Poultry Feed'],
};

export const WHATSAPP_MESSAGES = {
  general:
    'Hello K.S. Raja Cattle Feeds. I would like to enquire about your products.',
  cattle:
    'Hello K.S. Raja Cattle Feeds. I would like to enquire about cattle feed.',
  goat: 'Hello K.S. Raja Cattle Feeds. I would like to enquire about goat feed.',
  poultry:
    'Hello K.S. Raja Cattle Feeds. I would like to enquire about poultry feed.',
};

export function buildWhatsAppUrl(message: string): string {
  return `${BUSINESS.whatsapp.baseUrl}?text=${encodeURIComponent(message)}`;
}

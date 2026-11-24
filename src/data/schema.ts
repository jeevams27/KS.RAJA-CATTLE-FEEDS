// LocalBusiness JSON-LD structured data for K.S. Raja Cattle Feeds
// Rendered server-side in layout for all pages

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://ksrajacattlefeeds.in/#business',
  name: 'K.S. Raja Cattle Feeds',
  alternateName: 'K.S. Raja Animal Feeds',
  description:
    'K.S. Raja Cattle Feeds is an animal-feed manufacturing and retail business established in 2022, supplying cattle feed, goat feed and poultry feed to farmers in Kadayampatti, Salem district, Tamil Nadu.',
  url: 'https://ksrajacattlefeeds.in',
  telephone: ['+919751747766', '+919843947766', '+919442808466'],
  foundingDate: '2022',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'V3CP+VM6, Danishpet Main Road, Nachinampatty',
    addressLocality: 'Kadayampatti',
    addressRegion: 'Tamil Nadu',
    postalCode: '636351',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '11.65',
    longitude: '78.15',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Salem District, Tamil Nadu',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Animal Feed Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Cattle Feed',
          description: 'Quality cattle feed for dairy and farm cattle. Available in 50 kg bags.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Goat Feed',
          description: 'Quality goat feed for all life stages.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Poultry Feed',
          description: 'Quality poultry feed for broiler and layer birds.',
        },
      },
    ],
  },
};

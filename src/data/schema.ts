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
          name: 'K.S. Raja Cattle Feed (50 kg)',
          description: 'Official K.S. Raja Cattle Feed (No.1 கலப்பு தீவனம்) in 50 kg bag packaging for dairy and farm cattle.',
          image: 'https://ksrajacattlefeeds.in/images/products/cattle/ks-raja-cattle-feed-red-50kg.png',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'K.S. Raja Goat Feed (35 kg)',
          description: 'Official K.S. Raja Goat Feed (High Weight Gain / No.1 அதிக புரதச்சத்து நிறைந்த ஆட்டு தீவனம்) in 35 kg bag packaging.',
          image: 'https://ksrajacattlefeeds.in/images/products/goat/ks-raja-goat-feed-35kg.jpg',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'K.S. Raja Poultry Feed',
          description: 'Poultry feed supply for broiler and layer bird operations in Kadayampatti, Salem district.',
        },
      },
    ],
  },
};

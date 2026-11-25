// ===================================================================
// PRODUCT DATA — Official K.S. Raja Animal Feeds Catalog
// All details strictly based on actual packaging and verified data
// ===================================================================

export interface Product {
  id: string;
  slug: string;
  category: 'cattle' | 'goat' | 'poultry';
  categoryLabel: string;
  categoryLabelTA: string;
  name: string;
  nameTA: string;
  subtitle?: string;
  subtitleTA?: string;
  weight?: string;
  packagingDetails: {
    netWeight: string;
    packagingType: string;
    packagingTypeTA: string;
    printedDetails: string[];
    printedDetailsTA: string[];
  };
  description: string;
  descriptionTA: string;
  image: string;
  gallery?: string[];
  imageAlt: string;
  whatsappMessage: string;
  featured?: boolean;
  hasRealImage: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'cattle-feed-red-50kg',
    slug: 'cattle-feed-red-50kg',
    category: 'cattle',
    categoryLabel: 'Cattle Feed',
    categoryLabelTA: 'கால்நடை தீவனம்',
    name: 'K.S. Raja Cattle Feed (Red Border - 50 kg)',
    nameTA: 'K.S. ராஜா கால்நடை தீவனம் (சிவப்பு பார்டர் - 50 கிலோ)',
    subtitle: 'No.1 கலப்பு தீவனம் · Net Wt 50 KGS',
    subtitleTA: 'No.1 கலப்பு தீவனம் · நிகர எடை 50 கிலோ',
    weight: '50 kg',
    packagingDetails: {
      netWeight: '50 KGS',
      packagingType: 'Red & White Bag with Crown Insignia',
      packagingTypeTA: 'சிவப்பு மற்றும் வெள்ளை பை (கிரீட முத்திரை)',
      printedDetails: [
        'Brand Name: K.S. RAJA CATTLE FEED',
        'Insignia: Official Crown Logo & Cow Illustration',
        'Designation: No.1 கலப்பு தீவனம் (No.1 Mixed Feed)',
        'Net Weight: 50 KGS',
        'Handling Notice: USE NO HOOKS',
        'Location Printed on Bag: பொம்மிடி மெயின் ரோடு, நாச்சினம்பட்டி - 636 351.',
      ],
      printedDetailsTA: [
        'பிராண்ட் பெயர்: K.S. RAJA CATTLE FEED',
        'முத்திரை: அதிகாரப்பூர்வ கிரீட லோகோ & பசு உருவம்',
        'வகை: No.1 கலப்பு தீவனம்',
        'நிகர எடை: 50 KGS',
        'கையாளும் குறிப்பு: கொக்கிகளை பயன்படுத்த வேண்டாம் (USE NO HOOKS)',
        'பையில் அச்சிடப்பட்ட இடம்: பொம்மிடி மெயின் ரோடு, நாச்சினம்பட்டி - 636 351.',
      ],
    },
    description:
      'Original K.S. Raja Cattle Feed in 50 kg packaging with red border design. Displays the authentic K.S. Raja crown trademark and cow illustration. Formulated for farm and dairy cattle and supplied directly to farmers across Kadayampatti and Salem district.',
    descriptionTA:
      'உண்மையான K.S. ராஜா கால்நடை தீவனம் சிவப்பு பார்டர் வடிவில் 50 கிலோ பேக்கிங். அதிகாரப்பூர்வ K.S. ராஜா கிரீட சின்னம் மற்றும் பசு உருவத்துடன் கூடியது. கடையம்பட்டி மற்றும் சேலம் மாவட்ட பால் பண்ணை விவசாயிகளுக்கு நேரடியாக வழங்கப்படுகிறது.',
    image: '/images/products/cattle/ks-raja-cattle-feed-red-50kg.png',
    gallery: [
      '/images/products/cattle/ks-raja-cattle-feed-red-50kg.png',
      '/images/products/cattle/ks-raja-cattle-feed-green-50kg.png',
    ],
    imageAlt: 'K.S. Raja Cattle Feed 50kg bag packaging with red border and cow illustration',
    whatsappMessage:
      'Hello K.S. Raja Animal Feeds, I am interested in K.S. Raja Cattle Feed (Red Border - 50 kg). Please share the details.',
    featured: true,
    hasRealImage: true,
  },
  {
    id: 'cattle-feed-green-50kg',
    slug: 'cattle-feed-green-50kg',
    category: 'cattle',
    categoryLabel: 'Cattle Feed',
    categoryLabelTA: 'கால்நடை தீவனம்',
    name: 'K.S. Raja Cattle Feed (Green Border - 50 kg)',
    nameTA: 'K.S. ராஜா கால்நடை தீவனம் (பச்சை பார்டர் - 50 கிலோ)',
    subtitle: 'No.1 கலப்பு தீவனம் · Net Wt 50 KGS',
    subtitleTA: 'No.1 கலப்பு தீவனம் · நிகர எடை 50 கிலோ',
    weight: '50 kg',
    packagingDetails: {
      netWeight: '50 KGS',
      packagingType: 'Green & White Bag with Crown Insignia',
      packagingTypeTA: 'பச்சை மற்றும் வெள்ளை பை (கிரீட முத்திரை)',
      printedDetails: [
        'Brand Name: K.S. RAJA CATTLE FEED',
        'Insignia: Red Crown Logo & Cow Illustration',
        'Designation: No.1 கலப்பு தீவனம் (No.1 Mixed Feed)',
        'Net Weight: 50 KGS (Green circular badge)',
        'Location Printed on Bag: பொம்மிடி மெயின் ரோடு, காடையாம்பட்டி - 636 351.',
      ],
      printedDetailsTA: [
        'பிராண்ட் பெயர்: K.S. RAJA CATTLE FEED',
        'முத்திரை: சிவப்பு கிரீட லோகோ & பசு உருவம்',
        'வகை: No.1 கலப்பு தீவனம்',
        'நிகர எடை: 50 KGS (பச்சை வட்ட சின்னம்)',
        'பையில் அச்சிடப்பட்ட இடம்: பொம்மிடி மெயின் ரோடு, காடையாம்பட்டி - 636 351.',
      ],
    },
    description:
      'Official K.S. Raja Cattle Feed featuring the signature green border 50 kg bag packaging. Manufactured and distributed by K.S. Raja Animal Feeds for cattle owners seeking dependable feed quality.',
    descriptionTA:
      'அதிகாரப்பூர்வ K.S. ராஜா கால்நடை தீவனம் பச்சை பார்டர் 50 கிலோ பேக்கிங். நம்பகமான தீவன தரத்தை விரும்பும் கால்நடை வளர்ப்பாளர்களுக்காக K.S. ராஜா அனிமல் ஃபீட்ஸ் மூலம் தயாரிக்கப்பட்டு வழங்கப்படுகிறது.',
    image: '/images/products/cattle/ks-raja-cattle-feed-green-50kg.png',
    gallery: [
      '/images/products/cattle/ks-raja-cattle-feed-green-50kg.png',
      '/images/products/cattle/ks-raja-cattle-feed-red-50kg.png',
    ],
    imageAlt: 'K.S. Raja Cattle Feed 50kg bag packaging with green border and cow illustration',
    whatsappMessage:
      'Hello K.S. Raja Animal Feeds, I am interested in K.S. Raja Cattle Feed (Green Border - 50 kg). Please share the details.',
    featured: true,
    hasRealImage: true,
  },
  {
    id: 'goat-feed-35kg',
    slug: 'goat-feed-35kg',
    category: 'goat',
    categoryLabel: 'Goat Feed',
    categoryLabelTA: 'ஆட்டு தீவனம்',
    name: 'K.S. Raja Goat Feed (35 kg)',
    nameTA: 'K.S. ராஜா ஆட்டு தீவனம் (35 கிலோ)',
    subtitle: 'High Weight Gain · Net Wt 35 KGS',
    subtitleTA: 'அதிக புரதச்சத்து · நிகர எடை 35 கிலோ',
    weight: '35 kg',
    packagingDetails: {
      netWeight: '35 KGS',
      packagingType: 'Laminated Green & White Bag with Ram & Goat Motif',
      packagingTypeTA: 'பச்சை மற்றும் வெள்ளை பை (ஆட்டு உருவத்துடன்)',
      printedDetails: [
        'Brand Name: K.S. RAJA GOAT FEEDS',
        'Highlighted Feature: HIGH WEIGHT GAIN',
        'Tamil Title: No.1 அதிக புரதச்சத்து நிறைந்த ஆட்டு தீவனம்',
        'Net Weight: 35 KGS',
        'Manufactured by: K.S. ராஜா மில்',
        'Address Printed on Bag: பொம்மிடி மெயின் ரோடு, சந்தைப்பேட்டை - 636 351.',
        'Helpline Printed on Bag: CELL : 97517 47766',
      ],
      printedDetailsTA: [
        'பிராண்ட் பெயர்: K.S. RAJA GOAT FEEDS',
        'முக்கிய குறிப்பு: HIGH WEIGHT GAIN (உடல் எடை அதிகரிப்பு)',
        'தமிழ் தலைப்பு: No.1 அதிக புரதச்சத்து நிறைந்த ஆட்டு தீவனம்',
        'நிகர எடை: 35 KGS',
        'உற்பத்தியாளர்: K.S. ராஜா மில்',
        'பையில் அச்சிடப்பட்ட இடம்: பொம்மிடி மெயின் ரோடு, சந்தைப்பேட்டை - 636 351.',
        'அச்சிடப்பட்ட உதவி எண்: CELL : 97517 47766',
      ],
    },
    description:
      'Official K.S. Raja Goat Feed in 35 kg packaging, specially designed for goat farming. Packaging highlights High Weight Gain and high protein formulation, manufactured by K.S. Raja Mill in Salem district.',
    descriptionTA:
      'அதிகாரப்பூர்வ K.S. ராஜா ஆட்டு தீவனம் 35 கிலோ பேக்கிங், ஆடு வளர்ப்புக்கு சிறப்பாக வடிவமைக்கப்பட்டது. பையில் குறிப்பிடப்பட்டுள்ளவாறு அதிக எடை அதிகரிப்பு மற்றும் அதிக புரதச்சத்து கொண்டது. K.S. ராஜா மில் மூலம் தயாரிக்கப்படுகிறது.',
    image: '/images/products/goat/ks-raja-goat-feed-35kg.jpg',
    gallery: ['/images/products/goat/ks-raja-goat-feed-35kg.jpg'],
    imageAlt: 'K.S. Raja Goat Feed 35kg bag packaging with ram and goat illustration',
    whatsappMessage:
      'Hello K.S. Raja Animal Feeds, I am interested in K.S. Raja Goat Feed (35 kg). Please share the details.',
    featured: true,
    hasRealImage: true,
  },
  {
    id: 'poultry-feed',
    slug: 'poultry-feed',
    category: 'poultry',
    categoryLabel: 'Poultry Feed',
    categoryLabelTA: 'கோழி தீவனம்',
    name: 'K.S. Raja Poultry Feed',
    nameTA: 'K.S. ராஜா கோழி தீவனம்',
    subtitle: 'Broiler & Layer Farm Supply',
    subtitleTA: 'பிராய்லர் & லேயர் பண்ணை தீவனம்',
    weight: 'Available on enquiry',
    packagingDetails: {
      netWeight: 'Custom / Standard bag sizes on order',
      packagingType: 'Standard Animal Feed Packaging',
      packagingTypeTA: 'நிலையான தீவன பேக்கிங்',
      printedDetails: [
        'Feed Category: Poultry Feed for broiler & layer birds',
        'Supply: Direct order and delivery across Kadayampatti & Salem district',
        'Packaging photographs: Updating soon',
      ],
      printedDetailsTA: [
        'தீவன வகை: பிராய்லர் மற்றும் லேயர் பறவைகளுக்கான கோழி தீவனம்',
        'விநியோகம்: கடையம்பட்டி மற்றும் சேலம் மாவட்டம் முழுவதும் நேரடி ஆர்டர்',
        'பேக்கிங் புகைப்படம்: விரைவில் புதுப்பிக்கப்படும்',
      ],
    },
    description:
      'K.S. Raja Animal Feeds supplies reliable poultry feed solutions for broiler and layer bird operations in Kadayampatti, Salem. Contact us directly on WhatsApp or phone to check current batch availability and arrange orders.',
    descriptionTA:
      'K.S. ராஜா அனிமல் ஃபீட்ஸ் கடையம்பட்டி மற்றும் சேலம் பகுதியில் உள்ள பண்ணைகளுக்கான கோழி தீவனத்தை வழங்குகிறது. தற்போதைய இருப்பு மற்றும் ஆர்டர் தேவைகளுக்கு வாட்ஸ்அப் அல்லது தொலைபேசி மூலம் தொடர்பு கொள்ளவும்.',
    image: '/images/products/cattle/ks-raja-cattle-feed-green-50kg.png',
    gallery: [],
    imageAlt: 'K.S. Raja Poultry Feed supply in Kadayampatti, Salem',
    whatsappMessage:
      'Hello K.S. Raja Animal Feeds, I am interested in K.S. Raja Poultry Feed. Please share the details.',
    featured: false,
    hasRealImage: false,
  },
];

export function getProductsByCategory(category: Product['category']) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.hasRealImage);
}

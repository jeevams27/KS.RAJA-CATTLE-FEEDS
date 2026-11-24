// ===================================================================
// PRODUCT DATA — Add or edit products here
// ===================================================================

export interface Product {
  id: string;
  slug: string;
  category: 'cattle' | 'goat' | 'poultry';
  categoryLabel: string;
  name: string;
  nameTA: string;
  weight?: string;
  description: string;
  descriptionTA: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'cattle-feed-50kg',
    slug: 'cattle-feed',
    category: 'cattle',
    categoryLabel: 'Cattle Feed',
    name: 'K.S. Raja Cattle Feed',
    nameTA: 'K.S. ராஜா கால்நடை தீவனம்',
    weight: '50 kg',
    description:
      'Our flagship cattle feed, available in a 50 kg bag, is designed to support the health and productivity of dairy and farm cattle. Manufactured with care and supplied directly to farmers across Salem district.',
    descriptionTA:
      'எங்களது 50 கிலோ கால்நடை தீவனம் பால் மற்றும் பண்ணை மாடுகளின் ஆரோக்கியம் மற்றும் உற்பத்தித்திறனை ஆதரிக்க வடிவமைக்கப்பட்டுள்ளது. சேலம் மாவட்டம் முழுவதும் விவசாயிகளுக்கு நேரடியாக வழங்கப்படுகிறது.',
    image:
      'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80',
    imageAlt: 'K.S. Raja Cattle Feed 50kg bag - premium cattle feed product',
    whatsappMessage:
      'Hello K.S. Raja Cattle Feeds. I would like to enquire about cattle feed (50 kg bag).',
    featured: true,
  },
  {
    id: 'goat-feed',
    slug: 'goat-feed',
    category: 'goat',
    categoryLabel: 'Goat Feed',
    name: 'K.S. Raja Goat Feed',
    nameTA: 'K.S. ராஜா ஆட்டு தீவனம்',
    description:
      'Specially formulated goat feed to meet the nutritional requirements of goats at all life stages. Trusted by goat farmers across the Salem region for consistent quality and reliable supply.',
    descriptionTA:
      'ஆடுகளின் அனைத்து வாழ்க்கை நிலைகளிலும் ஊட்டச்சத்து தேவைகளை பூர்த்தி செய்ய சிறப்பாக தயாரிக்கப்பட்ட ஆட்டு தீவனம். தொடர்ச்சியான தரம் மற்றும் நம்பகமான வழங்கலுக்காக சேலம் பகுதியில் ஆட்டு விவசாயிகள் நம்பும் தீவனம்.',
    image:
      'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=800&q=80',
    imageAlt: 'K.S. Raja Goat Feed - quality goat feed for Salem district farmers',
    whatsappMessage:
      'Hello K.S. Raja Cattle Feeds. I would like to enquire about goat feed.',
    featured: true,
  },
  {
    id: 'poultry-feed',
    slug: 'poultry-feed',
    category: 'poultry',
    categoryLabel: 'Poultry Feed',
    name: 'K.S. Raja Poultry Feed',
    nameTA: 'K.S. ராஜா கோழி தீவனம்',
    description:
      'High-quality poultry feed for broiler and layer birds. K.S. Raja Cattle Feeds supplies poultry farmers in and around Kadayampatti with dependable feed for healthy bird growth and productivity.',
    descriptionTA:
      'தரமான கோழி தீவனம் பிராய்லர் மற்றும் லேயர் பறவைகளுக்கு ஏற்றது. K.S. ராஜா கால்நடை தீவனம் கடையம்பட்டி மற்றும் அதன் சுற்றுப்பகுதிகளில் உள்ள கோழி விவசாயிகளுக்கு ஆரோக்கியமான பறவை வளர்ச்சி மற்றும் உற்பத்தித்திறனுக்கான நம்பகமான தீவனத்தை வழங்குகிறது.',
    image:
      'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80',
    imageAlt:
      'K.S. Raja Poultry Feed - quality poultry feed for broiler and layer birds',
    whatsappMessage:
      'Hello K.S. Raja Cattle Feeds. I would like to enquire about poultry feed.',
    featured: true,
  },
];

export function getProductsByCategory(category: Product['category']) {
  return PRODUCTS.filter((p) => p.category === category);
}

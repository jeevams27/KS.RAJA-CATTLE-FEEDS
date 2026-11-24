import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animal Feed Products | K.S. Raja Cattle Feeds – Cattle, Goat & Poultry Feed Salem',
  description:
    'Browse K.S. Raja Cattle Feeds product catalogue. Quality cattle feed (50 kg), goat feed and poultry feed for farmers in Kadayampatti, Salem district, Tamil Nadu. Enquire via WhatsApp.',
  openGraph: {
    title: 'Products | K.S. Raja Cattle Feeds – Salem',
    description:
      'Cattle feed, goat feed and poultry feed from K.S. Raja Cattle Feeds, Kadayampatti, Salem. Quality animal feed for Tamil Nadu farmers.',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

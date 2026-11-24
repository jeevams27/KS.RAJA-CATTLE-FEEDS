import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | K.S. Raja Cattle Feeds – Animal Feed Manufacturer, Kadayampatti, Salem',
  description:
    'Learn about K.S. Raja Cattle Feeds, an animal-feed manufacturing and retail business established in 2022 in Kadayampatti, Salem district, Tamil Nadu. We supply cattle feed, goat feed and poultry feed.',
  openGraph: {
    title: 'About K.S. Raja Cattle Feeds | Salem, Tamil Nadu',
    description:
      'K.S. Raja Cattle Feeds – established 2022, Kadayampatti, Salem. Animal feed manufacturer and retailer supplying cattle, goat and poultry feed to farmers.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | K.S. Raja Cattle Feeds – Kadayampatti, Salem, Tamil Nadu',
  description:
    'Contact K.S. Raja Cattle Feeds in Kadayampatti, Salem district. Call +91 97517 47766, +91 98439 47766, +91 94428 08466 or WhatsApp for cattle feed, goat feed and poultry feed enquiries.',
  openGraph: {
    title: 'Contact K.S. Raja Cattle Feeds | Salem, Tamil Nadu',
    description:
      'Get in touch with K.S. Raja Cattle Feeds – phone, WhatsApp or enquiry form. Located in Kadayampatti, Salem district, Tamil Nadu.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

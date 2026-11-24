import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/context/LangContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { localBusinessSchema } from '@/data/schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://ksrajacattlefeeds.in'),
  title: {
    default: 'K.S. Raja Cattle Feeds | Animal Feed in Kadayampatti, Salem – Cattle, Goat & Poultry Feed',
    template: '%s | K.S. Raja Cattle Feeds – Salem, Tamil Nadu',
  },
  description:
    'K.S. Raja Cattle Feeds – Quality cattle feed, goat feed and poultry feed manufacturer and retailer in Kadayampatti, Salem district, Tamil Nadu. Established 2022. Call: +91 97517 47766',
  keywords: [
    'K.S. Raja Cattle Feeds',
    'KS Raja animal feeds',
    'cattle feed Kadayampatti',
    'cattle feed Salem',
    'goat feed supplier Salem',
    'poultry feed supplier Salem',
    'animal feed manufacturer Tamil Nadu',
    'கால்நடை தீவனம் சேலம்',
    'ஆட்டு தீவனம் சேலம்',
    'கோழி தீவனம் சேலம்',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    alternateLocale: 'ta_IN',
    siteName: 'K.S. Raja Cattle Feeds',
    title: 'K.S. Raja Cattle Feeds | Animal Feed in Kadayampatti, Salem',
    description:
      'Quality cattle feed, goat feed and poultry feed from K.S. Raja Cattle Feeds, Kadayampatti, Salem district, Tamil Nadu. Established 2022.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-warm-cream">
        <LangProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LangProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}

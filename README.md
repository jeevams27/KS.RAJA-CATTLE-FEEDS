# K.S. Raja Cattle Feeds — Website

**Production-ready Next.js website for K.S. Raja Cattle Feeds**, an animal-feed manufacturing and retail business established in 2022, located in Kadayampatti, Salem district, Tamil Nadu.

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, metadata)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About Us page
│   ├── products/page.tsx   # Products catalogue page
│   ├── contact/page.tsx    # Contact + enquiry form page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── Navbar.tsx          # Sticky navigation with language switcher
│   ├── Footer.tsx          # Site footer
│   ├── FloatingWhatsApp.tsx # Floating WhatsApp button
│   └── ProductCard.tsx     # Reusable product card
├── context/
│   └── LangContext.tsx     # English / Tamil language state
└── data/
    ├── business.ts         # ← All business info (phone, address, WhatsApp)
    ├── products.ts         # ← All product data
    ├── translations.ts     # ← All EN + Tamil translations
    └── schema.ts           # JSON-LD LocalBusiness structured data
```

---

## ✏️ How to Update Business Information

### Update Phone Numbers / Address

Edit **`src/data/business.ts`**:

```ts
export const BUSINESS = {
  phones: [
    { number: '+91 97517 47766', href: 'tel:+919751747766', display: '97517 47766' },
    // Add or change numbers here
  ],
  address: {
    line1: 'V3CP+VM6, Danishpet Main Road,',
    // Update address lines here
  },
  whatsapp: {
    number: '919751747766',   // ← Change WhatsApp number here
    // ...
  },
};
```

---

## 📦 How to Add / Modify Products

Edit **`src/data/products.ts`**. Each product has this shape:

```ts
{
  id: 'cattle-feed-50kg',         // Unique ID
  slug: 'cattle-feed',            // URL anchor
  category: 'cattle',             // 'cattle' | 'goat' | 'poultry'
  categoryLabel: 'Cattle Feed',
  name: 'K.S. Raja Cattle Feed',
  nameTA: 'K.S. ராஜா கால்நடை தீவனம்',
  weight: '50 kg',                // Optional
  description: 'English description...',
  descriptionTA: 'Tamil description...',
  image: 'https://...',           // Unsplash or your hosted image URL
  imageAlt: 'Alt text for SEO',
  whatsappMessage: 'Hello K.S. Raja...',
  featured: true,
}
```

To add a new product, copy an existing entry and change the fields.

---

## 🌐 How to Update Tamil Translations

Edit **`src/data/translations.ts`**.

The file has two top-level keys: `en` (English) and `ta` (Tamil).

Update the Tamil values under the `ta` key. The structure mirrors the English translations exactly.

---

## 🚀 Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2 — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **New Project**.
3. Import the GitHub repository.
4. Vercel auto-detects Next.js — click **Deploy**.
5. Done. Your site will be live in ~1 minute.

### Domain Setup

After deploying, add your custom domain in the Vercel project **Settings → Domains**.

---

## 🔍 SEO

- LocalBusiness JSON-LD structured data is included in every page (`src/data/schema.ts`).
- Sitemap is auto-generated at `/sitemap.xml`.
- Robots.txt is at `/robots.txt`.
- Each page has unique `title` and `description` metadata.

### Google Search Console

1. Deploy the site.
2. Go to [Google Search Console](https://search.google.com/search-console).
3. Add your domain.
4. Verify via **HTML tag** method: add your verification ID in `src/app/layout.tsx`:
   ```ts
   verification: { google: 'YOUR_VERIFICATION_CODE' }
   ```
5. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

---

## 📱 WhatsApp Integration

All WhatsApp links use the primary number **+91 97517 47766**.

To change the WhatsApp number, update `src/data/business.ts`:

```ts
whatsapp: {
  number: '919751747766',   // Format: country code + number, no spaces or +
  baseUrl: 'https://wa.me/919751747766',
},
```

---

## 🌍 Language Support

The site supports **English** and **Tamil (தமிழ்)**.

- Language state is stored in `localStorage` and persists across page navigation.
- The language switcher is in the top navigation bar.
- All content (headings, descriptions, buttons, form labels) updates when the language is switched.

---

## 🖼️ Images

The site uses [Unsplash](https://unsplash.com) for high-quality farm and livestock photography.

To use your own product images:
1. Add images to the `public/images/` directory.
2. Reference them as `/images/your-image.jpg` in `src/data/products.ts`.
3. Update `next.config.js` if using an external image host (not Unsplash).

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter + Noto Sans Tamil (Google Fonts)
- **Deployment**: Vercel

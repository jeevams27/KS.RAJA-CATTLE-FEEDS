'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone, ArrowRight, Package } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import { BUSINESS, buildWhatsAppUrl } from '@/data/business';
import { PRODUCTS } from '@/data/products';

const CATEGORY_IMAGES = {
  cattle: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=1200&q=80',
  goat: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=1200&q=80',
  poultry: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1200&q=80',
};

const CATEGORY_ALTS = {
  cattle: 'Cattle at a farm - K.S. Raja Cattle Feed Salem',
  goat: 'Goats at a farm - K.S. Raja Goat Feed Salem',
  poultry: 'Poultry chickens - K.S. Raja Poultry Feed Kadayampatti',
};

type Category = 'cattle' | 'goat' | 'poultry';
const CATEGORIES: { id: Category; label: string; labelTA: string }[] = [
  { id: 'cattle', label: 'Cattle Feed', labelTA: 'கால்நடை தீவனம்' },
  { id: 'goat', label: 'Goat Feed', labelTA: 'ஆட்டு தீவனம்' },
  { id: 'poultry', label: 'Poultry Feed', labelTA: 'கோழி தீவனம்' },
];

export default function ProductsPage() {
  const { t, lang } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-green py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=80"
            alt="Animal farm background - K.S. Raja Cattle Feeds"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="section-label mb-3">{t.productsPage.title}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.productsPage.headline}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t.productsPage.desc}</p>
        </div>
      </section>

      {/* Products by category */}
      <section className="section-padding bg-warm-cream">
        <div className="container-max space-y-20">
          {CATEGORIES.map((cat) => {
            const products = PRODUCTS.filter((p) => p.category === cat.id);
            const catImg = CATEGORY_IMAGES[cat.id];
            const catAlt = CATEGORY_ALTS[cat.id];

            return (
              <div key={cat.id} id={`${cat.id}-feed`} className="scroll-mt-24">
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-forest-green rounded-xl flex items-center justify-center shrink-0">
                    <Package size={22} className="text-golden-yellow" />
                  </div>
                  <div>
                    <p className="section-label">{lang === 'ta' ? cat.labelTA : cat.label}</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-forest-green">
                      {lang === 'ta' ? cat.labelTA : cat.label}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Category image */}
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={catImg}
                      alt={catAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-golden-yellow text-forest-green text-sm font-bold px-3 py-1 rounded-full">
                        {lang === 'ta' ? cat.labelTA : cat.label}
                      </span>
                    </div>
                  </div>

                  {/* Products list */}
                  <div className="space-y-4">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        id={product.slug}
                        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 scroll-mt-24"
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="font-bold text-forest-green text-lg">
                              {lang === 'ta' ? product.nameTA : product.name}
                            </h3>
                            {product.weight && (
                              <span className="inline-block bg-warm-cream text-forest-green text-xs font-semibold px-2.5 py-1 rounded-full mt-1">
                                {product.weight}
                              </span>
                            )}
                          </div>
                          <span className="bg-golden-yellow/20 text-golden-yellow text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                            {lang === 'ta' ? cat.labelTA : cat.label}
                          </span>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {lang === 'ta' ? product.descriptionTA : product.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2">
                          <a
                            href={buildWhatsAppUrl(product.whatsappMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors"
                            aria-label={`WhatsApp enquiry for ${product.name}`}
                          >
                            <MessageCircle size={16} />
                            <span>{t.productsPage.enquireBtn}</span>
                          </a>
                          <a
                            href={BUSINESS.phones[0].href}
                            className="flex-1 flex items-center justify-center gap-2 border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-all duration-200"
                          >
                            <Phone size={16} />
                            <span>{t.nav.callNow}</span>
                          </a>
                        </div>
                      </div>
                    ))}

                    {/* Empty state - easy to add more */}
                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center">
                      <p className="text-gray-400 text-sm">
                        {lang === 'ta'
                          ? 'மேலும் தயாரிப்புகள் விரைவில் சேர்க்கப்படும். விசாரணைக்கு தொடர்பு கொள்ளுங்கள்.'
                          : 'More products will be added soon. Contact us to enquire about additional sizes and packaging.'}
                      </p>
                      <a
                        href={buildWhatsAppUrl(`Hello K.S. Raja Cattle Feeds. I would like to enquire about ${cat.label} options.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-forest-green font-semibold text-sm hover:text-golden-yellow transition-colors"
                      >
                        <MessageCircle size={14} />
                        {lang === 'ta' ? 'விசாரணை' : 'Enquire'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="container-max text-center max-w-2xl mx-auto">
          <p className="text-gray-600 text-lg mb-6">{t.productsPage.contactPrompt}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary justify-center">
              <span>{t.productsPage.contactBtn}</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={buildWhatsAppUrl('Hello K.S. Raja Cattle Feeds. I would like to enquire about your products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              <MessageCircle size={16} />
              <span>{t.productsPage.enquireBtn}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

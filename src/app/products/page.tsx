'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone, ArrowRight, Package, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import { BUSINESS, buildWhatsAppUrl } from '@/data/business';
import { PRODUCTS, Product, getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductDetailModal from '@/components/ProductDetailModal';

type CategoryFilter = 'all' | 'cattle' | 'goat' | 'poultry';

export default function ProductsPage() {
  const { t, lang } = useLang();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    {
      id: 'cattle' as const,
      label: 'Cattle Feed',
      labelTA: 'கால்நடை தீவனம்',
      description:
        'Official K.S. Raja Cattle Feed packaging in 50 kg bags. Formulated for farm and dairy cattle to support animal health and dependable milk yield for Tamil Nadu farmers.',
      descriptionTA:
        '50 கிலோ பைகளில் K.S. ராஜா அதிகாரப்பூர்வ கால்நடை தீவனம். தமிழ்நாடு விவசாயிகளுக்கு மாடுகளின் ஆரோக்கியம் மற்றும் நிலையான பால் உற்பத்திக்காக தயாரிக்கப்படுகிறது.',
      products: getProductsByCategory('cattle'),
    },
    {
      id: 'goat' as const,
      label: 'Goat Feed',
      labelTA: 'ஆட்டு தீவனம்',
      description:
        'Official K.S. Raja Goat Feed in 35 kg packaging. Specifically highlighted on packaging for High Weight Gain and high protein nutrition for goats across Salem district.',
      descriptionTA:
        '35 கிலோ பைகளில் K.S. ராஜா அதிகாரப்பூர்வ ஆட்டு தீவனம். சேலம் மாவட்ட ஆட்டு விவசாயிகளுக்காக அதிக உடல் எடை அதிகரிப்பு மற்றும் அதிக புரதச்சத்து கொண்டதாக பையில் குறிப்பிடப்பட்டுள்ளது.',
      products: getProductsByCategory('goat'),
    },
    {
      id: 'poultry' as const,
      label: 'Poultry Feed',
      labelTA: 'கோழி தீவனம்',
      description:
        'K.S. Raja Animal Feeds supplies reliable broiler and layer poultry feed to poultry farms in Kadayampatti and surrounding Salem district. Contact us directly for bulk orders and batch availability.',
      descriptionTA:
        'K.S. ராஜா அனிமல் ஃபீட்ஸ் கடையம்பட்டி மற்றும் சுற்றுவட்டார சேலம் பகுதியில் உள்ள பண்ணைகளுக்கான கோழி தீவனத்தை வழங்குகிறது. மொத்த ஆர்டர்கள் மற்றும் இருப்பு விவரங்களுக்கு எங்களை நேரடியாக தொடர்பு கொள்ளவும்.',
      products: getProductsByCategory('poultry'),
    },
  ];

  const filteredCategories = activeCategory === 'all'
    ? categories
    : categories.filter((c) => c.id === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-forest-green py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=80"
            alt="Farm background - K.S. Raja Animal Feeds"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-green/80 via-forest-green to-forest-green" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 bg-golden-yellow/20 border border-golden-yellow/40 rounded-full px-4 py-1 mb-4">
            <ShieldCheck size={14} className="text-golden-yellow" />
            <span className="text-golden-yellow text-xs font-bold uppercase tracking-wider">
              {t.products.realPackagingBadge}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.productsPage.headline}
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.productsPage.desc}
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-golden-yellow text-forest-green shadow-md scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {t.products.allCategories}
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === c.id
                    ? 'bg-golden-yellow text-forest-green shadow-md scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {lang === 'ta' ? c.labelTA : c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Catalogue Section */}
      <section className="section-padding bg-warm-cream">
        <div className="container-max space-y-20">
          {filteredCategories.map((category) => (
            <div key={category.id} id={`${category.id}-feed`} className="scroll-mt-24">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-amber-900/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest-green rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                    <Package size={22} className="text-golden-yellow" />
                  </div>
                  <div>
                    <span className="section-label">
                      {lang === 'ta' ? 'அதிகாரப்பூர்வ வகை' : 'Official Category'}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-forest-green">
                      {lang === 'ta' ? category.labelTA : category.label}
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                      {lang === 'ta' ? category.descriptionTA : category.description}
                    </p>
                  </div>
                </div>

                <a
                  href={buildWhatsAppUrl(
                    `Hello K.S. Raja Animal Feeds, I am interested in ${category.label}. Please share the details.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-green-700 bg-green-50 hover:bg-green-100 px-3.5 py-2 rounded-xl transition-colors border border-green-200"
                >
                  <MessageCircle size={15} />
                  <span>
                    {lang === 'ta'
                      ? `${category.labelTA} நேரடி விசாரணை`
                      : `Enquire about ${category.label}`}
                  </span>
                </a>
              </div>

              {/* Product Grid: Responsive 1-2-3-4 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
                {category.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenModal={(p) => setSelectedProduct(p)}
                  />
                ))}

                {/* Poultry feed custom notice card (since 0 packaging images uploaded) */}
                {category.id === 'poultry' && (
                  <div className="bg-white/80 rounded-3xl p-6 sm:p-8 border-2 border-dashed border-amber-900/20 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 bg-golden-yellow/20 rounded-xl flex items-center justify-center text-forest-green font-bold mb-4">
                        <Package size={20} />
                      </div>
                      <h3 className="font-bold text-forest-green text-lg mb-2">
                        {lang === 'ta'
                          ? 'நேரடி விநியோகம் & மொத்த ஆர்டர்கள்'
                          : 'Direct Supply & Bulk Orders'}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {lang === 'ta'
                          ? 'K.S. ராஜா கோழி தீவனம் பிராய்லர் மற்றும் லேயர் பறவை வளர்ப்பவர்களுக்கு கடையம்பட்டி மற்றும் சேலம் மாவட்டம் முழுவதும் வழங்கப்படுகிறது. பேக்கிங் புகைப்படங்கள் விரைவில் புதுப்பிக்கப்படும்.'
                          : 'K.S. Raja Poultry Feed is manufactured and supplied for commercial broiler and layer operations across Salem district. Real packaging photos updating soon.'}
                      </p>
                      <ul className="space-y-1.5 text-xs text-gray-700 mb-6">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-forest-green" />
                          <span>{lang === 'ta' ? 'விவசாயிகளுக்கு நேரடி விநியோகம்' : 'Direct farm supply'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-forest-green" />
                          <span>{lang === 'ta' ? 'சேலம் மற்றும் கடையம்பட்டி பகுதிகள்' : 'Salem & Kadayampatti areas'}</span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href={buildWhatsAppUrl(
                        'Hello K.S. Raja Animal Feeds, I am interested in K.S. Raja Poultry Feed. Please share the details.'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors"
                    >
                      <MessageCircle size={16} />
                      <span>{t.products.enquireBtn}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="container-max text-center max-w-2xl mx-auto">
          <p className="text-gray-600 text-base sm:text-lg mb-6">{t.productsPage.contactPrompt}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary justify-center">
              <span>{t.productsPage.contactBtn}</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={buildWhatsAppUrl('Hello K.S. Raja Animal Feeds, I am interested in your products. Please share the details.')}
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

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

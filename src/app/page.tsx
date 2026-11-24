'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  Award,
  Users,
  Package,
  Truck,
  Headphones,
  MapPin,
} from 'lucide-react';
import { useLang } from '@/context/LangContext';
import { BUSINESS, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/data/business';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';

export default function HomePage() {
  const { t, lang } = useLang();

  const whyUsIcons = [Award, Package, Truck, Users, Headphones, MapPin];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-forest-green">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=80"
            alt="Farm landscape with cattle - K.S. Raja Cattle Feeds"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-green/95 via-forest-green/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-golden-yellow/20 border border-golden-yellow/40 rounded-full px-4 py-1.5 mb-6">
              <Star size={14} className="text-golden-yellow fill-golden-yellow" />
              <span className="text-golden-yellow font-semibold text-sm">{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {t.hero.headline}
            </h1>

            <p className="text-golden-yellow text-xl md:text-2xl font-semibold mb-4">
              {t.hero.subheadline}
            </p>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-golden-yellow hover:bg-yellow-400 text-forest-green font-bold py-3.5 px-7 rounded-xl transition-all duration-200 text-base shadow-lg hover:shadow-xl"
              >
                <span>{t.hero.ctaProducts}</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3.5 px-7 rounded-xl transition-all duration-200 text-base backdrop-blur-sm"
              >
                <span>{t.hero.ctaContact}</span>
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-golden-yellow">2022</div>
                <div className="text-white/60 text-xs uppercase tracking-wide">{t.about.established}</div>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-golden-yellow">3</div>
                <div className="text-white/60 text-xs uppercase tracking-wide">{t.about.categoriesLabel}</div>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-golden-yellow">Salem</div>
                <div className="text-white/60 text-xs uppercase tracking-wide">District</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 10 0 30L0 60Z" fill="#F7F3E9" />
          </svg>
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section className="section-padding bg-warm-cream" id="products">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label mb-2">{t.products.sectionLabel}</p>
            <h2 className="section-title mb-4">{t.products.sectionTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{t.products.sectionDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                titleTA={product.nameTA}
                description={product.description}
                descriptionTA={product.descriptionTA}
                image={product.image}
                imageAlt={product.imageAlt}
                whatsappMessage={product.whatsappMessage}
                categoryLabel={product.categoryLabel}
                slug={product.slug}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/products" className="btn-outline">
              <span>{t.products.viewAll}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ ABOUT PREVIEW ============ */}
      <section className="section-padding bg-white" id="about">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80"
                  alt="Farm cattle - K.S. Raja Cattle Feeds Salem"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-golden-yellow text-forest-green rounded-2xl p-4 shadow-xl hidden md:block">
                <div className="text-3xl font-bold leading-none">2022</div>
                <div className="text-xs font-bold uppercase tracking-wide mt-0.5">{t.about.established}</div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <p className="section-label mb-2">{t.about.sectionLabel}</p>
              <h2 className="section-title mb-6">{t.about.headline}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{t.about.p1}</p>
              <p className="text-gray-600 leading-relaxed mb-4">{t.about.p2}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{t.about.p3}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-warm-cream rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-forest-green">{t.about.year}</div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">{t.about.established}</div>
                </div>
                <div className="bg-warm-cream rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-forest-green">{t.about.categories}</div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">{t.about.categoriesLabel}</div>
                </div>
                <div className="bg-warm-cream rounded-xl p-4 text-center">
                  <div className="text-xs font-bold text-forest-green">{t.about.service}</div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">{t.about.serviceLabel}</div>
                </div>
              </div>

              <Link href="/about" className="btn-primary">
                <span>{t.about.learnMore}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="section-padding bg-warm-cream" id="why-us">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label mb-2">{t.whyUs.sectionLabel}</p>
            <h2 className="section-title">{t.whyUs.headline}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whyUs.items.map((item, i) => {
              const Icon = whyUsIcons[i] || CheckCircle;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 bg-forest-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest-green transition-colors duration-300">
                    <Icon size={22} className="text-forest-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-forest-green text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CONTACT BANNER ============ */}
      <section className="bg-forest-green py-16 px-4">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.contactBanner.headline}</h2>
            <p className="text-white/70 text-lg mb-8">{t.contactBanner.desc}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 text-base shadow-lg"
              >
                <MessageCircle size={20} />
                <span>{t.contactBanner.whatsappBtn}</span>
              </a>
              <a
                href={BUSINESS.phones[0].href}
                className="inline-flex items-center justify-center gap-2 bg-golden-yellow hover:bg-yellow-400 text-forest-green font-bold py-4 px-8 rounded-xl transition-all duration-200 text-base shadow-lg"
              >
                <Phone size={20} />
                <span>{BUSINESS.phones[0].number}</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              {BUSINESS.phones.map((p) => (
                <a key={p.href} href={p.href} className="hover:text-golden-yellow transition-colors flex items-center gap-1.5">
                  <Phone size={14} />
                  <span>{p.number}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

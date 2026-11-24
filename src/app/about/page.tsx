'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle, MapPin, Package, Truck, Users } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import { BUSINESS, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/data/business';

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-forest-green py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=80"
            alt="Farm background - K.S. Raja Cattle Feeds"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="section-label mb-3">{t.aboutPage.title}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.aboutPage.headline}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">{t.aboutPage.intro}</p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section-padding bg-warm-cream">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80"
              alt="Cattle farm - K.S. Raja Cattle Feeds Salem district"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="section-label mb-2">{t.aboutPage.missionTitle}</p>
            <h2 className="section-title mb-6">{t.about.headline}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t.aboutPage.mission}</p>
            <p className="text-gray-600 leading-relaxed mb-4">{t.about.p2}</p>
            <p className="text-gray-600 leading-relaxed">{t.about.p3}</p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label mb-2">{t.aboutPage.productsTitle}</p>
            <h2 className="section-title mb-4">{t.aboutPage.productsTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{t.aboutPage.productsDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Truck,
                title: 'Cattle Feed',
                img: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&q=80',
                alt: 'Cattle feed - K.S. Raja Salem',
              },
              {
                icon: Package,
                title: 'Goat Feed',
                img: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=600&q=80',
                alt: 'Goat feed - K.S. Raja Salem',
              },
              {
                icon: Users,
                title: 'Poultry Feed',
                img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80',
                alt: 'Poultry feed - K.S. Raja Salem',
              },
            ].map((item) => (
              <div key={item.title} className="bg-warm-cream rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-44">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-forest-green/50 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{item.title}</span>
                  </div>
                </div>
                <div className="p-5">
                  <Link href="/products" className="text-forest-green font-semibold text-sm flex items-center gap-1 hover:text-golden-yellow transition-colors">
                    {t.products.exploreBtn} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-warm-cream">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-2">{t.aboutPage.locationTitle}</p>
            <h2 className="section-title mb-6">{t.aboutPage.locationTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{t.aboutPage.locationDesc}</p>

            <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-forest-green shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-forest-green text-sm mb-1">{t.contactPage.addressTitle}</div>
                  <address className="not-italic text-gray-600 text-sm leading-relaxed">
                    {BUSINESS.address.line1}<br />
                    {BUSINESS.address.line2}<br />
                    {BUSINESS.address.line3}<br />
                    {BUSINESS.address.line4}
                  </address>
                </div>
              </div>
              {BUSINESS.phones.map((p) => (
                <div key={p.href} className="flex items-center gap-3">
                  <Phone size={18} className="text-forest-green shrink-0" />
                  <a href={p.href} className="text-gray-700 hover:text-forest-green transition-colors font-medium">
                    {p.number}
                  </a>
                </div>
              ))}
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-forest-green font-semibold text-sm hover:text-golden-yellow transition-colors"
              >
                <MapPin size={16} />
                {t.contactPage.mapsLink}
              </a>
            </div>
          </div>

          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin size={48} className="text-forest-green mx-auto mb-3" />
              <p className="font-bold text-forest-green text-lg">{BUSINESS.brandName}</p>
              <p className="text-gray-600 text-sm mt-2">{BUSINESS.address.line2}</p>
              <p className="text-gray-500 text-sm">{BUSINESS.address.line3}</p>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-forest-green text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-green-900 transition-colors"
              >
                {t.contactPage.mapsLink}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-green py-16 px-4">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">{t.aboutPage.ctaHeadline}</h2>
          <p className="text-white/70 mb-8">{t.aboutPage.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3.5 px-7 rounded-xl transition-colors"
            >
              <MessageCircle size={18} />
              <span>{t.aboutPage.ctaWhatsApp}</span>
            </a>
            <a
              href={BUSINESS.phones[0].href}
              className="inline-flex items-center justify-center gap-2 bg-golden-yellow hover:bg-yellow-400 text-forest-green font-bold py-3.5 px-7 rounded-xl transition-colors"
            >
              <Phone size={18} />
              <span>{t.aboutPage.ctaCall}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

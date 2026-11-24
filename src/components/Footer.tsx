'use client';

import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import { BUSINESS, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/data/business';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-green text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-golden-yellow rounded-full flex items-center justify-center">
              <span className="text-forest-green font-bold text-lg leading-none">K</span>
            </div>
            <div>
              <div className="font-bold text-white text-sm uppercase tracking-wide leading-tight">K.S. RAJA</div>
              <div className="text-golden-yellow text-xs uppercase tracking-widest font-semibold leading-tight">CATTLE FEEDS</div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-4">{t.footer.tagline}</p>
          <p className="text-golden-yellow text-xs font-semibold uppercase tracking-wide">{t.footer.established}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-golden-yellow text-sm uppercase tracking-wide mb-4">{t.footer.quickLinks}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-white/70 hover:text-white transition-colors">{t.nav.home}</Link></li>
            <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">{t.nav.about}</Link></li>
            <li><Link href="/products" className="text-white/70 hover:text-white transition-colors">{t.nav.products}</Link></li>
            <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">{t.nav.contact}</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-bold text-golden-yellow text-sm uppercase tracking-wide mb-4">{t.footer.products}</h3>
          <ul className="space-y-2 text-sm">
            {BUSINESS.categories.map((cat) => (
              <li key={cat}>
                <Link href="/products" className="text-white/70 hover:text-white transition-colors">{cat}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-golden-yellow text-sm uppercase tracking-wide mb-4">{t.footer.contact}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-white/70">
              <MapPin size={14} className="shrink-0 mt-0.5 text-golden-yellow" />
              <span className="leading-relaxed">
                {BUSINESS.address.line1}<br />
                {BUSINESS.address.line2}<br />
                {BUSINESS.address.line3}<br />
                {BUSINESS.address.line4}
              </span>
            </li>
            {BUSINESS.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <Phone size={14} className="text-golden-yellow shrink-0" />
                  <span>{p.number}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle size={14} className="text-golden-yellow shrink-0" />
                <span>{BUSINESS.whatsapp.display}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>© {year} {BUSINESS.brandName}. {t.footer.rights}</span>
          <span>K.S. Raja Animal Feeds · Salem District, Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
}

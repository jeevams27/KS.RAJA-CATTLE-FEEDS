'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import { BUSINESS, buildWhatsAppUrl } from '@/data/business';
import { WHATSAPP_MESSAGES } from '@/data/business';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/products', label: t.nav.products },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-forest-green text-white text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            {BUSINESS.phones.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="flex items-center gap-1 hover:text-golden-yellow transition-colors whitespace-nowrap"
                aria-label={`Call ${p.number}`}
              >
                <Phone size={12} />
                <span>{p.number}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {/* Language switcher */}
            <div className="flex items-center gap-1 border border-white/30 rounded-full px-2 py-0.5">
              <button
                onClick={() => setLang('en')}
                className={`text-xs px-1.5 py-0.5 rounded-full transition-colors ${lang === 'en' ? 'bg-golden-yellow text-forest-green font-semibold' : 'hover:text-golden-yellow'}`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-white/40 text-xs">|</span>
              <button
                onClick={() => setLang('ta')}
                className={`text-xs px-1.5 py-0.5 rounded-full transition-colors font-tamil ${lang === 'ta' ? 'bg-golden-yellow text-forest-green font-semibold' : 'hover:text-golden-yellow'}`}
                aria-label="தமிழுக்கு மாற்றவும்"
              >
                தமிழ்
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-forest-green rounded-full flex items-center justify-center">
              <span className="text-golden-yellow font-bold text-lg leading-none">K</span>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-forest-green text-sm sm:text-base uppercase tracking-wide leading-tight">
                K.S. RAJA
              </div>
              <div className="text-golden-yellow text-[10px] sm:text-xs uppercase tracking-widest font-semibold leading-tight">
                CATTLE FEEDS
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-text hover:text-forest-green font-medium text-sm transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-golden-yellow group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.phones[0].href}
              className="flex items-center gap-1.5 text-sm font-medium text-forest-green hover:text-golden-yellow transition-colors"
              aria-label={`Call ${BUSINESS.phones[0].number}`}
            >
              <Phone size={16} />
              <span>{t.nav.callNow}</span>
            </a>
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              aria-label="WhatsApp enquiry"
            >
              <MessageCircle size={16} />
              <span>{t.nav.whatsappBtn}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-forest-green hover:text-golden-yellow transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-4 flex flex-col gap-1" role="navigation" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 px-3 rounded-lg text-brand-text hover:bg-warm-cream hover:text-forest-green font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={BUSINESS.phones[0].href}
                className="flex items-center gap-2 py-2.5 px-3 rounded-lg bg-forest-green text-white font-medium"
                onClick={() => setMenuOpen(false)}
              >
                <Phone size={16} />
                <span>{t.nav.callNow}</span>
              </a>
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2.5 px-3 rounded-lg bg-green-500 text-white font-medium"
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle size={16} />
                <span>{t.nav.whatsappBtn}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

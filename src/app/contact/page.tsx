'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, AlertCircle } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import { BUSINESS, buildWhatsAppUrl } from '@/data/business';

const PRODUCTS_EN = ['Cattle Feed', 'Goat Feed', 'Poultry Feed', 'Other'];
const PRODUCTS_TA = ['கால்நடை தீவனம்', 'ஆட்டு தீவனம்', 'கோழி தீவனம்', 'மற்றவை'];

interface FormState {
  name: string;
  phone: string;
  product: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export default function ContactPage() {
  const { t, lang } = useLang();
  const [form, setForm] = useState<FormState>({ name: '', phone: '', product: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const products = lang === 'ta' ? PRODUCTS_TA : PRODUCTS_EN;

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = t.contactPage.formNameRequired;
    if (!/^[0-9]{10}$/.test(form.phone.replace(/\s+/g, '')))
      newErrors.phone = t.contactPage.formPhoneRequired;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const productLine = form.product ? `\nProduct: ${form.product}` : '';
    const messageLine = form.message.trim() ? `\nMessage: ${form.message.trim()}` : '';

    const whatsappText = `Hello K.S. Raja Cattle Feeds.\nName: ${form.name}\nMobile: ${form.phone}${productLine}${messageLine}`;

    window.open(buildWhatsAppUrl(whatsappText), '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-green py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=80"
            alt="Farm background - Contact K.S. Raja Cattle Feeds"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="section-label mb-3">{t.contactPage.title}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.contactPage.headline}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t.contactPage.desc}</p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-padding bg-warm-cream">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Info cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-forest-green/10 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-forest-green" />
                </div>
                <h2 className="font-bold text-forest-green text-lg">{t.contactPage.addressTitle}</h2>
              </div>
              <address className="not-italic text-gray-600 leading-relaxed">
                <strong className="text-forest-green block mb-1">{BUSINESS.brandName}</strong>
                {BUSINESS.address.line1}<br />
                {BUSINESS.address.line2}<br />
                {BUSINESS.address.line3}<br />
                {BUSINESS.address.line4}
              </address>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-forest-green font-semibold text-sm hover:text-golden-yellow transition-colors"
              >
                <MapPin size={14} />
                {t.contactPage.mapsLink}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-forest-green/10 rounded-xl flex items-center justify-center">
                  <Phone size={20} className="text-forest-green" />
                </div>
                <h2 className="font-bold text-forest-green text-lg">{t.contactPage.phoneTitle}</h2>
              </div>
              <div className="space-y-3">
                {BUSINESS.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="flex items-center gap-3 p-3 rounded-xl bg-warm-cream hover:bg-forest-green/5 transition-colors group"
                    aria-label={`Call ${p.number}`}
                  >
                    <Phone size={16} className="text-forest-green shrink-0" />
                    <span className="font-semibold text-gray-700 group-hover:text-forest-green transition-colors">
                      {p.number}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <h2 className="font-bold text-forest-green text-lg">{t.contactPage.whatsappTitle}</h2>
              </div>
              <a
                href={buildWhatsAppUrl('Hello K.S. Raja Cattle Feeds. I would like to enquire about your products.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group"
                aria-label={`WhatsApp ${BUSINESS.whatsapp.display}`}
              >
                <MessageCircle size={16} className="text-green-600 shrink-0" />
                <span className="font-semibold text-gray-700 group-hover:text-green-700 transition-colors">
                  {BUSINESS.whatsapp.display}
                </span>
              </a>
            </div>

            {/* Business hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-forest-green/10 rounded-xl flex items-center justify-center">
                  <Clock size={20} className="text-forest-green" />
                </div>
                <h2 className="font-bold text-forest-green text-lg">{t.contactPage.hoursTitle}</h2>
              </div>
              <p className="text-gray-600">{t.contactPage.hours}</p>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="font-bold text-forest-green text-2xl mb-2">{t.contactPage.formTitle}</h2>
              <p className="text-gray-500 text-sm mb-6 flex items-start gap-2">
                <AlertCircle size={14} className="shrink-0 mt-0.5 text-golden-yellow" />
                {t.contactPage.formNote}
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.contactPage.formName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contactPage.formNamePlaceholder}
                    className={`w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest-green transition-colors ${
                      errors.name ? 'border-red-400' : 'border-gray-200'
                    }`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.contactPage.formPhone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t.contactPage.formPhonePlaceholder}
                    className={`w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest-green transition-colors ${
                      errors.phone ? 'border-red-400' : 'border-gray-200'
                    }`}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Product */}
                <div>
                  <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.contactPage.formProduct}
                  </label>
                  <select
                    id="product"
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest-green transition-colors bg-white"
                  >
                    <option value="">{t.contactPage.formSelectProduct}</option>
                    {products.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.contactPage.formMessage}
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t.contactPage.formMessagePlaceholder}
                    rows={4}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest-green transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-colors text-base"
                >
                  <MessageCircle size={20} />
                  {t.contactPage.formSubmit}
                </button>
              </form>
            </div>

            {/* Map placeholder */}
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-forest-green text-lg mb-4">{t.contactPage.mapsTitle}</h3>
              <div className="bg-warm-cream rounded-xl p-8 text-center">
                <MapPin size={40} className="text-forest-green mx-auto mb-3" />
                <p className="font-bold text-forest-green mb-1">{BUSINESS.brandName}</p>
                <p className="text-gray-500 text-sm">{BUSINESS.address.line2}</p>
                <p className="text-gray-500 text-sm">{BUSINESS.address.line3}</p>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-forest-green text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-green-900 transition-colors"
                >
                  <MapPin size={14} />
                  {t.contactPage.mapsLink}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick call banner */}
      <section className="bg-forest-green py-12 px-4">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BUSINESS.phones.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl py-5 px-6 text-white transition-colors group"
                aria-label={`Call ${p.number}`}
              >
                <Phone size={22} className="text-golden-yellow shrink-0" />
                <span className="font-bold text-lg group-hover:text-golden-yellow transition-colors">{p.number}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, MessageCircle, Phone, CheckCircle2, ShieldCheck, Scale, Package } from 'lucide-react';
import { Product } from '@/data/products';
import { useLang } from '@/context/LangContext';
import { BUSINESS, buildWhatsAppUrl } from '@/data/business';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) {
  const { lang, t } = useLang();
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const productName = lang === 'ta' ? product.nameTA : product.name;
  const categoryLabel = lang === 'ta' ? product.categoryLabelTA : product.categoryLabel;
  const subtitle = lang === 'ta' ? product.subtitleTA : product.subtitle;
  const description = lang === 'ta' ? product.descriptionTA : product.description;
  const packagingType = lang === 'ta' ? product.packagingDetails.packagingTypeTA : product.packagingDetails.packagingType;
  const printedDetails = lang === 'ta' ? product.packagingDetails.printedDetailsTA : product.packagingDetails.printedDetails;

  const galleryImages = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar with close button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="bg-golden-yellow/20 text-forest-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {categoryLabel}
            </span>
            {product.hasRealImage && (
              <span className="hidden sm:inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-200">
                <ShieldCheck size={13} className="text-green-600" />
                <span>{t.products.realPackagingBadge}</span>
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-brand-text transition-colors"
            aria-label={t.products.closeBtn}
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Image & Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-gradient-to-b from-warm-cream/60 to-warm-cream border border-amber-900/10 flex items-center justify-center p-4">
              <Image
                src={activeImage}
                alt={product.imageAlt}
                fill
                priority
                className="object-contain p-2 hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-forest-green/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                  {product.weight || product.packagingDetails.netWeight}
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails (if multiple images) */}
            {galleryImages.length > 1 && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {t.products.galleryTitle}
                </p>
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-warm-cream/50 ${
                        activeImage === img
                          ? 'border-forest-green shadow-md scale-105'
                          : 'border-gray-200 opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <Image
                        src={img}
                        alt={`${productName} thumbnail ${idx + 1}`}
                        fill
                        className="object-contain p-1"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Information & Actions */}
          <div className="flex flex-col">
            <h2 id="modal-product-title" className="text-2xl md:text-3xl font-bold text-forest-green mb-1.5 leading-snug">
              {productName}
            </h2>

            {subtitle && (
              <p className="text-golden-yellow font-bold text-sm md:text-base mb-4">
                {subtitle}
              </p>
            )}

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {description}
            </p>

            {/* Verified Specifications Box */}
            <div className="bg-warm-cream/70 rounded-2xl p-5 border border-amber-900/10 mb-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-amber-900/10 pb-2.5">
                <ShieldCheck size={18} className="text-forest-green shrink-0" />
                <h3 className="text-sm font-bold text-forest-green uppercase tracking-wide">
                  {t.products.verifiedSpecsTitle}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="bg-white rounded-xl p-3 border border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-500 font-medium mb-1">
                    <Scale size={14} className="text-golden-yellow" />
                    <span>{t.products.netWeightLabel}</span>
                  </div>
                  <div className="font-bold text-forest-green">
                    {product.packagingDetails.netWeight}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3 border border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-500 font-medium mb-1">
                    <Package size={14} className="text-golden-yellow" />
                    <span>{t.products.packagingTypeLabel}</span>
                  </div>
                  <div className="font-bold text-forest-green leading-tight">
                    {packagingType}
                  </div>
                </div>
              </div>

              {/* Information Printed on Bag */}
              <div>
                <p className="text-xs font-bold text-forest-green mb-2">
                  {t.products.printedDetailsLabel}:
                </p>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  {printedDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-forest-green shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-auto space-y-3 pt-2">
              <a
                href={buildWhatsAppUrl(product.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
                aria-label={`Send WhatsApp enquiry for ${productName}`}
              >
                <MessageCircle size={20} />
                <span>{t.products.enquireBtn}</span>
              </a>

              <a
                href={BUSINESS.phones[0].href}
                className="w-full flex items-center justify-center gap-2 border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-200 text-sm"
              >
                <Phone size={16} />
                <span>{t.products.callToOrder}: {BUSINESS.phones[0].number}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

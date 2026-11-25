'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, Eye, ShieldCheck, Scale } from 'lucide-react';
import { Product } from '@/data/products';
import { buildWhatsAppUrl } from '@/data/business';
import { useLang } from '@/context/LangContext';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export default function ProductCard({ product, onOpenModal }: ProductCardProps) {
  const { lang, t } = useLang();

  const title = lang === 'ta' ? product.nameTA : product.name;
  const categoryLabel = lang === 'ta' ? product.categoryLabelTA : product.categoryLabel;
  const description = lang === 'ta' ? product.descriptionTA : product.description;
  const subtitle = lang === 'ta' ? product.subtitleTA : product.subtitle;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col border border-gray-100 hover:border-golden-yellow/40">
      {/* Product Image Frame */}
      <div
        onClick={() => onOpenModal(product)}
        className="relative h-72 sm:h-80 w-full overflow-hidden bg-gradient-to-b from-warm-cream/50 to-warm-cream flex items-center justify-center p-4 cursor-pointer"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <span className="bg-forest-green text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {categoryLabel}
          </span>
          {product.hasRealImage && (
            <span className="inline-flex items-center gap-1 bg-white/95 text-forest-green text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm border border-gray-100">
              <ShieldCheck size={11} className="text-green-600" />
              <span>{t.products.realPackagingBadge}</span>
            </span>
          )}
        </div>

        {/* Weight Badge */}
        {product.weight && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 bg-golden-yellow text-forest-green text-xs font-bold px-2.5 py-1 rounded-xl shadow-sm">
              <Scale size={12} />
              <span>{product.weight}</span>
            </span>
          </div>
        )}

        {/* Quick View Overlay on hover */}
        <div className="absolute inset-0 bg-forest-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 bg-white/95 text-forest-green font-bold text-xs px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye size={14} />
            <span>{t.products.viewDetailsBtn}</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="mb-2">
          <h3
            onClick={() => onOpenModal(product)}
            className="font-bold text-forest-green text-base sm:text-lg hover:text-golden-yellow transition-colors cursor-pointer leading-snug line-clamp-2"
          >
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-amber-800 font-semibold mt-1">
              {subtitle}
            </p>
          )}
        </div>

        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3 mb-5">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
          <button
            type="button"
            onClick={() => onOpenModal(product)}
            className="flex items-center justify-center gap-1.5 border border-forest-green text-forest-green hover:bg-forest-green hover:text-white font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-all duration-200"
          >
            <Eye size={14} />
            <span>{t.products.viewDetailsBtn}</span>
          </button>

          <a
            href={buildWhatsAppUrl(product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-all duration-200 shadow-sm"
            aria-label={`WhatsApp enquiry for ${title}`}
          >
            <MessageCircle size={14} />
            <span>{t.products.enquireBtn}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

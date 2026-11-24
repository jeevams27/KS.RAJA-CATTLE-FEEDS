'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '@/data/business';
import { useLang } from '@/context/LangContext';

interface ProductCardProps {
  title: string;
  titleTA: string;
  description: string;
  descriptionTA: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  categoryLabel: string;
  slug: string;
}

export default function ProductCard({
  title,
  titleTA,
  description,
  descriptionTA,
  image,
  imageAlt,
  whatsappMessage,
  categoryLabel,
  slug,
}: ProductCardProps) {
  const { lang, t } = useLang();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="bg-golden-yellow text-forest-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-forest-green text-lg mb-2">
          {lang === 'ta' ? titleTA : title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">
          {lang === 'ta' ? descriptionTA : description}
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-2">
          <Link
            href={`/products#${slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-all duration-200"
          >
            <span>{t.products.exploreBtn}</span>
            <ArrowRight size={14} />
          </Link>
          <a
            href={buildWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-all duration-200"
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

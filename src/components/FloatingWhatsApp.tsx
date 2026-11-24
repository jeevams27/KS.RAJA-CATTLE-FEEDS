'use client';

import { MessageCircle } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/data/business';

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group flex items-center gap-2"
      aria-label="WhatsApp enquiry - K.S. Raja Cattle Feeds"
    >
      <MessageCircle size={28} className="shrink-0" />
      <span className="hidden sm:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-semibold text-sm whitespace-nowrap pr-0 group-hover:pr-1">
        WhatsApp Us
      </span>
    </a>
  );
}

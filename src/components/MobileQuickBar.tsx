import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Language, translations } from '../data/translations';
import { MessengerIcon, WhatsAppIcon } from './icons/MessengerIcon';

interface MobileQuickBarProps {
  lang: Language;
}

export function MobileQuickBar({ lang }: MobileQuickBarProps) {
  const t = translations[lang].contact;

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-[#faf9f6]/95 backdrop-blur-md border-t border-stone-200 shadow-lg px-3 py-2">
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* Phone */}
        <a
          href={siteConfig.phoneCallUrl}
          className="flex flex-col items-center justify-center py-1 px-1 rounded text-stone-800 hover:bg-stone-100 transition-colors"
          aria-label={t.phoneBtn}
        >
          <Phone className="w-4 h-4 text-stone-900" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5 truncate w-full">
            {t.phoneBtn}
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 rounded text-emerald-800 hover:bg-emerald-50 transition-colors"
          aria-label={t.whatsappBtn}
        >
          <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5 truncate w-full">
            WhatsApp
          </span>
        </a>

        {/* Messenger */}
        <a
          href={siteConfig.facebookMessengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 rounded text-blue-800 hover:bg-blue-50 transition-colors"
          aria-label={t.messengerBtn}
        >
          <MessengerIcon className="w-4 h-4 text-blue-600" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5 truncate w-full">
            Messenger
          </span>
        </a>

        {/* Email */}
        <a
          href={siteConfig.emailMailtoUrl}
          className="flex flex-col items-center justify-center py-1 px-1 rounded text-stone-800 hover:bg-stone-100 transition-colors"
          aria-label={t.emailBtn}
        >
          <Mail className="w-4 h-4 text-stone-900" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5 truncate w-full">
            {t.emailBtn}
          </span>
        </a>
      </div>
    </div>
  );
}

import React from 'react';
import { Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';
import { MessengerIcon, WhatsAppIcon } from './icons/MessengerIcon';

interface FooterProps {
  lang: Language;
  onToggleLang: () => void;
  onNavigate: (sectionId: string) => void;
}

export function Footer({ lang, onToggleLang, onNavigate }: FooterProps) {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-heading text-2xl lg:text-3xl font-medium tracking-tight text-white">
                ARCHEON
              </span>
              <span className="text-[11px] tracking-[0.25em] font-light text-stone-400 uppercase">
                Studio
              </span>
            </div>

            <p className="text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            <div className="text-xs text-stone-500 font-light pt-2">
              <span>{siteConfig.location[lang]}</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span>{siteConfig.workingHours[lang]}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-stone-400 font-light">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors"
                >
                  {nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  {nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  {nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('team')}
                  className="hover:text-white transition-colors"
                >
                  {nav.team}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  {nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Communication Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              {t.contactDirect}
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={siteConfig.phoneCallUrl}
                className="flex items-center gap-2.5 text-stone-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-stone-400" />
                <span>{siteConfig.phone}</span>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp: +995 551 31 62 62</span>
              </a>

              <a
                href={siteConfig.facebookPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <MessengerIcon className="w-4 h-4" />
                <span>Facebook: @archeonstudio</span>
              </a>

              <a
                href={siteConfig.emailMailtoUrl}
                className="flex items-center gap-2.5 text-stone-300 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} {siteConfig.brandName}. {t.rights}</span>
            <span aria-hidden="true">·</span>
            <span>{t.staticStudioBadge}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'ka' ? 'Switch to English' : 'ქართული ვერსია'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors p-1"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, Phone } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface HeroProps {
  lang: Language;
  onExploreClick: () => void;
  onContactClick: () => void;
}

export function Hero({ lang, onExploreClick, onContactClick }: HeroProps) {
  const t = translations[lang].hero;
  const stats = translations[lang].stats;

  return (
    <section id="hero" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Header Editorial Intro */}
        <div className="max-w-4xl mb-10 lg:mb-14">
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-stone-900 tracking-tight leading-[1.12] text-balance mb-6">
            {t.headline}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-2xl text-pretty mb-8">
            {t.description}
          </p>

          {/* Two prominent CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 transition-colors rounded shadow-xs"
            >
              <span>{t.exploreBtn}</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-stone-900 bg-stone-200/70 hover:bg-stone-200 border border-stone-300/80 transition-colors rounded"
            >
              <span>{t.contactBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-stone-600" />
            </button>
          </div>
        </div>

        {/* Hero Architectural Image Showcase */}
        <div className="relative w-full rounded-lg overflow-hidden border border-stone-200/80 bg-stone-100 shadow-sm group">
          <div className="aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden">
            <img
              src="/assets/aistudio/images/hero_penthouse_minimalist_daylight_1792415040750.jpg"
              alt="Archeon Studio contemporary minimalist architectural space"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              loading="eager"
            />
          </div>
        </div>

        {/* Studio attributes strip */}
        <div className="mt-8 pt-8 border-t border-stone-200 grid grid-cols-2 max-w-2xl gap-8 sm:gap-16">
          <div>
            <span className="block text-xs uppercase tracking-wider text-stone-500 mb-1">
              {stats.locationLabel}
            </span>
            <span className="text-sm sm:text-base font-medium text-stone-900">
              {stats.locationValue}
            </span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-stone-500 mb-1">
              {stats.focusLabel}
            </span>
            <span className="text-sm sm:text-base font-medium text-stone-900">
              {stats.focusValue}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

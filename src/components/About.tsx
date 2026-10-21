import React from 'react';
import { Compass, Ruler, MessageSquare, Check } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface AboutProps {
  lang: Language;
  onConsultationClick: () => void;
}

export function About({ lang, onConsultationClick }: AboutProps) {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#faf9f6] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest text-stone-500 uppercase mb-3">
            <span>{t.sectionNumber}</span>
            <span aria-hidden="true">/</span>
            <span>{siteConfig.brandName}</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight mb-6">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-stone-800 font-light leading-relaxed text-pretty">
            {t.leadText}
          </p>
        </div>

        {/* Narrative & Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6 text-stone-600 font-light text-base sm:text-lg leading-relaxed">
            <p>
              {t.paragraph1}
            </p>
            <p>
              {t.paragraph2}
            </p>

            <div className="pt-4 flex items-center gap-4 text-xs tracking-widest uppercase text-stone-500">
              <span>{siteConfig.tagline[lang]}</span>
              <span aria-hidden="true">·</span>
              <span>{siteConfig.location[lang]}</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
              <img
                src="/assets/aistudio/images/interior_living_travertine_1792413465592.jpg"
                alt="Archeon Studio interior design and architectural materiality"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Subtle caption */}
            <div className="mt-3 text-xs text-stone-500 font-light text-right">
              {lang === 'ka' ? 'ბუნებრივი მასალები და სინათლის ბალანსი' : 'Natural materiality and light balance'}
            </div>
          </div>
        </div>

        {/* 3 Grounded Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-stone-200">
          <div className="p-6 bg-white rounded-lg border border-stone-200/80">
            <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center text-stone-800 mb-4">
              <Compass className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-serif-heading text-xl font-medium text-stone-900 mb-2">
              {t.pillar1Title}
            </h3>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              {t.pillar1Desc}
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-stone-200/80">
            <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center text-stone-800 mb-4">
              <Ruler className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-serif-heading text-xl font-medium text-stone-900 mb-2">
              {t.pillar2Title}
            </h3>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              {t.pillar2Desc}
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-stone-200/80">
            <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center text-stone-800 mb-4">
              <MessageSquare className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-serif-heading text-xl font-medium text-stone-900 mb-2">
              {t.pillar3Title}
            </h3>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              {t.pillar3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

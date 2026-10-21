import React from 'react';
import { ArrowUpRight, Check, Compass, Ruler, Layers, Home, Eye } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/services';
import { Language, translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface ServicesProps {
  lang: Language;
  onInquireService: (serviceName: string) => void;
}

export function Services({ lang, onInquireService }: ServicesProps) {
  const t = translations[lang].services;

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f5f4ef] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest text-stone-500 uppercase mb-3">
              <span>{t.sectionNumber}</span>
              <span aria-hidden="true">/</span>
              <span>{lang === 'ka' ? 'საპროექტო მომსახურება' : 'Architectural Services'}</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 font-light max-w-md">
            {t.subtitle}
          </p>
        </div>

        {/* Services List / Grid */}
        <div className="space-y-12">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-stone-200/90 overflow-hidden shadow-xs hover:border-stone-300 transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual Element */}
                  <div className={`lg:col-span-5 h-72 lg:h-96 w-full overflow-hidden bg-stone-100 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img
                      src={service.image}
                      alt={service.title[lang]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                      loading="lazy"
                    />
                  </div>

                  {/* Text & Deliverables */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono tabular-nums text-stone-400 mb-2">
                        <span>{service.orderNumber}</span>
                        <span aria-hidden="true">/</span>
                        <span className="font-sans text-stone-500 uppercase tracking-widest text-[11px]">
                          {service.subtitle[lang]}
                        </span>
                      </div>
                      <h3 className="font-serif-heading text-2xl sm:text-3xl font-medium text-stone-900 mb-3">
                        {service.title[lang]}
                      </h3>
                      <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                        {service.description[lang]}
                      </p>
                    </div>

                    {/* Key Deliverables */}
                    <div className="pt-2">
                      <h4 className="text-xs uppercase tracking-wider text-stone-500 font-medium mb-3">
                        {t.deliverablesTitle}
                      </h4>
                      <ul className="space-y-2.5">
                        {service.keyDeliverables[lang].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-stone-700 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onInquireService(service.title[lang])}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 transition-colors rounded"
                      >
                        <span>{t.requestService}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={siteConfig.phoneCallUrl}
                        className="text-xs text-stone-600 hover:text-stone-950 font-medium transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

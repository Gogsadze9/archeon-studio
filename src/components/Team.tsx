import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { teamMembers } from '../data/team';
import { Language, translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface TeamProps {
  lang: Language;
}

export function Team({ lang }: TeamProps) {
  const t = translations[lang].team;

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#f5f4ef] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest text-stone-500 uppercase mb-3">
              <span>{t.sectionNumber}</span>
              <span aria-hidden="true">/</span>
              <span>{lang === 'ka' ? 'ჩვენი გუნდი' : 'Our Practice'}</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 font-light max-w-md">
            {t.subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg border border-stone-200/90 overflow-hidden shadow-xs hover:border-stone-300 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Portrait Photo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                  <img
                    src={member.image}
                    alt={member.name[lang]}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${member.imageClass || ''}`}
                    loading="lazy"
                  />
                </div>

                {/* Member Info */}
                <div className="p-6 sm:p-8">
                  <div className="text-xs uppercase tracking-wider text-stone-500 font-light mb-2">
                    {member.role[lang]}
                  </div>

                  <h3 className="font-serif-heading text-2xl font-medium text-stone-900">
                    {member.name[lang]}
                  </h3>
                </div>
              </div>

              {/* Direct Reachout Bar */}
              <div className="px-6 sm:px-8 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                <span className="font-light">{t.directContact}</span>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.phoneCallUrl}
                    className="hover:text-stone-950 transition-colors p-1"
                    title={siteConfig.phone}
                    aria-label={`Call ${member.name[lang]}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                      `Archeon Studio Inquiry for ${member.name.en}`
                    )}`}
                    className="hover:text-stone-950 transition-colors p-1"
                    title={siteConfig.email}
                    aria-label={`Email ${member.name[lang]}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

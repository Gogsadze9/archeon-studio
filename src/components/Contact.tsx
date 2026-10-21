import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, MessageSquare, Check, Sparkles } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';
import { MessengerIcon, WhatsAppIcon } from './icons/MessengerIcon';

interface ContactProps {
  lang: Language;
  preselectedService?: string;
}

export function Contact({ lang, preselectedService }: ContactProps) {
  const t = translations[lang].contact;
  const [selectedService, setSelectedService] = useState<string>(
    preselectedService || (lang === 'ka' ? 'ბინის დაგეგმარება' : 'Apartment Layout Planning')
  );
  const [spaceArea, setSpaceArea] = useState<string>('');
  const [spaceLocation, setSpaceLocation] = useState<string>('');

  // Prepare dynamic message for WhatsApp / Email
  const constructMessage = () => {
    if (lang === 'ka') {
      return `გამარჯობა Archeon Studio! მაინტერესებს კონსულტაცია:\n· მომსახურება: ${selectedService}${
        spaceArea ? `\n· სავარაუდო ფართობი: ${spaceArea}` : ''
      }${spaceLocation ? `\n· ლოკაცია: ${spaceLocation}` : ''}`;
    }
    return `Hello Archeon Studio! I would like to inquire about:\n· Service: ${selectedService}${
      spaceArea ? `\n· Approximate Area: ${spaceArea}` : ''
    }${spaceLocation ? `\n· Location: ${spaceLocation}` : ''}`;
  };

  const dynamicWhatsappUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(constructMessage())}`;
  const dynamicMailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Archeon Studio Inquiry - ${selectedService}`
  )}&body=${encodeURIComponent(constructMessage())}`;

  const availableServices = lang === 'ka' 
    ? [
        'ბინის დაგეგმარება',
        'ლაზერული აზომვა და ტექნიკური ნახაზები',
        'არქიტექტურული ნახაზები',
        'ინტერიერის დიზაინი',
        '3D ვიზუალიზაცია',
      ]
    : [
        'Apartment Layout Planning',
        'Laser Measurement & Technical Drawings',
        'Architectural Drawings',
        'Interior Design',
        '3D Visualization & Rendering',
      ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#faf9f6] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest text-stone-500 uppercase mb-3">
            <span>{t.sectionNumber}</span>
            <span aria-hidden="true">/</span>
            <span>{lang === 'ka' ? 'დაგვიკავშირდით' : 'Get In Touch'}</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            {t.reachOutText}
          </p>
        </div>

        {/* 4 Primary Direct Contact Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {/* Phone */}
          <a
            href={siteConfig.phoneCallUrl}
            className="p-6 bg-white rounded-lg border border-stone-200/90 hover:border-stone-400 hover:shadow-sm transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center text-stone-900 mb-4 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xs uppercase tracking-wider text-stone-500 font-light mb-1">
                {t.phoneLabel}
              </h3>
              <p className="text-base font-medium text-stone-900">
                {siteConfig.phone}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-800">
              <span>{t.phoneBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg border border-stone-200/90 hover:border-emerald-500/50 hover:shadow-sm transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded bg-emerald-50 flex items-center justify-center text-emerald-700 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <h3 className="text-xs uppercase tracking-wider text-stone-500 font-light mb-1">
                {t.whatsappLabel}
              </h3>
              <p className="text-base font-medium text-stone-900">
                {siteConfig.phone}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-emerald-800">
              <span>{t.whatsappBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 transition-colors" />
            </div>
          </a>

          {/* Facebook */}
          <a
            href={siteConfig.facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg border border-stone-200/90 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MessengerIcon className="w-5 h-5" />
              </div>
              <h3 className="text-xs uppercase tracking-wider text-stone-500 font-light mb-1">
                Facebook
              </h3>
              <p className="text-base font-medium text-stone-900">
                @archeonstudio
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-blue-800">
              <span>{lang === 'ka' ? 'Facebook გვერდი' : 'Facebook Page'}</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-blue-700 transition-colors" />
            </div>
          </a>

          {/* Email */}
          <a
            href={siteConfig.emailMailtoUrl}
            className="p-6 bg-white rounded-lg border border-stone-200/90 hover:border-stone-400 hover:shadow-sm transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center text-stone-900 mb-4 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xs uppercase tracking-wider text-stone-500 font-light mb-1">
                {t.emailLabel}
              </h3>
              <p className="text-sm font-medium text-stone-900 truncate">
                {siteConfig.email}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-800">
              <span>{t.emailBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
            </div>
          </a>
        </div>

        {/* Quick Inquiry Helper & Studio Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 cols: Interactive Direct Message Composer */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-stone-200/90 shadow-xs space-y-6">
            <div>
              <h3 className="font-serif-heading text-2xl font-medium text-stone-900 mb-1">
                {t.inquiryHelperTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-light">
                {t.inquiryHelperSubtitle}
              </p>
            </div>

            {/* Service selector */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-600 font-medium mb-2">
                {t.selectProjectType}
              </label>
              <div className="flex flex-wrap gap-2">
                {availableServices.map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setSelectedService(srv)}
                    className={`px-3 py-1.5 text-xs rounded transition-colors text-left ${
                      selectedService === srv
                        ? 'bg-stone-900 text-white font-medium'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 border border-stone-200/60'
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-600 font-medium mb-1.5">
                  {lang === 'ka' ? 'სავარაუდო ფართობი (მ²)' : 'Approximate Area (m²)'}
                </label>
                <input
                  type="text"
                  value={spaceArea}
                  onChange={(e) => setSpaceArea(e.target.value)}
                  placeholder={lang === 'ka' ? 'მაგ: 120 მ²' : 'e.g. 120 m²'}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded bg-[#faf9f6] text-stone-900 focus:outline-hidden focus:border-stone-800 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-600 font-medium mb-1.5">
                  {lang === 'ka' ? 'ლოკაცია / უბანი' : 'City / Neighborhood'}
                </label>
                <input
                  type="text"
                  value={spaceLocation}
                  onChange={(e) => setSpaceLocation(e.target.value)}
                  placeholder={lang === 'ka' ? 'მაგ: ვაკე, თბილისი' : 'e.g. Vake, Tbilisi'}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded bg-[#faf9f6] text-stone-900 focus:outline-hidden focus:border-stone-800 transition-colors"
                />
              </div>
            </div>

            {/* Direct Launch Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={dynamicWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{t.sendViaWhatsapp}</span>
              </a>

              <a
                href={dynamicMailtoUrl}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-medium text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{t.sendViaEmail}</span>
              </a>
            </div>
          </div>

          {/* Right 5 cols: Studio Details & Operational Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-100/80 p-6 rounded-lg border border-stone-200 space-y-5">
              <h4 className="text-xs uppercase tracking-widest text-stone-500 font-medium pb-2 border-b border-stone-200">
                {lang === 'ka' ? 'სტუდიის ინფორმაცია' : 'Studio Details'}
              </h4>

              <div className="space-y-4 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-stone-600 mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium">
                      {t.locationLabel}
                    </span>
                    <span className="font-medium text-stone-900">
                      {siteConfig.location[lang]}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-stone-600 mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium">
                      {t.hoursLabel}
                    </span>
                    <span className="font-medium text-stone-900">
                      {siteConfig.workingHours[lang]}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-stone-600 mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium">
                      {t.phoneLabel}
                    </span>
                    <a
                      href={siteConfig.phoneCallUrl}
                      className="font-medium text-stone-900 hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-stone-600 mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium">
                      {t.emailLabel}
                    </span>
                    <a
                      href={siteConfig.emailMailtoUrl}
                      className="font-medium text-stone-900 hover:underline break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

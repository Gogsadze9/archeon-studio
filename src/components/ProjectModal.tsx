import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, Phone, Mail, Check, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { ProjectItem } from '../data/projects';
import { Language, translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';
import { WhatsAppIcon, MessengerIcon } from './icons/MessengerIcon';

interface ProjectModalProps {
  project: ProjectItem | null;
  lang: Language;
  onClose: () => void;
}

export function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const t = translations[lang].projectModal;
  const currentImages = project.galleryImages.length > 0 ? project.galleryImages : [project.primaryImage];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-5xl bg-[#faf9f6] rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white/60">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-light">
            <span className="font-medium text-stone-800">{project.categoryLabel[lang]}</span>
            <span aria-hidden="true">·</span>
            <span>{project.location[lang]}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-md hover:bg-stone-100 transition-colors"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 lg:p-8 space-y-8">
          {/* Main Visual Display */}
          <div className="space-y-3">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-lg overflow-hidden bg-stone-200 border border-stone-200">
              <img
                src={currentImages[activeImageIndex]}
                alt={`${project.title[lang]} - image ${activeImageIndex + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-3 right-3 px-2.5 py-1 text-xs bg-stone-900/80 text-stone-200 backdrop-blur-xs rounded">
                {activeImageIndex + 1} / {currentImages.length}
              </div>
            </div>

            {/* Thumbnail switcher if multiple images exist */}
            {currentImages.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {currentImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx ? 'border-stone-900 ring-2 ring-stone-900/10' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-2">
            {/* Left 2 Cols: Title & Descriptions */}
            <div className="lg:col-span-2 space-y-4">
              <h2
                id="modal-project-title"
                className="font-serif-heading text-2xl sm:text-3xl text-stone-900 font-medium tracking-tight"
              >
                {project.title[lang]}
              </h2>

              <p className="text-stone-700 leading-relaxed font-light text-base text-pretty">
                {project.fullDescription[lang]}
              </p>

              {/* Scope / Deliverables list */}
              <div className="pt-4 border-t border-stone-200">
                <h4 className="text-xs uppercase tracking-wider text-stone-500 font-medium mb-3">
                  {t.services}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700 font-light">
                  {project.services[lang].map((srv, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio note */}
              <p className="text-xs text-stone-600 italic pt-2">
                * {t.placeholderNote}
              </p>
            </div>

            {/* Right 1 Col: Specs & Direct Contact CTA */}
            <div className="bg-stone-50 p-5 rounded-lg border border-stone-200 space-y-5">
              <h4 className="text-xs uppercase tracking-wider text-stone-500 font-medium pb-2 border-b border-stone-200">
                {lang === 'ka' ? 'პროექტის მონაცემები' : 'Project Specs'}
              </h4>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">{t.location}</span>
                  <span className="font-medium text-stone-800 text-right">{project.location[lang]}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">{t.year}</span>
                  <span className="font-medium text-stone-800">{project.year}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">{t.area}</span>
                  <span className="font-medium text-stone-800">{project.area}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">{t.category}</span>
                  <span className="font-medium text-stone-800 text-right">{project.categoryLabel[lang]}</span>
                </div>
              </div>

              {/* Working Contact Links for this project */}
              <div className="pt-3 border-t border-stone-200 space-y-2">
                <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium mb-2">
                  {t.inquireProject}
                </span>

                <a
                  href={siteConfig.phoneCallUrl}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 text-xs font-medium text-white bg-stone-900 rounded hover:bg-stone-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{translations[lang].contact.phoneBtn}: {siteConfig.phone}</span>
                </a>

                <a
                  href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(
                    lang === 'ka'
                      ? `გამარჯობა, მაინტერესებს კონსულტაცია პროექტზე: ${project.title.ka}`
                      : `Hello, I would like to inquire about project: ${project.title.en}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-medium text-stone-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-700" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                    `Archeon Studio Inquiry - ${project.title.en}`
                  )}`}
                  className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-medium text-stone-700 hover:text-stone-950 border border-stone-200 hover:bg-stone-100 rounded transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{translations[lang].contact.emailBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>{siteConfig.brandName} · {siteConfig.location[lang]}</span>
          <button
            onClick={onClose}
            className="text-stone-800 hover:text-stone-950 font-medium underline underline-offset-2"
          >
            {t.close} (ESC)
          </button>
        </div>
      </div>
    </div>
  );
}

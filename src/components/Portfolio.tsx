import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { projectsData, portfolioCategories, ProjectCategory, ProjectItem } from '../data/projects';
import { Language, translations } from '../data/translations';

interface PortfolioProps {
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export function Portfolio({ lang, onSelectProject }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const t = translations[lang].featured;

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#faf9f6] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest text-stone-500 uppercase mb-3">
              <span>{t.sectionNumber}</span>
              <span aria-hidden="true">/</span>
              <span>{lang === 'ka' ? 'არქიტექტურული პორტფოლიო' : 'Architectural Portfolio'}</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 font-light max-w-md">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filters (Interactive functional filter controls with zero pills) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-950 bg-stone-100 hover:bg-stone-200/70 border border-stone-200/60'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Projects Bento / Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            // Give the first item in "all" or specific highlight slightly larger visual weight if suitable
            const isFeatured = index === 0 && selectedCategory === 'all';

            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer flex flex-col justify-between bg-white rounded-lg border border-stone-200/80 overflow-hidden hover:border-stone-400/80 transition-all duration-300 hover:shadow-md ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Image container */}
                  <div className={`relative overflow-hidden bg-stone-100 ${
                    isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}>
                    <img
                      src={project.primaryImage}
                      alt={project.title[lang]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                      loading="lazy"
                    />
                    
                    {/* Hover detail indicator */}
                    <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-900/90 text-white text-xs font-medium rounded backdrop-blur-xs">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{t.viewDetails}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Clean unboxed metadata with separators (Strictly Zero-Pill) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-light mb-3">
                      <span>{project.categoryLabel[lang]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location[lang]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{project.area}</span>
                    </div>

                    <h3 className="font-serif-heading text-xl sm:text-2xl font-medium text-stone-900 mb-2 group-hover:text-stone-700 transition-colors">
                      {project.title[lang]}
                    </h3>

                    <p className="text-sm text-stone-600 font-light line-clamp-2 leading-relaxed text-pretty">
                      {project.shortDescription[lang]}
                    </p>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between text-xs font-medium text-stone-800 border-t border-stone-100 pt-4 mt-auto">
                  <span className="text-stone-500 font-light group-hover:text-stone-900 transition-colors">
                    {t.viewDetails}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-stone-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Informative transparency notice */}
        <div className="mt-12 text-center text-xs text-stone-500 font-light max-w-xl mx-auto">
          {lang === 'ka' 
            ? 'სადემონსტრაციო საპროექტო ნამუშევრები ასახავს ჩვენს მიდგომასა და სერვისებს. რეალური პროექტის განსახილველად დაგვიკავშირდით.'
            : 'Portfolio showcase concepts demonstrate our design language, technical depth, and standards. Contact us to discuss your space.'}
        </div>
      </div>
    </section>
  );
}

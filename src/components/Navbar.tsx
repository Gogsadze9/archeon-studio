import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ lang, onToggleLang, activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t.home },
    { id: 'services', label: t.services },
    { id: 'about', label: t.about },
    { id: 'team', label: t.team },
    { id: 'contact', label: t.contact },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3.5'
            : 'bg-[#faf9f6]/80 backdrop-blur-xs border-b border-stone-200/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Single element Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="group text-left text-stone-900 tracking-wider whitespace-nowrap shrink-0 transition-opacity hover:opacity-80"
          >
            <span className="font-serif-heading text-2xl lg:text-3xl font-medium tracking-tight">
              ARCHEON
            </span>
            <span className="text-[11px] tracking-[0.25em] font-light text-stone-500 uppercase ml-2">
              Studio
            </span>
          </button>

          {/* Zone 2: 4-6 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm tracking-wide font-normal text-stone-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  activeSection === link.id
                    ? 'text-stone-950 font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-stone-900'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Language switcher & Primary Contact Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 border border-stone-300/80 rounded transition-colors whitespace-nowrap shrink-0"
              title={lang === 'ka' ? 'Switch to English' : 'გადართვა ქართულზე'}
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-stone-500" />
              <span>{lang === 'ka' ? 'ENG' : 'ქარ'}</span>
            </button>

            <a
              href={siteConfig.phoneCallUrl}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-stone-100 bg-stone-900 rounded hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{translations[lang].contact.phoneBtn}</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-800 hover:text-stone-950 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] bg-[#faf9f6] border-b border-stone-200 z-30 px-6 py-6 md:hidden shadow-lg transition-all">
          <nav className="flex flex-col gap-4 text-base font-normal text-stone-800">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left py-2 border-b border-stone-100 transition-colors ${
                  activeSection === link.id ? 'font-medium text-stone-950 pl-2 border-l-2 border-stone-900' : 'text-stone-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col gap-3">
            <a
              href={siteConfig.phoneCallUrl}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-white bg-stone-900 rounded hover:bg-stone-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>
            <div className="flex items-center justify-between text-xs text-stone-500 pt-2">
              <span>{siteConfig.location[lang]}</span>
              <button
                onClick={onToggleLang}
                className="text-stone-900 font-medium underline underline-offset-4"
              >
                {lang === 'ka' ? 'Switch to English' : 'გადართვა ქართულზე'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

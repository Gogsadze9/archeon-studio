/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Language, translations } from './data/translations';
import { siteConfig } from './data/siteConfig';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './components/icons/MessengerIcon';

export default function App() {
  // Default language is Georgian ('ka') as requested
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('archeon_lang');
    return (saved === 'en' || saved === 'ka') ? saved : 'ka';
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [inquiredService, setInquiredService] = useState<string | undefined>(undefined);

  // Sync language with localStorage & html lang attribute
  useEffect(() => {
    localStorage.setItem('archeon_lang', lang);
    document.documentElement.lang = lang;
    document.title = lang === 'ka'
      ? 'Archeon Studio – არქიტექტურა და ინტერიერის დიზაინი | იდეიდან რეალურ სივრცემდე'
      : 'Archeon Studio – Architecture & Interior Design | From Concept to Real Space';
  }, [lang]);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['hero', 'services', 'about', 'team', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ka' ? 'en' : 'ka'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleInquireService = (serviceName: string) => {
    setInquiredService(serviceName);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 font-sans-main flex flex-col selection:bg-stone-200">
      {/* Top Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onExploreClick={() => scrollToSection('services')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. Services Section */}
        <Services
          lang={lang}
          onInquireService={handleInquireService}
        />

        {/* 3. About Us Section */}
        <About
          lang={lang}
          onConsultationClick={() => scrollToSection('contact')}
        />

        {/* 4. Team Section */}
        <Team lang={lang} />

        {/* 5. Contact Section */}
        <Contact
          lang={lang}
          preselectedService={inquiredService}
        />
      </main>

      {/* Floating Desktop Quick Contact Bubble */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-30 flex-col gap-2.5">
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          title="WhatsApp: +995 551 31 62 62"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>

        <a
          href={siteConfig.phoneCallUrl}
          className="w-12 h-12 rounded-full bg-stone-900 hover:bg-stone-800 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          title={`Call ${siteConfig.phone}`}
          aria-label={`Call ${siteConfig.phone}`}
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Mobile Sticky Quick Contact Bar (1-tap access on mobile, <15% viewport height) */}
      <MobileQuickBar lang={lang} />

      {/* Footer */}
      <Footer
        lang={lang}
        onToggleLang={handleToggleLang}
        onNavigate={scrollToSection}
      />
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { ProjectModal } from './components/ProjectModal';
import { Services } from './components/Services';
import { About } from './components/About';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Language, translations } from './data/translations';
import { ProjectItem } from './data/projects';
import { siteConfig } from './data/siteConfig';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './components/icons/MessengerIcon';

export default function App() {
  // Default language is Georgian ('ka') as requested
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('archeon_lang');
      return (saved === 'en' || saved === 'ka') ? saved : 'ka';
    }
    return 'ka';
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [inquiredService, setInquiredService] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync language with localStorage, html lang attribute & SEO tags
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('archeon_lang', lang);
    document.documentElement.lang = lang;
    document.title = lang === 'ka'
      ? 'Archeon Studio – არქიტექტურული სტუდია & ინტერიერის დიზაინი თბილისი'
      : 'Archeon Studio – Architectural Studio & Interior Design Tbilisi';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        lang === 'ka'
          ? 'Archeon Studio – წამყვანი არქიტექტურული სტუდია და ინტერიერის დიზაინი თბილისში. სივრცის დაგეგმარება, ლაზერული აზომვა და 3D ვიზუალიზაცია.'
          : 'Archeon Studio – Leading architecture & interior design studio in Tbilisi, Georgia. Space planning, laser survey, 3D visualization, and technical blueprints.'
      );
    }
  }, [lang]);

  // Handle route based scrolling on initial mount (for prerendered routes /about, /services, etc.)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const path = window.location.pathname.replace(/\/$/, '');
    const segment = path.split('/').pop()?.toLowerCase();
    if (segment) {
      if (segment === 'portfolio' || segment === 'projects') {
        setTimeout(() => scrollToSection('portfolio'), 100);
      } else if (['services', 'about', 'team', 'contact'].includes(segment)) {
        setTimeout(() => scrollToSection(segment), 100);
      }
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sections = ['hero', 'portfolio', 'services', 'about', 'team', 'contact'];
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
    if (typeof window === 'undefined') return;
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
          onExploreClick={() => scrollToSection('portfolio')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. Portfolio / Projects Section */}
        <Portfolio
          lang={lang}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 3. Services Section */}
        <Services
          lang={lang}
          onInquireService={handleInquireService}
        />

        {/* 4. About Us Section */}
        <About
          lang={lang}
          onConsultationClick={() => scrollToSection('contact')}
        />

        {/* 5. Team Section */}
        <Team lang={lang} />

        {/* 6. Contact Section */}
        <Contact
          lang={lang}
          preselectedService={inquiredService}
        />

        {/* Modal for project preview */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            lang={lang}
            onClose={() => setSelectedProject(null)}
          />
        )}
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

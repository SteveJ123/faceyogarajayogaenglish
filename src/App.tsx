import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Curriculum } from './components/Curriculum';
import { AuthenticityProof } from './components/AuthenticityProof';
import { MentorSection } from './components/MentorSection';
import { SupportTeam } from './components/SupportTeam';
import { FaqSection } from './components/FaqSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { RegisterModal } from './components/RegisterModal';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'te' : 'en'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCF7] text-[#2C2E1F] selection:bg-[#464B2B] selection:text-white">
      {/* 3-Zone Navigation Header */}
      <Header
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          language={language}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 5-Day Curriculum / Syllabus */}
        <Curriculum
          language={language}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Meet Mentor Legala Manjula & Video Discourse */}
        <MentorSection
          language={language}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Authenticity Pledge & Real Photos Comparison */}
        <AuthenticityProof
          language={language}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Dedicated Support Coordinators & Helplines */}
        <SupportTeam language={language} />

        {/* Frequently Asked Questions */}
        <FaqSection
          language={language}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />
      </main>

      {/* Compact Responsive Bottom Sticky Bar (<15% mobile viewport cap) */}
      <StickyBottomBar
        language={language}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Registration Modal Dialog */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        language={language}
      />

      {/* Footer */}
      <Footer
        language={language}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />
    </div>
  );
}

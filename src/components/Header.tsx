import React from 'react';
import { Language } from '../types';
import { Globe, ArrowRight } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  onOpenRegister,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FCFCF7]/95 backdrop-blur-md border-b border-[#E6E8D8] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark (single text element) */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-[#373B22] whitespace-nowrap shrink-0 flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#464B2B]"></span>
          <span className="font-serif tracking-tight">Face Yoga & Raja Yoga</span>
        </a>

        {/* Zone 2: Concise Nav Links (desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#505436]">
          <a href="#curriculum" className="hover:text-[#292D19] transition-colors whitespace-nowrap shrink-0">
            {language === 'en' ? '5-Day Program' : '5 రోజుల కార్యక్రమం'}
          </a>
          <a href="#mentor" className="hover:text-[#292D19] transition-colors whitespace-nowrap shrink-0">
            {language === 'en' ? 'Meet the Mentor' : 'గురువుగారి పరిచయం'}
          </a>
          <a href="#authenticity" className="hover:text-[#292D19] transition-colors whitespace-nowrap shrink-0">
            {language === 'en' ? 'Real Proof' : 'వాస్తవికత & నిజం'}
          </a>
          <a href="#coordinators" className="hover:text-[#292D19] transition-colors whitespace-nowrap shrink-0">
            {language === 'en' ? 'Support Desk' : 'హెల్ప్‌లైన్'}
          </a>
          <a href="#faq" className="hover:text-[#292D19] transition-colors whitespace-nowrap shrink-0">
            {language === 'en' ? 'FAQ' : 'ప్రశ్నోత్తరాలు'}
          </a>
        </nav>

        {/* Zone 3: Language Toggle + Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleLanguage}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D5D9BE] bg-white/80 hover:bg-white text-xs font-medium text-[#464B2B] transition-colors shadow-xs"
            title="Toggle language between English and Telugu"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="font-semibold">{language === 'en' ? 'తెలుగు' : 'English'}</span>
          </button>

          <button
            onClick={onOpenRegister}
            type="button"
            className="px-4 py-2 bg-[#464B2B] hover:bg-[#373B22] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>{language === 'en' ? 'Register · ₹499' : 'నమోదు చేసుకోండి · ₹499'}</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </button>
        </div>
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle, Search, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  language: Language;
  onOpenRegister: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language, onOpenRegister }) => {
  const [openId, setOpenId] = useState<string | null>('attend');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const q = language === 'en' ? faq.question : faq.questionTe;
    const a = language === 'en' ? faq.answer : faq.answerTe;
    const term = searchQuery.toLowerCase();
    return q.toLowerCase().includes(term) || a.toLowerCase().includes(term);
  });

  return (
    <section id="faq" className="py-14 sm:py-20 border-b border-[#E6E8D8] bg-[#FCFCF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#666B43] uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-[#464B2B]" />
            <span>{language === 'en' ? 'Got Questions?' : 'తరచుగా అడిగే ప్రశ్నలు'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#292D19] tracking-tight">
            {language === 'en' ? 'Frequently Asked Questions' : 'మీ సందేహాలు - మా సమాధానాలు'}
          </h2>
          <p className="mt-3 text-sm text-[#565B39] leading-relaxed">
            {language === 'en'
              ? 'Everything you need to know about the 5-day online cohort, live access, and practice guidelines.'
              : 'శిక్షణ, జూమ్ సెషన్లు, మరియు ప్రాక్టీస్ విధానాలపై పూర్తి సమాచారం.'}
          </p>

          {/* Quick Search */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'en' ? 'Search questions (e.g., Zoom, recordings, men)...' : 'ప్రశ్నల కోసం వెతకండి...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DCE0C5] bg-white text-sm text-[#2C2E1F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#464B2B]/30"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-[#DCE0C5] overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-[#292D19] hover:bg-[#F9FAF2] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold leading-snug">
                    {language === 'en' ? faq.question : faq.questionTe}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full bg-[#EEF1DF] text-[#464B2B] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#464B2B] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-sm text-[#4E5434] leading-relaxed border-t border-[#F2F4E6] bg-white">
                    {language === 'en' ? faq.answer : faq.answerTe}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-500 bg-white rounded-xl border border-dashed border-[#DCE0C5]">
              {language === 'en'
                ? 'No matching questions found. Please call our coordinators directly for immediate assistance!'
                : 'ఎలాంటి ఫలితాలు దొరకలేదు. దయచేసి మా కోఆర్డినేటర్లను నేరుగా సంప్రదించండి.'}
            </div>
          )}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 text-center p-6 bg-[#FAFBF5] rounded-2xl border border-[#DCE0C5]">
          <h3 className="text-base sm:text-lg font-serif font-bold text-[#292D19] mb-1">
            {language === 'en' ? 'Still have a specific question?' : 'ఇంకా ఏవైనా సందేహాలు ఉన్నాయా?'}
          </h3>
          <p className="text-xs sm:text-sm text-[#5C613F] mb-4">
            {language === 'en'
              ? 'Our student advisors are happy to help you over phone or WhatsApp.'
              : 'మా సపోర్ట్ టీమ్ ఎప్పుడూ మీకు సహాయం చేయడానికి సిద్ధంగా ఉంది.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:9440616790"
              className="px-4 py-2 bg-white border border-[#DCE0C5] text-xs font-semibold text-[#464B2B] rounded-lg hover:bg-neutral-50 transition-colors"
            >
              {language === 'en' ? 'Call Coordinator (+91 9440616790)' : 'కోఆర్డినేటర్‌కి కాల్ చేయండి'}
            </a>
            <button
              onClick={onOpenRegister}
              type="button"
              className="px-5 py-2 bg-[#464B2B] hover:bg-[#33381E] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>{language === 'en' ? 'Book Your Seat · ₹499' : 'మీ సీటును రిజర్వ్ చేసుకోండి'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Language } from '../types';
import { COORDINATORS } from '../data/content';
import { Phone, MessageCircle, Copy, Check, Headphones } from 'lucide-react';

interface SupportTeamProps {
  language: Language;
}

export const SupportTeam: React.FC<SupportTeamProps> = ({ language }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (phone: string, idx: number) => {
    navigator.clipboard.writeText(phone);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="coordinators" className="py-14 sm:py-20 border-b border-[#E6E8D8] bg-[#F9FAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#666B43] uppercase tracking-wider mb-2">
            <Headphones className="w-4 h-4 text-[#464B2B]" />
            <span>{language === 'en' ? 'Direct Helpline & Coordinators' : 'మరిన్ని వివరాలకు సంప్రదించండి'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#292D19] tracking-tight">
            {language === 'en' ? 'Need Assistance? Speak with Our Team' : 'మా సహకార బృందాన్ని సంప్రదించండి'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#565B39] leading-relaxed">
            {language === 'en'
              ? 'Our course coordinators are available daily to answer questions about syllabus, Zoom setup, timing, or payment confirmation.'
              : 'శిక్షణ వివరాలు, జూమ్ లింకులు, సమయాలు లేదా రిజిస్ట్రేషన్ సందేహాల కోసం మా బృందాన్ని సంప్రదించండి.'}
          </p>
        </div>

        {/* 5 Coordinators Grid (Responsive: 1 col on mobile, 2 on tablet, 3 on desktop with centered 5th) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {COORDINATORS.map((coordinator, idx) => {
            const isLast = idx === 4;
            const waUrl = `https://wa.me/91${coordinator.phone}?text=${encodeURIComponent(
              `Hello ${coordinator.name}, I have a query about the Face Yoga & Raja Yoga 5-day online workshop.`
            )}`;

            return (
              <div
                key={coordinator.phone}
                className={`bg-white rounded-xl border border-[#DCE0C5] p-5 shadow-xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between ${
                  isLast ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto w-full' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-[#666B43] uppercase tracking-wider">
                      {language === 'en' ? coordinator.role : coordinator.roleTe}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" title="Available for calls and WhatsApp"></span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#292D19]">
                    {language === 'en' ? coordinator.name : coordinator.nameTe}
                  </h3>

                  <div className="text-base sm:text-lg font-semibold text-[#464B2B] tracking-wide mt-1 tabular-nums">
                    +91 {coordinator.phone}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0F2E3] flex items-center gap-2">
                  {/* Call Button */}
                  <a
                    href={`tel:${coordinator.phone}`}
                    className="flex-1 py-2 px-3 bg-[#464B2B] hover:bg-[#33381E] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Call' : 'కాల్ చేయండి'}</span>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(coordinator.phone, idx)}
                    type="button"
                    className="p-2 rounded-lg border border-[#DCE0C5] text-[#555A38] hover:bg-[#F2F4E6] transition-colors"
                    title="Copy phone number"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timings Note */}
        <div className="mt-8 text-center text-xs text-[#6F7450]">
          {language === 'en'
            ? 'Helpline support active from 8:00 AM – 9:00 PM IST daily. WhatsApp replies are typically within 15 minutes.'
            : 'ప్రతిరోజూ ఉదయం 8:00 నుండి రాత్రి 9:00 వరకు సహాయ బృందం అందుబాటులో ఉంటుంది.'}
        </div>
      </div>
    </section>
  );
};

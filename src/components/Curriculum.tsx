import React, { useState } from 'react';
import { Language } from '../types';
import { CURRICON_MODULES } from '../data/content';
import { Check, Sparkles, ChevronRight, Activity, Moon, Sun, Wind } from 'lucide-react';

interface CurriculumProps {
  language: Language;
  onOpenRegister: () => void;
}

export const Curriculum: React.FC<CurriculumProps> = ({ language, onOpenRegister }) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const selectedModule = CURRICON_MODULES.find((m) => m.day === activeDay) || CURRICON_MODULES[0];

  return (
    <section id="curriculum" className="py-14 sm:py-20 border-b border-[#E6E8D8] bg-[#FCFCF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#666B43] uppercase tracking-wider mb-2">
            <span>{language === 'en' ? 'Comprehensive 5-Day Syllabus' : '5 రోజులలో నేర్పించే విషయాలు'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#292D19] tracking-tight">
            {language === 'en'
              ? 'Five Sacred Steps to Complete Vitality'
              : 'శారీరక మరియు మానసిక ఆరోగ్యానికి 5 దివ్య సోపానాలు'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#565B39] leading-relaxed">
            {language === 'en'
              ? 'Each session delivers practical, science-backed ancient techniques designed for immediate practice at home. Suitable for both men and women of all ages.'
              : 'మన ప్రాచీన పద్ధతుల ద్వారా శరీరానికి ముఖ కాంతిని, మనస్సుకు ప్రశాంతతను అందించే సమగ్ర శిక్షణ.'}
          </p>
        </div>

        {/* Desktop & Tablet Segmented Tab Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 bg-[#EEF1DF] rounded-xl mb-8 max-w-4xl mx-auto shadow-inner">
          {CURRICON_MODULES.map((item) => (
            <button
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              type="button"
              className={`py-3 px-2 sm:px-3 rounded-lg text-center transition-all duration-200 cursor-pointer ${
                activeDay === item.day
                  ? 'bg-white text-[#292D19] shadow-sm font-bold'
                  : 'text-[#505436] hover:text-[#292D19] hover:bg-white/50 font-medium'
              }`}
            >
              <div className="text-[11px] uppercase tracking-wider text-[#737951]">
                {language === 'en' ? `Day 0${item.day}` : `రోజు 0${item.day}`}
              </div>
              <div className="text-xs sm:text-sm truncate mt-0.5">
                {language === 'en' ? item.title.split('&')[0].trim() : item.titleTe.split('(')[0].trim()}
              </div>
            </button>
          ))}
        </div>

        {/* Active Module Detailed Showcase Card */}
        <div className="bg-white rounded-2xl border border-[#DCE0C5] p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: Day Badge & Concept */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#464B2B] text-white flex items-center justify-center font-serif font-bold text-lg tabular-nums">
                  0{selectedModule.day}
                </span>
                <div>
                  <div className="text-xs text-[#737951] uppercase tracking-wider font-semibold">
                    {language === 'en' ? `Module Phase 0${selectedModule.day}` : `విభాగం 0${selectedModule.day}`}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292D19]">
                    {language === 'en' ? selectedModule.title : selectedModule.titleTe}
                  </h3>
                </div>
              </div>

              <div className="text-sm font-medium text-amber-800 bg-amber-50 p-3 rounded-lg border border-amber-200/60">
                {language === 'en' ? selectedModule.subtitle : selectedModule.subtitleTe}
              </div>

              <p className="text-sm text-[#4E5434] leading-relaxed">
                {language === 'en' ? selectedModule.description : selectedModule.descriptionTe}
              </p>

              <div className="p-4 bg-[#F8F9F2] rounded-xl border border-[#E4E7D0]">
                <div className="text-xs font-semibold text-[#464B2B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Core Transformation' : 'ప్రధాన ప్రయోజనం'}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#373B22] font-medium leading-relaxed">
                  {language === 'en' ? selectedModule.benefit : selectedModule.benefitTe}
                </p>
              </div>
            </div>

            {/* Right Column: Practical Exercises & Routine */}
            <div className="md:col-span-7 space-y-5 bg-[#FCFCF9] p-5 sm:p-6 rounded-xl border border-[#E9EBDC]">
              <div className="flex items-center justify-between pb-3 border-b border-[#E3E6D2]">
                <h4 className="text-sm font-bold text-[#292D19] uppercase tracking-wider">
                  {language === 'en' ? 'Daily Practical Exercises' : 'రోజువారీ ఆచరణాత్మక వ్యాయామాలు'}
                </h4>
                <span className="text-xs text-[#6F7450]">
                  {language === 'en' ? '15 Min Home Practice' : '15 నిమిషాల దైనందిన సాధన'}
                </span>
              </div>

              <ul className="space-y-3">
                {(language === 'en' ? selectedModule.exercises : selectedModule.exercisesTe).map(
                  (ex, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#373B22]">
                      <span className="w-5 h-5 rounded-full bg-[#E5E9D2] text-[#464B2B] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{ex}</span>
                    </li>
                  )
                )}
              </ul>

              <div className="pt-4 border-t border-[#E3E6D2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="text-xs text-[#606543]">
                  {language === 'en'
                    ? 'Includes interactive live question & answer support'
                    : 'ప్రసంగం అనంతరం ప్రతిరోజూ సందేహాల నివృత్తి'}
                </div>
                <button
                  onClick={onOpenRegister}
                  type="button"
                  className="px-4 py-2 bg-[#464B2B] hover:bg-[#33381E] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{language === 'en' ? 'Enroll in This Batch' : 'ఈ బ్యాచ్‌లో చేరండి'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Modules Overview Grid (Cards) for Fast Scanning */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CURRICON_MODULES.map((item) => (
            <div
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                activeDay === item.day
                  ? 'border-[#464B2B] bg-white ring-2 ring-[#464B2B]/20 shadow-sm'
                  : 'border-[#E2E5D0] bg-white/60 hover:bg-white hover:border-[#CCD1B3]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  {language === 'en' ? `Day 0${item.day}` : `రోజు 0${item.day}`}
                </span>
                <span className="text-[11px] text-[#737951]">8:30 PM</span>
              </div>
              <h4 className="text-sm font-bold text-[#292D19] line-clamp-1 mb-1">
                {language === 'en' ? item.title.split('&')[0].trim() : item.titleTe}
              </h4>
              <p className="text-xs text-[#555A37] line-clamp-2 leading-relaxed">
                {language === 'en' ? item.subtitle : item.subtitleTe}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

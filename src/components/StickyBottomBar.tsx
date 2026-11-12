import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { WORKSHOP_DETAILS } from '../data/content';
import { Clock, ArrowRight, X } from 'lucide-react';

interface StickyBottomBarProps {
  language: Language;
  onOpenRegister: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  language,
  onOpenRegister,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 38,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Limited-time offer countdown"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FCFCF7]/95 backdrop-blur-md border-t border-[#D5D9BE] py-2.5 px-4 shadow-xl transition-transform"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* Price & Savings */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="text-left">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-black text-[#464B2B] tabular-nums">₹499</span>
              <span className="text-xs text-gray-400 line-through tabular-nums hidden xs:inline">₹5,000</span>
            </div>
            <div className="text-[10px] text-[#636845] font-semibold leading-tight">
              {language === 'en' ? 'Complete 5-Day Access' : '5 రోజుల పూర్తి ప్రవేశం'}
            </div>
          </div>
        </div>

        {/* Live Countdown Timer (compact) */}
        <div className="hidden md:flex items-center gap-2 text-xs text-[#464B2B] bg-[#EEF1DF] px-3 py-1.5 rounded-lg border border-[#DCE0C5]">
          <Clock className="w-3.5 h-3.5 text-[#464B2B]" />
          <span className="font-semibold">{language === 'en' ? 'Offer Ends:' : 'ఆఫర్ ముగుస్తుంది:'}</span>
          <div className="flex items-center gap-1 font-mono font-bold tabular-nums">
            <span className="bg-white px-1.5 py-0.5 rounded shadow-2xs">
              {String(timeLeft.days).padStart(2, '0')}d
            </span>
            <span>:</span>
            <span className="bg-white px-1.5 py-0.5 rounded shadow-2xs">
              {String(timeLeft.hours).padStart(2, '0')}h
            </span>
            <span>:</span>
            <span className="bg-white px-1.5 py-0.5 rounded shadow-2xs">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            <span>:</span>
            <span className="bg-white px-1.5 py-0.5 rounded shadow-2xs text-amber-700">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

        {/* CTA Button & Dismiss */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenRegister}
            type="button"
            className="px-5 sm:px-7 py-2 sm:py-2.5 bg-[#464B2B] hover:bg-[#33381E] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>{language === 'en' ? 'Register Now' : 'ఇప్పుడే నమోదు చేసుకోండి'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsVisible(false)}
            type="button"
            aria-label="Dismiss offer bar"
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-neutral-100 transition-colors hidden sm:inline-flex"
            title="Dismiss bottom bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

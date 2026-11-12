import React from 'react';
import { Sparkles, PhoneCall } from 'lucide-react';

interface StickyConversionDockProps {
  onOpenQuoteModal: () => void;
}

export const StickyConversionDock: React.FC<StickyConversionDockProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:+18005550199"
          className="flex-1 py-2 px-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs text-center"
        >
          <PhoneCall className="w-3.5 h-3.5 text-teal-600" />
          <span>Call Us</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="flex-1 py-2 px-3 rounded-lg bg-teal-600 active:bg-teal-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm text-center"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get Free Quote</span>
        </button>
      </div>
    </div>
  );
};

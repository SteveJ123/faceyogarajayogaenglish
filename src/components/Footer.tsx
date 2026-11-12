import React from 'react';
import { Language } from '../types';
import { Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  language: Language;
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenRegister }) => {
  return (
    <footer className="bg-[#292D19] text-white/90 pt-14 pb-24 sm:pb-20 border-t border-[#373B22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Namaste Gratitude Banner */}
        <div className="text-center pb-12 border-b border-white/10 max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 text-2xl">
            🙏
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
            {language === 'en'
              ? 'Thank You for Visiting Our Spiritual Wellness Portal'
              : 'మా వెబ్‌సైట్‌ని సందర్శించినందుకు ధన్యవాదాలు'}
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            {language === 'en'
              ? 'May your journey towards authentic beauty, bodily vitality, and inner peace be blessed with supreme harmony.'
              : 'మీ ఆయురారోగ్యాలు, సహజమైన కాంతి మరియు ఆత్మశాంతి పరిఢవిల్లాలని కోరుకుంటున్నాము.'}
          </p>
        </div>

        {/* 3-Zone Clean Footer Layout */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 text-left text-xs sm:text-sm">
          {/* Brand & Organization */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="text-base font-serif font-bold text-white tracking-wide">
                Face Yoga & Raja Yoga
              </span>
            </div>
            <p className="text-white/70 text-xs leading-relaxed max-w-sm">
              {language === 'en'
                ? 'Conducted under the spiritual guidance of Gyan Murli Foundation and Nirakar Shiv Paramatma Adhyatmik Vishwa Vidyalay.'
                : 'జ్ఞాన్ మురళి ఫౌండేషన్ మరియు నిరాకార శివ పరమాత్మ ఆధ్యాత్మిక విశ్వ విద్యాలయం ఆధ్వర్యంలో.'}
            </p>
            <div className="text-[11px] text-white/50 pt-2">
              Mentor: Legala Manjula · Former SBI Officer & Spiritual Educator
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-xs mb-3">
              {language === 'en' ? 'Workshop Overview' : 'ముఖ్య లింకులు'}
            </div>
            <ul className="space-y-2 text-white/70 text-xs">
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">
                  {language === 'en' ? '5-Day Curriculum' : '5 రోజుల సిలబస్'}
                </a>
              </li>
              <li>
                <a href="#mentor" className="hover:text-white transition-colors">
                  {language === 'en' ? 'About Legala Manjula' : 'గురువుగారి గురించి'}
                </a>
              </li>
              <li>
                <a href="#authenticity" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Real Photos & Proof' : 'వాస్తవిక ఫలితాలు'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Frequently Asked Questions' : 'తరచుగా అడిగే ప్రశ్నలు'}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Register Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-xs mb-1">
              {language === 'en' ? 'Upcoming Live Batch' : 'తదుపరి బ్యాచ్ వివరాలు'}
            </div>
            <p className="text-white/70 text-xs leading-relaxed">
              {language === 'en'
                ? 'Sessions held daily from 8:30 PM to 9:30 PM IST via Zoom. Nominal registration fee: ₹499 for all 5 days.'
                : 'రోజూ రాత్రి 8:30 నుండి 9:30 వరకు జూమ్ ద్వారా లైవ్ క్లాసులు. ప్రవేశ రుసుము ₹499 మాత్రమే.'}
            </p>
            <button
              onClick={onOpenRegister}
              type="button"
              className="mt-2 w-full sm:w-auto px-5 py-2.5 bg-white text-[#292D19] font-bold text-xs rounded-lg hover:bg-neutral-100 transition-colors shadow-xs"
            >
              {language === 'en' ? 'Register Now (₹499)' : 'ఇప్పుడే నమోదు చేసుకోండి'}
            </button>
          </div>
        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © {new Date().getFullYear()} Gyan Murli Foundation. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>{language === 'en' ? 'Natural Wellness · No Synthetic Filters' : 'సహజ సౌందర్యం & ఆధ్యాత్మిక శాంతి'}</span>
            <span aria-hidden="true">·</span>
            <span>Made with Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

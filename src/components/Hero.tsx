import React from 'react';
import { Language } from '../types';
import { IMAGES, WORKSHOP_DETAILS } from '../data/content';
import { Calendar, Clock, Video, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  language: Language;
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenRegister }) => {
  return (
    <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 border-b border-[#E6E8D8] overflow-hidden bg-gradient-to-b from-[#FCFCF7] via-[#F9F9F0] to-[#FCFCF7]">
      {/* Top Value Oath Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10">
        <div className="bg-[#464B2B] text-white py-2.5 px-4 sm:px-6 rounded-xl shadow-xs flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center">
          <Sparkles className="w-4 h-4 text-amber-300 shrink-0 hidden sm:inline" />
          <p className="text-xs sm:text-sm font-medium tracking-wide">
            {language === 'en'
              ? 'Real Photos! Natural Beauty! My Priority: Honesty, Natural Authenticity & Reality.'
              : 'నిజమైన ఫోటోలు! సహజమైన అందం! నిజాయితీకి, సహజత్వానికి, వాస్తవికతకు నా ప్రాధాన్యత!'}
          </p>
          <Sparkles className="w-4 h-4 text-amber-300 shrink-0 hidden sm:inline" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Information */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            {/* Audience Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#666B43]">
              <span className="uppercase tracking-wider">
                {language === 'en' ? 'Open to Both Women & Men' : 'స్త్రీలు మరియు పురుషులు అందరూ చేరవచ్చు'}
              </span>
              <span aria-hidden="true">·</span>
              <span>{language === 'en' ? '5-Day Live Cohort' : '5 రోజుల ప్రత్యక్ష తరగతులు'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#292D19] leading-tight tracking-tight text-balance">
              {language === 'en'
                ? 'Complete Physical & Mental Wellness Through Face Yoga + Raja Yoga'
                : 'సంపూర్ణ శారీరక మరియు మానసిక ఆరోగ్యం కోసం ఫేస్ యోగ + రాజ యోగ'}
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-[#464B2B]/90 leading-relaxed max-w-2xl">
              {language === 'en'
                ? 'Awaken your innate vitality, lift facial contours naturally, unblock vital chakras, and restore deep soul peace through time-tested ancient Indian wisdom. Guided live by former SBI officer and spiritual mentor Legala Manjula.'
                : 'మన ప్రాచీన భారతదేశ పద్ధతుల ద్వారా సంపూర్ణ శారీరక మరియు మానసిక ఆరోగ్యం కోరుకునే ప్రతి ఒక్కరి కోసం రూపొందించిన విశిష్ట 5 రోజుల అంతర్జాల శిక్షణ.'}
            </p>

            {/* Clean Unboxed Metadata Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white/70 border border-[#E2E5D0] text-[#33381E] text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#464B2B] shrink-0" />
                <div>
                  <div className="font-semibold">{WORKSHOP_DETAILS.dateRange}</div>
                  <div className="text-[11px] text-[#6B704C]">{language === 'en' ? 'Live 5-Day Workshop' : '5 రోజుల లైవ్ సెషన్'}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#464B2B] shrink-0" />
                <div>
                  <div className="font-semibold">{WORKSHOP_DETAILS.time}</div>
                  <div className="text-[11px] text-[#6B704C]">{language === 'en' ? '1 Hour (Practice + Q&A)' : '1 గంట సమయం'}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Video className="w-4 h-4 text-[#464B2B] shrink-0" />
                <div>
                  <div className="font-semibold">{WORKSHOP_DETAILS.platform}</div>
                  <div className="text-[11px] text-[#6B704C]">{language === 'en' ? 'Interactive Video Call' : 'ఇంటరాక్టివ్ వీడియో'}</div>
                </div>
              </div>
            </div>

            {/* Key Value Highlights List */}
            <div className="space-y-2 pt-1 text-sm text-[#373B22]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#464B2B] shrink-0 mt-0.5" />
                <span>
                  {language === 'en'
                    ? '100% Natural — No expensive cosmetics, injectables, or surgical strain'
                    : '100% సహజం — ఎలాంటి రసాయన సౌందర్య సాధనాలు, ఖరీదైన చికిత్సలు అవసరం లేదు'}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#464B2B] shrink-0 mt-0.5" />
                <span>
                  {language === 'en'
                    ? 'Covers Face Yoga, Hair Scalp Therapy, 7 Chakras, Infinity Walking & Raja Yoga'
                    : 'ముఖ సౌందర్యం, కేశ రక్షణ, చక్రా హీలింగ్, ఇన్ఫినిటీ వాకింగ్ మరియు రాజ యోగ'}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#464B2B] shrink-0 mt-0.5" />
                <span>
                  {language === 'en'
                    ? 'Proven with 80,000+ transformed souls across 13+ years of spiritual guidance'
                    : '80,000+ పైగా రూపాంతరం చెందిన జీవితాలు · 13 సంవత్సరాల విశేష అనుభవం'}
                </span>
              </div>
            </div>

            {/* Price & CTA Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenRegister}
                type="button"
                className="px-8 py-4 bg-[#464B2B] hover:bg-[#33381E] text-white font-bold text-base sm:text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
              >
                <span>{language === 'en' ? 'Register Now for ₹499' : 'ఈ రోజే నమోదు చేసుకోండి — ₹499'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center sm:justify-start gap-3 px-2">
                <div className="text-left">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-[#464B2B] tabular-nums">₹499</span>
                    <span className="text-sm text-gray-500 line-through tabular-nums">₹5,000</span>
                    <span className="text-xs font-semibold text-amber-700 bg-amber-100/70 px-1.5 py-0.5 rounded">90% OFF</span>
                  </div>
                  <div className="text-[11px] text-[#636845] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#464B2B]" />
                    <span>{language === 'en' ? 'One-time fee for all 5 days' : '5 రోజులకు ఏకైక రుసుము'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dominant Focal Visual Carrier */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm lg:max-w-sm rounded-2xl overflow-hidden shadow-lg border border-[#DCE0C5] bg-white group">
              <img
                src={IMAGES.hero}
                alt="Face Yoga authentic practice demonstration"
                className="w-full h-auto object-cover group-hover:scale-102 transition duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Glass Badge */}
              <div className="p-4 bg-white/95 border-t border-[#E6E8D8] text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#464B2B]"></span>
                  <span className="text-xs font-bold text-[#464B2B] uppercase tracking-wider">
                    {language === 'en' ? 'Authentic Daily Practice' : 'వాస్తవిక దైనందిన సాధన'}
                  </span>
                </div>
                <p className="text-xs text-[#505436] leading-relaxed">
                  {language === 'en'
                    ? 'Natural facial contouring, under-eye lymphatic drainage, and mindful relaxation for enduring glow.'
                    : 'సహజమైన రక్త ప్రసరణ, కంటి కింద నల్లటి వలయాల తొలగింపు మరియు ముఖ కాంతి కోసం.'}
                </p>
              </div>
            </div>

            {/* Quick trust metrics banner */}
            <div className="w-full mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="bg-white/80 p-3 rounded-xl border border-[#E6E8D8] shadow-xs">
                <div className="text-xl sm:text-2xl font-extrabold text-[#464B2B] tabular-nums font-serif">80,000+</div>
                <div className="text-[11px] text-[#6B704C] font-medium">
                  {language === 'en' ? 'Lives Transformed' : 'రూపాంతరం చెందిన జీవితాలు'}
                </div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-[#E6E8D8] shadow-xs">
                <div className="text-xl sm:text-2xl font-extrabold text-[#464B2B] tabular-nums font-serif">13+ Years</div>
                <div className="text-[11px] text-[#6B704C] font-medium">
                  {language === 'en' ? 'Spiritual Mentorship' : 'సంవత్సరాల అనుభవం'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

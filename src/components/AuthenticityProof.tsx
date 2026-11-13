import React from 'react';
import { Language } from '../types';
import { IMAGES } from '../data/content';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface AuthenticityProofProps {
  language: Language;
  onOpenRegister: () => void;
}

export const AuthenticityProof: React.FC<AuthenticityProofProps> = ({
  language,
  onOpenRegister,
}) => {
  return (
    <section id="authenticity" className="py-14 sm:py-20 border-b border-[#E6E8D8] bg-[#FCFCF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#666B43] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-[#464B2B]" />
            <span>{language === 'en' ? 'Our Pledge of Authenticity' : 'నిజాయితీకి, వాస్తవికతకు నా ప్రాధాన్యత'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#292D19] tracking-tight">
            {language === 'en'
              ? 'Real Photos. Real Experience. Zero Artificial Filters.'
              : 'నిజమైన ఫోటోలు! సహజమైన అందం! ఎలాంటి కృత్రిమ మార్పులు లేవు.'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#565B39] leading-relaxed">
            {language === 'en'
              ? 'In a world crowded with filtered illusions and synthetic promises, we believe true radiance stems from inner soul purity and diligent natural practice.'
              : 'బాహ్య సౌందర్య సాధనాలు కాకుండా, లోపలి ఆత్మ శుద్ధి మరియు నిజమైన యోగ సాధన ద్వారా సహజమైన కాంతి సాధ్యమవుతుంది.'}
          </p>
        </div>

        {/* The Founder's Declaration Box */}
        {/* <div className="bg-gradient-to-r from-[#F4F6EA] via-[#F8F9F1] to-[#F4F6EA] rounded-2xl border border-[#DCE0C5] p-6 sm:p-10 mb-12 shadow-xs">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-block p-2 rounded-full bg-white shadow-xs text-[#464B2B]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292D19]">
              {language === 'en'
                ? '“What I Share is Not Just Pictures — It is My Life’s Journey”'
                : '“నేను చూపించేది కేవలం చిత్రాలు కాదు... నా నిజమైన అనుభవం, నా ప్రయాణం!”'}
            </h3>
            <p className="text-sm sm:text-base text-[#464B2B] leading-relaxed">
              {language === 'en'
                ? 'The photographs used in our workshops and posters are 100% genuine and original. They are not fabricated by artificial AI generators or altered to mislead. I present only authentic, unmasked reality. When you join our Face Yoga + Raja Yoga cohort, you are embarking on a truthful journey of self-care and spiritual rejuvenation.'
                : 'ఈ పోస్టర్ లో ఉపయోగించిన ఫోటోలు నావే. ఇవి AI ద్వారా రూపొందించిన ఫోటోలు కావు. తప్పుదారి పట్టించేలా ఎలాంటి మార్పులు చేసిన ఫోటోలు కావు; నా అసలైన ఫోటోలు మాత్రమే ఉపయోగించాను. నిజమైన మార్గదర్శకత్వం కోసం నమ్మకంతో చేరండి.'}
            </p>
          </div>
        </div> */}
        <div className="bg-gradient-to-r from-[#F4F6EA] via-[#F8F9F1] to-[#F4F6EA] rounded-2xl border border-[#DCE0C5] p-6 sm:p-10 mb-12 shadow-xs">
  <div className="max-w-6xl mx-auto text-center space-y-6">
    <div className="inline-block p-2 rounded-full bg-white shadow-xs text-[#464B2B]">
      <Heart className="w-6 h-6" />
    </div>

    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292D19]">
      {language === 'en'
        ? '“What I Share is Not Just Pictures — It is My Life’s Journey”'
        : '“నేను చూపించేది కేవలం చిత్రాలు కాదు... నా నిజమైన అనుభవం, నా ప్రయాణం!”'}
    </h3>

    <p className="text-sm sm:text-base text-[#464B2B] leading-relaxed">
      {language === 'en'
        ? 'The photographs used in our workshops and posters are 100% genuine and original. They are not fabricated by artificial AI generators or altered to mislead. I present only authentic, unmasked reality. When you join our Face Yoga + Raja Yoga cohort, you are embarking on a truthful journey of self-care and spiritual rejuvenation.'
        : 'ఈ పోస్టర్ లో ఉపయోగించిన ఫోటోలు నావే. ఇవి AI ద్వారా రూపొందించిన ఫోటోలు కావు. తప్పుదారి పట్టించేలా ఎలాంటి మార్పులు చేసిన ఫోటోలు కావు; నా అసలైన ఫోటోలు మాత్రమే ఉపయోగించాను. నిజమైన మార్గదర్శకత్వం కోసం నమ్మకంతో చేరండి.'}
    </p>

    {/* --- Modified: Two-Column Before & After Section --- */}
    
    {/* grid-cols-1 md:grid-cols-2 gap-12 sm:gap-[14%] lg:gap-[24%] */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[4%] sm:gap-[14%]  pt-4 max-w-3xl mx-auto justify-center items-center">
      {/* Before Image Container */}
      <div className="space-y-3">        
        {/* relative aspect-[4/3] bg-[#F2F4E6] overflow-hidden */}
        <div className="relative w-full max-w-xs lg:max-w-xs rounded-2xl overflow-hidden shadow-lg border border-[#DCE0C5] group mx-auto">
                <img
                  src={IMAGES.before}
                  alt="Authentic natural facial wellness without filters"
                  className="w-full h-full object-contain hover:scale-103 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* <div className="absolute top-3 left-3 bg-[#464B2B]/90 backdrop-blur-xs text-white text-[17px] font-semibold px-2.5 py-1 rounded-md">
                  {language === 'en' ? 'BEFORE' : 'సహజ ముఖ కాంతి'}
                </div> */}
                <p className="max-w-3xl mx-auto bg-[#464B2B]/90 backdrop-blur-xs text-white text-[17px] font-semibold px-2.5 py-1 rounded-md">
          {language === 'en' ? 'BEFORE' : 'ముందు'}
        </p>
              </div>
        
      </div>

      {/* After Image Container */}
      <div className="space-y-3">
        <div className="relative w-full max-w-xs lg:max-w-xs rounded-2xl overflow-hidden shadow-lg border border-[#DCE0C5] group mx-auto">
                <img
                  src={IMAGES.after}
                  alt="Authentic natural facial wellness without filters"
                  className="w-full h-full object-contain hover:scale-103 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* <div className="absolute top-3 left-3 bg-[#464B2B]/90 backdrop-blur-xs text-white text-[17px] font-semibold px-2.5 py-1 rounded-md">
                  {language === 'en' ? 'AFTER' : 'సహజ ముఖ కాంతి'}
                </div> */}
                <p className="max-w-3xl mx-auto  bg-[#464B2B]/90 backdrop-blur-xs text-white text-[17px] font-semibold px-2.5 py-1 rounded-md">
          {language === 'en' ? 'AFTER' : 'తర్వాత'}
        </p>
              </div>
        
      </div>
    </div>

    {/* <div className="grid grid-flow-row sm:grid-flow-col gap-8 pt-4 max-w-4xl mx-auto justify-between items-center">
      
      <div className="space-y-3">        
      
        <div className="relative w-full max-w-sm lg:max-w-sm rounded-2xl overflow-hidden shadow-lg border border-[#DCE0C5] group">
                <img
                  src={IMAGES.before}
                  alt="Authentic natural facial wellness without filters"
                  className="w-full h-full object-contain hover:scale-103 transition duration-500"
                  referrerPolicy="no-referrer"
                />      
              </div>
        <p className="w-[150px] sm:w-[250px] mx-auto bg-[#464B2B]/90 backdrop-blur-xs text-white text-[17px] font-semibold px-2.5 py-1 rounded-md">
          {language === 'en' ? 'BEFORE' : 'ముందు'}
        </p>
      </div>
      
      <div className="space-y-3">
        <div className="relative w-full max-w-sm lg:max-w-sm rounded-2xl overflow-hidden shadow-lg border border-[#DCE0C5] group">
                <img
                  src={IMAGES.after}
                  alt="Authentic natural facial wellness without filters"
                  className="w-full h-full object-contain hover:scale-103 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
        <p className="w-[150px] sm:w-[250px] mx-auto  bg-[#464B2B]/90 backdrop-blur-xs text-white text-[17px] font-semibold px-2.5 py-1 rounded-md">
          {language === 'en' ? 'AFTER' : 'తర్వాత'}
        </p>
      </div>
    </div> */}
    {/* ------------------------------------------------- */}

  </div>
</div>

        {/* Visual Proof Comparison / Real Imagery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Card 1: Authentic Natural Facial Toning */}
          <div className="bg-white rounded-2xl border border-[#DCE0C5] overflow-hidden shadow-xs flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] bg-[#F2F4E6] overflow-hidden">
                <img
                  src={IMAGES.naturalProof}
                  alt="Authentic natural facial wellness without filters"
                  className="w-full h-full object-cover hover:scale-103 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#464B2B]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {language === 'en' ? 'Natural Facial Radiance' : 'సహజ ముఖ కాంతి'}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-serif font-bold text-[#292D19] mb-2">
                  {language === 'en' ? 'Authentic Face Yoga Results' : 'సహజమైన ఫేస్ యోగ సాధన ఫలితం'}
                </h4>
                <p className="text-xs sm:text-sm text-[#505537] leading-relaxed">
                  {language === 'en'
                    ? 'Strengthens 57 facial and neck muscles, stimulating micro-circulation and lymphatic drainage naturally without expensive serums, injectables, or surgery.'
                    : 'ముఖ కండరాలను సక్రియం చేసి, సహజంగా రక్త ప్రసరణను పెంపొందిస్తుంది. ఎలాంటి కృత్రిమ చికిత్సల అవసరం లేకుండానే కాంతిని అందిస్తుంది.'}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 border-t border-[#F0F2E3] flex items-center gap-2 text-xs text-[#6F7450]">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'en' ? 'Visible toning within 15–21 days of daily practice' : 'క్రమబద్ధమైన సాధనతో స్పష్టమైన మార్పు'}</span>
            </div>
          </div>

          {/* Card 2: Inner Harmony & Chakra Alignment */}
          <div className="bg-white rounded-2xl border border-[#DCE0C5] overflow-hidden shadow-xs flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] bg-[#F2F4E6] overflow-hidden">
                <img
                  src={IMAGES.chakraSess}
                  alt="Raja Yoga Meditation and Chakra Session"
                  className="w-full h-full object-cover hover:scale-103 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#464B2B]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {language === 'en' ? 'Raja Yoga & Energy Alignment' : 'రాజ యోగ & అంతరంగ ప్రశాంతత'}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-serif font-bold text-[#292D19] mb-2">
                  {language === 'en' ? 'The Soul Foundation of Wellness' : 'సంపూర్ణ ఆరోగ్యానికి ఆధ్యాత్మిక పునాది'}
                </h4>
                <p className="text-xs sm:text-sm text-[#505537] leading-relaxed">
                  {language === 'en'
                    ? 'True beauty cannot blossom in a stressed soul. Raja Yoga meditation removes root-level emotional residue, calming the nervous system and letting peace shine through your eyes.'
                    : 'మనస్సులో ఒత్తిడి, ఆందోళన ఉన్నంతవరకు శారీరక ఆరోగ్యం నిలబడదు. రాజ యోగ ధ్యానం ద్వారా మనస్సును నిర్మలంగా మార్చి, దైవిక శాంతిని అనుభవించండి.'}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 border-t border-[#F0F2E3] flex items-center gap-2 text-xs text-[#6F7450]">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'en' ? 'Calms overactive thought patterns and anxiety' : 'అనవసర ఆలోచనలను అదుపు చేసి ప్రశాంతత నింపుతుంది'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#464B2B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-lg sm:text-xl font-serif font-bold">
              {language === 'en' ? 'Love and Respect Your Natural Self' : 'మీ సహజమైన అందాన్ని మరియు ఆరోగ్యాన్ని ప్రేమించండి'}
            </h4>
            <p className="text-xs sm:text-sm text-white/80">
              {language === 'en'
                ? 'Begin your 5-day transformation journey today for just ₹499.'
                : 'ఈ రోజే మీ ఫేస్ యోగ + రాజ యోగ ప్రయాణాన్ని ప్రారంభించండి.'}
            </p>
          </div>
          <button
            onClick={onOpenRegister}
            type="button"
            className="px-6 py-3 bg-white hover:bg-neutral-100 text-[#464B2B] font-bold text-sm rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-2"
          >
            <span>{language === 'en' ? 'Enroll Today' : 'ఈ రోజే నమోదు చేసుకోండి'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

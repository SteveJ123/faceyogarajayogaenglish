import React, { useState } from 'react';
import { Language } from '../types';
import { IMAGES } from '../data/content';
import { Play, Award, Heart, BookOpen, Quote, ShieldCheck, ArrowRight } from 'lucide-react';

interface MentorSectionProps {
  language: Language;
  onOpenRegister: () => void;
}

export const MentorSection: React.FC<MentorSectionProps> = ({ language, onOpenRegister }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section id="mentor" className="py-14 sm:py-20 border-b border-[#E6E8D8] bg-[#F9FAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#666B43] uppercase tracking-wider mb-2">
            <span>{language === 'en' ? 'Spiritual Mentor & Trainer' : 'మీ ఆధ్యాత్మిక మార్గదర్శిని కలవండి'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#292D19] tracking-tight">
            {language === 'en' ? 'Meet Legala Manjula' : 'లెగల మంజుల గారు'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#565B39] leading-relaxed">
            {language === 'en'
              ? 'Guiding ordinary souls to discover inner peace, vibrant health, and authentic radiance through Bhagavad Gita and Raja Yoga.'
              : 'సాధారణ ఆత్మలను అందమైన, ప్రశాంతమైన మరియు ఆరోగ్యవంతమైన ఆత్మలుగా తీర్చిదిద్దుతున్న ఆధ్యాత్మిక మార్గదర్శకులు.'}
          </p>
        </div>

        {/* Profile Split Card */}
        <div className="bg-white rounded-2xl border border-[#DCE0C5] p-6 sm:p-10 lg:p-12 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-md border border-[#D5D9BE] bg-[#F2F4E6]">
                <img
                  src={IMAGES.mentor}
                  alt="Legala Manjula - Spiritual Mentor and Face Yoga Trainer"
                  className="w-full h-auto object-cover aspect-[3/4]"
                  referrerPolicy="no-referrer"
                />                
              </div>
              <div className="w-full max-w-sm mt-2 p-3 bg-[#F8F9F2] rounded-xl border border-[#E3E6D2] text-center">
                <div className="text-md font-bold text-[#373B22]">
                  {language === 'en' ? 'Face Yoga & Raja Yoga Master Trainer' : 'ఫేస్ యోగ + రాజ యోగ ట్రైనర్'}
                </div>
                <div className="text-sm text-[#696F4B] mt-0.5">
                  {language === 'en' ? 'Gyan Murli Foundation' : 'జ్ఞాన్ మురళి ఫౌండేషన్'}
                </div>
              </div>

              {/* Roles strip */}
              
            </div>

            {/* Right Column: Narrative & Credentials */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Prestigious Credentials */}
              <div className="space-y-3 pb-6 border-b border-[#E6E8D8]">
                <div className="text-md font-extrabold uppercase tracking-wider text-[#737951]">
                  {language === 'en' ? 'Honorable Background & Leadership' : 'అనుభవం & గౌరవ పదవులు'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#2C2E1F]">
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAFBF6] border border-[#EBEEDC]">
                    <Award className="w-4 h-4 text-[#464B2B] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-extrabold">{language === 'en' ? 'Former SBI Officer' : 'స్టేట్ బ్యాంక్ ఆఫ్ ఇండియా మాజీ అధికారి'}</div>
                      <div className="text-xs text-[#696F4B]">{language === 'en' ? '22 Years Service (Opted VRS 2020)' : '22 సంవత్సరాల విశేష సేవ'}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAFBF6] border border-[#EBEEDC]">
                    <Heart className="w-4 h-4 text-[#464B2B] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-extrabold">{language === 'en' ? 'Founder' : 'వ్యవస్థాపకులు'}</div>
                      <div className="text-xs text-[#696F4B]">Gyan Murli Foundation</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAFBF6] border border-[#EBEEDC]">
                    <BookOpen className="w-4 h-4 text-[#464B2B] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-extrabold">{language === 'en' ? 'Director' : 'డైరెక్టర్'}</div>
                      <div className="text-xs text-[#696F4B]">Nirakar Shiv Paramatma Adhyatmik Vishwa Vidyalay</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAFBF6] border border-[#EBEEDC]">
                    <ShieldCheck className="w-4 h-4 text-[#464B2B] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-extrabold">{language === 'en' ? 'Director' : 'డైరెక్టర్'}</div>
                      <div className="text-xs text-[#696F4B]">Sunflower Networks Pvt. Ltd.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder's Voice / Quote */}
              <div className="relative pl-6 py-2 border-l-2 border-[#464B2B] space-y-3">
                <Quote className="w-8 h-8 text-[#464B2B]/20 absolute -top-3 left-4" />
                <h3 className="text-lg font-serif font-extrabold text-[#292D19]">
                  {language === 'en' ? '“From Banking to Bhagavad Gita”' : '“బ్యాంకింగ్ నుండి భగవద్గీత వరకు”'}
                </h3>
                <p className="text-sm sm:text-base text-[#464B2B] leading-relaxed">
                  {language === 'en'
                    ? '“I view human life as a sacred flute, and our daily struggles as its holes. When the divine song—the Gyan Murli of Supreme Father Shiva—flows through our being, existence turns into a musical celebration. It infuses grace and quiet elegance into our actions, speech, and physical appearance.”'
                    : '“ఈ విద్యాలయం భగవద్గీతకు ప్రాధాన్యతనిస్తూ, జీవితాన్ని ఒక వేణువుగా, సమస్యలను రంధ్రాలుగా చిత్రీకరిస్తుంది. ఆ దివ్య గీతం లేదా జ్ఞాన మురళి ద్వారా పరమేశ్వరుని పవిత్ర జ్ఞానం మనలోకి ప్రవహించినప్పుడు జీవితం ఒక సంగీత ఉత్సవంగా రూపాంతరం చెందుతుంది.”'}
                </p>
                <p className="text-xs sm:text-sm text-[#666C47] font-medium">
                  {language === 'en'
                    ? 'Join me for this empowering 5-day journey and awaken the calm, confident, radiant soul within you.'
                    : 'ఈ శక్తివంతమైన తరగతిలో నాతో చేరండి; మీ అంతరాత్మలోని ప్రశాంతమైన, ఆత్మవిశ్వాసం కలిగిన వ్యక్తిత్వాన్ని మేల్కొల్పుదాం.'}
                </p>
              </div>

              {/* Verified Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#464B2B] text-white text-center shadow-xs">
                  <div className="text-2xl sm:text-3xl font-extrabold font-serif tabular-nums">80,000+</div>
                  <div className="text-xs text-white/80 mt-0.5">
                    {language === 'en' ? 'Transformed Lives' : 'రూపాంతరం చెందిన జీవితాలు'}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#464B2B] text-white text-center shadow-xs">
                  <div className="text-2xl sm:text-3xl font-extrabold font-serif tabular-nums">13+ Years</div>
                  <div className="text-xs text-white/80 mt-0.5">
                    {language === 'en' ? 'Practical Spiritual Experience' : 'సంవత్సరాల ఆధ్యాత్మిక అనుభవం'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Preview & Discourse Section */}
        <div className="bg-white rounded-2xl border border-[#DCE0C5] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Embedded YouTube Player */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-md border border-[#CCD1B3]">
                {!isPlayingVideo ? (
                  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#373B22] to-[#596135] text-white p-6 text-center group cursor-pointer" onClick={() => setIsPlayingVideo(true)}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 text-[#464B2B] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3">
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </div>
                      <div className="text-base sm:text-lg font-bold font-serif">
                        {language === 'en' ? 'Watch Video: Bhagavad Gita in Practical Life' : 'వీడియో చూడండి: దైనందిన జీవితంలో భగవద్గీత'}
                      </div>
                      <div className="text-xs text-white/80 mt-1">
                        {language === 'en' ? 'Discourse by Legala Manjula · Click to Play' : 'లెగల మంజుల గారి ప్రసంగం'}
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/-QJsMoE5GJ4?autoplay=1"
                    title="Bhagavad Gita in Practical Life - Legala Manjula"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            {/* Video Context & CTA */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-[#696F4B]">
                {language === 'en' ? 'Foundational Wisdom' : 'ఆధ్యాత్మిక పునాది'}
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292D19]">
                {language === 'en' ? 'Experience the Depth of Teaching' : 'శిక్షణలోని అంతరార్థాన్ని తెలుసుకోండి'}
              </h3>
              <p className="text-sm text-[#505537] leading-relaxed">
                {language === 'en'
                  ? 'Listen to Legala Manjula explain how an unexpected turning point led her from a banking career of 22 years to dedicating her life to spiritual mentoring, Bhagavad Gita, and natural healing.'
                  : 'కొన్నిసార్లు ఒక్క సంఘటన మన జీవిత గమనాన్ని మారుస్తుంది. ఆ కీలక మలుపుతో ప్రారంభమైన ఆధ్యాత్మిక చైతన్యాన్ని, ప్రశాంతతను మీరూ అనుభవించండి.'}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenRegister}
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 bg-[#464B2B] hover:bg-[#33381E] text-white text-sm font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>{language === 'en' ? 'Join Legala Manjula’s Live Class' : 'మంజుల గారి లైవ్ క్లాస్‌లో చేరండి'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

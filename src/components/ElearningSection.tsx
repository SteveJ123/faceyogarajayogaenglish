import React, { useState } from 'react';
import { 
  GraduationCap, 
  Video, 
  CreditCard, 
  Award, 
  Users, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { FAQS_DATA } from '../data/mockData';

interface ElearningSectionProps {
  onOpenQuoteModal: (service: string) => void;
}

export const ElearningSection: React.FC<ElearningSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'streaming' | 'payments' | 'quizzes' | 'faculty'>('streaming');
  const [openFaqId, setOpenFaqId] = useState<number | null>(2); // Default open second FAQ as in original code

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const architecturePillars = [
    {
      id: 'streaming',
      title: 'HD Live Video Classroom',
      icon: <Video className="w-4 h-4" />,
      highlight: 'Ultra-Low Latency (<500ms)',
      description: 'Integrated live streaming compatible with Zoom, WebRTC, or proprietary video servers. Features interactive student chat, raised hand queues, and automated cloud recording for missed sessions.',
      metrics: 'Up to 10,000+ Concurrent Students'
    },
    {
      id: 'payments',
      title: 'Global Payment & Installments',
      icon: <CreditCard className="w-4 h-4" />,
      highlight: 'Multi-Currency & EMI Options',
      description: 'Zero-friction checkout for student admissions. Supports credit cards, Apple Pay, Google Pay, Razorpay, and automated multi-part installment plans with instant receipt generation.',
      metrics: '3.2x Higher Enrollment Checkout'
    },
    {
      id: 'quizzes',
      title: 'Automated Grading & Certificates',
      icon: <Award className="w-4 h-4" />,
      highlight: 'Verifiable Digital Credentials',
      description: 'Create time-limited multiple-choice and descriptive examinations. Automatically grade submissions, generate analytics reports for parents, and issue tamper-proof completion certificates.',
      metrics: 'Zero Manual Grading Bottlenecks'
    },
    {
      id: 'faculty',
      title: 'Faculty & Multi-Branch Portal',
      icon: <Users className="w-4 h-4" />,
      highlight: 'Role-Based Access Control',
      description: 'Centralized management dashboard for principals, department heads, and instructors. Track student attendance, assignment submissions, course completion rates, and faculty payouts.',
      metrics: 'Unified Multi-Branch Management'
    }
  ];

  const currentPillar = architecturePillars.find(p => p.id === activeTab) || architecturePillars[0];

  return (
    <section id="elearning" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2">
            <span>Specialized Educational Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Next-Generation E-Learning & Student Portals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Specializing in unique E-Learning features to build an interactive, high-retention learning environment for institutes, private educators, and enterprise academies.
          </p>
        </div>

        {/* Feature Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Interactive Architecture Tabs & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-xl bg-slate-100 border border-slate-200">
              {architecturePillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id as any)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                    activeTab === pillar.id
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className={activeTab === pillar.id ? 'text-indigo-600' : 'text-slate-400'}>
                    {pillar.icon}
                  </span>
                  <span className="truncate">{pillar.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Pillar Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                  {currentPillar.highlight}
                </span>
                <span className="text-xs font-mono text-slate-500 font-medium">
                  {currentPillar.metrics}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {currentPillar.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentPillar.description}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Custom institutional branding & domain</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>DRM video copy-protection & watermarking</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Automated WhatsApp & SMS admission alerts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Integrated batch timetable calendar</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal('E-Learning Platform Suite')}
                  className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition flex items-center gap-2"
                >
                  <span>Build This E-Learning Platform</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs text-slate-500">
                  Standard deployment in 3–4 weeks
                </span>
              </div>
            </div>

            {/* Guaranteed Timeline Callout */}
            <div className="p-4 rounded-xl border border-teal-200 bg-teal-50/70 flex items-start gap-3">
              <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-teal-900 leading-relaxed">
                <strong>Fast-Track Launch Guarantee:</strong> Need your admission portal live before the new academic semester? We offer dedicated 21-day acceleration sprints with zero compromise on stability or video security.
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion (From User's Code) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="pb-2">
              <h3 className="text-lg font-bold text-slate-900">
                Frequently Asked Technical Questions
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Everything you need to know about platform architecture, security, and delivery.
              </p>
            </div>

            <div className="space-y-3" id="faq">
              {FAQS_DATA.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-teal-500/60 bg-white shadow-sm'
                        : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                      aria-expanded={isOpen}
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? 'bg-teal-600 text-white rotate-180' : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Target, 
  BarChart, 
  TrendingUp, 
  Search, 
  Share2, 
  FileText, 
  Check, 
  ArrowRight, 
  Sparkles, 
  MousePointerClick,
  Layers,
  Zap
} from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';

interface MarketingAdsSectionProps {
  onOpenQuoteModal: (service: string) => void;
}

export const MarketingAdsSection: React.FC<MarketingAdsSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'google' | 'social' | 'organic'>('google');

  const adChannels = [
    {
      id: 'google',
      name: 'Google Paid Campaigns',
      tagline: 'High-Intent Search & Performance Max',
      description: 'Capture decision-makers at the exact millisecond they search for your educational courses, software services, or commercial solutions. We eliminate negative keyword waste and optimize bids to maximize qualified lead volume.',
      stats: '3.8x Target ROAS · High Intent',
      deliverables: [
        'Single-keyword ad groups (SKAG) with tailored landing pages',
        'Performance Max multi-asset creative automation',
        'Remarketing campaigns that recapture 40%+ abandoned carts',
        'Real-time conversion tracking integrated with your CRM'
      ]
    },
    {
      id: 'social',
      name: 'SMO & Targeted Social Ads',
      tagline: 'Meta, LinkedIn & YouTube Creative Funnels',
      description: 'Engage prospective students, parents, and B2B buyers with thumb-stopping video ad creative, authentic testimonials, and interactive carousel stories across Instagram, Facebook, and LinkedIn.',
      stats: '+68% Click-Through Rate · Brand Reach',
      deliverables: [
        'Custom video reels & testimonial creative production',
        'Laser-targeted demographic & interest audience clustering',
        'Lead-generation forms directly inside social feeds',
        'Retargeting sequences that nurture leads to enrollment'
      ]
    },
    {
      id: 'organic',
      name: 'Organic Content & SEO Dominance',
      tagline: 'Long-Term Inbound Traffic Engines',
      description: 'Build an enduring competitive moat on search engines. Our technical SEO team optimizes Core Web Vitals, cleans up crawl errors, and produces authoritative long-form content that ranks #1 for target industry keywords.',
      stats: 'Zero Ongoing Click Cost · Compounding ROI',
      deliverables: [
        'Comprehensive keyword gap analysis vs top 5 competitors',
        'High-authority white-hat link acquisition & PR outreach',
        'Technical structured data injection (JSON-LD Course / FAQ)',
        'Quarterly content refresh to protect search rankings'
      ]
    }
  ];

  const currentChannel = adChannels.find(c => c.id === activeTab) || adChannels[0];

  return (
    <section id="growth" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            <span>Growth Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            One-Stop Digital Marketing & Performance Ads
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Improve the online visibility of your business website with proven multi-channel campaigns. We turn clicks into verified inquiries and predictable revenue.
          </p>
        </div>

        {/* 4 Pillars Grid (From user's CONVERSION, OPTIMIZATION, ANALYTIC, LINK BUILDING) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-500/60 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
              <MousePointerClick className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              Conversion
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Eliminate drop-off points with streamlined inquiry funnels, responsive micro-copy, and psychology-backed call-to-actions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-500/60 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              Optimization
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Sub-second page speeds, mobile responsiveness, and clean code that Google rewards with top organic search placement.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-500/60 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <BarChart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              Analytics
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Full-funnel attribution dashboards tracking every dollar from initial ad click to final invoice payment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-500/60 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              Link Building
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              High-authority editorial backlink acquisition that cements your domain's trust and outranks competitors long term.
            </p>
          </div>
        </div>

        {/* Channel Deep Dive Matrix */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Channel Selector */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Multi-Channel Execution
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Improve Online Presence with High-ROI Ads
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Choose the growth channel aligned with your institutional goals, or combine all three for rapid market dominance:
              </p>

              <div className="space-y-2.5 pt-2">
                {adChannels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => setActiveTab(channel.id as any)}
                    className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                      activeTab === channel.id
                        ? 'border-teal-500 bg-teal-50/50 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-slate-900">{channel.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{channel.tagline}</div>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${activeTab === channel.id ? 'text-teal-600 translate-x-1' : 'text-slate-300'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Selected Channel Details */}
            <div className="lg:col-span-7 bg-slate-50 rounded-xl border border-slate-200/90 p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-teal-700 bg-teal-100/70 px-2.5 py-1 rounded-md">
                  {currentChannel.stats}
                </span>
                <span className="text-xs text-slate-400">Targeted Execution</span>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  {currentChannel.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {currentChannel.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200">
                <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
                  Deliverables Included:
                </span>
                {currentChannel.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal(`Growth Campaign: ${currentChannel.name}`)}
                  className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition flex items-center gap-2"
                >
                  <span>Launch {currentChannel.name.split(' ')[0]} Sprints</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs text-slate-500">Includes dedicated account manager</span>
              </div>
            </div>

          </div>
        </div>

        {/* Quantified Case Studies Strip */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Verified Conversion Results
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real institutional outcomes measured in student enrollments, lower lead cost, and increased pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-teal-600 font-semibold">{cs.industry}</div>
                  <h4 className="text-lg font-bold text-slate-900">{cs.client}</h4>
                  <div className="p-3 rounded-lg bg-teal-50 border border-teal-100 text-teal-900 font-bold text-sm">
                    {cs.outcome}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{cs.metricName}:</span>
                  <span className="font-mono font-bold text-slate-900">
                    <span className="text-slate-400 line-through mr-1.5">{cs.beforeMetric}</span>
                    <span className="text-teal-600">{cs.afterMetric}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

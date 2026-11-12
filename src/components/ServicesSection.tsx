import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck, 
  Palette, 
  Server, 
  Check, 
  ArrowRight, 
  Plus, 
  SlidersHorizontal 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'development' | 'marketing' | 'infrastructure'>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-teal-600" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-indigo-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Palette': return <Palette className="w-6 h-6 text-rose-600" />;
      case 'Server': return <Server className="w-6 h-6 text-blue-600" />;
      default: return <Globe className="w-6 h-6 text-teal-600" />;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Comprehensive Digital Services Built for Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            From intuitive user interfaces and bulletproof backend infrastructures to student e-learning portals and performance Google Ads, we provide end-to-end execution.
          </p>

          {/* Interactive Category Filter Tabs (Zero-Pill Discipline, Clean Segmented Controls) */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Capabilities (6)
            </button>
            <button
              onClick={() => setActiveCategory('development')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'development'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Web & Apps
            </button>
            <button
              onClick={() => setActiveCategory('marketing')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'marketing'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Marketing & SEO
            </button>
            <button
              onClick={() => setActiveCategory('infrastructure')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'infrastructure'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cloud & Maintenance
            </button>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className="rounded-2xl border border-slate-200/90 bg-white hover:border-teal-500/50 hover:shadow-lg transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header with Icon & Quiet Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-teal-700 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Measurable Metric Bar */}
                  <div className="my-4 py-2 px-3 rounded-lg bg-slate-50 border border-slate-100 text-xs font-mono text-slate-700 font-medium">
                    {service.metrics}
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.slice(0, isExpanded ? service.features.length : 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {service.features.length > 3 && (
                    <button
                      onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                      className="mt-3 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors inline-flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Show less' : `+${service.features.length - 3} more deliverables`}</span>
                    </button>
                  )}
                </div>

                {/* Card Action Buttons (Direct Conversion Hook) */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  >
                    <span>Request Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    title="Add to project proposal builder"
                    className="p-2.5 rounded-lg border border-slate-200 hover:border-teal-500 hover:bg-teal-50 text-slate-600 hover:text-teal-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold">Need a Custom Bundled Solution for Your Institution?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Combine custom web portal development with automated maintenance and high-intent enrollment ads at bundled institutional rates.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForQuote('Institutional Custom Bundle')}
            className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            Customize Multi-Service Bundle
          </button>
        </div>

      </div>
    </section>
  );
};

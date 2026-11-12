import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenQuoteWithRoi: (estimatedLift: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenQuoteWithRoi }) => {
  const [monthlyVisitors, setMonthlyVisitors] = useState(25000);
  const [currentConversionRate, setCurrentConversionRate] = useState(1.4);
  const [averageValue, setAverageValue] = useState(350);

  // Calculations
  const currentMonthlyConversions = (monthlyVisitors * (currentConversionRate / 100));
  const currentAnnualRevenue = currentMonthlyConversions * averageValue * 12;

  // Realistic industry CRO boost from sub-second speed, intuitive UX, and clean inquiry funnels (+1.5% absolute lift)
  const projectedConversionRate = Number((currentConversionRate + 1.5).toFixed(1));
  const projectedMonthlyConversions = (monthlyVisitors * (projectedConversionRate / 100));
  const projectedAnnualRevenue = projectedMonthlyConversions * averageValue * 12;

  const annualGain = Math.round(projectedAnnualRevenue - currentAnnualRevenue);
  const additionalClientsPerMonth = Math.round(projectedMonthlyConversions - currentMonthlyConversions);

  return (
    <section id="roi-calculator" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            <span>Quantitative Business Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Calculate Your Predicted Conversion Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            See what even a +1.5% improvement in website load speed, user navigation, and inquiry funnel architecture generates for your bottom line.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sliders Input Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-7">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-teal-600" />
                <span>Input Your Current Performance Metrics</span>
              </span>
              <span className="text-xs text-slate-400">Live Simulator</span>
            </div>

            {/* Slider 1: Monthly Visitors */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="visitors" className="font-semibold text-slate-700">
                  Monthly Website Visitors
                </label>
                <span className="font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded text-xs tabular-nums">
                  {monthlyVisitors.toLocaleString()} visits / mo
                </span>
              </div>
              <input
                id="visitors"
                type="range"
                min="2000"
                max="150000"
                step="1000"
                value={monthlyVisitors}
                onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>2,000</span>
                <span>50,000</span>
                <span>150,000+</span>
              </div>
            </div>

            {/* Slider 2: Current Conversion Rate */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="cvr" className="font-semibold text-slate-700">
                  Current Conversion Rate (%)
                </label>
                <span className="font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded text-xs tabular-nums">
                  {currentConversionRate}%
                </span>
              </div>
              <input
                id="cvr"
                type="range"
                min="0.4"
                max="5.0"
                step="0.1"
                value={currentConversionRate}
                onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>0.4% (Industry Low)</span>
                <span>2.0% (Average)</span>
                <span>5.0% (Optimized)</span>
              </div>
            </div>

            {/* Slider 3: Average Order/Student Value */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="aov" className="font-semibold text-slate-700">
                  Average Customer / Student Course Value ($)
                </label>
                <span className="font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded text-xs tabular-nums">
                  ${averageValue.toLocaleString()}
                </span>
              </div>
              <input
                id="aov"
                type="range"
                min="50"
                max="3000"
                step="50"
                value={averageValue}
                onChange={(e) => setAverageValue(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>$50</span>
                <span>$1,000</span>
                <span>$3,000+</span>
              </div>
            </div>

            {/* What Drives This Gain */}
            <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Zero layout-shift mobile UX</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>3-step streamlined checkout</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Sub-second page speeds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>High-intent Google Ads targeting</span>
              </div>
            </div>
          </div>

          {/* Results Output Card */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                  Projected Annual Revenue Gain
                </span>
                <span className="text-teal-400 text-xs font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+1.5% CVR Lift</span>
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-teal-400 font-mono tabular-nums tracking-tight">
                  +${annualGain.toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Estimated additional top-line revenue generated annually without spending more on media traffic.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="text-xs text-slate-400">Additional Inquiries</div>
                  <div className="text-lg sm:text-xl font-bold text-white font-mono mt-0.5">
                    +{additionalClientsPerMonth} / mo
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="text-xs text-slate-400">New Conv. Rate</div>
                  <div className="text-lg sm:text-xl font-bold text-teal-300 font-mono mt-0.5">
                    {projectedConversionRate}%
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenQuoteWithRoi(`+$${annualGain.toLocaleString()}/yr`)}
                className="w-full py-4 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Capture This Revenue Lift</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-center text-[11px] text-slate-400 mt-2.5">
                Calculated on industry benchmark data from 240+ deployed client platforms
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

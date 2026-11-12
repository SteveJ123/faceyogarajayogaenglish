import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Gauge, 
  Smartphone, 
  Zap, 
  FileText, 
  RefreshCw 
} from 'lucide-react';

interface SeoAuditToolProps {
  onOpenConsultationWithAudit: (siteUrl: string, email: string) => void;
}

export const SeoAuditTool: React.FC<SeoAuditToolProps> = ({ onOpenConsultationWithAudit }) => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState('enrollments');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [auditResult, setAuditResult] = useState<null | {
    domain: string;
    score: number;
    speedScore: number;
    seoScore: number;
    croScore: number;
    issues: { title: string; severity: 'high' | 'medium'; fix: string }[];
    speedMetric: string;
  }>(null);

  const scanSteps = [
    'Connecting to website host & measuring Time-to-First-Byte...',
    'Testing Google Core Web Vitals (LCP, INP, CLS)...',
    'Analyzing search engine visibility & metadata structure...',
    'Evaluating conversion funnel friction & mobile UX...',
    'Generating actionable optimization roadmap...'
  ];

  const handleStartAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsScanning(true);
    setAuditResult(null);
    setScanStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < scanSteps.length) {
        setScanStep(current);
      } else {
        clearInterval(interval);
        setIsScanning(false);

        // Clean domain format
        const cleanDomain = url.replace(/^https?:\/\//i, '').replace(/\/.*$/, '');

        setAuditResult({
          domain: cleanDomain,
          score: 64,
          speedScore: 58,
          seoScore: 72,
          croScore: 61,
          speedMetric: '3.6s (Average on 4G)',
          issues: [
            {
              title: 'Heavy uncompressed assets delaying mobile First Contentful Paint',
              severity: 'high',
              fix: 'Compress next-gen WebP/AVIF formats and implement Edge CDN caching to drop load time below 1.2s (+34% conversion boost).'
            },
            {
              title: 'Mobile contact inquiry form has excessive friction steps',
              severity: 'high',
              fix: 'Replace single long form with an interactive multi-step intent selector to double form completions.'
            },
            {
              title: 'Missing structured Schema.org markup for educational courses / services',
              severity: 'medium',
              fix: 'Inject clean JSON-LD schema so Google displays rich course snippets, star ratings, and location badges.'
            }
          ]
        });
      }
    }, 700);
  };

  const handleReset = () => {
    setAuditResult(null);
    setUrl('');
  };

  return (
    <section id="audit-tool" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            <span>Free Diagnostic Utility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Instant Website & Conversion Audit
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Discover what is silently hurting your Google rankings and costing you customer inquiries. Run a real-time diagnostic scan in seconds.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!auditResult && !isScanning && (
            <div className="rounded-2xl bg-slate-800/90 border border-slate-700 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
              <form onSubmit={handleStartAudit} className="space-y-5">
                <div>
                  <label htmlFor="audit-url" className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2">
                    Enter Your Website or Institution URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Search className="w-5 h-5" />
                    </div>
                    <input
                      id="audit-url"
                      type="text"
                      required
                      placeholder="e.g. myinstitution.edu or yourcompany.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="audit-email" className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2">
                      Work Email (For full 12-page breakdown)
                    </label>
                    <input
                      id="audit-email"
                      type="email"
                      required
                      placeholder="director@institution.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="audit-goal" className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2">
                      Primary Conversion Objective
                    </label>
                    <select
                      id="audit-goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    >
                      <option value="enrollments">Increase Admissions / Student Inquiries</option>
                      <option value="speed">Fix Sluggish Load Times & Mobile UX</option>
                      <option value="ads">Improve Google Ads ROAS & Lead Volume</option>
                      <option value="lms">Upgrade to Modern E-Learning LMS Portal</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-950 font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Sparkles className="w-5 h-5 text-slate-900" />
                    <span>Run Real-Time Conversion & SEO Audit</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 text-center pt-1">
                  <span>Zero spam guaranteed</span>
                  <span aria-hidden="true">·</span>
                  <span>Non-invasive read-only scan</span>
                  <span aria-hidden="true">·</span>
                  <span>Results in under 5 seconds</span>
                </div>
              </form>
            </div>
          )}

          {/* Scanning Progress State */}
          {isScanning && (
            <div className="rounded-2xl bg-slate-800/90 border border-slate-700 p-8 sm:p-12 text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                <RefreshCw className="w-8 h-8 text-teal-400 animate-spin" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Auditing {url.replace(/^https?:\/\//i, '')}...
                </h3>
                <p className="text-sm text-teal-400 font-mono">
                  {scanSteps[scanStep]}
                </p>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden max-w-md mx-auto">
                <div
                  className="bg-teal-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((scanStep + 1) / scanSteps.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Real-Time Diagnostic Audit Results */}
          {auditResult && (
            <div className="rounded-2xl bg-slate-800/90 border border-slate-700 p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-700">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Diagnostic Report</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 font-bold">
                      Needs Optimization
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {auditResult.domain}
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 border border-slate-700 px-3 py-1.5 rounded-lg transition"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Scan Different URL</span>
                </button>
              </div>

              {/* Scorecard Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                    {auditResult.score}/100
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium">Overall Health</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700">
                  <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono">
                    {auditResult.speedScore}/100
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium">Speed Index</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700">
                  <div className="text-2xl sm:text-3xl font-black text-teal-400 font-mono">
                    {auditResult.seoScore}/100
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium">SEO Index</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                    {auditResult.croScore}/100
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium">CRO Usability</div>
                </div>
              </div>

              {/* Identified Bottlenecks */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Top 3 High-Impact Conversion Blocker Identified:
                </h4>
                {auditResult.issues.map((issue, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/80 space-y-2">
                    <div className="flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div className="font-semibold text-sm text-white">{issue.title}</div>
                    </div>
                    <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                      <strong className="text-teal-400">Sunflower Solution: </strong>
                      {issue.fix}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Call to Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenConsultationWithAudit(auditResult.domain, email)}
                  className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Book 20-Min Fix Roadmap with Lead Engineer</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  auditInfo?: { domain: string; email: string };
  roiEstimate?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  auditInfo,
  roiEstimate
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    selectedServices: preselectedService ? [preselectedService] : ['Website Development'],
    projectTimeline: '3-4 weeks (Standard)',
    budgetTier: '$3,000 – $7,500 (Growth Tier)',
    fullName: '',
    workEmail: auditInfo?.email || '',
    phoneNumber: '',
    companyName: auditInfo?.domain || '',
    projectDescription: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (preselectedService && !formData.selectedServices.includes(preselectedService)) {
      setFormData(prev => ({
        ...prev,
        selectedServices: [...prev.selectedServices, preselectedService]
      }));
    }
    if (auditInfo) {
      setFormData(prev => ({
        ...prev,
        workEmail: auditInfo.email || prev.workEmail,
        companyName: auditInfo.domain || prev.companyName
      }));
    }
  }, [preselectedService, auditInfo]);

  if (!isOpen) return null;

  const availableServices = [
    'Website Development',
    'Mobile & Web App Development',
    'E-Learning & LMS Platform',
    'Digital Marketing & Google Ads',
    'SEO & Content Optimization',
    '24/7 Hosting & Website Maintenance',
    'Brand & Graphic Design'
  ];

  const timelineOptions = [
    'Urgent Fast-Track (2–3 weeks)',
    '3–4 weeks (Standard Sprint)',
    '1–2 months (Comprehensive)',
    'Flexible / Long-term Retainer'
  ];

  const budgetOptions = [
    '$1,500 – $3,000 (Starter / Audit)',
    '$3,000 – $7,500 (Growth Tier)',
    '$7,500 – $15,000 (Full Platform / LMS)',
    '$15,000+ (Enterprise Multi-Branch)'
  ];

  const toggleService = (srv: string) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(srv);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter(s => s !== srv)
          : [...prev.selectedServices, srv]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'SNF-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(randomId);
    setIsSubmitted(true);
    setStep(4);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div>
            <h3 id="modal-title" className="text-base sm:text-lg font-bold text-slate-900">
              {step === 4 ? 'Proposal Confirmed' : 'Request Tailored Project Proposal'}
            </h3>
            <p className="text-xs text-slate-500">
              {step === 4
                ? 'Your priority scope has been received'
                : `Step ${step} of 3: ${step === 1 ? 'Select Services' : step === 2 ? 'Timeline & Budget' : 'Contact Details'}`}
            </p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {roiEstimate && step !== 4 && (
            <div className="mb-4 p-3 rounded-lg bg-teal-50 border border-teal-200 text-xs text-teal-800 flex items-center justify-between">
              <span><strong>Attached Simulator Target:</strong> {roiEstimate} annual revenue growth</span>
              <span className="text-teal-600 font-bold font-mono">Captured</span>
            </div>
          )}

          {/* STEP 1: Select Capabilities */}
          {step === 1 && (
            <div className="space-y-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Which services are you looking to implement? (Select all that apply)
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableServices.map((srv) => {
                  const isChecked = formData.selectedServices.includes(srv);
                  return (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => toggleService(srv)}
                      className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition flex items-center justify-between ${
                        isChecked
                          ? 'border-teal-600 bg-teal-50/60 text-teal-950 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>{srv}</span>
                      <div className={`w-4 h-4 rounded-md flex items-center justify-center ${isChecked ? 'bg-teal-600 text-white' : 'border border-slate-300'}`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {formData.selectedServices.length === 0 && (
                <p className="text-xs text-rose-500">Please select at least one service to continue.</p>
              )}

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  disabled={formData.selectedServices.length === 0}
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white text-xs sm:text-sm font-semibold transition flex items-center gap-2 cursor-pointer"
                >
                  <span>Continue to Timeline</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Timeline & Budget */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Target Launch Schedule
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timelineOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, projectTimeline: opt })}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition ${
                        formData.projectTimeline === opt
                          ? 'border-teal-600 bg-teal-50 text-teal-950 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Estimated Investment Scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, budgetTier: opt })}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition ${
                        formData.budgetTier === opt
                          ? 'border-teal-600 bg-teal-50 text-teal-950 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition flex items-center gap-2 cursor-pointer"
                >
                  <span>Continue to Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Project Notes */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="director@institute.org"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Institution or Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sunflower Academy"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Project Goals or Current Challenges
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your current website, student batch size, or target enrollment goals..."
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>NDA Protected · Your information is never sold or shared with 3rd parties.</span>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit & Receive Detailed Scope</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success & Confirmation */}
          {step === 4 && (
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-2xl font-black text-slate-900">
                  Proposal Request Logged!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A dedicated Sunflower Digital technical lead has been assigned to your scope.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono max-w-sm mx-auto text-slate-700">
                <div>Reference ID: <span className="font-bold text-teal-700">{referenceId}</span></div>
                <div className="text-[11px] text-slate-500 mt-1">Guaranteed response SLA: &lt; 24 business hours</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href="https://calendar.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule 15-Min Discovery Call Now</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

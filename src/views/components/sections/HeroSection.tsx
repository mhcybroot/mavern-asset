import React from "react";
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, Award, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "../../../models/company.model";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 pt-20 pb-28 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold mb-8 shadow-xs">
            <Award className="w-4 h-4 text-amber-600" />
            <span>{COMPANY_INFO.name} • {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.1] mb-6 font-['Playfair_Display',Georgia,serif]">
            We Protect, Preserve & Turn Your Assets Into <span className="italic font-normal text-amber-700 underline decoration-amber-500/30 decoration-wavy">Peak Market Value.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed font-normal">
            Texas S-Corp asset preservation, 24-48h inspection reports, HUD-standard securement, and turnkey unit turns for banks, servicers, and REIT investors.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-lg shadow-slate-950/15 flex items-center justify-center gap-2 transition hover:scale-[1.02] cursor-pointer text-xs uppercase tracking-wider"
            >
              <span>Submit Work Order Quote</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
            <a
              href="/services"
              className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-2xl border border-slate-300 flex items-center justify-center gap-2 transition cursor-pointer shadow-xs text-xs uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Explore 11 Services</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl text-left">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition">
              <div className="flex items-center gap-1.5 text-amber-600 text-xs font-bold uppercase mb-1">
                <Clock className="w-4 h-4" /> 24-48 Hr Fast Turn
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Inspections & Securing</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition">
              <div className="flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase mb-1">
                <ShieldCheck className="w-4 h-4" /> Texas S-Corp
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Licensed & Insured</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition">
              <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold uppercase mb-1">
                <CheckCircle2 className="w-4 h-4" /> REO / HUD Standard
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">100% Code Compliance</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition">
              <div className="flex items-center gap-1.5 text-purple-600 text-xs font-bold uppercase mb-1">
                <Award className="w-4 h-4" /> 11 Core Capabilities
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Full Lifecycle Support</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

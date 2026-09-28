import React from "react";
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, Award, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "../../../models/company.model";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="relative bg-[#090217] text-white pt-24 pb-36 overflow-hidden border-b border-purple-500/20">
      
      {/* Background Cosmic Sun & Mountain Landscape */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/cosmic/hero-sun-mountains.jpg"
          alt="Cosmic Horizon Sun & Mountains"
          className="w-full h-full object-cover object-bottom opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090217] via-[#090217]/55 to-[#090217]/80" />
      </div>

      {/* Floating Glowing Fuchsia Orbs from Generated Assets */}
      <div className="absolute top-28 right-[8%] sm:right-[15%] w-20 h-20 sm:w-28 sm:h-28 z-10 pointer-events-none animate-pulse duration-1000">
        <img
          src="/assets/cosmic/glowing-fuchsia-orb.jpg"
          alt="Glowing Magenta Orb"
          className="w-full h-full rounded-full object-cover mix-blend-screen drop-shadow-[0_0_25px_#d946ef]"
        />
      </div>

      <div className="absolute top-52 left-[5%] sm:left-[10%] w-12 h-12 sm:w-16 sm:h-16 z-10 pointer-events-none opacity-85">
        <img
          src="/assets/cosmic/glowing-fuchsia-orb.jpg"
          alt="Glowing Magenta Orb Small"
          className="w-full h-full rounded-full object-cover mix-blend-screen drop-shadow-[0_0_15px_#c026d3]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b0742]/90 border border-fuchsia-500/50 text-fuchsia-300 text-xs font-semibold mb-8 shadow-[0_0_25px_rgba(217,70,239,0.35)] backdrop-blur-md">
            <Award className="w-4 h-4 text-amber-300" />
            <span>{COMPANY_INFO.name} • {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-8 font-['Playfair_Display',Georgia,serif]">
            We Protect, Preserve & Turn Your Assets Into <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-amber-200 to-orange-400 drop-shadow-[0_0_35px_rgba(251,191,36,0.3)]">Peak Market Value.</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-100 max-w-2xl mb-10 leading-relaxed font-light drop-shadow-md">
            Texas S-Corp asset preservation, emergency 24-48h inspection reports, HUD-standard securement, and full unit turns for banks and institutional servicers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-2xl shadow-[0_0_35px_rgba(192,38,211,0.6)] flex items-center justify-center gap-2 transition hover:scale-[1.03] cursor-pointer"
            >
              <span>Submit Work Order Quote</span>
              <ArrowRight className="w-5 h-5 text-amber-300" />
            </button>
            <a
              href="/services"
              className="w-full sm:w-auto px-7 py-4 bg-[#180838]/90 hover:bg-[#250d4f] text-purple-100 font-semibold rounded-2xl border border-purple-400/40 backdrop-blur-md flex items-center justify-center gap-2 transition cursor-pointer shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
              <span>Explore 11 Services</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl text-left">
            <div className="bg-[#140632]/85 backdrop-blur-md p-4 rounded-2xl border border-purple-500/30 shadow-xl hover:border-purple-400 transition">
              <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase mb-1">
                <Clock className="w-4 h-4" /> 24-48 Hr Fast Turn
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white">Inspections & Securing</div>
            </div>
            <div className="bg-[#140632]/85 backdrop-blur-md p-4 rounded-2xl border border-purple-500/30 shadow-xl hover:border-purple-400 transition">
              <div className="flex items-center gap-1.5 text-fuchsia-400 text-xs font-bold uppercase mb-1">
                <ShieldCheck className="w-4 h-4" /> Texas S-Corp
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white">Licensed & Insured</div>
            </div>
            <div className="bg-[#140632]/85 backdrop-blur-md p-4 rounded-2xl border border-purple-500/30 shadow-xl hover:border-purple-400 transition">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase mb-1">
                <CheckCircle2 className="w-4 h-4" /> REO / HUD Standard
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white">100% Code Compliance</div>
            </div>
            <div className="bg-[#140632]/85 backdrop-blur-md p-4 rounded-2xl border border-purple-500/30 shadow-xl hover:border-purple-400 transition">
              <div className="flex items-center gap-1.5 text-violet-300 text-xs font-bold uppercase mb-1">
                <Award className="w-4 h-4" /> 11 Core Capabilities
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white">Full Lifecycle Support</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

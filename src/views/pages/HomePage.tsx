import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "../components/sections/HeroSection";
import { TrustStats } from "../components/sections/TrustStats";
import { BeforeAfterSlider } from "../components/sections/BeforeAfterSlider";
import { PortalPreview } from "../components/sections/PortalPreview";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { CoverageArea } from "../components/sections/CoverageArea";
import { ArrowRight, Sparkles } from "lucide-react";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <HeroSection onGetStarted={() => navigate("/quote")} />
      <TrustStats />

      {/* Quick Services Preview Banner */}
      <section className="relative py-16 bg-slate-900 text-white border-y border-slate-800 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-bold mb-4 border border-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            11 Core Preservation & Maintenance Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-display">
            Complete Turn-Key Asset Solutions
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto mb-6 font-normal">
            From emergency lockouts, roof tarping, and mold remediation to full unit turnovers and 24-48hr inspection reports.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider rounded-2xl shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <span>Explore All 11 Services</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
            <button
              onClick={() => navigate("/quote")}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-2xl border border-slate-700 transition cursor-pointer"
            >
              Instant Work Order Quote
            </button>
          </div>
        </div>
      </section>

      <BeforeAfterSlider />
      <PortalPreview />
      <WhyChooseUs />
      <CoverageArea />
    </div>
  );
};

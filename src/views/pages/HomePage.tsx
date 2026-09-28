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
    <div>
      <HeroSection onGetStarted={() => navigate("/quote")} />
      <TrustStats />

      {/* Quick Services Preview Banner with Twin Planets Asset */}
      <section className="relative py-16 bg-[#100428] text-white border-y border-purple-500/20 overflow-hidden">
        <img
          src="/assets/cosmic/twin-planets.jpg"
          alt="Twin Cosmic Planets"
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090217] via-[#090217]/80 to-[#090217]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-950/80 text-fuchsia-300 text-xs font-semibold mb-4 border border-fuchsia-500/40 shadow-[0_0_15px_rgba(217,70,239,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            11 Core Preservation & Maintenance Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-['Playfair_Display',Georgia,serif]">
            Complete Turn-Key Asset Solutions
          </h2>
          <p className="text-purple-200/90 text-xs sm:text-sm max-w-2xl mx-auto mb-6">
            From emergency lockouts, roof tarping, and mold remediation to full unit turnovers and 24-48hr inspection reports.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-lg transition flex items-center gap-2 cursor-pointer"
            >
              <span>Explore All 11 Services</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
            <button
              onClick={() => navigate("/quote")}
              className="px-6 py-3.5 bg-purple-950/80 hover:bg-purple-900 text-purple-200 text-xs font-bold uppercase tracking-wider rounded-2xl border border-purple-500/30 transition cursor-pointer"
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

import React from "react";
import { useNavigate } from "react-router-dom";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { TrustStats } from "../components/sections/TrustStats";
import { BeforeAfterSlider } from "../components/sections/BeforeAfterSlider";
import { ShieldCheck, ArrowRight, Award } from "lucide-react";
import { COMPANY_INFO } from "../../models/company.model";

export const WhyUsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#090217]">
      {/* Header Banner with Cosmic Valley Sunburst Asset */}
      <div className="relative text-white py-16 border-b border-purple-500/20 overflow-hidden bg-[#11052c]">
        <img
          src="/assets/cosmic/valley-sunburst.jpg"
          alt="Cosmic Valley Sunburst"
          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090217] via-[#090217]/70 to-[#090217]/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-semibold mb-4 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Institutional Credibility & Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-['Playfair_Display',Georgia,serif]">
            Why Asset Managers Rely on MAVERN
          </h1>
          <p className="text-purple-200/90 text-sm sm:text-base leading-relaxed">
            Registered as a Texas {COMPANY_INFO.legalStructure}, MAVERN ASSET MANAGEMENT LLC brings operational transparency, rigorous photo documentation, and fast field dispatch.
          </p>
        </div>
      </div>

      <TrustStats />
      <WhyChooseUs />
      <BeforeAfterSlider />

      <section className="py-16 bg-[#0c0423] border-t border-purple-500/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#140632] p-8 sm:p-10 rounded-3xl border border-purple-500/25 shadow-2xl">
          <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2 font-['Playfair_Display',Georgia,serif]">Ready to onboard a reliable vendor?</h3>
          <p className="text-purple-200/80 text-sm mb-6 max-w-xl mx-auto">
            Contact our operations team today or submit an immediate work order estimate for your single-family, multi-family, or REO asset.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate("/quote")}
              className="px-6 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-lg transition flex items-center gap-2 cursor-pointer"
            >
              <span>Submit Work Order</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3.5 bg-purple-950/80 hover:bg-purple-900 text-purple-200 text-xs font-bold uppercase tracking-wider rounded-2xl border border-purple-500/30 transition cursor-pointer"
            >
              Contact Operations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

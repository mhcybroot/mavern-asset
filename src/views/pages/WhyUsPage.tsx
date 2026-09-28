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
    <div className="bg-white">
      <div className="relative text-slate-900 py-16 border-b border-slate-200 bg-slate-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold mb-4 shadow-xs">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Institutional Credibility & Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4 font-display">
            Why Asset Managers Rely on MAVERN
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Registered as a Texas {COMPANY_INFO.legalStructure}, MAVERN ASSET MANAGEMENT LLC brings operational transparency, rigorous photo documentation, and fast field dispatch.
          </p>
        </div>
      </div>

      <TrustStats />
      <WhyChooseUs />
      <BeforeAfterSlider />

      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">Ready to onboard a reliable vendor?</h3>
          <p className="text-slate-600 text-sm mb-6 max-w-xl mx-auto font-normal">
            Contact our operations team today or submit an immediate work order estimate for your single-family, multi-family, or REO asset.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate("/quote")}
              className="px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <span>Submit Work Order</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-2xl border border-slate-300 transition cursor-pointer"
            >
              Contact Operations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

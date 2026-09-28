import React from "react";
import { QuoteEstimator } from "../components/sections/QuoteEstimator";
import { Zap, Clock, ShieldCheck } from "lucide-react";

export const QuotePage: React.FC = () => {
  return (
    <div className="bg-[#090217] py-10">
      {/* Top Banner with Aurora Sunrise Asset */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="relative text-white p-8 sm:p-10 rounded-3xl border border-purple-500/25 shadow-2xl overflow-hidden bg-[#13072e]">
          <img
            src="/assets/cosmic/aurora-sunrise.jpg"
            alt="Cosmic Aurora Sunrise"
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0322] via-[#0d0322]/80 to-transparent" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold text-fuchsia-300 uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Instant Dispatch Generator</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 font-['Playfair_Display',Georgia,serif]">
              Request an Estimate or Submit a Work Order
            </h1>
            <p className="text-purple-200/90 text-xs sm:text-sm max-w-2xl leading-relaxed mb-4">
              Select the required services from our 11 asset management categories. Once submitted, a pre-filled mailto ticket will open for rapid dispatch approval.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-purple-200">
              <span className="flex items-center gap-1.5 bg-purple-950/80 px-3.5 py-1.5 rounded-xl border border-purple-500/30">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> Same Day / 24-48h Delivery
              </span>
              <span className="flex items-center gap-1.5 bg-purple-950/80 px-3.5 py-1.5 rounded-xl border border-purple-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Pre-Filled Mailto Integration
              </span>
            </div>
          </div>
        </div>
      </div>

      <QuoteEstimator />
    </div>
  );
};

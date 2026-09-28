import React from "react";
import { QuoteEstimator } from "../components/sections/QuoteEstimator";
import { Zap, Clock, ShieldCheck } from "lucide-react";

export const QuotePage: React.FC = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="relative text-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm bg-slate-50">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Instant Dispatch Generator</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mb-3 font-display">
              Request an Estimate or Submit a Work Order
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed mb-4 font-normal">
              Select the required services from our 11 asset management categories. Once submitted, a pre-filled mailto ticket will open for rapid dispatch approval.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-700">
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 font-bold shadow-xs">
                <Clock className="w-3.5 h-3.5 text-amber-600" /> Same Day / 24-48h Delivery
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 font-bold shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Pre-Filled Mailto Integration
              </span>
            </div>
          </div>
        </div>
      </div>

      <QuoteEstimator />
    </div>
  );
};

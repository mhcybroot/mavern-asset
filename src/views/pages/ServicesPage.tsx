import React from "react";
import { useNavigate } from "react-router-dom";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { ShieldCheck, Clock, CheckCircle } from "lucide-react";

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="relative text-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm bg-slate-50">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-slate-800 border border-slate-200 mb-4 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              S-Corp Certified Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4 font-['Playfair_Display',Georgia,serif]">
              Property Preservation & Asset Management Services
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Our 11 specialized service lines protect your assets from unauthorized entry, code violations, freeze damages, and rapid tenant turnover delays.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-700">
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 font-bold shadow-xs">
                <Clock className="w-3.5 h-3.5 text-amber-600" /> 24-48 Hour SLAs
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 font-bold shadow-xs">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> High-Resolution Photo Logs
              </span>
            </div>
          </div>
        </div>
      </div>

      <ServicesGrid onInstantQuote={() => navigate("/quote")} />
    </div>
  );
};

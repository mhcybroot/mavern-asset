import React from "react";
import { useNavigate } from "react-router-dom";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { ShieldCheck, Clock, CheckCircle } from "lucide-react";

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#090217] py-10">
      {/* Page Header Banner with Mountain Ring Planet Asset */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="relative text-white rounded-3xl p-8 sm:p-12 border border-purple-500/25 shadow-2xl overflow-hidden bg-[#13072e]">
          <img
            src="/assets/cosmic/mountain-ring-planet.jpg"
            alt="Mountain Ring Planet"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0322] via-[#0d0322]/85 to-transparent" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-500/40 mb-4 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              S-Corp Certified Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Playfair_Display',Georgia,serif]">
              Property Preservation & Asset Management Services
            </h1>
            <p className="text-purple-200/90 text-sm sm:text-base leading-relaxed mb-6">
              Our 11 specialized service lines protect your assets from unauthorized entry, code violations, freeze damages, and rapid tenant turnover delays.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-purple-200">
              <span className="flex items-center gap-1.5 bg-purple-950/80 px-3.5 py-1.5 rounded-xl border border-purple-500/30">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 24-48 Hour SLAs
              </span>
              <span className="flex items-center gap-1.5 bg-purple-950/80 px-3.5 py-1.5 rounded-xl border border-purple-500/30">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> High-Resolution Photo Logs
              </span>
            </div>
          </div>
        </div>
      </div>

      <ServicesGrid onAddToQuote={() => navigate("/quote")} />
    </div>
  );
};

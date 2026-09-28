import React from "react";
import { useNavigate } from "react-router-dom";
import { CoverageArea } from "../components/sections/CoverageArea";
import { MapPin, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../../models/company.model";

export const CoveragePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#090217] text-white">
      <div className="py-14 border-b border-purple-500/15 bg-[#100529]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 text-fuchsia-300 text-xs font-semibold mb-4 border border-fuchsia-500/30">
            <MapPin className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>Arlington, TX Base • North Texas Corridor</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Playfair_Display',Georgia,serif]">
            Operational Coverage & Regional Hubs
          </h1>
          <p className="text-purple-200/90 text-sm sm:text-base leading-relaxed">
            Headquartered at {COMPANY_INFO.address.fullAddress}, we provide rapid response field coverage across Arlington, Fort Worth, Dallas, and surrounding counties.
          </p>
        </div>
      </div>

      <CoverageArea />

      <section className="py-16 bg-[#070114] border-t border-purple-500/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#140632] rounded-3xl p-8 sm:p-10 border border-purple-500/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" /> Need Coverage in Your Area?
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 font-['Playfair_Display',Georgia,serif]">
                Emergency Dispatch Across Texas
              </h3>
              <p className="text-purple-300/70 text-xs sm:text-sm">
                Same-day re-keying, emergency board-ups, and inspection crews ready to roll.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9]/g, "")}`}
                className="px-5 py-3 bg-purple-950/80 hover:bg-purple-900 text-white text-xs font-bold uppercase tracking-wider rounded-2xl border border-purple-500/30 flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-fuchsia-400" />
                <span>Call Hotline</span>
              </a>
              <button
                onClick={() => navigate("/quote")}
                className="px-5 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-lg flex items-center gap-2 transition cursor-pointer"
              >
                <span>Dispatch Order</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

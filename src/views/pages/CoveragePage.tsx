import React from "react";
import { useNavigate } from "react-router-dom";
import { CoverageArea } from "../components/sections/CoverageArea";
import { MapPin, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../../models/company.model";

export const CoveragePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900">
      <div className="py-14 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-slate-800 text-xs font-bold mb-4 border border-slate-200 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Arlington, TX Base • North Texas Corridor</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4 font-display">
            Operational Coverage & Regional Hubs
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Headquartered at {COMPANY_INFO.address.fullAddress}, we provide rapid response field coverage across Arlington, Fort Worth, Dallas, and surrounding counties.
          </p>
        </div>
      </div>

      <CoverageArea />

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" /> Need Coverage in Your Area?
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-1 font-display">
                Emergency Dispatch Across Texas
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal">
                Same-day re-keying, emergency board-ups, and inspection crews ready to roll.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9]/g, "")}`}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-2xl border border-slate-300 flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call Hotline</span>
              </a>
              <button
                onClick={() => navigate("/quote")}
                className="px-5 py-3 bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-md flex items-center gap-2 transition cursor-pointer"
              >
                <span>Dispatch Order</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

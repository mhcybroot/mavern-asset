import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, PhoneCall, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "../../../models/company.model";

export const PreFooterCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-slate-50 border-t border-slate-200 py-16 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-4 border border-amber-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>North Texas Active Dispatch Network</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3 font-display tracking-tight">
              Ready to Protect & Monetize Your Property Portfolio?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Same-day securing, REO turns, winterization, and 24-48hr condition reports with photo logs.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 text-xs text-slate-700">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Texas S-Corp</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-600" /> 24-48h Guaranteed SLA</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-600" /> HUD Compliant</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
            <button
              onClick={() => navigate("/quote")}
              className="px-8 py-4 bg-slate-950 hover:bg-slate-850 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Work Order</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9]/g, "")}`}
              className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-200 shadow-2xs flex items-center justify-center gap-2 transition"
            >
              <PhoneCall className="w-4 h-4 text-amber-600" />
              <span>Call Operations</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

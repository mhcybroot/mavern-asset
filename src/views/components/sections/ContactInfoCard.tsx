import React from "react";
import { Mail, Phone, MapPin, Clock, ShieldCheck, UserCheck } from "lucide-react";
import { COMPANY_INFO } from "../../../models/company.model";

export const ContactInfoCard: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-6 border border-amber-200/60">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          {COMPANY_INFO.legalStructure}
        </div>
        <h3 className="text-2xl font-black mb-3 text-slate-950 font-display tracking-tight">{COMPANY_INFO.name}</h3>
        <p className="text-slate-600 text-xs leading-relaxed mb-6 font-normal">
          Ready to handle single asset dispatches or large recurring REO portfolios with strict SLA adherence across Texas.
        </p>

        {COMPANY_INFO.leadership && (
          <div className="mb-6 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
              <UserCheck className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 font-display">{COMPANY_INFO.leadership.ownerName}</div>
              <div className="text-[11px] text-slate-500">{COMPANY_INFO.leadership.title}</div>
            </div>
          </div>
        )}

        <div className="space-y-4 text-xs">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="text-slate-700 leading-snug">{COMPANY_INFO.address.fullAddress}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-amber-600 shrink-0" />
            <a href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9]/g, "")}`} className="text-slate-950 hover:text-amber-700 font-bold transition">
              {COMPANY_INFO.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-amber-600 shrink-0" />
            <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-700 hover:text-slate-950 transition">
              {COMPANY_INFO.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="text-slate-700">{COMPANY_INFO.contact.dispatchHours}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium">
          ⭐ <strong>Emergency Response:</strong> Board-ups & lock changes within Arlington & North TX dispatched 24/7.
        </div>
      </div>
    </div>
  );
};

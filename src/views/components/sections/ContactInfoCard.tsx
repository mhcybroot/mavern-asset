import React from "react";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../../../models/company.model";

export const ContactInfoCard: React.FC = () => {
  return (
    <div className="bg-[#140632]/90 text-white rounded-3xl p-8 border border-purple-500/25 flex flex-col justify-between h-full shadow-2xl">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-950/80 text-fuchsia-300 text-xs font-semibold mb-6 border border-fuchsia-500/30">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          {COMPANY_INFO.legalStructure}
        </div>
        <h3 className="text-2xl font-black mb-3 text-white font-['Playfair_Display',Georgia,serif]">{COMPANY_INFO.name}</h3>
        <p className="text-purple-200/80 text-xs leading-relaxed mb-8">
          Ready to handle single asset dispatches or large recurring REO portfolios with strict SLA adherence.
        </p>

        <div className="space-y-4 text-xs">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
            <span className="text-purple-200 leading-snug">{COMPANY_INFO.address.fullAddress}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-fuchsia-400 shrink-0" />
            <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-white hover:text-fuchsia-300 font-bold transition">
              {COMPANY_INFO.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-fuchsia-400 shrink-0" />
            <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-purple-200 hover:text-white transition">
              {COMPANY_INFO.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-purple-200">{COMPANY_INFO.contact.dispatchHours}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-purple-500/20">
        <div className="p-3.5 rounded-2xl bg-purple-950/80 border border-fuchsia-500/30 text-[11px] text-fuchsia-200">
          ⭐ <strong>Emergency Response:</strong> Board-ups & lock changes within Arlington & North TX dispatched 24/7.
        </div>
      </div>
    </div>
  );
};

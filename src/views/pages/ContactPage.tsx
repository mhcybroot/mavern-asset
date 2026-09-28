import React from "react";
import { ContactSection } from "../components/sections/ContactSection";
import { PhoneCall, Mail, Clock } from "lucide-react";
import { COMPANY_INFO } from "../../models/company.model";

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="relative text-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm bg-slate-50">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-slate-800 border border-slate-200 mb-4 shadow-xs">
              <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
              Direct Field Operations Desk
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4 font-['Playfair_Display',Georgia,serif]">
              Contact & Operations Dispatch
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed mb-6 font-normal">
              Get in touch with MAVERN ASSET MANAGEMENT LLC for master service agreements, recurring portfolio preservation, or urgent 24/7 securing work orders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Phone:</strong> {COMPANY_INFO.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>Email:</strong> {COMPANY_INFO.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span><strong>Hours:</strong> {COMPANY_INFO.contact.dispatchHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

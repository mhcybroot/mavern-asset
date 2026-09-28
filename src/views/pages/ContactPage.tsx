import React from "react";
import { ContactSection } from "../components/sections/ContactSection";
import { PhoneCall, Mail, Clock } from "lucide-react";
import { COMPANY_INFO } from "../../models/company.model";

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#090217] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="relative text-white rounded-3xl p-8 sm:p-12 border border-purple-500/25 shadow-2xl overflow-hidden bg-[#13072e]">
          <img
            src="/assets/cosmic/solar-flare.jpg"
            alt="Solar Flare Cosmic"
            className="absolute right-0 top-0 w-80 h-80 object-cover opacity-25 mix-blend-screen -translate-y-12 translate-x-12 pointer-events-none"
          />
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-500/30 mb-4">
              <PhoneCall className="w-3.5 h-3.5 text-fuchsia-400" />
              Direct Field Operations Desk
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Playfair_Display',Georgia,serif]">
              Contact & Operations Dispatch
            </h1>
            <p className="text-purple-200/90 text-sm sm:text-base max-w-2xl leading-relaxed mb-6">
              Get in touch with MAVERN ASSET MANAGEMENT LLC for master service agreements, recurring portfolio preservation, or urgent 24/7 securing work orders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-4 border-t border-purple-500/20">
              <div className="flex items-center gap-2 text-purple-200">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Phone:</strong> {COMPANY_INFO.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <Mail className="w-4 h-4 text-fuchsia-400 shrink-0" />
                <span><strong>Email:</strong> {COMPANY_INFO.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
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

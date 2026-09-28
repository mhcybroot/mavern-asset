import React from "react";
import { Link } from "react-router-dom";
import { Building2, MapPin, Phone, Mail, Clock, ExternalLink, Sparkles, FileText } from "lucide-react";
import { COMPANY_INFO } from "../../../models/company.model";
import { NAV_LINKS } from "../../../models/nav.model";
import { PreFooterCTA } from "./PreFooterCTA";
import { FooterTrustStrip } from "./FooterTrustStrip";
import { FooterLiveStatus } from "./FooterLiveStatus";

export const Footer: React.FC = () => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.zip}`
  )}`;

  return (
    <div className="flex flex-col">
      <PreFooterCTA />
      
      <footer className="bg-white text-slate-600 border-t border-slate-200 pt-16 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FooterTrustStrip />
          <FooterLiveStatus />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-white shadow-sm">
                  <Building2 className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-slate-950 font-extrabold text-xl tracking-tight font-display">
                  MAVERN <span className="text-amber-600 font-normal italic">ASSET</span>
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 mb-5 font-normal">
                Texas Premier Asset Management & Property Preservation. High-touch default servicing, turnkey unit turns, and real-time photo-documented preservation across North Texas.
              </p>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent("Vendor Packet & Insurance Request - MAVERN ASSET")}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 transition"
              >
                <FileText className="w-3.5 h-3.5 text-amber-600" />
                <span>Request Vendor W-9 & COI</span>
              </a>
            </div>

            <div>
              <h3 className="text-slate-950 font-bold text-xs tracking-wider uppercase mb-4 text-amber-700 flex items-center gap-1.5 font-display">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Navigation
              </h3>
              <ul className="space-y-2.5 text-xs">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-slate-400" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-slate-950 font-bold text-xs tracking-wider uppercase mb-4 text-amber-700 font-display">
                Corporate Headquarters
              </h3>
              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <a href={mapUrl} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-950 leading-snug transition flex items-center gap-1">
                    <span>
                      {COMPANY_INFO.address.suite}, {COMPANY_INFO.address.street}<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-400 shrink-0 ml-1" />
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-slate-600">{COMPANY_INFO.contact.dispatchHours}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-slate-950 font-bold text-xs tracking-wider uppercase mb-4 text-amber-700 font-display">
                24/7 Servicer Desk
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                  <a href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9]/g, "")}`} className="text-slate-950 hover:text-amber-700 font-bold transition">
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-600 hover:text-slate-950 transition">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
                <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium">
                  ⚡ Priority dispatch channel active for urgent freeze mitigation & code violation stays.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. | {COMPANY_INFO.legalStructure}
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <span className="hover:text-slate-800 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-800 cursor-pointer">Terms of Service</span>
              <span className="hover:text-slate-800 cursor-pointer">GSE / HUD Guidelines</span>
              <span className="text-amber-700 font-medium">Equal Housing Opportunity Partner</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

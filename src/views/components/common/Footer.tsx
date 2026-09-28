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
      
      <footer className="text-purple-300/75 border-t border-purple-500/20 pt-16 pb-12 relative overflow-hidden">
        {/* Background Cosmic Asset with High Clarity */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <img
            src="/assets/cosmic/neon-horizon-mountains.jpg"
            alt="Neon Horizon"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04010a]/95 via-[#04010a]/60 to-[#04010a]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FooterTrustStrip />
          <FooterLiveStatus />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-purple-500/15">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-white font-extrabold text-xl tracking-tight font-['Playfair_Display',Georgia,serif]">
                  MAVERN <span className="text-fuchsia-400 font-normal italic">ASSET</span>
                </span>
              </div>
              <p className="text-xs leading-relaxed text-purple-300/80 mb-5">
                Texas Premier Asset Management & Property Preservation. High-touch default servicing, turnkey unit turns, and real-time photo-documented preservation across North Texas.
              </p>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent("Vendor Packet & Insurance Request - MAVERN ASSET")}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/30 text-xs text-fuchsia-300 transition"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Request Vendor W-9 & COI</span>
              </a>
            </div>

            <div>
              <h3 className="text-white font-bold text-xs tracking-wider uppercase mb-4 text-fuchsia-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> Navigation
              </h3>
              <ul className="space-y-2.5 text-xs">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-purple-500" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-xs tracking-wider uppercase mb-4 text-fuchsia-300">
                Corporate Headquarters
              </h3>
              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                  <a href={mapUrl} target="_blank" rel="noreferrer" className="text-purple-200 hover:text-white leading-snug transition flex items-center gap-1">
                    <span>
                      {COMPANY_INFO.address.suite}, {COMPANY_INFO.address.street}<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                    </span>
                    <ExternalLink className="w-3 h-3 text-purple-400 shrink-0 ml-1" />
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{COMPANY_INFO.contact.dispatchHours}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-xs tracking-wider uppercase mb-4 text-fuchsia-300">
                24/7 Servicer Desk
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-fuchsia-400 shrink-0" />
                  <a href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9]/g, "")}`} className="text-white hover:text-fuchsia-300 font-bold transition">
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-fuchsia-400 shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-purple-200 hover:text-white transition">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
                <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-purple-950/80 to-[#1b063d]/80 border border-purple-500/30 text-[11px] text-amber-300">
                  ⚡ Priority dispatch channel active for urgent freeze mitigation & code violation stays.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-purple-400/60">
            <div>
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. | {COMPANY_INFO.legalStructure}
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <span className="hover:text-purple-200 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-purple-200 cursor-pointer">Terms of Service</span>
              <span className="hover:text-purple-200 cursor-pointer">GSE / HUD Guidelines</span>
              <span className="text-amber-400/80">Equal Housing Opportunity Partner</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

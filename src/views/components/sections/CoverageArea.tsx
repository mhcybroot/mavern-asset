import React from "react";
import { MapPin, Navigation, Phone, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { COMPANY_INFO } from "../../../models/company.model";

export const CoverageArea: React.FC = () => {
  const regions = [
    { name: "Arlington & Tarrant County", status: "Primary HQ Hub - 24/7 Dispatch" },
    { name: "Dallas & Collin County", status: "Active Field Teams Daily" },
    { name: "Fort Worth & Denton County", status: "Same-Day Securing & Lockouts" },
    { name: "Expanded North Texas Corridor", status: "Full Portfolio Coverage" },
  ];

  return (
    <section id="coverage" className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Light Watermark Blend Asset */}
      <div className="absolute right-[-40px] bottom-[-40px] w-[500px] h-[500px] pointer-events-none opacity-12 z-0">
        <img
          src="/assets/cosmic/neon-wireframe-globe.jpg"
          alt=""
          className="w-full h-full object-cover rounded-full mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <SectionHeader
              badge="Regional Hub"
              title="Headquartered in Arlington, Texas"
              subtitle="Centrally positioned in North Texas to deploy immediate field support, securement crews, and inspectors across key residential and commercial assets."
              align="left"
            />

            <div className="bg-slate-50/90 rounded-3xl p-6 border border-slate-200 mb-6 shadow-xs backdrop-blur-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 rounded-2xl text-white shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-base mb-1 font-display">HQ Operating Address</h4>
                  <p className="text-slate-600 text-sm leading-snug font-normal">
                    {COMPANY_INFO.name}<br />
                    {COMPANY_INFO.address.suite}, {COMPANY_INFO.address.street}<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-950 hover:bg-slate-800 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Dispatch Line</span>
              </a>
              <span className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-emerald-600" />
                Fast Field Units On-Call
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-50/90 rounded-3xl p-8 border border-slate-200 shadow-sm backdrop-blur-xs">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2 font-display">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                Active Preservation Zones
              </h3>

              <div className="space-y-3.5">
                {regions.map((region, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-xs"
                  >
                    <div>
                      <div className="text-slate-900 font-bold text-sm">{region.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5 font-medium">{region.status}</div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
                ⭐ <strong>Institutional Servicers:</strong> Custom statewide or multi-market dispatch SLAs available upon request.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

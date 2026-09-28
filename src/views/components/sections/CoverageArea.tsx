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
    <section id="coverage" className="py-20 text-white border-b border-purple-500/15 relative overflow-hidden">
      
      {/* Background Floating Neon Wireframe Globe Asset with High Clarity */}
      <div className="absolute right-[-20px] bottom-[-20px] w-[450px] h-[450px] pointer-events-none opacity-60 z-0">
        <img
          src="/assets/cosmic/neon-wireframe-globe.jpg"
          alt="Neon Wireframe Grid"
          className="w-full h-full object-cover rounded-full drop-shadow-[0_0_50px_rgba(217,70,239,0.35)]"
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

            <div className="bg-[#140632]/90 rounded-3xl p-6 border border-purple-500/20 mb-6 shadow-xl backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-2xl text-white shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1 font-['Playfair_Display',Georgia,serif]">HQ Operating Address</h4>
                  <p className="text-purple-200/90 text-sm leading-snug">
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
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition shadow-lg shadow-purple-600/30"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Dispatch Line</span>
              </a>
              <span className="text-xs text-purple-300 font-medium flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-emerald-400" />
                Fast Field Units On-Call
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#140632]/85 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-md shadow-2xl">
              <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2 font-['Playfair_Display',Georgia,serif]">
                <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-400 animate-ping" />
                Active Preservation Zones
              </h3>

              <div className="space-y-3.5">
                {regions.map((region, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#0e0427]/80 border border-purple-500/20 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-white font-bold text-sm">{region.name}</div>
                      <div className="text-xs text-purple-300/70 mt-0.5">{region.status}</div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-purple-950/60 border border-fuchsia-500/30 text-xs text-fuchsia-200">
                ⭐ <strong>Institutional Servicers:</strong> Custom statewide or multi-market dispatch SLAs available upon request.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

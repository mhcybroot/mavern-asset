import React from "react";
import { CheckCircle2, ShieldCheck, MapPin, FileCheck2, Camera, Download } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";

export const PortalPreview: React.FC = () => {
  return (
    <section className="py-20 text-white border-b border-purple-500/15 relative overflow-hidden">
      
      {/* Background Constellation Tech Network Asset with High Clarity */}
      <div className="absolute inset-0 pointer-events-none opacity-65 z-0">
        <img
          src="/assets/cosmic/constellation-tech-network.jpg"
          alt="Constellation Asset Network"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0423]/90 via-[#0c0423]/50 to-[#0c0423]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Enterprise Technology & Reporting"
          title="Real-Time Photo Verification & 24-Hour Digital PCRs"
          subtitle="Every work order is tracked with high-definition GPS-stamped photo logs, automated code violation checks, and instant PDF report export for loan servicers."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-[#140632]/85 border border-purple-500/20 hover:border-fuchsia-500/40 transition flex items-start gap-4 shadow-lg backdrop-blur-md">
              <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600 to-purple-800 text-white shrink-0 shadow-md">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 font-['Playfair_Display',Georgia,serif]">GPS-Timestamped Photo Logs</h4>
                <p className="text-purple-200/80 text-xs leading-relaxed">
                  Before, during, and after photos stamped with precise geocoordinates, ensuring 100% Fannie Mae & HUD audit compliance.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#140632]/85 border border-purple-500/20 hover:border-fuchsia-500/40 transition flex items-start gap-4 shadow-lg backdrop-blur-md">
              <div className="p-3 rounded-xl bg-gradient-to-br from-fuchsia-600 to-pink-800 text-white shrink-0 shadow-md">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 font-['Playfair_Display',Georgia,serif]">24-48h Condition Reports (PCR)</h4>
                <p className="text-purple-200/80 text-xs leading-relaxed">
                  Detailed inspection documentation including roof integrity, foundation condition, plumbing winterization checks, and repair estimates.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#140632]/85 border border-purple-500/20 hover:border-fuchsia-500/40 transition flex items-start gap-4 shadow-lg backdrop-blur-md">
              <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-700 text-white shrink-0 shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 font-['Playfair_Display',Georgia,serif]">Zero Code Violation Guarantee</h4>
                <p className="text-purple-200/80 text-xs leading-relaxed">
                  Proactive recurring maintenance schedules prevent municipal tall-grass fines, vacant building registration penalties, and HOA citations.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-purple-500/30 bg-[#0e0427] shadow-[0_0_50px_rgba(124,58,237,0.25)] relative">
              <div className="bg-[#180838] px-4 py-3 border-b border-purple-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-mono text-purple-300 ml-2">MAVERN Portal • Asset #TX-76013-88</span>
                </div>
                <span className="text-[10px] text-emerald-300 font-bold bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  LIVE DISPATCHED
                </span>
              </div>

              <div className="p-5 space-y-4 text-xs">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#130630] border border-purple-500/20">
                  <div className="flex items-center gap-2 text-purple-100">
                    <MapPin className="w-4 h-4 text-fuchsia-400" />
                    <span className="font-semibold">1000 W Mitchell St, Arlington TX</span>
                  </div>
                  <span className="text-[11px] text-purple-300/70">Lockbox #8492</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#130630]/90 border border-purple-500/20 text-purple-200">
                    <div className="text-[10px] text-purple-400 uppercase">PCR Status</div>
                    <div className="font-bold text-emerald-400 mt-0.5 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Approved (100%)
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#130630]/90 border border-purple-500/20 text-purple-200">
                    <div className="text-[10px] text-purple-400 uppercase">Photo Count</div>
                    <div className="font-bold text-white mt-0.5">38 High-Res Photos</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-950/80 to-fuchsia-950/80 border border-fuchsia-500/30 flex items-center justify-between text-fuchsia-200 cursor-pointer hover:border-fuchsia-400 transition">
                  <span className="font-semibold">Download Full Servicer PDF Package</span>
                  <Download className="w-4 h-4 text-fuchsia-400" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

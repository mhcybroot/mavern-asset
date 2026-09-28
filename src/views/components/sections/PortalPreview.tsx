import React from "react";
import { CheckCircle2, ShieldCheck, MapPin, FileCheck2, Camera, Download } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";

export const PortalPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Enterprise Technology & Reporting"
          title="Real-Time Photo Verification & 24-Hour Digital PCRs"
          subtitle="Every work order is tracked with high-definition GPS-stamped photo logs, automated code violation checks, and instant PDF report export for loan servicers."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition flex items-start gap-4 shadow-xs">
              <div className="p-3 rounded-xl bg-slate-900 text-white shrink-0 shadow-sm">
                <Camera className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-sm mb-1 font-display">GPS-Timestamped Photo Logs</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Before, during, and after photos stamped with precise geocoordinates, ensuring 100% Fannie Mae & HUD audit compliance.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition flex items-start gap-4 shadow-xs">
              <div className="p-3 rounded-xl bg-slate-900 text-white shrink-0 shadow-sm">
                <FileCheck2 className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-sm mb-1 font-display">24-48h Condition Reports (PCR)</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Detailed inspection documentation including roof integrity, foundation condition, plumbing winterization checks, and repair estimates.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition flex items-start gap-4 shadow-xs">
              <div className="p-3 rounded-xl bg-slate-900 text-white shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-sm mb-1 font-display">Zero Code Violation Guarantee</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Proactive recurring maintenance schedules prevent municipal tall-grass fines, vacant building registration penalties, and HOA citations.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-mono text-slate-300 ml-2">MAVERN Portal • Asset #TX-76013-88</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  LIVE DISPATCHED
                </span>
              </div>

              <div className="p-5 space-y-4 text-xs bg-slate-50">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-800">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span className="font-semibold">1000 W Mitchell St, Arlington TX</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">Lockbox #8492</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">PCR Status</div>
                    <div className="font-bold text-emerald-600 mt-0.5 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Approved (100%)
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Photo Count</div>
                    <div className="font-bold text-slate-900 mt-0.5">38 High-Res Photos</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-between cursor-pointer transition shadow-sm">
                  <span className="font-bold text-xs">Download Full Servicer PDF Package</span>
                  <Download className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

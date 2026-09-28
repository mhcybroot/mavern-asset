import React from "react";
import { CheckCircle2, Shield, Zap, FileText } from "lucide-react";

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon: Zap,
      value: "24-48h",
      label: "Turnaround SLA",
      desc: "Emergency dispatch for condition reports & lock changes",
      color: "text-amber-400 bg-amber-950/60 border-amber-500/30",
    },
    {
      icon: Shield,
      value: "100%",
      label: "HOA & Code Compliant",
      desc: "Zero-tolerance for municipal fines or delays",
      color: "text-fuchsia-400 bg-fuchsia-950/60 border-fuchsia-500/30",
    },
    {
      icon: FileText,
      value: "Photo Logs",
      label: "GPS Stamped PCRs",
      desc: "High-resolution before & after audit records",
      color: "text-violet-400 bg-violet-950/60 border-violet-500/30",
    },
    {
      icon: CheckCircle2,
      value: "Full Scope",
      label: "11 Core Capabilities",
      desc: "Single-vendor turnkey solution across North Texas",
      color: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
    },
  ];

  return (
    <section className="bg-[#0b031f] py-12 border-b border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#140632]/80 border border-purple-500/20 hover:border-fuchsia-500/40 hover:bg-[#1a0842] transition-all duration-300 shadow-md"
              >
                <div className={`p-3 rounded-xl border ${stat.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white tracking-tight font-['Playfair_Display',Georgia,serif]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-purple-200 uppercase tracking-wide mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-purple-300/70 mt-1 leading-snug">
                    {stat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

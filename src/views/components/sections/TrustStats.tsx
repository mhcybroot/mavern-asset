import React from "react";
import { CheckCircle2, Shield, Zap, FileText } from "lucide-react";

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon: Zap,
      value: "24-48h",
      label: "Turnaround SLA",
      desc: "Emergency dispatch for condition reports & lock changes",
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      icon: Shield,
      value: "100%",
      label: "HOA & Code Compliant",
      desc: "Zero-tolerance for municipal fines or delays",
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      icon: FileText,
      value: "Photo Logs",
      label: "GPS Stamped PCRs",
      desc: "High-resolution before & after audit records",
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
    {
      icon: CheckCircle2,
      value: "Full Scope",
      label: "11 Core Capabilities",
      desc: "Single-vendor turnkey solution across North Texas",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
  ];

  return (
    <section className="bg-slate-50 py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div className={`p-3 rounded-xl border ${stat.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-950 tracking-tight font-['Playfair_Display',Georgia,serif]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 leading-snug font-medium">
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

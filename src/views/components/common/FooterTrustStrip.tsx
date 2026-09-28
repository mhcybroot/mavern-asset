import React from "react";
import { ShieldCheck, Award, FileCheck2, Scale, Lock } from "lucide-react";

export const FooterTrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "$2,000,000 GL Insurance",
      sub: "Comprehensive Coverage",
      color: "text-emerald-600",
    },
    {
      icon: Award,
      title: "Texas S-Corp Registered",
      sub: "Secretary of State Entity",
      color: "text-amber-600",
    },
    {
      icon: FileCheck2,
      title: "HUD & GSE Compliant",
      sub: "Fannie / Freddie Specs",
      color: "text-blue-600",
    },
    {
      icon: Scale,
      title: "EPA Lead-Safe Certified",
      sub: "Environmental Standard",
      color: "text-teal-600",
    },
    {
      icon: Lock,
      title: "Aspen iRecord Verified",
      sub: "Background Checked Techs",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="border-y border-slate-200 bg-slate-50/70 py-6 mb-12 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <div className="text-slate-900 text-xs font-bold leading-tight font-display">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

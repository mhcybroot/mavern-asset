import React from "react";
import { ShieldCheck, Award, FileCheck2, Scale, Lock } from "lucide-react";

export const FooterTrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "$2,000,000 GL Insurance",
      sub: "Comprehensive Coverage",
      color: "text-emerald-400",
    },
    {
      icon: Award,
      title: "Texas S-Corp Registered",
      sub: "Secretary of State Entity",
      color: "text-amber-400",
    },
    {
      icon: FileCheck2,
      title: "HUD & GSE Compliant",
      sub: "Fannie / Freddie Specs",
      color: "text-blue-400",
    },
    {
      icon: Scale,
      title: "EPA Lead-Safe Certified",
      sub: "Environmental Standard",
      color: "text-teal-400",
    },
    {
      icon: Lock,
      title: "Aspen iRecord Verified",
      sub: "Background Checked Techs",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="border-y border-slate-800 bg-slate-900/90 py-6 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-slate-600 transition"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center shrink-0">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <div className="text-white text-xs font-bold leading-tight">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-slate-400">
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

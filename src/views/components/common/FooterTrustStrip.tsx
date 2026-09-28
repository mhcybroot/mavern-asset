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
      color: "text-fuchsia-400",
    },
    {
      icon: Scale,
      title: "EPA Lead-Safe Certified",
      sub: "Environmental Standard",
      color: "text-cyan-400",
    },
    {
      icon: Lock,
      title: "Aspen iRecord Verified",
      sub: "Background Checked Techs",
      color: "text-violet-400",
    },
  ];

  return (
    <div className="border-y border-purple-500/20 bg-[#0a031a]/80 backdrop-blur-md py-6 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-500/40 transition"
              >
                <div className="w-9 h-9 rounded-lg bg-purple-900/60 flex items-center justify-center shrink-0">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <div className="text-white text-xs font-bold leading-tight">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-purple-300/70">
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

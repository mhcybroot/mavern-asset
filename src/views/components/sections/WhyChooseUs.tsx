import React from "react";
import { ShieldCheck, Camera, Clock, Building, Scale, Sparkles } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { COMPANY_INFO } from "../../../models/company.model";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Clock,
      title: "24 to 48-Hour Dispatch",
      desc: "Emergency securing, re-keying, and inspection reports dispatched rapidly to mitigate risk and prevent unauthorized occupancy.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Camera,
      title: "Timestamped Photo Proof",
      desc: "Every work order includes comprehensive before, during, and after photos, GPS metadata, and detailed condition checklists.",
      color: "from-fuchsia-600 to-pink-600",
    },
    {
      icon: Scale,
      title: "HOA & Code Compliance",
      desc: "We prevent municipal code violations, tall grass fines, and HOA citations through scheduled proactive asset maintenance.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      desc: `Registered Texas ${COMPANY_INFO.legalStructure} operating with full general liability and workers compensation coverage.`,
      color: "from-violet-600 to-purple-700",
    },
    {
      icon: Building,
      title: "Single-Vendor Simplicity",
      desc: "From initial lockbox install and trash-out to high-end tenant turns, manage your entire portfolio under one trusted vendor.",
      color: "from-blue-600 to-indigo-700",
    },
    {
      icon: Sparkles,
      title: "Value Optimization",
      desc: "Cost-effective handyman and renovation repairs aimed at maximizing property resale value and tenant absorption rates.",
      color: "from-fuchsia-500 to-amber-500",
    },
  ];

  return (
    <section id="why-us" className="py-20 border-b border-purple-500/15 relative overflow-hidden">
      
      {/* Background Cosmic Security Shield Asset with High Clarity */}
      <div className="absolute right-[0px] top-6 w-96 h-96 pointer-events-none opacity-60 z-0">
        <img
          src="/assets/cosmic/cosmic-security-shield.jpg"
          alt="Cosmic Security Shield"
          className="w-full h-full object-cover rounded-full drop-shadow-[0_0_50px_rgba(124,58,237,0.4)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="The MAVERN Advantage"
          title="Why Asset Managers Trust MAVERN"
          subtitle="Built to meet the rigorous reporting standards of institutional servicers, asset managers, and real estate investment trusts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#140632]/85 border border-purple-500/20 hover:border-fuchsia-500/40 hover:bg-[#1a0842] transition-all duration-300 shadow-xl group backdrop-blur-md"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pt.color} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-['Playfair_Display',Georgia,serif]">{pt.title}</h3>
                <p className="text-sm text-purple-200/80 leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

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
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      icon: Camera,
      title: "Timestamped Photo Proof",
      desc: "Every work order includes comprehensive before, during, and after photos, GPS metadata, and detailed condition checklists.",
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      icon: Scale,
      title: "HOA & Code Compliance",
      desc: "We prevent municipal code violations, tall grass fines, and HOA citations through scheduled proactive asset maintenance.",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      desc: `Registered Texas ${COMPANY_INFO.legalStructure} operating with full general liability and workers compensation coverage.`,
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
    {
      icon: Building,
      title: "Single-Vendor Simplicity",
      desc: "From initial lockbox install and trash-out to high-end tenant turns, manage your entire portfolio under one trusted vendor.",
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      icon: Sparkles,
      title: "Value Optimization",
      desc: "Cost-effective handyman and renovation repairs aimed at maximizing property resale value and tenant absorption rates.",
      color: "text-rose-600 bg-rose-50 border-rose-200",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
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
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group shadow-xs"
              >
                <div className={`w-12 h-12 rounded-2xl border ${pt.color} flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Playfair_Display',Georgia,serif]">{pt.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{pt.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

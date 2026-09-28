import React, { useState } from "react";
import { Check, Clock, ArrowRight } from "lucide-react";
import type { ServiceItem } from "../../../models/service.model";
import { ServiceIcon } from "../common/ServiceIcon";

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
  onInstantQuote?: (serviceId: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelect,
  onInstantQuote,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#130630]/90 rounded-3xl border border-purple-500/20 overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:border-amber-400/50 transition-all duration-300 group">
      {/* Image Header with Neon Badge Overlay */}
      <div className="relative h-48 w-full overflow-hidden bg-[#0a031a]">
        <img
          src={imgError ? "/assets/cosmic/hero-sun-mountains.jpg" : service.imageUrl}
          alt=""
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#130630] via-[#130630]/20 to-black/30" />
        
        {/* Category Icon Badge */}
        <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-xl bg-[#0b031f]/90 backdrop-blur-md text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/30 shadow-md">
          <ServiceIcon name={service.iconName} className="w-5 h-5" />
        </div>

        {/* Turnaround Badge */}
        <div className="absolute top-3.5 right-3.5">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-[#0b031f]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/40 shadow-sm">
            <Clock className="w-3 h-3 text-amber-400" />
            {service.turnaround}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2 font-['Playfair_Display',Georgia,serif]">
          {service.title}
        </h3>

        <p className="text-purple-200/80 text-xs sm:text-sm leading-relaxed mb-4 grow">
          {service.fullDesc}
        </p>

        <div className="border-t border-purple-500/15 pt-3.5 mb-5 space-y-1.5">
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-purple-200/90 font-medium">
              <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={() => onSelect(service)}
            className="flex-1 py-2.5 px-3 text-xs font-bold text-purple-200 hover:text-white bg-purple-950/60 hover:bg-purple-900/60 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition text-center cursor-pointer"
          >
            View Scope
          </button>
          <button
            onClick={() => onInstantQuote?.(service.id)}
            className="py-2.5 px-4 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 rounded-xl transition flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer font-sans"
          >
            <span>Order</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
          </button>
        </div>
      </div>
    </div>
  );
};

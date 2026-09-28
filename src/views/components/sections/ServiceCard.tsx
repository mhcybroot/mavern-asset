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
    <div className="flex flex-col h-full bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 group">
      {/* Image Header */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={imgError ? "/assets/cosmic/hero-sun-mountains.jpg" : service.imageUrl}
          alt=""
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20" />
        
        {/* Category Icon Badge */}
        <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 flex items-center justify-center border border-slate-200 shadow-sm">
          <ServiceIcon name={service.iconName} className="w-5 h-5 text-amber-600" />
        </div>

        {/* Turnaround Badge */}
        <div className="absolute top-3.5 right-3.5">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200 shadow-xs">
            <Clock className="w-3 h-3 text-amber-600" />
            {service.turnaround}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2 font-display">
          {service.title}
        </h3>

        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 grow">
          {service.fullDesc}
        </p>

        <div className="border-t border-slate-100 pt-3.5 mb-5 space-y-1.5">
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={() => onSelect(service)}
            className="flex-1 py-2.5 px-3 text-xs font-bold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition text-center cursor-pointer"
          >
            View Scope
          </button>
          <button
            onClick={() => onInstantQuote?.(service.id)}
            className="py-2.5 px-4 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
          >
            <span>Order</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

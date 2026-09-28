import React from "react";
import { X, CheckCircle2, Clock, ArrowRight } from "lucide-react";
import type { ServiceItem } from "../../../models/service.model";
import { ServiceIcon } from "../common/ServiceIcon";

interface ServiceDetailModalProps {
  service: ServiceItem;
  onClose: () => void;
  onInstantQuote?: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onInstantQuote,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
              <ServiceIcon name={service.iconName} className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                <Clock className="w-3.5 h-3.5" />
                <span>{service.turnaround} SLA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-['Playfair_Display',Georgia,serif]">
                {service.title}
              </h3>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {service.fullDesc}
          </p>

          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Core Scope of Work Included:
            </h4>
            <div className="space-y-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInstantQuote?.(service.id);
              }}
              className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
            >
              <span>Order Service</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

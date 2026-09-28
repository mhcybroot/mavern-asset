import React from "react";
import { X, CheckCircle, Clock, Shield, ArrowRight } from "lucide-react";
import type { ServiceItem } from "../../../models/service.model";
import { ServiceIcon } from "../common/ServiceIcon";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onAddToQuote: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onAddToQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#13072e] w-full max-w-xl rounded-3xl shadow-[0_0_50px_rgba(192,38,211,0.3)] border border-purple-500/30 overflow-hidden relative text-white">
        <div className="bg-[#0b031f] p-6 flex items-start justify-between border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-600/30">
              <ServiceIcon name={service.iconName} className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-fuchsia-400 uppercase tracking-wider">
                MAVERN Full Scope Specification
              </span>
              <h3 className="text-xl font-bold text-white font-['Playfair_Display',Georgia,serif]">{service.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-purple-300 hover:text-white hover:bg-purple-900/50 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1.5">
              Service Scope & Details
            </h4>
            <p className="text-sm text-purple-200/90 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#1b0a3f]/80 border border-purple-500/20 text-xs">
            <div className="flex items-center gap-2 text-purple-200">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Turnaround:</strong> {service.turnaround}</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Compliance:</strong> HUD / Fannie Mae</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2.5">
              Included Deliverables & Tasks
            </h4>
            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-purple-100">
                  <CheckCircle className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#0e0427] border-t border-purple-500/20 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-purple-300 hover:text-white transition cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onAddToQuote(service.id);
              onClose();
            }}
            className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2 transition cursor-pointer"
          >
            <span>Add To Work Order</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

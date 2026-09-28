import React from "react";
import { Check } from "lucide-react";
import { SERVICES_DATA } from "../../../models/service.model";

interface QuoteServiceSelectorProps {
  selectedServices: string[];
  onToggle: (id: string) => void;
}

export const QuoteServiceSelector: React.FC<QuoteServiceSelectorProps> = ({
  selectedServices,
  onToggle,
}) => {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-3">
        1. Select Required Services ({selectedServices.length} selected)
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
        {SERVICES_DATA.map((srv) => {
          const selected = selectedServices.includes(srv.id);
          return (
            <button
              key={srv.id}
              type="button"
              onClick={() => onToggle(srv.id)}
              className={`flex items-center justify-between p-3 rounded-2xl text-left text-xs font-semibold border transition cursor-pointer ${
                selected
                  ? "bg-purple-950/80 border-fuchsia-400 text-white shadow-[0_0_15px_rgba(217,70,239,0.3)]"
                  : "bg-[#11052c]/90 hover:bg-[#1a0842] border-purple-500/20 text-purple-200"
              }`}
            >
              <span>{srv.title}</span>
              <span
                className={`w-5 h-5 rounded-lg flex items-center justify-center border ${
                  selected
                    ? "bg-gradient-to-tr from-violet-600 to-fuchsia-600 border-fuchsia-400 text-white"
                    : "border-purple-500/30 bg-[#0c0423]"
                }`}
              >
                {selected && <Check className="w-3.5 h-3.5" />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

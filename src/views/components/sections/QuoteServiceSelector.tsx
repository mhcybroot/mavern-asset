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
      <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
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
              className={`flex items-center justify-between p-3.5 rounded-2xl text-left text-xs font-bold border transition cursor-pointer ${
                selected
                  ? "bg-slate-900 border-slate-950 text-white shadow-xs"
                  : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
              }`}
            >
              <span>{srv.title}</span>
              <span
                className={`w-5 h-5 rounded-lg flex items-center justify-center border ${
                  selected
                    ? "bg-amber-500 border-amber-500 text-slate-950 font-bold"
                    : "border-slate-300 bg-white"
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

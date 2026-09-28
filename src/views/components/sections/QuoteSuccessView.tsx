import React from "react";
import { CheckCircle2, RotateCcw, Mail, Send } from "lucide-react";
import type { QuoteFormData } from "../../../models/quote.model";

interface QuoteSuccessViewProps {
  confirmationId: string;
  formData: QuoteFormData;
  estimatedTurnaround: string;
  mailtoUrl?: string;
  onReset: () => void;
}

export const QuoteSuccessView: React.FC<QuoteSuccessViewProps> = ({
  confirmationId,
  formData,
  estimatedTurnaround,
  mailtoUrl,
  onReset,
}) => {
  return (
    <section id="quote" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 text-center bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl text-slate-900">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 border border-emerald-300 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-xs">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        
        <h3 className="text-2xl font-black text-slate-950 mb-2 font-['Playfair_Display',Georgia,serif]">Work Order Request Generated!</h3>
        <p className="text-slate-600 text-sm mb-6">
          Dispatch Ticket: <span className="font-mono font-bold text-amber-700 text-base">{confirmationId}</span>
        </p>

        <div className="bg-white p-5 rounded-2xl text-xs text-slate-700 max-w-md mx-auto mb-6 border border-slate-200 text-left space-y-2 shadow-xs">
          <div><strong>Property:</strong> {formData.propertyAddress}, {formData.city}, {formData.state} {formData.zip}</div>
          <div><strong>Services Requested:</strong> {formData.selectedServices.length} Selected</div>
          <div><strong>Estimated Turnaround:</strong> {estimatedTurnaround}</div>
          <div><strong>Contact Email:</strong> {formData.clientEmail}</div>
        </div>

        {mailtoUrl && (
          <div className="mb-6">
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-md transition hover:scale-[1.02] cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Open Email Client (mailto) to Dispatch</span>
              <Send className="w-3.5 h-3.5 text-amber-400" />
            </a>
            <p className="text-[11px] text-slate-500 mt-2 font-medium">
              If your email application did not open automatically, click the button above to send the pre-filled work order.
            </p>
          </div>
        )}

        <div className="pt-4 border-t border-slate-200">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-300 transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Submit Another Order
          </button>
        </div>
      </div>
    </section>
  );
};

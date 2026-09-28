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
    <section id="quote" className="py-20 bg-[#090217] border-b border-purple-500/15">
      <div className="max-w-3xl mx-auto px-4 text-center bg-[#13072e] p-8 sm:p-12 rounded-3xl border border-purple-500/30 shadow-[0_0_50px_rgba(124,58,237,0.25)] text-white">
        <div className="w-16 h-16 bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/20">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        
        <h3 className="text-2xl font-black text-white mb-2 font-['Playfair_Display',Georgia,serif]">Work Order Request Generated!</h3>
        <p className="text-purple-300 text-sm mb-6">
          Dispatch Ticket: <span className="font-mono font-bold text-amber-400 text-base">{confirmationId}</span>
        </p>

        <div className="bg-[#0b031f]/90 p-5 rounded-2xl text-xs text-purple-200 max-w-md mx-auto mb-6 border border-purple-500/20 text-left space-y-2">
          <div><strong>Property:</strong> {formData.propertyAddress}, {formData.city}, {formData.state} {formData.zip}</div>
          <div><strong>Services Requested:</strong> {formData.selectedServices.length} Selected</div>
          <div><strong>Estimated Turnaround:</strong> {estimatedTurnaround}</div>
          <div><strong>Contact Email:</strong> {formData.clientEmail}</div>
        </div>

        {mailtoUrl && (
          <div className="mb-6">
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-[0_0_25px_rgba(192,38,211,0.5)] transition hover:scale-[1.02] cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Open Email Client (mailto) to Dispatch</span>
              <Send className="w-3.5 h-3.5 text-amber-300" />
            </a>
            <p className="text-[11px] text-purple-300/70 mt-2">
              If your email application did not open automatically, click the button above to send the pre-filled work order.
            </p>
          </div>
        )}

        <div className="pt-4 border-t border-purple-500/20">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-950/80 hover:bg-purple-900 text-purple-200 text-xs font-bold uppercase tracking-wider rounded-xl border border-purple-500/30 transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Submit Another Order
          </button>
        </div>
      </div>
    </section>
  );
};

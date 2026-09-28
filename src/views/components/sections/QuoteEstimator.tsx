import React from "react";
import { Clock, Send } from "lucide-react";
import { useQuoteViewModel } from "../../../viewmodels/useQuoteViewModel";
import { SectionHeader } from "../common/SectionHeader";
import { QuoteSuccessView } from "./QuoteSuccessView";
import { QuoteServiceSelector } from "./QuoteServiceSelector";

export const QuoteEstimator: React.FC = () => {
  const {
    formData,
    status,
    confirmationId,
    mailtoUrl,
    toggleService,
    updateField,
    estimatedTurnaround,
    handleSubmit,
    resetForm,
  } = useQuoteViewModel();

  if (status === "success") {
    return (
      <QuoteSuccessView
        confirmationId={confirmationId}
        formData={formData}
        estimatedTurnaround={estimatedTurnaround}
        mailtoUrl={mailtoUrl}
        onReset={resetForm}
      />
    );
  }

  return (
    <section id="quote" className="py-20 bg-[#090217] border-b border-purple-500/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Work Order Estimator"
          title="Instant Quote & Work Order Dispatch"
          subtitle="Select needed preservation items and enter asset details to receive an immediate dispatch quote & schedule."
        />

        <form onSubmit={handleSubmit} className="bg-[#13072e]/90 rounded-3xl p-6 sm:p-10 border border-purple-500/25 shadow-2xl space-y-8 text-white">
          <QuoteServiceSelector
            selectedServices={formData.selectedServices}
            onToggle={toggleService}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-purple-300 mb-1">Property Address *</label>
              <input
                type="text"
                required
                placeholder="e.g. 1000 W Mitchell St"
                value={formData.propertyAddress}
                onChange={(e) => updateField("propertyAddress", e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-[#0c0423] border border-purple-500/20 rounded-xl focus:ring-2 focus:ring-fuchsia-500 text-white placeholder-purple-400/50 outline-hidden"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-xs font-bold text-purple-300 mb-1">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  className="w-full px-2.5 py-2.5 text-xs bg-[#0c0423] border border-purple-500/20 rounded-xl text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-purple-300 mb-1">State</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => updateField("state", e.target.value)}
                  className="w-full px-2.5 py-2.5 text-xs bg-[#0c0423] border border-purple-500/20 rounded-xl text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-purple-300 mb-1">Zip</label>
                <input
                  type="text"
                  value={formData.zip}
                  onChange={(e) => updateField("zip", e.target.value)}
                  className="w-full px-2.5 py-2.5 text-xs bg-[#0c0423] border border-purple-500/20 rounded-xl text-white"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-purple-300 mb-1">Your Email *</label>
              <input
                type="email"
                required
                placeholder="servicer@assetcompany.com"
                value={formData.clientEmail}
                onChange={(e) => updateField("clientEmail", e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-[#0c0423] border border-purple-500/20 rounded-xl focus:ring-2 focus:ring-fuchsia-500 text-white placeholder-purple-400/50 outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-purple-300 mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="(817) 555-0100"
                value={formData.clientPhone}
                onChange={(e) => updateField("clientPhone", e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-[#0c0423] border border-purple-500/20 rounded-xl text-white"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#0c0423] rounded-2xl border border-purple-500/20">
            <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-purple-200">
              <input
                type="checkbox"
                checked={formData.rushDelivery}
                onChange={(e) => updateField("rushDelivery", e.target.checked)}
                className="w-4 h-4 rounded-sm text-fuchsia-600 focus:ring-fuchsia-500 border-purple-500/40 bg-purple-950"
              />
              <span>Request Rush 24h Priority Dispatch</span>
            </label>
            <div className="flex items-center gap-2 text-xs text-amber-300">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Est. Turnaround: <strong>{estimatedTurnaround}</strong></span>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-[0_0_25px_rgba(192,38,211,0.5)] flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <Send className="w-4 h-4 text-amber-300" />
            <span>{status === "submitting" ? "Processing Work Order..." : "Submit Work Order Request"}</span>
          </button>
        </form>
      </div>
    </section>
  );
};

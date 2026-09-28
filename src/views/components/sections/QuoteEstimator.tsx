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
    <section id="quote" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Work Order Estimator"
          title="Instant Quote & Work Order Dispatch"
          subtitle="Select needed preservation items and enter asset details to receive an immediate dispatch quote & schedule."
        />

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8 text-slate-900">
          <QuoteServiceSelector
            selectedServices={formData.selectedServices}
            onToggle={toggleService}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Property Address *</label>
              <input
                type="text"
                required
                placeholder="e.g. 1000 W Mitchell St"
                value={formData.propertyAddress}
                onChange={(e) => updateField("propertyAddress", e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 text-slate-900 placeholder-slate-400 outline-none"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  className="w-full px-2.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">State</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => updateField("state", e.target.value)}
                  className="w-full px-2.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Zip</label>
                <input
                  type="text"
                  value={formData.zip}
                  onChange={(e) => updateField("zip", e.target.value)}
                  className="w-full px-2.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Your Email *</label>
              <input
                type="email"
                required
                placeholder="servicer@assetcompany.com"
                value={formData.clientEmail}
                onChange={(e) => updateField("clientEmail", e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 text-slate-900 placeholder-slate-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="(817) 555-0100"
                value={formData.clientPhone}
                onChange={(e) => updateField("clientPhone", e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <label className="flex items-center gap-2.5 cursor-pointer text-xs font-bold text-slate-800">
              <input
                type="checkbox"
                checked={formData.rushDelivery}
                onChange={(e) => updateField("rushDelivery", e.target.checked)}
                className="w-4 h-4 rounded-sm text-slate-950 focus:ring-slate-900 border-slate-300 bg-white"
              />
              <span>Request Rush 24h Priority Dispatch</span>
            </label>
            <div className="flex items-center gap-2 text-xs text-amber-700 font-bold">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Est. Turnaround: <strong>{estimatedTurnaround}</strong></span>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-md flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <Send className="w-4 h-4 text-amber-400" />
            <span>{status === "submitting" ? "Processing Work Order..." : "Submit Work Order Request"}</span>
          </button>
        </form>
      </div>
    </section>
  );
};

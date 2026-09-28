import React from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useContactViewModel } from "../../../viewmodels/useContactViewModel";
import { SectionHeader } from "../common/SectionHeader";
import { ContactInfoCard } from "./ContactInfoCard";

export const ContactSection: React.FC = () => {
  const { formData, isSubmitting, submitted, feedbackMessage, handleChange, submitContact } = useContactViewModel();

  return (
    <section id="contact" className="py-20 bg-[#090217] relative overflow-hidden">
      
      {/* Background Cosmic Dunes Asset */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src="/assets/cosmic/cosmic-dunes.jpg"
          alt="Cosmic Dunes"
          className="w-full h-full object-cover mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090217] via-[#090217]/70 to-[#090217]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Contact & Dispatch"
          title="Speak With Our Operations Desk"
          subtitle="Whether you need emergency re-keying, ongoing preservation, or a master vendor agreement for your portfolio."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5">
            <ContactInfoCard />
          </div>

          <div className="lg:col-span-7 bg-[#13072e]/90 rounded-3xl p-8 border border-purple-500/25 shadow-2xl text-white">
            {submitted && feedbackMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            <form onSubmit={submitContact} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-purple-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#0c0423] border border-purple-500/20 rounded-xl text-white placeholder-purple-400/50 outline-hidden focus:ring-2 focus:ring-fuchsia-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-purple-300 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#0c0423] border border-purple-500/20 rounded-xl text-white placeholder-purple-400/50 outline-hidden focus:ring-2 focus:ring-fuchsia-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-purple-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(817) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#0c0423] border border-purple-500/20 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-purple-300 mb-1">Asset Category</label>
                  <select
                    value={formData.assetType}
                    onChange={(e) => handleChange("assetType", e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#0c0423] border border-purple-500/20 rounded-xl text-white"
                  >
                    <option className="bg-[#0c0423]">Single Family REO</option>
                    <option className="bg-[#0c0423]">Multi-Family Complex</option>
                    <option className="bg-[#0c0423]">Commercial Property</option>
                    <option className="bg-[#0c0423]">Pre-Foreclosure / Default</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-purple-300 mb-1">Message / Scope Description *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your property preservation, turn, or inspection requirements..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#0c0423] border border-purple-500/20 rounded-xl text-white placeholder-purple-400/50 outline-hidden focus:ring-2 focus:ring-fuchsia-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-[0_0_20px_rgba(192,38,211,0.4)] transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-amber-300" />
                <span>{isSubmitting ? "Sending Inquiry..." : "Send Message to Operations"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

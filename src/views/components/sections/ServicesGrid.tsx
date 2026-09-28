import React from "react";
import { Search } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { ServiceDetailModal } from "./ServiceDetailModal";
import { SectionHeader } from "../common/SectionHeader";
import { useServicesViewModel } from "../../../viewmodels/useServicesViewModel";

interface ServicesGridProps {
  onInstantQuote?: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onInstantQuote }) => {
  const {
    filteredServices,
    activeCategory,
    searchQuery,
    selectedService,
    categories,
    setActiveCategory,
    setSearchQuery,
    setSelectedService,
  } = useServicesViewModel();

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Light Watermark Blend Asset */}
      <div className="absolute inset-0 pointer-events-none opacity-8 z-0">
        <img
          src="/assets/cosmic/mountain-ring-planet.jpg"
          alt=""
          className="w-full h-full object-cover object-top mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="11 Core Capabilities"
          title="Full-Lifecycle Asset Preservation & Turnover Services"
          subtitle="Engineered to meet the compliance, timeline, and reporting standards of US loan servicers, banks, and institutional REIT asset managers."
        />

        {/* Filter Controls & Live Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 11 services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 shadow-2xs"
            />
          </div>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={setSelectedService}
              onInstantQuote={onInstantQuote}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No services found matching "{searchQuery}".
          </div>
        )}
      </div>

      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onInstantQuote={onInstantQuote}
        />
      )}
    </section>
  );
};

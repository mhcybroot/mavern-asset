import React from "react";
import { Search, Sparkles } from "lucide-react";
import { useServicesViewModel } from "../../../viewmodels/useServicesViewModel";
import { SectionHeader } from "../common/SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { ServiceDetailModal } from "./ServiceDetailModal";

interface ServicesGridProps {
  onAddToQuote: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onAddToQuote }) => {
  const {
    categories,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filteredServices,
    selectedService,
    setSelectedService,
  } = useServicesViewModel();

  return (
    <section id="services" className="py-20 bg-[#090217] border-b border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Complete Service Catalog"
          title="All 11 Asset Preservation Capabilities"
          subtitle="Built specifically for asset managers and lenders requiring strict turnaround times, high photo quality, and total code compliance."
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_0_15px_rgba(192,38,211,0.4)]"
                    : "bg-[#16063b]/80 text-purple-200/80 hover:bg-[#200a52] hover:text-white border border-purple-500/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 11 services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#16063b]/80 border border-purple-500/25 rounded-xl text-xs text-white placeholder-purple-400/60 focus:outline-hidden focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
            />
          </div>
        </div>

        {filteredServices.length === 0 ? (
          <div className="bg-[#130630]/80 rounded-3xl p-12 text-center border border-purple-500/20">
            <Sparkles className="w-8 h-8 text-fuchsia-400 mx-auto mb-3 animate-pulse" />
            <h4 className="text-base font-bold text-white">No services found</h4>
            <p className="text-xs text-purple-300/70 mt-1">Try adjusting your search terms or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={(s) => setSelectedService(s)}
                onInstantQuote={(id) => onAddToQuote(id)}
              />
            ))}
          </div>
        )}
      </div>

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onAddToQuote={onAddToQuote}
      />
    </section>
  );
};

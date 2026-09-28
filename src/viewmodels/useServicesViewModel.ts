import { useState, useMemo } from "react";
import { SERVICES_DATA, type ServiceCategory, type ServiceItem } from "../models/service.model";

export function useServicesViewModel() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        activeCategory === "all" || service.category === activeCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.fullDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories: { label: string; value: ServiceCategory }[] = [
    { label: "All Services (11)", value: "all" },
    { label: "Property Preservation", value: "preservation" },
    { label: "Maintenance & Care", value: "maintenance" },
    { label: "Repairs & Safety", value: "repairs" },
    { label: "Turnover & Renovation", value: "turnover" },
  ];

  return {
    categories,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filteredServices,
    selectedService,
    setSelectedService,
    totalCount: SERVICES_DATA.length,
  };
}

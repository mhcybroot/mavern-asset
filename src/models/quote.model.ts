export interface QuoteFormData {
  propertyName: string;
  propertyAddress: string;
  city: string;
  state: string;
  zip: string;
  propertyType: "single-family" | "multi-family" | "commercial" | "reo-bank-owned";
  selectedServices: string[];
  rushDelivery: boolean;
  notes: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  companyName: string;
}

export interface QuoteCalculation {
  baseServicesCount: number;
  estimatedTimeline: string;
  priorityLevel: string;
  status: "idle" | "submitting" | "success" | "error";
}

export const INITIAL_QUOTE_FORM: QuoteFormData = {
  propertyName: "",
  propertyAddress: "",
  city: "Arlington",
  state: "TX",
  zip: "76013",
  propertyType: "single-family",
  selectedServices: ["securing", "inspections"],
  rushDelivery: false,
  notes: "",
  clientName: "",
  clientEmail: "",
  clientPhone: "",
  companyName: "",
};

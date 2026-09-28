import { useState, useTransition } from "react";
import { INITIAL_QUOTE_FORM, type QuoteFormData } from "../models/quote.model";
import { COMPANY_INFO } from "../models/company.model";
import { SERVICES_DATA } from "../models/service.model";

export function useQuoteViewModel() {
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_QUOTE_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [confirmationId, setConfirmationId] = useState<string>("");
  const [mailtoUrl, setMailtoUrl] = useState<string>("");
  const [, startTransition] = useTransition();

  const toggleService = (serviceId: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceId);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((id) => id !== serviceId)
          : [...prev.selectedServices, serviceId],
      };
    });
  };

  const updateField = <K extends keyof QuoteFormData>(field: K, value: QuoteFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const estimatedTurnaround = () => {
    if (formData.rushDelivery) return "Within 24 Hours (Rush Priority)";
    if (formData.selectedServices.length > 4) return "48 - 72 Hours";
    return "24 - 48 Hours";
  };

  const buildMailtoLink = (ticketId: string) => {
    const selectedTitles = formData.selectedServices
      .map((id) => SERVICES_DATA.find((s) => s.id === id)?.title || id)
      .join("\n• ");

    const subject = encodeURIComponent(
      `[Work Order Request: ${ticketId}] - ${formData.propertyAddress}, ${formData.city}, ${formData.state}`
    );

    const body = encodeURIComponent(
      `MAVERN ASSET MANAGEMENT LLC - WORK ORDER DISPATCH REQUEST\n\n` +
      `Ticket ID: ${ticketId}\n` +
      `Property Address: ${formData.propertyAddress}, ${formData.city}, ${formData.state} ${formData.zip}\n` +
      `Client Email: ${formData.clientEmail}\n` +
      `Client Phone: ${formData.clientPhone || "Not provided"}\n` +
      `Rush Priority: ${formData.rushDelivery ? "YES (24h Expedited)" : "Standard (24-48h)"}\n` +
      `Estimated Turnaround: ${estimatedTurnaround()}\n\n` +
      `Requested Services:\n• ${selectedTitles || "None selected"}\n\n` +
      `Sent via MAVERN Asset Dispatch Portal`
    );

    return `mailto:${COMPANY_INFO.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.propertyAddress || !formData.clientEmail) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    startTransition(() => {
      const ticketId = `WO-TX-${Math.floor(100000 + Math.random() * 900000)}`;
      const link = buildMailtoLink(ticketId);
      setConfirmationId(ticketId);
      setMailtoUrl(link);
      setStatus("success");
      window.location.href = link;
    });
  };

  const resetForm = () => {
    setFormData(INITIAL_QUOTE_FORM);
    setStatus("idle");
    setConfirmationId("");
    setMailtoUrl("");
  };

  return {
    formData,
    status,
    confirmationId,
    mailtoUrl,
    toggleService,
    updateField,
    estimatedTurnaround: estimatedTurnaround(),
    handleSubmit,
    resetForm,
  };
}

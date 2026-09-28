import { useState } from "react";
import { COMPANY_INFO } from "../models/company.model";

export interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  assetType: string;
}

const INITIAL_STATE: ContactFormState = {
  fullName: "",
  email: "",
  phone: "",
  subject: "General Inquiry",
  message: "",
  assetType: "Single Family REO",
};

export function useContactViewModel() {
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setFeedbackMessage("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    setFeedbackMessage("");

    const subject = encodeURIComponent(`[Inquiry: ${formData.assetType}] from ${formData.fullName}`);
    const body = encodeURIComponent(
      `MAVERN ASSET MANAGEMENT LLC - CONTACT INQUIRY\n\n` +
      `Sender Name: ${formData.fullName}\n` +
      `Sender Email: ${formData.email}\n` +
      `Sender Phone: ${formData.phone || "Not provided"}\n` +
      `Asset Type: ${formData.assetType}\n\n` +
      `Message:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${COMPANY_INFO.contact.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFeedbackMessage("Thank you! Opening your email client to send this message to our operations team...");
      window.location.href = mailtoUrl;
    }, 400);
  };

  return {
    formData,
    isSubmitting,
    submitted,
    feedbackMessage,
    handleChange,
    submitContact,
    clearFeedback: () => setFeedbackMessage(""),
  };
}

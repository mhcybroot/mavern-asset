import React from "react";
import {
  ShieldCheck,
  Trees,
  Trash2,
  ClipboardCheck,
  Wrench,
  Home,
  Sparkles,
  Snowflake,
  Paintbrush,
  AlertTriangle,
  KeyRound,
  CheckCircle2,
} from "lucide-react";

interface ServiceIconProps {
  name: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "Trees":
      return <Trees className={className} />;
    case "Trash2":
      return <Trash2 className={className} />;
    case "ClipboardCheck":
      return <ClipboardCheck className={className} />;
    case "Wrench":
      return <Wrench className={className} />;
    case "Home":
      return <Home className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    case "Snowflake":
      return <Snowflake className={className} />;
    case "Paintbrush":
      return <Paintbrush className={className} />;
    case "AlertTriangle":
      return <AlertTriangle className={className} />;
    case "KeyRound":
      return <KeyRound className={className} />;
    default:
      return <CheckCircle2 className={className} />;
  }
};

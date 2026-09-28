import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
}) => {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200 ${
          isCenter ? "mx-auto" : ""
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-['Playfair_Display',Georgia,serif]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

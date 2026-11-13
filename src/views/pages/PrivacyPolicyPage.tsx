import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin, ArrowLeft, Lock } from "lucide-react";
import { COMPANY_INFO } from "../../models/company.model";
import { PRIVACY_POLICY_DATA } from "../../models/privacy.model";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      <div className="py-14 border-b border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-6 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-slate-800 text-xs font-bold mb-4 border border-slate-200 shadow-xs">
            <Lock className="w-3.5 h-3.5 text-amber-600" />
            <span>Compliance & Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4 font-display">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm">
            Effective Date: <span className="font-semibold text-slate-700">{PRIVACY_POLICY_DATA.effectiveDate}</span> • Last Updated: <span className="font-semibold text-slate-700">{PRIVACY_POLICY_DATA.lastUpdated}</span>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed mb-10">
          {PRIVACY_POLICY_DATA.intro}
        </div>

        <div className="space-y-10">
          {PRIVACY_POLICY_DATA.sections.map((section, idx) => (
            <section key={idx} className="border-b border-slate-100 pb-8 last:border-b-0">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 font-display">
                {section.title}
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {section.listItems && (
                <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  {section.listItems.map((item, lIdx) => (
                    <li key={lIdx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              )}

              {section.callout && (
                <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                  🔒 {section.callout}
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-950 mb-2 font-display flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Contact Our Privacy & Compliance Desk
          </h3>
          <p className="text-xs text-slate-600 mb-6">
            If you have questions regarding this Privacy Policy, your personal data, or wish to exercise statutory privacy rights:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span className="text-slate-700">{COMPANY_INFO.address.fullAddress}</span>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-600 shrink-0" />
              <a href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9]/g, "")}`} className="font-semibold text-slate-950 hover:text-amber-700 transition">
                {COMPANY_INFO.contact.phone}
              </a>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-600 shrink-0" />
              <a href={`mailto:${COMPANY_INFO.contact.email}`} className="font-semibold text-slate-950 hover:text-amber-700 transition">
                {COMPANY_INFO.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

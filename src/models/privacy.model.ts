import { COMPANY_INFO } from "./company.model";

export interface PrivacySection {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly listItems?: readonly string[];
  readonly callout?: string;
}

export const PRIVACY_POLICY_DATA = {
  effectiveDate: "August 27, 2025",
  lastUpdated: "January 15, 2026",
  intro: `${COMPANY_INFO.name} ("we", "us", "our") values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website, submit work orders, or interact with our asset management and preservation services.`,
  sections: [
    {
      title: "1. Information We Collect",
      paragraphs: [
        "Personal Information: When you submit work orders, request estimates, or contact our dispatch team, we collect your name, phone number, email address, company name, billing address, and property job site details.",
        "Usage Data & Analytics: We automatically collect standard technical metrics including IP addresses, browser types, device information, and pages visited to ensure site reliability and system performance.",
        "Cookies: We utilize essential cookies and lightweight performance trackers to enhance navigation and remember form preferences. You can disable cookies at any time via your browser settings.",
      ],
      callout:
        "Text Message Communications: Standard messaging and data rates may apply. Mobile carriers are not liable for delayed or undelivered messages. We strictly do NOT share mobile information or SMS opt-in data with third parties or affiliates for marketing or promotional purposes.",
    },
    {
      title: "2. Opt-Out Options & Preferences",
      paragraphs: [
        "Text Messaging: You may opt out of SMS communications at any time by replying STOP to any text message from us. Reply HELP for assistance, or contact our dispatch team directly.",
        "Marketing Communications: You can opt out of promotional communications by following the unsubscribe instructions or emailing us. Service-related alerts regarding active field operations will continue as necessary.",
      ],
    },
    {
      title: "3. SMS Terms and Conditions",
      paragraphs: [
        "By providing your mobile number and submitting an inquiry or work order, you consent to receive account-related SMS notifications, including field dispatch updates, job completions, and quote estimates.",
      ],
      listItems: [
        "Message frequency varies based on active work order status.",
        "Standard message and data rates may apply depending on your carrier.",
        "Text STOP at any time to cancel SMS notifications.",
        "Text HELP or email support for dispatch assistance.",
        "Mobile carriers are not liable for delayed or undelivered messages.",
        "No mobile opt-in data will be shared with third parties for marketing purposes.",
      ],
    },
    {
      title: "4. How We Use Your Information",
      paragraphs: [
        "We utilize collected data solely for legitimate operational purposes:",
      ],
      listItems: [
        "To process, estimate, and fulfill property preservation and REO work orders.",
        "To dispatch field technicians and provide real-time photo inspection logs.",
        "To communicate operational updates, invoices, and compliance documentation.",
        "To maintain platform security, detect fraud, and fulfill Texas statutory requirements.",
      ],
    },
    {
      title: "5. Disclosure of Your Information",
      paragraphs: [
        "We never sell, rent, or trade your personal information. Disclosures occur only under strict operational boundaries:",
      ],
      listItems: [
        "Authorized Service Providers: Field contractors and technical dispatch platforms bound by strict confidentiality.",
        "Legal & Regulatory Mandates: Compliance with court orders, Fannie Mae / Freddie Mac / HUD audit standards, or Texas law.",
        "Asset Transfers: In the event of a merger or restructuring, subject to this Privacy Policy.",
      ],
      callout:
        "All above categories strictly exclude text messaging originator opt-in data and consent; this information will never be shared with third parties.",
    },
    {
      title: "6. Data Security & Your Legal Rights",
      paragraphs: [
        "We implement enterprise-grade physical, technical, and administrative safeguards to protect your personal and asset data. While no system is 100% impenetrable, we follow industry best practices.",
        "Under Texas law (including the Texas Data Privacy and Security Act) and applicable U.S. federal laws, you have the right to request access to, correction of, or deletion of your personal data.",
        `To exercise any privacy rights, contact our privacy compliance desk at ${COMPANY_INFO.contact.email}.`,
      ],
    },
  ] as readonly PrivacySection[],
};

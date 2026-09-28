export interface CompanyInfo {
  readonly name: string;
  readonly legalStructure: string;
  readonly address: {
    readonly street: string;
    readonly suite: string;
    readonly city: string;
    readonly state: string;
    readonly zip: string;
    readonly fullAddress: string;
  };
  readonly contact: {
    readonly phone: string;
    readonly email: string;
    readonly dispatchHours: string;
    readonly emergencyLine: string;
  };
  readonly leadership?: {
    readonly ownerName: string;
    readonly title: string;
  };
  readonly badges: readonly string[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "MAVERN ASSET MANAGEMENT LLC",
  legalStructure: "S Corporation",
  address: {
    street: "1000 W Mitchell St",
    suite: "Apt 243",
    city: "Arlington",
    state: "Texas",
    zip: "76013",
    fullAddress: "Apt 243, 1000 W Mitchell St, Arlington, TX 76013",
  },
  contact: {
    phone: "+1 (347) 806-6134",
    email: "mavern.assets@gmail.com",
    dispatchHours: "Mon - Sat: 7:00 AM - 7:00 PM CST",
    emergencyLine: "24/7 Priority Dispatch Available",
  },
  leadership: {
    ownerName: "Md Mahbub Mahim",
    title: "Managing Principal & Operations Director",
  },
  badges: [
    "Texas S-Corp Registered",
    "Fully Insured & Bonded",
    "24-48 Hr Fast Turnaround",
    "US HUD & REO Compliant",
  ],
};

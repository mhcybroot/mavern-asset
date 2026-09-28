export interface NavItem {
  readonly label: string;
  readonly path: string;
}

export const NAV_LINKS: readonly NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Why Choose Us", path: "/why-us" },
  { label: "Coverage Area", path: "/coverage" },
  { label: "Instant Estimate", path: "/quote" },
  { label: "Contact & Dispatch", path: "/contact" },
];

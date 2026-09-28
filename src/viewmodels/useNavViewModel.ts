import { useState, useEffect } from "react";
import { NAV_LINKS, type NavItem } from "../models/nav.model";

export function useNavViewModel() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);
  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  return {
    navLinks: NAV_LINKS as readonly NavItem[],
    mobileMenuOpen,
    isScrolled,
    activeSection,
    setActiveSection,
    closeMenu,
    toggleMenu,
  };
}

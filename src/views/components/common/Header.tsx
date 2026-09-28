import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Building2, Menu, X, PhoneCall, ShieldCheck, Sparkles, Moon, Sun } from "lucide-react";
import { COMPANY_INFO } from "../../../models/company.model";
import { useNavViewModel } from "../../../viewmodels/useNavViewModel";
import { useThemeViewModel } from "../../../viewmodels/useThemeViewModel";

export const Header: React.FC = () => {
  const { navLinks, mobileMenuOpen, isScrolled, toggleMenu, closeMenu } = useNavViewModel();
  const { isNavy, toggleTheme, currentConfig } = useThemeViewModel();
  const navigate = useNavigate();

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-[#0A1128]/95 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.6)] py-3" : "bg-[#0A1128]/85 backdrop-blur-md py-4"
    } border-b border-[#D4AF37]/20 text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-500 to-amber-200 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform text-slate-950 font-black">
            <Building2 className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="font-extrabold text-lg sm:text-xl tracking-tight leading-none text-white font-['Playfair_Display',Georgia,serif]">
              MAVERN <span className="text-[#D4AF37] font-normal italic">ASSET</span>
            </div>
            <div className="text-[10px] font-semibold text-slate-300 uppercase tracking-widest mt-0.5 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400 inline" />
              Management LLC • S-Corp
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            title={`Switch to ${isNavy ? "Cosmic Purple" : "Institutional Gold"}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-[#D4AF37]/30 text-xs font-medium text-[#D4AF37] hover:bg-slate-800 transition cursor-pointer"
          >
            {isNavy ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-fuchsia-400" />}
            <span className="text-[11px] font-semibold">{currentConfig.label}</span>
          </button>

          <a
            href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9]/g, "")}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-700/50 transition"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{COMPANY_INFO.contact.phone}</span>
          </a>
          <button
            onClick={() => navigate("/quote")}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 active:scale-95 text-slate-950 text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.35)] transition cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Work Order</span>
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 transition cursor-pointer border border-slate-700"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D1E] border-b border-[#D4AF37]/20 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                  isActive ? "bg-[#D4AF37] text-slate-950" : "text-slate-200 hover:bg-slate-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-[#D4AF37] font-semibold text-sm border border-[#D4AF37]/30"
            >
              {isNavy ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-fuchsia-400" />}
              Theme: {currentConfig.label}
            </button>
            <a
              href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-slate-200 font-semibold text-sm border border-slate-800"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              {COMPANY_INFO.contact.phone}
            </a>
            <button
              onClick={() => {
                closeMenu();
                navigate("/quote");
              }}
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/30 cursor-pointer"
            >
              Request Work Order
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

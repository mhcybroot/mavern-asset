import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Building2, Menu, X, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "../../../models/company.model";
import { useNavViewModel } from "../../../viewmodels/useNavViewModel";

export const Header: React.FC = () => {
  const { navLinks, mobileMenuOpen, isScrolled, toggleMenu, closeMenu } = useNavViewModel();
  const navigate = useNavigate();

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white/90 backdrop-blur-sm py-4"
    } border-b border-slate-200/80 text-slate-900`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-900 via-slate-800 to-amber-600 flex items-center justify-center shadow-md text-white font-bold group-hover:scale-105 transition-transform">
            <Building2 className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="font-extrabold text-lg sm:text-xl tracking-tight leading-none text-slate-900 font-display">
              MAVERN <span className="text-amber-600 font-normal italic">ASSET</span>
            </div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600 inline" />
              Management LLC • Texas S-Corp
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "text-slate-950 border-b-2 border-amber-500 pb-1"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3.5">
          <a
            href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9]/g, "")}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 px-3.5 py-2.5 rounded-xl border border-slate-200 transition"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
            <span>{COMPANY_INFO.contact.phone}</span>
          </a>
          <button
            onClick={() => navigate("/quote")}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition hover:scale-[1.02] cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Work Order</span>
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition cursor-pointer border border-slate-200"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                  isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200"
            >
              <PhoneCall className="w-4 h-4 text-amber-600" />
              {COMPANY_INFO.contact.phone}
            </a>
            <button
              onClick={() => {
                closeMenu();
                navigate("/quote");
              }}
              className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm uppercase tracking-wider shadow-md cursor-pointer"
            >
              Request Work Order
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Phone, Mail, MapPin, Clock, Trees, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 py-8 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-white">Ready for a Healthier, Greener Texas Lawn?</h3>
            <p className="text-xs text-slate-400">Call our Arlington dispatch desk today for a prompt, free estimate.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+13478066134"
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+1 (347) 806-6134</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-800/80 flex items-center justify-center text-emerald-400 shadow">
                <Trees className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white">MAVERN </span>
                <span className="text-lg font-bold tracking-tight text-emerald-400">LANDSCAPING</span>
                <p className="text-[10px] font-bold tracking-wider text-amber-400 uppercase">Asset Management LLC</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              MAVERN ASSET MANAGEMENT LLC provides premier residential and commercial landscaping, turf management, seasonal cleanups, and tree care across Arlington and the Dallas-Fort Worth metroplex.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Fully Licensed & Insured Texas Grounds Crew</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Landscape Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Bermuda & St. Augustine Mowing</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Texas Native Plant Design</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Hardwood Mulching & River Rock</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Hedge Shaping & Shrub Pruning</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Seasonal Cleanups & Aeration</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Commercial Grounds Contracts</a></li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">DFW Areas</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#service-areas" className="hover:text-emerald-400 transition-colors">Arlington, TX</a></li>
              <li><a href="#service-areas" className="hover:text-emerald-400 transition-colors">Grand Prairie, TX</a></li>
              <li><a href="#service-areas" className="hover:text-emerald-400 transition-colors">Mansfield, TX</a></li>
              <li><a href="#service-areas" className="hover:text-emerald-400 transition-colors">Fort Worth, TX</a></li>
              <li><a href="#service-areas" className="hover:text-emerald-400 transition-colors">Dallas, TX</a></li>
              <li><a href="#service-areas" className="hover:text-emerald-400 transition-colors">Irving / Las Colinas</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Hours</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Apt 243, 1000 W Mitchell St, Arlington, TX 76013</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+13478066134" className="hover:text-white font-bold text-slate-200">+1 (347) 806-6134</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:mavern.assets@gmail.com" className="hover:text-white">mavern.assets@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mon - Sat: 7:00 AM - 7:00 PM CST</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MAVERN ASSET MANAGEMENT LLC. All rights reserved. Professional Landscaping & Grounds Preservation.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

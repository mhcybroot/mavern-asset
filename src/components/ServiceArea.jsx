import React from 'react';
import { MapPin, CheckCircle, Navigation } from 'lucide-react';

export default function ServiceArea() {
  const areas = [
    { city: 'Arlington, TX', desc: 'Central Dispatch & Main Hub (Downtown, UTA District, South Arlington)' },
    { city: 'Grand Prairie, TX', desc: 'Full Residential & Commercial Lawn Maintenance Coverage' },
    { city: 'Mansfield, TX', desc: 'Estate Grounds Care, Native Planting, Hardwood Mulching' },
    { city: 'Fort Worth, TX', desc: 'West Metroplex Lawn Care & Commercial Properties' },
    { city: 'Irving & Las Colinas, TX', desc: 'Corporate Grounds & Residential Turf Maintenance' },
    { city: 'Dallas, TX Metro', desc: 'Scheduled Commercial & Multi-Family Grounds Preservation' },
  ];

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            DFW Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Service Areas Across Arlington & North Texas
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Our crews operate daily across the greater Dallas-Fort Worth metroplex.
          </p>
        </div>

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#fafaf9] border border-slate-200 shadow-sm hover:border-emerald-500/50 hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  {area.city}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dispatch Info */}
        <div className="mt-12 text-center bg-emerald-50 border border-emerald-200/80 rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-sm text-emerald-900 font-medium">
            📍 Based at <strong className="font-bold">Apt 243, 1000 W Mitchell St, Arlington, TX 76013</strong>. Don't see your specific neighborhood listed? Call <a href="tel:+13478066134" className="font-bold underline text-emerald-800 hover:text-emerald-950">+1 (347) 806-6134</a> to verify coverage.
          </p>
        </div>

      </div>
    </section>
  );
}

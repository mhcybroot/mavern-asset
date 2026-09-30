import React from 'react';
import { Scissors, Sparkles, Layers, TreePine, SunMedium, Building2, Check, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Bermuda & St. Augustine Turf Care',
      tagline: 'Precision Mowing & Seasonal Feeding',
      desc: 'Expert height-calibrated mowing, razor-sharp edging, weed suppression, and seasonal organic feeding formulated specifically for Texas turfgrass.',
      icon: Scissors,
      image: '/images/lawn_mowing_fresh.jpg',
      features: ['Height-calibrated rotary mowing', 'Clean driveway & bed edging', 'Texas weed control & fertilization', 'Cuttings blow-off & debris haul-away'],
    },
    {
      title: 'Texas Native Planting & Design',
      tagline: 'Drought-Resilient Botanical Landscapes',
      desc: 'Custom bed layouts featuring Texas Sage, Red Yucca, Black-eyed Susans, and ornamental grasses designed to flourish in summer heat with minimal water.',
      icon: TreePine,
      image: '/images/landscape_planting_fresh.jpg',
      features: ['Drought-hardy native plant selection', 'Custom flowerbed & border layouts', 'Organic soil amendment & conditioning', 'Seasonal color rotation programs'],
    },
    {
      title: 'Hardwood Mulch & Stone Installation',
      tagline: 'Soil Protection & Moisture Retention',
      desc: 'Deep double-shredded Texas hardwood mulch, dark chocolate mulch, and decorative river rock beds that retain soil moisture and prevent weed breakouts.',
      icon: Layers,
      image: '/images/mulch_bed_fresh.jpg',
      features: ['Premium shredded hardwood mulch', 'Decorative Texas river rock beds', 'Heavy-duty breathable weed barrier', 'Clean trench edge definition'],
    },
    {
      title: 'Shrub Sculpting & Tree Pruning',
      tagline: 'Hedge Shaping & Canopy Elevation',
      desc: 'Precision artistic shaping of boxwoods, crape myrtles, and Texas privets, alongside safety-focused lower limb elevation and storm clearance.',
      icon: Sparkles,
      image: '/images/hedge_trimming_fresh.jpg',
      features: ['Formal hedge & bush sculpting', 'Crape myrtle selective pruning', 'Clearance elevation over walkways', 'Complete clipping removal & disposal'],
    },
    {
      title: 'Seasonal Cleanups & Aeration',
      tagline: 'Fall Leaf Removal & Spring Revival',
      desc: 'Thorough seasonal grounds rejuvenation including core lawn aeration, deadwood removal, gutter perimeter cleanout, and seasonal bed revitalization.',
      icon: SunMedium,
      image: '/images/seasonal_cleanup_fresh.jpg',
      features: ['Deep core lawn aeration', 'Complete fall leaf removal', 'Bed overhaul & dethatching', 'Storm branch & litter cleanup'],
    },
    {
      title: 'Commercial Grounds & HOA Maintenance',
      tagline: 'Scheduled Property Portfolio Care',
      desc: 'Comprehensive turn-key landscape management for Arlington retail complexes, office parks, HOAs, and multi-family communities with itemized logs.',
      icon: Building2,
      image: '/images/commercial_grounds_fresh.jpg',
      features: ['Weekly & bi-weekly schedule contracts', 'Curb-appeal first impression care', 'Commercial irrigation monitoring', 'Dedicated property manager contact'],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Our Landscape Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Complete Texas Grounds Care & Landscape Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Dedicated solely to superior turf health, precision aesthetic trimming, and enduring Texas landscape craftsmanship in Arlington & DFW.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-[#fafaf9] rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col"
              >
                {/* Image Header */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  
                  {/* Floating Service Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md shadow text-emerald-700 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
                      {service.tagline}
                    </p>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-700 hover:text-white rounded-lg transition-colors"
                    >
                      <span>Book This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

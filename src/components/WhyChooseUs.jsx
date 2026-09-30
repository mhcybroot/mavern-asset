import React from 'react';
import { ShieldCheck, Compass, DollarSign, Clock, Leaf, Award, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Compass,
      title: 'DFW & Texas Climate Mastery',
      desc: 'Our landscape specialists understand North Texas weather extremes, heavy clay soils, and heat-tolerant lawn care strategies.',
    },
    {
      icon: Award,
      title: 'Precision Commercial Equipment',
      desc: 'We operate regularly sharpened commercial rotary mowers and dual-line trimmers that leave clean, crisp cuts without tearing grass blades.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Upfront Quotes',
      desc: 'No hidden charges or surprise surcharges. We provide clear, itemized digital estimates with upfront pricing before starting any job.',
    },
    {
      icon: Clock,
      title: 'Reliable Scheduled Dispatch',
      desc: 'Consistent service days and on-time arrival. You can count on our Arlington crew arriving when scheduled, rain or shine.',
    },
    {
      icon: Leaf,
      title: 'Eco-Safe Organic Practices',
      desc: 'Carefully chosen organic fertilizers and targeted weed management that keep your children and pets safe while promoting rich root growth.',
    },
    {
      icon: ShieldCheck,
      title: '100% Satisfaction Guarantee',
      desc: 'If any portion of your lawn or landscape does not meet your high standards, our crew will return and rectify it free of charge.',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#fafaf9] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            The Mavern Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Arlington Property Owners Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Professional excellence, local Texas dependability, and exceptional outdoor curb appeal on every project.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Local Banner Callout */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white p-8 md:p-10 border border-emerald-800/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle className="w-4 h-4" />
              <span>Arlington, TX Crew Ready for Dispatch</span>
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight">
              Need Seasonal Cleanup or Weekly Mowing?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Get an accurate, free quote within 24 hours. Serving residential properties, HOAs, and commercial grounds across Arlington and DFW.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md"
            >
              Get Instant Estimate
            </a>
            <a
              href="tel:+13478066134"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold rounded-xl text-sm transition-all"
            >
              Call (347) 806-6134
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

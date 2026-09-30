import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Marcus H.',
      role: 'Homeowner in Arlington, TX',
      review:
        'Mavern Asset Management completely turned around our Bermuda turf. Their team is always on time, polite, and leaves the driveway completely blown clean. Highly recommend their bi-weekly mowing service!',
      rating: 5,
    },
    {
      name: 'Elena R.',
      role: 'Commercial Facility Director, Mansfield',
      review:
        'We contracted Mavern for our 3-acre commercial office park grounds. From mulch replenishment to shrub pruning and spring aeration, their attention to detail and proactive communication have been top notch.',
      rating: 5,
    },
    {
      name: 'Derrick T.',
      role: 'HOA Board Member, Grand Prairie',
      review:
        'Their native Texas planting design held up brilliantly throughout the summer heat. The itemized pricing and prompt responses to emails make them a pleasure to work with.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#fafaf9] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            Verified Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our Texas Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real feedback from residential property owners, HOAs, and commercial managers across Arlington.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-emerald-600/30" />
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

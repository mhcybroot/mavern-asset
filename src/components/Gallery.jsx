import React, { useState } from 'react';
import { Sparkles, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'turf', name: 'Turf Care' },
    { id: 'planting', name: 'Native Planting' },
    { id: 'mulch', name: 'Mulch & Stone' },
    { id: 'shrub', name: 'Hedge Sculpting' },
    { id: 'commercial', name: 'Commercial Grounds' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Precision Bermuda Turf Overhaul',
      category: 'turf',
      location: 'Arlington, TX',
      image: '/images/gallery_lawn1.jpg',
    },
    {
      id: 2,
      title: 'Texas Drought-Tolerant Native Bed',
      category: 'planting',
      location: 'Grand Prairie, TX',
      image: '/images/gallery_cleanup.jpg',
    },
    {
      id: 3,
      title: 'Triple-Shredded Hardwood Mulch Beds',
      category: 'mulch',
      location: 'Mansfield, TX',
      image: '/images/gallery_mulch.jpg',
    },
    {
      id: 4,
      title: 'Boxwood & Crape Myrtle Pruning',
      category: 'shrub',
      location: 'Fort Worth, TX',
      image: '/images/gallery_shrub.jpg',
    },
    {
      id: 5,
      title: 'Corporate Campus Grounds Preservation',
      category: 'commercial',
      location: 'Arlington, TX',
      image: '/images/gallery_commercial.jpg',
    },
    {
      id: 6,
      title: 'St. Augustine Striped Lawn Maintenance',
      category: 'turf',
      location: 'Euless, TX',
      image: '/images/gallery_lawn2.jpg',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#fafaf9] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Our Work Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Recent Landscaping Projects Across DFW
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Explore authentic transformations delivered by our Arlington grounds crew.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  {item.location}
                </span>
                <h3 className="text-base font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

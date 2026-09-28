import React, { useState, useRef, useCallback } from "react";
import { SectionHeader } from "../common/SectionHeader";
import { Sparkles, ArrowLeftRight, CheckCircle2, AlertTriangle } from "lucide-react";

interface ShowcasePair {
  readonly id: string;
  readonly label: string;
  readonly beforeImg: string;
  readonly afterImg: string;
  readonly description: string;
}

const SHOWCASE_PAIRS: ShowcasePair[] = [
  {
    id: "exterior",
    label: "Exterior & Yard Turn",
    beforeImg: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=85",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    description: "Full exterior overhaul: tall grass cut, roof debris cleared, pressure washed, and lockbox installed.",
  },
  {
    id: "interior",
    label: "Interior Turn & Staging",
    beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    afterImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    description: "Heavy trash-out, deep carpet sanitization, drywall patch, fresh paint, and turnkey handover.",
  },
];

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePair = SHOWCASE_PAIRS[activeTab];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons === 1 || e.pointerType === "touch") {
      updatePosition(e.clientX);
    }
  };

  return (
    <section className="py-20 text-white border-b border-purple-500/15 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <img
          src="/assets/cosmic/layered-mist-mountains.jpg"
          alt="Layered Mist Mountains"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090217]/90 via-[#090217]/40 to-[#090217]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Transformation Showcase"
          title="Distressed to Market-Ready in 48-72 Hours"
          subtitle="Drag the interactive slider horizontally to witness how MAVERN brings distressed REO assets into pristine compliance."
        />

        {/* Tab Selection */}
        <div className="flex justify-center gap-3 mb-8">
          {SHOWCASE_PAIRS.map((pair, idx) => (
            <button
              key={pair.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === idx
                  ? "bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-lg shadow-amber-500/20"
                  : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-700/50"
              }`}
            >
              {pair.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onPointerMove={handlePointerMove}
            onPointerDown={(e) => updatePosition(e.clientX)}
            className="relative h-[340px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.25)] border border-[#D4AF37]/30 select-none bg-[#0e0427] cursor-ew-resize touch-none"
          >
            {/* AFTER Image (Full background layer) */}
            <img
              src={activePair.afterImg}
              alt="After Preservation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-400/40 shadow-lg flex items-center gap-1.5 z-10 pointer-events-none">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>AFTER (MAVERN Standard)</span>
            </div>

            {/* BEFORE Image (Clipped layer - anchored to full parent size with 0 distortion) */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={activePair.beforeImg}
                alt="Before Preservation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-rose-700/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-rose-400/40 shadow-lg flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>BEFORE (Distressed Asset)</span>
              </div>
            </div>

            {/* Vertical Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-white to-amber-500 shadow-[0_0_15px_#D4AF37] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0A1128] text-white flex items-center justify-center shadow-xl border-2 border-[#D4AF37]">
                <ArrowLeftRight className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{activePair.description}</span>
            </div>
            <div className="text-amber-400 font-semibold italic">
              Slide left / right to compare ({Math.round(sliderPosition)}%)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

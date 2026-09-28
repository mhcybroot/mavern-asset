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
    description: "Full exterior overhaul: tall grass cut, debris cleared, pressure washed, and lockbox installed.",
  },
  {
    id: "interior",
    label: "Interior Turn & Staging",
    beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    afterImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    description: "Heavy trash-out, deep carpet cleaning, drywall patch, fresh paint, and turnkey handover.",
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
    <section className="py-20 bg-slate-50/80 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Light Watermark Blend Asset */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <img
          src="/assets/cosmic/layered-mist-mountains.jpg"
          alt=""
          className="w-full h-full object-cover object-center mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-transparent to-slate-50/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Transformation Showcase"
          title="Distressed to Market-Ready in 48-72 Hours"
          subtitle="Drag the interactive slider horizontally to witness how MAVERN brings distressed REO assets into pristine compliance."
        />

        <div className="flex justify-center gap-3 mb-8">
          {SHOWCASE_PAIRS.map((pair, idx) => (
            <button
              key={pair.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === idx
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
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
            className="relative h-[340px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 select-none bg-slate-100 cursor-ew-resize touch-none"
          >
            <img
              src={activePair.afterImg}
              alt="After Preservation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 z-10 pointer-events-none">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>AFTER (MAVERN Standard)</span>
            </div>

            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={activePair.beforeImg}
                alt="Before Preservation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>BEFORE (Distressed Asset)</span>
              </div>
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-md z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg border-2 border-white">
                <ArrowLeftRight className="w-4 h-4 text-amber-400" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 bg-white p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 text-slate-800 font-medium">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{activePair.description}</span>
            </div>
            <div className="text-slate-500 font-semibold italic">
              Slide left / right to compare ({Math.round(sliderPosition)}%)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

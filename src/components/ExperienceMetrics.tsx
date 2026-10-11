import React from 'react';
import { openWhatsApp } from '../utils/whatsapp';

interface ExperienceMetricsProps {
  onOpenEnrollModal?: () => void;
}

export const ExperienceMetrics: React.FC<ExperienceMetricsProps> = ({ onOpenEnrollModal }) => {
  return (
    <section id="step-by-step-course" className="snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center pt-14 pb-4 sm:pt-16 sm:pb-6 md:pt-28 md:pb-12 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#081017] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Unified 45 Days Stat & 3/4 Rotated Rear Truck Grid (Mobile & Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 md:gap-10 items-center">
          {/* Left Column: Big Yellow Stat Counter */}
          <div className="md:col-span-5 lg:col-span-4 space-y-1.5 sm:space-y-3 md:space-y-4">
            <div className="text-5xl xs:text-6xl sm:text-7xl md:text-9xl font-black tracking-tightest text-dispatch-yellow leading-none">
              45
            </div>
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Days Step-By-Step <br className="hidden xs:inline" />
              Truck Dispatch Course
            </h3>
            <p className="text-[11px] sm:text-xs md:text-sm text-dispatch-muted pt-0.5 sm:pt-1 md:pt-2 max-w-sm leading-relaxed">
              Online &amp; offline classes. Live load board practice, broker mock calls, and complete interview preparation.
            </p>
          </div>

          {/* Right Column: Rotated 3D Truck Rear Angle Visual */}
          <div className="md:col-span-7 lg:col-span-8 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[210px] xs:max-w-[250px] sm:max-w-md md:max-w-xl lg:max-w-2xl">
              <img
                src="./assets/truck-rear.svg"
                alt="3D Rear Perspective of Yellow Transport Truck"
                className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Narrative & Learn More pill button */}
        <div className="mt-3 sm:mt-6 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-2.5 sm:gap-4 md:gap-8 pt-2.5 sm:pt-4 md:pt-8 border-t border-white/5">
          <p className="max-w-xl text-[11px] sm:text-xs md:text-base text-dispatch-muted font-normal leading-relaxed">
            A dispatcher finds loads for trucks in the USA, talks to brokers, fixes the rate, and keeps all paperwork ready. It is a high-growth desk job, and many dispatchers work from India during U.S. evening or night shifts. We teach you from the absolute basics, step by step.
          </p>

          <button
            onClick={() => openWhatsApp('batch')}
            className="group flex-shrink-0 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 hover:border-dispatch-yellow hover:bg-dispatch-yellow/10 text-white hover:text-dispatch-yellow font-semibold text-xs md:text-sm tracking-wider uppercase transition-all"
          >
            <span>Ask About Next Batch</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

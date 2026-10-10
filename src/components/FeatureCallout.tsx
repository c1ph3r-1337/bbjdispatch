import React from 'react';
import { openWhatsApp } from '../utils/whatsapp';

interface FeatureCalloutProps {
  onOpenEnrollModal?: () => void;
}

export const FeatureCallout: React.FC<FeatureCalloutProps> = ({ onOpenEnrollModal }) => {
  return (
    <section id="features" className="snap-section relative z-20 min-h-screen flex flex-col justify-center py-20 md:py-28 px-6 md:px-12 lg:px-16 border-t border-white/5 bg-[#081017]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Descriptive Story & Arrow Button */}
        <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
          <p className="text-sm md:text-base text-dispatch-muted font-normal leading-relaxed">
            Every topic is taught in 3 simple steps — we explain it, we show it live, and you practise it yourself. Learn load board searching, broker negotiation scripts, calculating rate per mile (RPM), and managing critical paperwork like BOLs and PODs. No experience needed.
          </p>

          <div>
            <button
              onClick={() => openWhatsApp('batch', 'Curriculum Deep Dive')}
              className="group inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 hover:border-dispatch-yellow hover:bg-dispatch-yellow/10 transition-all duration-300"
              aria-label="Learn more about our dispatch programs"
            >
              <span className="text-xl text-white group-hover:text-dispatch-yellow group-hover:translate-x-1 transition-all">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: High-Impact Typography with Yellow Highlight Badge */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest leading-[1.1] text-white">
            Dispatch Training For Beginners To{' '}
            <span className="inline-block bg-dispatch-yellow text-dispatch-bg px-3 py-0.5 rounded-md font-black shadow-md shadow-dispatch-yellow/20">
              Master
            </span>{' '}
            Any Freight Challenge
          </h2>
        </div>
      </div>
    </section>
  );
};

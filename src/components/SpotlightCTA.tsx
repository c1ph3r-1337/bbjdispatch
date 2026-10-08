import React from 'react';
import { openWhatsApp } from '../utils/whatsapp';

interface SpotlightCTAProps {
  onOpenEnrollModal?: () => void;
}

export const SpotlightCTA: React.FC<SpotlightCTAProps> = ({ onOpenEnrollModal }) => {
  return (
    <section className="relative z-20 py-24 md:py-36 bg-[#081017] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center">
        {/* Top Header with Tilted CTA Badge */}
        <div className="relative text-center mb-8 md:mb-12">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest leading-tight text-white">
            Attend A Free Demo <br />
            <span className="text-dispatch-yellow">Class First</span>
          </h3>

          {/* Tilted Floating 'Free Demo' Circular Badge */}
          <button
            onClick={() => openWhatsApp('demo')}
            className="absolute -top-3 -right-6 sm:-right-16 md:-right-24 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase rotate-12 hover:rotate-0 transition-transform duration-300 shadow-xl shadow-dispatch-yellow/20 flex items-center justify-center text-center p-2 leading-tight"
          >
            Free<br />Demo
          </button>
        </div>

        {/* 3D Yellow Container Visual with Foreground Typography */}
        <div className="relative w-full max-w-4xl flex flex-col items-center justify-center mt-4">
          <div className="relative z-10 w-full flex justify-center">
            <img
              src="./assets/container.svg"
              alt="3D Heavy Yellow Shipping Cargo Container"
              className="w-full h-auto max-w-[620px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Bottom Bold Text Layered Over Container Base */}
          <div className="relative -mt-16 xs:-mt-20 sm:-mt-20 md:-mt-24 z-20 pointer-events-none select-none text-center w-full px-2">
            <span className="text-[13vw] xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tightest text-white/95 select-none whitespace-nowrap block drop-shadow-md">
              Dispatching
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { openWhatsApp } from '../utils/whatsapp';

interface SpotlightCTAProps {
  isActive?: boolean;
  onOpenEnrollModal?: () => void;
}

export const SpotlightCTA: React.FC<SpotlightCTAProps> = ({ isActive, onOpenEnrollModal }) => {
  return (
    <section id="spotlight" className={`snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center pt-20 pb-4 sm:pt-24 sm:pb-8 md:pt-28 md:pb-12 bg-[#081017] overflow-hidden ${isActive ? 'section-active' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center">
        {/* Top Header with Tilted CTA Badge */}
        <div className="relative inline-block text-center mb-8 md:mb-12">
          <h3 className="reveal-item delay-1 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest leading-tight text-white px-2">
            Attend A ₹49 Dem
            <span className="relative inline-block">
              o
              {/* Floating 'BOOK DEMO' Circular Badge placed high above while overlapping top-right of 'o' */}
              <button
                type="button"
                onClick={() => openWhatsApp('demo')}
                className="reveal-scale delay-2 absolute -top-[45%] xs:-top-[50%] sm:-top-[55%] md:-top-[60%] left-[45%] sm:left-[48%] md:left-[50%] w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-[10px] xs:text-[11px] sm:text-xs md:text-sm tracking-wider uppercase transition-transform duration-300 hover:scale-105 shadow-[0_10px_25px_rgba(251,194,30,0.35)] flex items-center justify-center text-center p-1.5 sm:p-2 leading-tight cursor-pointer z-30"
                aria-label="Book Demo Class"
              >
                BOOK<br />DEMO
              </button>
            </span>
            <br />
            <span className="text-dispatch-yellow">Class First</span>
          </h3>
        </div>

        {/* 3D Yellow Container Visual with Foreground Typography */}
        <div className="relative w-full max-w-4xl flex flex-col items-center justify-center mt-4">
          <div className="reveal-scale delay-3 relative z-10 w-full flex justify-center">
            <img
              src="./assets/container.svg"
              alt="3D Heavy Yellow Shipping Cargo Container"
              className="w-full h-auto max-w-[620px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Bottom Bold Text Layered Over Container Base */}
          <div className="reveal-item delay-4 relative -mt-16 xs:-mt-20 sm:-mt-20 md:-mt-24 z-20 pointer-events-none select-none text-center w-full px-2">
            <span className="text-[13vw] xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tightest text-white/95 select-none whitespace-nowrap block drop-shadow-md">
              Dispatching
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

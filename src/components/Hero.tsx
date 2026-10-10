import React, { useState, useEffect, useRef } from 'react';
import { RadarBackground } from './RadarBackground';
import { RotateCcw, Truck } from 'lucide-react';
import { SlideToActionButton } from './mobile/SlideToActionButton';
import { openWhatsApp } from '../utils/whatsapp';

interface HeroProps {
  onOpenEnrollModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollModal }) => {
  const [animKey, setAnimKey] = useState(0);
  const truckWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let rafId: number;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(() => {
          ticking = false;
          if (truckWrapperRef.current) {
            // Silky-smooth upward parallax on GPU layer (60fps/120fps synchronized)
            const y = Math.min(window.scrollY * -0.15, 0);
            truckWrapperRef.current.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleReplay = () => {
    setAnimKey((prev) => prev + 1);
  };

  return (
    <section id="hero" className="snap-section relative min-h-screen flex flex-col justify-center pt-24 md:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Polar Radar Vector in upper right */}
      <RadarBackground />

      {/* Hero Content Grid */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 pt-4 md:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-start">
          {/* Main Headline with Staggered Slide-In */}
          <div key={`headline-${animKey}`} className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tightest leading-[1.04] text-white">
              <span className="inline-block animate-headline-1">
                Dispatch <span className="text-dispatch-yellow">solutions</span>
              </span>
              <br />
              <span className="inline-block animate-headline-2">
                for your business
              </span>
            </h1>
          </div>

          {/* Subtitle on the right */}
          <div key={`sub-${animKey}`} className="lg:col-span-4 lg:pt-4 animate-headline-sub">
            <p className="text-xs sm:text-sm md:text-base text-dispatch-muted font-normal leading-relaxed max-w-sm">
              Learn U.S. truck dispatch in 45 days. Master load boards, broker negotiation, rate confirmations, and paperwork. Online &amp; offline classes with live mock calls and interview prep.
            </p>
            <div className="mt-4 md:mt-6 hidden md:flex items-center gap-4">
              <button
                onClick={() => openWhatsApp('demo')}
                className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider text-dispatch-yellow hover:text-white transition-colors uppercase"
              >
                <span>Book Free Demo Class</span>
                <span className="w-6 h-6 rounded-full border border-dispatch-yellow/40 group-hover:border-white group-hover:translate-x-1 flex items-center justify-center transition-all">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Central Visual Showcase: 3D Yellow Freight Truck with Entrance Animation */}
      <div
        ref={truckWrapperRef}
        className="relative z-20 w-full mt-6 sm:mt-8 md:mt-10 flex flex-col items-center justify-center will-change-transform"
        style={{
          transform: 'translate3d(0, 0px, 0)',
        }}
      >
        {/* Giant Hollow Outlined Background Text behind the truck */}
        <div className="absolute -top-12 sm:-top-14 md:top-auto md:-bottom-12 inset-x-0 w-full flex justify-center pointer-events-none overflow-hidden select-none z-0">
          <span className="text-[18vw] sm:text-[18.5vw] md:text-[18vw] font-black uppercase tracking-wider text-stroke-dispatch opacity-80 whitespace-nowrap">
            TRAINING
          </span>
        </div>

        {/* 3D Truck Animated Driving Container */}
        <div
          key={`truck-${animKey}`}
          className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center justify-center animate-truck-drive"
        >
          <div className="animate-truck-idle relative group w-full flex justify-center">
            <img
              src="./assets/truck-side.svg"
              alt="BBJ Dispatch Commercial Freight Fleet Truck Driving In"
              className="w-full h-auto max-w-[340px] sm:max-w-[500px] md:max-w-[760px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] hover:scale-[1.01] transition-transform duration-500 cursor-pointer"
              onClick={handleReplay}
              title="Click to replay drive-in animation"
            />

            {/* Desktop Replay Pill Indicator Button */}
            <div className="hidden md:block absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handleReplay}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d1620]/90 border border-dispatch-yellow/40 text-[11px] font-bold text-dispatch-yellow tracking-wider uppercase hover:bg-dispatch-yellow hover:text-dispatch-bg transition-colors shadow-lg"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Replay Drive-In</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Tactile "Slide to Get Started >>>" Button (Mirroring User Reference Screen 1) */}
        <div className="w-full max-w-sm px-6 mt-4 sm:mt-6 mb-2 md:mb-0 md:hidden relative z-30">
          <SlideToActionButton
            label="Slide to Get Started"
            icon={<Truck className="w-5 h-5 text-dispatch-bg fill-dispatch-bg" />}
            onComplete={() => {
              const el = document.getElementById('step-by-step-course');
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 60;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            showBackArrow={false}
          />
        </div>
      </div>
    </section>
  );
};

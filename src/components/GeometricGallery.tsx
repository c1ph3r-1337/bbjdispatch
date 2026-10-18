import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface GeometricGalleryProps {
  isActive?: boolean;
  onOpenEnrollModal?: (topic?: string) => void;
}

export const GeometricGallery: React.FC<GeometricGalleryProps> = ({ isActive }) => {
  const galleryItems = [
    {
      id: 1,
      title: 'Freight brokerage',
      subtitle: 'Live broker calls, shipper contracts & commission negotiation',
      image: './assets/skill-broker-negotiation.png',
    },
    {
      id: 2,
      title: 'Truck Dispatch',
      subtitle: 'DAT One & Truckstop load board sourcing, carrier coordination',
      image: './assets/skill-load-board.png',
    },
    {
      id: 3,
      title: 'Dispatch course',
      subtitle: '45-Day full practical dispatch masterclass & career prep',
      image: './assets/skill-interview-prep.png',
    },
    {
      id: 4,
      title: 'Logging and Tracking course',
      subtitle: 'ELD compliance, GPS tracking, hours of service & check calls',
      image: './assets/skill-booking-papers.png',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically shifts highlight & border from card to card until user hovers
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isPaused, galleryItems.length]);

  return (
    <section id="gallery" className={`snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center pt-20 pb-4 sm:pt-24 sm:pb-8 md:pt-28 md:pb-12 bg-[#081017] overflow-hidden ${isActive ? 'section-active' : ''}`}>
      {/* Giant Hollow Outlined Display Typography behind the cards */}
      <div className="reveal-item delay-2 absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none z-0">
        <span className="text-[17vw] font-black uppercase tracking-wider text-stroke-dispatch opacity-70 whitespace-nowrap">
          TRAINING
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-4 sm:mb-6 md:mb-10 text-center flex flex-col items-center">
          <p className="reveal-item delay-1 text-dispatch-yellow text-xs font-mono tracking-widest uppercase mb-1 sm:mb-2">
            // What You'll Learn • 45-Day Syllabus
          </p>
          <h3 className="reveal-item delay-2 text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Practical Skills Taught Step-By-Step With Live Practice
          </h3>

          {/* Clean Aligned Prompt: Text + Arrow (No outer pill box) */}
          <div className="reveal-item delay-2 flex items-center justify-center gap-1.5 text-dispatch-yellow text-xs sm:text-sm font-semibold tracking-wide mt-2.5 mb-1 sm:mb-2">
            <span>Click any of them to know more</span>
            <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] animate-bounce shrink-0" />
          </div>
        </div>

        {/* 4 Sleek Modern Cards (rounded-2xl) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-8 items-center justify-items-center">
          {galleryItems.map((item, idx) => {
            const isCurrent = activeIndex === idx;

            return (
              <div
                key={item.id}
                onClick={() => openWhatsApp('batch', item.title)}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setActiveIndex(idx);
                }}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => {
                  setIsPaused(true);
                  setActiveIndex(idx);
                }}
                className={`reveal-scale delay-${idx + 3} group relative cursor-pointer w-full max-w-[160px] xs:max-w-[175px] sm:max-w-[200px] md:max-w-[220px] aspect-[1/1.32] sm:aspect-[1/1.38] md:aspect-[1/1.42] flex flex-col items-center justify-center transition-all duration-500 ease-out ${
                  isCurrent ? '-translate-y-2 scale-[1.03]' : 'hover:-translate-y-1'
                }`}
              >
                {/* Modern Card Container with rounded-2xl */}
                <div
                  className={`w-full h-full overflow-hidden transition-all duration-500 rounded-2xl bg-[#0d1620] relative flex flex-col items-center justify-end p-3 sm:p-4 md:p-5 text-center ${
                    isCurrent
                      ? 'border-2 border-dispatch-yellow ring-2 ring-dispatch-yellow/40 shadow-[0_0_30px_rgba(251,194,30,0.45)]'
                      : 'border border-white/10 group-hover:border-dispatch-yellow/70 shadow-2xl shadow-black/80'
                  }`}
                >
                  {/* Background Artwork: high opacity and vibrant on selected/hover */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                      isCurrent
                        ? 'scale-110 opacity-100 brightness-110'
                        : 'opacity-70 group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-110'
                    }`}
                    loading="lazy"
                  />

                  {/* Dark Black Layer: Disappears completely (opacity-0) when selected or hovered */}
                  <div
                    className={`absolute inset-0 bg-[#081017]/85 transition-opacity duration-500 z-10 pointer-events-none ${
                      isCurrent ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                    }`}
                  />

                  {/* Natural Bottom Gradient specifically for Text Readability */}
                  <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-15 pointer-events-none" />

                  {/* Foreground Card Content — Grounded at Bottom */}
                  <div className="relative z-20 flex flex-col items-center justify-end w-full px-1">
                    <h4
                      className={`text-xs xs:text-[13px] sm:text-sm md:text-base font-bold mb-1 leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,1)] transition-colors duration-300 ${
                        isCurrent ? 'text-dispatch-yellow' : 'text-white group-hover:text-dispatch-yellow'
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[8.5px] xs:text-[9.5px] sm:text-[10px] md:text-[11px] text-white/90 leading-relaxed font-mono drop-shadow-[0_1px_3px_rgba(0,0,0,1)] line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GeometricGallery;

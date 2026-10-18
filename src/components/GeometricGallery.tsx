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

  // Automatically shifts highlight & border from shape to shape until user hovers
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

          {/* Prompt: Click any of them to know more with pointing arrow */}
          <div className="reveal-item delay-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-dispatch-yellow/10 border border-dispatch-yellow/30 text-dispatch-yellow text-xs sm:text-sm font-semibold tracking-wide mt-3 mb-1">
            <span>Click any of them to know more</span>
            <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] animate-bounce" />
          </div>
        </div>

        {/* 4 Geometric Cutout Gallery Cards (All in uniform rounded-full vertical stadium shape) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-5 md:gap-8 items-center justify-items-center">
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
                className={`reveal-scale delay-${idx + 3} group relative cursor-pointer w-full max-w-[155px] xs:max-w-[170px] sm:max-w-[190px] md:max-w-[210px] aspect-[1/1.38] sm:aspect-[1/1.45] md:aspect-[1/1.5] flex flex-col items-center justify-center transition-all duration-500 ease-out ${
                  isCurrent ? '-translate-y-2.5 scale-[1.03]' : 'hover:-translate-y-1'
                }`}
              >
                {/* Geometric Shaped Card Container (all in rounded-full vertical stadium shape) */}
                <div
                  className={`w-full h-full overflow-hidden transition-all duration-500 rounded-full bg-[#0d1620] relative flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 text-center ${
                    isCurrent
                      ? 'border-2 border-dispatch-yellow ring-2 ring-dispatch-yellow/40 shadow-[0_0_30px_rgba(251,194,30,0.45)]'
                      : 'border border-white/10 group-hover:border-dispatch-yellow/70 shadow-2xl shadow-black/80'
                  }`}
                >
                  {/* Background Skill Artwork with Geometric Clipping */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
                      isCurrent ? 'scale-110' : 'group-hover:scale-110'
                    }`}
                    loading="lazy"
                  />

                  {/* Dark Gradient Scrim Overlay for Contrast & Text Legibility */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#081017]/95 via-[#081017]/80 to-[#081017]/50 z-10 transition-opacity duration-300 ${
                      isCurrent ? 'via-[#081017]/65' : 'group-hover:via-[#081017]/65'
                    }`}
                  />

                  {/* Foreground Card Content — Centered */}
                  <div className="relative z-20 flex flex-col items-center justify-center w-full px-1 sm:px-2">
                    <h4
                      className={`text-xs xs:text-[13px] sm:text-sm md:text-base font-bold mb-1 sm:mb-1.5 leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] transition-colors duration-300 ${
                        isCurrent ? 'text-dispatch-yellow' : 'text-white group-hover:text-dispatch-yellow'
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[8.5px] xs:text-[9.5px] sm:text-[10px] md:text-[11px] text-white/85 leading-relaxed font-mono drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] line-clamp-3">
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

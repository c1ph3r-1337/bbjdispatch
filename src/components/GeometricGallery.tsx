import React from 'react';
import { Search, PhoneCall, FileCheck, Briefcase } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface GeometricGalleryProps {
  onOpenEnrollModal?: (topic?: string) => void;
}

export const GeometricGallery: React.FC<GeometricGalleryProps> = () => {
  const galleryItems = [
    {
      id: 1,
      icon: Search,
      title: 'Load Board Sourcing',
      subtitle: 'DAT One & Truckstop search, filtering & load selection',
      image: './assets/skill-load-board.png',
      shapeClass: 'rounded-[50px] md:rounded-[70px]', // Clover capsule representation
    },
    {
      id: 2,
      icon: PhoneCall,
      title: 'Broker Negotiation',
      subtitle: 'Live broker calls, scripts & rate per mile calculations',
      image: './assets/skill-broker-negotiation.png',
      shapeClass: 'rounded-full', // Perfect vertical oval
    },
    {
      id: 3,
      icon: FileCheck,
      title: 'Booking & Papers',
      subtitle: 'Rate confirmations, BOLs, PODs & driver load coordination',
      image: './assets/skill-booking-papers.png',
      shapeClass: 'rounded-t-[100px] rounded-b-xl', // Architectural archway
    },
    {
      id: 4,
      icon: Briefcase,
      title: 'Job & Interview Prep',
      subtitle: 'Resume building, mock interviews & placement guidance',
      image: './assets/skill-interview-prep.png',
      shapeClass: 'rounded-[50px] md:rounded-[70px]', // Figure-8 capsule
    },
  ];

  return (
    <section id="gallery" className="snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center pt-20 pb-4 sm:pt-24 sm:pb-8 md:pt-28 md:pb-12 bg-[#081017] overflow-hidden">
      {/* Giant Hollow Outlined Display Typography behind the cards */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none z-0">
        <span className="text-[17vw] font-black uppercase tracking-wider text-stroke-dispatch opacity-70 whitespace-nowrap">
          TRAINING
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-4 sm:mb-6 md:mb-14 text-center">
          <p className="text-dispatch-yellow text-xs font-mono tracking-widest uppercase mb-1 sm:mb-2">
            // What You'll Learn • 45-Day Syllabus
          </p>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Practical Skills Taught Step-By-Step With Live Practice
          </h3>
        </div>

        {/* 4 Geometric Cutout Gallery Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-5 md:gap-8 items-center justify-items-center">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openWhatsApp('batch', item.title)}
              className="group relative cursor-pointer w-full max-w-[155px] xs:max-w-[170px] sm:max-w-[190px] md:max-w-[210px] aspect-[1/1.38] sm:aspect-[1/1.45] md:aspect-[1/1.5] flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Geometric Shaped Card Container */}
              <div
                className={`w-full h-full overflow-hidden border border-white/10 group-hover:border-dispatch-yellow/70 transition-all duration-300 shadow-2xl shadow-black/80 bg-[#0d1620] relative flex flex-col items-center justify-end p-2.5 pb-3.5 sm:p-3.5 sm:pb-5 md:p-4 md:pb-6 text-center ${item.shapeClass}`}
              >
                {/* Background Skill Artwork with Geometric Clipping */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Gradient Scrim Overlay for Contrast & Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081017]/95 via-[#081017]/65 to-[#081017]/30 z-10 transition-opacity duration-300 group-hover:via-[#081017]/50" />

                {/* Foreground Card Content */}
                <div className="relative z-20 flex flex-col items-center justify-center w-full">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-[#081017]/85 border border-dispatch-yellow/40 backdrop-blur-md flex items-center justify-center mb-1.5 sm:mb-2 md:mb-2.5 group-hover:scale-110 group-hover:border-dispatch-yellow group-hover:bg-dispatch-yellow/20 transition-all shadow-lg shadow-black/60">
                    <item.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-dispatch-yellow" />
                  </div>
                  <h4 className="text-[11.5px] xs:text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1.5 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {item.title}
                  </h4>
                  <p className="text-[8.5px] xs:text-[9.5px] sm:text-[10px] md:text-[11px] text-white/80 leading-snug font-mono drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] px-0.5 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Hover Badge Description */}
              <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 group-hover:-bottom-6 transition-all duration-300 pointer-events-none text-center w-full px-2 z-30">
                <span className="inline-block bg-[#0d1620]/95 backdrop-blur-md border border-dispatch-yellow/60 px-3 py-1 rounded-full text-[11px] font-bold text-dispatch-yellow shadow-lg shadow-black/80">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeometricGallery;

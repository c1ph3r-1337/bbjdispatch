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
      shapeClass: 'rounded-[50px] md:rounded-[70px]', // Clover capsule representation
    },
    {
      id: 2,
      icon: PhoneCall,
      title: 'Broker Negotiation',
      subtitle: 'Live broker calls, scripts & rate per mile calculations',
      shapeClass: 'rounded-full', // Perfect vertical oval
    },
    {
      id: 3,
      icon: FileCheck,
      title: 'Booking & Papers',
      subtitle: 'Rate confirmations, BOLs, PODs & driver load coordination',
      shapeClass: 'rounded-t-[100px] rounded-b-xl', // Architectural archway
    },
    {
      id: 4,
      icon: Briefcase,
      title: 'Job & Interview Prep',
      subtitle: 'Resume building, mock interviews & placement guidance',
      shapeClass: 'rounded-[50px] md:rounded-[70px]', // Figure-8 capsule
    },
  ];

  return (
    <section id="gallery" className="snap-section relative z-20 min-h-[100dvh] flex flex-col justify-center pt-16 sm:pt-20 md:pt-28 pb-8 sm:pb-12 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#081017] overflow-hidden">
      {/* Giant Hollow Outlined Display Typography behind the cards */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none z-0">
        <span className="text-[17vw] font-black uppercase tracking-wider text-stroke-dispatch opacity-70 whitespace-nowrap">
          TRAINING
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-2 sm:px-6 md:px-12 lg:px-16 my-auto">
        {/* Section Header */}
        <div className="mb-4 sm:mb-6 md:mb-14 text-center">
          <p className="text-dispatch-yellow text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-1 sm:mb-2">
            // What You'll Learn • 45-Day Syllabus
          </p>
          <h3 className="text-lg sm:text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Practical Skills Taught Step-By-Step With Live Practice
          </h3>
        </div>

        {/* 4 Geometric Cutout Gallery Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-8 items-center justify-items-center">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openWhatsApp('batch', item.title)}
              className="group relative cursor-pointer w-full max-w-[160px] sm:max-w-[190px] md:max-w-[210px] h-32 sm:h-36 md:h-auto md:aspect-[1/1.5] flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 md:hover:-translate-y-2"
            >
              {/* Geometric Shaped Card Container */}
              <div
                className={`w-full h-full overflow-hidden border border-white/10 group-hover:border-dispatch-yellow/60 transition-all duration-300 shadow-2xl shadow-black/80 bg-[#0d1620] relative flex flex-col items-center justify-center p-2.5 sm:p-3 md:p-5 text-center ${item.shapeClass}`}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-dispatch-yellow/10 border border-dispatch-yellow/30 flex items-center justify-center mb-1.5 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-dispatch-yellow" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[9px] sm:text-[10px] md:text-[11px] text-white/50 leading-tight font-mono line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              {/* Hover Badge Description */}
              <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 group-hover:-bottom-6 transition-all duration-300 pointer-events-none text-center w-full px-2">
                <span className="inline-block bg-[#0d1620]/95 backdrop-blur-md border border-dispatch-yellow/40 px-3 py-1 rounded-full text-[11px] font-bold text-dispatch-yellow shadow-lg shadow-black/50">
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

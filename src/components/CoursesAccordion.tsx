import React, { useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

interface CoursesAccordionProps {
  onOpenEnrollModal?: (courseName: string) => void;
}

export const CoursesAccordion: React.FC<CoursesAccordionProps> = ({ onOpenEnrollModal }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const courses = [
    {
      id: '01',
      subtitle: 'Days 1–10: What is Dispatching, U.S. Trucking Foundations, Trailer Types & Industry Terms',
      title: 'Basics & Equipment Types',
      thumb: './assets/container.svg',
      thumbAlt: '3D Yellow Container Thumbnail',
      thumbSize: 'w-16 h-10',
    },
    {
      id: '02',
      subtitle: 'Days 11–22: Using DAT One & Truckstop, Checking Loads, Calling Brokers & Practice Calls',
      title: 'Finding Loads & Broker Calls',
      thumb: './assets/truck-side.svg',
      thumbAlt: '3D Yellow Fleet Truck Thumbnail',
      thumbSize: 'w-20 h-10',
    },
    {
      id: '03',
      subtitle: 'Days 23–45: Rate Negotiation, Rate Cons, BOLs, Route Planning & Mock Interview Prep',
      title: 'Booking, Papers & Job Prep',
      thumb: './assets/truck-rear.svg',
      thumbAlt: '3D Yellow Truck Rear Thumbnail',
      thumbSize: 'w-16 h-12',
    },
  ];

  return (
    <section id="courses" className="snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center items-center py-6 sm:py-8 md:py-14 lg:py-0 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#081017]">
      <div className="max-w-5xl lg:max-w-6xl mx-auto w-full">
        {/* Tilted Yellow Circular Badge */}
        <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-8">
          <div className="relative group cursor-pointer">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-dispatch-yellow flex items-center justify-center -rotate-12 transform group-hover:rotate-0 transition-transform duration-300 shadow-xl shadow-dispatch-yellow/20">
              <span className="text-dispatch-bg font-extrabold text-[10px] sm:text-[11px] md:text-xs lg:text-sm tracking-wider uppercase">
                Courses
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Course Rows */}
        <div className="border-t border-white/15">
          {courses.map((course, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={course.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openWhatsApp('batch', course.title)}
                className={`group cursor-pointer relative py-3.5 sm:py-4 md:py-6 lg:py-6 border-b transition-colors duration-300 ${
                  isHovered ? 'border-dispatch-yellow' : 'border-white/15'
                }`}
              >
                <div className="grid grid-cols-12 items-center gap-3 sm:gap-4 md:gap-6">
                  {/* Left: Index Number */}
                  <div className="col-span-2 sm:col-span-1">
                    <span
                      className={`text-lg sm:text-xl md:text-2xl font-bold font-mono transition-colors duration-300 ${
                        isHovered || index === 1 ? 'text-dispatch-yellow' : 'text-white/60'
                      }`}
                    >
                      {course.id}
                    </span>
                  </div>

                  {/* Center: Subtitle and Large Title */}
                  <div className="col-span-8 sm:col-span-9 md:col-span-9 flex flex-col text-left">
                    <span className="text-xs sm:text-sm text-dispatch-muted font-normal tracking-wide mb-1 transition-colors group-hover:text-white/80 line-clamp-1 sm:line-clamp-none">
                      {course.subtitle}
                    </span>
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold tracking-tightest leading-tight transition-colors duration-300 ${
                        isHovered ? 'text-dispatch-yellow' : 'text-white'
                      }`}
                    >
                      {course.title}
                    </h3>
                  </div>

                  {/* Right: Floating 3D Thumbnail & Arrow */}
                  <div className="col-span-2 sm:col-span-2 md:col-span-2 flex items-center justify-end gap-2 sm:gap-3 md:gap-5">
                    {/* Dynamic 3D Thumbnail revealing on hover */}
                    <div
                      className={`transition-all duration-300 transform ${
                        isHovered
                          ? 'opacity-100 scale-100 translate-x-0'
                          : 'opacity-0 scale-75 translate-x-4 pointer-events-none'
                      }`}
                    >
                      <img
                        src={course.thumb}
                        alt={course.thumbAlt}
                        className={`${course.thumbSize} object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]`}
                      />
                    </div>

                    {/* Arrow Indicator */}
                    <span
                      className={`text-2xl md:text-3xl transition-all duration-300 transform group-hover:translate-x-2 ${
                        isHovered ? 'text-dispatch-yellow' : 'text-white/70'
                      }`}
                    >
                      →
                    </span>
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

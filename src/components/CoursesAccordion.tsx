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
    <section id="courses" className="relative z-20 py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#081017]">
      <div className="max-w-6xl mx-auto">
        {/* Tilted Yellow Circular Badge */}
        <div className="flex justify-center mb-16 md:mb-20">
          <div className="relative group cursor-pointer">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-dispatch-yellow flex items-center justify-center -rotate-12 transform group-hover:rotate-0 transition-transform duration-300 shadow-xl shadow-dispatch-yellow/20">
              <span className="text-dispatch-bg font-extrabold text-xs md:text-sm tracking-wider uppercase">
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
                className={`group cursor-pointer relative py-8 md:py-12 border-b transition-colors duration-300 ${
                  isHovered ? 'border-dispatch-yellow' : 'border-white/15'
                }`}
              >
                <div className="grid grid-cols-12 items-center gap-4">
                  {/* Left: Index Number */}
                  <div className="col-span-2 md:col-span-1">
                    <span
                      className={`text-base md:text-xl font-bold transition-colors duration-300 ${
                        isHovered || index === 1 ? 'text-dispatch-yellow' : 'text-white/60'
                      }`}
                    >
                      {course.id}
                    </span>
                  </div>

                  {/* Center: Subtitle and Large Title */}
                  <div className="col-span-8 md:col-span-9 flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-xs md:text-sm text-dispatch-muted font-normal tracking-wide mb-1.5 transition-colors group-hover:text-white/80">
                      {course.subtitle}
                    </span>
                    <h3
                      className={`text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest transition-colors duration-300 ${
                        isHovered ? 'text-dispatch-yellow' : 'text-white'
                      }`}
                    >
                      {course.title}
                    </h3>
                  </div>

                  {/* Right: Floating 3D Thumbnail & Arrow */}
                  <div className="col-span-2 md:col-span-2 flex items-center justify-end gap-3 md:gap-5">
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
                      className={`text-2xl md:text-4xl transition-all duration-300 transform group-hover:translate-x-2 ${
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

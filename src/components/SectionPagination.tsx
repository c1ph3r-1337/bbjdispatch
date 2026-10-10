import React, { useEffect, useState } from 'react';

export interface SectionItem {
  id: string;
  label: string;
}

export const SECTIONS: SectionItem[] = [
  { id: 'hero', label: 'Overview' },
  { id: 'features', label: 'Training Method' },
  { id: 'step-by-step-course', label: '45-Day Program' },
  { id: 'gallery', label: 'What You’ll Learn' },
  { id: 'courses', label: 'Course Modules' },
  { id: 'caller-id', label: 'Trainer Hotline & Map' },
  { id: 'reviews', label: 'Student Reviews' },
  { id: 'spotlight', label: 'Free Demo Class' },
  { id: 'contact-banners', label: 'Admissions & Syllabus' },
  { id: 'footer', label: 'Campus & Directory' },
];

interface SectionPaginationProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
}

export const SectionPagination: React.FC<SectionPaginationProps> = ({
  activeSection,
  onSelectSection,
}) => {
  return (
    <nav
      aria-label="Section Navigation"
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 bg-[#081017]/60 backdrop-blur-md border border-white/10 px-2 py-3.5 rounded-full shadow-2xl shadow-black/80"
    >
      {SECTIONS.map((section, index) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() => onSelectSection(section.id)}
            className="group relative flex items-center justify-center p-1.5 focus:outline-none"
            aria-label={`Jump to ${section.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            {/* Tooltip on hover */}
            <span className="pointer-events-none absolute right-full mr-3.5 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#0d1620] border border-white/10 text-[11px] font-semibold text-white shadow-xl shadow-black/80 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              <span className="text-dispatch-yellow font-mono mr-1.5">{String(index + 1).padStart(2, '0')}.</span>
              {section.label}
            </span>

            {/* Indicator Dot */}
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2.5 h-6 bg-dispatch-yellow shadow-md shadow-dispatch-yellow/40 ring-2 ring-dispatch-yellow/30'
                  : 'w-2 h-2 bg-white/25 group-hover:bg-white/70 group-hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};

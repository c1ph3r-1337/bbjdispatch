import React from 'react';

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
  { id: 'spotlight', label: '₹49 Demo Class' },
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
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-1.5 pointer-events-auto select-none"
    >
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() => onSelectSection(section.id)}
            className="group relative flex items-center justify-center w-6 h-7 focus:outline-none focus:ring-0 cursor-pointer"
            aria-label={`Jump to ${section.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            {/* Base Inactive Dot (Clean, Stable, Zero Flicker) */}
            <span
              className={`absolute w-2 h-2 rounded-full bg-white/30 transition-opacity duration-300 ease-out ${
                isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:bg-white/70'
              }`}
            />

            {/* Active Morphing Yellow Pill (Pure Smooth Expansion & Fade) */}
            <span
              className={`w-2 rounded-full bg-dispatch-yellow transition-[height,opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive
                  ? 'h-6 opacity-100 scale-100 shadow-[0_0_8px_rgba(251,194,30,0.4)]'
                  : 'h-2 opacity-0 scale-75 pointer-events-none'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};

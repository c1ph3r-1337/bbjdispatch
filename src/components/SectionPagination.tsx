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
  const activeIndex = Math.max(0, SECTIONS.findIndex((s) => s.id === activeSection));
  const DOT_PITCH = 24; // 24px vertical distance between dot centers

  return (
    <nav
      aria-label="Section Navigation"
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center pointer-events-auto select-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Hardware-Accelerated Sliding Indicator Pill */}
        <div
          className="absolute left-1/2 w-2 h-6 rounded-full bg-dispatch-yellow pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_12px_rgba(251,194,30,0.45)]"
          style={{
            transform: `translate3d(-50%, ${activeIndex * DOT_PITCH - 4}px, 0)`,
          }}
        />

        {/* Static Base Dots & Click Targets */}
        {SECTIONS.map((section, idx) => {
          const isActive = activeIndex === idx;

          return (
            <button
              key={section.id}
              onClick={() => onSelectSection(section.id)}
              className="group relative flex items-center justify-center w-6 h-6 focus:outline-none cursor-pointer"
              aria-label={`Jump to ${section.label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              {/* Resting Guide Dot */}
              <span
                className={`w-2 h-2 rounded-full transition-opacity duration-300 ${
                  isActive
                    ? 'opacity-0'
                    : 'bg-white/25 group-hover:bg-white/80 group-hover:scale-125'
                }`}
              />

              {/* Minimalist Hover Tooltip */}
              <span className="absolute right-7 px-2.5 py-1 rounded bg-[#0b1622]/95 border border-white/10 text-[11px] font-medium text-white tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-xl backdrop-blur-md">
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

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
  return (
    <nav
      aria-label="Section Navigation"
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 pointer-events-auto select-none"
    >
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() => onSelectSection(section.id)}
            className="group relative flex items-center justify-center p-1.5 focus:outline-none cursor-pointer"
            aria-label={`Jump to ${section.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            {/* Minimalist Indicator Dot Only (No Glow) */}
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2 h-6 bg-dispatch-yellow'
                  : 'w-2 h-2 bg-white/30 group-hover:bg-white/80 group-hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};

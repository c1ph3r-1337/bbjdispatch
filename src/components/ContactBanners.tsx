import React from 'react';
import { openWhatsApp } from '../utils/whatsapp';

interface ContactBannersProps {
  onOpenContactModal?: () => void;
  onOpenSyllabusModal?: () => void;
}

export const ContactBanners: React.FC<ContactBannersProps> = ({
  onOpenContactModal,
  onOpenSyllabusModal,
}) => {
  return (
    <section className="relative z-20 bg-[#081017] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Banner 1: Book Free Demo (Yellow) */}
        <div
          onClick={() => openWhatsApp('demo')}
          className="group cursor-pointer py-10 md:py-14 border-b border-dispatch-yellow/70 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:bg-dispatch-yellow/[0.03]"
        >
          <div className="md:w-1/4">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-dispatch-yellow uppercase">
              India: +91 78888 25122 • USA: +1 (559) 385-2018
            </span>
          </div>

          <div className="md:w-2/4 text-left">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tightest text-dispatch-yellow group-hover:translate-x-2 transition-transform duration-300">
              Book Free Demo
            </h2>
          </div>

          <div className="md:w-1/4 flex justify-end items-center">
            <span className="text-3xl md:text-5xl text-dispatch-yellow group-hover:translate-x-3 transition-transform duration-300">
              →
            </span>
          </div>
        </div>

        {/* Banner 2: Get Syllabus / Quote (White) */}
        <div
          onClick={() => openWhatsApp('syllabus')}
          className="group cursor-pointer py-10 md:py-14 border-b border-white/20 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:bg-white/[0.02]"
        >
          <div className="md:w-1/4">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-dispatch-muted uppercase group-hover:text-white transition-colors">
              45-Day Day-Wise Syllabus &amp; Pricing
            </span>
          </div>

          <div className="md:w-2/4 text-left">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tightest text-white group-hover:text-dispatch-yellow group-hover:translate-x-2 transition-all duration-300">
              Get Syllabus
            </h2>
          </div>

          <div className="md:w-1/4 flex justify-end items-center">
            <span className="text-3xl md:text-5xl text-white group-hover:text-dispatch-yellow group-hover:translate-x-3 transition-all duration-300">
              →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { openWhatsApp } from '../utils/whatsapp';

interface RealVsDummySectionProps {
  isActive?: boolean;
}

export const RealVsDummySection: React.FC<RealVsDummySectionProps> = ({ isActive }) => {
  return (
    <section
      id="real-vs-dummy"
      className={`snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center pt-20 pb-4 sm:pt-24 sm:pb-8 md:pt-28 md:pb-12 px-6 md:px-12 lg:px-16 border-t border-white/5 bg-[#081017] ${
        isActive ? 'section-active' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: High-Impact Typography with Yellow Highlight Badge */}
        <div className="lg:col-span-7">
          <h2 className="reveal-item delay-1 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest leading-[1.1] text-white">
            Train On Live Broker Calls While Others Teach On{' '}
            <span className="reveal-scale delay-2 inline-block bg-dispatch-yellow text-dispatch-bg px-3 py-0.5 rounded-md font-black shadow-md shadow-dispatch-yellow/20">
              Dummy
            </span>{' '}
            Simulations
          </h2>
        </div>

        {/* Right Column: Descriptive Story & Minimalist Arrow Button */}
        <div className="lg:col-span-5 space-y-8">
          <p className="reveal-item delay-3 text-sm md:text-base text-dispatch-muted font-normal leading-relaxed">
            Other institutes charge high fees to teach on obsolete simulation mockups and scripted student roleplays. At BBJ Dispatch, you train on active commercial DAT One &amp; Truckstop accounts, dialing real US freight brokers, negotiating live spot rates, and managing genuine carrier paperwork from day one.
          </p>

          <div className="reveal-scale delay-4 flex items-center gap-4">
            <button
              onClick={() => openWhatsApp('demo', 'Live Floor vs Dummy Simulations')}
              className="group inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 hover:border-dispatch-yellow hover:bg-dispatch-yellow/10 transition-all duration-300 cursor-pointer shrink-0"
              aria-label="Experience our live dispatch training"
              title="Book ₹49 Demo Class"
            >
              <span className="text-xl text-white group-hover:text-dispatch-yellow group-hover:translate-x-1 transition-all">
                →
              </span>
            </button>
            <span className="text-xs font-mono uppercase tracking-widest text-white/60">
              Experience Live Floor (₹49 Demo)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

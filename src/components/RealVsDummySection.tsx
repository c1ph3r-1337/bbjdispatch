import React from 'react';
import { Check, X } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface RealVsDummySectionProps {
  isActive?: boolean;
}

export const RealVsDummySection: React.FC<RealVsDummySectionProps> = ({ isActive }) => {
  const bbjFeatures = [
    'Live DAT One & Truckstop Pro access',
    'Direct phone calls to US freight brokers',
    'Real rate confirmations & factoring billing',
    'Live detention & TONU problem recovery',
    'Day-1 job-ready desk muscle memory',
  ];

  const dummyFeatures = [
    'Offline dummy simulation databases',
    'Scripted classroom roleplay & old audio',
    'Static PowerPoint slides & sample PDFs',
    'Zero operational crisis handling',
    'Paper certificate with zero instincts',
  ];

  return (
    <section
      id="real-vs-dummy"
      className={`snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/5 bg-[#081017] ${
        isActive ? 'section-active' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto w-full space-y-8 sm:space-y-12">
        {/* Centered Minimalist Header */}
        <div className="reveal-item delay-1 text-center space-y-2.5 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tightest text-white">
            Train On Real Freight, Not Simulations
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-dispatch-muted leading-relaxed">
            Why BBJ Dispatch students get hired while dummy simulation graduates get stuck.
          </p>
        </div>

        {/* Minimalist Side-by-Side Comparison Container */}
        <div className="reveal-item delay-2 relative bg-[#0b131c]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {/* Left Column: BBJ Dispatch Academy (Elevated, Golden Yellow Accent, Green Checkmarks) */}
          <div className="relative bg-[#101b27] border-2 border-dispatch-yellow/70 rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.85),0_0_30px_rgba(251,194,30,0.15)] flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-dispatch-yellow font-bold block mb-1">
                    100% Practical &amp; Live
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    BBJ Dispatch
                  </h3>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-dispatch-yellow animate-pulse" />
              </div>

              <ul className="space-y-3.5">
                {bbjFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-white">
                    <span className="w-5 h-5 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openWhatsApp('demo', 'Live Desk vs Dummy Simulations')}
                className="w-full py-3 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-dispatch-yellow/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Experience Live Floor (₹49 Demo)</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Other Institutes (Flat, Muted, Red Crosses) */}
          <div className="relative p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-6 opacity-75 md:opacity-85">
            <div className="space-y-5">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-semibold block mb-1">
                  Traditional Institutes
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white/70">
                  Dummy Software
                </h3>
              </div>

              <ul className="space-y-3.5">
                {dummyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-white/60">
                    <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[11px] text-white/40 leading-relaxed pt-2">
              * Simulated tools cannot prepare you for live broker market volatility or real phone pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { CallerIdCard } from './mobile/CallerIdCard';
import { openDialer } from '../utils/whatsapp';

interface MobileCallerIdSectionProps {
  onOpenConsultation?: () => void;
}

export const MobileCallerIdSection: React.FC<MobileCallerIdSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section id="caller-id" className="snap-section relative z-20 min-h-screen flex flex-col justify-center py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#081017] border-t border-white/5 overflow-hidden">
      {/* Background Subtle Radar & Grid Lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(251,194,30,0.18) 0%, transparent 70%), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tightest text-white leading-tight">
            Direct Line To Your <br />
            <span className="text-dispatch-yellow">Senior Dispatch Trainer</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-dispatch-muted leading-relaxed">
            Direct telephone lines, WhatsApp consultation, and driving directions to the Zira academy campus.
          </p>
        </div>

        {/* Minimalist 2-Column Console Layout */}
        <div className="w-full max-w-md lg:max-w-6xl">
          <CallerIdCard
            onBack={() => {
              const el = document.getElementById('courses');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onCallInitiated={onOpenConsultation || (() => openDialer('+917888825122'))}
          />
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { CallerIdCard } from './mobile/CallerIdCard';
import { DesktopCraneHotline } from './desktop/DesktopCraneHotline';
import { openDialer } from '../utils/whatsapp';

interface MobileCallerIdSectionProps {
  onOpenConsultation?: () => void;
}

export const MobileCallerIdSection: React.FC<MobileCallerIdSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section id="caller-id" className="snap-section relative z-20 min-h-screen flex flex-col justify-center pt-20 md:pt-24 pb-14 md:pb-16 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 bg-[#081017] border-t border-white/5 overflow-hidden">
      {/* Background Subtle Radar & Grid Lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(251,194,30,0.18) 0%, transparent 70%), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
        }}
      />

      {/* Desktop Presentation: Industrial Crane Lifting 3D Yellow Container & Hotline */}
      <div className="hidden lg:block relative z-10 w-full">
        <DesktopCraneHotline onOpenConsultation={onOpenConsultation} />
      </div>

      {/* Mobile Presentation: Touch-Optimized Caller ID Console with Slide-to-Call */}
      <div className="block lg:hidden relative z-10 w-full max-w-md mx-auto flex flex-col items-center">
        {/* Mobile Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tightest text-white leading-tight">
            Direct Line To Your <br />
            <span className="text-dispatch-yellow">Senior Dispatch Trainer</span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-dispatch-muted leading-relaxed">
            Direct telephone lines, WhatsApp consultation, and driving directions to the Zira academy campus.
          </p>
        </div>

        {/* Minimalist Mobile Console Layout */}
        <div className="w-full">
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

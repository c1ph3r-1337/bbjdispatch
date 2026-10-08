import React, { useState, useEffect } from 'react';
import { Home, Package, PhoneCall, UserCheck } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

interface MobileBottomDockProps {
  onOpenEnrollModal?: () => void;
}

export const MobileBottomDock: React.FC<MobileBottomDockProps> = ({ onOpenEnrollModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal dock once scrolled past the initial hero threshold
      setIsVisible(window.scrollY > 70);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-3 inset-x-0 z-40 px-4 max-w-[340px] mx-auto md:hidden select-none transition-all duration-300 ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      {/* Floating Pill Dock */}
      <div className="w-full h-14 bg-[#111923]/95 backdrop-blur-2xl border border-white/15 rounded-full px-4 flex items-center justify-between shadow-[0_12px_30px_rgba(0,0,0,0.85)]">
        {/* Home */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center justify-center text-dispatch-yellow hover:text-white transition-colors"
          aria-label="Home"
        >
          <Home className="w-4 h-4 fill-current" />
          <span className="text-[9px] font-bold tracking-tight mt-0.5">Home</span>
        </button>

        {/* Courses */}
        <button
          onClick={() => scrollTo('courses')}
          className="flex flex-col items-center justify-center text-white/70 hover:text-dispatch-yellow transition-colors"
          aria-label="Courses"
        >
          <Package className="w-4 h-4" />
          <span className="text-[9px] font-semibold tracking-tight mt-0.5">Courses</span>
        </button>

        {/* Caller ID / Hotline */}
        <button
          onClick={() => scrollTo('caller-id')}
          className="flex flex-col items-center justify-center text-white/70 hover:text-dispatch-yellow transition-colors"
          aria-label="Admissions Hotline"
        >
          <PhoneCall className="w-4 h-4" />
          <span className="text-[9px] font-semibold tracking-tight mt-0.5">Hotline</span>
        </button>

        {/* Enroll Button */}
        <button
          onClick={() => openWhatsApp('batch')}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-dispatch-yellow text-dispatch-bg font-extrabold text-[10px] uppercase tracking-wider shadow-md hover:bg-dispatch-yellowLight transition-all"
          aria-label="Enroll"
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Enroll</span>
        </button>
      </div>

      {/* iOS Home Bar Indicator */}
      <div className="w-28 h-1 bg-white/35 rounded-full mx-auto mt-2"></div>
    </div>
  );
};

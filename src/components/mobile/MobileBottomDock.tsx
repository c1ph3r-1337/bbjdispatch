import React, { useState, useEffect } from 'react';
import { Home, Package, PhoneCall, UserCheck, Compass, X } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

interface MobileBottomDockProps {
  onOpenEnrollModal?: () => void;
}

export const MobileBottomDock: React.FC<MobileBottomDockProps> = ({ onOpenEnrollModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 70);

      // Auto-collapse into circle on scroll
      if (Math.abs(currentScrollY - lastScrollY) > 8) {
        setIsCollapsed(true);
      }
      lastScrollY = currentScrollY;
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

  const handleNav = (action: () => void) => {
    action();
    setIsCollapsed(true);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Collapsed State: Floating Circle on the Bottom-Left */}
      {isCollapsed ? (
        <button
          onClick={() => setIsCollapsed(false)}
          className="fixed bottom-4 left-4 z-40 md:hidden w-12 h-12 rounded-full bg-[#0f1722]/95 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-dispatch-yellow shadow-[0_8px_25px_rgba(0,0,0,0.85)] active:scale-95 transition-all duration-200 group"
          aria-label="Open Navigation Menu"
        >
          <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-dispatch-yellow rounded-full border-2 border-[#0f1722]" />
        </button>
      ) : (
        /* Expanded State: Full Pill Navigation Dock */
        <div className="fixed bottom-4 inset-x-3 z-40 max-w-[360px] mx-auto md:hidden select-none animate-in fade-in zoom-in-95 duration-200">
          <div className="w-full h-14 bg-[#0f1722]/95 backdrop-blur-2xl border border-white/15 rounded-full px-3 flex items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.9)]">
            {/* Close Toggle */}
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Home */}
            <button
              onClick={() => handleNav(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
              className="flex flex-col items-center justify-center text-white/80 hover:text-dispatch-yellow transition-colors"
              aria-label="Home"
            >
              <Home className="w-4 h-4 fill-current" />
              <span className="text-[9px] font-bold tracking-tight mt-0.5">Home</span>
            </button>

            {/* Courses */}
            <button
              onClick={() => handleNav(() => scrollTo('courses'))}
              className="flex flex-col items-center justify-center text-white/80 hover:text-dispatch-yellow transition-colors"
              aria-label="Courses"
            >
              <Package className="w-4 h-4" />
              <span className="text-[9px] font-semibold tracking-tight mt-0.5">Courses</span>
            </button>

            {/* Caller ID / Hotline */}
            <button
              onClick={() => handleNav(() => scrollTo('caller-id'))}
              className="flex flex-col items-center justify-center text-white/80 hover:text-dispatch-yellow transition-colors"
              aria-label="Admissions Hotline"
            >
              <PhoneCall className="w-4 h-4" />
              <span className="text-[9px] font-semibold tracking-tight mt-0.5">Hotline</span>
            </button>

            {/* Enroll Button */}
            <button
              onClick={() => handleNav(onOpenEnrollModal || (() => openWhatsApp('batch')))}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-dispatch-yellow text-dispatch-bg font-extrabold text-[10px] uppercase tracking-wider shadow-md hover:bg-dispatch-yellowLight transition-all"
              aria-label="Enroll"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Enroll</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

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
    <div
      className={`fixed bottom-4 left-4 z-40 md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none bg-[#0f1722]/95 backdrop-blur-2xl border border-white/20 shadow-[0_12px_32px_rgba(0,0,0,0.9)] rounded-full ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-20 opacity-0 pointer-events-none'
      } ${
        isCollapsed
          ? 'w-12 h-12 cursor-pointer active:scale-95'
          : 'w-[calc(100vw-2rem)] max-w-[360px] h-14'
      }`}
      onClick={isCollapsed ? () => setIsCollapsed(false) : undefined}
      role={isCollapsed ? 'button' : 'navigation'}
      aria-label={isCollapsed ? 'Open Navigation Menu' : 'Mobile Navigation Menu'}
    >
      {/* Collapsed State: Compass Icon View */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
          isCollapsed
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-75 pointer-events-none'
        }`}
      >
        <Compass className="w-5 h-5 text-dispatch-yellow" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-dispatch-yellow rounded-full ring-2 ring-[#0f1722]" />
      </div>

      {/* Expanded State: Full Nav Items Row */}
      <div
        className={`w-full h-full px-3 flex items-center justify-between transition-all duration-250 ${
          isCollapsed
            ? 'opacity-0 pointer-events-none -translate-x-4'
            : 'opacity-100 pointer-events-auto translate-x-0'
        }`}
      >
        {/* Close Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsCollapsed(true);
          }}
          className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Home */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNav(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
          }}
          className="flex flex-col items-center justify-center text-white/80 hover:text-dispatch-yellow transition-colors"
          aria-label="Home"
        >
          <Home className="w-4 h-4 fill-current" />
          <span className="text-[9px] font-bold tracking-tight mt-0.5">Home</span>
        </button>

        {/* Courses */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNav(() => scrollTo('courses'));
          }}
          className="flex flex-col items-center justify-center text-white/80 hover:text-dispatch-yellow transition-colors"
          aria-label="Courses"
        >
          <Package className="w-4 h-4" />
          <span className="text-[9px] font-semibold tracking-tight mt-0.5">Courses</span>
        </button>

        {/* Caller ID / Hotline */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNav(() => scrollTo('caller-id'));
          }}
          className="flex flex-col items-center justify-center text-white/80 hover:text-dispatch-yellow transition-colors"
          aria-label="Admissions Hotline"
        >
          <PhoneCall className="w-4 h-4" />
          <span className="text-[9px] font-semibold tracking-tight mt-0.5">Hotline</span>
        </button>

        {/* Enroll Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNav(onOpenEnrollModal || (() => openWhatsApp('batch')));
          }}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-dispatch-yellow text-dispatch-bg font-extrabold text-[10px] uppercase tracking-wider shadow-md hover:bg-dispatch-yellowLight active:scale-95 transition-all"
          aria-label="Enroll"
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Enroll</span>
        </button>
      </div>
    </div>
  );
};

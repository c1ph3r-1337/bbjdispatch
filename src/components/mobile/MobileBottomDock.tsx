import React, { useState, useEffect, useRef } from 'react';
import { Home, Package, PhoneCall, UserCheck } from 'lucide-react';
import homeIcon from '../../assets/home.png';
import { openWhatsApp } from '../../utils/whatsapp';

interface MobileBottomDockProps {
  activeSection?: string;
  onNavigate?: (id: string) => void;
  onOpenEnrollModal?: () => void;
}

export const MobileBottomDock: React.FC<MobileBottomDockProps> = ({
  activeSection = 'hero',
  onNavigate,
  onOpenEnrollModal,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const suppressCollapseUntilRef = useRef<number>(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const past = currentScrollY > 150;
      setIsPastHero((prev) => (prev !== past ? past : prev));

      if (Date.now() < suppressCollapseUntilRef.current) {
        lastScrollY = currentScrollY;
        return;
      }

      // Auto-collapse into circle on scroll
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setIsCollapsed(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleNav = (action: () => void) => {
    action();
    setIsCollapsed(true);
  };

  const currentSection = activeSection || 'hero';
  const isFirstSection = currentSection === 'hero' && !isPastHero;
  const isHiddenSection = isFirstSection || currentSection === 'caller-id';
  const isStepByStep = currentSection === 'step-by-step-course';
  const isHomeActive = ['hero', 'features'].includes(currentSection);
  const isCoursesActive = ['step-by-step-course', 'gallery', 'courses'].includes(currentSection);
  const isHotlineActive = currentSection === 'caller-id';
  const isEnrollActive = ['reviews', 'spotlight', 'contact-banners', 'query', 'footer'].includes(currentSection);

  // Section-based state transitions
  useEffect(() => {
    if (activeSection === 'hero') {
      setIsCollapsed(false);
    } else if (activeSection === 'features') {
      setIsCollapsed(false);
      suppressCollapseUntilRef.current = Date.now() + 1000;
    } else {
      setIsCollapsed(true);
    }
  }, [activeSection]);

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 md:hidden overflow-hidden transform-gpu will-change-[transform,opacity,width] transition-[transform,opacity,width] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] select-none bg-[#0f1722]/95 backdrop-blur-2xl border border-white/20 shadow-[0_12px_32px_rgba(0,0,0,0.9)] rounded-full ${
        isHiddenSection
          ? 'translate-y-28 translate-x-0 opacity-0 pointer-events-none'
          : isStepByStep && isCollapsed
          ? 'translate-x-[calc(100vw-5.5rem)] translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-x-0 translate-y-0 opacity-100 pointer-events-auto'
      } ${
        isCollapsed
          ? 'w-14 h-14 cursor-pointer active:scale-95'
          : 'w-[calc(100vw-2rem)] max-w-[360px] h-14'
      }`}
      onClick={!isHiddenSection && isCollapsed ? () => setIsCollapsed(false) : undefined}
      role={isCollapsed ? 'button' : 'navigation'}
      aria-label={isCollapsed ? 'Open Navigation Menu' : 'Mobile Navigation Menu'}
    >
      {/* Collapsed State: Custom Home Image Icon View (True Mathematical & Optical Center) */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none origin-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isCollapsed
            ? 'opacity-100 scale-100 rotate-0'
            : 'opacity-0 scale-75 -rotate-45'
        }`}
      >
        <div
          role="img"
          aria-label="Home Navigation"
          className="w-6 h-6 bg-dispatch-yellow drop-shadow-[0_0_8px_rgba(251,194,30,0.55)] translate-y-[0.75px] transition-transform"
          style={{
            maskImage: `url(${homeIcon})`,
            WebkitMaskImage: `url(${homeIcon})`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          }}
        />
      </div>

      {/* Expanded State: Full Nav Items Row (No Close Button, 4 Evenly Spaced Items) */}
      <div
        className={`w-full h-full px-3.5 flex items-center justify-around transform-gpu will-change-[transform,opacity] transition-[opacity,transform] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isCollapsed
            ? 'opacity-0 pointer-events-none -translate-x-4 scale-95'
            : 'opacity-100 pointer-events-auto translate-x-0 scale-100'
        }`}
      >
        {/* Home */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNav(() => scrollTo('hero'));
          }}
          className={`flex flex-col items-center justify-center transition-all duration-200 py-1 px-2.5 rounded-xl active:scale-95 ${
            isHomeActive
              ? 'text-dispatch-yellow font-bold'
              : 'text-white/60 hover:text-white font-medium'
          }`}
          aria-label="Home"
        >
          <Home className={`w-4 h-4 transition-transform duration-200 ${isHomeActive ? 'stroke-[2.5px] scale-110 fill-dispatch-yellow/20' : 'stroke-[1.8]'}`} />
          <span className="text-[9px] tracking-tight mt-0.5">Home</span>
        </button>

        {/* Courses */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNav(() => scrollTo('courses'));
          }}
          className={`flex flex-col items-center justify-center transition-all duration-200 py-1 px-2.5 rounded-xl active:scale-95 ${
            isCoursesActive
              ? 'text-dispatch-yellow font-bold'
              : 'text-white/60 hover:text-white font-medium'
          }`}
          aria-label="Courses"
        >
          <Package className={`w-4 h-4 transition-transform duration-200 ${isCoursesActive ? 'stroke-[2.5px] scale-110' : 'stroke-[1.8]'}`} />
          <span className="text-[9px] tracking-tight mt-0.5">Courses</span>
        </button>

        {/* Caller ID / Hotline */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNav(() => scrollTo('caller-id'));
          }}
          className={`flex flex-col items-center justify-center transition-all duration-200 py-1 px-2.5 rounded-xl active:scale-95 ${
            isHotlineActive
              ? 'text-dispatch-yellow font-bold'
              : 'text-white/60 hover:text-white font-medium'
          }`}
          aria-label="Admissions Hotline"
        >
          <PhoneCall className={`w-4 h-4 transition-transform duration-200 ${isHotlineActive ? 'stroke-[2.5px] scale-110' : 'stroke-[1.8]'}`} />
          <span className="text-[9px] tracking-tight mt-0.5">Hotline</span>
        </button>

        {/* Enroll Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNav(onOpenEnrollModal || (() => openWhatsApp('batch')));
          }}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-extrabold text-[10px] uppercase tracking-wider transition-all duration-200 active:scale-95 ${
            isEnrollActive
              ? 'bg-dispatch-yellow text-dispatch-bg shadow-[0_0_14px_rgba(251,194,30,0.65)] ring-2 ring-dispatch-yellow/50 scale-105'
              : 'bg-dispatch-yellow text-dispatch-bg shadow-md hover:bg-dispatch-yellowLight'
          }`}
          aria-label="Enroll"
        >
          <UserCheck className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Enroll</span>
        </button>
      </div>
    </div>
  );
};

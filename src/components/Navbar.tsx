import React, { useState, useRef, useEffect } from 'react';
import { X, ArrowRight, Phone, MapPin, ChevronDown } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface NavbarProps {
  onOpenEnrollModal?: (courseName?: string) => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollModal, onOpenContactModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dragHandleRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startYRef = useRef<number>(0);
  const currentDragOffsetRef = useRef<number>(0);

  // Desktop pull-down drag interactions with direct GPU transform (zero React re-render thrashing)
  const handleDragStart = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startYRef.current = e.clientY;
    currentDragOffsetRef.current = 0;
    if (dragHandleRef.current) {
      dragHandleRef.current.style.transition = 'none';
    }
  };

  const handleClick = () => {
    if (currentDragOffsetRef.current < 10) {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaY = Math.max(0, Math.min(e.clientY - startYRef.current, 90));
      currentDragOffsetRef.current = deltaY;

      if (dragHandleRef.current) {
        dragHandleRef.current.style.transform = `translate3d(0, ${deltaY}px, 0)`;
      }

      if (deltaY >= 55) {
        setMenuOpen(true);
        isDraggingRef.current = false;
        if (dragHandleRef.current) {
          dragHandleRef.current.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
          dragHandleRef.current.style.transform = 'translate3d(0, 0px, 0)';
        }
      }
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      if (currentDragOffsetRef.current >= 50) {
        setMenuOpen(true);
      }
      if (dragHandleRef.current) {
        dragHandleRef.current.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
        dragHandleRef.current.style.transform = 'translate3d(0, 0px, 0)';
      }
      currentDragOffsetRef.current = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll offset to adapt navbar density and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Escape key to dismiss dropdown menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { number: '01', title: 'Overview & Training', href: 'hero', subtitle: '45-Day US dispatch foundation' },
    { number: '02', title: '45-Day Program', href: 'step-by-step-course', subtitle: 'Step-by-step dispatch workflow' },
    { number: '03', title: 'What You’ll Learn', href: 'gallery', subtitle: 'Load boards, negotiation & paperwork' },
    { number: '04', title: 'Course Modules', href: 'courses', subtitle: 'Curriculum, live calls & tools' },
    { number: '05', title: 'Trainer Hotline & Map', href: 'caller-id', subtitle: 'Direct lines to Harry & Jazz Dhillon' },
    { number: '06', title: 'Student Reviews', href: 'reviews', subtitle: 'Verified student feedback' },
  ];

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 w-full px-6 md:px-12 lg:px-16 flex items-center justify-between transition-all duration-300 border-b border-white/5 ${
          isScrolled
            ? 'py-3.5 md:py-4 bg-[#081017]/95 backdrop-blur-xl'
            : 'py-4 md:py-5 bg-[#081017]/80 backdrop-blur-md'
        }`}
      >
        {/* Left: Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-1.5 group z-10"
          aria-label="BBJ Dispatch Homepage"
        >
          <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-dispatch-yellow transition-colors">
            bbj
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-dispatch-yellow inline-block mt-0.5 group-hover:scale-125 transition-transform" />
          <span className="text-2xl font-bold tracking-tight text-white/90">
            dispatch
          </span>
        </a>

        {/* Center: Desktop Pull-Down '=' Handle with Bouncing Arrows (Desktop Only) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex-col items-center z-10 select-none">
          <div
            ref={dragHandleRef}
            onMouseDown={handleDragStart}
            onClick={handleClick}
            style={{
              transform: 'translate3d(0, 0px, 0)',
              transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}
            className="group flex flex-col items-center justify-center p-2 cursor-grab active:cursor-grabbing select-none transition-transform hover:opacity-90 transform-gpu will-change-transform"
            title={menuOpen ? 'Close navigation menu' : 'Pull down to open navigation menu'}
            role="button"
            tabIndex={0}
            aria-label={menuOpen ? 'Close navigation menu' : 'Pull down to open navigation menu'}
          >
            {/* 2 horizontal bars representing '=' */}
            <div className="flex flex-col items-center justify-center gap-1.5 py-1">
              <span className={`w-7 h-[2px] transition-colors rounded-full ${menuOpen ? 'bg-dispatch-yellow' : 'bg-white group-hover:bg-dispatch-yellow'}`} />
              <span className={`w-7 h-[2px] transition-colors rounded-full ${menuOpen ? 'bg-dispatch-yellow' : 'bg-white group-hover:bg-dispatch-yellow'}`} />
            </div>

            {/* Downward / Upward arrow indicator */}
            <div className={`flex flex-col items-center -mt-0.5 text-dispatch-yellow group-hover:scale-110 transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`}>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Right: Mobile Hamburger on Mobile (<md) & LET'S TALK on Desktop (>=md) */}
        <div className="flex items-center gap-3 z-10">
          {/* Mobile 2-bar hamburger / close toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center p-2.5 rounded-full hover:bg-white/10 text-white transition-colors focus:outline-none"
            aria-label={menuOpen ? 'Close navigation menu' : 'Toggle navigation menu'}
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-dispatch-yellow" />
            ) : (
              <div className="flex flex-col items-center justify-center gap-1.5">
                <span className="w-6 h-[2px] bg-white transition-all"></span>
                <span className="w-6 h-[2px] bg-white transition-all"></span>
              </div>
            )}
          </button>

          {/* Desktop Action Button: LET'S TALK */}
          <button
            onClick={() => openWhatsApp('talk')}
            className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-dispatch-yellow/15"
          >
            LET'S TALK
          </button>
        </div>
      </header>

      {/* Backdrop overlay for outside-click dismissal */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 top-[60px] md:top-[68px] z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Minimalist Dropdown Navigation Menu */}
      <div
        className={`fixed top-[60px] md:top-[68px] inset-x-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-[transform,opacity] ${
          menuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        {/* Desktop Container (Glassmorphic floating panel centered under header) */}
        <div className="hidden md:block max-w-4xl mx-auto px-4">
          <div className="bg-[#081017]/95 backdrop-blur-2xl border-x border-b border-white/10 rounded-b-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 lg:p-8">
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Left Column: 6 Section Links in a 2-column minimalist sub-grid */}
              <div className="col-span-7">
                <p className="text-dispatch-yellow text-[11px] font-mono uppercase tracking-widest mb-3">
                  // Quick Navigation
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {navLinks.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="group flex flex-col items-start p-2 rounded-xl hover:bg-white/[0.04] transition-colors text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-dispatch-yellow/70 font-semibold">
                          {item.number}
                        </span>
                        <span className="text-sm font-bold text-white group-hover:text-dispatch-yellow transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-[11px] text-dispatch-muted group-hover:text-white/70 transition-colors pl-5 line-clamp-1">
                        {item.subtitle}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Direct Admissions & Action */}
              <div className="col-span-5 border-l border-white/10 pl-6 space-y-4">
                <div>
                  <p className="text-dispatch-yellow text-[11px] font-mono uppercase tracking-widest mb-2">
                    // Direct Admissions
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Harry Dhillon (Trainer)</span>
                      <a
                        href="tel:+917888825122"
                        className="text-white hover:text-dispatch-yellow font-bold transition-colors"
                      >
                        +91 78888 25122
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">USA Admissions</span>
                      <a
                        href="tel:+15593852018"
                        className="text-white hover:text-dispatch-yellow font-bold transition-colors"
                      >
                        +1 (559) 385-2018
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    openWhatsApp('demo');
                  }}
                  className="w-full py-3 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg shadow-dispatch-yellow/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-dispatch-bg" />
                  <span>BOOK FREE DEMO CLASS</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Container (Sleek full-width dropdown below header) */}
        <div className="block md:hidden w-full bg-[#081017]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl px-5 py-4 space-y-4 max-h-[calc(100dvh-70px)] overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono text-dispatch-yellow font-semibold">
                    {item.number}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {item.title}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-white/40" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs px-2">
              <span className="text-white/60">Senior Trainer Line</span>
              <a href="tel:+917888825122" className="text-dispatch-yellow font-bold">
                +91 78888 25122
              </a>
            </div>

            <button
              onClick={() => {
                setMenuOpen(false);
                openWhatsApp('demo');
              }}
              className="w-full py-3 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-dispatch-yellow/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-dispatch-bg" />
              <span>BOOK FREE DEMO CLASS</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { X, ArrowRight, Phone, MapPin, ChevronDown, MessageSquare, Truck } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface NavbarProps {
  onOpenEnrollModal?: (courseName?: string) => void;
  onOpenContactModal?: () => void;
  onNavigate?: (id: string) => void;
  onNavigateRoute?: (route: 'home' | 'terms' | 'privacy' | 'services') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnrollModal,
  onOpenContactModal,
  onNavigate,
  onNavigateRoute,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dragHandleRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startYRef = useRef<number>(0);
  const currentDragOffsetRef = useRef<number>(0);

  const menuOpenRef = useRef(menuOpen);
  menuOpenRef.current = menuOpen;
  const desktopPanelRef = useRef<HTMLDivElement>(null);

  // Desktop drag interactions with direct GPU transform for handle and drawer
  const handleDragStart = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startYRef.current = e.clientY;
    currentDragOffsetRef.current = 0;
    if (dragHandleRef.current) {
      dragHandleRef.current.style.transition = 'none';
    }
    if (desktopPanelRef.current) {
      desktopPanelRef.current.style.transition = 'none';
    }
  };

  const handleClick = () => {
    // If movement is negligible (< 8px), treat as click toggle
    if (Math.abs(currentDragOffsetRef.current) < 8) {
      setMenuOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const isOpen = menuOpenRef.current;
      const rawDelta = e.clientY - startYRef.current;

      if (!isOpen) {
        // Closed state: allow dragging downwards (0 to 90px)
        const deltaY = Math.max(0, Math.min(rawDelta, 90));
        currentDragOffsetRef.current = deltaY;

        if (dragHandleRef.current) {
          dragHandleRef.current.style.transform = `translate3d(0, ${deltaY}px, 0)`;
        }

        // Auto trigger open if dragged past 45px
        if (deltaY >= 45) {
          setMenuOpen(true);
          isDraggingRef.current = false;
          if (dragHandleRef.current) {
            dragHandleRef.current.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
            dragHandleRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }
        }
      } else {
        // Open state: allow dragging upwards (-90px to 0) or downwards (clamped)
        const deltaY = Math.max(-90, Math.min(rawDelta, 20));
        currentDragOffsetRef.current = deltaY;

        if (dragHandleRef.current) {
          dragHandleRef.current.style.transform = `translate3d(0, ${deltaY}px, 0)`;
        }
        if (desktopPanelRef.current) {
          desktopPanelRef.current.style.transform = `translate3d(0, ${deltaY}px, 0)`;
        }

        // Auto trigger close if dragged up past 40px
        if (deltaY <= -40) {
          setMenuOpen(false);
          isDraggingRef.current = false;
          if (dragHandleRef.current) {
            dragHandleRef.current.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
            dragHandleRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }
          if (desktopPanelRef.current) {
            desktopPanelRef.current.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
            desktopPanelRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }
        }
      }
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      const isOpen = menuOpenRef.current;
      const offset = currentDragOffsetRef.current;

      if (!isOpen && offset >= 35) {
        setMenuOpen(true);
      } else if (isOpen && offset <= -25) {
        setMenuOpen(false);
      }

      if (dragHandleRef.current) {
        dragHandleRef.current.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
        dragHandleRef.current.style.transform = 'translate3d(0, 0px, 0)';
      }
      if (desktopPanelRef.current) {
        desktopPanelRef.current.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
        desktopPanelRef.current.style.transform = 'translate3d(0, 0px, 0)';
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
    { number: '02', title: 'Live vs Dummy Training', href: 'real-vs-dummy', subtitle: 'Real DAT load boards vs fake mockups' },
    { number: '03', title: '45-Day Program', href: 'step-by-step-course', subtitle: 'Step-by-step dispatch workflow' },
    { number: '04', title: 'What You’ll Learn', href: 'gallery', subtitle: 'Load boards, negotiation & paperwork' },
    { number: '05', title: 'Course Modules', href: 'courses', subtitle: 'Curriculum, live calls & tools' },
    { number: '06', title: 'Carrier & Trucker Services', href: 'trucker-services', subtitle: 'Freight brokerage & fleet dispatch' },
    { number: '07', title: 'Trainer Hotline & Map', href: 'caller-id', subtitle: 'Direct lines to Harry & Jazz Dhillon' },
    { number: '08', title: 'Student Reviews', href: 'reviews', subtitle: 'Verified student feedback' },
    { number: '09', title: 'Course Query Form', href: 'query', subtitle: 'Submit questions via WhatsApp' },
    { number: '10', title: '₹49 Demo Class', href: 'spotlight', subtitle: 'Interactive live demo class' },
  ];

  const handleServicesClick = () => {
    document.body.style.overflow = '';
    setMenuOpen(false);
    if (onNavigateRoute) {
      onNavigateRoute('services');
    } else {
      window.location.hash = '#services';
    }
  };

  const handleNavClick = (id: string) => {
    document.body.style.overflow = '';
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full px-6 md:px-12 lg:px-16 flex items-center justify-between transition-all duration-300 border-b border-white/5 ${
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
          {/* Mobile 2-bar hamburger / close toggle (Pure, vibrant, unmuted icons) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center p-2 bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent focus:outline-none border-0 shadow-none [-webkit-tap-highlight-color:transparent] cursor-pointer group"
            aria-label={menuOpen ? 'Close navigation menu' : 'Toggle navigation menu'}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-dispatch-yellow stroke-[2.5] drop-shadow-[0_0_8px_rgba(251,194,30,0.55)] transition-transform group-active:scale-90" />
            ) : (
              <div className="flex flex-col items-center justify-center gap-1.5 py-1">
                <span className="w-7 h-[2.5px] bg-white rounded-full transition-all group-hover:bg-dispatch-yellow shadow-[0_0_6px_rgba(255,255,255,0.4)]"></span>
                <span className="w-7 h-[2.5px] bg-white rounded-full transition-all group-hover:bg-dispatch-yellow shadow-[0_0_6px_rgba(255,255,255,0.4)]"></span>
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
        onClick={() => {
          document.body.style.overflow = '';
          setMenuOpen(false);
        }}
        className={`fixed inset-0 top-[64px] md:top-[68px] z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Minimalist Dropdown Navigation Menu */}
      <div
        data-nav-drawer="true"
        className={`fixed top-[64px] md:top-[68px] inset-x-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-[transform,opacity] ${
          menuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto visible'
            : '-translate-y-4 opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* Desktop Container (Glassmorphic floating panel centered under header) */}
        <div ref={desktopPanelRef} className="hidden md:block max-w-4xl mx-auto px-4 transform-gpu will-change-transform">
          <div className="relative bg-[#081017]/95 backdrop-blur-2xl border-x border-b border-white/10 rounded-b-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 lg:p-8">
            {/* Top-Right Quick Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white hover:text-dispatch-yellow transition-all cursor-pointer"
              aria-label="Close navigation menu"
              title="Close menu"
            >
              <X className="w-5 h-5 stroke-[2.5] text-white hover:text-dispatch-yellow transition-colors" />
            </button>

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

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-white/70 shrink-0" />
                    <div>
                      <p className="text-[11px] font-bold text-white">Trucker &amp; Carrier Services</p>
                      <p className="text-[10px] text-dispatch-muted">Dedicated dispatch &amp; brokerage</p>
                    </div>
                  </div>
                  <button
                    onClick={handleServicesClick}
                    className="px-3 py-1.5 rounded-lg border border-white/15 text-white/90 font-bold text-[10px] uppercase tracking-wider hover:border-dispatch-yellow hover:text-dispatch-yellow transition-colors cursor-pointer shrink-0"
                  >
                    View Services →
                  </button>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => handleNavClick('query')}
                    className="w-full py-2.5 rounded-full border border-white/20 hover:border-dispatch-yellow text-white hover:text-dispatch-yellow font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Ask a Course Query</span>
                  </button>

                  <button
                    onClick={() => {
                      document.body.style.overflow = '';
                      setMenuOpen(false);
                      openWhatsApp('demo');
                    }}
                    className="w-full py-3 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg shadow-dispatch-yellow/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-dispatch-bg" />
                    <span>BOOK ₹49 DEMO CLASS</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Drag-Up Handle Bar */}
                <div
                  onMouseDown={handleDragStart}
                  onClick={() => {
                    document.body.style.overflow = '';
                    setMenuOpen(false);
                  }}
                  className="mt-6 pt-3 border-t border-white/5 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing group select-none"
                  title="Drag up or click to close"
                >
                  <div className="w-12 h-1 rounded-full bg-white/20 group-hover:bg-dispatch-yellow transition-colors mb-1" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-dispatch-yellow transition-colors">
                    Pull up to close
                  </span>
                </div>
          </div>
        </div>

        {/* Mobile Container (Sleek full-width dropdown below header) */}
        <div className="block md:hidden w-full bg-[#081017]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl px-5 py-4 space-y-4 max-h-[calc(100dvh-70px)] overflow-y-auto">
          {/* Top highlight button for Carrier Services in mobile menu */}
          <button
            onClick={handleServicesClick}
            className="w-full py-2.5 px-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 flex items-center justify-between text-left cursor-pointer group transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-white/70 group-hover:text-dispatch-yellow transition-colors" />
              <div>
                <span className="text-xs font-bold text-white group-hover:text-dispatch-yellow transition-colors block">
                  Trucker Services (Brokerage &amp; Dispatch)
                </span>
                <span className="text-[10px] text-dispatch-muted block">
                  For active carriers &amp; owner-operators
                </span>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-dispatch-yellow group-hover:translate-x-0.5 transition-all" />
          </button>

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
              onClick={() => handleNavClick('query')}
              className="w-full py-2.5 rounded-full border border-white/20 hover:border-dispatch-yellow text-white hover:text-dispatch-yellow font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask a Course Query</span>
            </button>

            <button
              onClick={() => {
                document.body.style.overflow = '';
                setMenuOpen(false);
                openWhatsApp('demo');
              }}
              className="w-full py-3 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-dispatch-yellow/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-dispatch-bg" />
              <span>BOOK ₹49 DEMO CLASS</span>
            </button>

            {/* Dedicated Mobile Close Button */}
            <button
              onClick={() => {
                document.body.style.overflow = '';
                setMenuOpen(false);
              }}
              className="w-full py-2.5 mt-1 border-t border-white/10 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-dispatch-yellow transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close Menu</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

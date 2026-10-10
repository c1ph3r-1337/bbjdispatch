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
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startYRef = useRef<number>(0);

  // Desktop pull-down drag interactions
  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    startYRef.current = e.clientY;
  };

  const handleClick = () => {
    if (dragOffset < 10) {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaY = Math.max(0, Math.min(e.clientY - startYRef.current, 90));
      setDragOffset(deltaY);

      if (deltaY >= 55) {
        setMenuOpen(true);
        setIsDragging(false);
        setDragOffset(0);
      }
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      if (dragOffset >= 50) {
        setMenuOpen(true);
      }
      setDragOffset(0);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

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

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 w-full px-6 md:px-12 lg:px-16 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 md:py-4 bg-[#081017]/95 backdrop-blur-xl border-b border-white/10'
            : 'py-4 md:py-5 bg-[#081017]/80 backdrop-blur-md border-b border-white/5'
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
            onMouseDown={handleDragStart}
            onClick={handleClick}
            style={{
              transform: `translateY(${dragOffset}px)`,
              transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}
            className="group flex flex-col items-center justify-center p-2 cursor-grab active:cursor-grabbing select-none transition-transform hover:opacity-90"
            title="Pull down to open navigation menu"
            role="button"
            tabIndex={0}
            aria-label="Pull down to open navigation menu"
          >
            {/* 2 horizontal bars representing '=' */}
            <div className="flex flex-col items-center justify-center gap-1.5 py-1">
              <span className="w-7 h-[2px] bg-white group-hover:bg-dispatch-yellow transition-colors rounded-full" />
              <span className="w-7 h-[2px] bg-white group-hover:bg-dispatch-yellow transition-colors rounded-full" />
            </div>

            {/* Bouncing downward arrow indicator */}
            <div className="flex flex-col items-center -mt-0.5 text-dispatch-yellow group-hover:scale-110 transition-transform">
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Right: Mobile Hamburger on Mobile (<md) & LET'S TALK on Desktop (>=md) */}
        <div className="flex items-center gap-3 z-10">
          {/* Mobile 2-bar hamburger menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-full hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="w-6 h-[2px] bg-white transition-all"></span>
            <span className="w-6 h-[2px] bg-white transition-all"></span>
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

      {/* Navigation Drawer / Modal (Mobile: Quick Left-to-Right Slide | Desktop: Top-Down Slide) */}
      <div
        className={`fixed inset-0 z-50 bg-[#081017] flex flex-col transition-transform duration-200 md:duration-300 ease-out overflow-hidden ${
          menuOpen
            ? 'translate-x-0 md:translate-y-0 pointer-events-auto'
            : '-translate-x-full md:-translate-y-full md:translate-x-0 pointer-events-none'
        }`}
      >
        {/* Pinned Top Bar inside drawer */}
        <div className="flex-shrink-0 flex items-center justify-between w-full border-b border-white/10 px-5 sm:px-8 md:px-14 py-4 md:py-5 bg-[#081017]">
          <div className="flex items-center gap-1.5">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">bbj</span>
            <span className="w-2.5 h-2.5 rounded-full bg-dispatch-yellow inline-block" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white/90">dispatch</span>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Body with smooth touch scrolling */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-8 md:px-14 py-6 md:py-10 flex flex-col justify-between">
          {/* Main Grid: Navigation Links & Admissions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto w-full my-auto">
            {/* Syllabus Navigation Links */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-dispatch-yellow text-xs font-mono uppercase tracking-widest">
                // 45-Day Course Syllabus
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { name: 'Days 1–10: Trucking & Equipment Basics', href: '#courses' },
                  { name: 'Days 11–22: Load Boards & Broker Calls', href: '#courses' },
                  { name: 'Days 23–35: Rate Negotiation & Papers', href: '#courses' },
                  { name: 'Days 36–45: Practice & Mock Interviews', href: '#courses' },
                  { name: 'Online & Offline Classroom Options', href: '#features' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between text-base sm:text-xl md:text-2xl font-bold text-white hover:text-dispatch-yellow transition-colors py-1"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-dispatch-yellow flex-shrink-0 ml-2" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Admissions & Demo Action */}
            <div className="space-y-6 md:border-l md:border-white/10 md:pl-10 lg:pl-12 flex flex-col justify-between">
              <div>
                <p className="text-dispatch-yellow text-xs font-mono uppercase tracking-widest mb-3 sm:mb-4">
                  // Direct Admissions &amp; Demo Class
                </p>
                <div className="space-y-3 text-dispatch-muted text-sm sm:text-base">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-dispatch-yellow flex-shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] sm:text-xs text-white/60 block">India (Harry Dhillon)</span>
                        <span className="flex items-center gap-1 text-[10px] text-[#25D366] font-semibold">
                          <WhatsAppIcon className="w-2.5 h-2.5 fill-[#25D366]" />
                          WhatsApp
                        </span>
                      </div>
                      <a href="tel:+917888825122" className="hover:text-white font-semibold text-white transition-colors text-sm sm:text-base">
                        +91 78888 25122
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-dispatch-yellow flex-shrink-0" />
                    <div>
                      <span className="text-[11px] sm:text-xs text-white/60 block">India (Jazz Dhillon)</span>
                      <a href="tel:+919814379035" className="hover:text-white font-semibold text-white transition-colors text-sm sm:text-base">
                        +91 98143 79035
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-dispatch-yellow flex-shrink-0" />
                    <div>
                      <span className="text-[11px] sm:text-xs text-white/60 block">USA (Course Enquiry)</span>
                      <a href="tel:+15593852018" className="hover:text-white font-semibold text-white transition-colors text-sm sm:text-base">
                        +1 (559) 385-2018
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    openWhatsApp('demo');
                  }}
                  className="w-full py-3.5 sm:py-4 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl shadow-dispatch-yellow/20 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-dispatch-bg" />
                  <span>BOOK FREE DEMO CLASS</span>
                </button>
              </div>
            </div>
          </div>

          {/* Drawer footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-dispatch-textMuted border-t border-white/10 pt-5 mt-8 sm:mt-12 text-center sm:text-left gap-2 flex-shrink-0">
            <span>© 2026 BBJ Dispatch Academy. All rights reserved.</span>
            <span>Empowering Independent Dispatchers Worldwide</span>
          </div>
        </div>
      </div>
    </>
  );
};

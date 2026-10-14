import React from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface FooterProps {
  isActive?: boolean;
  onOpenEnrollModal?: (topic?: string) => void;
  onOpenContactModal?: () => void;
  onNavigate?: (route: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ isActive, onNavigate }) => {
  const handleLegalClick = (e: React.MouseEvent, route: 'terms' | 'privacy') => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(route);
    } else {
      window.location.hash = `#${route}`;
    }
  };

  return (
    <footer id="footer" className={`snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center bg-[#081017] border-t border-white/10 pt-14 pb-8 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16 text-sm text-dispatch-muted ${isActive ? 'section-active' : ''}`}>
      <div className="w-full max-w-7xl lg:max-w-[90rem] xl:max-w-[96rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Brand Header - Centered */}
        <div className="reveal-item delay-1 space-y-1.5 sm:space-y-2 pb-3 sm:pb-5 md:pb-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white">
              bbj dispatch
            </span>
            <span className="w-2 h-2 rounded-full bg-dispatch-yellow animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/10 text-dispatch-yellow ml-1">
              Training Academy
            </span>
          </div>
          <p className="text-[11px] sm:text-xs md:text-sm text-dispatch-muted max-w-xl lg:max-w-3xl mx-auto leading-relaxed text-center px-2">
            45-Day comprehensive U.S. truck dispatch training course. Practical instruction covering load boards, broker negotiation, rate confirmations, billing, and career preparation.
          </p>
        </div>

        {/* 2 Side-by-Side Columns: Direct Contact on Left, 45-Day Curriculum on Right (Centered Grid & Text) */}
        <div className="reveal-item delay-2 max-w-4xl lg:max-w-5xl mx-auto grid grid-cols-2 gap-4 sm:gap-8 md:gap-20 lg:gap-32 py-3.5 sm:py-6 md:py-10 border-t border-white/10 text-center">
          {/* Left Column: Direct Contact */}
          <div className="space-y-2 sm:space-y-3.5 text-center">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-dispatch-yellow">
              Direct Contact
            </h4>
            <ul className="space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs md:text-sm text-dispatch-muted text-center">
              <li>
                <span className="text-[10px] sm:text-[11px] text-white/50 block">Harry Dhillon (Trainer)</span>
                <a
                  href="tel:+917888825122"
                  className="text-white hover:text-dispatch-yellow transition-colors font-bold text-xs sm:text-sm md:text-base inline-block mt-0.5 whitespace-nowrap"
                >
                  +91 78888 25122
                </a>
              </li>
              <li>
                <span className="text-[10px] sm:text-[11px] text-white/50 block">Jazz Dhillon (Trainer)</span>
                <a
                  href="tel:+919814379035"
                  className="text-white hover:text-dispatch-yellow transition-colors font-semibold text-xs sm:text-sm md:text-base inline-block mt-0.5 whitespace-nowrap"
                >
                  +91 98143 79035
                </a>
              </li>
              <li>
                <span className="text-[10px] sm:text-[11px] text-white/50 block">USA Admissions</span>
                <a
                  href="tel:+15593852018"
                  className="text-white hover:text-dispatch-yellow transition-colors font-semibold text-xs sm:text-sm md:text-base inline-block mt-0.5 whitespace-nowrap"
                >
                  +1 (559) 385-2018
                </a>
              </li>
              <li className="pt-0.5">
                <span className="text-[10px] sm:text-[11px] text-white/50 block">Email Admissions</span>
                <a
                  href="mailto:Dhillonharpreet870@gmail.com"
                  className="text-white/80 hover:text-dispatch-yellow transition-colors text-[10px] sm:text-xs md:text-sm break-all inline-block mt-0.5"
                >
                  Dhillonharpreet870@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: 45-Day Curriculum */}
          <div className="space-y-2 sm:space-y-3.5 text-center">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-dispatch-yellow">
              45-Day Curriculum
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-[11px] sm:text-xs md:text-sm text-center">
              <li>
                <button
                  onClick={() => openWhatsApp('batch', 'Days 1-10 Basics')}
                  className="text-dispatch-muted hover:text-dispatch-yellow transition-colors text-center inline-block leading-snug"
                >
                  Days 1–10: Basics &amp; Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => openWhatsApp('batch', 'Days 11-22 Load Boards')}
                  className="text-dispatch-muted hover:text-dispatch-yellow transition-colors text-center inline-block leading-snug"
                >
                  Days 11–22: Load Boards (DAT)
                </button>
              </li>
              <li>
                <button
                  onClick={() => openWhatsApp('batch', 'Days 23-35 Negotiation')}
                  className="text-dispatch-muted hover:text-dispatch-yellow transition-colors text-center inline-block leading-snug"
                >
                  Days 23–35: Rates &amp; Negotiation
                </button>
              </li>
              <li>
                <button
                  onClick={() => openWhatsApp('batch', 'Days 36-45 Mock Practice')}
                  className="text-dispatch-muted hover:text-dispatch-yellow transition-colors text-center inline-block leading-snug"
                >
                  Days 36–45: Live Mock Calls
                </button>
              </li>
              <li className="pt-0.5">
                <button
                  onClick={() => openWhatsApp('demo')}
                  className="text-dispatch-yellow font-bold hover:underline text-center inline-block leading-snug"
                >
                  Attend Free Demo Class →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered WhatsApp Action Section Underneath */}
        <div className="reveal-scale delay-4 py-3.5 sm:py-6 md:py-10 border-t border-white/10 flex flex-col items-center justify-center text-center">
          <button
            onClick={() => openWhatsApp('demo')}
            className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#081017] font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95 group"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#081017] group-hover:scale-110 transition-transform" />
            <span>Chat on WhatsApp</span>
            <span className="text-[10px] sm:text-xs bg-black/15 px-2 py-0.5 rounded-full font-semibold">Fast Reply</span>
          </button>
          <p className="text-[10px] sm:text-xs text-white/50 mt-1.5 sm:mt-2.5">
            Instant answers about upcoming batches, offline classroom seats &amp; free demo class
          </p>
        </div>

        {/* Bottom Bar: Centered Copyright & Dedicated Legal Links */}
        <div className="reveal-item delay-5 pt-3 sm:pt-5 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-[10px] sm:text-xs text-dispatch-textMuted text-center">
          <div>
            <span>© 2026 BBJ Dispatch Academy. All rights reserved.</span>
          </div>

          <span className="hidden sm:inline text-white/20">•</span>

          <div className="flex items-center gap-6">
            <button
              onClick={(e) => handleLegalClick(e, 'terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={(e) => handleLegalClick(e, 'privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

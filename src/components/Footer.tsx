import React from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface FooterProps {
  onOpenEnrollModal?: (topic?: string) => void;
  onOpenContactModal?: () => void;
  onNavigate?: (route: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLegalClick = (e: React.MouseEvent, route: 'terms' | 'privacy') => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(route);
    } else {
      window.location.hash = `#${route}`;
    }
  };

  return (
    <footer id="footer" className="snap-section relative z-20 min-h-screen flex flex-col justify-center bg-[#081017] border-t border-white/10 pt-20 pb-28 sm:pb-24 md:pb-16 text-sm text-dispatch-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Brand Header */}
        <div className="space-y-3 pb-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-extrabold text-2xl tracking-tight text-white">
              bbj dispatch
            </span>
            <span className="w-2 h-2 rounded-full bg-dispatch-yellow animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/10 text-dispatch-yellow ml-1">
              Training Academy
            </span>
          </div>
          <p className="text-xs sm:text-sm text-dispatch-muted max-w-2xl mx-auto md:mx-0 leading-relaxed">
            45-Day comprehensive U.S. truck dispatch training course. Practical instruction covering load boards, broker negotiation, rate confirmations, billing, and career preparation.
          </p>
        </div>

        {/* 2 Side-by-Side Columns: Direct Contact on Left, 45-Day Curriculum on Right (Horizontal Side-by-Side on Mobile & Desktop) */}
        <div className="grid grid-cols-2 gap-5 sm:gap-10 md:gap-16 lg:gap-24 py-8 md:py-10 border-t border-white/10">
          {/* Left Column: Direct Contact */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-dispatch-yellow">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-dispatch-muted">
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
                  className="text-white/80 hover:text-dispatch-yellow transition-colors text-[11px] sm:text-xs md:text-sm break-all inline-block mt-0.5"
                >
                  Dhillonharpreet870@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: 45-Day Curriculum */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-dispatch-yellow">
              45-Day Curriculum
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => openWhatsApp('batch', 'Days 1-10 Basics')}
                  className="text-dispatch-muted hover:text-dispatch-yellow transition-colors text-left inline-block leading-snug"
                >
                  Days 1–10: Basics &amp; Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => openWhatsApp('batch', 'Days 11-22 Load Boards')}
                  className="text-dispatch-muted hover:text-dispatch-yellow transition-colors text-left inline-block leading-snug"
                >
                  Days 11–22: Load Boards (DAT)
                </button>
              </li>
              <li>
                <button
                  onClick={() => openWhatsApp('batch', 'Days 23-35 Negotiation')}
                  className="text-dispatch-muted hover:text-dispatch-yellow transition-colors text-left inline-block leading-snug"
                >
                  Days 23–35: Rates &amp; Negotiation
                </button>
              </li>
              <li>
                <button
                  onClick={() => openWhatsApp('batch', 'Days 36-45 Mock Practice')}
                  className="text-dispatch-muted hover:text-dispatch-yellow transition-colors text-left inline-block leading-snug"
                >
                  Days 36–45: Live Mock Calls
                </button>
              </li>
              <li className="pt-0.5">
                <button
                  onClick={() => openWhatsApp('demo')}
                  className="text-dispatch-yellow font-bold hover:underline text-left inline-block leading-snug"
                >
                  Attend Free Demo Class →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered WhatsApp Action Section Underneath */}
        <div className="py-10 border-t border-white/10 flex flex-col items-center justify-center text-center">
          <button
            onClick={() => openWhatsApp('demo')}
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#081017] font-bold text-sm tracking-wide shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95 group"
          >
            <WhatsAppIcon className="w-4 h-4 fill-[#081017] group-hover:scale-110 transition-transform" />
            <span>Chat on WhatsApp</span>
            <span className="text-xs bg-black/15 px-2 py-0.5 rounded-full font-semibold">Fast Reply</span>
          </button>
          <p className="text-xs text-white/50 mt-2.5">
            Instant answers about upcoming batches, offline classroom seats &amp; free demo class
          </p>
        </div>

        {/* Bottom Bar: Copyright & Dedicated Legal Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dispatch-textMuted text-center sm:text-left">
          <div>
            <span>© 2026 BBJ Dispatch Academy. All rights reserved.</span>
          </div>

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

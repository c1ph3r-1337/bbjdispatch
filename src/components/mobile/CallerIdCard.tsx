import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { SlideToActionButton } from './SlideToActionButton';
import { openDialer, openWhatsApp } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { useVisitorDistance } from '../../utils/geolocation';

interface CallerIdCardProps {
  onBack?: () => void;
  onCallInitiated?: () => void;
}

export const CallerIdCard: React.FC<CallerIdCardProps> = ({ onCallInitiated }) => {
  const distanceInfo = useVisitorDistance();

  return (
    <div className="w-full text-white select-none">
      {/* Compact Dual-Tone 2-Column Grid (Desktop 6:6, Mobile Stack) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* ========================================================= */}
        {/* LEFT COLUMN: Compact Dual-Tone Highway Route Graphic      */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="relative w-full h-56 sm:h-64 md:h-72 bg-[#081017] border border-white/10 rounded-2xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between">
            {/* Subtle Monochrome Grid */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Pure Dual-Tone SVG Highway Route */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 280"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              {/* Subtle Neutral Road Lines */}
              <path d="M 0 160 L 500 125" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
              <path d="M 190 280 L 165 0" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />
              <path d="M 370 280 L 335 0" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />

              {/* Signature Gold Highway Route Glow */}
              <path
                d="M 60 210 L 120 210 Q 150 210, 165 185 L 210 145 Q 230 125, 260 130 L 320 130 Q 350 130, 365 100 L 390 65 Q 405 45, 430 40"
                stroke="#fbc21e"
                strokeOpacity="0.25"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Main Gold Highway Route Polyline */}
              <path
                d="M 60 210 L 120 210 Q 150 210, 165 185 L 210 145 Q 230 125, 260 130 L 320 130 Q 350 130, 365 100 L 390 65 Q 405 45, 430 40"
                stroke="#fbc21e"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Directional Center Dashed Line */}
              <path
                d="M 60 210 L 120 210 Q 150 210, 165 185 L 210 145 Q 230 125, 260 130 L 320 130 Q 350 130, 365 100 L 390 65 Q 405 45, 430 40"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeDasharray="5 7"
                strokeLinecap="round"
                className="opacity-90"
              />

              {/* Origin Marker (Pure White) */}
              <circle cx="60" cy="210" r="4.5" fill="#ffffff" stroke="#081017" strokeWidth="2" />

              {/* Destination Beacon (Pure Gold #fbc21e with In-Place Pulse Animation) */}
              <circle cx="430" cy="40" r="5" fill="#fbc21e" fillOpacity="0.35">
                <animate attributeName="r" values="5;14;5" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="430" cy="40" r="4.5" fill="#fbc21e" stroke="#081017" strokeWidth="1.5" />
            </svg>

            {/* Dual-Tone Waypoint Labels */}
            <div className="relative z-10 flex items-center justify-between text-[11px] sm:text-xs font-mono">
              <span className="text-white/80 font-medium">
                {distanceInfo.city}
              </span>
              <span className="text-dispatch-yellow font-bold">
                Zira Campus
              </span>
            </div>

            {/* Bottom: Dual-Tone Highway Route & Google Maps Directions Link */}
            <div className="relative z-10 flex items-center justify-between pt-3">
              <span className="text-[11px] sm:text-xs font-mono text-white/60">
                {distanceInfo.roadDistanceKm} km highway route
              </span>
              <a
                href={distanceInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono text-white/80 hover:text-dispatch-yellow transition-colors group"
              >
                <span>Google Maps</span>
                <ArrowUpRight className="w-3 h-3 text-dispatch-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Compact Dual-Tone Contact & Campus Panel     */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-3.5 sm:space-y-4">
          {/* Campus Location (Compact) */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
              Mallawala Road, Zira Campus
            </h3>
            <p className="text-xs text-white/50 leading-relaxed">
              District Ferozepur, Punjab 142047
            </p>
            {/* Compact Gold Distance Metric */}
            <p className="text-xs font-mono text-dispatch-yellow font-semibold pt-0.5">
              ~{distanceInfo.roadDistanceKm} km • {distanceInfo.drivingTime} from {distanceInfo.city}
            </p>
          </div>

          <div className="w-full border-t border-white/10" />

          {/* Direct Hotlines (Compact) */}
          <div className="space-y-2.5 sm:space-y-3">
            {/* Harry Dhillon */}
            <div className="flex items-center justify-between gap-3">
              <div>
                <a
                  href="tel:+917888825122"
                  className="text-sm sm:text-base font-semibold text-white hover:text-dispatch-yellow transition-colors block"
                >
                  Harry Dhillon • +91 78888 25122
                </a>
                <span className="text-[11px] text-white/50 block">
                  Senior Dispatch Trainer • Admissions &amp; Batches
                </span>
              </div>
              <button
                onClick={() => openWhatsApp('talk', 'Senior Trainer Harry Dhillon')}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 px-2.5 py-1 rounded-md transition-colors flex-shrink-0"
                aria-label="Contact Harry Dhillon on WhatsApp"
              >
                <WhatsAppIcon className="w-3 h-3 fill-white" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Jazz Dhillon */}
            <div className="flex items-center justify-between gap-3">
              <div>
                <a
                  href="tel:+919814379035"
                  className="text-sm sm:text-base font-semibold text-white hover:text-dispatch-yellow transition-colors block"
                >
                  Jazz Dhillon • +91 98143 79035
                </a>
                <span className="text-[11px] text-white/50 block">
                  Course Enquiry &amp; Free Demo Class Booking
                </span>
              </div>
              <a
                href="tel:+919814379035"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/90 hover:text-dispatch-yellow hover:border-dispatch-yellow/40 bg-white/5 hover:bg-white/10 border border-white/15 px-2.5 py-1 rounded-md transition-colors flex-shrink-0"
                aria-label="Call Jazz Dhillon"
              >
                <Phone className="w-3 h-3" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Mobile Only: Compact Slide to Call */}
          <div className="block lg:hidden w-full pt-1">
            <SlideToActionButton
              label="Slide to Call Trainer"
              icon={<Phone className="w-5 h-5 text-dispatch-bg fill-dispatch-bg" />}
              onComplete={onCallInitiated || (() => openDialer('+917888825122'))}
              showBackArrow={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

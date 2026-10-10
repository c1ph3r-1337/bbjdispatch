import React from 'react';
import { MapPin, Phone, User } from 'lucide-react';
import { useVisitorDistance } from '../../utils/geolocation';
import { openWhatsApp } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

interface DesktopCraneHotlineProps {
  onOpenConsultation?: () => void;
}

export const DesktopCraneHotline: React.FC<DesktopCraneHotlineProps> = () => {
  const distanceInfo = useVisitorDistance();

  return (
    <div className="relative w-full min-h-screen flex items-stretch overflow-hidden select-none">
      {/* ========================================================= */}
      {/* LEFT COLUMN: Large Industrial Crane Bleeding Left Edge    */}
      {/* ========================================================= */}
      <div className="relative w-[70%] xl:w-[72%] 2xl:w-[73%] h-full flex items-start justify-start pt-10 lg:pt-14 xl:pt-16 pointer-events-none overflow-visible">
        <div className="relative w-[108%] lg:w-[112%] xl:w-[115%] max-w-none -ml-[4%] lg:-ml-[5%] xl:-ml-[6%] -mt-2 lg:-mt-4 xl:-mt-6">
          <img
            src="./assets/crane-lifting-container-route.svg"
            alt="Industrial Crane Lifting Container with Freight Route"
            className="w-full h-auto object-contain select-none drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)]"
          />
        </div>
      </div>

      {/* ========================================================= */}
      {/* RIGHT COLUMN: Senior Dispatch Trainer & Campus Direct Line*/}
      {/* ========================================================= */}
      <div className="relative w-[30%] xl:w-[28%] 2xl:w-[27%] flex flex-col justify-end pb-12 lg:pb-16 xl:pb-20 pr-6 lg:pr-10 xl:pr-14 pl-2 z-10">
        {/* Header Typography */}
        <div className="space-y-1.5 mb-5 lg:mb-6 text-left">
          <h2 className="text-xl sm:text-2xl xl:text-3xl font-extrabold tracking-tightest text-white leading-[1.15]">
            Direct Line To Your <br />
            <span className="text-dispatch-yellow">Senior Dispatch Trainer</span>
          </h2>

          <p className="text-[11px] sm:text-xs xl:text-[13px] text-dispatch-muted leading-relaxed max-w-xs mt-1.5">
            Direct telephone lines, WhatsApp consultation, and driving directions to the Zira academy campus.
          </p>
        </div>

        {/* Compact Spaced Rows with Outlined Yellow Icons */}
        <div className="space-y-3 lg:space-y-3.5">
          {/* 1. Campus Location Row */}
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-dispatch-yellow stroke-[2] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs sm:text-sm xl:text-base font-bold text-white tracking-tight leading-snug">
                Mallawala Road, Zira Campus
              </h3>
              <p className="text-[10px] sm:text-[11px] text-white/60 leading-tight mt-0.5">
                District Ferozepur, Punjab 142047
              </p>
              <a
                href={distanceInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[10px] sm:text-[11px] font-mono text-dispatch-yellow font-semibold mt-1 hover:underline cursor-pointer"
              >
                ~{distanceInfo.roadDistanceKm} km • {distanceInfo.drivingTime} drive from {distanceInfo.city}
              </a>
            </div>
          </div>

          <div className="border-t border-white/10" />

          {/* 2. Trainer 1 Row (Harry Dhillon) */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-dispatch-yellow stroke-[2] shrink-0 mt-0.5" />
              <div>
                <a
                  href="tel:+917888825122"
                  className="text-xs sm:text-sm xl:text-base font-bold text-white hover:text-dispatch-yellow transition-colors block"
                >
                  Harry Dhillon • +91 78888 25122
                </a>
                <span className="text-[10px] sm:text-[11px] text-white/60 block mt-0.5">
                  Senior Dispatch Trainer • Admissions &amp; Batches
                </span>
              </div>
            </div>

            <button
              onClick={() => openWhatsApp('talk', 'Senior Trainer Harry Dhillon')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-white/70 transition-colors shrink-0"
              aria-label="Chat with Harry Dhillon on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </button>
          </div>

          <div className="border-t border-white/10" />

          {/* 3. Trainer 2 Row (Jazz Dhillon) */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-dispatch-yellow stroke-[2] shrink-0 mt-0.5" />
              <div>
                <a
                  href="tel:+919814379035"
                  className="text-xs sm:text-sm xl:text-base font-bold text-white hover:text-dispatch-yellow transition-colors block"
                >
                  Jazz Dhillon • +91 98143 79035
                </a>
                <span className="text-[10px] sm:text-[11px] text-white/60 block mt-0.5">
                  Course Enquiry &amp; Free Demo Class Booking
                </span>
              </div>
            </div>

            <a
              href="tel:+919814379035"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-white/70 transition-colors shrink-0"
              aria-label="Call Jazz Dhillon"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

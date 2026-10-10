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
    <div className="relative w-full min-h-screen flex items-center overflow-hidden select-none">
      {/* ========================================================= */}
      {/* LEFT COLUMN: Large Industrial Crane Bleeding Left Edge    */}
      {/* ========================================================= */}
      <div className="relative w-[54%] xl:w-[56%] 2xl:w-[58%] h-full flex items-center justify-start pointer-events-none overflow-visible">
        <div className="relative w-[130%] lg:w-[136%] xl:w-[142%] max-w-none -ml-[18%] lg:-ml-[22%] xl:-ml-[25%] -mt-8 lg:-mt-12 xl:-mt-16">
          <img
            src="/assets/crane-lifting-container-route.svg"
            alt="Industrial Crane Lifting Container with Freight Route"
            className="w-full h-auto object-contain select-none drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)]"
          />
        </div>
      </div>

      {/* ========================================================= */}
      {/* RIGHT COLUMN: Senior Dispatch Trainer & Campus Direct Line*/}
      {/* ========================================================= */}
      <div className="relative w-[46%] xl:w-[44%] 2xl:w-[42%] flex flex-col justify-center pr-8 sm:pr-12 md:pr-16 lg:pr-20 xl:pr-28 pl-4 lg:pl-6 xl:pl-8 z-10">
        {/* Header Typography */}
        <div className="space-y-2 mb-8 xl:mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tightest text-white leading-[1.1]">
            Direct Line To Your <br />
            <span className="text-dispatch-yellow">Senior Dispatch Trainer</span>
          </h2>

          <p className="text-xs sm:text-sm xl:text-base text-dispatch-muted leading-relaxed max-w-lg mt-3">
            Direct telephone lines, WhatsApp consultation, and driving directions to the Zira academy campus.
          </p>
        </div>

        {/* Clean Spaced Rows with Outlined Yellow Icons Matching Reference Design */}
        <div className="space-y-5 xl:space-y-6">
          {/* 1. Campus Location Row */}
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-dispatch-yellow stroke-[2] shrink-0 mt-1" />
            <div>
              <h3 className="text-base sm:text-lg xl:text-xl font-bold text-white tracking-tight leading-snug">
                Mallawala Road, Zira Campus
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mt-0.5">
                District Ferozepur, Punjab 142047
              </p>
              <a
                href={distanceInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs sm:text-sm font-mono text-dispatch-yellow font-semibold mt-1 hover:underline cursor-pointer"
              >
                ~{distanceInfo.roadDistanceKm} km • {distanceInfo.drivingTime} drive from {distanceInfo.city}
              </a>
            </div>
          </div>

          <div className="border-t border-white/10" />

          {/* 2. Trainer 1 Row (Harry Dhillon) */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <User className="w-6 h-6 text-dispatch-yellow stroke-[2] shrink-0 mt-1" />
              <div>
                <a
                  href="tel:+917888825122"
                  className="text-base sm:text-lg xl:text-xl font-bold text-white hover:text-dispatch-yellow transition-colors block"
                >
                  Harry Dhillon • +91 78888 25122
                </a>
                <span className="text-xs sm:text-sm text-white/60 block mt-0.5">
                  Senior Dispatch Trainer • Admissions &amp; Batches
                </span>
              </div>
            </div>

            <button
              onClick={() => openWhatsApp('talk', 'Senior Trainer Harry Dhillon')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 px-4 sm:px-5 py-2.5 rounded-xl transition-all shrink-0 hover:scale-[1.02]"
              aria-label="Chat with Harry Dhillon on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </button>
          </div>

          <div className="border-t border-white/10" />

          {/* 3. Trainer 2 Row (Jazz Dhillon) */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <User className="w-6 h-6 text-dispatch-yellow stroke-[2] shrink-0 mt-1" />
              <div>
                <a
                  href="tel:+919814379035"
                  className="text-base sm:text-lg xl:text-xl font-bold text-white hover:text-dispatch-yellow transition-colors block"
                >
                  Jazz Dhillon • +91 98143 79035
                </a>
                <span className="text-xs sm:text-sm text-white/60 block mt-0.5">
                  Course Enquiry &amp; Free Demo Class Booking
                </span>
              </div>
            </div>

            <a
              href="tel:+919814379035"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-dispatch-yellow hover:border-dispatch-yellow/40 bg-white/5 hover:bg-white/10 border border-white/15 px-4 sm:px-5 py-2.5 rounded-xl transition-all shrink-0 hover:scale-[1.02]"
              aria-label="Call Jazz Dhillon"
            >
              <Phone className="w-4 h-4 text-dispatch-yellow" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

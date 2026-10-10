import React from 'react';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { useVisitorDistance } from '../../utils/geolocation';
import { openWhatsApp } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

interface DesktopCraneHotlineProps {
  onOpenConsultation?: () => void;
}

export const DesktopCraneHotline: React.FC<DesktopCraneHotlineProps> = () => {
  const distanceInfo = useVisitorDistance();

  return (
    <div className="w-full max-w-7xl mx-auto select-none">
      <div className="grid grid-cols-12 gap-8 xl:gap-14 items-center">
        {/* ========================================================= */}
        {/* LEFT COLUMN: Industrial Crane Lifting 3D Yellow Container */}
        {/* ========================================================= */}
        <div className="col-span-12 lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-full flex flex-col items-center justify-center animate-crane-float">
            {/* Subtle Ambient Radial Glow */}
            <div
              className="absolute -inset-6 opacity-25 pointer-events-none blur-3xl rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(251,194,30,0.2) 0%, rgba(8,16,23,0) 70%)',
              }}
            />

            {/* Industrial Crane Lifting Container SVG with Delivery Route Overlay */}
            <img
              src="/assets/crane-lifting-container-route.svg"
              alt="Industrial Crane Lifting Container with Delivery Route"
              className="w-full h-auto max-h-[460px] xl:max-h-[520px] object-contain select-none pointer-events-none drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)]"
            />

            {/* Soft Radial Ground Contact Shadow */}
            <div className="w-3/5 h-3 sm:h-4 bg-black/60 blur-md rounded-full mt-[-10px] pointer-events-none opacity-75" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Senior Dispatch Trainer & Campus Direct Line*/}
        {/* ========================================================= */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
          {/* Header Typography */}
          <div className="space-y-2.5 mb-6 xl:mb-8 text-left">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tightest text-white leading-[1.12]">
              Direct Line To Your <br />
              <span className="text-dispatch-yellow">Senior Dispatch Trainer</span>
            </h2>

            <p className="text-xs sm:text-sm xl:text-base text-dispatch-muted leading-relaxed max-w-lg">
              Direct telephone lines, WhatsApp consultation, and driving directions to the Zira academy campus.
            </p>
          </div>

          {/* Three Minimalist Frosted Action Cards */}
          <div className="space-y-3.5 xl:space-y-4">
            {/* 1. Campus Location Card */}
            <div className="bg-[#0d1620]/80 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md hover:border-dispatch-yellow/30 transition-all duration-300 shadow-xl group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-dispatch-yellow/10 border border-dispatch-yellow/20 flex items-center justify-center text-dispatch-yellow shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base xl:text-lg font-bold text-white tracking-tight leading-snug">
                      Mallawala Road, Zira Campus
                    </h3>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                      District Ferozepur, Punjab 142047
                    </p>
                    <p className="text-xs sm:text-sm font-mono text-dispatch-yellow font-semibold pt-0.5">
                      ~{distanceInfo.roadDistanceKm} km • {distanceInfo.drivingTime} drive from {distanceInfo.city}
                    </p>
                  </div>
                </div>

                <a
                  href={distanceInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-dispatch-yellow hover:border-dispatch-yellow/40 bg-white/5 hover:bg-white/10 border border-white/15 px-3 py-1.5 rounded-lg transition-all shrink-0 mt-0.5"
                  aria-label="View driving directions on Google Maps"
                >
                  <span>Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-dispatch-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* 2. Trainer 1 Card (Harry Dhillon) */}
            <div className="bg-[#0d1620]/80 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md hover:border-dispatch-yellow/30 transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <a
                    href="tel:+917888825122"
                    className="text-sm sm:text-base xl:text-lg font-bold text-white hover:text-dispatch-yellow transition-colors block"
                  >
                    Harry Dhillon
                  </a>
                  <span className="text-xs sm:text-sm text-white/50 block mt-0.5">
                    Senior Dispatch Trainer • Admissions &amp; Batches
                  </span>
                  <a
                    href="tel:+917888825122"
                    className="text-xs font-mono text-dispatch-yellow font-semibold block mt-1 hover:underline"
                  >
                    +91 78888 25122
                  </a>
                </div>

                <button
                  onClick={() => openWhatsApp('talk', 'Senior Trainer Harry Dhillon')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 px-3.5 py-2 rounded-lg transition-all shrink-0"
                  aria-label="Chat with Harry Dhillon on WhatsApp"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* 3. Trainer 2 Card (Jazz Dhillon) */}
            <div className="bg-[#0d1620]/80 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md hover:border-dispatch-yellow/30 transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <a
                    href="tel:+919814379035"
                    className="text-sm sm:text-base xl:text-lg font-bold text-white hover:text-dispatch-yellow transition-colors block"
                  >
                    Jazz Dhillon
                  </a>
                  <span className="text-xs sm:text-sm text-white/50 block mt-0.5">
                    Course Enquiry &amp; Free Demo Class Booking
                  </span>
                  <a
                    href="tel:+919814379035"
                    className="text-xs font-mono text-dispatch-yellow font-semibold block mt-1 hover:underline"
                  >
                    +91 98143 79035
                  </a>
                </div>

                <a
                  href="tel:+919814379035"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-dispatch-yellow hover:border-dispatch-yellow/40 bg-white/5 hover:bg-white/10 border border-white/15 px-3.5 py-2 rounded-lg transition-all shrink-0"
                  aria-label="Call Jazz Dhillon"
                >
                  <Phone className="w-3.5 h-3.5 text-dispatch-yellow" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

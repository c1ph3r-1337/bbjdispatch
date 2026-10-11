import React from 'react';
import { Phone } from 'lucide-react';
import { DesktopCraneHotline } from './desktop/DesktopCraneHotline';
import { SlideToActionButton } from './mobile/SlideToActionButton';
import { openDialer, openWhatsApp } from '../utils/whatsapp';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { useVisitorDistance } from '../utils/geolocation';

interface MobileCallerIdSectionProps {
  onOpenConsultation?: () => void;
}

export const MobileCallerIdSection: React.FC<MobileCallerIdSectionProps> = ({
  onOpenConsultation,
}) => {
  const distanceInfo = useVisitorDistance();

  return (
    <section id="caller-id" className="snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center items-center py-6 sm:py-8 md:py-14 lg:p-0 lg:px-0 lg:py-0 bg-[#081017] border-t border-white/5 overflow-hidden">
      {/* Background Subtle Radar & Grid Lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(251,194,30,0.18) 0%, transparent 70%), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
        }}
      />

      {/* Desktop Presentation: Industrial Crane Lifting 3D Yellow Container & Hotline */}
      <div className="hidden lg:block relative z-10 w-full">
        <DesktopCraneHotline onOpenConsultation={onOpenConsultation} />
      </div>

      {/* Mobile Presentation: Industrial Crane Lifting 3D Yellow Container & Mobile Hotline */}
      <div className="block lg:hidden relative z-10 w-full max-w-md mx-auto flex flex-col items-center select-none">
        {/* 1. Mobile Section Header (Centered) */}
        <div className="text-center w-full px-2 mb-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tightest text-white leading-tight">
            Direct Line To Your <br />
            <span className="text-dispatch-yellow">Senior Dispatch Trainer</span>
          </h2>

          <p className="mt-2 text-xs text-dispatch-muted leading-relaxed max-w-xs mx-auto">
            Direct telephone lines, WhatsApp consultation, and driving directions to the Zira academy campus.
          </p>
        </div>

        {/* 2. Industrial Crane Lifting 3D Yellow Container Graphic */}
        <div className="relative w-[118%] max-w-none -ml-[12%] my-1 pointer-events-none overflow-visible">
          <img
            src="./assets/crane-lifting-container-route.svg"
            alt="Industrial Crane Lifting Container with Freight Route"
            className="w-full h-auto object-contain select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
          />
        </div>

        {/* 3. Campus Location (Centered directly beneath crane) */}
        <div className="text-center w-full mt-2 mb-2.5 px-2">
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
            Mallawala Road, Zira Campus
          </h3>
          <p className="text-[11px] text-white/60 leading-tight mt-0.5">
            District Ferozepur, Punjab 142047
          </p>
          <a
            href={distanceInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[11px] font-mono text-dispatch-yellow font-semibold mt-1 hover:underline cursor-pointer"
          >
            ~{distanceInfo.roadDistanceKm} km • {distanceInfo.drivingTime} drive from {distanceInfo.city}
          </a>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="w-full border-t border-white/10 my-1" />

        {/* 4. Trainer Direct Contact Hotlines */}
        <div className="w-full space-y-2.5 my-2 px-2">
          {/* Harry Dhillon */}
          <div className="flex items-center justify-between w-full">
            <div>
              <a
                href="tel:+917888825122"
                className="text-xs sm:text-[13px] font-bold text-white hover:text-dispatch-yellow transition-colors block"
              >
                Harry Dhillon • +91 78888 25122
              </a>
              <span className="text-[10px] text-white/60 block mt-0.5">
                Senior Dispatch Trainer • Admissions &amp; Batches
              </span>
            </div>

            <button
              onClick={() => openWhatsApp('talk', 'Senior Trainer Harry Dhillon')}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white hover:text-white/70 transition-colors shrink-0"
              aria-label="Chat with Harry Dhillon on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Jazz Dhillon */}
          <div className="flex items-center justify-between w-full">
            <div>
              <a
                href="tel:+919814379035"
                className="text-xs sm:text-[13px] font-bold text-white hover:text-dispatch-yellow transition-colors block"
              >
                Jazz Dhillon • +91 98143 79035
              </a>
              <span className="text-[10px] text-white/60 block mt-0.5">
                Course Enquiry &amp; Free Demo Class Booking
              </span>
            </div>

            <a
              href="tel:+919814379035"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white hover:text-white/70 transition-colors shrink-0"
              aria-label="Call Jazz Dhillon"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call</span>
            </a>
          </div>
        </div>

        {/* 5. Interactive Slide to Call Trainer Button */}
        <div className="w-full pt-3 px-1">
          <SlideToActionButton
            label="Slide to Call Trainer"
            icon={<Phone className="w-5 h-5 text-dispatch-bg fill-dispatch-bg" />}
            onComplete={onOpenConsultation || (() => openDialer('+917888825122'))}
            showBackArrow={false}
          />
        </div>
      </div>
    </section>
  );
};

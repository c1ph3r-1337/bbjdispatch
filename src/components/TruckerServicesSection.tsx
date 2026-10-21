import React from 'react';

interface TruckerServicesSectionProps {
  isActive?: boolean;
  onExploreServices: () => void;
}

export const TruckerServicesSection: React.FC<TruckerServicesSectionProps> = ({
  isActive,
  onExploreServices,
}) => {
  return (
    <section
      id="trucker-services"
      className={`snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center pt-20 pb-4 sm:pt-24 sm:pb-8 md:pt-28 md:pb-12 px-6 md:px-12 lg:px-16 border-t border-white/5 bg-[#081017] ${
        isActive ? 'section-active' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Descriptive Story & Standalone Circular Arrow Button */}
        <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
          <p className="reveal-item delay-3 text-sm md:text-base text-dispatch-muted font-normal leading-relaxed">
            Separate from our academy, BBJ Dispatch operates an active commercial freight brokerage and dedicated truck dispatch service across North America. We provide owner-operators and fleet owners with 1-on-1 dedicated dispatchers, top per-mile load booking on DAT One, complete broker paperwork, factoring billing, and direct shipper freight — with zero forced dispatch.
          </p>

          <div className="reveal-scale delay-4">
            <button
              onClick={onExploreServices}
              className="group inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 hover:border-dispatch-yellow hover:bg-dispatch-yellow/10 transition-all duration-300 cursor-pointer"
              aria-label="Explore dedicated carrier services and fleet onboarding"
              title="Explore Carrier Services"
            >
              <span className="text-xl text-white group-hover:text-dispatch-yellow group-hover:translate-x-1 transition-all">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: High-Impact Typography with Yellow Highlight Badge */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <h2 className="reveal-item delay-1 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest leading-[1.1] text-white">
            Commercial Freight Brokerage &amp; Dedicated Dispatch For{' '}
            <span className="reveal-scale delay-2 inline-block bg-dispatch-yellow text-dispatch-bg px-3 py-0.5 rounded-md font-black shadow-md shadow-dispatch-yellow/20">
              Carriers
            </span>{' '}
            &amp; Fleet Owners
          </h2>
        </div>
      </div>
    </section>
  );
};

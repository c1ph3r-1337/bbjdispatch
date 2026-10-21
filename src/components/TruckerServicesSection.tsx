import React from 'react';
import { Truck, ArrowRight, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

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
      className={`snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center bg-[#081017] border-t border-white/5 py-12 sm:py-16 md:py-20 ${
        isActive ? 'section-active' : ''
      }`}
    >
      <div className="w-full max-w-7xl lg:max-w-[90rem] xl:max-w-[96rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="reveal-item delay-1 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dispatch-yellow/10 border border-dispatch-yellow/30 text-dispatch-yellow text-xs font-mono uppercase tracking-widest">
            <Truck className="w-3.5 h-3.5" />
            <span>Commercial Fleet Services</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-white">
            Need Dispatch or Freight for <span className="text-dispatch-yellow">Your Trucks?</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-dispatch-muted leading-relaxed">
            Separate from our academy, BBJ Dispatch operates an active commercial freight division. We handle dedicated truck dispatching and freight brokerage for owner-operators and fleet owners across North America.
          </p>
        </div>

        {/* 2 Feature Cards Grid */}
        <div className="reveal-item delay-2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Dedicated Truck Dispatching */}
          <div className="bg-white/[0.03] border border-white/10 hover:border-dispatch-yellow/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-dispatch-yellow/10 border border-dispatch-yellow/30 flex items-center justify-center text-dispatch-yellow group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-dispatch-yellow">
                  For Owner-Operators &amp; Fleets
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Dedicated Truck Dispatching
                </h3>
                <p className="text-xs sm:text-sm text-dispatch-muted leading-relaxed">
                  Get a personal 1-on-1 dispatcher assigned to your equipment who aggressively negotiates top per-mile rates on live load boards.
                </p>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-white/80 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0" />
                  <span>Highest rate-per-mile load booking (DAT One &amp; Truckstop)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0" />
                  <span>Complete broker packets, COI requests &amp; W-9 filing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0" />
                  <span>Detention ($50–$100/hr) &amp; TONU collection support</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0" />
                  <span><strong>Zero forced dispatch:</strong> You approve every load</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreServices}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-dispatch-yellow text-white hover:text-dispatch-yellow font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Dispatch Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Freight Brokerage */}
          <div className="bg-white/[0.03] border border-white/10 hover:border-dispatch-yellow/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-dispatch-yellow/10 border border-dispatch-yellow/30 flex items-center justify-center text-dispatch-yellow group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-dispatch-yellow">
                  Shipper &amp; Carrier Network
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Freight Brokerage Solutions
                </h3>
                <p className="text-xs sm:text-sm text-dispatch-muted leading-relaxed">
                  Connecting reliable carriers with steady shipper freight, quick payment terms, and 100% transparent rate confirmations.
                </p>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-white/80 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0" />
                  <span>Direct shipper loads across major US/Canada freight lanes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0" />
                  <span>Prompt QuickPay and seamless factoring clearance</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0" />
                  <span>Dry Van, Reefer, Flatbed, Step Deck &amp; Power Only</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0" />
                  <span>24/7 dedicated dispatch support &amp; check call tracking</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreServices}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-dispatch-yellow text-white hover:text-dispatch-yellow font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Brokerage Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Banner with Redirect to Dedicated Page */}
        <div className="reveal-scale delay-3 bg-gradient-to-r from-dispatch-yellow/15 via-white/[0.03] to-dispatch-yellow/10 border border-dispatch-yellow/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-dispatch-yellow" />
              <h4 className="text-base sm:text-lg font-bold text-white">
                Ready to Onboard Your Truck or Inquire About Freight?
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-dispatch-muted">
              Learn about our simple 3-step onboarding, carrier guarantees, and direct dispatch hotlines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-dispatch-yellow/20 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Explore Carrier Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => openWhatsApp('carrier', 'Commercial Fleet Services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

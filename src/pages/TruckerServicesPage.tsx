import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  PhoneCall, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck, 
  Clock, 
  DollarSign
} from 'lucide-react';
import { openWhatsApp, openDialer } from '../utils/whatsapp';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';

interface TruckerServicesPageProps {
  onBack: () => void;
}

export const TruckerServicesPage: React.FC<TruckerServicesPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Truck Dispatch & Freight Brokerage Services | BBJ Dispatch';
  }, []);

  return (
    <div className="min-h-screen bg-[#081017] text-white selection:bg-dispatch-yellow selection:text-[#081017]">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#081017]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 md:px-12 py-3.5 sm:py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 group text-left cursor-pointer"
            aria-label="Back to BBJ Dispatch Home"
          >
            <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-dispatch-yellow transition-colors">
              bbj dispatch
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-dispatch-yellow inline-block animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-dispatch-yellow/80 ml-1">
              Carrier Division
            </span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openDialer('+15593852018')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/80 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-dispatch-yellow" />
              <span>+1 (559) 385-2018</span>
            </button>

            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Academy</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-20 space-y-16 sm:space-y-24">
        {/* Minimalist Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-dispatch-yellow text-xs font-mono uppercase tracking-widest">
            // Commercial Logistics Desk
          </p>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest leading-[1.1] text-white">
            Freight Brokerage &amp; Dedicated <span className="text-dispatch-yellow">Truck Dispatch</span>
          </h1>

          <p className="text-sm sm:text-base text-dispatch-muted leading-relaxed max-w-2xl mx-auto">
            Operating independently from our training academy, BBJ Dispatch connects active motor carriers and shippers across North America with premium spot freight, top-tier rate negotiations, and complete back-office support.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => openWhatsApp('carrier', 'Commercial Carrier Onboarding')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-dispatch-yellow/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-dispatch-bg" />
              <span>Onboard Your Fleet</span>
            </button>

            <button
              onClick={() => openDialer('+15593852018')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white font-medium text-xs sm:text-sm transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-dispatch-yellow" />
              <span>USA Desk: +1 (559) 385-2018</span>
            </button>
          </div>
        </div>

        {/* 2 Core Services: Minimalist Editorial Columns */}
        <div className="space-y-8">
          <div className="border-b border-white/10 pb-4">
            <p className="text-dispatch-yellow text-xs font-mono uppercase tracking-widest">
              // Core Capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
              Two Specialized Freight Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Service 1: Truck Dispatch */}
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-dispatch-yellow/40 transition-colors">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-dispatch-yellow">
                    For Active Motor Carriers
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Dedicated Truck Dispatching
                  </h3>
                  <p className="text-xs sm:text-sm text-dispatch-muted leading-relaxed">
                    A dedicated dispatcher managing load search, broker calls, and rate negotiations tailored strictly to your equipment.
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/10 text-xs sm:text-sm text-white/80">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>1-on-1 Senior Dispatcher:</strong> Locked in on your preferred lanes, target RPM, and required home-time schedule.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Aggressive Spot Negotiation:</strong> Live booking on DAT One &amp; Truckstop Pro with zero forced dispatch.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>End-to-End Back Office:</strong> Packets, COI setup, same-day factoring submissions, and detention/TONU recovery.</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openWhatsApp('carrier', 'Dedicated Truck Dispatching')}
                className="w-full py-3 rounded-xl bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-dispatch-bg" />
                <span>Request Dedicated Dispatcher</span>
              </button>
            </div>

            {/* Service 2: Freight Brokerage */}
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-dispatch-yellow/40 transition-colors">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-dispatch-yellow">
                    For Shippers &amp; Fleet Partners
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Freight Brokerage &amp; Load Matching
                  </h3>
                  <p className="text-xs sm:text-sm text-dispatch-muted leading-relaxed">
                    Connecting reputable motor carriers with direct commercial freight, verified credit brokers, and fast payment processing.
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/10 text-xs sm:text-sm text-white/80">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Steady Regional Corridors:</strong> Contracted and spot freight across Midwest, South, Southeast, and Coast-to-Coast lanes.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Prompt Payment Processing:</strong> QuickPay options, direct ACH, and seamless integration with major factoring houses.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Transparent Documentation:</strong> Clean rate confirmations, vetted shipper credit, and 24/7 tracking support.</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openWhatsApp('carrier', 'Freight Brokerage Service')}
                className="w-full py-3 rounded-xl border border-white/20 hover:border-dispatch-yellow text-white hover:text-dispatch-yellow font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>Inquire About Freight Brokerage</span>
              </button>
            </div>
          </div>
        </div>

        {/* Equipment Supported: Minimalist Pill Ribbon */}
        <div className="space-y-4">
          <p className="text-dispatch-yellow text-xs font-mono uppercase tracking-widest text-center">
            // Fleet Compatibility
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {[
              'Dry Van (53\')',
              'Reefer (53\')',
              'Flatbed',
              'Step Deck',
              'Power Only',
              'Box Truck / Hotshot'
            ].map((equipment) => (
              <span
                key={equipment}
                className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-medium text-white/90 hover:border-dispatch-yellow/40 transition-colors"
              >
                {equipment}
              </span>
            ))}
          </div>
        </div>

        {/* 3-Step Simple Onboarding: Clean Numbered Flow */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <p className="text-dispatch-yellow text-xs font-mono uppercase tracking-widest">
              // Fast Setup
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Start Rolling in 3 Simple Steps
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <span className="text-2xl font-black font-mono text-dispatch-yellow">01</span>
              <h4 className="text-base font-bold text-white">Send Credentials</h4>
              <p className="text-xs sm:text-sm text-dispatch-muted leading-relaxed">
                Provide your MC certificate, COI ($1M auto liability / $100k cargo), and signed W-9.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <span className="text-2xl font-black font-mono text-dispatch-yellow">02</span>
              <h4 className="text-base font-bold text-white">Define Preferences</h4>
              <p className="text-xs sm:text-sm text-dispatch-muted leading-relaxed">
                Consult with your dispatcher to set preferred freight lanes, target $/mile, and home time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <span className="text-2xl font-black font-mono text-dispatch-yellow">03</span>
              <h4 className="text-base font-bold text-white">Roll &amp; Get Paid</h4>
              <p className="text-xs sm:text-sm text-dispatch-muted leading-relaxed">
                You approve each load before booking. We secure rate cons, handle check calls, and file your factoring.
              </p>
            </div>
          </div>
        </div>

        {/* Core Carrier Guarantees: Minimalist Trust Banner */}
        <div className="border-t border-b border-white/10 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="space-y-1.5 pt-4 sm:pt-0">
              <p className="text-lg sm:text-xl font-extrabold text-white">Zero Forced Dispatch</p>
              <p className="text-xs text-dispatch-muted max-w-xs mx-auto">
                100% approval rights on every load. You decide when, where, and what you haul.
              </p>
            </div>

            <div className="space-y-1.5 pt-4 sm:pt-0 sm:px-4">
              <p className="text-lg sm:text-xl font-extrabold text-dispatch-yellow">5%–8% Transparent Fee</p>
              <p className="text-xs text-dispatch-muted max-w-xs mx-auto">
                Simple percentage per completed load or flat weekly rate. Zero hidden administrative charges.
              </p>
            </div>

            <div className="space-y-1.5 pt-4 sm:pt-0 sm:pl-4">
              <p className="text-lg sm:text-xl font-extrabold text-white">No Lock-in Contracts</p>
              <p className="text-xs text-dispatch-muted max-w-xs mx-auto">
                We earn your business on every run. Pause or discontinue service anytime with zero penalty.
              </p>
            </div>
          </div>
        </div>

        {/* Minimalist Bottom Action / Direct Desk */}
        <div className="text-center space-y-6 pt-2">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Keep Your Trucks Moving?
            </h3>
            <p className="text-xs sm:text-sm text-dispatch-muted max-w-md mx-auto">
              Connect directly with our commercial dispatch desk via WhatsApp or phone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => openWhatsApp('carrier', 'Commercial Dispatch & Freight Brokerage')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-dispatch-yellow/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-dispatch-bg" />
              <span>Connect on WhatsApp</span>
            </button>

            <button
              onClick={onBack}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Academy</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

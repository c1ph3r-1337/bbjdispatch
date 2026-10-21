import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Truck, 
  ShieldCheck, 
  PhoneCall, 
  FileText, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Layers, 
  HelpCircle,
  ExternalLink
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
            <span className="w-2 h-2 rounded-full bg-dispatch-yellow inline-block animate-pulse" />
            <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-white/10 text-dispatch-yellow ml-1">
              Carrier Division
            </span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => openDialer('+917888825122')}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/90 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-dispatch-yellow" />
              <span>+91 78888 25122</span>
            </button>

            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Academy</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 space-y-16 sm:space-y-24">
        {/* Hero Section */}
        <div className="relative text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dispatch-yellow/10 border border-dispatch-yellow/30 text-dispatch-yellow text-xs font-mono uppercase tracking-widest">
            <Truck className="w-3.5 h-3.5" />
            <span>Commercial Fleet &amp; Carrier Services</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest leading-tight text-white">
            Freight Brokerage &amp; Dedicated <span className="text-dispatch-yellow">Truck Dispatch</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Separate from our training academy, BBJ Dispatch operates a full-scale commercial logistics desk. We negotiate top-paying loads, manage complete broker paperwork, and keep your wheels turning with <strong className="text-white">zero forced dispatch</strong>.
          </p>

          {/* Quick Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={() => openWhatsApp('carrier', 'Truck Dispatch Service')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-dispatch-yellow/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-dispatch-bg" />
              <span>Onboard Your Truck / Fleet</span>
            </button>

            <button
              onClick={() => openDialer('+15593852018')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-dispatch-yellow" />
              <span>USA Dispatch Desk: +1 (559) 385-2018</span>
            </button>
          </div>
        </div>

        {/* 2 Core Services Breakdown */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-dispatch-yellow text-xs font-mono uppercase tracking-widest">
              // Solutions for Owner-Operators &amp; Fleets
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Two Specialized Freight Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Service 1: Truck Dispatch Service */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-dispatch-yellow/50 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-dispatch-yellow/10 border border-dispatch-yellow/30 flex items-center justify-center text-dispatch-yellow">
                  <Truck className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-dispatch-yellow">
                    For Active Motor Carriers
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Dedicated Truck Dispatching
                  </h3>
                  <p className="text-xs sm:text-sm text-dispatch-muted leading-relaxed">
                    A dedicated dispatcher works exclusively on finding, negotiating, and locking in the best loads for your specific equipment.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 pt-2 border-t border-white/10">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>1-on-1 Dedicated Dispatcher:</strong> Knows your preferred lanes, target rpm, and home-time requirements.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Aggressive Rate Negotiation:</strong> We push spot market rates higher using DAT One and Truckstop Pro live analytics.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Complete Carrier Packets:</strong> Setup packets, COI requests, W-9, and NOA handled without you pulling over.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Factoring &amp; Invoicing:</strong> Invoices submitted same-day directly to your factoring company or direct-bill brokers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Detention &amp; TONU Collection:</strong> We aggressively pursue every dollar of shipper detention ($50–$100/hr) and TONU ($150–$300).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Zero Forced Dispatch:</strong> You have 100% approval rights on every load before we sign the rate confirmation.</span>
                  </li>
                </ul>
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
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-dispatch-yellow/50 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-dispatch-yellow/10 border border-dispatch-yellow/30 flex items-center justify-center text-dispatch-yellow">
                  <TrendingUp className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-dispatch-yellow">
                    Shipper &amp; Freight Solutions
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Freight Brokerage &amp; Load Matching
                  </h3>
                  <p className="text-xs sm:text-sm text-dispatch-muted leading-relaxed">
                    Connecting reputable motor carriers with credit-vetted freight, high-volume recurring lanes, and prompt payment processing.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 pt-2 border-t border-white/10">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Direct &amp; Contracted Freight:</strong> Steady freight volumes across Midwest, South, Southeast, and West Coast corridors.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Fast &amp; Secure Payments:</strong> QuickPay options, direct ACH, and seamless integration with all major factoring houses.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Transparent Rate Confirmations:</strong> Clean, straightforward documentation with zero unexpected deductions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>24/7 Operational Support:</strong> Live track-and-trace team available throughout transit, loading, and unloading.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>High Equipment Compatibility:</strong> Dry Van, Reefer, Flatbed, Step Deck, and Hotshot equipment loads available daily.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dispatch-yellow shrink-0 mt-0.5" />
                    <span><strong>Vetted Brokers Only:</strong> Every broker load is verified for high credit rating and verified payment history before booking.</span>
                  </li>
                </ul>
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

        {/* Equipment Supported */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-dispatch-yellow text-xs font-mono uppercase tracking-widest">
              // Fleet Compatibility
            </p>
            <h3 className="text-xl sm:text-3xl font-bold text-white">
              Equipment Types We Dispatch &amp; Broker
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
            {[
              { name: 'Dry Van (53\')', desc: 'General Freight' },
              { name: 'Reefer (53\')', desc: 'Temperature-Controlled' },
              { name: 'Flatbed', desc: 'Construction & Steel' },
              { name: 'Step Deck', desc: 'Oversized & Machinery' },
              { name: 'Power Only', desc: 'Drop & Hook Trailers' },
              { name: 'Box Truck / Hotshot', desc: 'Expedited & Local' },
            ].map((eq) => (
              <div key={eq.name} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <p className="text-xs sm:text-sm font-bold text-white">{eq.name}</p>
                <p className="text-[10px] sm:text-xs text-dispatch-muted">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Step Simple Onboarding */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <p className="text-dispatch-yellow text-xs font-mono uppercase tracking-widest">
              // Fast Setup
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Start Rolling in 3 Simple Steps
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 relative">
              <span className="text-3xl font-black text-dispatch-yellow/40 font-mono">01</span>
              <h4 className="text-base sm:text-lg font-bold text-white">Send Credentials</h4>
              <p className="text-xs sm:text-sm text-dispatch-muted leading-relaxed">
                Provide your MC Authority certificate, Certificate of Insurance (COI) listing $1,000,000 auto liability &amp; $100,000 cargo, and signed W-9.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 relative">
              <span className="text-3xl font-black text-dispatch-yellow/40 font-mono">02</span>
              <h4 className="text-base sm:text-lg font-bold text-white">Define Preferences</h4>
              <p className="text-xs sm:text-sm text-dispatch-muted leading-relaxed">
                Consult with your assigned senior dispatcher to outline preferred regional lanes, minimum acceptable rate per mile, and home-time schedules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 relative">
              <span className="text-3xl font-black text-dispatch-yellow/40 font-mono">03</span>
              <h4 className="text-base sm:text-lg font-bold text-white">Roll &amp; Get Paid</h4>
              <p className="text-xs sm:text-sm text-dispatch-muted leading-relaxed">
                You review and approve each load. We secure rate confirmations, manage broker check calls, and file your paperwork for prompt payment.
              </p>
            </div>
          </div>
        </div>

        {/* Why Carriers Partner With BBJ Dispatch */}
        <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Core Carrier Guarantees
            </h3>
            <p className="text-xs sm:text-sm text-dispatch-muted">
              Built on transparency, respect for the driver, and maximizing your take-home revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2 p-4">
              <ShieldCheck className="w-8 h-8 text-dispatch-yellow mx-auto" />
              <h4 className="text-sm sm:text-base font-bold text-white">Zero Forced Dispatch</h4>
              <p className="text-xs text-dispatch-muted leading-relaxed">
                You are the captain of your truck. If a load, lane, or shipper does not suit your schedule or price, we move to the next one.
              </p>
            </div>

            <div className="space-y-2 p-4">
              <DollarSign className="w-8 h-8 text-dispatch-yellow mx-auto" />
              <h4 className="text-sm sm:text-base font-bold text-white">Transparent Low Percentage</h4>
              <p className="text-xs text-dispatch-muted leading-relaxed">
                No hidden administrative fees or upfront deposits. Simple percentage (5%–8%) per completed load or flat weekly dispatch structure.
              </p>
            </div>

            <div className="space-y-2 p-4">
              <Clock className="w-8 h-8 text-dispatch-yellow mx-auto" />
              <h4 className="text-sm sm:text-base font-bold text-white">No Long-Term Lock-in</h4>
              <p className="text-xs text-dispatch-muted leading-relaxed">
                We earn your business on every run. No predatory 6-month or 1-year contracts; pause or stop service anytime with zero penalty.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Contact / Direct Line CTA */}
        <div className="text-center space-y-6 pt-4 border-t border-white/10">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Keep Your Trucks Moving?
            </h3>
            <p className="text-xs sm:text-sm text-dispatch-muted max-w-xl mx-auto">
              Connect directly with our commercial dispatch desk via WhatsApp or call our senior dispatchers right away.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openWhatsApp('carrier', 'Commercial Dispatch & Freight Brokerage')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-dispatch-yellow/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-dispatch-bg" />
              <span>Connect on WhatsApp</span>
            </button>

            <button
              onClick={onBack}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Academy Home</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

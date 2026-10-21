import React from 'react';
import { Check, X, PhoneCall } from 'lucide-react';
import { openWhatsApp, openDialer } from '../utils/whatsapp';

interface RealVsDummySectionProps {
  isActive?: boolean;
}

export const RealVsDummySection: React.FC<RealVsDummySectionProps> = ({ isActive }) => {
  const features = [
    {
      title: 'Commercial Load Boards',
      desc: 'Live enterprise DAT One & Truckstop Pro accounts',
    },
    {
      title: 'Live Broker Phone Calls',
      desc: 'Direct calls to US & Canada freight brokers from floor',
    },
    {
      title: 'Genuine Compliance & Packets',
      desc: 'Real carrier setup packets, COIs, W-9s & factoring',
    },
    {
      title: 'Operational Crisis Handling',
      desc: 'Live detention claims ($50–$100/hr) & TONU recovery',
    },
    {
      title: 'Job-Ready Muscle Memory',
      desc: 'Day-1 desk instinct & direct dispatcher placement',
    },
  ];

  return (
    <section
      id="real-vs-dummy"
      className={`snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center pt-14 pb-16 sm:pt-20 sm:pb-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/5 bg-[#081017] ${
        isActive ? 'section-active' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-14 items-center">
        {/* Left Column: Narrative & CTA (Centered on mobile, Left-aligned on desktop) */}
        <div className="lg:col-span-5 space-y-2.5 sm:space-y-5 text-center lg:text-left">
          <h2 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest leading-tight text-white">
            Train On Real Freight,{' '}
            <span className="inline-block bg-dispatch-yellow text-dispatch-bg px-2.5 py-0.5 rounded-md font-black shadow-md shadow-dispatch-yellow/20">
              Not
            </span>{' '}
            Simulations
          </h2>

          <p className="text-[11.5px] xs:text-xs sm:text-sm md:text-base text-dispatch-muted font-normal leading-relaxed max-w-md mx-auto lg:mx-0 line-clamp-2 sm:line-clamp-none">
            Other institutes charge high fees to teach on obsolete simulation mockups and scripted peer roleplays. At BBJ Dispatch, you train on active commercial DAT One &amp; Truckstop accounts, dialing real US freight brokers, negotiating live spot rates, and managing genuine carrier paperwork from day one.
          </p>

          <div className="pt-1 sm:pt-2 flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5">
            <button
              onClick={() => openWhatsApp('demo', 'Live Floor vs Dummy Simulations')}
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-md shadow-dispatch-yellow/20 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Book ₹49 Demo Class →
            </button>

            <button
              onClick={() => openDialer('+917888825122')}
              className="px-3.5 py-2 sm:px-5 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <PhoneCall className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-dispatch-yellow" />
              <span>Talk to Trainer</span>
            </button>
          </div>
        </div>

        {/* Right Column: Stytch-Style Comparison Table with Elevated Brand Column Pill */}
        <div className="lg:col-span-7 relative pt-1.5 pb-1.5 sm:pt-3 sm:pb-3 max-w-xl mx-auto lg:max-w-none w-full">
          <div className="relative bg-[#0d1622] border border-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-5 md:p-6 shadow-2xl">
            {/* Elevated Vertical Accent Column Pill for BBJ Dispatch (Stytch Signature Style) */}
            <div className="pointer-events-none absolute -top-2 -bottom-2 sm:-top-3 sm:-bottom-3 left-[48%] sm:left-[56.5%] w-[26%] sm:w-[25%] rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-dispatch-yellow/80 bg-[#121e2c] shadow-[0_8px_30px_rgba(0,0,0,0.9),0_0_20px_rgba(251,194,30,0.18)] z-0" />

            {/* Table Content */}
            <div className="relative z-10">
              {/* Table Header Row */}
              <div className="grid grid-cols-12 gap-1.5 sm:gap-4 items-center pb-2.5 sm:pb-4 border-b border-white/10 text-[9px] sm:text-xs font-mono uppercase tracking-wider text-dispatch-muted">
                <div className="col-span-6 sm:col-span-7 pl-1 sm:pl-2 font-semibold">Training Standard</div>
                <div className="col-span-3 text-center font-black text-dispatch-yellow">
                  <span className="block text-[11px] sm:text-sm font-bold text-white tracking-tight">BBJ</span>
                  <span className="hidden sm:inline text-[9px] text-dispatch-yellow">Dispatch</span>
                </div>
                <div className="col-span-3 sm:col-span-2 text-center text-white/40">
                  <span className="block text-[11px] sm:text-sm font-semibold text-white/50">Others</span>
                  <span className="hidden sm:inline text-[9px] text-white/30">Simulators</span>
                </div>
              </div>

              {/* Feature Comparison Rows */}
              <div className="divide-y divide-white/5">
                {features.map((feat, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-1.5 sm:gap-4 items-center py-2 sm:py-3.5">
                    {/* Feature Info */}
                    <div className="col-span-6 sm:col-span-7 pl-1 sm:pl-2 space-y-0.5">
                      <p className="text-[11px] sm:text-sm font-bold text-white leading-tight">{feat.title}</p>
                      <p className="text-[10px] text-dispatch-muted hidden sm:block line-clamp-1">{feat.desc}</p>
                    </div>

                    {/* BBJ Dispatch Checkmark (Inside the Elevated Column) */}
                    <div className="col-span-3 flex justify-center items-center">
                      <span className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-dispatch-yellow text-dispatch-bg flex items-center justify-center font-black shadow-md shadow-dispatch-yellow/30">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 stroke-[3]" />
                      </span>
                    </div>

                    {/* Other Institutes Cross */}
                    <div className="col-span-3 sm:col-span-2 flex justify-center items-center">
                      <span className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/5 text-white/30 flex items-center justify-center">
                        <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2]" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

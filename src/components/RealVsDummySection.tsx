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
      title: 'Genuine Compliance & Paperwork',
      desc: 'Real carrier setup packets, COIs, W-9s & factoring',
    },
    {
      title: 'Operational Crisis Handling',
      desc: 'Live detention claims ($50–$100/hr) & TONU recovery',
    },
    {
      title: 'Post-Course Job Readiness',
      desc: 'Day-1 desk muscle memory & dispatcher placement',
    },
  ];

  return (
    <section
      id="real-vs-dummy"
      className={`snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/5 bg-[#081017] ${
        isActive ? 'section-active' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Narrative & CTA (Stytch Left Side) */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest leading-[1.1] text-white">
            Train On Real Freight,{' '}
            <span className="inline-block bg-dispatch-yellow text-dispatch-bg px-3 py-0.5 rounded-md font-black shadow-md shadow-dispatch-yellow/20">
              Not
            </span>{' '}
            Simulations
          </h2>

          <p className="text-sm md:text-base text-dispatch-muted font-normal leading-relaxed">
            Other institutes charge high fees to teach on obsolete simulation mockups and scripted peer roleplays. At BBJ Dispatch, you train on active commercial DAT One &amp; Truckstop accounts, dialing real US freight brokers, negotiating live spot rates, and managing genuine carrier paperwork from day one.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
            <button
              onClick={() => openWhatsApp('demo', 'Live Floor vs Dummy Simulations')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-dispatch-yellow/20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Book ₹49 Demo Class →
            </button>

            <button
              onClick={() => openDialer('+917888825122')}
              className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-dispatch-yellow" />
              <span>Talk to Trainer</span>
            </button>
          </div>
        </div>

        {/* Right Column: Stytch-Style Comparison Table with Elevated Brand Column Pill */}
        <div className="lg:col-span-7 relative pt-3 pb-3">
          <div className="relative bg-[#0d1622] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl">
            {/* Elevated Vertical Accent Column Pill for BBJ Dispatch (Stytch Signature Style) */}
            <div className="pointer-events-none absolute -top-3 -bottom-3 left-[48%] sm:left-[56.5%] w-[26%] sm:w-[25%] rounded-2xl sm:rounded-3xl border-2 border-dispatch-yellow/80 bg-[#121e2c] shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(251,194,30,0.18)] z-0" />

            {/* Table Content */}
            <div className="relative z-10">
              {/* Table Header Row */}
              <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center pb-4 border-b border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-dispatch-muted">
                <div className="col-span-6 sm:col-span-7 pl-1 sm:pl-2 font-semibold">Training Standard</div>
                <div className="col-span-3 text-center font-black text-dispatch-yellow">
                  <span className="block text-xs sm:text-sm font-bold text-white tracking-tight">BBJ</span>
                  <span className="hidden sm:inline text-[9px] text-dispatch-yellow">Dispatch</span>
                </div>
                <div className="col-span-3 sm:col-span-2 text-center text-white/40">
                  <span className="block text-xs sm:text-sm font-semibold text-white/50">Others</span>
                  <span className="hidden sm:inline text-[9px] text-white/30">Simulators</span>
                </div>
              </div>

              {/* Feature Comparison Rows */}
              <div className="divide-y divide-white/5">
                {features.map((feat, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-2 sm:gap-4 items-center py-3.5 sm:py-4">
                    {/* Feature Info */}
                    <div className="col-span-6 sm:col-span-7 pl-1 sm:pl-2 space-y-0.5">
                      <p className="text-xs sm:text-sm font-bold text-white leading-snug">{feat.title}</p>
                      <p className="text-[10px] sm:text-xs text-dispatch-muted line-clamp-1">{feat.desc}</p>
                    </div>

                    {/* BBJ Dispatch Checkmark (Inside the Elevated Column) */}
                    <div className="col-span-3 flex justify-center items-center">
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-dispatch-yellow text-dispatch-bg flex items-center justify-center font-black shadow-md shadow-dispatch-yellow/30">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                      </span>
                    </div>

                    {/* Other Institutes Cross */}
                    <div className="col-span-3 sm:col-span-2 flex justify-center items-center">
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/5 text-white/30 flex items-center justify-center">
                        <X className="w-3.5 h-3.5 stroke-[2]" />
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

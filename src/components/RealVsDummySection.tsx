import React from 'react';
import { Check, X, ShieldAlert, Zap, Radio, PhoneCall } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface RealVsDummySectionProps {
  isActive?: boolean;
}

export const RealVsDummySection: React.FC<RealVsDummySectionProps> = ({ isActive }) => {
  const comparisons = [
    {
      category: 'Load Board Access',
      bbj: {
        title: 'Live DAT One & Truckstop Pro',
        desc: 'Students operate on real, active commercial enterprise subscriptions with live freight, spot market averages, and real lane density.',
      },
      others: {
        title: 'Dummy Offline Simulators',
        desc: 'Rely on offline dummy software, fake mock databases, and static screenshots that do not reflect volatile real-world market rates.',
      },
    },
    {
      category: 'Broker Negotiation',
      bbj: {
        title: 'Live Phone Calls with US Brokers',
        desc: 'Students dial live freight brokers across the US and Canada directly from our dispatch floor, negotiating real loads in real time.',
      },
      others: {
        title: 'Classroom Roleplay & Audio Tapes',
        desc: 'Students talk to classmates or listen to old recorded audio. Zero exposure to tough live broker objections or actual rate pressure.',
      },
    },
    {
      category: 'Paperwork & Compliance',
      bbj: {
        title: 'Real Carrier Packets & Factoring',
        desc: 'Hands-on completion of genuine carrier setup packets, COIs, W-9s, rate confirmations, NOAs, and actual factoring submissions.',
      },
      others: {
        title: 'Theoretical PowerPoint Slides',
        desc: 'Passive slide presentations explaining sample PDFs. Students never submit real compliance documents or interact with factoring.',
      },
    },
    {
      category: 'Troubleshooting & Crisis',
      bbj: {
        title: 'Live Detention, TONU & Layover Recovery',
        desc: 'Learn how to aggressively fight for driver detention ($50–$100/hr), TONU, and layovers during live active freight transit.',
      },
      others: {
        title: 'Zero Operational Crisis Training',
        desc: 'Glosses over reality. Students are completely unprepared when a broker cancels, a load rejects, or detention is denied.',
      },
    },
    {
      category: 'Career Placement & Confidence',
      bbj: {
        title: 'Day-1 Desk Muscle Memory',
        desc: 'Graduates enter the industry having already booked loads and handled live calls. Placement assistance & direct dispatcher mentorship.',
      },
      others: {
        title: 'Paper Certificate, Zero Confidence',
        desc: 'Issue certificates of completion, but graduates freeze on their first real job interview because dummy tools built zero instinct.',
      },
    },
  ];

  return (
    <section
      id="real-vs-dummy"
      className={`snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center bg-[#081017] border-t border-white/5 py-12 sm:py-16 md:py-20 ${
        isActive ? 'section-active' : ''
      }`}
    >
      <div className="w-full max-w-7xl lg:max-w-[90rem] xl:max-w-[96rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="reveal-item delay-1 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dispatch-yellow/10 border border-dispatch-yellow/30 text-dispatch-yellow text-xs font-mono uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Practical Training vs Dummy Simulations</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-white">
            Real Desk Operations <span className="text-dispatch-yellow">vs.</span> Dummy Software
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-dispatch-muted leading-relaxed">
            Many institutes charge heavy fees to teach on obsolete simulation mockups and scripted roleplays. At BBJ Dispatch, you sit on an active dispatch floor with live DAT One accounts and talk to real US brokers.
          </p>
        </div>

        {/* Head-to-Head Comparison Grid */}
        <div className="reveal-item delay-2 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* BBJ Dispatch Card (Highlighted, Premium, Yellow Glow) */}
          <div className="relative bg-[#0d1721] border-2 border-dispatch-yellow/60 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_0_30px_rgba(251,194,30,0.12)] space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-dispatch-yellow/20 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-dispatch-yellow/20 flex items-center justify-center text-dispatch-yellow">
                    <Zap className="w-5 h-5 fill-dispatch-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white">
                      BBJ Dispatch Academy
                    </h3>
                    <p className="text-[11px] font-mono text-dispatch-yellow font-semibold uppercase tracking-wider">
                      100% Practical &amp; Live Training
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#25D366]/20 text-[#25D366] text-xs font-bold border border-[#25D366]/30">
                  Verified Real Floor
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {comparisons.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1 hover:border-dispatch-yellow/30 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {item.bbj.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-dispatch-muted pl-7 leading-relaxed">
                      {item.bbj.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="pt-4 border-t border-dispatch-yellow/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <span className="text-xs text-white/70">
                Experience the real dispatch floor firsthand:
              </span>
              <button
                onClick={() => openWhatsApp('demo')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-dispatch-yellow/20 cursor-pointer"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-dispatch-bg" />
                <span>Book ₹49 Demo Class</span>
              </button>
            </div>
          </div>

          {/* Competitor / Dummy Institutes Card (Muted, Warning / Cross Style) */}
          <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white/80">
                      Other Training Institutes
                    </h3>
                    <p className="text-[11px] font-mono text-red-400/80 font-semibold uppercase tracking-wider">
                      Dummy Simulations &amp; Scripts
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold border border-red-500/20">
                  Zero Live Calls
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {comparisons.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.01] border border-white/5 space-y-1 opacity-80"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white/90">
                        {item.others.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-white/50 pl-7 leading-relaxed">
                      {item.others.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Note */}
            <div className="pt-4 border-t border-white/10 text-center sm:text-left">
              <p className="text-[11px] text-white/40 leading-relaxed">
                * Simulated software cannot replicate live broker market volatility, credit approvals, or high-pressure phone negotiations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

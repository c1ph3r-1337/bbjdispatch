import React, { useEffect } from 'react';
import { ArrowLeft, Phone } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';

interface TermsPageProps {
  onBack: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#081017] text-white selection:bg-dispatch-yellow selection:text-[#081017]">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#081017]/95 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 group"
          >
            <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-dispatch-yellow transition-colors">
              bbj dispatch
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-dispatch-yellow animate-pulse" />
          </button>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-semibold text-white/90 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Page Title */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-white">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-dispatch-muted">
            Last Updated: October 2026 • BBJ Dispatch Academy
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or enrolling in any program offered by BBJ Dispatch Academy (&quot;BBJ Dispatch&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using our website or enrolling in our courses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              2. Course Offerings &amp; 45-Day Syllabus
            </h2>
            <p>
              BBJ Dispatch Academy provides educational training programs in U.S. freight dispatching, including our signature 45-Day Truck Dispatch Course available in online interactive cohorts and offline classroom sessions (Ludhiana center).
            </p>
            <p>
              The training covers fundamental industry concepts including trailer types (Dry Van, Reefer, Flatbed), load board operations (DAT One, Truckstop.com), rate negotiation, rate confirmations, bill of lading (BOL) management, carrier setup packages, and job preparation. Course schedules, batch timings, and faculty allocations are subject to operational scheduling.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              3. Free Demo Class &amp; Enrollment Policy
            </h2>
            <p>
              Prospective students are encouraged to attend a complimentary free demo class prior to formal registration. Enrollment is confirmed upon completion of the admission process and payment of the applicable course fee.
            </p>
            <p>
              Course fees cover instruction, study materials, mock call practice sessions, and trainer support for the duration of the registered batch. Seat reservations are non-transferable without prior written authorization from the academy administration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              4. Practical Mock Calls &amp; Software Demonstrations
            </h2>
            <p>
              Our curriculum includes hands-on simulations of broker communications, load board searching, and live dispatch workflows. Access to third-party tools, demonstration software, or load board screens during class hours is provided strictly for educational purposes and does not grant individual commercial software subscriptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              5. Intellectual Property
            </h2>
            <p>
              All course materials, video lectures, sample scripts, negotiation templates, rate calculation spreadsheets, and website content are the proprietary intellectual property of BBJ Dispatch Academy. Recording, unauthorized reproduction, public distribution, or commercial resale of training materials is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              6. Career Guidance &amp; Industry Disclaimer
            </h2>
            <p>
              BBJ Dispatch Academy provides practical dispatch training, resume enhancement, and mock interview coaching to prepare students for freight dispatch careers. While we actively assist students with industry guidance, we do not promise or guarantee specific salary figures, broker accounts, or employment outcomes, as carrier earnings and hiring decisions depend entirely on individual competency, language proficiency, market freight conditions, and employer requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              7. Contact &amp; Grievances
            </h2>
            <p>
              For questions regarding these Terms of Service or course admissions, please contact our administration team:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-dispatch-yellow" />
                <span>Admissions: +91 78888 25122 / +91 98143 79035</span>
              </p>
            </div>
          </section>
        </div>

        {/* Bottom Action */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-center">
          <button
            onClick={() => openWhatsApp('demo')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:underline"
          >
            <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
            <span>Have questions? Chat on WhatsApp</span>
          </button>
        </div>
      </main>
    </div>
  );
};

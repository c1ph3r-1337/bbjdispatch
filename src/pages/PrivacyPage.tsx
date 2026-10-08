import React, { useEffect } from 'react';
import { ArrowLeft, Phone } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';

interface PrivacyPageProps {
  onBack: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
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
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-dispatch-muted">
            Last Updated: October 2026 • BBJ Dispatch Academy
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              1. Information We Collect
            </h2>
            <p>
              When you interact with BBJ Dispatch Academy through our website, inquiry forms, demo class registrations, or WhatsApp consultations, we may collect the following personal information:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-dispatch-muted">
              <li>Full Name</li>
              <li>Telephone / WhatsApp Contact Number</li>
              <li>City / Location</li>
              <li>Course Preference (Online Interactive vs. Offline Classroom)</li>
              <li>Professional background or prior logistics experience (if voluntarily provided)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              2. How We Use Your Information
            </h2>
            <p>
              The information we collect is utilized exclusively for genuine educational and administrative purposes:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-dispatch-muted">
              <li>Scheduling your free demo class session and sharing class link details.</li>
              <li>Delivering the 45-day syllabus breakdown, course schedules, and fee information via WhatsApp.</li>
              <li>Providing 1-on-1 counseling with senior trainers Harry Dhillon &amp; Jazz Dhillon.</li>
              <li>Enrolling students into active cohorts and managing student attendance records.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              3. WhatsApp &amp; Communication Policy
            </h2>
            <p>
              We respect your communication preferences. We use WhatsApp as a direct, real-time channel to communicate with students regarding demo bookings, class reminders, and curriculum questions.
            </p>
            <p>
              We maintain a strict zero-spam policy. We do not engage in automated robocalls, unsolicited bulk messages, or intrusive advertising campaigns. You may opt out of communications at any time by simply letting us know.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              4. Data Sharing &amp; Third-Party Services
            </h2>
            <p>
              <strong>We do not sell, rent, trade, or share your personal data with third-party advertisers or external marketing agencies.</strong>
            </p>
            <p>
              We may utilize reputable service providers to deliver our educational services, such as video conferencing software (Zoom, Microsoft Teams, Google Meet) for live online batches, and secure cloud platforms for student record keeping.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              5. Data Security &amp; Retention
            </h2>
            <p>
              We implement industry-standard administrative and technological safeguards to protect personal information against unauthorized access, alteration, or disclosure. Contact records are retained only as long as necessary to serve educational and administrative requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              6. Your Privacy Rights
            </h2>
            <p>
              You have the right to request access to the personal data we maintain about you, request corrections to inaccurate details, or ask for the deletion of your inquiry records from our database. To make a request, contact our admissions desk via telephone or WhatsApp.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              7. Privacy Contact
            </h2>
            <p>
              If you have any questions or feedback regarding our privacy practices, please contact our administration:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-dispatch-yellow" />
                <span>Admissions Desk: +91 78888 25122</span>
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

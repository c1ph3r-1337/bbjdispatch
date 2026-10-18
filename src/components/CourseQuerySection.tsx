import React, { useState } from 'react';
import { MessageSquare, Phone, CheckCircle, Send, HelpCircle } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { COURSE_OPTIONS } from './EnrollModal';

interface CourseQuerySectionProps {
  isActive?: boolean;
}

export const CourseQuerySection: React.FC<CourseQuerySectionProps> = ({ isActive }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState<string>(COURSE_OPTIONS[1]); // Default: 'Truck Dispatch'
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const buildWhatsAppMessage = () => {
    return `Hello BBJ Dispatch, I have a course query:
• Name: ${name.trim() || 'Interested Candidate'}
• Course: ${course}
• Address: ${address.trim() || 'Not specified'}
• Phone: ${phone.trim() || 'Not provided'}
• Other Details: ${details.trim() || 'None'}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/917888825122?text=${encodeURIComponent(buildWhatsAppMessage())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setAddress('');
    setDetails('');
  };

  return (
    <section
      id="query"
      className={`snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center items-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#081017] border-t border-white/10 overflow-hidden ${
        isActive ? 'section-active' : ''
      }`}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Header Block */}
        <div className="reveal-item delay-1 text-center mb-6 sm:mb-8 md:mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dispatch-yellow/10 border border-dispatch-yellow/30 text-dispatch-yellow text-xs font-mono uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Direct Trainer Query Desk</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tightest text-white leading-tight">
            Have A Query About <br className="hidden sm:inline" />
            <span className="text-dispatch-yellow">Our Courses?</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-dispatch-muted mt-2 max-w-lg mx-auto">
            Fill in your details and question below. Our senior trainers will review your query and reply directly to your WhatsApp.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="reveal-scale delay-2 w-full max-w-3xl bg-[#0d1620]/95 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative">
          {submitted ? (
            <div className="py-6 sm:py-10 text-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-dispatch-yellow/15 border-2 border-dispatch-yellow flex items-center justify-center mx-auto text-dispatch-yellow animate-bounce-slow">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                Query Prepared &amp; Sent!
              </h3>
              <p className="text-xs sm:text-sm text-dispatch-muted max-w-md mx-auto">
                Thank you <span className="text-white font-semibold">{name}</span>. Your inquiry regarding <span className="text-dispatch-yellow font-semibold">{course}</span> has been dispatched to WhatsApp.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/917888825122?text=${encodeURIComponent(buildWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Re-open WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Ask Another Question</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* 1. Name */}
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-dispatch-yellow">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jaspreet Singh"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-dispatch-yellow focus:ring-1 focus:ring-dispatch-yellow text-white text-sm placeholder:text-white/30 transition-all outline-none"
                  />
                </div>

                {/* 2. Phone */}
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number <span className="text-dispatch-yellow">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-dispatch-yellow focus:ring-1 focus:ring-dispatch-yellow text-white text-sm placeholder:text-white/30 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* 3. Course Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Select Course <span className="text-dispatch-yellow">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#091119] border border-white/10 focus:border-dispatch-yellow focus:ring-1 focus:ring-dispatch-yellow text-white text-sm transition-all outline-none cursor-pointer appearance-none pr-10"
                    >
                      {COURSE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#091119] text-white py-1">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-dispatch-yellow">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 4. Address */}
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Your Address / City <span className="text-dispatch-yellow">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. Ludhiana, Punjab or California, USA"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-dispatch-yellow focus:ring-1 focus:ring-dispatch-yellow text-white text-sm placeholder:text-white/30 transition-all outline-none"
                  />
                </div>
              </div>

              {/* 5. Other Details / Query Question */}
              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                  Other Details / Your Question
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell us what you'd like to know (batch timings, syllabus, fees, demo class, placement assistance...)"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-dispatch-yellow focus:ring-1 focus:ring-dispatch-yellow text-white text-sm placeholder:text-white/30 transition-all outline-none resize-none"
                />
              </div>

              {/* Submit & Hotline Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-dispatch-yellow/20 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-dispatch-bg" />
                  <span>Send Query via WhatsApp</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <a
                  href="tel:+917888825122"
                  className="w-full sm:w-auto py-3 px-5 rounded-full border border-white/15 hover:border-dispatch-yellow/60 text-white/90 hover:text-dispatch-yellow text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-dispatch-yellow" />
                  <span>Call +91 78888 25122</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

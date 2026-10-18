import React, { useState } from 'react';
import { User, Phone, BookOpen, MapPin, MessageSquare, ChevronDown, CheckCircle, Send } from 'lucide-react';
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
      className={`snap-section relative z-20 min-h-[100dvh] min-h-screen flex flex-col justify-center items-center py-10 sm:py-16 md:py-20 px-3.5 sm:px-6 md:px-12 bg-[#081017] border-t border-white/10 overflow-hidden ${
        isActive ? 'section-active' : ''
      }`}
    >
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        {/* Minimalist Section Header */}
        <div className="reveal-item delay-1 text-center mb-3 sm:mb-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tightest text-white leading-tight">
            Course <span className="text-dispatch-yellow">Query</span>
          </h2>
          <p className="text-xs sm:text-sm text-dispatch-muted mt-1 max-w-sm mx-auto">
            Have a question? Fill in your details below and send your query directly via WhatsApp.
          </p>
        </div>

        {/* Minimalist Card Container with Translucent Dark Backdrop */}
        <div className="reveal-scale delay-2 w-full bg-[#0d1620]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 md:p-7 shadow-2xl shadow-black/80">
          {submitted ? (
            <div className="py-6 text-center space-y-3.5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-dispatch-yellow/15 border-2 border-dispatch-yellow flex items-center justify-center mx-auto text-dispatch-yellow">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Query Prepared &amp; Sent!
              </h3>
              <p className="text-xs text-dispatch-muted max-w-xs mx-auto">
                Thank you <span className="text-white font-semibold">{name}</span>. Your query for <span className="text-dispatch-yellow font-semibold">{course}</span> has been dispatched to WhatsApp.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <a
                  href={`https://wa.me/917888825122?text=${encodeURIComponent(buildWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Re-open WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>Ask Another Question</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              {/* Section Divider 1: Personal Details */}
              <div className="relative my-2 sm:my-3 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <span className="relative bg-[#0d1620] px-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-dispatch-yellow/80">
                  Personal Details
                </span>
              </div>

              {/* Row 1: Name & Phone with embedded icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                    Your Name <span className="text-dispatch-yellow">*</span>
                  </label>
                  <div className="relative group">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-dispatch-yellow transition-colors pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-white/[0.04] border border-white/12 focus:border-dispatch-yellow focus:ring-1 focus:ring-dispatch-yellow/40 text-white text-xs sm:text-sm placeholder:text-white/25 transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                    Phone / WhatsApp <span className="text-dispatch-yellow">*</span>
                  </label>
                  <div className="relative group">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-dispatch-yellow transition-colors pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="9XXXXXXXXXX"
                      className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-white/[0.04] border border-white/12 focus:border-dispatch-yellow focus:ring-1 focus:ring-dispatch-yellow/40 text-white text-xs sm:text-sm placeholder:text-white/25 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section Divider 2: Course & Query Details */}
              <div className="relative my-2 sm:my-3 flex items-center justify-center pt-1">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <span className="relative bg-[#0d1620] px-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-dispatch-yellow/80">
                  Course &amp; Inquiry
                </span>
              </div>

              {/* Row 2: Course & City/Address with embedded icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                    Select Course <span className="text-dispatch-yellow">*</span>
                  </label>
                  <div className="relative group">
                    <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-dispatch-yellow transition-colors pointer-events-none" />
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full pl-10 pr-8 py-2 sm:py-2.5 rounded-xl bg-[#091119] border border-white/12 focus:border-dispatch-yellow focus:ring-1 focus:ring-dispatch-yellow/40 text-white text-xs sm:text-sm transition-all outline-none cursor-pointer appearance-none"
                    >
                      {COURSE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#091119] text-white py-1">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dispatch-yellow" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                    City / Location <span className="text-dispatch-yellow">*</span>
                  </label>
                  <div className="relative group">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-dispatch-yellow transition-colors pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. Ludhiana, Punjab"
                      className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-white/[0.04] border border-white/12 focus:border-dispatch-yellow focus:ring-1 focus:ring-dispatch-yellow/40 text-white text-xs sm:text-sm placeholder:text-white/25 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Question / Details with embedded icon */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                  Your Question / Specific Details
                </label>
                <div className="relative group">
                  <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-white/40 group-focus-within:text-dispatch-yellow transition-colors pointer-events-none" />
                  <textarea
                    rows={2}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Enter your question or details here..."
                    className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-white/[0.04] border border-white/12 focus:border-dispatch-yellow focus:ring-1 focus:ring-dispatch-yellow/40 text-white text-xs sm:text-sm placeholder:text-white/25 transition-all outline-none resize-none"
                  />
                </div>
              </div>

              {/* Single Minimalist Action Button */}
              <div className="pt-1.5 sm:pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md shadow-dispatch-yellow/15 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-dispatch-bg" />
                  <span>Send Query via WhatsApp</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseQuerySection;

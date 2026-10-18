import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, MessageSquare, Phone } from 'lucide-react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
  isSyllabusMode?: boolean;
}

export const COURSE_OPTIONS = [
  'Freight brokerage',
  'Truck Dispatch',
  'Dispatch course',
  'Logging and Tracking course',
] as const;

export const EnrollModal: React.FC<EnrollModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = 'Truck Dispatch',
  isSyllabusMode = false,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<string>(() => {
    return COURSE_OPTIONS.includes(defaultCourse as any) ? defaultCourse : 'Truck Dispatch';
  });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      const match = COURSE_OPTIONS.find((c) => c.toLowerCase() === defaultCourse.toLowerCase());
      if (match) setSelectedCourse(match);
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    return `Hello BBJ Dispatch, I have a course query:
• Name: ${name.trim() || 'Interested Student'}
• Course: ${selectedCourse}
• Address: ${address.trim() || 'Not specified'}
• Phone: ${phone.trim() || 'Not provided'}
• Details: ${details.trim() || 'None'}`;
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-modal-backdrop">
      <div className="relative w-full max-w-lg bg-[#0d1620] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/80 animate-modal-card max-h-[90dvh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-dispatch-muted hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-dispatch-yellow/15 border border-dispatch-yellow flex items-center justify-center mx-auto text-dispatch-yellow">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Query Sent on WhatsApp!
            </h3>
            <p className="text-sm text-dispatch-muted max-w-sm mx-auto">
              Thank you {name}. Harry Dhillon &amp; the admissions team have received your query for <span className="text-dispatch-yellow font-semibold">{selectedCourse}</span> and will reply on WhatsApp shortly.
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

              <a
                href="tel:+917888825122"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-dispatch-yellow" />
                <span>Call +91 78888 25122</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="text-xs text-dispatch-muted hover:text-white underline transition-colors cursor-pointer"
              >
                Close &amp; Return to Academy
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-dispatch-yellow text-xs font-mono uppercase tracking-widest">
                // {isSyllabusMode ? 'Course Query & Syllabus' : 'Student Query & Consultation'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Course Query Question
              </h3>
              <p className="text-xs sm:text-sm text-dispatch-muted mt-1.5">
                Have a question about our courses? Enter your details below to send your query directly to senior trainer Harry Dhillon on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* 1. Course Selection Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                  Select Course
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-3 bg-[#081017] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-dispatch-yellow transition-colors cursor-pointer"
                >
                  {COURSE_OPTIONS.map((course) => (
                    <option key={course} value={course} className="bg-[#081017] text-white">
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Gurpreet Singh"
                    className="w-full px-4 py-3 bg-[#081017] border border-white/10 rounded-xl text-white placeholder-dispatch-textMuted text-sm focus:outline-none focus:border-dispatch-yellow transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Mobile / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 78888 25122"
                    className="w-full px-4 py-3 bg-[#081017] border border-white/10 rounded-xl text-white placeholder-dispatch-textMuted text-sm focus:outline-none focus:border-dispatch-yellow transition-colors"
                  />
                </div>
              </div>

              {/* 3. Address */}
              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                  Address
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Mallawala Road, Zira, Punjab or City / State"
                  className="w-full px-4 py-3 bg-[#081017] border border-white/10 rounded-xl text-white placeholder-dispatch-textMuted text-sm focus:outline-none focus:border-dispatch-yellow transition-colors"
                />
              </div>

              {/* 4. Other Details / Query Question */}
              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                  Other Details / Query Question
                </label>
                <textarea
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Ask about batch timings, fees, load boards taught, placement assistance, etc."
                  className="w-full px-4 py-2.5 bg-[#081017] border border-white/10 rounded-xl text-white placeholder-dispatch-textMuted text-sm focus:outline-none focus:border-dispatch-yellow transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs md:text-sm tracking-wider uppercase transition-all shadow-lg shadow-dispatch-yellow/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-dispatch-bg" />
                  <span>Send Query on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-dispatch-textMuted text-center">
                Instant response from Harry Dhillon &bull; <a href="tel:+917888825122" className="text-dispatch-yellow font-bold hover:underline">+91 78888 25122</a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

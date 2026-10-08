import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, MessageSquare, Phone } from 'lucide-react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
  isSyllabusMode?: boolean;
}

export const EnrollModal: React.FC<EnrollModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = '45-Day Truck Dispatch Course',
  isSyllabusMode = false,
}) => {
  const [selectedCourse, setSelectedCourse] = useState(defaultCourse);
  const [format, setFormat] = useState('Online');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsAppUrl = `https://wa.me/917888825122?text=Hello%20BBJ%20Dispatch%2C%20I%20want%20to%20book%20a%20free%20demo%20class.%0AName:%20${encodeURIComponent(name || 'Interested Student')}%0APhone:%20${encodeURIComponent(phone || 'Not provided')}%0AFormat:%20${encodeURIComponent(format)}%0ACity:%20${encodeURIComponent(city || 'General Enquiry')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0d1620] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/80">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-dispatch-muted hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-dispatch-yellow/15 border border-dispatch-yellow flex items-center justify-center mx-auto text-dispatch-yellow">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              {isSyllabusMode ? 'Syllabus Ready!' : 'Demo Class Requested!'}
            </h3>
            <p className="text-sm text-dispatch-muted max-w-sm mx-auto">
              {isSyllabusMode
                ? `We have prepared the 45-day curriculum breakdown for ${selectedCourse}. Connect on WhatsApp below for instant syllabus download.`
                : `Thank you ${name}. Harry Dhillon & the admissions team will reach out at ${phone} to confirm your batch dates.`}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Ready</span>
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
                className="text-xs text-dispatch-muted hover:text-white underline transition-colors"
              >
                Close &amp; Return to Academy
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-dispatch-yellow text-xs font-mono uppercase tracking-widest">
                // {isSyllabusMode ? '45-Day Curriculum Request' : 'Free Demo Class Booking'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {isSyllabusMode ? 'Get Full 45-Day Syllabus' : 'Book Your Free Demo Class'}
              </h3>
              <p className="text-xs sm:text-sm text-dispatch-muted mt-1.5">
                No experience needed. Attend the demo class first, meet trainer Harry Dhillon, then decide.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                  Target Program
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-3 bg-[#081017] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-dispatch-yellow transition-colors"
                >
                  <option value="45-Day Truck Dispatch Course">45-Day Truck Dispatch Course (Full Program)</option>
                  <option value="Free Demo Class Session">Book Free Demo Class Session</option>
                  <option value="Online Live Interactive Batch">Online Live Interactive Batch</option>
                  <option value="Offline Classroom Batch">Offline Classroom Training Batch</option>
                  <option value="Admissions Consultation">Direct Admissions Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Class Format
                  </label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="w-full px-4 py-3 bg-[#081017] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-dispatch-yellow transition-colors"
                  >
                    <option value="Online">Online Classes (Live from Home)</option>
                    <option value="Offline">Offline (Classroom Setup)</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Your City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Ludhiana, Mohali, Delhi..."
                    className="w-full px-4 py-3 bg-[#081017] border border-white/10 rounded-xl text-white placeholder-dispatch-textMuted text-sm focus:outline-none focus:border-dispatch-yellow transition-colors"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg font-extrabold text-xs md:text-sm tracking-wider uppercase transition-all shadow-lg shadow-dispatch-yellow/20 flex items-center justify-center gap-2"
                >
                  <span>{isSyllabusMode ? 'Request Day-Wise Syllabus' : 'Confirm Free Demo Request'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-dispatch-textMuted text-center">
                Or call directly: <a href="tel:+917888825122" className="text-dispatch-yellow font-bold hover:underline">+91 78888 25122</a> (India) / <a href="tel:+15593852018" className="text-dispatch-yellow font-bold hover:underline">+1 (559) 385-2018</a> (USA)
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

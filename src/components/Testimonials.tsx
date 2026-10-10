import React, { useState } from 'react';

export const Testimonials: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const reviews = [
    {
      quote:
        'I joined the 45-day course with zero logistics experience. The live broker practice calls and rate confirmation breakdowns gave me the confidence to handle U.S. loads. I was hired by a dispatch firm within 2 weeks of finishing the training.',
      author: 'Gurpreet Singh',
      role: 'U.S. Freight Dispatcher (Fresher Placement)',
    },
    {
      quote:
        'We have family trucks in California and needed to handle their dispatch directly from India. Learning how to search DAT One, calculate rate per mile, and manage factoring setups made our trucking business far more profitable.',
      author: 'Manpreet Kaur',
      role: 'Family Fleet Dispatcher (California Operations)',
    },
    {
      quote:
        'Coming from a BPO call centre background, the evening shift timings and salary growth in U.S. freight dispatching were a game-changer. The mock interview preparation and resume guidance helped me clear my interview on the first attempt.',
      author: 'Rohit Sharma',
      role: 'Senior Dispatcher (Former BPO Associate)',
    },
  ];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIdx];

  return (
    <section id="reviews" className="snap-section relative z-20 min-h-screen flex flex-col justify-center py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-[#081017] border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Tilted Yellow Circular Badge */}
        <div className="mb-12">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-dispatch-yellow flex items-center justify-center -rotate-12 shadow-xl shadow-dispatch-yellow/20">
            <span className="text-dispatch-bg font-extrabold text-[11px] md:text-xs tracking-wider uppercase text-center leading-tight px-1">
              Student<br />Feedback
            </span>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="min-h-[140px] flex items-center justify-center">
          <p className="text-lg sm:text-2xl md:text-3xl font-medium text-white/95 leading-relaxed tracking-tight max-w-3xl">
            "{current.quote}"
          </p>
        </div>

        {/* Author & Rating */}
        <div className="mt-8 space-y-2">
          <h4 className="text-base md:text-lg font-bold text-white tracking-wide">
            {current.author}
          </h4>
          <p className="text-xs md:text-sm text-dispatch-muted font-normal">
            {current.role}
          </p>

          {/* 5 Stars */}
          <div className="flex items-center justify-center gap-1.5 text-dispatch-yellow pt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-base sm:text-lg">
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="mt-10 flex items-center gap-8">
          <button
            onClick={handlePrev}
            className="text-2xl sm:text-3xl text-white/80 hover:text-white transition-colors transform hover:-translate-x-1"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <span className="text-xs font-mono text-dispatch-muted">
            0{currentIdx + 1} / 0{reviews.length}
          </span>
          <button
            onClick={handleNext}
            className="text-2xl sm:text-3xl text-dispatch-yellow hover:text-dispatch-yellowLight transition-colors transform hover:translate-x-1"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

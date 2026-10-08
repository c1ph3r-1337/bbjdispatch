import React from 'react';

export const RadarBackground: React.FC<{ className?: string }> = React.memo(({ className = '' }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Concentric Polar Grid radiating from upper right */}
      <svg
        className="absolute -top-44 -right-60 sm:-top-36 sm:-right-48 md:-top-32 md:-right-32 w-[850px] h-[850px] md:w-[1200px] md:h-[1200px] opacity-20 md:opacity-25 animate-radar"
        viewBox="0 0 1200 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Concentric circles */}
        {[100, 220, 350, 490, 640, 800, 970, 1150].map((radius, i) => (
          <circle
            key={radius}
            cx="900"
            cy="300"
            r={radius}
            stroke={i % 2 === 0 ? "rgba(255,255,255,0.12)" : "rgba(251,194,30,0.18)"}
            strokeWidth={i === 2 ? "1.5" : "1"}
            strokeDasharray={i % 3 === 0 ? "6 8" : undefined}
          />
        ))}

        {/* Radial spoke lines */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line
            key={deg}
            x1="900"
            y1="300"
            x2={900 + 1200 * Math.cos((deg * Math.PI) / 180)}
            y2={300 + 1200 * Math.sin((deg * Math.PI) / 180)}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.8"
          />
        ))}

        {/* Subtle center marker */}
        <circle cx="900" cy="300" r="16" fill="#fbc21e" fillOpacity="0.15" />
        <circle cx="900" cy="300" r="4" fill="#fbc21e" />
      </svg>

      {/* Subtle curved background hill / elevation silhouette behind hero */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[320px] md:h-[460px] pointer-events-none opacity-40"
        viewBox="0 0 1440 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 320 C 350 240, 750 360, 1440 220 L 1440 400 L 0 400 Z"
          fill="url(#curved-hill-grad)"
        />
        <defs>
          <linearGradient id="curved-hill-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d1824" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#081017" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
});

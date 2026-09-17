import React from 'react';

export const VietnamFlag: React.FC<{ className?: string }> = ({ className = "w-8 h-5.5" }) => (
  <svg
    viewBox="0 0 900 600"
    className={`${className} shadow-md rounded-sm border border-amber-300/30 overflow-hidden flex-shrink-0`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="900" height="600" fill="#DA251D" />
    <polygon
      points="450,135 487.08,249.13 607.08,249.13 510,319.74 547.08,433.87 450,363.26 352.92,433.87 390,319.74 292.92,249.13 412.92,249.13"
      fill="#FFFF00"
    />
  </svg>
);

export const ThailandFlag: React.FC<{ className?: string }> = ({ className = "w-8 h-5.5" }) => (
  <svg
    viewBox="0 0 900 600"
    className={`${className} shadow-md rounded-sm border border-amber-300/30 overflow-hidden flex-shrink-0`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="900" height="600" fill="#A51931" />
    <rect y="100" width="900" height="400" fill="#F4F5F8" />
    <rect y="200" width="900" height="200" fill="#2D2A4A" />
  </svg>
);

export const DiplomaticEmblem: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/20 via-blue-400/30 to-sky-200/20 animate-pulse" />
    <div className="relative p-2 rounded-full border border-sky-400/60 bg-sky-950/80 shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
      <VietnamFlag className="w-9 h-6 rounded" />
      <span className="text-sky-300 text-xs font-bold px-0.5">✕</span>
      <ThailandFlag className="w-9 h-6 rounded" />
    </div>
  </div>
);

export const DongSonWatermark: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    className={`pointer-events-none select-none ${className}`}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
    <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="2" opacity="0.25" />
    <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" strokeDasharray="6 3" opacity="0.2" />
    <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="2.5" opacity="0.3" />
    <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.25" />
    <circle cx="200" cy="200" r="40" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    {/* Sun rays in center */}
    {[...Array(14)].map((_, i) => {
      const angle = (i * 360) / 14;
      return (
        <line
          key={i}
          x1="200"
          y1="200"
          x2={200 + 38 * Math.cos((angle * Math.PI) / 180)}
          y2={200 + 38 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.4"
        />
      );
    })}
    {/* Geometric decorative ticks */}
    {[...Array(28)].map((_, i) => {
      const angle = (i * 360) / 28;
      return (
        <line
          key={`tick-${i}`}
          x1={200 + 155 * Math.cos((angle * Math.PI) / 180)}
          y1={200 + 155 * Math.sin((angle * Math.PI) / 180)}
          x2={200 + 165 * Math.cos((angle * Math.PI) / 180)}
          y2={200 + 165 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.25"
        />
      );
    })}
  </svg>
);

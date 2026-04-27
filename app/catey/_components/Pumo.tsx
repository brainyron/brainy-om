"use client";

// Simple, friendly placeholder cat illustration. Will be replaced with the real Pumo art later.
export function Pumo({ className = "h-40 w-40" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pumo"
      role="img"
    >
      <defs>
        <radialGradient id="pumoBody" cx="50%" cy="55%" r="60%">
          <stop offset="0%" stopColor="#FFB89A" />
          <stop offset="100%" stopColor="#F08762" />
        </radialGradient>
        <linearGradient id="pumoBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE9DC" />
          <stop offset="100%" stopColor="#FFD2B5" />
        </linearGradient>
      </defs>

      {/* Tail */}
      <path
        d="M 150 140 Q 180 130 175 100 Q 168 75 188 70"
        stroke="url(#pumoBody)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* Body */}
      <ellipse cx="100" cy="135" rx="55" ry="42" fill="url(#pumoBody)" />

      {/* Belly */}
      <ellipse cx="100" cy="142" rx="32" ry="28" fill="url(#pumoBelly)" opacity="0.85" />

      {/* Head */}
      <circle cx="100" cy="80" r="42" fill="url(#pumoBody)" />

      {/* Cheek fluff */}
      <ellipse cx="100" cy="95" rx="28" ry="18" fill="url(#pumoBelly)" opacity="0.9" />

      {/* Ears */}
      <path d="M 70 55 L 60 28 L 88 50 Z" fill="url(#pumoBody)" />
      <path d="M 130 55 L 140 28 L 112 50 Z" fill="url(#pumoBody)" />
      <path d="M 72 50 L 67 36 L 82 49 Z" fill="#F8C9B0" />
      <path d="M 128 50 L 133 36 L 118 49 Z" fill="#F8C9B0" />

      {/* Eyes */}
      <ellipse cx="84" cy="82" rx="4.5" ry="6" fill="#1F1A14" />
      <ellipse cx="116" cy="82" rx="4.5" ry="6" fill="#1F1A14" />
      <circle cx="85.5" cy="80" r="1.4" fill="#fff" />
      <circle cx="117.5" cy="80" r="1.4" fill="#fff" />

      {/* Nose */}
      <path d="M 100 95 L 95 99 L 105 99 Z" fill="#E25C72" />

      {/* Mouth */}
      <path
        d="M 100 99 Q 100 104 95 105 M 100 99 Q 100 104 105 105"
        stroke="#1F1A14"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />

      {/* Whiskers */}
      <g stroke="#1F1A14" strokeWidth="1" strokeLinecap="round" opacity="0.6">
        <line x1="78" y1="98" x2="62" y2="95" />
        <line x1="78" y1="102" x2="62" y2="103" />
        <line x1="122" y1="98" x2="138" y2="95" />
        <line x1="122" y1="102" x2="138" y2="103" />
      </g>

      {/* Paws */}
      <ellipse cx="78" cy="172" rx="12" ry="6" fill="#E47A55" />
      <ellipse cx="122" cy="172" rx="12" ry="6" fill="#E47A55" />
    </svg>
  );
}

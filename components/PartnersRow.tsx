"use client";

interface Partner {
  name: string;
  className?: string;
  letterSpacing?: string;
  fontWeight?: number;
  italic?: boolean;
  family?: string;
}

// Wordmark-based partner row. Light grayscale/opacity so the bar reads as
// "trusted by" rather than full-strength brand marks. We use real, lightweight
// CSS wordmarks instead of fetching third-party logos that may be off-brand
// or rate-limited at runtime.
const partners: Partner[] = [
  { name: "Wix",           fontWeight: 800, letterSpacing: "-0.04em", family: "'Inter', sans-serif" },
  { name: "Adobe",         fontWeight: 700, letterSpacing: "-0.02em", family: "'Inter', sans-serif" },
  { name: "Cairo Amman Bank", fontWeight: 600, letterSpacing: "-0.01em", family: "'Inter', sans-serif" },
  { name: "Wondershare",   fontWeight: 700, letterSpacing: "-0.02em", family: "'Inter', sans-serif" },
  { name: "Kittl",         fontWeight: 800, letterSpacing: "-0.03em", family: "'Inter', sans-serif" },
  { name: "Clay",          fontWeight: 700, letterSpacing: "-0.02em", italic: true, family: "'Inter', sans-serif" },
];

export function PartnersRow() {
  return (
    <div
      className="w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12 md:gap-x-16 px-4"
      aria-label="Trusted by"
    >
      {partners.map((p) => (
        <span
          key={p.name}
          className="opacity-60 hover:opacity-100 transition-opacity duration-300 select-none whitespace-nowrap"
          style={{
            color: '#1e1e1e',
            fontFamily: p.family,
            fontWeight: p.fontWeight ?? 700,
            letterSpacing: p.letterSpacing ?? "-0.02em",
            fontStyle: p.italic ? 'italic' : 'normal',
            fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
            filter: 'grayscale(100%)',
          }}
        >
          {p.name}
        </span>
      ))}
    </div>
  );
}

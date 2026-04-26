"use client";

import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  name: string;
  tagline: string;
  tags: string[];
  color: string;
  heroImage: string;
  href: string;
}

const PROJECTS: Project[] = [
  {
    id: "crust",
    name: "CRUST",
    tagline: "Cafe Bakery. Slow Made. Well Loved.",
    tags: ["Branding", "Packaging", "Web Design", "Identity"],
    color: "#0068CC",
    heroImage:
      "https://cdn.brainy.ink/ink/media/portfolio/crust/1cbc354b3ed5-the-logo.jpg",
    href: "https://brainy.ink/hire/case-study?project=crust",
  },
  {
    id: "cairo-amman-bank",
    name: "Cairo Amman Bank",
    tagline: "Banking reimagined, digitally native",
    tags: ["Product Design", "UX Research", "Design System"],
    color: "#03A862",
    heroImage:
      "https://cdn.brainy.ink/ink/media/portfolio/cab/22e6f6fbb1a2-Cairo-Aman-Bank-Hero.jpg",
    href: "https://brainy.ink/hire/case-study?project=cairo-amman-bank",
  },
  {
    id: "budy",
    name: "Budy",
    tagline: "Connecting people on their health journey",
    tags: ["Branding", "Visual System", "Illustration"],
    color: "#5560FF",
    heroImage:
      "https://cdn.brainy.ink/ink/media/portfolio/budy/54219b197622-Budy-Parallax.jpg",
    href: "https://brainy.ink/hire/case-study?project=budy",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onDragStart={(e) => e.preventDefault()}
      className="
        group relative block
        rounded-3xl overflow-hidden
        bg-[#111] border border-white/[0.06]
        outline-none focus-visible:ring-2 focus-visible:ring-white/30
      "
      style={{
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        borderColor: hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
      }}
      aria-label={`${project.name}: ${project.tagline}`}
    >
      {/* Image */}
      <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroImage}
          alt={project.name}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Top-right arrow */}
        <div
          className="
            absolute top-4 right-4 z-10
            w-10 h-10 rounded-full
            flex items-center justify-center
            backdrop-blur-md border border-white/20
            bg-white/10
            transition-all duration-300
          "
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translate(0,0)" : "translate(8px,-8px)",
          }}
        >
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>

        {/* Bottom gradient + text overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
          <h3 className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
            {project.name}
          </h3>
          <p className="mt-1 text-sm sm:text-[15px] text-white/70 leading-relaxed">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border"
                style={{
                  color: hovered ? project.color : "rgba(255,255,255,0.7)",
                  borderColor: hovered
                    ? `${project.color}66`
                    : "rgba(255,255,255,0.18)",
                  backgroundColor: hovered
                    ? `${project.color}14`
                    : "rgba(255,255,255,0.06)",
                  transition: "all 0.3s ease",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [constraintLeft, setConstraintLeft] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(24);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const trackWidth = trackRef.current.scrollWidth;
      setConstraintLeft(Math.min(0, containerWidth - trackWidth));

      const firstCard = trackRef.current.querySelector<HTMLElement>(
        "[data-card]"
      );
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth);
      }
      // Read computed gap from the track
      const styles = window.getComputedStyle(trackRef.current);
      const g = parseFloat(styles.columnGap || styles.gap || "24");
      if (!Number.isNaN(g)) setGap(g);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const snapTo = (index: number) => {
    const clamped = Math.max(0, Math.min(PROJECTS.length - 1, index));
    setActiveIndex(clamped);
    const target = -clamped * (cardWidth + gap);
    const lowerBound = constraintLeft;
    const finalTarget = Math.max(lowerBound, Math.min(0, target));
    animate(x, finalTarget, {
      type: "spring",
      stiffness: 220,
      damping: 32,
      mass: 0.8,
    });
  };

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    if (cardWidth === 0) return;
    const step = cardWidth + gap;
    const projectedDelta = info.offset.x + info.velocity.x * 0.15;
    const indexDelta = -Math.round(projectedDelta / step);
    snapTo(activeIndex + indexDelta);
  };

  return (
    <section
      id="work"
      className="bg-[#080808] w-full overflow-hidden"
      aria-labelledby="work-heading"
    >
      <div className="flex flex-col items-center w-full py-20 sm:py-24 lg:py-28">
        {/* Header */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h2
              id="work-heading"
              className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="text-white/90">Projects speak</span>
              <br />
              <span className="text-white/35">for themselves.</span>
            </h2>
          </motion.div>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{ paddingLeft: "max(1rem, calc((100vw - 1280px) / 2 + 1rem))" }}
        >
          <motion.div
            ref={trackRef}
            className="flex gap-4 sm:gap-5 lg:gap-6 will-change-transform"
            drag="x"
            dragConstraints={{ left: constraintLeft, right: 0 }}
            dragElastic={0.08}
            dragMomentum
            onDragEnd={handleDragEnd}
            style={{ x }}
          >
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                data-card
                className="shrink-0 w-[78vw] sm:w-[60vw] md:w-[46vw] lg:w-[38vw] xl:w-[34vw] max-w-[520px]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
            {/* spacer so last card can sit centered-ish */}
            <div className="shrink-0 w-4 sm:w-6 lg:w-8" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Controls */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => snapTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="
              w-10 h-10 rounded-full border border-white/15
              bg-white/[0.04] hover:bg-white/[0.08]
              text-white/80 hover:text-white
              flex items-center justify-center
              transition-all duration-200
              disabled:opacity-30 disabled:cursor-not-allowed
            "
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Projects">
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={p.name}
                onClick={() => snapTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? 28 : 8,
                  height: 8,
                  backgroundColor:
                    i === activeIndex ? "#ffffff" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => snapTo(activeIndex + 1)}
            disabled={activeIndex === PROJECTS.length - 1}
            className="
              w-10 h-10 rounded-full border border-white/15
              bg-white/[0.04] hover:bg-white/[0.08]
              text-white/80 hover:text-white
              flex items-center justify-center
              transition-all duration-200
              disabled:opacity-30 disabled:cursor-not-allowed
            "
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

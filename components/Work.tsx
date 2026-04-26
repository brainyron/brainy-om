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
    id: "basis",
    name: "Basis",
    tagline: "A beat on a sound, a rhythm, a voice",
    tags: ["Branding", "Logo Design", "Visual Identity"],
    color: "#E85102",
    heroImage: "https://cdn.brainy.ink/ink/figma/basis-cover.png",
    href: "https://brainy.ink/hire/case-study?project=basis",
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
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      onDragStart={(e) => e.preventDefault()}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="
        group relative block
        rounded-3xl overflow-hidden
        bg-[#0d0d0d] border border-white/[0.06]
        outline-none focus-visible:ring-2 focus-visible:ring-white/30
      "
      aria-label={`${project.name}: ${project.tagline}`}
    >
      {/* Top accent line in project color — subtle, 1px */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px z-20"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${project.color}88 50%, transparent 100%)`,
        }}
      />

      {/* Card body — fixed aspect ratio (3:4) so the row reads as a uniform gallery */}
      <div className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
        {/* Cover image — top ~72% of the card */}
        <div className="absolute inset-x-0 top-0 h-[72%] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.heroImage}
            alt={project.name}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />
          {/* Soft fade at the bottom of the image into the meta block */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#0d0d0d]" />
        </div>

        {/* Top-right arrow on hover */}
        <div
          className="
            absolute top-4 right-4 z-10
            w-10 h-10 rounded-full
            flex items-center justify-center
            backdrop-blur-md border border-white/20
            bg-white/10
            opacity-0 -translate-y-1 translate-x-1
            group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0
            transition-all duration-300
          "
          aria-hidden="true"
        >
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>

        {/* Meta block — bottom 28%, neutral dark, white text */}
        <div className="absolute inset-x-0 bottom-0 h-[28%] px-6 sm:px-7 pb-6 sm:pb-7 pt-3 flex flex-col justify-end">
          <h3 className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-white/60 leading-relaxed line-clamp-2">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-[0.12em] px-3 py-1 rounded-full border border-white/15 text-white/70 bg-white/[0.03]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [constraintLeft, setConstraintLeft] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(20);
  const [isDragging, setIsDragging] = useState(false);

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
      const styles = window.getComputedStyle(trackRef.current);
      const g = parseFloat(styles.columnGap || styles.gap || "20");
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
    setIsDragging(false);
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
          className="w-full overflow-hidden select-none"
          style={{
            paddingLeft: "max(1rem, calc((100vw - 1280px) / 2 + 1rem))",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          <motion.div
            ref={trackRef}
            className="flex gap-4 sm:gap-5 will-change-transform"
            drag="x"
            dragConstraints={{ left: constraintLeft, right: 0 }}
            dragElastic={0.08}
            dragMomentum
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            style={{ x }}
          >
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                data-card
                className="shrink-0 w-[85vw] sm:w-[64vw] md:w-[48vw] lg:w-[40vw] xl:w-[34vw] max-w-[520px]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
            {/* spacer so the last card has breathing room on the right */}
            <div className="shrink-0 w-4 sm:w-6 lg:w-8" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Controls — chevrons flank centered dot pagination */}
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

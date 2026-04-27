"use client";

import { Reorder, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  name: string;
  tagline: string;
  tags: string[];
  image: string;
  href: string;
}

const INITIAL_PROJECTS: Project[] = [
  {
    id: "crust",
    name: "CRUST",
    tagline: "Cafe Bakery. Slow Made. Well Loved.",
    tags: ["Branding", "Packaging", "Web Design", "Identity"],
    image:
      "https://cdn.brainy.ink/ink/media/portfolio/crust/1cbc354b3ed5-the-logo.jpg",
    href: "https://brainy.ink/hire/case-study?project=crust",
  },
  {
    id: "cairo-amman-bank",
    name: "Cairo Amman Bank",
    tagline: "Banking reimagined, digitally native",
    tags: ["Product Design", "UX Research", "Design System"],
    image:
      "https://cdn.brainy.ink/ink/media/portfolio/cab/22e6f6fbb1a2-Cairo-Aman-Bank-Hero.jpg",
    href: "https://brainy.ink/hire/case-study?project=cairo-amman-bank",
  },
  {
    id: "basis",
    name: "Basis",
    tagline: "A beat on a sound, a rhythm, a voice",
    tags: ["Branding", "Logo Design", "Visual Identity"],
    image:
      "https://cdn.brainy.ink/ink/figma/d31b195eb2075324f9702b799c2de8ef7b474080.png",
    href: "https://brainy.ink/hire/case-study?project=basis",
  },
  {
    id: "budy",
    name: "Budy",
    tagline: "Connecting people on their health journey",
    tags: ["Branding", "Visual System", "Illustration"],
    image:
      "https://cdn.brainy.ink/ink/media/portfolio/budy/54219b197622-Budy-Parallax.jpg",
    href: "https://brainy.ink/hire/case-study?project=budy",
  },
];

function ProjectCard({ project }: { project: Project }) {
  // Disambiguate click vs drag using pointerdown/pointerup positions.
  const downPos = useRef<{ x: number; y: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    downPos.current = { x: e.clientX, y: e.clientY };
  };

  const onClick = (e: React.MouseEvent) => {
    const start = downPos.current;
    if (!start) return;
    const dx = Math.abs(e.clientX - start.x);
    const dy = Math.abs(e.clientY - start.y);
    if (dx > 5 || dy > 5) {
      // Treat as drag, swallow click.
      e.preventDefault();
      return;
    }
    window.open(project.href, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      onPointerDown={onPointerDown}
      onClick={onClick}
      onDragStart={(e) => e.preventDefault()}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="
        group relative block w-full h-full
        rounded-3xl overflow-hidden
        bg-white border border-black/[0.06]
        shadow-sm hover:shadow-md
        transition-shadow duration-300
        cursor-pointer
        outline-none focus-visible:ring-2 focus-visible:ring-black/20
      "
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.open(project.href, "_blank", "noopener,noreferrer");
        }
      }}
      aria-label={`${project.name}: ${project.tagline}`}
    >
      {/* Card body — landscape aspect, image dominates top, meta below */}
      <div className="relative w-full h-full flex flex-col">
        {/* Image — top ~74% */}
        <div className="relative w-full" style={{ flex: "0 0 74%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />

          {/* Top-right arrow on hover */}
          <div
            className="
              absolute top-4 right-4 z-10
              w-9 h-9 rounded-full
              flex items-center justify-center
              backdrop-blur-md border border-white/40
              bg-white/70
              opacity-0 -translate-y-1 translate-x-1
              group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0
              transition-all duration-300
            "
            aria-hidden="true"
          >
            <ArrowUpRight className="w-4 h-4 text-black/70" />
          </div>
        </div>

        {/* Meta block — bottom ~26%, white, dark text */}
        <div className="flex-1 px-6 sm:px-7 py-5 flex flex-col justify-center bg-white">
          <h3 className="text-lg sm:text-xl font-semibold text-black tracking-tight leading-tight">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-black/55 leading-relaxed line-clamp-1">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] tracking-tight px-2.5 py-0.5 rounded-full border border-black/10 text-black/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  const [items, setItems] = useState<Project[]>(INITIAL_PROJECTS);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll position to update pagination dots.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = el.querySelectorAll<HTMLElement>("[data-card]");
      if (cards.length === 0) return;
      const trackRect = el.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      let closest = 0;
      let closestDist = Infinity;
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const center = r.left + r.width / 2;
        const dist = Math.abs(center - trackCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [items]);

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(items.length - 1, idx));
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    const target = cards[clamped];
    if (!target) return;
    const left =
      target.offsetLeft - (el.clientWidth - target.clientWidth) / 2;
    el.scrollTo({ left, behavior: "smooth" });
  };

  return (
    <section
      id="work"
      className="bg-[#f5f5f7] w-full overflow-hidden"
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
              <span className="text-black">Projects speak</span>
              <br />
              <span className="text-black/40">for themselves.</span>
            </h2>
          </motion.div>
        </div>

        {/* Carousel — Reorder.Group provides drag-to-reorder; native overflow scroll handles drag-to-scroll. */}
        <Reorder.Group
          ref={trackRef}
          axis="x"
          values={items}
          onReorder={setItems}
          as="div"
          className="
            w-full flex gap-5 sm:gap-6
            overflow-x-auto overflow-y-hidden
            scroll-smooth snap-x snap-mandatory
            cursor-grab active:cursor-grabbing
            scrollbar-hide
          "
          style={{
            paddingLeft: "max(1rem, calc((100vw - 1280px) / 2 + 1rem))",
            paddingRight: "max(1rem, calc((100vw - 1280px) / 2 + 1rem))",
            paddingBottom: "1.5rem",
          }}
        >
          {items.map((project) => (
            <Reorder.Item
              key={project.id}
              value={project}
              as="div"
              data-card
              whileDrag={{
                scale: 1.03,
                zIndex: 10,
                boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
              }}
              dragElastic={0.18}
              className="
                shrink-0 snap-center
                w-[85vw] sm:w-[64vw] md:w-[52vw] lg:w-[44vw] xl:w-[40vw]
                max-w-[680px]
              "
              style={{
                aspectRatio: "16 / 11",
              }}
            >
              <ProjectCard project={project} />
            </Reorder.Item>
          ))}
        </Reorder.Group>

        {/* Controls */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="
              w-10 h-10 rounded-full border border-black/10
              bg-white hover:bg-white
              text-black/70 hover:text-black
              flex items-center justify-center
              transition-all duration-200
              shadow-sm hover:shadow
              disabled:opacity-30 disabled:cursor-not-allowed
            "
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Projects">
            {items.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={p.name}
                onClick={() => scrollToIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? 28 : 8,
                  height: 8,
                  backgroundColor:
                    i === activeIndex ? "#111111" : "rgba(0,0,0,0.2)",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === items.length - 1}
            className="
              w-10 h-10 rounded-full border border-black/10
              bg-white hover:bg-white
              text-black/70 hover:text-black
              flex items-center justify-center
              transition-all duration-200
              shadow-sm hover:shadow
              disabled:opacity-30 disabled:cursor-not-allowed
            "
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Hint */}
        <p className="mt-6 text-xs text-black/40 tracking-tight">
          Drag a card to rearrange. Tap to open the case study.
        </p>
      </div>

    </section>
  );
}

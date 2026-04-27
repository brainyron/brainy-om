"use client";

import { motion, useMotionValue, animate } from "motion/react";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  name: string;
  image: string;
  href: string;
}

const PROJECTS: Project[] = [
  {
    id: "crust",
    name: "CRUST",
    image:
      "https://cdn.brainy.ink/ink/media/portfolio/crust/1cbc354b3ed5-the-logo.jpg",
    href: "https://brainy.ink/hire/case-study?project=crust",
  },
  {
    id: "cairo-amman-bank",
    name: "Cairo Amman Bank",
    image:
      "https://cdn.brainy.ink/ink/media/portfolio/cab/22e6f6fbb1a2-Cairo-Aman-Bank-Hero.jpg",
    href: "https://brainy.ink/hire/case-study?project=cairo-amman-bank",
  },
  {
    id: "basis",
    name: "Basis",
    image:
      "https://cdn.brainy.ink/ink/figma/d778abcc7b2abba0803a8c29a54280dc34f7b1ab.png",
    href: "https://brainy.ink/hire/case-study?project=basis",
  },
  {
    id: "budy",
    name: "Budy",
    image:
      "https://cdn.brainy.ink/ink/media/portfolio/budy/54219b197622-Budy-Parallax.jpg",
    href: "https://brainy.ink/hire/case-study?project=budy",
  },
];

const GAP = 24;

export function Work() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [metrics, setMetrics] = useState({ cardWidth: 0, viewportWidth: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      const vp = viewportRef.current?.clientWidth ?? 0;
      const cw = cardRef.current?.clientWidth ?? 0;
      setMetrics({ cardWidth: cw, viewportWidth: vp });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const step = metrics.cardWidth + GAP;
  const maxOffset = step > 0 ? -(step * (PROJECTS.length - 1)) : 0;

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(PROJECTS.length - 1, idx));
    setActiveIndex(clamped);
    animate(x, -clamped * step, {
      type: "spring",
      stiffness: 220,
      damping: 32,
    });
  };

  // Keep position aligned if the viewport is resized.
  useEffect(() => {
    if (step > 0) {
      x.set(-activeIndex * step);
    }
  }, [step, activeIndex, x]);

  return (
    <section
      id="work"
      className="bg-[#f5f5f7] w-full overflow-hidden"
      aria-labelledby="work-heading"
    >
      <div className="flex flex-col items-center w-full py-24 sm:py-28 md:py-32 lg:py-36 xl:py-40">
        {/* Heading */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <motion.h2
            id="work-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black leading-[1.1]"
          >
            Projects speak <span className="text-black/40">for themselves.</span>
          </motion.h2>
        </div>

        {/* Carousel viewport */}
        <div
          ref={viewportRef}
          className="w-full overflow-hidden select-none"
        >
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: maxOffset, right: 0 }}
            dragElastic={0.08}
            dragMomentum
            style={{
              x,
              paddingLeft: `max(1rem, calc((100vw - ${metrics.cardWidth}px) / 2))`,
              paddingRight: `max(1rem, calc((100vw - ${metrics.cardWidth}px) / 2))`,
              gap: GAP,
              cursor: "grab",
            }}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={(_, info) => {
              const offset = x.get() + info.velocity.x * 0.15;
              const idx = Math.round(-offset / step);
              goTo(idx);
            }}
            className="flex items-stretch will-change-transform"
          >
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                ref={i === 0 ? cardRef : undefined}
              />
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous project"
            className="w-10 h-10 rounded-full border border-black/10 bg-white text-black/70 hover:text-black flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow disabled:opacity-30 disabled:cursor-not-allowed"
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
                onClick={() => goTo(i)}
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
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === PROJECTS.length - 1}
            aria-label="Next project"
            className="w-10 h-10 rounded-full border border-black/10 bg-white text-black/70 hover:text-black flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({
  project,
  ref,
}: {
  project: Project;
  ref?: React.Ref<HTMLDivElement>;
}) => {
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
      e.preventDefault();
      return;
    }
    window.open(project.href, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onClick={onClick}
      onDragStart={(e) => e.preventDefault()}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.open(project.href, "_blank", "noopener,noreferrer");
        }
      }}
      aria-label={project.name}
      className="
        shrink-0 relative
        w-[88vw] sm:w-[68vw] md:w-[58vw] lg:w-[50vw] xl:w-[46vw]
        max-w-[760px]
        aspect-[5/4]
        rounded-3xl overflow-hidden
        bg-black/[0.04]
        outline-none focus-visible:ring-2 focus-visible:ring-black/20
        cursor-pointer
      "
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />

      {/* Subtle gradient + name overlay */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
      <h3 className="absolute left-6 right-6 bottom-5 text-white text-xl sm:text-2xl font-semibold tracking-tight pointer-events-none">
        {project.name}
      </h3>
    </div>
  );
};

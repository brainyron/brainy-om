"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

export function ReelTile({
  src,
  title,
  type,
}: {
  src: string;
  title: string;
  type: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  };
  const pause = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
  };
  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
      whileHover={{ scale: 1.02 }}
      className="group flex flex-col gap-2"
    >
      <button
        type="button"
        onClick={toggle}
        onMouseEnter={play}
        onMouseLeave={pause}
        className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-[#1F1A14]/10 bg-[#1F1A14] shadow-sm dark:border-white/10"
        aria-label={`Play ${title}`}
      >
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="h-full w-full object-cover"
        />
        {!isPlaying ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/0 via-black/0 to-black/30 transition-opacity duration-200 group-hover:bg-black/10">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#D26B49] shadow-lg backdrop-blur transition-transform group-hover:scale-110">
              <Play className="h-6 w-6 fill-current" />
            </span>
          </div>
        ) : null}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#D26B49] backdrop-blur dark:bg-white/15 dark:text-[#F08762]">
          Reel
        </span>
      </button>
      <div className="px-1">
        <div className="text-sm font-semibold leading-tight text-[#1F1A14] dark:text-white">
          {title}
        </div>
        <div className="text-[11px] text-[#3A322A]/70 dark:text-white/60">{type}</div>
      </div>
    </motion.div>
  );
}

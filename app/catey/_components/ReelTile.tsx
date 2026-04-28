"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { useAudioFocus } from "./AudioFocusContext";

export function ReelTile({
  src,
  title,
  type,
}: {
  src: string;
  title: string;
  type: string;
}) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // Audio focus is a page-wide claim so only one tile owns sound at a time.
  const audio = useAudioFocus(`reel:${src}`);
  const muted = !audio.isFocused;

  // Keep the underlying video element's mute state in sync with the focus.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    if (audio.isFocused) {
      v.play().catch(() => {
        // Autoplay-with-sound can be blocked: drop focus and stay muted.
        audio.release();
      });
    }
  }, [muted, audio]);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  };
  const pause = () => {
    const v = videoRef.current;
    if (!v) return;
    // Don't stop the audio-focused reel just because the cursor left it.
    if (audio.isFocused) return;
    v.pause();
  };

  // Click toggles sound focus. If the tile didn't own audio, claim it.
  // If it did, release back to muted.
  const onClick = () => {
    if (audio.isFocused) {
      audio.release();
    } else {
      audio.claim();
    }
  };

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
      whileHover={{ scale: 1.02 }}
      className="group/reel flex flex-col gap-2"
    >
      <button
        type="button"
        onClick={onClick}
        onMouseEnter={play}
        onMouseLeave={pause}
        className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-[#1F1A14]/10 bg-[#1F1A14] shadow-sm dark:border-white/10"
        aria-label={
          muted
            ? `${isAr ? "تشغيل الصوت" : "Unmute"} ${title}`
            : `${isAr ? "إيقاف الصوت" : "Mute"} ${title}`
        }
      >
        <video
          ref={videoRef}
          src={src}
          poster={src.replace(/\.mp4$/i, "-poster.jpg")}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="h-full w-full object-cover"
        />
        {!isPlaying ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/0 via-black/0 to-black/30 transition-opacity duration-200 group-hover/reel:bg-black/10">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#D26B49] shadow-lg backdrop-blur transition-transform group-hover/reel:scale-110">
              <Play className="h-6 w-6 fill-current" />
            </span>
          </div>
        ) : null}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#D26B49] backdrop-blur dark:bg-white/15 dark:text-[#F08762]">
          Reel
        </span>
        {/* Sound chip, persistent icon plus on-hover label that explains the click */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5"
        >
          <span className="hidden translate-x-2 items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white opacity-0 backdrop-blur-md transition-all duration-200 group-hover/reel:translate-x-0 group-hover/reel:opacity-100 sm:inline-flex">
            {muted
              ? isAr ? "اضغط للصوت" : "Tap for sound"
              : isAr ? "اضغط لإيقاف" : "Tap to mute"}
          </span>
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-md ${
              audio.isFocused
                ? "bg-[#F08762] text-white"
                : "bg-black/45 text-white"
            }`}
          >
            {audio.isFocused ? (
              <Volume2 className="h-3.5 w-3.5" />
            ) : (
              <VolumeX className="h-3.5 w-3.5" />
            )}
          </span>
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

"use client";

import { motion } from "motion/react";
import { Bookmark, Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import { ExFrame } from "./ExFrame";
import { useCateyT } from "../shared";

// Catey's actual Instagram handle.
const IG_HANDLE = "catey_om";
// Two posts, two images. Indexes line up with t.option2.giveaways.items.
const POST_IMAGES = [
  "/catey/giveaways/giveaway-01.jpg",
  "/catey/giveaways/giveaway-ideas.jpg",
];

// Anonymized commenter handles for the demo. Mixed Latin and Arabic-ish handles
// to feel like a real Omani pet community thread without faking real names.
const COMMENTER_HANDLES = [
  "muscat_meowmom",
  "salalah_pawdad",
  "pumo_fanclub",
  "catey_regular",
];

// Static like-count baseline so the two cards differ. Sample only.
const LIKE_COUNTS = [2431, 1187];
const COMMENT_COUNTS = [342, 198];
const TIME_AGO = ["2 days ago", "1 week ago"];
const TIME_AGO_AR = ["قبل يومين", "قبل أسبوع"];

function CateyAvatar({ size = 32, ringed = false }: { size?: number; ringed?: boolean }) {
  // Profile picture stand-in: the Catey wordmark masked into a coffee-on-cream
  // disc, ringed with the IG-style story gradient when requested.
  const inner = (
    <span
      className="flex items-center justify-center overflow-hidden rounded-full bg-[#F8E1AC]"
      style={{ width: size, height: size }}
      aria-label="catey.shop"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/catey/brand/catey-logo.svg"
        alt="catey_om"
        className="h-[55%] w-auto"
        decoding="async"
      />
    </span>
  );
  if (!ringed) return inner;
  return (
    <span
      className="inline-flex items-center justify-center rounded-full p-[2px]"
      style={{
        background:
          "conic-gradient(from 220deg, #F08762, #D26B49, #F8E1AC, #DA9552, #F08762)",
      }}
    >
      <span className="rounded-full bg-white p-[2px] dark:bg-[#1F1A14]">{inner}</span>
    </span>
  );
}

function CommenterAvatar({ index }: { index: number }) {
  // Stable warm-tone palette so commenter avatars feel like a real comment list.
  const tones = ["#DA9552", "#7BB89C", "#F08762", "#A28C7C"];
  const initial = COMMENTER_HANDLES[index % COMMENTER_HANDLES.length].charAt(0).toUpperCase();
  return (
    <span
      className="flex h-7 w-7 flex-none items-center justify-center rounded-full text-[11px] font-semibold text-white"
      style={{ background: tones[index % tones.length] }}
      aria-hidden
    >
      {initial}
    </span>
  );
}

export function ExGiveaways({ index }: { index: number }) {
  const { t, isAr } = useCateyT();
  const e = t.examples;
  const o = t.option2.giveaways;

  return (
    <ExFrame
      id="giveaways"
      index={index}
      scope="growthAndPlus"
      title={e.sections.giveaways.title}
      caption={e.sections.giveaways.caption}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="grid gap-5 lg:grid-cols-2 lg:gap-6"
      >
        {o.items.map((g, i) => {
          const handle = COMMENTER_HANDLES;
          const likes = LIKE_COUNTS[i % LIKE_COUNTS.length];
          const commentTotal = COMMENT_COUNTS[i % COMMENT_COUNTS.length];
          const timeAgo = isAr ? TIME_AGO_AR[i % TIME_AGO_AR.length] : TIME_AGO[i % TIME_AGO.length];
          const image = POST_IMAGES[i % POST_IMAGES.length];

          return (
            <motion.article
              key={g.prompt}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              dir="ltr"
              className="mx-auto w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#1F1A14]/10 bg-white shadow-[0_30px_80px_-40px_rgba(31,26,20,0.25)] dark:border-white/10 dark:bg-[#0F0C0A]"
            >
              {/* Post header */}
              <header className="flex items-center justify-between gap-3 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <CateyAvatar size={36} ringed />
                  <div className="leading-tight">
                    <div className="flex items-center gap-1 text-[14px] font-semibold text-[#1F1A14] dark:text-white">
                      {IG_HANDLE}
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 text-[#3897F0]"
                        aria-label="Verified"
                      >
                        <path
                          fill="currentColor"
                          d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
                        />
                      </svg>
                    </div>
                    <div className="text-[11px] text-[#3A322A]/65 dark:text-white/55">
                      Muscat, Oman
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Post options"
                  className="text-[#1F1A14]/70 dark:text-white/70"
                >
                  <MoreHorizontal className="h-5 w-5" strokeWidth={2.2} />
                </button>
              </header>

              {/* Post image, 4:5 */}
              <div className="relative aspect-[4/5] w-full bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={g.prompt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Action bar */}
              <div className="flex items-center justify-between px-3 py-2.5">
                <div className="flex items-center gap-3.5 text-[#1F1A14] dark:text-white">
                  <button type="button" aria-label="Like">
                    <Heart className="h-[26px] w-[26px]" strokeWidth={1.8} />
                  </button>
                  <button type="button" aria-label="Comment">
                    <MessageCircle className="h-[26px] w-[26px]" strokeWidth={1.8} />
                  </button>
                  <button type="button" aria-label="Share">
                    <Send className="h-[26px] w-[26px]" strokeWidth={1.8} />
                  </button>
                </div>
                <button type="button" aria-label="Save" className="text-[#1F1A14] dark:text-white">
                  <Bookmark className="h-[26px] w-[26px]" strokeWidth={1.8} />
                </button>
              </div>

              {/* Likes */}
              <div className="px-4">
                <div className="flex items-center gap-2 text-[14px]">
                  <CommenterAvatar index={0} />
                  <span className="text-[#1F1A14] dark:text-white/90">
                    Liked by{" "}
                    <span className="font-semibold">pumo_official</span>{" "}
                    <span className="text-[#3A322A]/70 dark:text-white/65">
                      and{" "}
                      <span className="font-semibold text-[#1F1A14] dark:text-white">
                        {likes.toLocaleString()} others
                      </span>
                    </span>
                  </span>
                </div>
              </div>

              {/* Caption: handle + prompt + prize line */}
              <div className="px-4 pt-2 text-[14px] leading-snug text-[#1F1A14] dark:text-white/90">
                <span className="font-semibold">{IG_HANDLE}</span>{" "}
                <span>{g.prompt}</span>
                <div className="mt-1.5 text-[13px] text-[#3A322A]/85 dark:text-white/75">
                  ✨ {g.prize}
                </div>
                <div className="mt-1 text-[12px] text-[#3A322A]/55 dark:text-white/45">
                  #catey #cateyom #muscatpets #omancats #pumopick #petsofoman
                </div>
              </div>

              {/* "View all 342 comments" */}
              <button
                type="button"
                className="mt-2 px-4 text-[13px] text-[#3A322A]/65 hover:text-[#1F1A14] dark:text-white/55 dark:hover:text-white"
              >
                {isAr
                  ? `عرض كل ${commentTotal} تعليق`
                  : `View all ${commentTotal} comments`}
              </button>

              {/* Top comments */}
              <ul className="mt-1.5 space-y-2 px-4 pb-2 text-[13px] leading-snug">
                {g.comments.slice(0, 3).map((c, ci) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-[#1F1A14] dark:text-white/90"
                  >
                    <CommenterAvatar index={ci} />
                    <div className="min-w-0 flex-1">
                      <span className="font-semibold">
                        {handle[ci % handle.length]}
                      </span>{" "}
                      <span>{c}</span>
                      <div className="mt-0.5 flex items-center gap-3 text-[11px] text-[#3A322A]/55 dark:text-white/45">
                        <span>{(120 - ci * 23).toString()}h</span>
                        <span>{(48 - ci * 9).toString()} likes</span>
                        <button type="button" className="font-semibold">Reply</button>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label="Like comment"
                      className="text-[#1F1A14]/40 dark:text-white/40"
                    >
                      <Heart className="h-3.5 w-3.5" strokeWidth={1.8} />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Timestamp */}
              <div className="px-4 pb-2 text-[10px] uppercase tracking-[0.14em] text-[#3A322A]/45 dark:text-white/40">
                {timeAgo}
              </div>

              {/* Add a comment row */}
              <div className="flex items-center gap-2 border-t border-[#1F1A14]/8 px-4 py-3 dark:border-white/10">
                <CateyAvatar size={26} />
                <span className="flex-1 text-[13px] text-[#3A322A]/60 dark:text-white/50">
                  {isAr ? "أضف تعليق..." : "Add a comment..."}
                </span>
                <span className="text-[13px] font-semibold text-[#3897F0]">
                  {isAr ? "نشر" : "Post"}
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </ExFrame>
  );
}

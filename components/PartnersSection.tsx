"use client";

import { motion } from "motion/react";

interface Partner {
  name: string;
  logo: string;
}

const PARTNERS: Partner[] = [
  {
    name: "Wix",
    logo: "https://cdn.brainy.ink/ink/media/partners/3608c4b5bb45-W-10.png",
  },
  {
    name: "Cairo Amman Bank",
    logo: "https://cdn.brainy.ink/ink/media/partners/20c597caf6d8-W-2.png",
  },
  {
    name: "FLOP",
    logo: "https://cdn.brainy.ink/ink/media/partners/e1e4467d9f04-W-6.png",
  },
  {
    name: "Budy",
    logo: "https://cdn.brainy.ink/ink/media/partners/ca8db81d7cc2-W-7.png",
  },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div
      className="
        group relative
        bg-white/[0.03] hover:bg-white/[0.05]
        border border-white/[0.06] hover:border-white/[0.12]
        rounded-2xl sm:rounded-3xl
        flex items-center justify-center
        transition-all duration-300 ease-out
        overflow-hidden
        p-6 sm:p-8
      "
      style={{ aspectRatio: "16 / 10" }}
      aria-label={partner.name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={partner.logo}
        alt={partner.name}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="
          max-w-[60%] max-h-[60%] w-auto h-auto object-contain
          select-none
          brightness-90 group-hover:brightness-100
          transition-all duration-300 ease-out
        "
      />
    </div>
  );
}

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative bg-[#080808] py-20 sm:py-28 lg:py-32"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2
            id="partners-heading"
            className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="text-white/90">Brands that</span>
            <br />
            <span className="text-white/35">count on us.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {PARTNERS.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

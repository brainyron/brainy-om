"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useCateyT } from "./shared";
import { whatsappLink } from "../cateyHelpers";

export function CateyStickyMobileCta() {
  const { t } = useCateyT();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
        >
          <a
            href={whatsappLink(t.option2.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full bg-[#F08762] px-5 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-[#F08762]/30"
          >
            {t.finalCta.stickyMobile}
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

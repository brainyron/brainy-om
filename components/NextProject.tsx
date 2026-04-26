"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface NextProjectProps {
  projectId: string;
  titleEn: string;
  titleAr: string;
  image: string;
}

export function NextProject({ projectId, titleEn, titleAr, image }: NextProjectProps) {
  const { language } = useLanguage();
  const title = language === 'ar' ? titleAr : titleEn;
  const nextLabel = language === 'ar' ? 'المشروع التالي' : 'Next Project';

  return (
    <section className="w-full bg-[#f5f5f5] border-t border-[#e5e5e5]">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[112px] py-16 sm:py-20 md:py-24">
        <Link
          href={`/portfolio/${projectId}`}
          className="group block"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="text-[14px] font-['Inter:Medium',sans-serif] font-medium text-[#5a5a5a] uppercase tracking-wide">
                {nextLabel}
              </span>
              <div className="h-[1px] flex-1 bg-[#e5e5e5]"></div>
            </div>

            {/* Project Preview */}
            <div className="relative overflow-hidden rounded-[12px] aspect-[16/9] bg-white">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[24px] sm:text-[32px] mb-2">
                  {title}
                </h3>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-[14px] font-['Inter:Medium',sans-serif]">
                    {language === 'ar' ? 'عرض المشروع' : 'View Project'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}

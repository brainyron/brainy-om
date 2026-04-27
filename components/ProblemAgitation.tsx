"use client";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-yxrvo146y7";

interface IconProps {
  paths: string[];
}

function UsersIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p1d820380} stroke="#EC221F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} stroke="#EC221F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} stroke="#EC221F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13e20900} stroke="#EC221F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ClockIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p1b8b3180} stroke="#EC221F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TrendingDownIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M22 17L13.5 8.5L8.5 13.5L2 7" stroke="#EC221F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 17H22V11" stroke="#EC221F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ShieldIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p3f3d8e00} stroke="#EC221F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

interface PainCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function PainCard({ icon, title, description, delay }: PainCardProps) {
  const { language } = useLanguage();
  
  return (
    <motion.div 
      className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full md:w-[280px] min-h-[200px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div aria-hidden="true" className="absolute border border-[#ec221f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      
      {/* Icon Container */}
      <div className="content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
        <div aria-hidden="true" className="absolute border border-[#ec221f] border-solid inset-0 pointer-events-none rounded-[8px]" />
        {icon}
      </div>
      
      {/* Text */}
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
        <p className="font-['Inter',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[18px] text-white tracking-[-0.4395px] w-full">
          {title}
        </p>
        <p className="font-['Inter',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] tracking-[-0.1504px] w-full">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function ProblemAgitation() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const painPoints = [
    {
      icon: <UsersIcon />,
      title: t.pain1Title,
      description: t.pain1Desc
    },
    {
      icon: <ClockIcon />,
      title: t.pain2Title,
      description: t.pain2Desc
    },
    {
      icon: <TrendingDownIcon />,
      title: t.pain3Title,
      description: t.pain3Desc
    },
    {
      icon: <ShieldIcon />,
      title: t.pain4Title,
      description: t.pain4Desc
    }
  ];

  return (
    <section
      className="bg-[#1e1e1e] relative py-24 sm:py-28 md:py-32 lg:py-36 xl:py-40"
      aria-labelledby="problem-heading"
    >
      <div className="flex flex-col items-center size-full px-[20px] md:px-[78px]">
        <div className="content-stretch flex flex-col gap-[56px] items-center max-w-[1200px] relative shrink-0 w-full">
          {/* Heading */}
          <motion.h2 
            id="problem-heading"
            className="font-['Inter',sans-serif] font-medium leading-[40px] not-italic relative shrink-0 text-[28px] md:text-[36px] text-center md:text-center text-white tracking-[0.3691px]"
            style={{
              textAlign: language === 'ar' ? 'right' : 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {t.hiddenCost}
          </motion.h2>
          
          {/* Pain Points Grid */}
          <div className="content-stretch flex flex-col md:flex-row items-start justify-between gap-[24px] relative shrink-0 w-full">
            {painPoints.map((point, index) => (
              <PainCard
                key={index}
                icon={point.icon}
                title={point.title}
                description={point.description}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          {/* Bottom Insight */}
          <motion.div 
            className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 max-w-[748px]"
            style={{
              textAlign: language === 'ar' ? 'right' : 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <p className="font-['Inter',sans-serif] font-medium leading-[40px] relative shrink-0 text-[20px] md:text-[24px] text-white tracking-[0.3691px]">
              {t.boldInsight}
            </p>
            <p className="font-['Inter',sans-serif] font-normal leading-[29.25px] relative shrink-0 text-[16px] md:text-[18px] text-[rgba(255,255,255,0.4)] tracking-[-0.4395px]">
              {t.subInsight}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
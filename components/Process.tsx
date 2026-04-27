"use client";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { motion } from "motion/react";
import { PrimaryButton } from "./PrimaryButton";
const imgImage26 = "/assets/88ead8fc5e1a6520d61062818dddefad0448896c.png";
const imgImage27 = "/assets/cdc0a734f0d7bf74e9aa699bf80f89dfcee15c74.png";
const imgImage28 = "/assets/542d9676ab60388b1c14b31f64eff9eaa57014d0.png";
const imgImage29 = "/assets/f3ff3a0ca21472b7259678e6a9bdaca45d784985.png";
// Header section
function ProcessHeader() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <motion.div 
      className="flex flex-col gap-[24px] items-center text-center w-full max-w-[800px]" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <h2 className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] text-[#1e1e1e] text-[24px] sm:text-[32px] lg:text-[36px] tracking-[0.3691px]">
        {t.clearProcess}
      </h2>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] text-[#5a5a5a] text-[16px] sm:text-[18px] tracking-[-0.4395px]">
        {t.designedForTeams}
      </p>
    </motion.div>
  );
}

// Step badge
function StepBadge({ stepNumber }: { stepNumber: string }) {
  return (
    <div className="bg-[#f5f5f5] flex items-center justify-center px-[12px] py-[8px] rounded-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#303030] text-[14px] tracking-[-0.1504px]">
        {stepNumber}
      </p>
    </div>
  );
}

// Step text content
function StepText({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-[6px] items-center text-center w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] text-[#1e1e1e] text-[18px] tracking-[-0.4395px]">
        {title}
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#5a5a5a] text-[14px] tracking-[-0.1504px]">
        {description}
      </p>
    </div>
  );
}

// Image with smooth scale-on-hover (no mouse-position zoom)
function ZoomableImage({ image, title }: { image: string; title: string }) {
  return (
    <motion.div
      className="h-[150px] w-full sm:w-[283px] relative overflow-hidden rounded-[8px] border-2 border-[rgba(0,150,137,0.2)] transition-colors duration-300 hover:border-[rgba(0,150,137,0.4)]"
      whileHover={{
        boxShadow: '0 4px 20px rgba(0, 150, 137, 0.15), 0 0 0 1px rgba(0, 150, 137, 0.3)',
      }}
      style={{
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 150, 137, 0.1)',
      }}
    >
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{ willChange: 'transform' }}
      >
        <Image
          alt={title}
          src={image}
          fill
          sizes="(max-width: 640px) 100vw, 283px"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

// Individual step card
function StepCard({ 
  stepNumber, 
  image, 
  title, 
  description, 
  delay 
}: { 
  stepNumber: string;
  image: string;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div 
      className="flex flex-col gap-[24px] items-center w-full sm:w-auto sm:flex-1"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <StepBadge stepNumber={stepNumber} />
      <div className="flex flex-col gap-[16px] items-center w-full">
        <ZoomableImage image={image} title={title} />
        <StepText title={title} description={description} />
      </div>
    </motion.div>
  );
}

// All steps container
function ProcessSteps() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-4 lg:gap-6 w-full">
      <StepCard 
        stepNumber="Step 1" 
        image={imgImage26}
        title={t.step1}
        description={t.step1Desc}
        delay={0}
      />
      <StepCard 
        stepNumber="Step 2" 
        image={imgImage27}
        title={t.step2}
        description={t.step2Desc}
        delay={0.1}
      />
      <StepCard 
        stepNumber="Step 3" 
        image={imgImage28}
        title={t.step3}
        description={t.step3Desc}
        delay={0.2}
      />
      <StepCard 
        stepNumber="Step 4" 
        image={imgImage29}
        title={t.step4}
        description={t.step4Desc}
        delay={0.3}
      />
    </div>
  );
}

// Main Process component
export function Process() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const scrollToAssessment = () => {
    document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section 
      id="how-it-works"
      className="bg-white w-full" 
      aria-labelledby="process-heading"
    >
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-[112px] xl:px-[238px] py-24 sm:py-28 md:py-32 lg:py-36 xl:py-40 w-full">
          <div className="flex flex-col gap-[64px] items-center max-w-[1200px] mx-auto w-full">
            <ProcessHeader />
            <ProcessSteps />
            <PrimaryButton onClick={scrollToAssessment}>
              {t.bookYourAssessment}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
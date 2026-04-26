"use client";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { PrimaryButton } from "./PrimaryButton";

function SecondaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.button 
      onClick={onClick}
      className="bg-white relative rounded-[8px] shrink-0 cursor-pointer group overflow-hidden"
      aria-label="See how it works"
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e1e1e] text-[18px] text-nowrap tracking-[-0.4395px]">{children}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      
      {/* Subtle shine effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 pointer-events-none"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.button>
  );
}

export function Hero() {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [dominantColor, setDominantColor] = useState({ r: 41, g: 128, b: 185 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scrollToAssessment = () => {
    document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProcess = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate color based on mouse position
  const getColorFromPosition = (x: number, y: number) => {
    const normalizedX = x / 100;
    const normalizedY = y / 100;
    
    // Create color zones: top-left (blue), top-right (purple), bottom (yellow-blue blend)
    if (normalizedY < 0.5) {
      // Top half: blend between blue and purple
      return {
        r: Math.floor(41 + normalizedX * 127),
        g: Math.floor(128 - normalizedX * 43),
        b: Math.floor(185 + normalizedX * 62),
      };
    } else {
      // Bottom half: blend between blue and yellow
      return {
        r: Math.floor(41 + normalizedX * 212),
        g: Math.floor(128 + normalizedX * 57),
        b: Math.floor(185 - normalizedX * 99),
      };
    }
  };

  useEffect(() => {
    let rafId: number;
    let targetX = 50;
    let targetY = 50;
    let currentX = 50;
    let currentY = 50;
    let currentColor = { r: 41, g: 128, b: 185 };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    };

    const animate = () => {
      // Smooth position interpolation
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      // Smooth color interpolation
      const targetColor = getColorFromPosition(currentX, currentY);
      currentColor.r += (targetColor.r - currentColor.r) * 0.1;
      currentColor.g += (targetColor.g - currentColor.g) * 0.1;
      currentColor.b += (targetColor.b - currentColor.b) * 0.1;
      
      setMousePosition({ x: currentX, y: currentY });
      setDominantColor({ 
        r: Math.floor(currentColor.r), 
        g: Math.floor(currentColor.g), 
        b: Math.floor(currentColor.b) 
      });
      
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden" aria-label="Hero section">
      {/* Interactive Mesh Gradient Background */}
      <div ref={containerRef} className="absolute inset-0" aria-hidden="true">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] to-background" />
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />
        
        {/* Simplified gradient layers - GPU accelerated */}
        <div className="absolute inset-0 opacity-40">
          {/* Primary gradient - dynamic color */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(
                circle 1200px at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(${dominantColor.r}, ${dominantColor.g}, ${dominantColor.b}, 0.28) 0%,
                rgba(${dominantColor.r}, ${dominantColor.g}, ${dominantColor.b}, 0.18) 30%,
                rgba(${dominantColor.r}, ${dominantColor.g}, ${dominantColor.b}, 0.1) 50%,
                transparent 75%
              )`,
              filter: 'blur(80px)',
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
            }}
          />
          
          {/* Secondary gradient - complementary color */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(
                circle 900px at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(${Math.min(255, dominantColor.r + 40)}, ${Math.max(0, dominantColor.g - 30)}, ${Math.min(255, dominantColor.b + 30)}, 0.18) 0%,
                rgba(${Math.min(255, dominantColor.r + 20)}, ${Math.max(0, dominantColor.g - 15)}, ${Math.min(255, dominantColor.b + 15)}, 0.12) 40%,
                transparent 70%
              )`,
              filter: 'blur(100px)',
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
            }}
          />
          
          {/* Ambient mesh points - static positions with dynamic colors */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle 600px at 20% 30%, rgba(41, 128, 185, 0.14) 0%, transparent 65%),
                radial-gradient(circle 650px at 80% 40%, rgba(168, 85, 247, 0.12) 0%, transparent 65%),
                radial-gradient(circle 700px at 50% 70%, rgba(96, 165, 250, 0.13) 0%, transparent 65%),
                radial-gradient(circle 550px at 15% 80%, rgba(253, 185, 86, 0.1) 0%, transparent 65%),
                radial-gradient(circle 620px at 85% 75%, rgba(41, 128, 185, 0.11) 0%, transparent 65%)
              `,
              filter: 'blur(90px)',
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
            }}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <div className="flex flex-row items-center justify-center min-h-[700px]">
          <div 
            className="content-stretch flex items-center justify-center relative w-full"
            style={{ 
              paddingLeft: 'var(--spacing-md)', 
              paddingRight: 'var(--spacing-md)',
              paddingTop: 'var(--spacing-4xl)',
              paddingBottom: 'var(--spacing-5xl)'
            }}
          >
            <div
              className="flex flex-col items-center justify-center max-w-[1000px] w-full"
              style={{ gap: 'var(--spacing-3xl)' }}
            >
              {/* Partner logo strip — quiet social proof above the headline */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-4 w-full"
                style={{ filter: 'invert(1)', opacity: 0.55 }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 0.55, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                aria-label="Trusted by"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.brainy.ink/ink/media/partners/3608c4b5bb45-W-10.png"
                  alt="Wix"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-6 md:h-7 w-auto object-contain select-none"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.brainy.ink/ink/media/partners/20c597caf6d8-W-2.png"
                  alt="Cairo Amman Bank"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-6 md:h-7 w-auto object-contain select-none"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.brainy.ink/ink/media/partners/e1e4467d9f04-W-6.png"
                  alt="FLOP"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-6 md:h-7 w-auto object-contain select-none"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.brainy.ink/ink/media/partners/ca8db81d7cc2-W-7.png"
                  alt="Budy"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-6 md:h-7 w-auto object-contain select-none"
                />
              </motion.div>

              {/* Heading - ONLY H1 on the entire page */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              >
                <h1
                  className="text-center text-foreground leading-tight"
                  style={{ 
                    fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                    fontWeight: 600
                  }}
                >
                  {t.heroHeadline}
                </h1>
              </motion.div>
              
              {/* Subheading */}
              <motion.div 
                className="w-full max-w-[774px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              >
                <p 
                  className="text-center tracking-wide"
                  style={{ 
                    color: 'var(--brand-600)',
                    fontSize: '1.125rem'
                  }}
                >
                  {t.heroSubtext}
                </p>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap items-center justify-center"
                style={{ gap: 'var(--spacing-md)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <PrimaryButton 
                  onClick={scrollToAssessment}
                >
                  {t.bookFreeAssessment}
                </PrimaryButton>
                <SecondaryButton 
                  onClick={scrollToProcess}
                >
                  {t.seeHowItWorks}
                </SecondaryButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
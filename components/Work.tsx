"use client";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
const cabStatic = "/assets/545f36efbeb9e7c15a31d9096bfaddcd645ecf24.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface WorkItem {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  categoriesEn: string[];
  categoriesAr: string[];
  staticImage: string;
  videoUrl?: string;
  link: string;
}

// Portfolio projects data
const workData: WorkItem[] = [
  {
    id: 'cairo-amman-bank',
    titleEn: 'Cairo Amman Bank',
    titleAr: 'بنك القاهرة عمان',
    descriptionEn: 'Online adoption up 80% through UX redesign',
    descriptionAr: 'زيادة التبني الرقمي بنسبة 80% من خلال إعادة تصميم تجربة المستخدم',
    categoriesEn: ['UX Design', 'UI Design', 'Banking'],
    categoriesAr: ['تصميم تجربة المستخدم', 'تصميم واجهة المستخدم', 'الخدمات المصرفية'],
    staticImage: cabStatic,
    videoUrl: '/cairo-amman-bank.mp4',
    link: 'https://brainycircles.com/portfolio/cairo-amman-bank-ux-ui-design/'
  },
  {
    id: 'fontfella',
    titleEn: 'FontFella',
    titleAr: 'فونت فيلا',
    descriptionEn: 'AI-powered typography platform for discovering, pairing, and identifying fonts.',
    descriptionAr: 'منصة طباعة مدعومة بالذكاء الاصطناعي لاكتشاف الخطوط ومطابقتها وتحديدها',
    categoriesEn: ['UX Design', 'UI Design', 'SaaS', 'AI Tooling'],
    categoriesAr: ['تصميم تجربة المستخدم', 'تصميم واجهة المستخدم', 'SaaS', 'أدوات الذكاء الاصطناعي'],
    staticImage: 'https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2NjY0NjQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '#'
  }
];

// Header section
function WorkHeader() {
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
        {t.ourWork}
      </h2>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] text-[#5a5a5a] text-[16px] sm:text-[18px] tracking-[-0.4395px]">
        {t.workSubtext}
      </p>
    </motion.div>
  );
}

// Individual work card with image hover
function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { language } = useLanguage();
  const cursorRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Control video playback based on hover state and mobile
  useEffect(() => {
    if (videoRef.current) {
      if (isMobile || isHovered) {
        videoRef.current.play().catch(() => {
          // Handle autoplay error silently
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset to start
      }
    }
  }, [isHovered, isMobile]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolling(true);
          ticking = false;
        });
        ticking = true;
      }

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set new timeout to detect scroll end
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cursorRef.current || !cardRef.current) return;
    
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Use RAF for smooth 60fps updates
    rafRef.current = requestAnimationFrame(() => {
      if (!cursorRef.current || !cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Use transform for GPU-accelerated positioning
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    });
  };

  const categories = language === 'ar' ? item.categoriesAr : item.categoriesEn;
  const viewCaseStudyText = language === 'ar' ? 'عرض النتائج' : 'See the results';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      {/* Image Container */}
      <a
        ref={cardRef}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-[12px] bg-[#f5f5f5] transition-all duration-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ cursor: isMobile ? 'pointer' : 'none' }}
      >
        {/* Static image - hidden on mobile */}
        <img
          src={item.staticImage}
          alt={language === 'ar' ? item.titleAr : item.titleEn}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isMobile ? 'opacity-0' : isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Animated image - always shown on mobile, shown on hover on desktop */}
        {item.videoUrl && (
          <video
            ref={videoRef}
            src={item.videoUrl}
            alt={`${language === 'ar' ? item.titleAr : item.titleEn} - animated`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isMobile ? 'opacity-100' : isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            loop
            muted
            playsInline
          />
        )}
        
        {/* Custom cursor - hidden on mobile */}
        {!isMobile && (
          <div
            ref={cursorRef}
            className={`absolute pointer-events-none z-10 transition-opacity duration-150 ${
              isHovered && !isScrolling ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              willChange: 'transform, opacity',
              transform: 'translate3d(0, 0, 0) translate(-50%, -50%)',
            }}
          >
            <div className="bg-black/80 backdrop-blur-sm text-white px-6 py-3 rounded-full font-['Inter',sans-serif] font-medium text-[16px] tracking-[-0.1504px] shadow-xl whitespace-nowrap">
              {viewCaseStudyText}
            </div>
          </div>
        )}
      </a>

      {/* Content Below Image - Always Visible */}
      <div className="mt-6 flex flex-col gap-3" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {/* Title */}
        <h3 className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] text-[#1e1e1e] text-[24px] tracking-[-0.4395px] ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {language === 'ar' ? item.titleAr : item.titleEn}
        </h3>
        
        {/* Description */}
        <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[#5a5a5a] text-[16px] tracking-[-0.1504px] ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {language === 'ar' ? item.descriptionAr : item.descriptionEn}
        </p>
        
        {/* Categories - Fixed height container to prevent layout shift */}
        <div className={`min-h-[28px] flex items-center ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`flex items-center gap-2 flex-wrap transition-opacity duration-300 ${
              isMobile || isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {categories.map((category, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="font-['Inter:Regular',sans-serif] font-normal text-[#5a5a5a] text-[14px] tracking-[-0.1504px]">
                  {category}
                </span>
                {idx < categories.length - 1 && (
                  <span className="text-[#5a5a5a]">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Single project grid layout
function WorkGrid() {
  return (
    <div className="w-full max-w-[900px] mx-auto px-4 flex flex-col gap-16">
      {workData.map((item, index) => (
        <WorkCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}

// Main Work component
export function Work() {
  return (
    <section 
      id="work"
      className="bg-white w-full" 
      aria-labelledby="work-heading"
    >
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-[112px] xl:px-[238px] py-16 sm:py-20 md:py-24 lg:py-[112px] w-full">
          <div className="flex flex-col gap-12 md:gap-[64px] items-center w-full">
            <WorkHeader />
            <WorkGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
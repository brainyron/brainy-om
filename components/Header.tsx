"use client";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { useState, useEffect } from "react";

// Logo SVG aspect ratio: viewBox 857 x 229 (~3.74:1)
// Mobile: render the SVG at a small height (looks fine since it's a wordmark)
function MobileLogo({ isDarkBg }: { isDarkBg: boolean }) {
  const src = isDarkBg ? "/brand/brainy-light.svg" : "/brand/brainy-dark.svg";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Brainy"
      width={90}
      height={24}
      style={{ height: '24px', width: 'auto', display: 'block' }}
    />
  );
}

function DesktopLogo({ isDarkBg }: { isDarkBg: boolean }) {
  const src = isDarkBg ? "/brand/brainy-light.svg" : "/brand/brainy-dark.svg";
  return (
    <div className="h-[28px] relative shrink-0 flex items-center" data-name="Logo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Brainy"
        width={105}
        height={28}
        style={{ height: '28px', width: 'auto', display: 'block' }}
      />
    </div>
  );
}

// Language button - compact for mobile
function LanguageButton({ onClick, color, language }: { onClick: () => void; color: string; language: 'en' | 'ar' }) {
  const displayText = language === 'ar' ? 'EN' : 'AR';
  
  return (
    <button 
      onClick={onClick}
      className="h-[36px] w-[44px] md:w-[85.32px] relative rounded-[8px] shrink-0 cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105 flex items-center justify-center border"
      data-name="Button"
      aria-label="Toggle language"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <p 
        className="font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[20px] not-italic text-[14px] text-center tracking-[-0.1504px]" 
        style={{ color: color, transition: 'color 0.3s ease' }}
      >
        <span className="md:hidden">{displayText}</span>
        <span className="hidden md:inline">{language === 'ar' ? 'English' : 'العربية'}</span>
      </p>
    </button>
  );
}

// Header CTA button - matches Figma design (no arrow, smaller)
function HeaderCTAButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#009689] relative rounded-[8px] h-[36px] shrink-0 transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
      data-name="Button"
    >
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[8px] relative h-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-nowrap">
          {children}
        </p>
      </div>
    </button>
  );
}

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isDarkBg, setIsDarkBg] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const headerRect = document.querySelector('header')?.getBoundingClientRect();
      if (!headerRect) return;
      
      const headerCenter = headerRect.top + headerRect.height / 2;
      const sections = document.querySelectorAll('section');
      
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= headerCenter && rect.bottom >= headerCenter) {
          const ariaLabel = section.getAttribute('aria-label');
          if (ariaLabel === 'Hero section') {
            setIsDarkBg(false);
            break;
          }
          
          const computedStyle = window.getComputedStyle(section);
          const bgColor = computedStyle.backgroundColor;
          
          const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (match) {
            const r = parseInt(match[1]);
            const g = parseInt(match[2]);
            const b = parseInt(match[3]);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            setIsDarkBg(luminance < 0.5);
          } else {
            const bgImage = computedStyle.backgroundImage;
            if (bgImage && bgImage !== 'none') {
              setIsDarkBg(true);
            }
          }
          break;
        }
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const textColor = isDarkBg ? '#FFFFFF' : '#1E1E1E';
  
  const scrollToAssessment = () => {
    document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full" 
      data-name="Header"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-16 xl:px-[64px]">
        <div className="content-stretch flex items-center justify-between py-[8px] md:py-[14px] relative w-full max-w-[1200px] mx-auto">
          {/* Logo - Mobile shows simplified, Desktop shows full */}
          <div className="md:hidden">
            <MobileLogo isDarkBg={isDarkBg} />
          </div>
          <div className="hidden md:block">
            <DesktopLogo isDarkBg={isDarkBg} />
          </div>
          
          {/* Actions */}
          <div className="flex gap-2 md:gap-4 h-[36px] items-center">
            <LanguageButton onClick={toggleLanguage} color={textColor} language={language} />
            <HeaderCTAButton onClick={scrollToAssessment}>
              {t.bookAssessment}
            </HeaderCTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}
"use client";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import svgPaths from "../imports/svg-9o0zott1o0";
import mobileSvgPaths from "../imports/svg-fbg4bao6dl";
import { useState, useEffect } from "react";
import { PrimaryButton } from "./PrimaryButton";

// Mobile Logo (new B logo from Figma)
function MobileLogo({ color }: { color: string }) {
  return (
    <div className="h-[24px] w-[19px] relative">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6082 23.5682">
        <g>
          <path d={mobileSvgPaths.p3fc87c80} fill={color} style={{ transition: 'fill 0.3s ease' }} />
          <path d={mobileSvgPaths.p1bd56880} fill={color} style={{ transition: 'fill 0.3s ease' }} />
        </g>
      </svg>
    </div>
  );
}

// Desktop Logo (full Brainy logo)
function Om() {
  return (
    <div className="absolute inset-[30.2%_1.14%_19.4%_72.09%]" data-name=".om">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.2632 12.6">
        <g id=".om">
          <path d={svgPaths.p2ba8ee00} fill="#009689" id="Vector" />
          <path d={svgPaths.p30b95d00} fill="#009689" id="Vector_2" />
          <path d={svgPaths.p2c0f6a80} fill="#009689" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group({ color }: { color: string }) {
  return (
    <div className="absolute contents inset-[0_0.5%_0.09%_0]" data-name="Group">
      <div className="absolute inset-[33.06%_0.5%_0.09%_0]" data-name="Vector">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6082 15.7704">
            <path d={svgPaths.p3d2ea000} fill={color} id="Vector" style={{ transition: 'fill 0.3s ease' }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0_0.5%_66.71%_0.06%]" data-name="Vector_2">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5966 7.85248">
            <path d={svgPaths.p1d7c1780} fill={color} id="Vector_2" style={{ transition: 'fill 0.3s ease' }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon({ color }: { color: string }) {
  return (
    <div className="h-[23.59px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group color={color} />
    </div>
  );
}

function Group2({ color }: { color: string }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[23.59px] items-start left-0 top-0 w-[18.701px]" data-name="Group">
      <Icon color={color} />
    </div>
  );
}

function Group3({ color }: { color: string }) {
  return (
    <div className="absolute contents inset-[0_0.06%_0.2%_0]" data-name="Group">
      <div className="absolute inset-[5.22%_81.32%_19.11%_0]" data-name="Vector">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.758 16.7596">
            <path d={svgPaths.p31337800} fill={color} id="Vector" style={{ transition: 'fill 0.3s ease' }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[24.19%_67.46%_20.1%_21.3%]" data-name="Vector_2">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.27348 12.3405">
            <path d={svgPaths.p23661500} fill={color} id="Vector_2" style={{ transition: 'fill 0.3s ease' }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[24.19%_47.59%_19.01%_33.72%]" data-name="Vector_3">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.758 12.5806">
            <path d={svgPaths.p33cfff80} fill={color} id="Vector_3" style={{ transition: 'fill 0.3s ease' }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0_39.08%_20.15%_55.31%]" data-name="Vector_4">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.13091 17.687">
            <path d={svgPaths.p3bc3cf80} fill={color} id="Vector_4" style={{ transition: 'fill 0.3s ease' }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[24.14%_19.6%_20.2%_63.82%]" data-name="Vector_5">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.206 12.3296">
            <path d={svgPaths.p2ca0e000} fill={color} id="Vector_5" style={{ transition: 'fill 0.3s ease' }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.22%_0.06%_0.2%_80.95%]" data-name="Vector_6">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9797 16.5195">
            <path d={svgPaths.p2d3c5b00} fill={color} id="Vector_6" style={{ transition: 'fill 0.3s ease' }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1({ color }: { color: string }) {
  return (
    <div className="h-[22.15px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group3 color={color} />
    </div>
  );
}

function Group1({ color }: { color: string }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.15px] items-start left-[26.37px] top-[2.85px] w-[73.633px]" data-name="Group1">
      <Icon1 color={color} />
    </div>
  );
}

function DesktopLogo({ color }: { color: string }) {
  return (
    <div className="h-[25px] relative shrink-0 w-[139.167px]" data-name="Logo">
      <Om />
      <Group2 color={color} />
      <Group1 color={color} />
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
            <MobileLogo color={textColor} />
          </div>
          <div className="hidden md:block">
            <DesktopLogo color={textColor} />
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
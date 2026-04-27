"use client";
import { Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { motion } from "motion/react";
import { PrimaryButton } from "./PrimaryButton";
import { toast } from "sonner";

export function FinalCTA() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile and track mouse movement
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Mouse tracking for desktop only
    let rafId: number;
    let targetX = 50;
    let targetY = 50;
    let currentX = 50;
    let currentY = 50;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        targetX = (e.clientX / window.innerWidth) * 100;
        targetY = (e.clientY / window.innerHeight) * 100;
      }
    };

    const animate = () => {
      if (window.innerWidth >= 768) {
        // Smooth interpolation
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;
        setMousePosition({ x: currentX, y: currentY });
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use FormSubmit.co - completely free, no API keys needed
      const formData = new FormData(e.target as HTMLFormElement);
      
      const response = await fetch('https://formsubmit.co/ron@brainycircles.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Show success message
        toast.success(
          language === 'en' 
            ? "✓ Assessment request sent successfully! We'll contact you within 24 hours."
            : "✓ تم إرسال طلب التقييم بنجاح! سنتواصل معك خلال 24 ساعة.",
          {
            duration: 5000,
            style: {
              background: '#009689',
              color: 'white',
              border: 'none',
              fontSize: '16px',
              fontWeight: '500'
            }
          }
        );
        
        // Reset form
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Show error message
      toast.error(
        language === 'en' 
          ? "Failed to send message. Please try again or email us directly at ron@brainycircles.com"
          : "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة على ron@brainycircles.com",
        {
          duration: 6000,
          style: {
            background: '#dc2626',
            color: 'white',
            border: 'none'
          }
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      id="assessment"
      className="relative w-full overflow-hidden" 
      aria-labelledby="cta-heading"
    >
      {/* 5-Blob Animated Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#242424] to-[#1e1e1e]">
        {/* Blob 1 - Teal (Brand) - Interactive on desktop, animated on mobile */}
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0, 150, 137, 0.4) 0%, rgba(0, 150, 137, 0.2) 40%, transparent 70%)',
            filter: 'blur(80px)',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
          animate={isMobile ? {
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          } : {
            x: `${mousePosition.x * 0.3 - 15}%`,
            y: `${mousePosition.y * 0.2 - 10}%`,
          }}
          transition={isMobile ? {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          } : {
            type: "spring",
            damping: 25,
            stiffness: 50,
          }}
          initial={{ 
            left: '10%', 
            top: '20%' 
          }}
        />
        
        {/* Blob 2 - Blue */}
        <motion.div
          className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0.18) 40%, transparent 70%)',
            filter: 'blur(70px)',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
          animate={isMobile ? {
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          } : {
            x: `${-mousePosition.x * 0.25 + 12}%`,
            y: `${mousePosition.y * 0.15 - 7}%`,
          }}
          transition={isMobile ? {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          } : {
            type: "spring",
            damping: 30,
            stiffness: 40,
          }}
          initial={{ 
            right: '15%', 
            top: '10%' 
          }}
        />
        
        {/* Blob 3 - Purple */}
        <motion.div
          className="absolute w-[380px] h-[380px] md:w-[650px] md:h-[650px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.15) 40%, transparent 70%)',
            filter: 'blur(90px)',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
          animate={isMobile ? {
            x: [0, 40, -50, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.2, 0.85, 1],
          } : {
            x: `${mousePosition.x * 0.2 - 10}%`,
            y: `${-mousePosition.y * 0.25 + 12}%`,
          }}
          transition={isMobile ? {
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          } : {
            type: "spring",
            damping: 35,
            stiffness: 45,
          }}
          initial={{ 
            left: '50%', 
            bottom: '15%' 
          }}
        />
        
        {/* Blob 4 - Cyan */}
        <motion.div
          className="absolute w-[320px] h-[320px] md:w-[550px] md:h-[550px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.32) 0%, rgba(6, 182, 212, 0.16) 40%, transparent 70%)',
            filter: 'blur(75px)',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
          animate={isMobile ? {
            x: [0, -40, 55, 0],
            y: [0, 45, -25, 0],
            scale: [1, 0.95, 1.1, 1],
          } : {
            x: `${-mousePosition.x * 0.18 + 9}%`,
            y: `${-mousePosition.y * 0.22 + 11}%`,
          }}
          transition={isMobile ? {
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          } : {
            type: "spring",
            damping: 28,
            stiffness: 42,
          }}
          initial={{ 
            right: '5%', 
            bottom: '20%' 
          }}
        />
        
        {/* Blob 5 - Indigo */}
        <motion.div
          className="absolute w-[340px] h-[340px] md:w-[580px] md:h-[580px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.28) 0%, rgba(99, 102, 241, 0.14) 40%, transparent 70%)',
            filter: 'blur(85px)',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
          animate={isMobile ? {
            x: [0, 35, -45, 0],
            y: [0, -50, 35, 0],
            scale: [1, 1.15, 0.9, 1],
          } : {
            x: `${mousePosition.x * 0.22 - 11}%`,
            y: `${mousePosition.y * 0.28 - 14}%`,
          }}
          transition={isMobile ? {
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          } : {
            type: "spring",
            damping: 32,
            stiffness: 38,
          }}
          initial={{ 
            left: '20%', 
            top: '50%' 
          }}
        />
        
        {/* Noise Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center w-full">
        <div className="flex flex-col items-center px-6 sm:px-8 md:px-16 lg:px-[112px] xl:px-[238px] py-24 sm:py-28 md:py-32 lg:py-36 xl:py-40 w-full">
          <div className="flex flex-col gap-12 md:gap-[48px] items-center w-full max-w-[900px]">
        
        {/* Heading */}
        <motion.h2 
          className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-tight text-center text-white text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] tracking-[-0.9876px] px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          {t.fixExperience}
        </motion.h2>
        
        {/* Subheading */}
        <motion.p 
          className="font-['Inter',sans-serif] font-normal leading-[28px] text-[rgba(255,255,255,0.7)] text-center text-[16px] sm:text-[18px] tracking-[-0.1504px] px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          {t.revealInefficiencies}
        </motion.p>
        
        {/* Form Container */}
        <motion.div 
          className="mx-auto w-full max-w-[672px] rounded-[14px] border border-[rgba(255,255,255,0.1)] p-5 sm:p-8 md:p-12 backdrop-blur-xl bg-[rgba(36,36,36,0.6)] shadow-2xl group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ 
            scale: 1.01,
            borderColor: 'rgba(0, 150, 137, 0.3)',
            transition: { duration: 0.3 }
          }}
        >
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col gap-6"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <motion.div 
                className="flex flex-col gap-2"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label 
                  htmlFor="name" 
                  className="font-['Inter',sans-serif] font-medium text-white text-[14px] leading-[14px] tracking-[-0.1504px]"
                >
                  {t.fullName}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[rgba(44,44,44,0.8)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-[8px] px-3 py-2 text-white text-[14px] placeholder:text-[rgba(255,255,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent focus:bg-[rgba(44,44,44,0.95)] transition-all duration-300"
                  placeholder={t.namePlaceholder}
                  style={{
                    height: '36px',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '-0.1504px'
                  }}
                />
              </motion.div>
              
              {/* Email Address */}
              <motion.div 
                className="flex flex-col gap-2"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label 
                  htmlFor="email" 
                  className="font-['Inter',sans-serif] font-medium text-white text-[14px] leading-[14px] tracking-[-0.1504px]"
                >
                  {t.emailAddress}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[rgba(44,44,44,0.8)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-[8px] px-3 py-2 text-white text-[14px] placeholder:text-[rgba(255,255,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent focus:bg-[rgba(44,44,44,0.95)] transition-all duration-300"
                  placeholder={t.emailPlaceholder}
                  style={{
                    height: '36px',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '-0.1504px'
                  }}
                />
              </motion.div>
            </div>
            
            {/* Company */}
            <motion.div 
              className="flex flex-col gap-2"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label 
                htmlFor="company" 
                className="font-['Inter',sans-serif] font-medium text-white text-[14px] leading-[14px] tracking-[-0.1504px]"
              >
                {t.company}
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                className="bg-[rgba(44,44,44,0.8)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-[8px] px-3 py-2 text-white text-[14px] placeholder:text-[rgba(255,255,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent focus:bg-[rgba(44,44,44,0.95)] transition-all duration-300"
                placeholder={t.companyPlaceholder}
                style={{
                  height: '36px',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.1504px'
                }}
              />
            </motion.div>
            
            {/* Challenge Textarea */}
            <motion.div 
              className="flex flex-col gap-2"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label 
                htmlFor="message" 
                className="font-['Inter',sans-serif] font-medium text-white text-[14px] leading-[14px] tracking-[-0.1504px]"
              >
                {t.tellChallenge}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="bg-[rgba(44,44,44,0.8)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-[8px] px-3 py-2 text-white text-[14px] placeholder:text-[rgba(255,255,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent focus:bg-[rgba(44,44,44,0.95)] transition-all duration-300 resize-none"
                placeholder={t.challengePlaceholder}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '20px',
                  letterSpacing: '-0.1504px'
                }}
              />
            </motion.div>
            
            {/* Confidential Notice */}
            <motion.div 
              className="flex items-center justify-center gap-3 rounded-[10px] border border-[rgba(0,150,137,0.3)] bg-[rgba(0,150,137,0.15)] backdrop-blur-sm px-4 py-4"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,150,137,0.2)' }}
              transition={{ duration: 0.2 }}
            >
              <Shield 
                className="flex-shrink-0 text-[#009689]" 
                style={{ 
                  height: '20px', 
                  width: '20px'
                }} 
              />
              <p 
                className="font-['Inter',sans-serif] font-normal text-white text-[14px] leading-[20px] tracking-[-0.1504px] text-center"
              >
                {t.confidential}
              </p>
            </motion.div>
            
            {/* Submit Button */}
            <PrimaryButton
              type="submit"
              className="w-full"
              style={{
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '-0.4395px',
                padding: '12px 16px'
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? t.submitting : t.bookFreeAssessment}
            </PrimaryButton>
          </form>
        </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
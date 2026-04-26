"use client";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
const dashboardDark = "/assets/7a3c1d5c8a6b64a5463b8707087c7209c4003289.png";
const dashboardLight = "/assets/272ffe142faa42c4e7d175f08d7955d2113742a8.png";
import { PrimaryButton } from "./PrimaryButton";

export function DashboardShowcase() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { isRTL } = useLanguage();

  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        paddingTop: 'var(--spacing-4xl)', 
        paddingBottom: 'var(--spacing-5xl)',
        background: 'linear-gradient(180deg, rgb(38, 38, 38) 0%, rgb(23, 23, 23) 100%)'
      }}
      aria-label="Dashboard showcase"
    >
      <div 
        className="relative container mx-auto max-w-[1200px]"
        style={{ 
          paddingLeft: 'var(--spacing-md)', 
          paddingRight: 'var(--spacing-md)' 
        }}
      >
        {/* Feature Tags */}
        <motion.div 
          className="flex flex-wrap justify-center"
          style={{ 
            marginBottom: 'var(--spacing-lg)',
            gap: 'var(--spacing-md)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className="rounded-full border border-[#404040]"
            style={{
              backgroundColor: '#262626',
              paddingLeft: 'var(--spacing-md)',
              paddingRight: 'var(--spacing-md)',
              paddingTop: 'var(--spacing-sm)',
              paddingBottom: 'var(--spacing-sm)',
              color: '#d4d4d4'
            }}
          >
            {isRTL ? '🎨 نظام التصميم' : '🎨 Design System'}
          </div>
          <div 
            className="rounded-full border border-[#404040]"
            style={{
              backgroundColor: '#262626',
              paddingLeft: 'var(--spacing-md)',
              paddingRight: 'var(--spacing-md)',
              paddingTop: 'var(--spacing-sm)',
              paddingBottom: 'var(--spacing-sm)',
              color: '#d4d4d4'
            }}
          >
            {isRTL ? '📊 تصور البيانات' : '📊 Data Visualization'}
          </div>
          <div 
            className="rounded-full border border-[#404040]"
            style={{
              backgroundColor: '#262626',
              paddingLeft: 'var(--spacing-md)',
              paddingRight: 'var(--spacing-md)',
              paddingTop: 'var(--spacing-sm)',
              paddingBottom: 'var(--spacing-sm)',
              color: '#d4d4d4'
            }}
          >
            {isRTL ? '🌓 الوضع المزدوج' : '🌓 Dual Mode'}
          </div>
          <div 
            className="rounded-full border border-[#404040]"
            style={{
              backgroundColor: '#262626',
              paddingLeft: 'var(--spacing-md)',
              paddingRight: 'var(--spacing-md)',
              paddingTop: 'var(--spacing-sm)',
              paddingBottom: 'var(--spacing-sm)',
              color: '#d4d4d4'
            }}
          >
            {isRTL ? '🏦 المستوى المؤسسي' : '🏦 Enterprise Grade'}
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div 
          className="text-center"
          style={{ marginBottom: 'var(--spacing-2xl)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <h2 
            className="text-white text-center"
            style={{ 
              marginBottom: 'var(--spacing-lg)',
              fontSize: 'clamp(1.875rem, 4vw, 3rem)',
              lineHeight: '1.2'
            }}
          >
            {isRTL 
              ? 'زيادة التبني الرقمي بنسبة 80% لبنك القاهرة عمان'
              : 'Online adoption up 80% for Cairo Amman Bank'}
          </h2>
          <p 
            className="mx-auto max-w-2xl text-center"
            style={{ 
              color: '#d4d4d4'
            }}
          >
            {isRTL 
              ? 'تحقق من خلال إعادة تصميم تجربة المستخدم، تبسيط النظام، وأنظمة التصميم على المستوى المؤسسي.'
              : 'Achieved through UX redesign, system simplification, and enterprise-ready design systems.'}
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div 
          className="relative mx-auto"
          style={{ marginBottom: 'var(--spacing-3xl)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Theme Toggle Button */}
          <div 
            className="absolute z-20 flex justify-center w-full"
            style={{
              top: 'calc(var(--spacing-lg) * -1)'
            }}
          >
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="group relative flex items-center rounded-full border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ 
                gap: 'var(--spacing-sm)',
                paddingLeft: 'var(--spacing-md)',
                paddingRight: 'var(--spacing-md)',
                paddingTop: 'var(--spacing-sm)',
                paddingBottom: 'var(--spacing-sm)',
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                borderColor: '#e5e5e5'
              }}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div 
                className="relative rounded-full transition-colors duration-500 ease-in-out"
                style={{ 
                  width: '2.5rem',
                  height: '1.25rem',
                  backgroundColor: isDarkMode ? '#14b8a6' : '#e5e5e5'
                }}
              >
                <div 
                  className="absolute top-0.5 bg-white rounded-full shadow-md transition-all duration-500 ease-in-out transform"
                  style={{ 
                    width: '1rem',
                    height: '1rem',
                    left: isDarkMode ? '22px' : '2px',
                  }}
                />
              </div>
              <div className="relative w-5 h-5 overflow-hidden">
                <Sun 
                  className="absolute inset-0 h-5 w-5 transition-all duration-500 ease-in-out"
                  style={{
                    color: '#FE9A00',
                    opacity: isDarkMode ? 0 : 1,
                    transform: isDarkMode ? 'rotate(180deg) scale(0.5)' : 'rotate(0deg) scale(1)',
                  }}
                />
                <Moon 
                  className="absolute inset-0 h-5 w-5 transition-all duration-500 ease-in-out"
                  style={{
                    color: '#009689',
                    opacity: isDarkMode ? 1 : 0,
                    transform: isDarkMode ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0.5)',
                  }}
                />
              </div>
            </button>
          </div>

          {/* Dashboard Image */}
          <div className="relative w-full rounded-xl overflow-hidden">
            <div className="relative w-full">
              {/* Dark Mode Dashboard */}
              <div 
                className="transition-opacity duration-700 ease-in-out"
                style={{ 
                  opacity: isDarkMode ? 1 : 0,
                  position: isDarkMode ? 'relative' : 'absolute',
                  inset: 0,
                  width: '100%',
                }}
              >
                <Image
                  src={dashboardDark}
                  alt={isRTL ? 'لوحة بنك القاهرة عمان - الوضع الداكن' : 'Cairo Amman Bank Dashboard - Dark Mode'}
                  width={1440}
                  height={1024}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              {/* Light Mode Dashboard */}
              <div 
                className="transition-opacity duration-700 ease-in-out"
                style={{ 
                  opacity: isDarkMode ? 0 : 1,
                  position: isDarkMode ? 'absolute' : 'relative',
                  inset: 0,
                  width: '100%',
                }}
              >
                <Image
                  src={dashboardLight}
                  alt={isRTL ? 'لوحة بنك القاهرة عمان - الوضع الفاتح' : 'Cairo Amman Bank Dashboard - Light Mode'}
                  width={1440}
                  height={1024}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <PrimaryButton href="#contact">
            {isRTL ? 'احجز تقييم رقمي مجاني' : 'Book a free digital assessment'}
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}
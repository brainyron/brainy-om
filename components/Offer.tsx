"use client";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { motion } from "motion/react";

export function Offer() {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  
  const scrollToAssessment = () => {
    document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatYouGet = [
    t.audit,
    t.journeyBreakdown,
    t.frictionMapping,
    t.roadmap
  ];

  const whatWeDeliver = [
    t.redesign,
    t.designSystem,
    t.enterpriseUX,
    t.implementation
  ];

  return (
    <section 
      className="bg-background"
      style={{ 
        paddingTop: 'var(--spacing-4xl)', 
        paddingBottom: 'var(--spacing-5xl)' 
      }}
      aria-labelledby="offer-heading"
    >
      <div 
        className="container mx-auto"
        style={{ 
          paddingLeft: 'var(--spacing-md)', 
          paddingRight: 'var(--spacing-md)' 
        }}
      >
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          style={{ marginBottom: 'var(--spacing-4xl)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 
            id="offer-heading"
            className="text-foreground"
            style={{ 
              marginBottom: 'var(--spacing-lg)',
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)'
            }}
          >
            {t.ourSystem}
          </h2>
        </motion.div>
        
        <div 
          className="grid gap-8 lg:grid-cols-2"
          style={{ marginBottom: 'var(--spacing-3xl)' }}
        >
          {/* What You Get */}
          <motion.div 
            className="rounded-xl border bg-muted"
            style={{ padding: 'var(--spacing-2xl)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 
              className="text-foreground"
              style={{ 
                marginBottom: 'var(--spacing-lg)',
                fontSize: '1.5rem'
              }}
            >
              {t.whatYouGet}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {whatYouGet.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  style={{ gap: 'var(--spacing-sm)' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CheckCircle2 
                    className="mt-1 flex-shrink-0" 
                    style={{ 
                      height: '1.25rem', 
                      width: '1.25rem',
                      color: 'var(--brand-600)'
                    }} 
                  />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* What We Deliver */}
          <motion.div 
            className="rounded-xl border"
            style={{ 
              padding: 'var(--spacing-2xl)',
              borderColor: 'var(--brand-200)',
              backgroundColor: 'var(--brand-50)'
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 
              className="text-foreground"
              style={{ 
                marginBottom: 'var(--spacing-lg)',
                fontSize: '1.5rem'
              }}
            >
              {t.whatWeDeliver}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {whatWeDeliver.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  style={{ gap: 'var(--spacing-sm)' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CheckCircle2 
                    className="mt-1 flex-shrink-0" 
                    style={{ 
                      height: '1.25rem', 
                      width: '1.25rem',
                      color: 'var(--brand-600)'
                    }} 
                  />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Differentiator */}
        <motion.div 
          className="rounded-xl bg-foreground text-center"
          style={{ 
            marginBottom: 'var(--spacing-3xl)',
            padding: 'var(--spacing-3xl)',
            border: '2px solid var(--foreground)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p 
            className="text-background leading-relaxed"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
          >
            {t.differentiator}
          </p>
        </motion.div>
        
        {/* Risk Reversal + CTA */}
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div 
            className="inline-flex items-center rounded-full border"
            style={{ 
              marginBottom: 'var(--spacing-2xl)',
              gap: 'var(--spacing-sm)',
              borderColor: 'var(--brand-200)',
              backgroundColor: 'var(--brand-50)',
              paddingLeft: 'var(--spacing-lg)',
              paddingRight: 'var(--spacing-lg)',
              paddingTop: 'var(--spacing-sm)',
              paddingBottom: 'var(--spacing-sm)'
            }}
          >
            <Shield style={{ height: '1.25rem', width: '1.25rem', color: 'var(--brand-600)' }} />
            <span className="text-foreground" style={{ fontSize: '0.875rem' }}>
              {t.riskReversal}
            </span>
          </div>
          
          <Button 
            size="lg"
            onClick={scrollToAssessment}
            className="bg-primary hover:bg-brand-700 text-primary-foreground transition-all duration-200 hover:scale-105"
            style={{
              paddingLeft: 'var(--spacing-2xl)',
              paddingRight: 'var(--spacing-2xl)',
              fontSize: '1.125rem'
            }}
            aria-label="Get your free assessment"
          >
            {t.getFreeAssessment}
            <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5`} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

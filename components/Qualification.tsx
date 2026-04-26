"use client";
import { CheckCircle2, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { motion } from "motion/react";

export function Qualification() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const yesItems = [
    t.qual1,
    t.qual2,
    t.qual3,
    t.qual4
  ];

  const noItems = [
    t.notQual1,
    t.notQual2,
    t.notQual3
  ];

  return (
    <section 
      className="bg-muted"
      style={{ 
        paddingTop: 'var(--spacing-4xl)', 
        paddingBottom: 'var(--spacing-5xl)' 
      }}
      aria-labelledby="qualification-heading"
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
            id="qualification-heading"
            className="text-foreground"
            style={{ 
              marginBottom: 'var(--spacing-lg)',
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)'
            }}
          >
            {t.thisIsForYou}
          </h2>
        </motion.div>
        
        <div 
          className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto"
          style={{ marginBottom: 'var(--spacing-3xl)' }}
        >
          {/* Yes List */}
          <motion.div 
            className="rounded-xl bg-background"
            style={{ 
              padding: 'var(--spacing-2xl)',
              border: '2px solid var(--brand-600)'
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="flex items-center"
              style={{ 
                marginBottom: 'var(--spacing-lg)',
                gap: 'var(--spacing-sm)'
              }}
            >
              <div 
                className="flex items-center justify-center rounded-full"
                style={{ 
                  height: '2.5rem',
                  width: '2.5rem',
                  backgroundColor: 'var(--brand-50)'
                }}
              >
                <CheckCircle2 style={{ height: '1.5rem', width: '1.5rem', color: 'var(--brand-600)' }} />
              </div>
              <h3 className="text-foreground" style={{ fontSize: '1.25rem' }}>
                {t.perfectFit}
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {yesItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  style={{ gap: 'var(--spacing-sm)' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CheckCircle2 
                    className="flex-shrink-0" 
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
          
          {/* No List */}
          <motion.div 
            className="rounded-xl border bg-background"
            style={{ padding: 'var(--spacing-2xl)' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="flex items-center"
              style={{ 
                marginBottom: 'var(--spacing-lg)',
                gap: 'var(--spacing-sm)'
              }}
            >
              <div 
                className="flex items-center justify-center rounded-full bg-muted"
                style={{ 
                  height: '2.5rem',
                  width: '2.5rem'
                }}
              >
                <X className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-foreground" style={{ fontSize: '1.25rem' }}>
                {t.notFit}
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {noItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  style={{ gap: 'var(--spacing-sm)' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <X 
                    className="flex-shrink-0 text-muted-foreground" 
                    style={{ 
                      height: '1.25rem', 
                      width: '1.25rem'
                    }} 
                  />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
            {t.qualificationNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

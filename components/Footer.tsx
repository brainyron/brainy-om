"use client";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer
      className="border-t bg-background"
      style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-[64px]">
        <div className="max-w-[1200px] mx-auto">
          <div
            className="grid gap-12 lg:grid-cols-3"
            style={{ gap: 'var(--spacing-3xl)' }}
          >
            {/* Brand */}
            <div>
              <div
                className="relative"
                style={{
                  width: 'auto',
                  height: '32px',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                {/* Footer is on light bg.background — use dark logo. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/brainy-dark.svg"
                  alt="Brainy"
                  width={120}
                  height={32}
                  style={{ height: '32px', width: 'auto', display: 'block' }}
                />
              </div>
              <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                {t.footerTagline}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="text-foreground"
                style={{ marginBottom: 'var(--spacing-md)' }}
              >
                {t.quickLinks}
              </h3>
              <ul
                className="text-muted-foreground"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-sm)',
                  fontSize: '0.875rem'
                }}
              >
                <li>
                  <button
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                    className="transition-colors duration-200"
                    style={{
                      color: 'var(--muted-foreground)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-600)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}
                    aria-label="Navigate to How it works section"
                  >
                    {t.howItWorks}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                    className="transition-colors duration-200"
                    style={{
                      color: 'var(--muted-foreground)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-600)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}
                    aria-label="Navigate to Book assessment section"
                  >
                    {t.bookAssessment}
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="text-foreground"
                style={{ marginBottom: 'var(--spacing-md)' }}
              >
                {t.contact}
              </h3>
              <ul
                className="text-muted-foreground"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-sm)',
                  fontSize: '0.875rem'
                }}
              >
                <li>Muscat, Oman</li>
                <li>hello@brainy.om</li>
              </ul>
            </div>
          </div>

          <div
            className="border-t text-center text-muted-foreground"
            style={{
              marginTop: 'var(--spacing-3xl)',
              paddingTop: 'var(--spacing-2xl)',
              fontSize: '0.875rem'
            }}
          >
            <p>© {new Date().getFullYear()} {t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

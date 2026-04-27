import type { ReactNode } from "react";

// Override the parent catey layout for the iframe preview (no header/footer).
// The CateyProviders from the parent still wrap (LanguageProvider + ThemeProvider),
// but the preview is locked to English regardless of the parent's language toggle.
export default function CateyPreviewLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Hide native scrollbars so the phone-frame iframe looks like a real device */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html, body {
              scrollbar-width: none;
              -ms-overflow-style: none;
              -webkit-overflow-scrolling: touch;
            }
            html::-webkit-scrollbar,
            body::-webkit-scrollbar {
              display: none;
              width: 0;
              height: 0;
            }
          `,
        }}
      />
      {children}
    </>
  );
}

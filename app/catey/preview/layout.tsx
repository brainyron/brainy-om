import type { ReactNode } from "react";
import { Instrument_Serif, Inter } from "next/font/google";

// Display serif for editorial headlines on the iframed shop preview.
// Loaded here (not in the parent catey layout) so the proposal page itself
// is not bloated by an extra font request.
const displaySerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Tight, modern grotesque for body and UI within the preview only.
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Override the parent catey layout for the iframe preview (no header/footer).
// The CateyProviders from the parent still wrap (LanguageProvider + ThemeProvider),
// but the preview is fully locked to English + LTR regardless of parent state.
//
// CSS direction inherits down the DOM. Even though the inner page sets dir="ltr",
// any ancestor with dir="rtl" can flip individual layout primitives (flex order,
// margin-inline, text-align). We belt-and-braces it here:
//   1. CateyShell short-circuits dir/lang for /catey/preview/* (see CateyShell.tsx).
//   2. We inject a global stylesheet that forces direction: ltr on every element
//      below this layout via :where(...) so it can't lose specificity wars.
export default function CateyPreviewLayout({ children }: { children: ReactNode }) {
  return (
    <div
      lang="en"
      dir="ltr"
      className={`${displaySerif.variable} ${sans.variable}`}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html, body {
              direction: ltr !important;
              scrollbar-width: none;
              -ms-overflow-style: none;
              -webkit-overflow-scrolling: touch;
              background: #FFF8F0;
            }
            html::-webkit-scrollbar,
            body::-webkit-scrollbar {
              display: none;
              width: 0;
              height: 0;
            }
            /* Catch any RTL leakage from the parent shell wrapper */
            [dir="rtl"] .catey-preview-root,
            .catey-preview-root,
            .catey-preview-root * {
              direction: ltr;
              unicode-bidi: isolate;
            }
            .catey-preview-root {
              text-align: left;
            }
          `,
        }}
      />
      {children}
    </div>
  );
}

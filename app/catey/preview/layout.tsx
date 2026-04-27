import type { ReactNode } from "react";

// Override the parent catey layout for the iframe preview (no header/footer).
// The CateyProviders from the parent still wrap (LanguageProvider + ThemeProvider).
export default function CateyPreviewLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

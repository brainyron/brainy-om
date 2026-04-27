import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CateyProviders } from "./_components/CateyProviders";
import { CateyShell } from "./_components/CateyShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://catey.brainy.om"),
  title: "اقتراح من Brainy لـ Catey",
  description: "A proposal from Brainy to Catey.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CateyLayout({ children }: { children: ReactNode }) {
  return (
    <CateyProviders>
      <CateyShell>{children}</CateyShell>
    </CateyProviders>
  );
}

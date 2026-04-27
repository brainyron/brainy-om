import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import type { ReactNode } from "react";

export default function BrainyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

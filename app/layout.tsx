import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../components/Providers";

export const metadata: Metadata = {
  title: "Brainy.om",
  description: "Brainy.om",
  icons: {
    icon: "/assets/e25afeb5786e2133ce0feba5470c93707ab076f9.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://brainy.om"),
  title: "Brainy Oman, Digital growth partner for Omani enterprises",
  description:
    "Brainy is a digital growth partner helping Omani banks, telecoms, and government platforms ship modern user experiences. Built for scale.",
  keywords: [
    "digital design Oman",
    "UX UI Oman",
    "banking design Oman",
    "design agency Muscat",
    "Brainy Oman",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://brainy.om",
    siteName: "Brainy Oman",
    title: "Brainy Oman, Digital growth partner for Omani enterprises",
    description:
      "Brainy is a digital growth partner helping Omani banks, telecoms, and government platforms ship modern user experiences. Built for scale.",
    locale: "en_OM",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 628,
        alt: "Brainy Oman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brainy Oman, Digital growth partner for Omani enterprises",
    description:
      "Brainy is a digital growth partner helping Omani banks, telecoms, and government platforms ship modern user experiences. Built for scale.",
    images: ["/og-image.png"],
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

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { I18nServerProvider } from "@/lib/i18n/I18nServerProvider";

import JsonLd from "@/components/JsonLd";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greenyardglobal.netlify.app"),
  title: "GreenYard | Premium Packaging Solutions",
  description:
    "Ningbo GreenYard Sprayer Co., Ltd. — precision sprayers, pumps, droppers, and cosmetic packaging with flexible MOQ, fast sampling, and fully recyclable pathways. Serving 200+ brand partners across 40+ countries.",
  alternates: {
    canonical: "https://greenyardglobal.netlify.app",
  },
  keywords: [
    "sprayer manufacturer",
    "cosmetic packaging",
    "fine mist sprayer",
    "lotion pump",
    "trigger sprayer",
    "recyclable pump",
    "mono-material packaging",
    "B2B packaging supplier",
    "Ningbo GreenYard",
  ],
  openGraph: {
    title: "GreenYard | Premium Packaging Solutions",
    description:
      "Flexible MOQ · Fast Sampling · Fully Recyclable Pathways · Global Compliance",
    siteName: "GreenYard",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://greenyardglobal.netlify.app/images/Minimalist%20Luxury%20Beauty%20Packaging%20Banner.png",
        width: 1920,
        height: 1080,
        alt: "GreenYard Premium Packaging Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.className} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F4EF] text-[#0D0D0D] antialiased">
        <I18nServerProvider>
          <a
            href="#main-content"
            className="skip-link"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />

        </I18nServerProvider>
        <JsonLd />
      </body>
    </html>
  );
}

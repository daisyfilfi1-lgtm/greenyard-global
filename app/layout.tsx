import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreenYard | Premium Packaging Solutions — One Earth. Precision Engineering.",
  description:
    "Ningbo GreenYard Sprayer Co., Ltd. — precision sprayers, pumps, droppers, and cosmetic packaging with flexible MOQ, fast sampling, and fully recyclable pathways. Serving 200+ brand partners across 40+ countries.",
  openGraph: {
    title: "GreenYard | Premium Packaging Solutions",
    description:
      "Flexible MOQ · Fast Sampling · Fully Recyclable Pathways · Global Compliance",
    siteName: "GreenYard",
    type: "website",
    locale: "en_US",
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
      className={`${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F5F0] text-[#0D0D0D] antialiased">
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
      </body>
    </html>
  );
}

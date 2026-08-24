import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { SearchProvider } from "@/components/search";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Verified Private Rooms for Rent for 30+ Nights | Zoiko Rooms",
  description:
    "Find and list verified private rooms for stays of 30 nights or longer. No broker fees, flexible terms, built-in safety.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-brand-cream font-sans text-brand-ink">
        <LanguageProvider>
          <SearchProvider>
            <SiteChrome>{children}</SiteChrome>
          </SearchProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

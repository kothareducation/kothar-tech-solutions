import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kothar Tech Solutions - Enterprise Software Development",
  description:
    "Custom software development, web & mobile applications, ERP systems, CRM platforms, and business intelligence dashboards for modern businesses.",
  generator: "v0.app",
  icons: {
    icon: "/kothar-tech-logo-only-nobg.png",
    shortcut: "/kothar-tech-logo-only-nobg.png",
    apple: "/kothar-tech-logo-only-nobg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}

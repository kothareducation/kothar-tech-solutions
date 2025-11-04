import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Kothar Tech Solutions - Enterprise Software Development & IT Services",
  description:
    "Leading software development company specializing in custom ERP systems, CRM platforms, web & mobile applications, business intelligence dashboards, and IT security services in Australia.",
  keywords: [
    "software development",
    "enterprise software",
    "ERP systems",
    "CRM platforms",
    "web development",
    "mobile app development",
    "business intelligence",
    "IT security",
    "performance testing",
    "cloud infrastructure",
    "custom software development",
    "CAM cricket app",
    "Kothar Dashboard",
    "Australia software company",
    "Kotharedu",
  ],
  authors: [{ name: "Kothar Tech Solutions" }],
  creator: "Kothar Tech Solutions",
  publisher: "Kothar Tech Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/kothar-tech-logo-only-nobg.png",
    shortcut: "/kothar-tech-logo-only-nobg.png",
    apple: "/kothar-tech-logo-only-nobg.png",
  },
  metadataBase: new URL("https://kotharedu.com"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kothar Tech Solutions - Enterprise Software Development",
    description:
      "Custom software development, web & mobile applications, ERP systems, CRM platforms, and business intelligence dashboards for modern businesses.",
    url: "https://kotharedu.com",
    siteName: "Kothar Tech Solutions",
    images: [
      {
        url: "/Kothar_tech-nobg.png",
        width: 1200,
        height: 630,
        alt: "Kothar Tech Solutions Logo",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kothar Tech Solutions - Enterprise Software Development",
    description:
      "Custom software development, web & mobile applications, ERP systems, and business intelligence dashboards.",
    images: ["/Kothar_tech-nobg.png"],
    creator: "@kotharedu", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kothar Tech Solutions",
              alternateName: "Kothar Tech",
              url: "https://kotharedu.com",
              logo: "https://kotharedu.com/Kothar_tech-nobg.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+61-430-082-553",
                contactType: "Customer Service",
                areaServed: "AU",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kotharedu",
                addressCountry: "AU",
              },
              sameAs: [
                // Add your social media profiles
                // "https://www.facebook.com/kotharedu",
                // "https://twitter.com/kotharedu",
                // "https://www.linkedin.com/company/kotharedu",
              ],
            }),
          }}
        />
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://kotharedu.com",
              name: "Kothar Tech Solutions",
              image: "https://kotharedu.com/Kothar_tech-nobg.png",
              telephone: "+61-430-082-553",
              email: "info@kotharedu.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kotharedu",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-33.878585",
                longitude: "151.205128",
              },
              url: "https://kotharedu.com",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
        {/* Structured Data for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Software Development",
              provider: {
                "@type": "Organization",
                name: "Kothar Tech Solutions",
              },
              areaServed: {
                "@type": "Country",
                name: "Australia",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Software Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Enterprise Software Development",
                      description:
                        "Custom ERP systems, CRM platforms, and business automation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web & Mobile Applications",
                      description:
                        "Professional websites, e-commerce platforms, and mobile apps",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business Intelligence Dashboards",
                      description:
                        "Interactive dashboards and analytics platforms",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}

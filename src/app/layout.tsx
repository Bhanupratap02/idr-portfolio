/** @format */

import ClientLogos from "@/components/ClientLogos";
import "./globals.css";
import { clientLogos, clientLogosBottom } from "@/data/clientLogos";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://idrtechnologysolutions.com"),
   robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "k3Cr-gikSQ5GYEWNg55XYZ8GzkZlARdFm9vTMvQtv30",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">

        {/* ================= GOOGLE TAG MANAGER ================= */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W9ZXL4DV');
          `}
        </Script>

        {/* ================= GOOGLE ANALYTICS ================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R4K6EH2CR0"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R4K6EH2CR0');
          `}
        </Script>

        {/* ================= GTM NOSCRIPT ================= */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9ZXL4DV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ================= WEBSITE SCHEMA ================= */}
        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "IDR Technology Solutions",
            "url": "https://idrtechnologysolutions.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://idrtechnologysolutions.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>

        

        {/* ================= LOCAL BUSINESS SCHEMA ================= */}
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "IDR Technology Solutions",
            "url": "https://idrtechnologysolutions.com/",
            "logo": "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Flogo.png",
            "description": "IDR Technologies provides access control, surveillance, intercom, cabling, AV, and IT solutions for commercial properties.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "91 Bay 31 St",
              "addressLocality": "Brooklyn",
              "addressRegion": "NY",
              "postalCode": "11214",
              "addressCountry": "US"
            },
            "telephone": "+1-718-594-7865",
            "email": "sales@idrtechnologysolutions.com",
            "areaServed": [
              {
                "@type": "AdministrativeArea",
                "name": "New York"
              },
              {
                "@type": "AdministrativeArea",
                "name": "New Jersey"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Florida"
              }
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-718-594-7865",
                "contactType": "sales",
                "email": "sales@idrtechnologysolutions.com",
                "areaServed": "NY"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+1-732-217-3550",
                "contactType": "sales",
                "areaServed": "NJ"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+1-813-685-4022",
                "contactType": "sales",
                "areaServed": "FL"
              },
              {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "support@idrtechnologysolutions.com"
              }
            ],
            "sameAs": [
              "https://www.youtube.com/@Idrtechnologysolutions",
              "https://www.linkedin.com/company/idr-technology-solutions",
              "https://www.facebook.com/profile.php?id=100057472869428",
              "https://www.tiktok.com/@idrtechnologysolu?_t=ZP-8y9yjPO8tvL&_r=1",
              "https://www.instagram.com/idrtechnologysolutions"
            ]
          })}
        </Script>

        <div className="min-h-screen bg-[#FFFFF]">
          <Navbar2 />
          <main className="w-screen">{children}</main>

          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-primary text-center mb-12 sm:mb-12 lg:mb-16 2xl:mb-18 mt-12 font-bold">
            Our Clients
          </h2>

          <ClientLogos logos={clientLogos} direction="right" />
          <ClientLogos logos={clientLogosBottom} direction="left" />

          <Footer />
          <FloatingContactButtons />
        </div>
      </body>
    </html>
  );
}

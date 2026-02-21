/** @format */

import ClientLogos from "@/components/ClientLogos";
import "./globals.css";
import { clientLogos, clientLogosBottom } from "@/data/clientLogos";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://idrtechnologysolutions.com"),
   robots: {
    index: true,
    follow: true,
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

        <div className="min-h-screen bg-[#FFFFF]">
          <Navbar2 />
          <main className="w-screen">{children}</main>

          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-primary text-center mb-12 sm:mb-12 lg:mb-16 2xl:mb-18 mt-12 font-bold">
            Our Clients
          </h2>

          <ClientLogos logos={clientLogos} direction="right" />
          <ClientLogos logos={clientLogosBottom} direction="left" />

          <Footer />
        </div>
      </body>
    </html>
  );
}

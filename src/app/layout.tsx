/** @format */

// app/layout.tsx

import ClientLogos from "@/components/ClientLogos";
import "./globals.css";
import { clientLogos, clientLogosBottom } from "@/data/clientLogos";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ================= GOOGLE TAG MANAGER ================= */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W9ZXL4DV');
            `,
          }}
        />

        {/* ================= GOOGLE ANALYTICS 4 ================= */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R4K6EH2CR0"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R4K6EH2CR0');
            `,
          }}
        />

        {/* ============ GOOGLE SEARCH CONSOLE VERIFICATION ============ */}
        <meta
          name="google-site-verification"
          content="k3Cr-gikSQ5GYEWNg55XYZ8GzkZlARdFm9vTMvQtv30"
        />
      </head>

      <body className="overflow-x-hidden">
        {/* ============== GTM NOSCRIPT (BODY) ============== */}
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

          {/* Partner Logos Bars Before Footer */}
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

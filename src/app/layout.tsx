/** @format */

// app/layout.tsx

import ClientLogos from "@/components/ClientLogos";
import "./globals.css";
import partner8 from "@/assets/partners/partner_8.png";
import partner9 from "@/assets/partners/partner_9.png";
import partner10 from "@/assets/partners/partner_10.png";
import partner11 from "@/assets/partners/partner_11.png";
import partner12 from "@/assets/partners/partner_12.png";
import partner13 from "@/assets/partners/partner_13.png";
import {clientLogos, clientLogosBottom} from "@/data/clientLogos"



import Footer from "@/components/Footer";

import Navbar2 from "@/components/Navbar2";

const footerPartnerImages = [
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
];
const whiteTextLogos = [partner8, partner9, partner10, partner11, partner12];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <div className="min-h-screen bg-[#FFFFF]">
          <Navbar2 />
          <main className=" w-screen">{children}</main>
          {/* Partner Logos Bars Before Footer */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl   text-primary text-center mb-12 sm:mb-12 lg:mb-16 2xl:mb-18 mt-12 font-bold">
            Our Clients
          </h2>
          <ClientLogos
            logos={clientLogos}
            whiteTextLogos={clientLogos}
            direction="right"
          />
          <ClientLogos
            logos={clientLogosBottom}
            whiteTextLogos={clientLogosBottom}
            direction="left"
          />
          <Footer />
        </div>
      </body>
    </html>
  );
}

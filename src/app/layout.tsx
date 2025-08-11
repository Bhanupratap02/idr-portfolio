/** @format */

// app/layout.tsx

import PartnerLogos from "@/components/PartnerLogos";
import "./globals.css";
import partner8 from "@/assets/partners/partner_8.png";
import partner9 from "@/assets/partners/partner_9.png";
import partner10 from "@/assets/partners/partner_10.png";
import partner11 from "@/assets/partners/partner_11.png";
import partner12 from "@/assets/partners/partner_12.png";
import partner13 from "@/assets/partners/partner_13.png";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
          <Navbar />
          <main className=" w-screen">{children}</main>
          {/* Partner Logos Bars Before Footer */}
          <PartnerLogos
            logos={footerPartnerImages}
            whiteTextLogos={whiteTextLogos}
            direction="right"
          />
          <PartnerLogos
            logos={footerPartnerImages}
            whiteTextLogos={whiteTextLogos}
            direction="left"
          />
          <Footer />
        </div>
      </body>
    </html>
  );
}

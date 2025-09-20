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
import AdvanceLocal from "@/assets/client_logos/Advance Local.jpeg";
import Asland from "@/assets/client_logos/Asland.jpg";
import AssociationAdvisors from "@/assets/client_logos/Association Advisors.jpeg";
import BurnsEngineering from "@/assets/client_logos/Burns Engineering.png";
import CaldwellUniversity from "@/assets/client_logos/Caldwell University.webp";
import Douglas_Elliman_Logo from "@/assets/client_logos/Douglas_Elliman_Logo.jpg";
import FLAG_Logo from "@/assets/client_logos/FLAG_Logo.png";
import Fairstead_Logo from "@/assets/client_logos/Fairstead_Logo.jpg";
import HMA_Full_Centered_Blue from "@/assets/client_logos/HMA_Full_Centered_Blue1-1200x600.webp";
import MTF_logo from "@/assets/client_logos/MTF logo.png";
import Mountain_Development_Logo from "@/assets/client_logos/Mountain Development Logo.jpg";
import NMC_Management from "@/assets/client_logos/NMC Management.png";
import Notion_logo from "@/assets/client_logos/Advance Local.jpeg";
import OppenheimerFunds from "@/assets/client_logos/OppenheimerFunds.jpg";
import Phipps_Houses from "@/assets/client_logos/Phipps Houses.jpg";
import Qunol_logo_black_red from "@/assets/client_logos/Qunol_logo_black-red.avif";
import School_Bonnie_Brae_School_logo from "@/assets/client_logos/School - Bonnie Brae School logo.jpg";
import School_CQA_logo_new from "@/assets/client_logos/School - CQA logo new.png";
import School_PPA_logo from "@/assets/client_logos/School - PPA logo.png";
import School_Salesian_High_School_Logo from "@/assets/client_logos/School - Salesian High School Logo.png";
import Schweiger_Dermatology_Group_Logo from "@/assets/client_logos/Schweiger_Dermatology_Group_Logo.jpg";
import Sentinel_Logo from "@/assets/client_logos/Sentinel Logo.png";
import Upway_Logo from "@/assets/client_logos/Upway Logo.png";
import Vanta from "@/assets/client_logos/Vanta.png";
import Verition from "@/assets/client_logos/Verition logo.png";
import ianthus_capital_management_logo from "@/assets/client_logos/ianthus_capital_management_logo.jpeg";
import openx_logo from "@/assets/client_logos/openx-logo.png";
import robin_hood_foundation_logo from "@/assets/client_logos/robin-hood-foundation-logo.png";
import settlement_housing_fund_inc__logo from "@/assets/client_logos/settlement_housing_fund_inc__logo.jpeg";
import settlementhe_lovett_group from "@/assets/client_logos/the-lovett-group-1.jpg";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
           <h2 className="text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-medium text-[#052557] text-center mb-12 sm:mb-12 lg:mb-16 2xl:mb-18 mt-12">
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

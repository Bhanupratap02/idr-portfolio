/** @format */


import Hero from "@/components/Hero";
import EverythingYouNeed from "@/components/EverythingYouNeed";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import PartnerLogos  from "@/components/PartnerLogos";
import partner1 from "@/assets/partners/partner_1.png";
import partner2 from "@/assets/partners/partner_2.png";
import partner3 from "@/assets/partners/partner_3.png";
import partner4 from "@/assets/partners/partner_4.png";
import partner5 from "@/assets/partners/partner_5.png";
import partner6 from "@/assets/partners/partner_6.png";
import partner7 from "@/assets/partners/partner_7.png";
import client8 from "@/assets/partners/partner_15.svg"
import client9 from "@/assets/clients/client_9.png";
import client10 from "@/assets/clients/client_10.png";
import client11 from "@/assets/clients/client_11.png";
import client12 from "@/assets/partners/partner_14.png";
import client13 from "@/assets/clients/client_13.png";
import client14 from "@/assets/partners/partner_15.png";


const topPartnerImages = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
];
  const whiteTextLogos = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    client8,
    client9,
    // client10,
    // client11,
    client12,
    // client13,
    client14,
  ];
export default function Index() {

  return (
    <div className="">


      {/* Hero Section */}
      <Hero />

      {/* Partner Logos Strip */}

      <PartnerLogos logos={topPartnerImages} whiteTextLogos={whiteTextLogos} direction="left" />
      {/* Everything You Need Section */}
      <EverythingYouNeed />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />


      
    </div>
  );
}

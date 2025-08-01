/** @format */


import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EverythingYouNeed from "@/components/EverythingYouNeed";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import PartnerLogos  from "@/components/PartnerLogos";
import Footer from "@/components/Footer";
import partner1 from "@/assets/partners/partner_1.png";
import partner2 from "@/assets/partners/partner_2.png";
import partner3 from "@/assets/partners/partner_3.png";
import partner4 from "@/assets/partners/partner_4.png";
import partner5 from "@/assets/partners/partner_5.png";
import partner6 from "@/assets/partners/partner_6.png";
import partner7 from "@/assets/partners/partner_7.png";
import partner8 from "@/assets/partners/partner_8.png";
import partner9 from "@/assets/partners/partner_9.png";
import partner10 from "@/assets/partners/partner_10.png";
import partner11 from "@/assets/partners/partner_11.png";
import partner12 from "@/assets/partners/partner_12.png";
import partner13 from "@/assets/partners/partner_13.png";

const footerPartnerImages = [
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  // partner13,
];
const topPartnerImages = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
];
export default function Index() {

  return (
    <div className="min-h-screen bg-[#FFFFF] ">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Partner Logos Strip */}

      <PartnerLogos logos={topPartnerImages} />
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

      {/* Footer */}

      {/* Partner Logos Bars Before Footer */}
      <PartnerLogos logos={footerPartnerImages} />
      <PartnerLogos logos={footerPartnerImages} />
      {/* Footer */}
      <Footer />
      
    </div>
  );
}

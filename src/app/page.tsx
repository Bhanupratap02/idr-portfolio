/** @format */


import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import ContactSection from "@/components/ContactSection";
import PartnerLogos  from "@/components/PartnerLogos";
const partner1 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_1.png";
const partner2 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_2.png";
const partner3 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_3.png";
const partner4 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_4.png";
const partner5 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_5.png";
const partner6 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_6.png";
const partner7 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_7.png";
const client8 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_15.svg";
const client9 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fclients%2Fclient_9.png";
const client10 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fclients%2Fclient_10.png";
const client11 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fclients%2Fclient_11.png";
const client12 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_14.png";
const client13 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fclients%2Fclient_13.png";
const client14 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_15.png";
import Finance from "@/components/Finance";
import IdrAdvantage from "@/components/IdrAdvantages";
import WhyChoose from "@/components/WhyChoose";
import WhatWeServe from "@/components/WhatWeServe";




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
      {/* <EverythingYouNeed /> */}

      <IdrAdvantage />


      {/* What We Do Section */}
      <WhatWeDo />
      <WhatWeServe />

      {/* Why Choose Us Section */}
      {/* <WhyChooseUs /> */}
      <WhyChoose/>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Case Studies Section */}
      <CaseStudies />


      {/* FAQ Section */}
      {/* <FAQSection /> */}

      {/* Contact Section */}
      <ContactSection />
      {/* Finance Section */}
      <Finance />


      
    </div>
  );
}

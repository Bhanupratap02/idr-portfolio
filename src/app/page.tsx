/** @format */

"use client";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar2";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import EverythingYouNeed from "@/components/EverythingYouNeed";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export default function Index() {

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Partner Logos Strip */}
      <Partners />


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
      <FAQSection/>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}

      {/* Partner Logos Bars Before Footer */}
      {/* <div className="w-full bg-[#052557] py-4 overflow-hidden">
        <div className="flex animate-scroll space-x-14">
          First logo bar
          <div className="flex items-center space-x-14 flex-shrink-0">
            <div className="text-white text-sm whitespace-nowrap">
              HMA Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Fairstead Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Aslan Partners Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Context7 Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Notion Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Rhombus Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Lencore Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Verkada Partner Logo
            </div>
          </div>
          Duplicate set for seamless loop
          <div className="flex items-center space-x-14 flex-shrink-0">
            <div className="text-white text-sm whitespace-nowrap">
              HMA Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Fairstead Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Aslan Partners Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Context7 Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Notion Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Rhombus Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Lencore Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Verkada Partner Logo
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="w-full bg-[#052557] py-4 overflow-hidden">
        <div className="flex animate-scroll space-x-14">
          Second logo bar
          <div className="flex items-center space-x-14 flex-shrink-0">
            <div className="text-white text-sm whitespace-nowrap">
              Lencore Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Verkada Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              HMA Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Fairstead Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Aslan Partners Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Context7 Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Notion Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Rhombus Partner Logo
            </div>
          </div>
          Duplicate set for seamless loop
          <div className="flex items-center space-x-14 flex-shrink-0">
            <div className="text-white text-sm whitespace-nowrap">
              Lencore Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Verkada Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              HMA Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Fairstead Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Aslan Partners Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Context7 Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Notion Partner Logo
            </div>
            <div className="text-white text-sm whitespace-nowrap">
              Rhombus Partner Logo
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      <Footer />
    
    </div>
  );
}

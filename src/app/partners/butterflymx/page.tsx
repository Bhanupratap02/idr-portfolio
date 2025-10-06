"use client";

import Image from "next/image";
import {
  Network,
  Wifi,
  RadioTower,
  ShieldCheck,
  Camera,
  Layers,
  Cloud,
  Wrench,
  CheckCircle,
} from "lucide-react";

import heroImg from "@/assets/butterfly/butterfly.png";
import imgImg from "@/assets/butterfly/butterfly3.png";
import imgImg1 from "@/assets/butterfly/butterfly2.png";
import imgImg2 from "@/assets/butterfly/butterfly3.png";

function HeroSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8 xl:space-y-9">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-800 leading-tight tracking-tight">
                ButterflyMX Spotlight Smart Video Intercoms
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed">
                For Apartments, Offices & Mixed-Use Spaces | Installed and
                Supported by IDR Technology Solutions
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 lg:px-8 xl:px-10 py-3 sm:py-3.5 lg:py-4 xl:py-5 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Request a Demo
              </button>
              <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-7 lg:px-8 xl:px-10 py-3 sm:py-3.5 lg:py-4 xl:py-5 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-colors duration-200">
                See Product in Action
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImg}
                alt="ButterflyMX Video Intercom"
                className="w-full h-auto object-contain"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CiscoSection() {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imgImg1}
                alt="Cisco Network Equipment"
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-7 lg:space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-full text-xs sm:text-sm lg:text-base font-semibold">
                Cisco Select Certified Partner
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-800 leading-tight tracking-tight">
              Your Cisco & Meraki Integration Experts
            </h2>

            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed">
                At IDR, we&apos;re proud to be your trusted partner for Cisco and
                Meraki systems — delivering powerful cloud-managed
                infrastructure and reliable hardware you can count on.
              </p>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed">
                We sell, design, install, and configure full-stack Cisco and
                Meraki solutions across commercial, residential, and multi-site
                environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkingSolutionsSection() {
  const services = [
    {
      icon: Network,
      title: "Switches",
      desc: "Layer 2 & 3 switching, VLANs, port security, PoE, and more for reliable network infrastructure.",
    },
    {
      icon: Wifi,
      title: "Wireless Access Points",
      desc: "Meraki Wi-Fi optimized for range, density, and security with cloud management.",
    },
    {
      icon: RadioTower,
      title: "Wireless Bridges",
      desc: "Cisco wireless bridges for outdoor or multi-building coverage with reliable connectivity.",
    },
    {
      icon: ShieldCheck,
      title: "Firewalls & Security",
      desc: "Cisco Meraki MX firewalls, threat protection, VPNs, and advanced security features.",
    },
    {
      icon: Camera,
      title: "Surveillance Cameras",
      desc: "Cloud-recording Meraki smart cams with motion search and intelligent monitoring.",
    },
    {
      icon: Layers,
      title: "Smart Integrations",
      desc: "Access control & video tie-in, audit-ready solutions for complete building management.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1600px]">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            Complete Networking & Security Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive end-to-end solutions for all your networking and
            security needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 xl:gap-10">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-gray-50 rounded-xl p-6 sm:p-7 lg:p-8 xl:p-10 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              <div className="w-12 h-12 mb-5 sm:mb-6 lg:mb-7 flex items-center justify-center">
                <Icon className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                {title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMerakiSection() {
  const features = [
    {
      title: "Centralized cloud dashboard",
      desc: "Manage your entire network from a single, intuitive interface.",
    },
    {
      title: "Easy remote management",
      desc: "Configure and troubleshoot from anywhere without being on-site.",
    },
    {
      title: "Scalable for growing businesses",
      desc: "Easily add devices as your needs expand without complex configurations.",
    },
    {
      title: "Built-in security & compliance tools",
      desc: "Enterprise-grade security features to protect your network and data.",
    },
    {
      title: "Seamless API integrations",
      desc: "Connect with guest Wi-Fi, access control, and building systems.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          
          <div className="space-y-6 sm:space-y-7 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-800 leading-tight">
              Why We Recommend Cisco & Meraki
            </h2>

            <div className="space-y-5 sm:space-y-6 lg:space-y-7">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 sm:mb-1.5 text-sm sm:text-base lg:text-lg xl:text-xl">
                      {f.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imgImg1}
                alt="Meraki Dashboard"
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const bulletPoints = [
    "White-glove service from consultation to implementation",
    "Detailed documentation of your entire network",
    "Real-time support when you need it most",
    "Proactive monitoring and maintenance",
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1600px]">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Where Eagle Eye Excels
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600">
            What sets us apart from other integration partners
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 xl:gap-10">
          <div className="bg-gray-50 rounded-xl p-6 sm:p-7 lg:p-8 xl:p-10 shadow-sm">
            <div className="w-12 h-12 mb-5 sm:mb-6 flex items-center justify-center">
              <Wrench className="w-10 h-10 sm:w-11 sm:h-11 text-blue-600" strokeWidth={1.5} />
            </div>

            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">
              More Than Just Installers
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-5 sm:mb-6">
              We&apos;re more than just installers — we&apos;re your low-voltage partner
              committed to your long-term success.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm sm:text-base lg:text-lg text-gray-600">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 sm:p-7 lg:p-8 xl:p-10 shadow-sm">
            <div className="w-12 h-12 mb-5 sm:mb-6 flex items-center justify-center">
              <Cloud className="w-10 h-10 sm:w-11 sm:h-11 text-blue-600" strokeWidth={1.5} />
            </div>

            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">
              Certified Expertise & Proven Track Record
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-5 sm:mb-6">
              Our team consists of in-house CCNA-certified experts with
              extensive experience.
            </p>

            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={imgImg}
                alt="Certification Badge"
                className="w-full h-full object-contain"
                sizes="80px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className="w-full bg-gray-800 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1200px]">
        <div className="text-center space-y-6 sm:space-y-7 lg:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-white">
            Ready to Upgrade Your Infrastructure?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let our experts help you design and implement the perfect Cisco &
            Meraki solution for your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 lg:px-8 xl:px-10 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg rounded-lg font-semibold transition-colors">
              Get a Free Consultation
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-7 lg:px-8 xl:px-10 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors">
              Talk to Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ButterflyMX() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CiscoSection />
      <NetworkingSolutionsSection />
      <WhyMerakiSection />
      <ExpertiseSection />
      <CallToActionSection />
    </div>
  );
}
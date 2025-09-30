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
    <section className="w-full min-h-[100vh] bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 h-full min-h-[100vh] flex items-center">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center min-h-[80vh] py-12 lg:py-16">
            
            {/* ✅ Left Content */}
            <div className="order-2 lg:order-1 space-y-8 lg:space-y-12">
              <div className="space-y-6 lg:space-y-8">
                <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-5xl 2xl:text-5xl font-semibold text-gray-800 leading-[1.1] tracking-tight">
                  ButterflyMX Spotlight Smart Video Intercoms
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 leading-relaxed font-light">
                  For Apartments, Offices & Mixed-Use Spaces | Installed and
                  Supported by IDR Technology Solutions
                </p>
              </div>

              {/* ✅ Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Request a Demo
                </button>
                <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold text-lg transition-colors duration-200">
                  See Product in Action
                </button>
              </div>
            </div>

            {/* ✅ Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={heroImg}
                  alt="ButterflyMX Video Intercom"
                  className="w-full h-auto object-contain" // 👈 No zoom/crop
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


function CiscoSection() {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24 xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
            
            {/* Left Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full">
                <div className="aspect-[4/3] lg:aspect-[3/2] xl:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={imgImg1.src}
                    alt="Cisco Network Equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 space-y-8 lg:space-y-10">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-semibold">
                  Cisco Select Certified Partner
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-800 leading-[1.1] tracking-tight">
                Your Cisco & Meraki Integration Experts
              </h2>

              <div className="space-y-6 lg:space-y-8">
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed font-light">
                  At IDR, we&apos;re proud to be your trusted partner for Cisco and
                  Meraki systems — delivering powerful cloud-managed
                  infrastructure and reliable hardware you can count on.
                </p>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed font-light">
                  We sell, design, install, and configure full-stack Cisco and
                  Meraki solutions across commercial, residential, and multi-site
                  environments.
                </p>
              </div>
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
    <div className="w-full bg-gray-50 py-20 lg:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#2e2e2e] mb-6">
            Complete Networking & Security Solutions
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#626262] max-w-4xl mx-auto">
            Comprehensive end-to-end solutions for all your networking and
            security needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-lg p-8 lg:p-10 shadow-sm min-h-[280px] flex flex-col"
            >
              <div className="w-12 h-10 mb-8 flex items-center justify-center">
                <Icon className="w-11 h-9 text-[#0056B3]" />
              </div>
              <h3 className="text-xl font-medium text-[#2e2e2e] mb-4">
                {title}
              </h3>
              <p className="text-[#626262] leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
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
    <div className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#2e2e2e] leading-tight">
              Why We Recommend Cisco & Meraki
            </h2>

            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#0056B3] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#2e2e2e] mb-1">
                      {f.title}
                    </h4>
                    <p className="text-[#626262]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full h-[350px] sm:h-[400px] lg:h-[479px] rounded-lg overflow-hidden shadow-lg relative">
              <Image
                src={imgImg1}
                alt="Meraki Dashboard"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <div className="w-full bg-gray-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#2e2e2e] mb-4">
            Where Eagle Eye Excels
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#626262]">
            What sets us apart from other integration partners
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm">
            <div className="w-12 h-10 mb-6 flex items-center justify-center">
              <Wrench className="w-11 h-9 text-[#0056B3]" />
            </div>

            <h3 className="text-xl font-medium text-[#2e2e2e] mb-4">
              More Than Just Installers
            </h3>
            <p className="text-[#626262] mb-6">
              We&apos;re more than just installers — we&apos;re your low-voltage partner
              committed to your long-term success.
            </p>

            <div className="space-y-3">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-[#626262]">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm">
            <div className="w-9 h-9 mb-6 flex items-center justify-center">
              <Cloud className="w-9 h-9 text-[#0056B3]" />
            </div>

            <h3 className="text-xl font-medium text-[#2e2e2e] mb-4">
              Certified Expertise & Proven Track Record
            </h3>
            <p className="text-[#626262] mb-6">
              Our team consists of in-house CCNA-certified experts with
              extensive experience.
            </p>

            <div className="w-20 h-20 relative">
              <Image
                src={imgImg}
                alt="Certification Badge"
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CallToActionSection() {
  return (
    <div className="w-full bg-[#2e2e2e] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-white mb-6">
          Ready to Upgrade Your Infrastructure?
        </h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed">
          Let our experts help you design and implement the perfect Cisco &
          Meraki solution for your needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#0056b3] text-white px-8 py-3 rounded-md font-medium">
            Get a Free Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-[#2e2e2e] transition-colors">
            Talk to Our Experts
          </button>
        </div>
      </div>
    </div>
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

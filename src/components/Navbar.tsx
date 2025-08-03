/** @format */

"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import logo from "@/assets/logo_2.png";
import { ChevronDown } from "lucide-react";
import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import accessControl from "@/assets/icons/acces_control.png";
import audioVisual from "@/assets/icons/audio_visual.png";
import conferenceRoom from "@/assets/icons/conference_room.png";
import dataCenter from "@/assets/icons/data_center.png";
import networks from "@/assets/icons/networks.png";
import intercom from "@/assets/icons/intercom.png";
import securityAlarm from "@/assets/icons/security_alarm.png";
import structuredCabling from "@/assets/icons/structured_cabling.png";
import surveillanceCamera from "@/assets/icons/surveillance_camera.png";
const serviceIcons = [
  accessControl,
  audioVisual,
  conferenceRoom,
  dataCenter,
  networks,
  intercom,
  securityAlarm,
  structuredCabling,
  surveillanceCamera,
];
// Menu data
const menuData = {
  services: [
    {
      name: "Access Control Systems",
      url: "/services/access-control",
      icon: accessControl,
    },
    {
      name: "Audio / Visual Systems",
      url: "/services/audio-visual",
      icon: audioVisual,
    },
    {
      name: "Conference Room Solutions",
      url: "/services/conference-room",
      icon: conferenceRoom,
    },
    {
      name: "Data Center Infrastructure",
      url: "/services/data-center",
      icon: dataCenter,
    },
    {
      name: "Networks & IT Infrastructure",
      url: "/services/networks-it",
      icon: networks,
    },
    {
      name: "Multifamily Intercom Systems",
      url: "/services/intercom",
      icon: intercom,
    },
    {
      name: "Security Alarm Systems",
      url: "/services/security-alarm",
      icon: securityAlarm,
    },
    {
      name: "Structured Cabling",
      url: "/services/structured-cabling",
      icon: structuredCabling,
    },
    {
      name: "Surveillance Camera Systems",
      url: "/services/surveillance-camera",
      icon: surveillanceCamera,
    },
  ],
  caseStudies: [
    {
      name: "Burns - A Lasting Partnership",
      url: "/case-studies/burns-partnership",
    },
    {
      name: "Cloud + 4-Wire Intercoms",
      url: "/case-studies/cloud-4-wire-intercoms",
    },
    {
      name: "Custom Audio Deterrent",
      url: "/case-studies/custom-audio-deterrent",
    },
    {
      name: "Eliminated Unauthorized Access",
      url: "/case-studies/eliminated-unauthorized-access",
    },
    {
      name: "Enterprise Cabling Cleanup",
      url: "/case-studies/enterprise-cabling-cleanup",
    },
    {
      name: "Fixing Failed Installs",
      url: "/case-studies/fixing-failed-installs",
    },
    { name: "Kisi Elevator Access", url: "/case-studies/kisi-elevator-access" },
    { name: "Phased Wi-Fi Upgrade", url: "/case-studies/phased-wifi-upgrade" },
    {
      name: "PPA - A Lasting Partnership",
      url: "/case-studies/ppa-partnership",
    },
    {
      name: "Scaling Security w/ Fairstead",
      url: "/case-studies/scaling-security-fairstead",
    },
    {
      name: "Securing Lauderhill Point",
      url: "/case-studies/securing-lauderhill-point",
    },
    {
      name: "Smarter Training Room",
      url: "/case-studies/smarter-training-room",
    },
    {
      name: "Unified Intercom Access",
      url: "/case-studies/unified-intercom-access",
    },
  ],
  partners: [
    { name: "Akuvox", url: "/partners/akuvox" },
    { name: "Alphatouch", url: "/partners/alphatouch" },
    { name: "ButterflyMX", url: "/partners/butterflymx" },
    { name: "Cisco / Meraki", url: "/partners/cisco-meraki" },
    { name: "Eagle Eye", url: "/partners/eagle-eye" },
    { name: "Kisi", url: "/partners/kisi" },
    { name: "Lencore", url: "/partners/lencore" },
    { name: "MVI", url: "/partners/mvi" },
    { name: "Rhombus", url: "/partners/rhombus" },
    { name: "Speco Technologies", url: "/partners/speco-technologies" },
    { name: "Teleportivity", url: "/partners/teleportivity" },
    { name: "Verkada", url: "/partners/verkada" },
    { name: "Vicon", url: "/partners/vicon" },
    { name: "Vivotek / Vortex", url: "/partners/vivotek-vortex" },
    { name: "ZK Teco", url: "/partners/zk-teco" },
  ],
};

// Desktop Mega Menu Grid
const MenuGrid = ({
  items,
  title,
}: {
  items: Array<{ name: string; url: string; icon?: StaticImageData }>;
  title: string;
}) => (
  <div className="absolute top-full left-0 right-0 z-[70]  bg-white mt-0.5 hidden lg:block">
    <div className="max-w-7xl mx-auto h-full  px-4 md:px-6 lg:px-8 py-10 flex ">
      {/* Title aligned left */}
      <h3 className=" flex-1   text-left  text-[#052557] text-lg mb-4 font-medium ">
        {title}
      </h3>

      {/* Grid of buttons */}
      <div className="flex-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 border-l p-2 pl-6">
        {items.filter(Boolean).map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="flex items-center space-x-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-4 px-4 rounded transition-colors"
          >
            {item.icon && (
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className="object-contain"
              />
            )}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

// Mobile Menu
const MobileMenuSheet = ({
  items,
  title,
  isOpen,
  onOpenChange,
}: {
  items: Array<{ name: string; url: string; icon?: StaticImageData }>;
  title: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => (
  <Sheet open={isOpen} onOpenChange={onOpenChange}>
    <SheetContent
      side="top"
      showCloseButton={false}
      className="w-full h-full sm:w-80  z-[70]  pt-2"
    >
      <SheetHeader>
        <SheetTitle className="text-center  text-[#052557] text-lg  ">
          {title}
        </SheetTitle>
      </SheetHeader>
      <div className="grid grid-cols-1 gap-3 overflow-y-auto">
        {items.filter(Boolean).map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="py-5 px-5 mx-5 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 flex items-center  space-x-3 text-sm text-gray-700 
            "
          >
            {item.icon && (
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className="object-contain"
              />
            )}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      <SheetFooter>
        <div className="absolute top-4 right-4">
          <SheetClose
            // asChild
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <X className="w-6 h-6 text-gray-800" />
          </SheetClose>
        </div>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const handleMobileMenuClick = (menuType: string) => {
    setActiveMobileMenu(menuType);
    setMobileMenuOpen(true);
  };

  const handleMenuToggle = (menuType: string) => {
    setActiveMenu((prev) => (prev === menuType ? null : menuType));
  };
  // 👇 Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMenu]);

  return (
    <nav className="sticky top-0 bg-[#202020]  px-6 lg:px-8 py-6  overflow-visible z-[60] ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-48 lg:w-52 h-7">
          <Image
            src={logo}
            alt="IDR Technology Solutions"
            fill
            className="object-contain "
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8  cursor-pointer">
          <Link
            href="/about"
            className="text-[#F7F6F2] text-sm hover:text-white transition-colors"
          >
            About Us
          </Link>

          {["services", "caseStudies", "partners"].map((key) => (
            <div key={key} ref={activeMenu === key ? menuRef : null}>
              <button
                onClick={() => handleMenuToggle(key)}
                className="flex items-center space-x-2 text-[#F7F6F2] text-sm hover:text-white transition-colors cursor-pointer"
              >
                <span>
                  {key === "caseStudies"
                    ? "Case Studies"
                    : key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeMenu === key ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Inline Mega Menu Render */}
              {activeMenu === key && (
                <MenuGrid
                  items={menuData[key as keyof typeof menuData]}
                  title={
                    key === "caseStudies"
                      ? "Case Studies"
                      : key.charAt(0).toUpperCase() + key.slice(1)
                  }
                />
              )}
            </div>
          ))}

          <Link
            href="/portfolio"
            className="text-[#F7F6F2] text-sm hover:text-white transition-colors cursor-pointer"
          >
            Portfolio
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="#"
            className="px-4 py-3 border border-white text-white text-xs uppercase hover:bg-white hover:text-black transition-colors"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="px-4 py-3 bg-[#F7F6F2] text-[#151622] text-xs font-bold uppercase hover:bg-white transition-colors"
          >
            Contact US
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-[#F7F6F2]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Close overlay */}
      {/* {activeMenu && (
        <div
          className="fixed top-[100px]  inset-0 z-40"
          onClick={() => setActiveMenu(null)}
        />
      )} */}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <Link href="/about" className="text-[#F7F6F2] text-sm">
              About Us
            </Link>
            {["services", "caseStudies", "partners"].map((key) => (
              <button
                key={key}
                onClick={() => handleMobileMenuClick(key)}
                className="flex items-center justify-between text-[#F7F6F2] text-sm hover:text-white"
              >
                <span>
                  {key === "caseStudies"
                    ? "Case Studies"
                    : key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
            ))}
            <Link href="/portfolio" className="text-[#F7F6F2] text-sm">
              Portfolio
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Link
                href="/login"
                className="px-4 py-3 border border-white text-white text-xs uppercase text-center"
              >
                Login
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 bg-[#F7F6F2] text-[#151622] text-xs font-bold uppercase text-center"
              >
                Contact US
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Sheets */}
      <MobileMenuSheet
        items={menuData.services}
        title="Services"
        isOpen={mobileMenuOpen && activeMobileMenu === "services"}
        onOpenChange={(open) => {
          setMobileMenuOpen(open);
          if (!open) setActiveMobileMenu("");
        }}
      />
      <MobileMenuSheet
        items={menuData.caseStudies}
        title="Case Studies"
        isOpen={mobileMenuOpen && activeMobileMenu === "caseStudies"}
        onOpenChange={(open) => {
          setMobileMenuOpen(open);
          if (!open) setActiveMobileMenu("");
        }}
      />
      <MobileMenuSheet
        items={menuData.partners}
        title="Partners"
        isOpen={mobileMenuOpen && activeMobileMenu === "partners"}
        onOpenChange={(open) => {
          setMobileMenuOpen(open);
          if (!open) setActiveMobileMenu("");
        }}
      />
    </nav>
  );
}

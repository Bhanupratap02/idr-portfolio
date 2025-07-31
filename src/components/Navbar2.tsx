/** @format */

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo_2.png";
import { ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// Menu data
const menuData = {
  services: [
    "Access Control Systems",
    "Audio / Visual Systems",
    "Conference Room Solutions",
    "Data Center Infrastructure",
    "Networks & IT Infrastructure",
    "Multifamily Intercom Systems",
    "Security Alarm Systems",
    "Structured Cabling",
    "Surveillance Camera Systems",
  ],
  caseStudies: [
    "Burns - A Lasting Partnership",
    "Cloud + 4-Wire Intercoms",
    "Custom Audio Deterrent",
    "Eliminated Unauthorized Access",
    "Enterprise Cabling Cleanup",
    "Fixing Failed Installs",
    "Kisi Elevator Access",
    "Phased Wi-Fi Upgrade",
    "PPA - A Lasting Partnership",
    "Scaling Security w/ Fairstead",
    "Securing Lauderhill Point",
    "Smarter Training Room",
    "Unified Intercom Access",
  ],
  partners: [
    "Akuvox",
    "Alphatouch",
    "ButterflyMX",
    "Cisco / Meraki",
    "Eagle Eye",
    "Kisi",
    "Lencore",
    "MVI",
    "Rhombus",
    "Speco Technologies",
    "Teleportivity",
    "Verkada",
    "Vicon",
    "Vivotek / Vortex",
    "ZK Teco",
  ],
};

// Desktop Mega Menu Grid
const MenuGrid = ({ items, title }: { items: string[]; title: string }) => (
  <div className="fixed top-[110px] left-0 right-0 z-[70] bg-white ">
    <div className="max-w-7xl h-full  px-4 md:px-6 lg:px-8 py-10 flex ">
      {/* Title aligned left */}
      <h3 className=" flex-1  text- text-left px-1 text-[#052557] mb-6 font-medium ">
        {title}
      </h3>

      {/* Grid of buttons */}
      <div className="flex-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 border-l p-2 pl-6">
        {items.filter(Boolean).map((item, index) => (
          <Link
            key={index}
            href="#"
            className="block w-full bg-gray-100 text-gray-800 hover:bg-gray-200   text-center py-4 px-4 rounded transition-colors text"
          >
            {item}
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
  items: string[];
  title: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => (
  <Sheet open={isOpen} onOpenChange={onOpenChange}>
    <SheetContent side="left" className="w-full sm:w-80">
      <SheetHeader>
        <SheetTitle className="text-left">{title}</SheetTitle>
      </SheetHeader>
      <div className="mt-6 grid grid-cols-1 gap-2">
        {items.filter(Boolean).map((item, index) => (
          <Link
            key={index}
            href="#"
            className="py-3 px-4 hover:bg-gray-50 rounded cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 block text-sm text-gray-700"
          >
            {item}
          </Link>
        ))}
      </div>
    </SheetContent>
  </Sheet>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string>("");

  const handleMobileMenuClick = (menuType: string) => {
    setActiveMobileMenu(menuType);
    setMobileMenuOpen(true);
  };

  const handleMenuToggle = (menuType: string) => {
    setActiveMenu((prev) => (prev === menuType ? null : menuType));
  };

  return (
    <nav className="bg-[#202020] rounded-xl px-6 lg:px-8 py-6 mx-4 md:mx-6 lg:mx-8 relative z-[60]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-48 lg:w-52 h-7">
          <Image
            src={logo}
            alt="IDR Technology Solutions"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 relative cursor-pointer">
          <Link
            href="#"
            className="text-[#F7F6F2] text-sm hover:text-white transition-colors"
          >
            About Us
          </Link>

          {["services", "caseStudies", "partners"].map((key) => (
            <div key={key} className="cursor-pointer">
              <button
                onClick={() => handleMenuToggle(key)}
                className="flex items-center space-x-2 text-[#F7F6F2] text-sm hover:text-white transition-colors "
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
            </div>
          ))}

          <Link
            href="#"
            className="text-[#F7F6F2] text-sm hover:text-white transition-colors"
          >
            Portfolio
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="px-4 py-3 border border-white text-white text-xs uppercase hover:bg-white hover:text-black transition-colors">
            Login
          </button>
          <button className="px-4 py-3 bg-[#F7F6F2] text-[#151622] text-xs font-bold uppercase hover:bg-white transition-colors">
            Contact US
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-[#F7F6F2]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
        </button>
      </div>

      {/* Desktop Mega Menus */}
      {activeMenu === "services" && (
        <MenuGrid items={menuData.services} title="Services" />
      )}
      {activeMenu === "caseStudies" && (
        <MenuGrid items={menuData.caseStudies} title="Case Studies" />
      )}
      {activeMenu === "partners" && (
        <MenuGrid items={menuData.partners} title="Partners" />
      )}

      {/* Close overlay */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveMenu(null)}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <Link href="#" className="text-[#F7F6F2] text-sm">
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
            <Link href="#" className="text-[#F7F6F2] text-sm">
              Portfolio
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <button className="px-4 py-3 border border-white text-white text-xs uppercase">
                Login
              </button>
              <button className="px-4 py-3 bg-[#F7F6F2] text-[#151622] text-xs font-bold uppercase">
                Contact US
              </button>
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

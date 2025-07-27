// src/components/Navbar.tsx

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const servicesItems = [
  "Access Control Systems",
  "Audio / Visual Systems",
  "Conference Room Solutions",
  "Data Center Infrastructure",
  "Networks & IT Infrastructure",
  "Multifamily Intercom Systems",
  "Security Alarm Systems",
  "Structured Cabling",
  "Surveillance Camera Systems",
];
const caseStudiesItems = [
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
  "Unified Intercom Access"
];
const partnersItems = [
  "Akuvox", "Alphatouch", "ButterflyMX",
  "Cisco / Meraki", "Eagle Eye", "Kisi",
  "Lencore", "MVI", "Rhombus",
  "Speco Technologies", "Teleportivity", "Verkada",
  "Vicon", "Vivotek / Vortex", "ZK Teco"
];


const renderMegaMenu = (title: string, items: string[]) => {
  const columnCount = 3;
  const columns = Array.from({ length: columnCount }, (_, i) =>
    items.filter((_, index) => index % columnCount === i)
  );

  return (
    <div className="absolute left-0 right-0 top-full mt-2 bg-white text-black shadow-xl rounded-xl z-50 flex p-6">
      {/* Left Label */}
      <div className="w-1/4 pr-6 border-r">
        <h3 className="font-bold text-md text-blue-700">{title}</h3>
      </div>

      {/* 3 Columns */}
      <div className="w-3/4 grid grid-cols-3 gap-4 pl-6">
        {columns.map((col, colIndex) => (
          <ul key={colIndex} className="space-y-2">
            {col.map((item, index) => (
              <li
                key={index}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};



export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const renderDropdown = (items: string[]) => (
    <div className="absolute top-full mt-2 bg-white text-black rounded shadow-md z-50 w-48">
      {items.map((item, i) => (
        <a
          href="#"
          key={i}
          className="block px-4 py-2 hover:bg-gray-100"
        >
          {item}
        </a>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[#202020] text-white px-6 py-4 rounded-b-lg shadow-md">
   <nav className="sticky top-0 z-50 bg-[#202020] text-white px-10">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between h-[47px] relative">
    {/* Left Logo */}
    <div className="font-bold text-lg">IDR Technology Solutions</div>

    {/* Center Menu */}
    <ul className="flex gap-8 items-center relative"> {/* 🟢 This stays as is */}
      <li>About Us</li>

      <li onMouseEnter={() => setOpenMenu("services")} onMouseLeave={() => setOpenMenu(null)}>
        <button className="flex items-center gap-1">Services <ChevronDown className="ml-1 h-4 w-4" /></button>
      </li>

      <li onMouseEnter={() => setOpenMenu("caseStudies")} onMouseLeave={() => setOpenMenu(null)}>
        <button className="flex items-center gap-1">Case Studies <ChevronDown className="ml-1 h-4 w-4" /></button>
      </li>
      <li onMouseEnter={() => setOpenMenu("partners")} onMouseLeave={() => setOpenMenu(null)}>
        <button className="flex items-center gap-1">Partners <ChevronDown className="ml-1 h-4 w-4" /></button>
        </li>


      {/* Other items */}
    </ul>

    {/* Right Buttons */}
    <div className="flex gap-3">
      <button className="border px-4 py-1 rounded">Login</button>
      <button className="bg-white px-4 py-1 rounded text-black">Contact Us</button>
    </div>

    {/* Mega Menu */}
    {openMenu === "services" && renderMegaMenu("Services", servicesItems)}
    {openMenu === "caseStudies" && renderMegaMenu("Case Studies", caseStudiesItems)}
    {openMenu === "partners" && renderMegaMenu("Partners", partnersItems)}

  </div>
</nav>

    </header>
  );
}

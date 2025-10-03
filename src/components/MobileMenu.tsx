/** @format */

"use client";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { MenuSection } from "@/types/navbar";

interface MobileMenuProps {
  menuSections: MenuSection[];
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onMobileMenuClick: (menuType: string) => void;
  onMobileMenuClose: () => void;
}
export default function MobileMenu({
  menuSections,
  isMenuOpen,
  onMenuToggle,
  onMobileMenuClick,
  onMobileMenuClose,
}: MobileMenuProps) {
    const handleLinkClick = () => {
      // Delay closing to allow navigation to start
      setTimeout(() => {
        onMobileMenuClose();
      }, 150);
    };
  return (
    <>
      {/* Hamburger Button */}
      <button className="lg:hidden text-[#F7F6F2]" onClick={onMenuToggle}>
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
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#202020] px-6 py-4 z-50">
          <div className="flex flex-col space-y-4">
            <Link href="/about" className="text-[#F7F6F2] text-sm">
              About Us
            </Link>
            {menuSections.map((section) => (
              <button
                key={section.key}
                onClick={() => onMobileMenuClick(section.key)}
                className="flex items-center justify-between text-[#F7F6F2] text-sm hover:text-white"
              >
                <span>{section.title}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            ))}
            <Link
              href="/portfolio"
              onClick={handleLinkClick}
              className="text-[#F7F6F2] text-sm"
            >
              Portfolio
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Link
                href="https://portal.idrtechnologysolutions.com/"
                className="px-4 py-3 border border-white text-white text-xs uppercase text-center"
                onClick={handleLinkClick}
              >
                IDR Portal
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="px-4 py-3 bg-[#F7F6F2] text-[#151622] text-xs font-bold uppercase text-center"
              >
                Contact US
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

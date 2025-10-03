/** @format */

"use client";
import { useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MenuSection } from "@/types/navbar";
import MenuGrid from "./MenuGrid";
interface DesktopMenuProps {
  menuSections: MenuSection[];
  activeMenu: string | null;
  onMenuToggle: (menuType: string) => void;
  onMenuClose: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
}
export default function DesktopMenu({
  menuSections,
  activeMenu,
  onMenuToggle,
  onMenuClose,
  menuRef,
}: DesktopMenuProps) {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      <Link
        href="/about"
        className="text-[#F7F6F2] text-sm hover:text-white transition-colors"
      >
        About Us
      </Link>

      {menuSections?.map((section) => (
        <div
          key={section.key}
          ref={activeMenu === section.key ? menuRef : null}
        >
          <button
            onClick={() => onMenuToggle(section.key)}
            className="flex items-center space-x-2 text-[#F7F6F2] text-sm hover:text-white transition-colors cursor-pointer"
          >
            <span>{section.title}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                activeMenu === section.key ? "rotate-180" : ""
              }`}
            />
          </button>

          <MenuGrid
            items={section.items}
            title={section.title}
            rootUrl={section.rootUrl}
            onLinkClick={onMenuClose}
            isVisible={activeMenu === section.key}
          />
        </div>
      ))}

      <Link
        href="/portfolio"
        className="text-[#F7F6F2] text-sm hover:text-white transition-colors"
      >
        Portfolio
      </Link>
    </div>
  );
}
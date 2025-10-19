/** @format */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useNavbar } from "@/hooks/useNavbar";
import { MENU_SECTIONS } from "@/data/menuData";
import logo from "@/assets/logo.png";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import MobileMenuSheet from "./MobileMenuSheet";

function Navbar2() {
  const {
    isMenuOpen,
    activeMenu,
    mobileMenuOpen,
    activeMobileMenu,
    menuRef,
    handleMobileMenuClick,
    handleMenuToggle,
    handleMobileToggle,
    closeActiveMenu,
    closeMobileSheet,
    closeAllMobileMenus, // Issue 2 Fix
  } = useNavbar();

  return (
    <nav className="sticky top-0 bg-[#202020]  px-6 lg:px-8 py-6  overflow-visible z-[60] ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}

        <Link href="/" className="relative w-40 sm:w-48 lg:w-56 xl:w-64 2xl:w-72 h-8">
          <Image
            src={logo}
            alt="IDR Technology Solutions"
            fill
            className="object-cover "
            priority
          />
        </Link>
        {/* Desktop Menu */}
        <DesktopMenu
          menuSections={MENU_SECTIONS}
          activeMenu={activeMenu}
          onMenuToggle={handleMenuToggle}
          onMenuClose={closeActiveMenu}
          menuRef={menuRef}
        />
        {/* CTA Buttons */}
        <div className="hidden xl:flex items-center space-x-4">
          <Link
            href="https://portal.idrtechnologysolutions.com/"
            className="px-4 py-3 border border-white text-white text-xs uppercase hover:bg-white hover:text-black transition-colors"
          >
            IDR Portal
          </Link>
          <Link
            href="/contact"
            className="px-4 py-3 bg-[#F7F6F2] text-[#151622] text-xs font-bold uppercase hover:bg-white transition-colors"
          >
            Contact US
          </Link>
        </div>

        <MobileMenu
          menuSections={MENU_SECTIONS}
          isMenuOpen={isMenuOpen}
          onMenuToggle={handleMobileToggle}
          onMobileMenuClick={handleMobileMenuClick}
          onMobileMenuClose={closeAllMobileMenus} // Issue 2 Fix
        />
      </div>

      {/* Mobile Menu Sheets */}
      {MENU_SECTIONS.map((section) => (
        <MobileMenuSheet
          key={section.key}
          items={section.items}
          title={section.title}
          rootUrl={section.rootUrl}
          isOpen={mobileMenuOpen && activeMobileMenu === section.key}
          onOpenChange={closeMobileSheet}
          onAllMenusClose={closeAllMobileMenus} // Issue 2 Fix
        />
      ))}
    </nav>
  );
}

export default Navbar2;

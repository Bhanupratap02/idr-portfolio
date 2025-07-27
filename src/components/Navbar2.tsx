/** @format */

// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    // <div className="px-6 lg:px-8 pt-6">
      <nav className="bg-[#202020] rounded-xl px-6 lg:px-8 py-6 mx-6 lg:mx-8 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-48 h-7 bg-white rounded-sm flex items-center justify-center">
              <span className="text-sm font-medium text-gray-800">
                IDR Technology Solutions
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="#"
              className="text-[#F7F6F2] text-sm hover:text-white transition-colors"
            >
              About Us
            </Link>
            <div className="flex items-center space-x-2">
              <Link
                href="#"
                className="text-[#F7F6F2] text-sm hover:text-white transition-colors"
              >
                Services
              </Link>
              <svg
                className="w-4 h-2 text-[#F7F6F2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              <Link
                href="#"
                className="text-[#F7F6F2] text-sm hover:text-white transition-colors"
              >
                Case Studies
              </Link>
              <svg
                className="w-4 h-2 text-[#F7F6F2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              <Link
                href="#"
                className="text-[#F7F6F2] text-sm hover:text-white transition-colors"
              >
                Partners
              </Link>
              <svg
                className="w-4 h-2 text-[#F7F6F2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
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

          {/* Mobile menu button */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="text-[#F7F6F2] text-sm">
                About Us
              </Link>
              <Link href="#" className="text-[#F7F6F2] text-sm">
                Services
              </Link>
              <Link href="#" className="text-[#F7F6F2] text-sm">
                Case Studies
              </Link>
              <Link href="#" className="text-[#F7F6F2] text-sm">
                Partners
              </Link>
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
      </nav>
    // </div>
  );
}

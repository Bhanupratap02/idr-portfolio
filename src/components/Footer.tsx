/** @format */

import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo_2.png";
import youtubeIcon from "@/assets/youtube.png";
import linkedinIcon from "@/assets/linkedin.png";
import facebookIcon from "@/assets/facebook.png";

const Footer = () => {
  return (
    <footer className="bg-[#111827] px-6 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className=" relative w-full max-w-72 h-10  ">
              <Image
                src={logo}
                alt="IDR Logo"
                fill
                quality={100}
                className="object-contain  "
                priority
              />
            </div>
            <p className="text-sm text-[#F7F6F2] leading-relaxed max-w-72">
              Whether you&apos;re launching a new facility or refreshing legacy
              systems, we&apos;ll help you build a data center you can trust —
              from day one.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg text-[#F7F6F2] mb-6 font-semibold">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#F7F6F2] hover:text-white transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#F7F6F2] hover:text-white transition"
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg text-[#F7F6F2] mb-6 font-semibold">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#F7F6F2] hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#F7F6F2] hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#F7F6F2] hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg text-[#F7F6F2] mb-6 font-semibold">
              Connect
            </h3>
            <div className="flex space-x-4">
              {[
                { icon: youtubeIcon, alt: "YouTube" },
                { icon: linkedinIcon, alt: "LinkedIn" },
                { icon: facebookIcon, alt: "Facebook" },
              ].map((social, index) => (
                <div
                  key={index}
                  className="w-8  h-8   bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition cursor-pointer"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-[#F7F6F2]">
            © 2025 IDR Technology Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

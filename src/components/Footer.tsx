/** @format */

import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo_2.png";
import youtubeIcon from "@/assets/youtube.png";
import linkedinIcon from "@/assets/linkedin.png";
import facebookIcon from "@/assets/facebook.png";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.youtube.com/@Idrtechnologysolutions",
      icon: youtubeIcon,
      alt: "YouTube",
    },
    {
      href: "https://www.linkedin.com/company/idr-technology-solutions",
      icon: linkedinIcon,
      alt: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100057472869428",
      icon: facebookIcon,
      alt: "Facebook",
    },
  ];

  return (
    <footer className="bg-[#111827] px-6 lg:px-16 2xl:px-32 3xl:px-48 py-12 2xl:py-16 3xl:py-20">
      <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 2xl:gap-16 3xl:gap-20 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="relative w-full max-w-72 2xl:max-w-80 h-10 2xl:h-12">
              <Image
                src={logo}
                alt="IDR Logo"
                fill
                quality={100}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm 2xl:text-base 3xl:text-lg text-[#F7F6F2] leading-relaxed max-w-72 2xl:max-w-80">
              Whether you&apos;re launching a new facility or refreshing legacy
              systems, we&apos;ll help you build a data center you can trust —
              from day one.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg 2xl:text-xl text-[#F7F6F2] mb-6 font-semibold">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg 2xl:text-xl text-[#F7F6F2] mb-6 font-semibold">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg 2xl:text-xl text-[#F7F6F2] mb-6 font-semibold">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 2xl:w-10 2xl:h-10 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition cursor-pointer"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm 2xl:text-base text-[#F7F6F2]">
            © 2025 IDR Technology Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
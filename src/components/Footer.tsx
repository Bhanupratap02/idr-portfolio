/** @format */

import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.youtube.com/@Idrtechnologysolutions",
      icon: "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fyoutube.png",
      alt: "YouTube",
    },
    {
      href: "https://www.linkedin.com/company/idr-technology-solutions",
      icon: "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Flinkedin.png",
      alt: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100057472869428",
      icon: "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Ffacebook.png",
      alt: "Facebook",
    },
    {
      href: "https://www.tiktok.com/@idrtechnologysolu?_t=ZP-8y9yjPO8tvL&_r=1",
      icon: "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Ftiktok_3.png",
      alt: "TikTok",
    },
    {
      href: "https://www.instagram.com/idrtechnologysolutions?igsh=MTNzcHBuanc3ZWM5ag%3D%3D&utm_source=qr",
      icon: "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Finstagram_2.png",
      alt: "Instagram",
    },
  ];

  const appLinks = [
    {
      href: "https://play.google.com/store/apps/details?id=com.idrportal&hl=en_US",
      icon: "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fplaystore.png",
      alt: "Google Play Store",
    },
    {
      href: "https://apps.apple.com/us/app/idr-portal/id6502960849",
      icon: "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fapple.png",
      alt: "Apple App Store",
    },
  ];

  return (
    <footer className="bg-[#111827] px-6 lg:px-16 2xl:px-32 3xl:px-48 py-12 2xl:py-16 3xl:py-20">
      <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 2xl:gap-16 3xl:gap-20 mb-12">
          {/* Company Info */}
          <div className="space-y-1 flex flex-col gap-2 lg:col-span-1">
            <div className="relative w-full max-w-70 2xl:max-w-80 h-10 2xl:h-12">
              <Image
                src={
                  "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Flogo.png"
                }
                alt="IDR Logo"
                fill
                quality={100}
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm 2xl:text-base 3xl:text-lg text-[#F7F6F2] leading-relaxed max-w-72 2xl:max-w-80">
              Quality from start to finish. From design through installation,
              IDR is the name you can depend on.
            </p>


            <div className="flex space-x-4 mb-6">
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

          {/* our service Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg 2xl:text-xl text-[#F7F6F2] mb-4 font-semibold">
              OUR SERVICES
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/access-control"
                    className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                  >
                    Access Control Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/surveillance-camera"
                    className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                  >
                    Surveillance Camera Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/camera-monitoring"
                    className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                  >
                    Camera Monitoring
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/intercom"
                    className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                  >
                    Multifamily Intercom Systems
                  </Link>
                </li>
         
              </ul>
              <ul className="space-y-2 border-l border-white/20 pl-4">
                       <li>
                  <Link
                    href="/services/security-alarm"
                    className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                  >
                    Security Alarm Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/networks-it"
                    className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                  >
                    Networks & IT Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/structured-cabling"
                    className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                  >
                    Structured Cabling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/data-center"
                    className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                  >
                    Data Center Infrastructure
                  </Link>
                </li>

              </ul>

              <ul className="space-y-2 border-l border-white/20 pl-4">
                <li>
                  <Link
                    href="/services/e-rate-program"
                    className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                  >
                    E-Rate Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/audio-visual"
                    className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                  >
                    Audio / Visual Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/conference-room"
                    className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                  >
                    Conference Room Solutions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg 2xl:text-xl text-[#F7F6F2] mb-4 font-semibold">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact"
                  className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                >
                  Contact
                </Link>
              </li> */}
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                >
                  Demo Request
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="https://portal.idrtechnologysolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                >
                  IDR Portal
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg 2xl:text-xl text-[#F7F6F2] mb-6 font-semibold">
              Connect
            </h3>

            <div className="flex items-start gap-3 mb-4">
              <div className="text-red-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-90deg)' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="text-sm 2xl:text-base text-[#F7F6F2] ">
                <p>NY : (718) 594-7865</p>
                <p>NU : (732) 217-3550</p>
                <p>FL : (813) 685-4022</p>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <div className="text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="text-sm 2xl:text-base text-[#F7F6F2]">
                <p>sales@idrtechnologysolutions.com</p>
              </div>
            </div>

            {/* App Store Links */}
            <div className="flex space-x-3">
              {appLinks.map((app, index) => (
                <Link
                  key={index}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition transform hover:scale-105"
                >
                  <Image
                    src={app.icon}
                    alt={app.alt}
                    width={60}
                    height={40}
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
            © 2026 IDR Technology Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Image from "next/image";
const anavioImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fanavio-reader.png";

export default function AnavioReaderSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-26 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
           {/* Left Image */}
        <div className="relative w-full max-w-full flex-shrink-0 aspect-[4/3.6] 2xl:aspect-[4/3] flex-[45%]">
          <Image
            src={anavioImg}
            fill
            alt="Vicon Anavio Unified Reader"
            className="rounded-2xl shadow-xl object-cover object-top-right"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="flex-[55%] text-center lg:text-left ">
          <h2 className="ext-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl ont-medium text-gray-900 mb-3 sm:mb-4 md:mb-5 xl:mb-6 ">
            Anavio Unified Intercom Reader
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed font-light mb-3 md:mb-6 ">
              The Anavio Unified Intercom Reader by Vicon puts **face authentication, access reader, camera and intercom into a single, sleek device**.  
  With built-in mobile credential support, card/fob options, and cloud-based management, it’s built for modern, secure entry.
          </p>



<ul className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-base xl:text-lg 2xl:text-xl font-light space-y-3 mb-4 md:mb-8 ">
  <li>• Supports facial verification, mobile credentials, traditional cards and key fobs. </li>
  <li>• Combines AI-powered camera, 2-way intercom, and access control in a compact form. </li>
  <li>• Hands-free entry and remote monitoring from any device.</li>
  <li>• Seamless integration with Vicon VAX and Anavio Cloud platforms.</li>
</ul>

          <a
            href="https://vicon-security.com/unified-intercom-reader"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 2xl:py-4  bg-[#006cca] text-white rounded-full  text-sm  md:text-base 2xl:text-lg font-light hover:bg-[#0056a3] transition-colors"
          >
            Learn More on Vicon’s Website
          </a>
        </div>
      </div>
    </section>
  );
}

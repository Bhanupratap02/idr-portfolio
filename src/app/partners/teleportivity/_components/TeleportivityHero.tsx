/** @format */

import heroImg from "@/assets/partners/teleportivity/heroImg.png";
import Image from "next/image";

export default function TeleportivityHero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Virtual Front Desk & Smart Intercom Tech
            </h1>

            <div className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 space-y-4">
              <p className="font-light">
                Live Video Help, QR Access, and Touchscreen Communication – All
                from One Platform
              </p>
              <p className="font-light">
                Teleportivity lets you modernize your building&apos;s entry
                experience with cloud-connected touchscreens, QR codes, live
                video assistance, and smart integrations — all without needing
                someone physically on-site.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#052557] text-white px-8 py-3 rounded-lg hover:bg-[#041e45] transition-colors duration-200">
                Schedule Demo
              </button>
              <button className="border border-[#052557] text-[#052557] px-8 py-3 rounded-lg hover:bg-[#052557] hover:text-white transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={heroImg}
                alt="Teleportivity Smart Intercom Interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

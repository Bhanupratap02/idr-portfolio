/** @format */

import heroImg from "@/assets/services/hero.png";
import Image from "next/image";

export default function SpotlightHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={heroImg}
            alt="Technology Background"
            className="absolute h-[120%] w-full object-cover -top-[10%]"
          />
        </div>
        <div className="absolute inset-0 bg-gray-600/58" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="backdrop-blur-[1.85px] bg-white/5 border border-gray-300/20 rounded-lg px-7 py-5 sm:px-12 sm:py-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[76px] mb-3">
              Our Spotlight partners
            </h1>
            <p className="text-lg sm:text-xl text-white leading-[1.61] max-w-4xl mx-auto">
              We want to refer and endorse selected partners to our clients so
              our customers achieve their goals, with the comfort that we will
              support them as and when they need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

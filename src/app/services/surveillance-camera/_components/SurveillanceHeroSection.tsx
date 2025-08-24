/** @format */

import { Button } from "@/components/ui/button";
import hero from "@/assets/services/surveillance-camera/hero.png";
import Image from "next/image";
export default function SurveillanceHeroSection() {
  return (
    <section className="w-full h-[718px] bg-gradient-to-r from-[#1E3A8A] via-[#1E40AF] to-[#1D4ED8] relative">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-8 lg:px-28 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full pt-[120px]">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl font-normal text-white leading-[150%]">
              Surveillance Camera Systems
            </h1>
            <p className="text-2xl text-[#DBEAFE] leading-[137.5%]">
              Smarter Security, Built for Real-World Sites
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-[#1E3A8A] hover:bg-gray-100 px-8 py-5 text-base rounded-lg h-[60px]">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white/10 px-8 py-5 text-base rounded-lg h-[60px]"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[584px] h-[384px] rounded-xl shadow-[0_25px_50px_rgba(0,0,0,0.25)] overflow-hidden">
              <Image
                src={hero}
                alt="Surveillance Camera Systems"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

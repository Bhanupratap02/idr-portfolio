/** @format */

import { Button } from "@/components/ui/button";
import hero from "@/assets/services/structured-cabling/hero.png";
import Image from "next/image";
export default function CablingHeroSection() {
  return (
    <section className="w-full h-[670px] bg-gradient-to-r from-[#F9FAFB] to-[#F3F4F6] relative pt-[120px]">
      <div className="max-w-7xl mx-auto px-8 lg:px-28 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-medium text-[#2E2E2E] leading-tight">
              Structured Cabling
            </h1>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#4B5563]">
                Built for Today — and Scalable for Tomorrow
              </h2>
              <p className="text-2xl text-[#4B5563] leading-relaxed">
                We deliver clean, scalable, and code-compliant cabling
                installations that form the backbone of your technology
                infrastructure.
              </p>
            </div>
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-4 text-base rounded-md">
              Schedule a Site Walk
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={hero}
              alt="Structured Cabling Infrastructure"
              className="w-full max-w-[567px] h-[362px] rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

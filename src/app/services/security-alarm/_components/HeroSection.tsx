/** @format */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-r from-[#111827] to-[#1F2937] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/092c482ad683f6bfdeecfa6f21eaf4a52aed6003?width=2880')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-white text-4xl lg:text-5xl font-medium leading-tight">
            Security Alarm Systems
          </h1>

          <h2 className="text-white text-xl lg:text-3xl font-medium leading-relaxed">
            Proactive Protection, Professionally Managed
          </h2>

          <p className="text-[#E5E7EB] text-lg lg:text-xl leading-relaxed max-w-2xl">
            At IDR Technology Solutions, we design, install, and support
            reliable intrusion alarm systems to protect your building, staff,
            and assets.
          </p>

          <Button className="bg-[#0056B3] hover:bg-[#0056B3]/90 text-white px-8 py-6 text-base flex items-center gap-3">
            Get a Free Site Assessment
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Right Content - Security Device Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6f301a21f891abad7ebc64499c2b5e4e01bd2214?width=982"
            alt="Security alarm system device"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

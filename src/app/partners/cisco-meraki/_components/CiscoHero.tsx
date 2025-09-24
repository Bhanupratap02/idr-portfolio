/** @format */

import { Button } from "@/components/ui/button";

export default function CiscoHero() {
  return (
    <section className="bg-white border-0 border-[#E5E7EB] px-4 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col gap-8">
            {/* Main Heading */}
            <h1 className="text-[#2E2E2E] text-4xl lg:text-5xl font-medium leading-[1.5] mb-6">
              Cisco / Meraki Solutions by IDR Technology Solutions
            </h1>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[#626262] text-xl lg:text-2xl font-normal leading-[1.5]">
                Smarter networks. Stronger security. Seamless performance.
              </h2>
              <p className="text-[#626262] text-xl lg:text-2xl font-normal leading-[1.5]">
                At IDR, we're your trusted partner for Cisco and Meraki systems
                — delivering powerful cloud-managed infrastructure and reliable
                hardware.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-[#4A90E2] text-white hover:bg-[#3A80D2] px-6 py-3 text-base font-medium rounded-lg shadow-sm border-0"
                size="lg"
              >
                Let's Talk →
              </Button>
              <Button
                variant="outline"
                className="border border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white px-6 py-3 text-base font-medium rounded-lg bg-transparent"
                size="lg"
              >
                View Products
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[620px] h-[400px] bg-white rounded-xl border-0 border-[#E5E7EB] shadow-[0_4px_6px_0_rgba(0,0,0,0.10),0_10px_15px_0_rgba(0,0,0,0.10)]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/95113f65b1b63a915fbe92887e6e0b66871063e3?width=1240"
                alt="Cisco Meraki Network Equipment"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

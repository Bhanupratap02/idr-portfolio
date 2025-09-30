import Image from "next/image";
import kisi from "@/assets/butterfly/kisi.png";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#f9fafb] to-[#ffffff] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-[#2e2e2e] max-w-lg">
              Smartest Cloud-Based Access Control – Powered by Kisi
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#626262] leading-relaxed max-w-xl">
              Installed & Supported by IDR Technology Solutions, Platinum Kisi
              Partner in NY
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#052557] text-white px-6 py-3 rounded-lg hover:bg-[#041b3f] transition-colors">
                Get a Quote
              </button>
              <button className="border border-[#052557] text-[#052557] px-6 py-3 rounded-lg hover:bg-[#052557] hover:text-white transition-colors">
                Watch How It Works
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={kisi}
                alt="Kisi Access Control System"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

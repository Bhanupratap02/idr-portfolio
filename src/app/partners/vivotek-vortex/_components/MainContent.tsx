/** @format */

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainContent() {
  return (
    <section className="bg-white relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-32 items-center">
          {/* Left Content */}
          <div className="max-w-full lg:max-w-none order-2 lg:order-1">
            {/* Main Heading and Description */}
            <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-8 xl:space-y-10 2xl:space-y-12 3xl:space-y-16 mb-8 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-16 2xl:mb-20 3xl:mb-24">
              <h2 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-[3.5rem] 3xl:text-6xl font-medium leading-tight text-[#2E2E2E]">
                Vivotek & Vortex Surveillance Solutions by IDR
              </h2>
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-5 xl:space-y-6 2xl:space-y-8 3xl:space-y-10">
                <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-[1.35rem] 2xl:text-2xl 3xl:text-3xl text-[#626262] font-light leading-relaxed">
                  AI-powered security, built for today — and ready for tomorrow.
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-[1.35rem] 2xl:text-2xl 3xl:text-3xl text-[#626262] font-light leading-relaxed">
                  At IDR, we deliver advanced surveillance solutions using
                  Vivotek for on-premises systems and Vortex for modern,
                  cloud-based video management. As a Vivotek Gold Partner, we
                  offer extended warranties, certified support, and hybrid
                  deployments that flex with your needs.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link href={"/contact"}>
              <Button className="group bg-[#2E2E2E] hover:bg-[#1a1a1a] active:bg-black text-white transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-2xl text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-semibold px-6 sm:px-8 md:px-12 lg:px-10 xl:px-12 2xl:px-16 3xl:px-20 py-3 sm:py-4 md:py-5 lg:py-4 xl:py-5 2xl:py-6 3xl:py-8 w-full sm:w-auto min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[200px] xl:min-w-[220px] 2xl:min-w-[240px] 3xl:min-w-[280px] h-12 2xl:h-18 3xl:h-20 cursor-pointer">
                Get now
              </Button>
            </Link>
          </div>
          {/* Right Visual Element */}

          <div className="relative order-1 lg:order-2 flex items-center justify-center">
            {/* Background Decorative Circle */}
            <div className="lg:absolute lg:left-20 xl:left-40 2xl:left-50 3xl:left-50  flex items-center justify-center">
              <div className="w-75 h-75 sm:w-80 sm:h-80 md:w-110 md:h-110 lg:w-125 lg:h-125 xl:w-[36rem] xl:h-[36rem] 2xl:w-[45rem] 2xl:h-[45rem] 3xl:w-[50rem] 3xl:h-[50rem] bg-[#B2B1AD] opacity-50 rounded-full  animate-pulse border border-black"></div>
            </div>

            {/* Security Camera Image */}

            {/* Replace this with Next.js Image component when you have the local image */}
            <div className="absolute -left-5 md:left-15 lg:left-0 2xl:left-10 aspect-[564/239] w-85 md:w-120 lg:w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/dd902d67a540592b89cb078c8b2218c46082a19f?width=1128"
                alt="Professional surveillance camera system by Vivotek"
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-2xl 3xl:rounded-3xl "
              />
              {/* 
                Uncomment and use this when you have the local image:
                <Image
                  src={securityCameraImg}
                  alt="Professional surveillance camera system by Vivotek"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                */}
            </div>
          </div>
        </div>
      </div>
      {/* Background Decorative Element */}
      {/* <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-[563px] h-[563px] bg-[#B2B1AD] rounded-full opacity-50"></div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/dd902d67a540592b89cb078c8b2218c46082a19f?width=1128"
          alt="Security Camera"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[564px] h-[239px] object-cover"
        />
      </div> */}
    </section>
  );
}

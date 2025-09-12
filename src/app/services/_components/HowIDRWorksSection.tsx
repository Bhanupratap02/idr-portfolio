/** @format */
import Image from "next/image";
import handshake from "@/assets/services/handshake.png";

export default function HowIDRWorksSection() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row  min-h-[500px]">
        {/* Left Image - flush left */}
        <div
          className="
    w-full                 /* mobile: full width */
    sm:w-[80%]             /* small screens: 80% width */
    md:w-[60%]             /* medium screens: 60% */
    lg:w-[45%]             /* large screens: 45% */
    xl:w-[40%]             /* XL screens: 40% */
    2xl:w-[40%]            /* 2XL: 35% */
    3xl:w-[30%]            /* 3XL: 30% */
    h-[300px] sm:h-[400px] md:h-[500px] lg:h-[565px] 2xl:h-[585px]
     3xl:h-[700px] 
    mt-0 lg:mt-[55px]
    mb-2 md:mb-4 lg:mb-6 xl:mb-10 2xl:mb-14
  "
        >
          <Image
            src={handshake}
            alt="IDR Team Working"
            className="w-full h-full object-cover rounded-tr-[40px] lg:rounded-tr-[100px]"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 px-6 sm:px-10 lg:px-16 xl:px-24 py-10 lg:py-20 flex items-center">
          <div className="max-w-3xl">
            {/* Main Title */}
            <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl font-medium leading-snug lg:leading-[64px] mb-8">
              How IDR works?
            </h2>

            {/* Steps */}
            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                <div className=" flex-1 flex items-center gap-4 min-w-[50px]">
                  <div className="text-[#9EA3B5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
                    1.
                  </div>
                  <div className="text-[#2E2E2E] text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-medium leading-snug">
                    Call us anytime 24/7
                  </div>
                </div>
                <div className="text-[#545971] text-base sm:text-lg 2xl:text-xl 3xl:text-2xl leading-relaxed flex-2">
                  You can contact us directly, we will quickly put you in touch
                  with our home care professionals who are ready anytime.
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                <div className=" flex-1 flex items-center gap-4 min-w-[50px]">
                  <div className="text-[#9EA3B5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
                    2.
                  </div>
                  <div className="text-[#2E2E2E] text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-medium leading-snug">
                    Schedule Service
                  </div>
                </div>
                <div className="text-[#545971] text-base sm:text-lg 2xl:text-xl 3xl:text-2xl leading-relaxed flex-2">
                  After connecting your call, our home care experts will answer
                  your questions and provide flexible appointment times.
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                <div className=" flex-1 flex items-center gap-4 min-w-[50px]">
                  <div className="text-[#9EA3B5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
                    3.
                  </div>
                  <div className="text-[#2E2E2E] text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-medium leading-snug">
                    Your request is completed
                  </div>
                </div>
                <div className="text-[#545971] text-base sm:text-lg 2xl:text-xl 3xl:text-2xl leading-relaxed flex-2">
                  Once your technician arrives, they will diagnose the problem
                  and provide an estimate. If you decide to continue, the
                  technician will get to work.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

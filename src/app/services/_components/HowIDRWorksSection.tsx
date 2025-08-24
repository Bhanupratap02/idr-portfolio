/** @format */
import Image from "next/image";
import handshake from "@/assets/services/handshake.png"
export default function HowIDRWorksSection() {
  return (
    <section className="bg-white">
      <div className="flex min-h-[676px]">
        {/* Left Image */}
        <div className="w-[577px] h-[565px] mt-[55px]">
          <Image
            src={handshake}
            alt="IDR Team Working"
            className="w-full h-full object-cover rounded-tr-[100px]"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 px-[72px] py-[125px]">
          <div className="w-[671px]">
            {/* Main Title */}
            <h2 className="text-[#2E2E2E] text-[48px] font-medium leading-[64px] mb-8">
              How IDR works?
            </h2>

            {/* Steps */}
            <div className="space-y-7">
              {/* Step 1 */}
              <div className="flex items-start gap-9">
                <div className="flex items-start gap-6">
                  <div className="text-[#9EA3B5] text-[56px] font-bold leading-[64px]">
                    1.
                  </div>
                  <div className="w-[164px] text-[#2E2E2E] text-[24px] font-medium leading-[32px]">
                    Call us anytime 24/7
                  </div>
                </div>
                <div className="w-[420px] text-[#545971] text-[18px] font-normal leading-[28px]">
                  You can contact us directly, we will quickly put you in touch
                  with our home care professionals who are ready anytime
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-9">
                <div className="flex items-start gap-[14px]">
                  <div className="text-[#9EA3B5] text-[56px] font-bold leading-[64px]">
                    2.
                  </div>
                  <div className="w-[164px] text-[#2E2E2E] text-[24px] font-medium leading-[32px]">
                    Schedule Service
                  </div>
                </div>
                <div className="w-[420px] text-[#545971] text-[18px] font-normal leading-[28px]">
                  After connecting your call, our home care experts will answer
                  your questions and provide flexible appointment times
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-9">
                <div className="flex items-start gap-[14px]">
                  <div className="text-[#9EA3B5] text-[56px] font-bold leading-[64px]">
                    3.
                  </div>
                  <div className="w-[164px] text-[#2E2E2E] text-[24px] font-medium leading-[32px]">
                    Your request is complated
                  </div>
                </div>
                <div className="w-[420px] text-[#545971] text-[18px] font-normal leading-[28px]">
                  Once your technician arrives, he will diagnose the problem and
                  provide an estimate. If you decide to continue, the technician
                  will get to work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

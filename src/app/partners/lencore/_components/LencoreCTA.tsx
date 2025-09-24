/** @format */

import { MessageSquareIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export default function LencoreCTA() {
  return (
    <section className="w-full min-h-[320px] sm:min-h-[400px] lg:h-[448px] bg-[#052557] relative">
      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-0">
        <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-2xl sm:text-3xl lg:text-4xl text-center tracking-[0] leading-tight lg:leading-10 mb-6 sm:mb-8 lg:mb-[30px]">
          Ready to Improve Your Acoustics?
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-normal text-blue-100 text-lg sm:text-xl text-center tracking-[0] leading-relaxed lg:leading-7 mb-6 sm:mb-8 lg:mb-[42px]">
          Let&apos;s talk about how Lencore can enhance your space.
        </p>

        <p className="max-w-[783px] [font-family:'Inter',Helvetica] font-normal text-blue-100 text-base sm:text-lg text-center tracking-[0] leading-relaxed lg:leading-[27px] mb-8 sm:mb-12 lg:mb-[82px] px-4">
          Call us or submit the form — all inquiries go straight to our
          engineering and sales team. No spam. No delays. Just answers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="w-full sm:w-auto min-w-[140px] lg:w-[161px] h-auto px-4 lg:px-6 py-3 lg:h-[60px] bg-white text-blue-600 hover:bg-gray-50 rounded-lg border-0">
            <PhoneIcon className="w-4 h-4 lg:h-6 mr-2" />
            <span className="[font-family:'Inter',Helvetica] font-normal text-sm lg:text-base">
              Call Now
            </span>
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto min-w-[140px] lg:w-[177px] h-auto px-4 lg:px-6 py-3 lg:h-[60px] bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#052557] rounded-lg"
          >
            <MessageSquareIcon className="w-4 h-4 mr-2" />
            <span className="[font-family:'Inter',Helvetica] font-normal text-sm lg:text-base">
              Get Quote
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

/** @format */

import { Video, Smartphone, Bell, Users } from "lucide-react";
import benefits1Img from "@/assets/partners/alphatouch/benefits1.png";
import benefits2Img from "@/assets/partners/alphatouch/benefits2.png";
import benefits3Img from "@/assets/partners/alphatouch/benefits3.png";
import benefits4Img from "@/assets/partners/alphatouch/benefits4.png";
import Image from "next/image";
const benefits = [
  {
    icon: <Video className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" />,
    title: "Video Calls from Entry",
    description: "See and speak with visitors before granting access",
    bgColor: "bg-blue-600",
  },
  {
    icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" />,
    title: "Remote Door Control",
    description: "Open doors remotely via mobile app from anywhere",
    bgColor: "bg-purple-600",
  },
  {
    icon: <Bell className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" />,
    title: "Smart Notifications",
    description: "Get notifications and view complete call history",
    bgColor: "bg-green-600",
  },
  {
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" />,
    title: "Zero Learning Curve",
    description: "Modern interface that's intuitive for all ages",
    bgColor: "bg-orange-600",
  },
];

export default function AlphaTouchResidentBenefits() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-12 xl:gap-14 2xl:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium text-gray-900 leading-tight px-2 sm:px-3 md:px-4 lg:px-4 xl:px-4 2xl:px-6 mb-3 md:mb-4 xl:mb-6 2xl:mb-7">
              Resident Benefits
            </h2>
            {/* space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-5 xl:space-y-6  2xl:space-y-7 */}
            <div className="space-y-0">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="group flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6 p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-6 rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-lg xl:rounded-xl 2xl:rounded-xl 3xl:rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-md"
                >
                  <div
                    className={`${benefit.bgColor} rounded-xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12.5 xl:h-12.5 2xl:w-14 2xl:h-14 flex items-center justify-center flex-shrink-0`}
                  >
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl  mb-1  2xl:mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-sm xl:text-lg 2xl:text-xl  leading-relaxed group-hover:text-gray-700 transition-colors duration-300 font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 2xl:gap-5 order-1 lg:order-2">
            <div className="space-y-0">
              <div className="rounded-xl overflow-hidden  aspect-[4/3] ">
                <Image
                  src={benefits1Img}
                  alt="Intercom interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" rounded-xl overflow-hidden aspect-video">
                <Image
                  src={benefits3Img}
                  alt="Mobile app interface"
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-video rounded-xl overflow-hidden">
                <Image
                  src={benefits2Img}
                  alt="Video call feature"
                  className="w-full h-full object-fill"
                />
              </div>
              <div className=" rounded-xl overflow-hidden  aspect-[4/3]">
                <Image
                  src={benefits4Img}
                  alt="Access control"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

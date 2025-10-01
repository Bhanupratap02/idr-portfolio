/** @format */

import { Video, Smartphone, Bell, Users } from "lucide-react";
import benefits1Img from "@/assets/partners/alphatouch/benefits1.png";
import benefits2Img from "@/assets/partners/alphatouch/benefits2.png";
import benefits3Img from "@/assets/partners/alphatouch/benefits3.png";
import benefits4Img from "@/assets/partners/alphatouch/benefits4.png";
import Image from "next/image";
const benefits = [
  {
    icon: <Video className="w-6 h-6 text-white" />,
    title: "Video Calls from Entry",
    description: "See and speak with visitors before granting access",
    bgColor: "bg-blue-600",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Remote Door Control",
    description: "Open doors remotely via mobile app from anywhere",
    bgColor: "bg-purple-600",
  },
  {
    icon: <Bell className="w-6 h-6 text-white" />,
    title: "Smart Notifications",
    description: "Get notifications and view complete call history",
    bgColor: "bg-green-600",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Zero Learning Curve",
    description: "Modern interface that's intuitive for all ages",
    bgColor: "bg-orange-600",
  },
];

export default function AlphaTouchResidentBenefits() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-8">
              Resident Benefits
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div
                    className={`${benefit.bgColor} rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0`}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden  aspect-[4/3]">
                <Image
                  src={benefits1Img}
                  alt="Intercom interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden ">
                <Image
                  src={benefits3Img}
                  alt="Mobile app interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-video rounded-xl overflow-hidden">
                <Image
                  src={benefits2Img}
                  alt="Video call feature"
                  className="w-full h-full object-cover"
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

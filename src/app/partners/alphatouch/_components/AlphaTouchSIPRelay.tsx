/** @format */

import { CheckCircle } from "lucide-react";
import sipImg from "@/assets/partners/alphatouch/sip.png";
import Image from "next/image";

const benefits = [
  "Building Retrofits - Upgrade without major construction work",
  "Budget-Conscious Upgrades - Maximize ROI with existing infrastructure",
  "Occupied Properties - Minimal disruption during installation",
];

export default function AlphaTouchSIPRelay() {
  return (
    <section className="bg-blue-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-6">
              Patented SIP Relay Technology
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Already have a legacy 3-wire or 4-wire system? AlphaTouch&apos;s SIP
              relay modules allow you to keep the cabling, but replace the
              hardware — saving money and disruption.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">
                      {benefit.split(" - ")[0]}
                    </span>
                    {benefit.includes(" - ") && (
                      <>
                        <br />
                        <span className="text-gray-600">
                          {benefit.split(" - ")[1]}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
       
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={sipImg}
                alt="SIP Relay Technology"
                className="w-full h-auto object-cover"
              />
         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

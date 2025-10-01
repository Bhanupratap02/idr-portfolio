/** @format */

import imgImg from "@/assets/partners/alphatouch/entry_panel.png";
import imgImg1 from "@/assets/partners/alphatouch/mobile_app.png";
import imgImg2 from "@/assets/partners/alphatouch/portal.png";
import Image from "next/image";

const demos = [
  {
    image: imgImg,
    title: "Entry Panel",
    description: "Sleek touchscreen interface with video calling capabilities",
  },
  {
    image: imgImg1,
    title: "Mobile App",
    description: "Answer calls and control access from your smartphone",
  },
  {
    image: imgImg2,
    title: "Cloud Portal",
    description: "Comprehensive management tools for property teams",
  },
];

export default function AlphaTouchDemo() {
  return (
    <section className="bg-gray-900 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4">
            See AlphaTouch in Action
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the modern intercom system that&apos;s revolutionizing
            building access
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <div
              key={demo.title}
              className="bg-white rounded-2xl p-6 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <Image
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="px-2">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {demo.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {demo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

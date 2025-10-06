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
    <section className="bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-14 2xl:mb-18 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-medium text-white leading-tight mb-4  md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-7">
            See AlphaTouch in Action
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 leading-relaxed px-2 sm:px-0 font-light">
            Experience the modern intercom system that&apos;s revolutionizing
            building access
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12 3xl:gap-16">
          {demos.map((demo, index) => (
            <div
              key={demo.title}
              className="group bg-white rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-2xl 3xl:rounded-3xl p-5  md:p-6 lg:p-6  2xl:p-8 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden mb-3  md:mb-4 lg:mb-5  2xl:mb-6 transition-all duration-300 group-hover:scale-105">
                <Image
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex-1 flex flex-col group-hover:translate-y-1 transition-transform">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl  font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-4 2xl:mb-5 leading-tight">
                  {demo.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light group-hover:text-gray-900 transition-colors duration-300">
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

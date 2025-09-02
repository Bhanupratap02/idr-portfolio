/** @format */
import heroBGImage from "@/assets/services/conference-room/hero_img.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative bg-gray-900 text-white flex items-center 
      min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] 
      2xl:min-h-[900px] 3xl:min-h-[1200px]"
    >
      <div className="absolute inset-0  2xl:top-[-4%] 3xl:top-[-25%]">
        <Image
          src={heroBGImage}
          alt="Security Background"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl 2xl:max-w-[85rem] 3xl:max-w-[100rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-xl sm:max-w-2xl 2xl:max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-medium leading-tight">
              Conference Room Solutions
            </h1>
            <div className="space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-light">
              <p>Smart, Seamless Meeting Spaces — Designed by IDR</p>
              <p>
                A great meeting room isn&apos;t just about the table and chairs
                — it&apos;s about how well people can see, hear, and connect.
              </p>
              <p>
                At IDR Technology Solutions, we design, install, and support
                conference room systems that look sharp, sound amazing, and just
                work — from huddle rooms to executive boardrooms.
              </p>
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md 
              text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium transition-colors flex items-center gap-3"
            >
              Book a Free Walkthrough
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          {/* <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7525f589cee74bca8e462f00891d2b3ae4e63091?width=1138"
                alt="Modern Conference Room"
                className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[569px] 2xl:max-w-[650px] 3xl:max-w-[800px] h-auto rounded-xl shadow-lg"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

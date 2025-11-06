/** @format */

const heroBg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fconference-room%2Fhero_bg.png";
const conferenceRoomImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fconference-room%2Fconference_room.png";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-gray-900 text-white py-16 md:py-20 lg:py-24 2xl:py-28 flex items-center 
      min-h-[90vh] sm:min-h-[95vh] md:min-h-[90vh] lg:min-h-[85vh] xl:min-h-[90vh] 3xl:min-h-[95vh]"
    >
      <div className="absolute inset-0 ">
        <Image
          src={heroBg}
          alt="Technology conference room background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[120rem] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-32 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-8 xl:space-y-10 3xl:space-y-12  max-w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl  font-medium leading-tight">
              Conference Room Solutions
            </h1>
            <div className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-light leading-relaxed space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 xl:space-y-6 2xl:space-y-8 ">
              <p>
                <span className="block font-medium ">
                  Smart, Seamless Meeting Spaces — Designed by IDR.
                </span>
                A great meeting room isn&apos;t just about the table and chairs
                — it&apos;s about how well people can see, hear, and connect.
              </p>

              <p>
                At IDR Technology Solutions, we design, install, and support
                conference room systems that look sharp, sound amazing, and just
                work — from huddle rooms to executive boardrooms.
              </p>
            </div>

            <Link
              href={"/contact"}
              className="inline-flex w-auto bg-dark-blue hover:bg-blue-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl px-6 sm:px-8 py-3 sm:py-4 rounded 
              text-sm sm:text-base lg:text-lg 2xl:text-xl font-medium   items-center gap-3 cursor-pointer group"
            >
              Book a Free Walkthrough
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 group-hover:translate-x-1 transition-transform duration-300"
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
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center lg:justify-end  ">
            <div className="relative w-full max-w-sm sm:max-w-md  md:max-w-full">
              <div className="relative w-full h-full">
                <Image
                  src={conferenceRoomImg}
                  alt="Modern Conference Room"
                  fill
                  className="h-full w-full object-cover rounded-2xl"
                  // className="object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl 2xl:rounded-3xl 3xl:rounded-3xl shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** @format */
import Image from "next/image";
const legacySystemImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fintercom%2Flegacy_systems.png";
const benefits = [
  "Repair and expand traditional systems",
  "No disruption to building infrastructure",
  "Hybrid solutions for phased upgrades",
];
export function LegacySystemsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 3xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-32 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src={legacySystemImg}
              alt="Legacy intercom system maintenance"
              width={1200} // ✅ add this
              height={800} // ✅ and this
              className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl 2xl:max-w-4xl  h-auto object-cover rounded-xl"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="max-w-2xl lg:max-w-none xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
            <h2 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 3xl:text-5xl  font-semibold leading-tight sm:leading-tight lg:leading-snug 3xl:mb-2">
              Legacy Systems? No Problem.
            </h2>
            <p className="text-gray-600 text-base 2xl:text-lg 3xl:text-xl font-normal  mb-4 2xl:mb-6 3xl:mb-8 3xl:leading-relaxed">
              Not every building is ready for a full cloud migration — and
              that&apos;s okay. We also install, maintain, and service 2-wire
              and analog intercom systems from trusted brands like ABB, AiPhone
              and Comelit.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_12411)">
                      <path
                        d="M8 16.75C10.1217 16.75 12.1566 15.9071 13.6569 14.4069C15.1571 12.9066 16 10.8717 16 8.75C16 6.62827 15.1571 4.59344 13.6569 3.09315C12.1566 1.59285 10.1217 0.75 8 0.75C5.87827 0.75 3.84344 1.59285 2.34315 3.09315C0.842855 4.59344 0 6.62827 0 8.75C0 10.8717 0.842855 12.9066 2.34315 14.4069C3.84344 15.9071 5.87827 16.75 8 16.75ZM11.5312 7.28125L7.53125 11.2812C7.2375 11.575 6.7625 11.575 6.47188 11.2812L4.47188 9.28125C4.17813 8.9875 4.17813 8.5125 4.47188 8.22188C4.76562 7.93125 5.24062 7.92813 5.53125 8.22188L7 9.69063L10.4688 6.21875C10.7625 5.925 11.2375 5.925 11.5281 6.21875C11.8187 6.5125 11.8219 6.9875 11.5281 7.27812L11.5312 7.28125Z"
                        fill="#22C55E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_12411">
                        <path d="M0 0.75H16V16.75H0V0.75Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#626262] text-base 2xl:text-lg 3xl:text-xl font-normal 3xl:leading-relaxed ">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[#626262] text-base 2xl:text-lg 3xl:text-xl font-normal  3xl:leading-relaxed">
              We specialize in hybrid solutions that bring cloud convenience to
              legacy wiring — great for retrofits and phased upgrades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

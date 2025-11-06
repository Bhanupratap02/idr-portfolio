/** @format */
import Image from "next/image";
const CompleteSurveillance = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fsurveillance-camera%2Fcomplete_surveillance.png";
const camera = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fsurveillance-camera%2Fcamera.png";
const support = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fsurveillance-camera%2Fsupport.png";
export default function CompleteSurveillanceSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-36">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[125rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 3xl:px-28">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 3xl:gap-20 items-stretch h-full">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8  3xl:space-y-12">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-[2.86rem] 3xl:text-6xl font-medium  text-[#2E2E2E] leading-tight">
              Complete Surveillance Solutions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl text-[#626262] leading-relaxed 3xl:leading-loose">
              At IDR Technology Solutions, we design, install, support, and
              service modern surveillance camera systems for commercial,
              multifamily, and industrial spaces. Whether you&apos;re securing a
              single office or hundreds of units across multiple properties, we
              bring the expertise and tools to keep your site covered —
              literally.
            </p>

            {/* Features */}
            <div className="flex justify-center lg:justify-start gap-5 sm:gap-6 2xl:gap-8 3xl:gap-10">
              <div className="flex flex-col items-center justify-center text-center ">
                <Image
                  src={camera}
                  alt=""
                  width={72}
                  height={72}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18  mb-3 opacity-70 hover:opacity-100 transition-opacity duration-200"
                />

                <h3 className="text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-[#2E2E2E] mb-0">
                  Design & Install
                </h3>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <Image
                  src={support}
                  alt=""
                  width={72}
                  height={72}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18   mb-3 opacity-70 hover:opacity-100 transition-opacity duration-200"
                />

                <h3 className="text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-[#2E2E2E] mb-0">
                  Support & Service
                </h3>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center h-full w-full">
            <Image
              src={CompleteSurveillance}
              alt="Surveillance Solutions"
              width={1200}
              height={800}
              className="w-full h-full  rounded-xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

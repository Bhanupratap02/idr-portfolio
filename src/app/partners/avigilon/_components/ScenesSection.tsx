import Image from "next/image";
const imgImg5 =
  "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Favigilon%2Fimg2.png";
export function ScenesSection() {
  return (
    <section className="w-full bg-white py-12  md:py-16  lg:py-20  2xl:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28">
        {/* Header */}
        <div className="mb-10 text-center md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl  mb-4 md:mb-6 text-[#2e2e2e]">
            Scenes — Real-time Map + Identity Mustering
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-light text-gray-600">
            Interactive floor plans with live identity tracking and instant
            response controls
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 xl:p-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-18 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-7 xl:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl mb-3 sm:mb-4 md:mb-5 xl:mb-6 text-[#2e2e2e]">
                  See Everyone, Everywhere
                </h3>
                <p className="text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed font-light">
                  Customize shapes, colors and counts; drag identities between
                  areas. Hover over doors to see latest activity and take
                  immediate action.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4 md:space-y-4 xl:space-y-5">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3 md:h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 rounded-full bg-green-500 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed font-light">
                    Real-time occupancy tracking
                  </p>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3 md:h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 rounded-full bg-blue-500 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed font-light">
                    Instant door control and lockdown
                  </p>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3 md:h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 rounded-full bg-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed font-light">
                    Emergency mustering and roll call
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative mt-4 lg:mt-0">
              <div className="bg-white rounded-lg md:rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <Image
                    src={imgImg5}
                    alt="Scenes Interface"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    quality={90}
                    priority
                  />
                  <div className="absolute top-2 right-2 sm:top-2 sm:right-1 bg-red-500 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-6 md:py-1.5 rounded-full text-xs sm:text-sm md:text-base  shadow-md font-light">
                    Live
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

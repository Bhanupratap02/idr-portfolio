/** @format */
import Image from "next/image";
import trackRecord from "@/assets/services/intercom/track_record.png"
export function IntercomTrackRecordSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 3xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-32 items-center">
          {/* Left Content */}
          <div className="max-w-2xl lg:max-w-none xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 2xl:space-y-12">
              <h2 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold leading-tight sm:leading-tight lg:leading-snug">
                Proven Track Record
              </h2>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed">
                IDR has installed intercom systems in over 100 buildings across
                New York City, New Jersey, and Florida — from small walk-ups to
                large-scale luxury developments.
              </p>

              {/* Statistics */}
              <div className="flex flex-wrap gap-8 lg:gap-12 mb-12">
                <div className="text-center sm:text-left">
                  <div className="text-blue-600 text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                    100+
                  </div>
                  <div className="text-[#4B5563] text-base sm:text-lg lg:text-xl">
                    Properties Served
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-blue-600 text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                    22
                  </div>
                  <div className="text-[#4B5563] text-base sm:text-lg lg:text-xl">
                    States Covered
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-blue-600 text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                    24/7
                  </div>
                  <div className="text-[#4B5563] text-base sm:text-lg lg:text-xl">
                    Support Available
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed  ">
                We understand the unique demands of multifamily properties in
                urban and coastal environments, and we build systems that stand
                up to both.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={trackRecord}
              alt="IDR team working on intercom system"
              className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl h-auto object-cover rounded-xl "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

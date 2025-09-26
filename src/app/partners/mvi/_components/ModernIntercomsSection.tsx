/** @format */
import Image from "next/image";
import building1Img from "@/assets/partners/mvi/building1.png";
import building2Img from "@/assets/partners/mvi/building2.png";
import building3Img from "@/assets/partners/mvi/building3.png";

export default function ModernIntercomsSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28 bg-white">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-center text-gray-800 mb-10 sm:mb-12 md:mb-16 xl:mb-20 2xl:mb-24">
          Modern Intercoms for Every Building Type
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-16 2xl:gap-20 items-center">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 xl:gap-7 2xl:gap-8">
            <p className="text-sm sm:text-base md:text-lg  xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed font-light">
              Whether you manage multi-tenant residential towers, mixed-use
              campuses, or commercial buildings, MVI Systems provides flexible
              intercom solutions that scale with your needs.
            </p>
            <p className="text-sm sm:text-base md:text-lg  xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed font-light">
              Our IP-based infrastructure allows for seamless integration with
              existing systems while providing the reliability and security
              modern properties demand.
            </p>
            <div className="bg-gray-100 border-l-4 border-blue-600 p-4 sm:p-5 md:p-6 xl:p-7 2xl:p-8 rounded-r-lg">
              <p className="text-gray-800  text-sm sm:text-base md:text-lg lg:text-base  xl:text-lg 2xl:text-xl leading-relaxed font-medium">
                Deployed in high-rise buildings, affordable housing, and
                mixed-use sites across NY, NJ, and FL.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 xl:gap-5 2xl:gap-6">
            <div className="w-full">
              <div className="relative w-full h-48 sm:h-56 md:h-60 xl:h-65 2xl:h-75 rounded-lg overflow-hidden ">
                <Image
                  src={building1Img}
                  alt="Modern building with MVI intercom system - Professional IP video intercom installation"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:gap-5 2xl:gap-6">
              <div className="relative w-full h-36 sm:h-40 md:h-48 xl:h-56 2xl:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={building2Img}
                  alt="Residential building entrance with MVI intercom - Secure access control solution"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
              <div className="relative w-full h-36 sm:h-40 md:h-48 xl:h-56 2xl:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={building3Img}
                  alt="Apartment building lobby with modern intercom system - MVI Systems installation"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

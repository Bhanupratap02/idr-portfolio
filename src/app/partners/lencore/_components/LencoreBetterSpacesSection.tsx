/** @format */
import Image from "next/image";
const betterSpace = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flencore%2Fbetter_space.png";
export default function LencoreBetterSpacesSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28 bg-blue-900">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-12 xl:px-16 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-16 2xl:gap-20 items-center">
        {/* Content */}
        <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 xl:gap-10 2xl:gap-12">
          <h2 className="text-2xl sm:text-3xl md:text-[2rem] xl:text-[2.85rem] 2xl:text-[3.5rem] font-medium text-white">
            Lencore + IDR = Better Spaces
          </h2>

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 xl:gap-7 2xl:gap-8">
            <p className="text-sm sm:text-base md:text-lg  xl:text-xl 2xl:text-2xl text-blue-100 font-light leading-relaxed">
              A well-designed sound masking system helps improve productivity,
              reduces distractions, and enhances speech privacy. And Lencore
              doesn&apos;t just do one thing — it&apos;s a full-fledged
              platform.
            </p>

            <p className="text-sm sm:text-base md:text-lg  xl:text-xl 2xl:text-2xl text-blue-100 font-light leading-relaxed">
              When paired with IDR&apos;s expert deployment and documentation,
              you get a powerful, long-term solution. Need to retrofit a suite
              or spec a new construction project? We&apos;re here for both.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-none md:max-w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            <Image
              src={betterSpace}
              alt="Professional installation team working on Lencore sound masking system - Expert deployment and setup"
              className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

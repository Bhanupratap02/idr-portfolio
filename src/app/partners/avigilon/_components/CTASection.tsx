import Link from "next/link";

export function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#1e293b] to-[#1e3a8a] py-12  md:py-16  lg:py-20  2xl:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-26">
        {/* Title */}
        <div className="mb-10 text-center md:mb-10  xl:mb-12 2xl:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl mb-4 md:mb-6 text-white">
            Ready to Transform Your Security?
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-light  text-blue-100 leading-relaxed">
            Get a personalized demo and see how Unity Access + Alta can protect
            your organization.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 xl:gap-8 2xl:gap-10 justify-center items-center">
          <Link href={"/contact"} className="px-6 sm:px-8 md:px-10 py-3.5 sm:py-4.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors w-full sm:w-auto text-sm md:text-base xl:text-lg font-light cursor-pointer">
            Request Demo
          </Link>
          <Link href={"/contact"} className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#1e293b] transition-colors w-full sm:w-auto text-sm md:text-base xl:text-lg font-light cursor-pointer">
            Book On-site Evaluation
          </Link>
        </div>
      </div>
    </section>
  );
}

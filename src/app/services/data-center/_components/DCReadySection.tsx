/** @format */

export default function DCReadySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 2xl:py-28 bg-gray-800 text-white">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl
               font-medium  mb-6 sm:mb-8"
        >
          Ready for Infrastructure that Supports the Future?
        </h2>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
          Talk to IDR Technology Solutions today about your data center
          infrastructure needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 lg:mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-lg text-base sm:text-lg md:text-xl 2xl:text-2xl font-semibold transition-colors cursor-pointer">
            Get a Quote
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-lg text-base sm:text-lg md:text-xl 2xl:text-2xl font-semibold transition-colors cursor-pointer">
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

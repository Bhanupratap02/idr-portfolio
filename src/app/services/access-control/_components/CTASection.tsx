/** @format */

export default function CTASection() {
  return (
    <section className="bg-[#2E2E2E] px-4 sm:px-8 lg:px-16 xl:px-28 py-12 sm:py-16 lg:py-20 2xl:py-24 3xl:py-28">
      <div className="max-w-4xl lg:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto text-center">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium leading-snug mb-8 sm:mb-10 lg:mb-12">
          Ready to Upgrade Your Building&apos;s Security?
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 2xl:gap-8 3xl:gap-10 justify-center">
          <button
            className="bg-[#FFD700] text-[#2E2E2E] rounded-md 
              px-6 sm:px-8 lg:px-10 2xl:px-12 3xl:px-14
              py-3 sm:py-4 2xl:py-5 3xl:py-6
              text-base sm:text-lg 2xl:text-xl 3xl:text-2xl 
              font-medium shadow-lg hover:bg-yellow-500 transition-colors"
            aria-label="Get a Free Site Audit"
          >
            Get a Free Site Audit
          </button>
          <button
            aria-label="Talk to an Expert"
            className="bg-white text-[#2E2E2E] rounded-md 
              px-6 sm:px-8 lg:px-10 2xl:px-12 3xl:px-14
              py-3 sm:py-4 2xl:py-5 3xl:py-6
              text-base sm:text-lg 2xl:text-xl 3xl:text-2xl 
              font-medium shadow-lg hover:bg-gray-100 transition-colors"
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}

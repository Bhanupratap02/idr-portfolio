/** @format */

export default function CTASection() {
  return (
    <section className="bg-[#2E2E2E] px-4 sm:px-8 lg:px-16 xl:px-28 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug mb-8 sm:mb-10 lg:mb-12">
          Ready to Upgrade Your Building&apos;s Security?
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <button className="bg-[#FFD700] text-[#2E2E2E] rounded-md px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium shadow-lg hover:bg-yellow-500 transition-colors">
            Get a Free Site Audit
          </button>
          <button className="bg-white text-[#2E2E2E] rounded-md px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium shadow-lg hover:bg-gray-100 transition-colors">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}

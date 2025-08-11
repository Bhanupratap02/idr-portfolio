/** @format */

export default function CTASection() {
  return (
    <section className="bg-[#2E2E2E] px-4 lg:px-28 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl font-medium mb-12">
          Ready to Upgrade Your Building's Security?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#FFD700] text-[#2E2E2E] rounded-md px-8 py-4 text-lg font-normal shadow-lg hover:bg-yellow-500 transition-colors">
            Get a Free Site Audit
          </button>
          <button className="bg-white text-[#2E2E2E] rounded-md px-8 py-4 text-lg font-normal shadow-lg hover:bg-gray-100 transition-colors">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}

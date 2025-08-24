/** @format */
export function IntercomCTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-[52px]">
      <div className="container mx-auto px-[304px] text-center">
        <h2 className="text-white text-[36px] font-medium leading-[40px] mb-6">
          Ready to Upgrade Your Building's Intercom System?
        </h2>
        <p className="text-blue-100 text-[20px] font-normal leading-[150%] mb-12 max-w-[812px] mx-auto">
          Let's discuss how IDR Technology Solutions can enhance your property's
          security and convenience.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-[14px] rounded-lg text-[16px] font-normal hover:bg-gray-100 transition-colors">
            Schedule Consultation
          </button>
          <button className="border-2 border-white text-white px-[27px] py-[14px] rounded-lg text-[16px] font-normal hover:bg-white hover:text-blue-600 transition-colors">
            Call (555) 123-4567
          </button>
        </div>
      </div>
    </section>
  );
}

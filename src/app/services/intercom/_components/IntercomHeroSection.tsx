/** @format */

export function IntercomHeroSection() {
  return (
    <section className="relative min-h-[634px] bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <div className="relative z-10 container mx-auto px-[112px] py-[199px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-[554px]">
            <h1 className="text-white text-[48px] font-medium leading-[150%] mb-6">
              Multifamily Intercom Systems
            </h1>
            <p className="text-blue-100 text-[24px] font-normal leading-[33px] mb-12">
              Smart intercom solutions for multifamily properties, condos, and
              mixed-use buildings. Secure, seamless, and future-ready.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-[16px] font-normal hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-[16px] font-normal hover:bg-white hover:text-blue-600 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fe1001c0bf346a07df0600e2c62573234ff7242f?width=1144"
              alt="Multifamily Dwelling intercom hero"
              className="w-[572px] h-[397px] rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

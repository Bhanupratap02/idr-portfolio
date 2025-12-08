import Link from "next/link";

const WhatWeServe = () => {
  return (
    <section className="w-full py-10 sm:py-12 lg:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center text-rhombus-text-dark mb-10 sm:mb-12 lg:mb-16">
          What We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Charter Schools */}
          <div className="relative rounded-lg overflow-hidden shadow-lg h-56 sm:h-64">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/97e2c5041ab3892cea36c5db89bb7de62e2abe2d?width=789" 
              alt="Charter Schools" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
              <div className="w-8 h-6 sm:w-10 sm:h-8 mb-3 sm:mb-4">
                <svg viewBox="0 0 38 31" fill="currentColor" className="w-full h-full">
                  <path d="M19.793 1.06641C19.1602 0.644531 18.3398 0.644531 17.707 1.06641L9.74414 6.375H2.8125C1.25977 6.375 0 7.63477 0 9.1875V27.9375C0 29.4902 1.25977 30.75 2.8125 30.75H34.6875C36.2402 30.75 37.5 29.4902 37.5 27.9375V9.1875C37.5 7.63477 36.2402 6.375 34.6875 6.375H27.7559L19.793 1.06641Z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Charter Schools & Universities</h3>
              <p className="text-sm sm:text-base">Secure campus monitoring with vape detection and access control integration.</p>
            </div>
          </div>

          {/* Office Buildings */}
          <div className="relative rounded-lg overflow-hidden shadow-lg h-56 sm:h-64">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/a06a49c9b6a41365f24385d3ce5f64074f8139a8?width=789" 
              alt="Office Buildings" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
              <div className="w-5 h-6 sm:w-6 sm:h-8 mb-3 sm:mb-4">
                <svg viewBox="0 0 24 31" fill="currentColor" className="w-full h-full">
                  <path d="M3.46875 0.75C1.91602 0.75 0.65625 2.00977 0.65625 3.5625V27.9375C0.65625 29.4902 1.91602 30.75 3.46875 30.75H9.09375V26.0625C9.09375 24.5098 10.3535 23.25 11.9062 23.25C13.459 23.25 14.7188 24.5098 14.7188 26.0625V30.75H20.3438C21.8965 30.75 23.1562 29.4902 23.1562 27.9375V3.5625C23.1562 2.00977 21.8965 0.75 20.3438 0.75H3.46875Z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Office Buildings</h3>
              <p className="text-sm sm:text-base">Secure access points and monitor shared spaces with cloud-based efficiency.</p>
            </div>
          </div>

          {/* Condos & Multi-Tenant */}
          <div className="relative rounded-lg overflow-hidden shadow-lg h-56 sm:h-64">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/4a042ee93b1e8e4c8726bce6bb25f8322d00164b?width=789" 
              alt="Condos" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
              <div className="w-8 h-6 sm:w-10 sm:h-8 mb-3 sm:mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Condos & Multi-Tenant Housing</h3>
              <p className="text-sm sm:text-base">Enhance resident safety with doorway monitoring and package detection.</p>
            </div>
          </div>

          {/* Gyms & Fitness */}
          <div className="relative rounded-lg overflow-hidden shadow-lg h-56 sm:h-64">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/56114bcfc984c85ae45bb9fde094aae44c7b530d?width=789" 
              alt="Gyms" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
              <div className="w-8 h-6 sm:w-10 sm:h-8 mb-3 sm:mb-4">
                <svg viewBox="0 0 38 31" fill="currentColor" className="w-full h-full">
                  <path d="M5.625 4.5C5.625 3.46289 6.46289 2.625 7.5 2.625H9.375C10.4121 2.625 11.25 3.46289 11.25 4.5V13.875V17.625V27C11.25 28.0371 10.4121 28.875 9.375 28.875H7.5C6.46289 28.875 5.625 28.0371 5.625 27V23.25H3.75C2.71289 23.25 1.875 22.4121 1.875 21.375V17.625C0.837891 17.625 0 16.7871 0 15.75C0 14.7129 0.837891 13.875 1.875 13.875V10.125C1.875 9.08789 2.71289 8.25 3.75 8.25H5.625V4.5Z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Gyms & Fitness Facilities</h3>
              <p className="text-sm sm:text-base">Monitor 24/7 access and protect valuable equipment with smart alerts.</p>
            </div>
          </div>

          {/* Industrial Sites */}
          <div className="relative rounded-lg overflow-hidden shadow-lg h-56 sm:h-64">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/738449158cb04cc0515b14bd3b94a03052a01dcf?width=789" 
              alt="Industrial" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
              <div className="w-8 h-6 sm:w-9 sm:h-8 mb-3 sm:mb-4">
                <svg viewBox="0 0 35 31" fill="currentColor" className="w-full h-full">
                  <path d="M4.40625 2.625C3.36914 2.625 2.53125 3.46289 2.53125 4.5V18.5625V21.375V26.0625C2.53125 27.6152 3.79102 28.875 5.34375 28.875H29.7188C31.2715 28.875 32.5312 27.6152 32.5312 26.0625V18.5625V9.66797C32.5312 8.60156 31.3945 7.92773 30.457 8.43164L21.2812 13.3711V9.66797C21.2812 8.60156 20.1445 7.92773 19.207 8.43164L10.0312 13.3711V4.5C10.0312 3.46289 9.19336 2.625 8.15625 2.625H4.40625Z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Industrial Sites & Warehouses</h3>
              <p className="text-sm sm:text-base">Secure large facilities and monitor valuable inventory with AI detection.</p>
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="bg-blue-600 rounded-lg p-6 sm:p-8 shadow-lg flex flex-col justify-center items-center text-center text-white h-56 sm:h-64">
            <div className="w-8 h-10 sm:w-9 sm:h-12 mb-4 sm:mb-6">
              <svg viewBox="0 0 37 49" fill="currentColor" className="w-full h-full">
                <path d="M26.1562 36.5C27.0562 33.5094 28.9219 30.9594 30.7688 28.4187C31.2563 27.7531 31.7438 27.0875 32.2125 26.4125C34.0688 23.7406 35.1562 20.5063 35.1562 17.0094C35.1562 7.8875 27.7687 0.5 18.6562 0.5C9.54375 0.5 2.15625 7.8875 2.15625 17C2.15625 20.4969 3.24375 23.7406 5.1 26.4031C5.56875 27.0781 6.05625 27.7438 6.54375 28.4094C8.4 30.95 10.2656 33.5094 11.1562 36.4906H26.1562V36.5Z"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Have a Unique Space?</h3>
            <p className="text-sm sm:text-base mb-4 sm:mb-6">We design custom solutions for any environment.</p>
            <Link href={"/contact"} className="bg-white text-blue-600 px-5 sm:px-6 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeServe;
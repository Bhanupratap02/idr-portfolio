

const WhatWeDo = () => {
  return (
    <section className="px-6 lg:px-48 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-medium text-[#3D3D3D] mb-4">
            What We Do
          </h2>
          <p className="text-xl text-[#333] leading-relaxed max-w-4xl mx-auto">
            We provide complete low-voltage design and installation services,
            including: Whether you need a single install or a full-building
            deployment, our team handles every detail — design, installation,
            documentation, and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            {/* Smaller shadow behind the image */}
            <div className="w-72 h-72 rounded-xl bg-[#052557] bg-opacity-15 transform rotate-[-8deg] absolute top-3 left-8"></div>
            <div className="w-80 h-80 bg-gray-300 rounded-xl relative z-10">
              {/* Placeholder for security camera image */}
              <div className="w-full h-full bg-gray-400 rounded-xl flex items-center justify-center">
                <span className="text-gray-600 text-sm">
                  Security Camera Image
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Vertical scroll indicator line */}
            <div className="absolute left-0 top-0 w-2 h-full flex flex-col">
              <div className="w-full h-full bg-[#DEDEDE]"></div>
              <div className="w-2 h-12 bg-[#052557] rounded-full absolute top-0"></div>
            </div>

            {/* Services list with left margin for the scroll indicator */}
            <div className="ml-12 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xl text-[#151515] capitalize">
                  Access Control & Intercom Systems
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xl text-[#151515] capitalize">
                  Surveillance Cameras & Security Alarms
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xl text-[#151515] capitalize">
                  Audio/Visual Systems for Commercial & Education
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xl text-[#151515] capitalize">
                  Structured Cabling & Fiber Optics
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xl text-[#151515] capitalize">
                  IT Infrastructure & Wi-Fi
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xl text-[#151515] capitalize">
                  Data Center Builds
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xl text-[#151515] capitalize">
                  Smart Conference Rooms
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xl text-[#151515] capitalize">
                  Sound Masking & Speaker Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo


const CaseStudies = () => {
  return (
    <section className="px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-medium text-[#3D3D3D] text-center mb-12">
          Case Studies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Case Study 1 */}
          <div className="group">
            <div className="bg-gray-300 rounded-3xl h-64 mb-4 overflow-hidden">
              <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Case Study Image</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#111D15] mb-4 leading-relaxed">
              How IDR Eliminated Unauthorized Building Access for Fairstead.
            </h3>
            <p className="text-base text-[#666] mb-6 leading-relaxed">
              Fairstead, a leading national property management firm, partnered
              with IDR to address a widespread security concern across.......
            </p>
            <button className="flex items-center space-x-2 px-5 py-3 border border-[#2E2E2E] rounded-md hover:bg-[#2E2E2E] hover:text-white transition-colors">
              <span className="text-[#2E2E2E] group-hover:text-white">
                Read More
              </span>
              <svg
                className="w-5 h-5 text-[#2E2E2E] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l9.2-9.2M17 17V7H7"
                />
              </svg>
            </button>
          </div>

          {/* Case Study 2 */}
          <div className="group">
            <div className="bg-gray-300 rounded-3xl h-64 mb-4 overflow-hidden">
              <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Case Study Image</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#111D15] mb-4 leading-relaxed">
              Fixing It Right: IDR Rebuilds Two Failed Surveillance Installs
            </h3>
            <p className="text-base text-[#666] mb-6 leading-relaxed">
              Fairstead reached out to IDR after experiencing persistent issues
              with surveillance systems at two residential properties in
              Virginia and Florida..
            </p>
            <button className="flex items-center space-x-2 px-5 py-3 border border-[#2E2E2E] rounded-md hover:bg-[#2E2E2E] hover:text-white transition-colors group">
              <span className="text-[#2E2E2E] group-hover:text-white">
                Read More
              </span>
              <svg
                className="w-5 h-5 text-[#2E2E2E] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l9.2-9.2M17 17V7H7"
                />
              </svg>
            </button>
          </div>

          {/* Case Study 3 */}
          <div className="group">
            <div className="bg-gray-300 rounded-3xl h-64 mb-4 overflow-hidden">
              <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Case Study Image</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#111D15] mb-4 leading-relaxed">
              Modern Meets Legacy: How IDR Unified Cloud and 4-Wire Intercoms at
              The........
            </h3>
            <p className="text-base text-[#666] mb-6 leading-relaxed">
              Fairstead approached IDR with a unique challenge at their
              Chocolate Factory property in Brooklyn......
            </p>
            <button className="flex items-center space-x-2 px-5 py-3 border border-[#2E2E2E] rounded-md hover:bg-[#2E2E2E] hover:text-white transition-colors group">
              <span className="text-[#2E2E2E] group-hover:text-white">
                Read More
              </span>
              <svg
                className="w-5 h-5 text-[#2E2E2E] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l9.2-9.2M17 17V7H7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center space-x-2">
          <div className="w-8 h-2 bg-[#3D5AF1] rounded-full"></div>
          <div className="w-2 h-2 bg-[#E1E1E1] rounded-full"></div>
          <div className="w-2 h-2 bg-[#E1E1E1] rounded-full"></div>
          <div className="w-2 h-2 bg-[#E1E1E1] rounded-full"></div>
          <div className="w-2 h-2 bg-[#E1E1E1] rounded-full"></div>
          <div className="w-2 h-2 bg-[#E1E1E1] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies
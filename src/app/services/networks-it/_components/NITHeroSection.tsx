/** @format */

export default function NITHeroSection() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-r from-blue-900/10 to-purple-900/10 py-16 flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight text-gray-800">
              Networks & IT Infrastructure
            </h1>
            <h2 className="text-2xl font-normal text-gray-800 leading-relaxed">
              The Backbone of Every Smart Building
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Comprehensive network solutions that connect, secure, and optimize
              your building's technology ecosystem from foundation to cloud.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get Network Assessment
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0704fb8039254e6881ebea6562f7bc69%2Fea680369a44a470f8880c410fc3392a6?format=webp&width=800"
              alt="Network Infrastructure Server Room"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

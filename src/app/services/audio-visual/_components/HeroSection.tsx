/** @format */

export  default function  HeroSection() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-gray-800 to-transparent overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F0704fb8039254e6881ebea6562f7bc69%2Fc44c9c8aed8441aea7006aa2f79d05ad?format=webp&width=800"
          alt="Technology Meets Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
            Where Technology Meets Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
            Modern Surveillance & A/V Solutions for Every Space
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors">
            Schedule a Free Site Visit
          </button>
        </div>
      </div>
    </section>
  );
}

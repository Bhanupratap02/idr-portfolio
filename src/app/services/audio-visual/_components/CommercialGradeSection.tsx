/** @format */

export default function CommercialGradeSection() {
  const featuredProducts = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d70cebb3ef047e1a148aeb77b832e0f2d228ce02?width=1648",
      title: "Hidden Audio Solutions",
      description: "Speakers that blend with your interior design",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9da0de059bf31f0e68b08a72d8d4f687f60e9318?width=800",
      title: "Outdoor Entertainment",
      description: "Rock speakers and weatherproof solutions",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e48cbb9d940d9220bd6a99e40e5b1db10278382f?width=800",
      title: "Home Theater",
      description: "Cinematic experiences in your own space",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2145bbbe215346730c762af6d247bf871156e5d1?width=1648",
      title: "Smart Controls",
      description: "Intuitive interfaces for your entire home",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Commercial-Grade Performance for the Home
          </h2>
          <p className="text-xl text-gray-600">
            Style meets sound. Designed for how you live.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Large featured card */}
          <div className="lg:col-span-8 relative group">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
              <img
                src={featuredProducts[0].image}
                alt={featuredProducts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-medium mb-2">
                  {featuredProducts[0].title}
                </h3>
                <p className="text-gray-200">
                  {featuredProducts[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Smaller featured card */}
          <div className="lg:col-span-4 relative group">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
              <img
                src={featuredProducts[1].image}
                alt={featuredProducts[1].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-medium mb-2">
                  {featuredProducts[1].title}
                </h3>
                <p className="text-gray-200">
                  {featuredProducts[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom left card */}
          <div className="lg:col-span-4 relative group">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
              <img
                src={featuredProducts[2].image}
                alt={featuredProducts[2].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-medium mb-2">
                  {featuredProducts[2].title}
                </h3>
                <p className="text-gray-200">
                  {featuredProducts[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom right large card */}
          <div className="lg:col-span-8 relative group">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
              <img
                src={featuredProducts[3].image}
                alt={featuredProducts[3].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-medium mb-2">
                  {featuredProducts[3].title}
                </h3>
                <p className="text-gray-200">
                  {featuredProducts[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sonos Badge */}
        <div className="flex justify-center">
          <div className="bg-white rounded-full px-8 py-4 shadow-md">
            <span className="text-gray-900 font-medium">
              Authorized SONOS Integrator
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

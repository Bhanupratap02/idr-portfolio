import imgImg5 from "../../../../assets/partners/avigilon/img2.png";

export function ScenesSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#2e2e2e]">
            Scenes — Real-time Map + Identity Mustering
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600">
            Interactive floor plans with live identity tracking and instant response controls
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl mb-4 text-[#2e2e2e]">
                  See Everyone, Everywhere
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">
                  Customize shapes, colors and counts; drag identities between areas. Hover over doors to see latest activity and take immediate action.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
                  <p className="text-gray-600">Real-time occupancy tracking</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0" />
                  <p className="text-gray-600">Instant door control and lockdown</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0" />
                  <p className="text-gray-600">Emergency mustering and roll call</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={imgImg5.src} 
                    alt="Scenes Interface" 
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm opacity-75">
                    Live
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

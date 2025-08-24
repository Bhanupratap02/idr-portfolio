/** @format */

export default function IDRPortalSection() {
  const portalFeatures = [
    {
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M18 16H0V0h18v16z" stroke="#E5E7EB" />
          <path d="M2.77 6.99L0 11.74V3c0-1.1.9-2 2-2h3.67c.53 0 1.04.21 1.41.59L8 2.41c.37.38.88.59 1.41.59H13c1.1 0 2 .9 2 2v1h-10.5c-.71 0-1.37.38-1.73 1v.4zm.86.51c.18-.31.51-.5.86-.5H17c.36 0 .69.19.87.5s.19.69.01 1l-3.5 6c-.18.31-.51.5-.86.5H1c-.36 0-.69-.19-.87-.5s-.19-.69-.01-1l3.51-6z" />
        </svg>
      ),
      title: "View past service records",
      description:
        "Access photos, videos, and detailed reports of all service visits.",
    },
    {
      icon: (
        <svg
          className="w-4 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M2 0C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5h-4c-.55 0-1-.45-1-1V0H2zm6 0v4h4l-4-4zM3.5 8h5c.28 0 .5.22.5.5s-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm0 2h5c.28 0 .5.22.5.5s-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm0 2h5c.28 0 .5.22.5.5s-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z" />
        </svg>
      ),
      title: "Access documentation & serial numbers",
      description:
        "Find all your equipment details, manuals, and warranty information in one place.",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M11 10c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm5 6c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1v-1zm-5-2c-3.87 0-7 3.13-7 7v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-2.76 2.24-5 5-5s5 2.24 5 5v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-3.87-3.13-7-7-7z" />
        </svg>
      ),
      title: "Submit support tickets & upgrade requests",
      description: "Get help quickly with our streamlined ticketing system.",
    },
    {
      icon: (
        <svg
          className="w-4 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M6 0C4.69 0 3.58.83 3.17 2H2C.9 2 0 2.9 0 4v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-1.17C10.42.83 9.31 0 8 0H6zm2 2c.27 0 .52.11.71.29s.29.44.29.71-.11.52-.29.71S8.27 4 8 4s-.52-.11-.71-.29S7 3.27 7 3s.11-.52.29-.71S7.73 2 8 2zM2.25 8.5c0-.2.08-.39.22-.53s.33-.22.53-.22.39.08.53.22.22.33.22.53-.08.39-.22.53-.33.22-.53.22-.39-.08-.53-.22-.22-.33-.22-.53zM5.5 8h4c.28 0 .5.22.5.5s-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm-3.25 3.5c0-.2.08-.39.22-.53s.33-.22.53-.22.39.08.53.22.22.33.22.53-.08.39-.22.53-.33.22-.53.22-.39-.08-.53-.22-.22-.33-.22-.53zM5 11.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5z" />
        </svg>
      ),
      title: "Track warranties & RMAs",
      description:
        "Monitor warranty status and manage equipment returns effortlessly.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                Keep Control with the IDR Portal
              </h2>
              <p className="text-xl text-gray-600">
                Your private dashboard — organized, clutter-free, and always
                accessible.
              </p>
            </div>

            <div className="space-y-6">
              {portalFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Portal Dashboard Mockup */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-blue-600 px-4 py-4 flex items-center gap-2">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-blue-600 font-bold text-sm">IDR</span>
                </div>
                <span className="text-white font-medium">Portal Dashboard</span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Section Header */}
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-600 font-medium">
                    Conference Room Systems
                  </h3>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    Add New
                  </button>
                </div>

                {/* System Cards */}
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Executive Boardroom
                        </h4>
                        <p className="text-sm text-gray-500">
                          Last serviced: June 15, 2023
                        </p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        Active
                      </span>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Training Room A
                        </h4>
                        <p className="text-sm text-gray-500">
                          Last serviced: May 22, 2023
                        </p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        Active
                      </span>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Huddle Space 3
                        </h4>
                        <p className="text-sm text-gray-500">
                          Last serviced: July 3, 2023
                        </p>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                        Maintenance Due
                      </span>
                    </div>
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

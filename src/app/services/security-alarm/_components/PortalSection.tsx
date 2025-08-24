/** @format */

export default function PortalSection() {
  const portalFeatures = [
    {
      icon: (
        <svg
          className="w-4 h-4 text-[#0056B3]"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M2.34375 2.34375L1.28125 1.28125C0.809375 0.809375 0 1.14375 0 1.80938V5.25C0 5.66563 0.334375 6 0.75 6H4.19063C4.85938 6 5.19375 5.19063 4.72188 4.71875L3.75938 3.75625C4.84375 2.67188 6.34375 2 8 2C11.3125 2 14 4.6875 14 8C14 11.3125 11.3125 14 8 14C6.725 14 5.54375 13.6031 4.57188 12.925C4.11875 12.6094 3.49687 12.7188 3.17812 13.1719C2.85938 13.625 2.97187 14.2469 3.425 14.5656C4.725 15.4688 6.30312 16 8 16C12.4187 16 16 12.4187 16 8C16 3.58125 12.4187 0 8 0C5.79063 0 3.79063 0.896875 2.34375 2.34375ZM8 4C7.58437 4 7.25 4.33437 7.25 4.75V8C7.25 8.2 7.32812 8.39062 7.46875 8.53125L9.71875 10.7812C10.0125 11.075 10.4875 11.075 10.7781 10.7812C11.0687 10.4875 11.0719 10.0125 10.7781 9.72188L8.74687 7.69063V4.75C8.74687 4.33437 8.4125 4 7.99687 4H8Z" />
        </svg>
      ),
      title: "Service Request History",
      description:
        "Track all past and current service requests with detailed status updates.",
    },
    {
      icon: (
        <svg
          className="w-4 h-4 text-[#0056B3]"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8.00001 0C8.14376 0 8.28751 0.03125 8.41876 0.090625L14.3031 2.5875C14.9906 2.87813 15.5031 3.55625 15.5 4.375C15.4844 7.475 14.2094 13.1469 8.82501 15.725C8.30314 15.975 7.69689 15.975 7.17501 15.725C1.79064 13.1469 0.515639 7.475 0.500014 4.375C0.496889 3.55625 1.00939 2.87813 1.69689 2.5875L7.58439 0.090625C7.71251 0.03125 7.85626 0 8.00001 0Z" />
        </svg>
      ),
      title: "Warranty Tracking",
      description:
        "Easily monitor warranty status for all installed equipment.",
    },
    {
      icon: (
        <svg
          className="w-4 h-4 text-[#0056B3]"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M2 2C2 1.44687 1.55313 1 1 1C0.446875 1 0 1.44687 0 2V12.5C0 13.8813 1.11875 15 2.5 15H15C15.5531 15 16 14.5531 16 14C16 13.4469 15.5531 13 15 13H2.5C2.225 13 2 12.775 2 12.5V2ZM14.7063 4.70625C15.0969 4.31563 15.0969 3.68125 14.7063 3.29063C14.3156 2.9 13.6812 2.9 13.2906 3.29063L10 6.58437L8.20625 4.79063C7.81563 4.4 7.18125 4.4 6.79063 4.79063L3.29063 8.29062C2.9 8.68125 2.9 9.31563 3.29063 9.70625C3.68125 10.0969 4.31563 10.0969 4.70625 9.70625L7.5 6.91563L9.29375 8.70938C9.68437 9.1 10.3188 9.1 10.7094 8.70938L14.7094 4.70937L14.7063 4.70625Z" />
        </svg>
      ),
      title: "Live Service Updates",
      description:
        "Real-time updates on service appointments and system status.",
    },
    {
      icon: (
        <svg
          className="w-5 h-4 text-[#0056B3]"
          viewBox="0 0 18 16"
          fill="currentColor"
        >
          <path d="M2.77187 6.99375L0 11.7437V3C0 1.89688 0.896875 1 2 1H5.67188C6.20312 1 6.7125 1.20938 7.0875 1.58438L7.91563 2.4125C8.29062 2.7875 8.8 2.99688 9.33125 2.99688H13C14.1031 2.99688 15 3.89375 15 4.99687V5.99687H4.5C3.7875 5.99687 3.13125 6.375 2.77187 6.99062V6.99375ZM3.63438 7.49687C3.81563 7.1875 4.14375 7 4.5 7H17C17.3594 7 17.6875 7.19063 17.8656 7.50313C18.0438 7.81563 18.0437 8.19688 17.8625 8.50625L14.3625 14.5063C14.1844 14.8125 13.8562 15 13.5 15H1C0.640625 15 0.3125 14.8094 0.134375 14.4969C-0.04375 14.1844 -0.04375 13.8031 0.1375 13.4937L3.6375 7.49375L3.63438 7.49687Z" />
        </svg>
      ),
      title: "Device Documentation",
      description:
        "Access all system documentation, user manuals, and configuration details.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-[#2E2E2E] text-3xl lg:text-4xl font-medium">
              The IDR Portal: Total Visibility
            </h2>

            <p className="text-[#626262] text-xl leading-relaxed">
              Manage everything with real-time insights and full documentation
              access.
            </p>

            {/* Portal Features */}
            <div className="space-y-6">
              {portalFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-[#2E2E2E] text-base font-medium mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#626262] text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="bg-[#F3F4F6] border-l-4 border-[#0056B3] p-6 rounded-lg">
              <div className="space-y-4">
                <p className="text-[#626262] text-base leading-relaxed">
                  "The IDR Portal gives us complete visibility into our security
                  systems across multiple locations. It's become an essential
                  management tool for our security team."
                </p>
                <p className="text-[#2E2E2E] text-base font-medium">
                  — John Davis, Security Director at Meridian Properties
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Portal Image */}
          <div className="flex justify-center">
            <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b02234a35610504b720b79ba652f3b43826dc160?width=1184"
                alt="IDR Portal Dashboard"
                className="w-full h-auto max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

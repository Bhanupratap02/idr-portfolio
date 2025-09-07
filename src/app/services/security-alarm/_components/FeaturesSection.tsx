/** @format */
// prev 
import FeatureCard from "./FeatureCard";
  const features = [
    {
      icon: (
        <svg
          className="w-9 h-8 text-[#0056B3]"
          viewBox="0 0 34 31"
          fill="currentColor"
        >
          <path d="M18.75 2.62522C18.75 2.04515 18.4863 1.50022 18.0293 1.14866C17.5723 0.7971 16.9805 0.668194 16.418 0.808819L5.87695 3.44554C4.62891 3.75608 3.75 4.88108 3.75 6.17015V27.0002H1.875C0.837891 27.0002 0 27.8381 0 28.8752C0 29.9123 0.837891 30.7502 1.875 30.7502H5.625H16.875H18.75V28.8752V2.62522ZM15 15.7502C15 16.7873 14.373 17.6252 13.5938 17.6252C12.8145 17.6252 12.1875 16.7873 12.1875 15.7502C12.1875 14.7131 12.8145 13.8752 13.5938 13.8752C14.373 13.8752 15 14.7131 15 15.7502ZM20.625 8.25023H26.25V28.8752C26.25 29.9123 27.0879 30.7502 28.125 30.7502H31.875C32.9121 30.7502 33.75 29.9123 33.75 28.8752C33.75 27.8381 32.9121 27.0002 31.875 27.0002H30V8.25023C30 6.18187 28.3184 4.50022 26.25 4.50022H20.625V8.25023Z" />
        </svg>
      ),
      title: "Door & Window Contacts",
      description:
        "Secure entry points with reliable sensors that detect unauthorized access attempts.",
    },
    {
      icon: (
        <svg
          className="w-5 h-8 text-[#0056B3]"
          viewBox="0 0 20 31"
          fill="currentColor"
        >
          <path d="M10.0317 3.5625C10.0317 2.81658 10.3281 2.10121 10.8555 1.57376C11.3829 1.04632 12.0983 0.75 12.8442 0.75C13.5902 0.75 14.3055 1.04632 14.833 1.57376C15.3604 2.10121 15.6567 2.81658 15.6567 3.5625C15.6567 4.30842 15.3604 5.02379 14.833 5.55124C14.3055 6.07868 13.5902 6.375 12.8442 6.375C12.0983 6.375 11.3829 6.07868 10.8555 5.55124C10.3281 5.02379 10.0317 4.30842 10.0317 3.5625ZM8.06885 12.4277C8.01025 12.4512 7.95752 12.4746 7.89893 12.498L7.43018 12.7031C6.46924 13.1309 5.73096 13.9453 5.39697 14.9414L5.24463 15.3984C4.9165 16.3828 3.85596 16.9102 2.87158 16.582C1.88721 16.2539 1.35986 15.1934 1.68799 14.209L1.84033 13.752C2.5083 11.7539 3.98486 10.125 5.90674 9.26953L6.37549 9.06445C7.59424 8.52539 8.9126 8.24414 10.2485 8.24414C12.8618 8.24414 15.2173 9.81445 16.2192 12.2227L17.1216 14.3848L18.3755 15.0117C19.3013 15.4746 19.6763 16.5996 19.2134 17.5254C18.7505 18.4512 17.6255 18.8262 16.6997 18.3633L15.1294 17.584C14.5259 17.2793 14.0513 16.7754 13.7935 16.1484L13.231 14.8008L12.1001 18.6387L15.0005 21.8027C15.3169 22.1484 15.5396 22.5645 15.6567 23.0215L17.0044 28.418C17.2563 29.4199 16.647 30.4395 15.6392 30.6914C14.6313 30.9434 13.6177 30.334 13.3657 29.3262L12.0767 24.1641L7.93408 19.6465C7.06689 18.7031 6.74463 17.3848 7.07275 16.1484L8.06299 12.4277H8.06885ZM4.68213 24.0703L6.14697 20.4141C6.27002 20.5898 6.41064 20.7539 6.55713 20.918L8.94189 23.5195L8.09229 25.6406C7.95166 25.9922 7.74072 26.3145 7.47119 26.584L3.85596 30.1992C3.12354 30.9316 1.93408 30.9316 1.20166 30.1992C0.469238 29.4668 0.469238 28.2773 1.20166 27.5449L4.68213 24.0703Z" />
        </svg>
      ),
      title: "Motion Detectors & Glass Sensors",
      description:
        "Advanced detection technology that identifies movement and glass breakage in protected areas.",
    },
    {
      icon: (
        <svg
          className="w-7 h-8 text-[#0056B3]"
          viewBox="0 0 27 31"
          fill="currentColor"
        >
          <path d="M13.454 0.75C12.4168 0.75 11.579 1.58789 11.579 2.625V3.75C7.30161 4.61719 4.07896 8.40234 4.07896 12.9375V14.0391C4.07896 16.793 3.06528 19.4531 1.23716 21.5156L0.803566 22.002C0.311378 22.5527 0.194191 23.3438 0.493019 24.0176C0.791847 24.6914 1.46568 25.125 2.20396 25.125H24.704C25.4422 25.125 26.1102 24.6914 26.4149 24.0176C26.7196 23.3438 26.5965 22.5527 26.1043 22.002L25.6708 21.5156C23.8426 19.4531 22.829 16.7988 22.829 14.0391V12.9375C22.829 8.40234 19.6063 4.61719 15.329 3.75V2.625C15.329 1.58789 14.4911 0.75 13.454 0.75ZM16.1083 29.6543C16.8114 28.9512 17.204 27.9961 17.204 27H13.454H9.70396C9.70396 27.9961 10.0965 28.9512 10.7997 29.6543C11.5028 30.3574 12.4579 30.75 13.454 30.75C14.45 30.75 15.4051 30.3574 16.1083 29.6543Z" />
        </svg>
      ),
      title: "Panic Buttons & Keypads",
      description:
        "Instant alert systems and user-friendly control interfaces for quick emergency response.",
    },
    {
      icon: (
        <svg
          className="w-10 h-8 text-[#0056B3]"
          viewBox="0 0 38 31"
          fill="currentColor"
        >
          <path d="M31.2656 2.65434C35.0684 5.74809 37.5 10.4649 37.5 15.75C37.5 21.0352 35.0684 25.7579 31.2656 28.8457C30.6621 29.3379 29.7773 29.2442 29.2852 28.6407C28.793 28.0372 28.8867 27.1524 29.4902 26.6602C32.666 24.0821 34.6875 20.1563 34.6875 15.75C34.6875 11.3438 32.666 7.41801 29.4902 4.83403C28.8867 4.34184 28.7988 3.45707 29.2852 2.85356C29.7715 2.25004 30.6621 2.16215 31.2656 2.64848V2.65434ZM27.7207 7.01957C30.252 9.08207 31.875 12.2286 31.875 15.75C31.875 19.2715 30.252 22.418 27.7207 24.4805C27.1172 24.9727 26.2324 24.8789 25.7402 24.2754C25.248 23.6719 25.3418 22.7872 25.9453 22.295C27.8496 20.7481 29.0625 18.3926 29.0625 15.75C29.0625 13.1075 27.8496 10.752 25.9453 9.19926C25.3418 8.70707 25.2539 7.82231 25.7402 7.21879C26.2266 6.61528 27.1172 6.52739 27.7207 7.01371V7.01957ZM24.1758 11.3848C25.4355 12.4161 26.25 13.9864 26.25 15.75C26.25 17.5137 25.4355 19.084 24.1758 20.1153C23.5723 20.6075 22.6875 20.5137 22.1953 19.9102C21.7031 19.3067 21.7969 18.4219 22.4004 17.9297C23.0332 17.4141 23.4375 16.6289 23.4375 15.75C23.4375 14.8711 23.0332 14.086 22.4004 13.5645C21.7969 13.0723 21.709 12.1875 22.1953 11.584C22.6816 10.9805 23.5723 10.8926 24.1758 11.3789V11.3848ZM17.6426 2.7891C18.3164 3.09379 18.75 3.76176 18.75 4.50004V27C18.75 27.7383 18.3164 28.4063 17.6426 28.711C16.9688 29.0157 16.1777 28.8926 15.627 28.4004L7.72266 21.375H3.75C1.68164 21.375 0 19.6934 0 17.625V13.875C0 11.8067 1.68164 10.125 3.75 10.125H7.72266L15.627 3.09965C16.1777 2.60746 16.9688 2.49028 17.6426 2.7891Z" />
        </svg>
      ),
      title: "Sirens with Emergency Response",
      description:
        "Loud deterrent alarms with direct connection to monitoring centers for immediate action.",
    },
    {
      icon: (
        <svg
          className="w-6 h-8 text-[#0056B3]"
          viewBox="0 0 24 31"
          fill="currentColor"
        >
          <path d="M1.59375 4.5C1.59375 2.43164 3.27539 0.75 5.34375 0.75H18.4688C20.5371 0.75 22.2188 2.43164 22.2188 4.5V27C22.2188 29.0684 20.5371 30.75 18.4688 30.75H5.34375C3.27539 30.75 1.59375 29.0684 1.59375 27V4.5ZM9.09375 27C9.09375 27.5156 9.51562 27.9375 10.0312 27.9375H13.7812C14.2969 27.9375 14.7188 27.5156 14.7188 27C14.7188 26.4844 14.2969 26.0625 13.7812 26.0625H10.0312C9.51562 26.0625 9.09375 26.4844 9.09375 27ZM18.4688 4.5H5.34375V23.25H18.4688V4.5Z" />
        </svg>
      ),
      title: "App-based Arming/Disarming",
      description:
        "Control your security system remotely with our intuitive mobile application.",
    },
    {
      icon: (
        <svg
          className="w-9 h-8 text-[#0056B3]"
          viewBox="0 0 35 31"
          fill="currentColor"
        >
          <path d="M0.328125 8.25C0.328125 6.18164 2.00977 4.5 4.07812 4.5H19.0781C21.1465 4.5 22.8281 6.18164 22.8281 8.25V23.25C22.8281 25.3184 21.1465 27 19.0781 27H4.07812C2.00977 27 0.328125 25.3184 0.328125 23.25V8.25ZM33.0879 6.59766C33.6973 6.92578 34.0781 7.55859 34.0781 8.25V23.25C34.0781 23.9414 33.6973 24.5742 33.0879 24.9023C32.4785 25.2305 31.7402 25.1953 31.1602 24.8086L25.5352 21.0586L24.7031 20.502V19.5V12V10.998L25.5352 10.4414L31.1602 6.69141C31.7344 6.31055 32.4727 6.26953 33.0879 6.59766Z" />
        </svg>
      ),
      title: "Integrated Camera Trigger Alerts",
      description:
        "Security cameras that automatically record when alarms are triggered for visual verification.",
    },
  ];
    const additionalFeatures = [
      {
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/c06e7df1546911724056f963d8221b4a1e6850c3?width=725",
        title: "Mobile Control",
        desc1: "Arm/disarm your system from anywhere with our",
        desc2: "intuitive mobile application.",
      },
      {
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/55fb777a793c1c0673058178c4f37ff645f6bdf8?width=725",
        title: "Motion Triggers",
        desc1: "Cameras automatically record when motion is",
        desc2: "detected or alarms are triggered.",
      },
      {
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/cb4f601643649773cce397e02f7b1dd4e7701487?width=725",
        title: "24/7 Monitoring",
        desc1: "Professional monitoring stations ready to",
        desc2: "respond to alarms at any time.",
      },
    ];
export default function FeaturesSection() {


  return (
    <section className="bg-[#F8F8F8] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#2E2E2E] text-3xl sm:text-4xl  lg:text-4xl 2xl:text-5xl 3xl:text-6xl  font-semibold  mb-4">
            From Simple Alerts to Smart Integrations
          </h2>
          <p className="text-[#626262] text-lg xl:text-xl 2xl:text-2xl max-w-4xl mx-auto leading-relaxed">
            Whether cloud-based or on-premises, we tailor the perfect system for
            your needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Additional Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {additionalFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-[#F3F4F6] h-48 sm:h-60 md:h-64 lg:h-72 flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-6 xl:p-8">
                <h4 className="text-[#2E2E2E] text-lg lg:text-xl 3xl:text-2xl font-medium mb-2">
                  {feature.title}
                </h4>
                <p className="text-[#626262] text-sm lg:text-base 3xl:text-xl mb-2">
                  {feature.desc1}
                </p>
                <p className="text-[#626262] text-sm lg:text-base 3xl:text-xl">
                  {feature.desc2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

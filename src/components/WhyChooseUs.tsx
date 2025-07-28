
const WhyChooseUs = () => {
  return (
    <section className="bg-[#EFF5FF] px-4 sm:px-6 lg:px-32 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#3D3D3D] text-center mb-12 sm:mb-16 leading-tight">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm flex flex-col"
            >
              <div className="w-10 h-10 text-[#052557] mb-4">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-full h-full"
                >
                  <path d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#2E2E2E] mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

// Feature card data extracted for cleanliness
const features = [
  {
    icon: "M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z",
    title: "Certified & Trusted Teams",
    description:
      "Our work is performed by IDR-certified technicians and carefully vetted subcontractors who meet our exact standards.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Smart, Consultative Design",
    description:
      "Every project starts with thoughtful planning, needs analysis, and system design — not just labor.",
  },
  {
    icon: "M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z",
    title: "Code-Compliant, Standards",
    description:
      "We build to NEC, NFPA, IEEE, TIA, and BICSI standards across all installations.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Professional Project Management",
    description:
      "Every job is managed by a dedicated project manager to ensure clear communication, smooth coordination, and flawless delivery.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Integrated Technology Expertise",
    description:
      "We connect systems the right way: networking, A/V, access control, intercoms, surveillance, alarms, and more.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "True End-to-End Delivery",
    description:
      "From consulting and design to installation and long-term support — we handle every phase in-house.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Regional Reach, Local Focus",
    description:
      "Serving clients across New York, New Jersey, Florida, and surrounding regions with responsive, local service.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Clean Documentation & Labeling",
    description:
      "Labeled racks, drop maps, test reports, and laminated plans provided for every system.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "The IDR Portal",
    description:
      "A secure dashboard for every client — view service records, documentation, tickets, licensing, and more.",
  },
];
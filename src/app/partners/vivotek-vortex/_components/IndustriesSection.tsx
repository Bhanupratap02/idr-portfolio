/** @format */

export default function IndustriesSection() {
  const industries = [
    {
      title: "Multi-family Properties",
      description: "Secure residential communities with advanced monitoring",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/954c61e623563d2b0317b4c3ba24bf7c1df2aafd?width=683",
    },
    {
      title: "Office Campuses",
      description: "Comprehensive security for corporate environments",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/7fa45f15d10e393c5db02704e361cf8720f3f984?width=683",
    },
    {
      title: "Schools & Universities",
      description: "Safe learning environments with intelligent monitoring",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/95d414d717c2617def993415d72b7cd57f86f64c?width=683",
    },
    {
      title: "Warehouse & Industrial",
      description: "Protect assets and monitor operations",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3c960ec5b0c59c4d93d2dae4ef5c3371a31c1bf8?width=683",
    },
    {
      title: "Healthcare",
      description: "Patient safety and facility security",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9632d7f3bb25010b5f1137b3ae67248ad3dede57?width=683",
    },
    {
      title: "Retail",
      description: "Loss prevention and customer safety",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/35714de90184d490b77e05301c95554e5eba2ca0?width=683",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-20 xl:py-22  2xl:py-24 3xl:py-28">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 xl:mb-16 2xl:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-[#2E2E2E] mb-3 sm:mb-4 xl:mb-6 2xl:mb-8">
            Ideal For
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#626262] font-light">
            Industries we serve
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 3xl:gap-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] hover:from-[#F1F5F9] hover:to-[#E2E8F0] rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl 3xl:rounded-3xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-gray-200"
            >
              <div className="p-5 sm:p-6 md:p-7 lg:p-6 xl:p-8 2xl:p-9 3xl:p-10">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full md:h-44 lg:h-32 xl:h-48 2xl:h-58 3xl:h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl   leading-tight text-[#2E2E2E] mb-1">
                  {industry.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-[#626262]  font-light  leading-normal">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

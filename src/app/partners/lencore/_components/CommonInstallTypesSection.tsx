/** @format */

export default function CommonInstallTypesSection() {
  const installTypes = [
    {
      title: "Law Offices & Financial Institutions",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8d08f0e044fff15ea554a471314944b4c6f37922?width=683",
    },
    {
      title: "Hospitals & Healthcare Facilities",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/23d1ac585958d7a573890898219dfbc99a2fce1a?width=683",
    },
    {
      title: "Call Centers & Tech Hubs",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8a7ddf5790e3530b60f1ef5cc9f957600a10075c?width=683",
    },
    {
      title: "Government & Military Sites",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e95967de850a947df7ea037b864e7ab724f39600?width=683",
    },
    {
      title: "Education & Testing Centers",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/56f0d3bde41997de6c701f0db3a617ecbc391492?width=683",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-7">
        {/* Section Title */}
        <h2 className="text-4xl font-medium text-center text-gray-800 mb-16">
          Common Install Types
        </h2>

        {/* Install Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {installTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 text-center">
                  {type.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

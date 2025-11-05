/** @format */
import Image from "next/image";
const img_1 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faudio-visual%2Fcommercial_1.png";
const img_2 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faudio-visual%2Fcommercial_2.png";
const img_3 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faudio-visual%2Fcommercial_3.png";
const img_4 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faudio-visual%2Fcommercial_4.png";
const featuredProducts = [
  {
    image: img_1,
    title: "Hidden Audio Solutions",
    description: "Speakers that blend with your interior design",
    colSpan: "lg:col-span-8",
    titleSize: "text-2xl",
  },
  {
    image: img_2,
    title: "Outdoor Entertainment",
    description: "Rock speakers and weatherproof solutions",
    colSpan: "lg:col-span-4",
    titleSize: "text-xl",
  },
  {
    image: img_3,
    title: "Home Theater",
    description: "Cinematic experiences in your own space",
    colSpan: "lg:col-span-4",
    titleSize: "text-xl",
  },
  {
    image: img_4,
    title: "Smart Controls",
    description: "Intuitive interfaces for your entire home",
    colSpan: "lg:col-span-8",
    titleSize: "text-xl",
  },
];
export default function CommercialGradeSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-900 mb-4">
            Commercial-Grade Performance for the Home
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl  2xl:text-2xl text-gray-600">
            Style meets sound. Designed for how you live.
          </p>
        </div>

        {/* Featured Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={index} className={`${product.colSpan} relative group`}>
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[350px] sm:h-[400px] xl:h-[500px]  2xl:h-[600px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent
                  "
                />
              </div>
            </div>
          ))}
        </div>

        {/* Sonos Badge */}
        <div className="flex justify-center">
          <div className="bg-white rounded-full px-6 sm:px-8 lg:px-12 py-3 sm:py-4 shadow-md">
            <span className="text-gray-900 font-medium text-sm sm:text-base lg:text-lg 2xl:text-xl">
              Authorized SONOS Integrator
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

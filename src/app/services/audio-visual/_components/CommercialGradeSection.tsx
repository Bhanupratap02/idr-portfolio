/** @format */
import Image from "next/image";
import img_1 from "@/assets/services/audio-visual/commercial_1.png";
import img_2 from "@/assets/services/audio-visual/commercial_2.png";
import img_3 from "@/assets/services/audio-visual/commercial_3.png";
import img_4 from "@/assets/services/audio-visual/commercial_4.png";
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
          <p className="text-base sm:text-lg md:text-xl  2xl:text-2xl text-gray-600">
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
                />
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent" /> */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent
                  "
                />

                {/* Content */}
                {/* <div className="absolute bottom-6 left-6 text-white">
                  <h3 className={`${product.titleSize} font-medium mb-2`}>
                    {product.title}
                  </h3>
                  <p className="text-gray-200">{product.description}</p>
                </div> */}
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

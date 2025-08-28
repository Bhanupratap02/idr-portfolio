/** @format */
import Image from "next/image";
import img_1 from "@/assets/services/audio-visual/commercial_1.png";
import img_2 from "@/assets/services/audio-visual/commercial_2.png";
import img_3 from "@/assets/services/audio-visual/commercial_3.png";
import img_4 from "@/assets/services/audio-visual/commercial_4.png";
export default function CommercialGradeSection() {
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Commercial-Grade Performance for the Home
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Style meets sound. Designed for how you live.
          </p>
        </div>

        {/* Featured Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={index} className={`${product.colSpan} relative group`}>
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[350px] sm:h-[400px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className={`${product.titleSize} font-medium mb-2`}>
                    {product.title}
                  </h3>
                  <p className="text-gray-200">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
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

/** @format */

const feature1Img = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Favigilon%2Ffeature1.png";
const feature2Img = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Favigilon%2Ffeature2.png";
const feature3Img = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Favigilon%2Ffeature3.png";
import Image from "next/image";

export default function AvigilonGallery() {
  const images = [feature1Img, feature2Img, feature3Img];

  return (
    <section className="bg-white  py-12  md:py-16  lg:py-20  2xl:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-26">
        {/* Modern Grid Layout updated */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={image}
                  alt={`Avigilon security system ${index + 1}`}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Subtle Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

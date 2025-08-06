"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageType = {
  src: string;
  alt: string;
};

export default function ImageGallery({ images }: { images: ImageType[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-cream py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* Top ellipse */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-14 bg-cream-light rounded-full -z-10"></div>

          {/* Images grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {images.slice(0, 3).map((img, i) => (
              <div
                key={i}
                className="bg-cream-light aspect-[451/434] rounded overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Bottom ellipse */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-14 bg-cream-light rounded-full -z-10"></div>
        </div>

        {/* Carousel controls - mobile */}
        <div className="md:hidden flex items-center justify-center mt-12 space-x-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
          >
            <ChevronLeft className="w-4 h-8 text-[#D5EBD4]" />
          </button>

          <div className="flex items-center space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-navy" : "bg-navy opacity-20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
          >
            <ChevronRight className="w-4 h-8 text-navy" />
          </button>
        </div>
      </div>
    </section>
  );
}

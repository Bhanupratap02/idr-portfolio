"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface ImageType {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageType[];
}
const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // // Sample images matching your Figma design
  // const images = [
  //   {
  //     src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  //     alt: "Red credit card"
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  //     alt: "Audio mixing console"
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  //     alt: "Security cameras"
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  //     alt: "Business analytics"
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  //     alt: "Office meeting"
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  //     alt: "Portrait"
  //   }
  // ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % images.length;
      result.push({ ...images[index], originalIndex: index });
    }
    return result;
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop Layout - Curved Screen Design */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Three images forming concave lens shape */}
            <div className="flex items-center justify-center mb-12 relative">
              {getVisibleImages().map((img, i) => (
                <div
                  key={`${img.originalIndex}-${i}`}
                  className="relative overflow-hidden shadow-xl transition-all duration-500"
                  style={{
                    width: '350px', // Increased width for better desktop coverage
                    height: i === 1 ? '255px' : '280px', // Middle image matches inner height of rotated sides
                    transform: i === 0 
                      ? 'perspective(800px) rotateY(25deg) translateX(30px)' // Left - rotated inward
                      : i === 2 
                      ? 'perspective(800px) rotateY(-25deg) translateX(-30px)' // Right - rotated inward
                      : 'translateZ(20px)', // Center - slightly forward, reduced from 30px
                    borderRadius: '0px',
                    zIndex: i === 1 ? 20 : 10
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-center space-x-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-gray-200"
                aria-label="Previous images"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
              </button>

              {/* Dots indicator */}
              <div className="flex items-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-8 h-2 bg-blue-600"
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-gray-200"
                aria-label="Next images"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          <div className="relative">
            <div className="flex items-end justify-center gap-1 mb-8 relative">
              {getVisibleImages().map((img, i) => (
                <div
                  key={`${img.originalIndex}-${i}`}
                  className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${
                    i === 1 ? 'w-64 h-64' : 'w-56 h-52'
                  }`}
                  style={{
                    transform: i === 0 
                      ? 'translateY(40px)' 
                      : i === 2 
                      ? 'translateY(40px)' 
                      : 'translateY(0px)',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border border-gray-200"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>

              <div className="flex items-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-6 h-2 bg-blue-600"
                        : "w-2 h-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border border-gray-200"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative">
            <div className="w-full h-72 overflow-hidden rounded-2xl shadow-xl bg-white">
              <img
                src={images[currentSlide].src}
                alt={images[currentSlide].alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-center mt-8 space-x-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border border-gray-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>

              <div className="flex items-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-6 h-2 bg-blue-600"
                        : "w-2 h-2 bg-gray-300"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border border-gray-200"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
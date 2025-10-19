




/** @format */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { caseStudiesHomePage as caseStudies } from "@/data/caseStudiesData";
import Link from "next/link";

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true); // ✅ Enabled autoplay by default
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  

  // Determine number of cards per slide based on screen width
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 768) setCardsPerSlide(1);
      else if (window.innerWidth < 1024) setCardsPerSlide(2);
      else setCardsPerSlide(3);
    };
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(caseStudies.length / cardsPerSlide);

  // ✅ Auto-play functionality with pause on hover
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000); // autoplay interval = 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (i: number) => setCurrentSlide(i);

  return (
    <section
      className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20"

    >
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[110rem] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-primary font-bold text-center mb-12">
          Case Studies
        </h2>

        {/* Main carousel */}
        <div className="relative px-8 sm:px-12 md:px-16"       
        onMouseEnter={() => setIsAutoPlay(false)} // ⏸ Pause autoplay on hover
      onMouseLeave={() => setIsAutoPlay(true)} // ▶️ Resume autoplay on leave 
      >
          <div className="relative">
            {/* Navigation */}
            <button
              onClick={() => {
                setIsAutoPlay(false);
                prevSlide();
              }}
              className="absolute left-0 top-32 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#052557] hover:text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => {
                setIsAutoPlay(false);
                nextSlide();
              }}
              className="absolute right-0 top-32 -translate-y-1/2 translate-x-4 sm:translate-x-8 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#052557] hover:text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div
                      className={`grid gap-6 lg:gap-10 3xl:gap-12 ${
                        cardsPerSlide === 1
                          ? "grid-cols-1"
                          : cardsPerSlide === 2
                          ? "grid-cols-1 md:grid-cols-2"
                          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      }`}
                    >
                      {caseStudies
                        .slice(
                          slideIndex * cardsPerSlide,
                          slideIndex * cardsPerSlide + cardsPerSlide
                        )
                        .map((item) => (
                          <div
                            key={item.id}
                            className="group cursor-pointer transition-all duration-300 p-2"
                          >
                            <div className="transform transition-transform duration-300 group-hover:scale-[1.02]">
                              <div className="relative rounded-3xl overflow-hidden  h-64  2xl:h-[280px] 3xl:h-[350px]  mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                                <Image
                                  src={item.image}
                                  alt={`Case Study ${item.id}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  priority={slideIndex === currentSlide}
                                  quality={100}
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                              </div>
                              <h3 className="text-lg 2xl:text-xl font-semibold text-[#111D15] mb-2.5 leading-relaxed group-hover:text-[#052557] transition-colors duration-300 line-clamp-2">
                               {item.title}
                              </h3>
                              <p className="text-sm md:text-base 2xl:text-lg text-gray-700 mb-5 leading-relaxed line-clamp-3 font-light">
                               {item.desc}
                              </p>
                              <Link href={item.url} className="inline-flex items-center space-x-2 px-5 py-3 border border-[#2E2E2E] rounded-md hover:bg-[#052557] hover:border-[#052557] hover:text-white transition-all duration-300 cursor-pointer">
                                <span>Read More</span>
                                <svg
                                  className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 17l9.2-9.2M17 17V7H7"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-3 bg-[#052557]"
                  : "w-3 h-3 bg-[#E1E1E1] hover:bg-[#052557] hover:bg-opacity-50"
              }`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="text-center mt-4 text-sm text-[#666]">
          {currentSlide + 1} of {totalSlides}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

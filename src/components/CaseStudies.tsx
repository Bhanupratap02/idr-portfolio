/** @format */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import caseStudy1 from "@/assets/case_study_1.png";
import caseStudy2 from "@/assets/case_study_2.png";
import caseStudy3 from "@/assets/case_study_3.png";

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  const caseStudies = [
    {
      id: 1,
      title: "How IDR Eliminated Unauthorized Building Access for Fairstead.",
      desc: "Fairstead, a leading national property management firm, partnered with IDR to address a widespread security concern across.......",
      image: caseStudy1,
    },
    {
      id: 2,
      title: "Fixing It Right: IDR Rebuilds Two Failed Surveillance Installs",
      desc: "Fairstead reached out to IDR after experiencing persistent issues with surveillance systems at two residential properties in Virginia and Florida..",
      image: caseStudy2,
    },
    {
      id: 3,
      title:
        "Modern Meets Legacy: How IDR Unified Cloud and 4-Wire Intercoms at The........",
      desc: "Fairstead approached IDR with a unique challenge at their Chocolate Factory property in Brooklyn......",
      image: caseStudy3,
    },
    {
      id: 4,
      title:
        "No Reader, No Problem: Elevator Access Solved with Kisi Mobile Control",
      desc: "Robinhood Foundation was looking to secure elevator access in their NYC office — but faced a unique constraint......",
      image: caseStudy1,
    },
    {
      id: 5,
      title:
        "One System, Many Doors: How IDR Unified Intercom Access for Douglas Elliman",
      desc: "Douglas Elliman approached IDR to design an intercom system that could handle a complex mix of access points.......",
      image: caseStudy2,
    },
    {
      id: 6,
      title: "When Technology Moved Forward, So Did We: A Phased Wi-Fi Upgrade",
      desc: "IDR had originally installed a cost-effective wireless solution for Central Queens Academy using Cisco Wireless N/AC access points, with....",
      image: caseStudy3,
    },
    {
      id: 7,
      title:
        "Upway Upgrading Loitering Deterrence with a Custom Outdoor Annunciator",
      desc: "Upway installed a Rhombus camera system with security monitoring to keep their outdoor areas secure. But they ran into a snag........",
      image: caseStudy1,
    },
    {
      id: 8,
      title:
        "A Smarter Training Room: Custom Teams Integration for MTF Biologics",
      desc: "Create a seamless Microsoft Teams-based hybrid training room with distributed AV, zone-based audio, and advanced control — all.....",
      image: caseStudy2,
    },
    {
      id: 9,
      title:
        "Enterprise-Grade Cleanups: How IDR Took Over Cabling for Oppenheimer Funds",
      desc: "Full infrastructure overhaul with ongoing overnight cutovers and enterprise-grade upgrades Oppenheimer Funds approached IDR...",
      image: caseStudy3,
    },
    {
      id: 10,
      title: "Burns Engineering",
      desc: "Relationship Scope: Nationwide low voltage partnership across 7+ locations Services: Kisi access control, structured cabling, technical.......",
      image: caseStudy1,
    },
    {
      id: 11,
      title: "Scaling Security with Fairstead",
      desc: "As a national real estate investment firm with a wide range of properties — from landmark Harlem developments to multi-building Florida....",
      image: caseStudy2,
    },
    {
      id: 12,
      title: "Peninsula Preparatory Academy",
      desc: "Peninsula Preparatory Academy Charter School (PPA) is a K-5 school in Far Rockaway, NY focused on academic excellence and whole......",
      image: caseStudy3,
    },
    {
      id: 13,
      title:
        "Securing Lauderhill Point Apartments – A Resilient Security Overhaul for Fairstead",
      desc: "Fairstead is a national real estate developer and operator with a focus on sustainability, safety, and community-driven housing.......",
      image: caseStudy1,
    },
  ];

  // Update cards per slide based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1); // small screens
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2); // medium screens
      } else {
        setCardsPerSlide(3); // large screens and above
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  // Calculate total slides based on cards per slide
  const totalSlides = Math.ceil(caseStudies.length / cardsPerSlide);

  // Auto-play functionality
  // useEffect(() => {
  //   if (!isAutoPlay) return;

  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % totalSlides);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [isAutoPlay, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[110rem] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl 3xl:text-7xl font-medium text-[#3D3D3D] text-center mb-12">
            Case Studies
          </h2>

          {/* Carousel Container with proper spacing for arrows */}
          <div className="relative px-8 sm:px-12 md:px-16">
            <div
              className="relative"
              // onMouseEnter={() => setIsAutoPlay(false)}
              // onMouseLeave={() => setIsAutoPlay(true)}
            >
              {/* Navigation Arrows - positioned relative to image center */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-32 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#052557] hover:text-white group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-32 -translate-y-1/2 translate-x-4 sm:translate-x-8 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#052557] hover:text-white group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Cards Container with Animation and proper overflow handling */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
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
                          .map((item, idx) => (
                            <div
                              key={item.id}
                              className="group cursor-pointer transition-all duration-300 p-2" // Added padding to prevent overflow
                            >
                              <div className="transform transition-transform duration-300 group-hover:scale-102 origin-center">
                                <div className="relative rounded-3xl overflow-hidden h-64 mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                                  <Image
                                    src={item.image}
                                    alt={`Case Study ${item.id}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={slideIndex === currentSlide}
                                    quality={100}
                                    className="object-cover transition-transform duration-300"
                                  />
                                  {/* Overlay on hover */}
                                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </div>

                                <h3 className="text-lg font-semibold text-[#111D15] mb-4 leading-relaxed group-hover:text-[#052557] transition-colors duration-300">
                                  {item?.title?.length > 60 ?
                                    `${item.title.substring(0, 60)}...`
                                    : item?.title}
                                </h3>
                                <p className="text-base text-[#666] mb-6 leading-relaxed">
                                  {item?.desc?.length > 120
                                    ? `${item.desc.substring(0, 120)}...`
                                    : item?.desc}
                                </p>
                                <button className="group/btn flex items-center space-x-2 px-5 py-3 border border-[#2E2E2E] rounded-md hover:bg-[#052557] hover:border-[#052557] hover:text-white transition-all duration-300">
                                  <span className="text-[#2E2E2E] group-hover/btn:text-white">
                                    Read More
                                  </span>
                                  <svg
                                    className="w-5 h-5 text-[#2E2E2E] group-hover/btn:text-white transform group-hover/btn:translate-x-1 transition-all duration-300"
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
                                </button>
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

          {/* Carousel Indicators */}
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
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-sm text-[#666]">
            {currentSlide + 1} of {totalSlides}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;

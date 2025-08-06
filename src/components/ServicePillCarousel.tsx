'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const services = [
  'Surveillance Camera Systems',
  'Multifamily Intercom Systems',
  'Access Control Systems',
  'Security Alarm Systems',
  'Networks & IT Infrastructure',
  'Audio / Visual Systems',
  'Conference Room Solutions',
  'Smart Home Integration',
];

export default function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative mt-8 w-full max-w-7xl mx-auto px-4">
      {/* Scroll Left Button */}
      <button
        className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 md:p-3"
        onClick={() => scroll('left')}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable Pills */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide px-12"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-shrink-0 whitespace-nowrap px-6 py-3 bg-white text-black rounded-xl text-sm sm:text-base font-medium shadow-md min-w-max"
          >
            {service}
          </div>
        ))}
      </div>

      {/* Scroll Right Button */}
      <button
        className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 md:p-3"
        onClick={() => scroll('right')}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

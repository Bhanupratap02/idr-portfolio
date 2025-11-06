import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePillCarousel from "@/components/ServicePillCarousel";
import Image from "next/image";
import Link from "next/link";

const workSections = [
  {
    id: "access-control",
    url: "/services/access-control",
    title: "Access Control Systems",
    icon: (
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7  xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 text-blue-600"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_1_5490)">
          <path
            d="M21 22C27.075 22 32 17.075 32 11C32 4.925 27.075 0 21 0C14.925 0 10 4.925 10 11C10 12.1687 10.1813 13.3 10.5188 14.3562L0.4375 24.4375C0.15625 24.7188 0 25.1 0 25.5V30.5C0 31.3312 0.66875 32 1.5 32H6.5C7.33125 32 8 31.3312 8 30.5V28H10.5C11.3313 28 12 27.3312 12 26.5V24H14.5C14.9 24 15.2812 23.8438 15.5625 23.5625L17.6437 21.4813C18.7 21.8188 19.8312 22 21 22ZM23.5 6C24.163 6 24.7989 6.26339 25.2678 6.73223C25.7366 7.20107 26 7.83696 26 8.5C26 9.16304 25.7366 9.79893 25.2678 10.2678C24.7989 10.7366 24.163 11 23.5 11C22.837 11 22.2011 10.7366 21.7322 10.2678C21.2634 9.79893 21 9.16304 21 8.5C21 7.83696 21.2634 7.20107 21.7322 6.73223C22.2011 6.26339 22.837 6 23.5 6Z"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    images: [
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/AccessControl1.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/AccessControl2.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/AccessControl3.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/AccessControl4.jpg",
    ],
  },
  {
    id: "audio-visual",
    url: "/services/audio-visual",
    title: "Audio / Visual Systems",
    icon: (
      <svg
        className="w-8 h-6 sm:w-9 sm:h-7 xl:w-10 xl:h-8 2xl:w-11 2xl:h-9 3xl:w-12 3xl:h-10 text-blue-600"
        viewBox="0 0 40 32"
        fill="none"
      >
        <path d="M40 32H0V0H40V32Z" stroke="#E5E7EB" />
        <path
          d="M33.35 2.03061C37.4062 5.33061 40 10.3619 40 15.9994C40 21.6369 37.4062 26.6744 33.35 29.9681C32.7062 30.4931 31.7625 30.3931 31.2375 29.7494C30.7125 29.1056 30.8125 28.1619 31.4562 27.6369C34.8438 24.8869 37 20.6994 37 15.9994C37 11.2994 34.8438 7.11186 31.4562 4.35561C30.8125 3.83061 30.7188 2.88686 31.2375 2.24311C31.7562 1.59936 32.7062 1.50561 33.35 2.02436V2.03061ZM29.5688 6.68686C32.2687 8.88686 34 12.2431 34 15.9994C34 19.7556 32.2687 23.1119 29.5688 25.3119C28.925 25.8369 27.9812 25.7369 27.4562 25.0931C26.9312 24.4494 27.0312 23.5056 27.675 22.9806C29.7062 21.3306 31 18.8181 31 15.9994C31 13.1806 29.7062 10.6681 27.675 9.01186C27.0312 8.48686 26.9375 7.54311 27.4562 6.89936C27.975 6.25561 28.925 6.16186 29.5688 6.68061V6.68686ZM25.7875 11.3431C27.1313 12.4431 28 14.1181 28 15.9994C28 17.8806 27.1313 19.5556 25.7875 20.6556C25.1438 21.1806 24.2 21.0806 23.675 20.4369C23.15 19.7931 23.25 18.8494 23.8937 18.3244C24.5687 17.7744 25 16.9369 25 15.9994C25 15.0619 24.5687 14.2244 23.8937 13.6681C23.25 13.1431 23.1562 12.1994 23.675 11.5556C24.1937 10.9119 25.1438 10.8181 25.7875 11.3369V11.3431ZM18.8188 2.17436C19.5375 2.49936 20 3.21186 20 3.99936V27.9994C20 28.7869 19.5375 29.4994 18.8188 29.8244C18.1 30.1494 17.2563 30.0181 16.6688 29.4931L8.2375 21.9994H4C1.79375 21.9994 0 20.2056 0 17.9994V13.9994C0 11.7931 1.79375 9.99936 4 9.99936H8.2375L16.6688 2.50561C17.2563 1.98061 18.1 1.85561 18.8188 2.17436Z"
          fill="currentColor"
        />
      </svg>
    ),
    images: [
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/AudioVisual1.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/AudioVisual2.png",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/AudioVisual3.png",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/AudioVisual4.png",
    ],
  },
  {
    id: "conference-room",
    url: "/services/conference-room",
    title: "Conference Room Solutions",
    images: [
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/ConferenceRoom1.png",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/ConferenceRoom2.jpeg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/ConferenceRoom3.jpeg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/ConferenceRoom4.png",
    ],
  },
  {
    id: "data-center",
    url: "/services/data-center",
    title: "Data Center Infrastructure",
    images: [
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/DataCenter1.jpeg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/DataCenter2.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/DataCenter3.jpeg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/DataCenter4.jpg",
    ],
  },
  {
    id: "networks-it",
    url: "/services/networks-it",
    title: "Networks & IT Infrastructure",
    images: [
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/NetworkIT1.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/NetworkIT2.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/NetworkIT3.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/NetworkIT4.jpg",
    ],
  },
  {
    id: "multifamily",
    url: "/services/intercom",
    title: "Multifamily Intercom Systems",
    images: [
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/Intercom1.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/Intercom2.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/Intercom3.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/Intercom4.jpg",
    ],
  },
  {
    id: "structured-cabling",
    url: "/services/structured-cabling",
    title: "Structured Cabling",
    images: [
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/StructuredCabling1.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/StructuredCabling2.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/StructuredCabling3.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/StructuredCabling4.jpg",
    ],
  },
  {
    id: "surveillance",
    url: "/services/surveillance-camera",
    title: "Surveillance Camera Systems",
    images: [
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/Surveillance1.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/Surveillance2.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/Surveillance3.jpg",
      "https://idr-portfolio-storage.s3.amazonaws.com/assets/portfolio/Surveillance4.jpg",
    ],
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
{/* Hero Section */}
<section className="relative">
  {/* Hero Section with Background */}
  <div
    className="min-h-[400px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[480px] 2xl:min-h-[550px] 3xl:min-h-[600px] bg-gray-900 bg-cover bg-center relative"
    style={{
      backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/2550e5a318e81a82bc5289863c36cf57d528ab64?width=2896')`,
    }}
  >
    {/* Centered Text Section */}
    <div className="text-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-8 sm:pt-10 lg:pt-12 xl:pt-16 2xl:pt-20 3xl:pt-24 pb-12 sm:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28 3xl:pb-32">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl  font-medium mb-2 sm:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6">
        Our Work
      </h1>
      <p className="text-[#B4B4B4] text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light leading-relaxed max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto px-2 sm:px-0">
      From classrooms to high-rises, IDR designs and installs systems that power safety, connectivity, and communication. Every project reflects our commitment to expert engineering, white-glove service, and lasting results. Browse our portfolio to see how we bring innovation to life across industries.
      </p>
    </div>

    {/* Carousel anchored to the bottom */}
    <div className="absolute w-full bottom-3 sm:bottom-4 lg:bottom-6 xl:bottom-8 2xl:bottom-10 3xl:bottom-12 left-0 right-0 px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 pb-2 sm:pb-4 lg:pb-6 xl:pb-8 2xl:pb-10">
      <ServicePillCarousel />
    </div>
  </div>
</section>


      {/* Work Sections */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 3xl:px-32">
        <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] 3xl:max-w-[120rem] mx-auto space-y-12 sm:space-y-16 lg:space-y-20 xl:space-y-24 2xl:space-y-28 3xl:space-y-32">
          {workSections.map((section, index) => (
            <div key={section.id} className="space-y-8 sm:space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16 3xl:space-y-20">
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 lg:gap-8">
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 3xl:gap-8">
                  {section.icon}
                  <h2 className="text-[#2E2E2E] text-lg sm:text-xl md:text-2xl xl:text-3xl  2xl:text-4xl 3xl:text-5xl  font-normal">
                    {section.title}
                  </h2>
                </div>
                <Link href={section.url}>
                  <Button
                  variant="outline"
                  className="border-[#2E2E2E] text-[#2E2E2E] hover:bg-[#2E2E2E] hover:text-white text-sm sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl  px-4 sm:px-6 lg:px-8 xl:px-14 2xl:px-16 3xl:px-18 py-2 sm:py-3 lg:py-4 xl:py-5 2xl:py-6 3xl:py-8 whitespace-nowrap cursor-pointer"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12  ml-2  " />
                </Button></Link>
              
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4   gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 3xl:gap-16">
                {section.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative group">
                    <Image
                      width={390}
                      height={256}
                      src={image}
                      alt={`${section.title} ${imgIndex + 1}`}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 3xl:h-[28rem] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
import { CheckCircle2, Clock, Wrench } from "lucide-react";
const imgImg1 = 
"https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Favigilon%2Fimg_1.png"
const  imgImg2 =
"https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Favigilon%2Fimg_2.png"
const imgImg3 =
  "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Favigilon%2Fimg_3.png";
const imgImg4 =
  "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Favigilon%2Fimg_4.png";

 export function TrustSection() {
  return (
    <section className="w-full border-b border-gray-100 bg-white px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <p className="text-center text-gray-600 mb-8 font-light text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg ">
          Trusted by education, healthcare, stadiums and enterprise campuses.
        </p>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 mb-12">
          <img
            src={imgImg4}
            alt="Partner"
            className="h-8 md:h-12 2xl:h-16 w-auto object-contain"
          />
          <img
            src={imgImg1}
            alt="Partner"
            className="h-8 md:h-12 2xl:h-16 w-auto object-contain"
          />
          <img
            src={imgImg2}
            alt="Partner"
            className="h-8 md:h-12 2xl:h-16 w-auto object-contain"
          />
          <img
            src={imgImg3}
            alt="Partner"
            className="h-8 md:h-12 2xl:h-16 w-auto object-contain"
          />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
            <p className="text-sm text-gray-600 2xl:text-base font-light">
              Certified enterprise appliances
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <p className="text-sm text-gray-600 2xl:text-base font-light">
              24/7 support
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Wrench className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <p className="text-sm text-gray-600 2xl:text-base font-light">
              VMware & Hyper-V ready
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

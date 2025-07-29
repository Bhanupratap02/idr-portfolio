import Image from "next/image";
import chrisKoble from "@/assets/testimonial_2.png";
const Testimonials = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-[#3D3D3D] text-center mb-12 sm:mb-16 leading-tight">
          What They Say About Us
        </h2>

        <div className="relative bg-[#052557] rounded-none p-0 min-h-96">
          {/* Decorative circles */}
          <div
            className="absolute -top-32 -right-32 w-72 h-72 rounded-full 
          bg-white/8 bg-opacity-25 transform rotate-[-26deg]"
          ></div>
          <div className="absolute -top-6 -left-8 w-28 h-28 rounded-full bg-white/8 bg-opacity-8"></div>
          <div className="absolute bottom-12 left-12 w-28 h-28 rounded-full bg-white/8 bg-opacity-8"></div>
          <div className="absolute -bottom-35 right-80 w-72 h-72 rounded-full bg-white/8 bg-opacity-8"></div>

          {/* Responsive flex layout */}
          <div className="relative z-10 flex flex-col-reverse lg:flex-row  items-center p-6 sm:p-12 lg:p-20 gap-12 lg:gap-20 min-h-96">
            {/* Left: Testimonial Content */}
            <div className="lg:w-1/2 text-center ">
              <p className="text-base sm:text-lg lg:text-xl text-[#F7F6F2] leading-relaxed mb-6 capitalize">
                We have hired IDR on several occasions to pull network wiring,
                install networking equipment, security cameras, A/V, etc. We
                have always had a great experience with them and I would highly
                recommend IDR without
              </p>

              <div className="flex justify-center  mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#F8CA0A]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote icon */}
              {/* <div className="flex justify-center lg:justify-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#052557] flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
              </div> */}
            </div>
            {/* Right: Profile */}
            <div className="lg:w-1/2 flex flex-col items-center">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden border-10 border-white">
                  <Image
                    src={chrisKoble}
                    alt="Chris Koble"
                    quality={100}
      
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#F7F6F2] text-center capitalize">
                Chris Koble
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials
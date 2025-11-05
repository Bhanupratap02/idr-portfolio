const cameraGroupImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Fcamera-group.png";
const camera = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Fcamera.png";
const record = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Frecord.png";
const lock = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Flock.png";
const audio = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Faudio.png";
const ndaa = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Fndaa.png";
const module = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Fmodule.png";
import Image from "next/image";
export default function WhyChooseSpeco() {
  const features = [
    {
      icon: camera,
      title: "Wide Camera Selection",
      description:
        "Turrets, Bullets, Multisensors, LPR, PTZ, Covert options for any environment",
    },
    {
      icon: record,
      title: "Flexible Recording",
      description:
        "DVR, NVR, Hybrid Options to fit your existing infrastructure",
    },
    {
      icon: lock,
      title: "SecureGuard® Remote Access",
      description: "Full Control from Anywhere with secure cloud connectivity",
    },
    {
      icon: audio,
      title: "Built-in Audio & 2-Way Talk",
      description: "Communicate directly through your security system",
    },
    {
      icon: ndaa,
      title: "NDAA-Compliant Models",
      description: "Meet government and institutional requirements",
    },
    {
      icon: module,
      title: "Expandable, Modular Systems",
      description:
        "Start small and grow your security infrastructure as needed",
    },
  ];

  return (
    <section className="relative w-full bg-[#f8f8f8] py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28 3xl:px-24">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-[#2e2e2e] leading-tight mb-12 sm:mb-16 md:mb-20 xl:mb-24 2xl:mb-28 3xl:mb-32">
          📸 Why Choose Speco?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-16  items-center">
          <div className="justify-start lg:justify-end flex">
            <div className="relative w-full h-full  max-w-none   lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[800px] 3xl:max-w-[800px] rounded-lg overflow-hidden">
              <Image
                className=" w-full h-full object-cover"
                alt="Speco security camera group showcasing various camera models and options"
                src={cameraGroupImg}
                priority
                quality={90}
              />
            </div>
          </div>
    

          <div className="flex flex-col  gap-4 sm:gap-6 md:gap-8 lg:gap-2  xl:gap-6 2xl:gap-8  3xl:gap-10"> 
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 xl:gap-5 2xl:gap-7   rounded-lg hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <Image
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 xl:w-9 xl:h-9 2xl:w-11 2xl:h-11 3xl:w-12 3xl:h-12 group-hover:scale-110 transition-transform duration-300"
                    alt={`${feature.title} icon`}
                    src={feature.icon}
                  />
                </div>

                <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 xl:gap-2.5 2xl:gap-3 min-w-0">
                  <h3 className="text-base md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl   text-[#2e2e2e] leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg lg:text-base  xl:text-lg 2xl:text-xl 3xl:text-2xl  font-light text-[#626262] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

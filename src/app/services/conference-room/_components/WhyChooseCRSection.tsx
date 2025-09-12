/** @format */
import mic from "@/assets/services/conference-room/icons/mic.png";
import audio_proccessing from "@/assets/services/conference-room/icons/audio_proccessing.png";
import tv from "@/assets/services/conference-room/icons/tv.png";
import display from "@/assets/services/conference-room/icons/display.png";
import camera from "@/assets/services/conference-room/icons/camera.png";
import designs from "@/assets/services/conference-room/icons/designs.png";
import Image from "next/image";

const features = [
  {
    icon: mic,
    title: "Crystal-Clear Audio",
    description:
      "Experience perfect audio clarity with our ceiling tile, pendant, lavalier, or podium microphones, strategically placed for optimal sound capture.",
  },
  {
    icon: audio_proccessing,
    title: "Optimized Sound Processing",
    description:
      "Our digital signal processors and power amplifiers ensure balanced, noise-free audio that reaches every corner of your meeting space.",
  },
  {
    icon: tv,
    title: "Stunning Visuals",
    description:
      "Transform presentations with large-format displays, interactive panels, or dual monitors that deliver crystal-clear images and videos.",
  },
  {
    icon: display,
    title: "One-Touch Controls",
    description:
      "Start meetings with a single tap using intuitive Kramer control panels or tablet interfaces that simplify complex technology.",
  },
  {
    icon: camera,
    title: "Seamless Integration",
    description:
      "Connect effortlessly with Zoom, Teams, Webex, and Google Meet platforms for hybrid meetings that feel natural and engaging.",
  },
  {
    icon: designs,
    title: "Thoughtful Room Design",
    description:
      "Benefit from our expertise in room layouts and acoustic planning that optimize every inch of your meeting space.",
  },
];

export default function WhyChooseCRSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 2xl:py-28 3xl:py-32 bg-white">
      <div className="mx-auto max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[100rem] px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-900 leading-tight">
            Why Choose IDR for Your Conference Room?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8 sm:gap-12 lg:gap-16 2xl:gap-20">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className="w-7 h-8 sm:w-7 sm:h-10 2xl:w-10 2xl:h-12"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-medium text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base xl:text-lg 2xl:text-xl leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

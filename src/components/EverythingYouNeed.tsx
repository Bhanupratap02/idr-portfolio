/** @format */
import Image from "next/image";
import img1 from "@/assets/security_camera.png";
import img2 from "@/assets/security_camera_2.png";
const EverythingYouNeed = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-32 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-4xl lg:text-7xl lg:max-w-[60%] font-bold leading-tight mb-8 text-left">
          <span className="text-[#3D3D3D] ">
            Everything You Need in{" "}
          </span>
          <span className="text-[#052557] ">One Place</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* First Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={img1}
                alt="Security Camera"
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Bottom section */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-xl sm:text-2xl  text-[#2E2E2E] mb-3 sm:mb-4 font-semibold">
                Fast, Local Response Times
              </h4>
              <p className="text-base sm:text-lg text-[#2E2E2E] leading-relaxed max-w-lg">
                When issues arise, you won&apos;t wait days. Our team is
                responsive, efficient, and based near you — no red tape, no
                delays.
              </p>
            </div>
          </div>

          {/* Second Image with White-Glove text above */}
          <div className="relative">
            {/* White-Glove Project Management text above second image */}
            <div className="mb-6 sm:mb-8 mt-2 lg:mt-8">
              <h4 className="text-xl sm:text-2xl  text-[#2E2E2E] mb-3 sm:mb-4 font-semibold">
                White-Glove Project Management
              </h4>
              <p className="text-base sm:text-lg text-[#2E2E2E] leading-relaxed">
                From design to deployment, we handle every detail. Your
                dedicated project manager keeps everything on track and
                communicates clearly — no surprises.
              </p>
            </div>

            {/* Second Image */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={img2}
                alt="Security Camera 2"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverythingYouNeed;

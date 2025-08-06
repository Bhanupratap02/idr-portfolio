import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import groupImg from "@/assets/Group.png";

export default function ContactPage() {
  return (
    <div>
      {/* Contact Section */}
      <ContactSection />

      {/* Service Coverage Map Section */}
      <section className="px-4 sm:px-6 lg:px-20 2xl:px-32 3xl:px-48 py-12 sm:py-16 lg:py-20 2xl:py-24 3xl:py-28">
        <div className="mx-auto max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1700px]">
          
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              IDR provides services in all states shaded in blue
            </h2>
          </div>

          {/* Map Image */}
          <div className="w-full mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={groupImg}
                alt="IDR Service Coverage Map - States shaded in blue"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

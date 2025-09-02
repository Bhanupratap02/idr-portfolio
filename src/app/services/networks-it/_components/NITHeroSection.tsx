/** @format */
import Image from "next/image";
import hero from "@/assets/services/networks-it/hero.png";
export default function NITHeroSection() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-r from-blue-900/10 to-purple-900/10 py-16 flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight text-gray-800">
              Networks & IT Infrastructure
            </h1>
            <h2 className="text-2xl font-normal text-gray-800 leading-relaxed">
              The Backbone of Every Smart Building
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
             Modern buildings demand modern infrastructure. At IDR Technology Solutions, we design, install, and support IT networks that power everything from tenant Wi-Fi to surveillance, access control, intercoms, and smart building systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get Network Assessment
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={hero}
              alt="Network Infrastructure Server Room"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

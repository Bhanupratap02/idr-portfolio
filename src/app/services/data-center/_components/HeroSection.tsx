/** @format */
import hero from "@/assets/services/data-center/hero.png";
import Image from "next/image";
export default function DCHeroSection() {
  return (
    <section className="relative min-h-[808px] bg-gradient-to-r from-blue-900/10 to-purple-900/10 py-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight text-gray-800">
              Data Center Infrastructure
            </h1>
            <h2 className="text-2xl font-normal text-gray-800 leading-relaxed">
              Precision Infrastructure for High-Density Environments
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At IDR Technology Solutions, we design and build data center
              infrastructure that delivers power, performance, and uptime.
              Whether it's a dedicated server room, enterprise data hall, or
              edge microdata center, we handle the cabling, power, racks,
              cooling coordination, and documentation that keep everything
              running smoothly.
              <br />
              In a data center, the smallest details make the biggest difference
              — and that's where we thrive.
            </p>

            <button className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-normal transition-colors">
              Explore Our Infrastructure
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7063 8.70664C14.0969 8.31602 14.0969 7.68164 13.7063 7.29102L8.70625 2.29102C8.31563 1.90039 7.68125 1.90039 7.29063 2.29102C6.9 2.68164 6.9 3.31602 7.29063 3.70664L10.5875 7.00039H1C0.446875 7.00039 0 7.44727 0 8.00039C0 8.55352 0.446875 9.00039 1 9.00039H10.5844L7.29375 12.2941C6.90312 12.6848 6.90312 13.3191 7.29375 13.7098C7.68437 14.1004 8.31875 14.1004 8.70938 13.7098L13.7094 8.70977L13.7063 8.70664Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* Right Side - Server Rack Image */}
          <div className="lg:justify-self-end">
            <div className="relative">
              <Image
                src={hero}
                alt="Data Center Server Rack"
                className="w-full max-w-[470px] h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

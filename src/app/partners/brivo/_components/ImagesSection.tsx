
import brivo1 from "@/assets/partners/brivo/brivo_reader.png";
import Image from "next/image";
import brivo2 from "@/assets/partners/brivo/brivo_scanner.png";
const ImagesSection = () => {
  return (
    <div className="pb-12 pt-8 sm:pb-16 sm:pt-10 md:pb-18 md:pt-12 lg:pb-20 lg:pt-16 xl:pb-22 xl:pt-18 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
        {/* First Image - Smaller */}

        <div className="relative md:col-span-2 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:translate-y-2 transition-all duration-300 border border-gray-200">
          <Image
            src={brivo2}
            alt="Brivo Scanner Device"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
        {/* Second Image - Larger */}
        <div className="relative md:col-span-1 aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 md:translate-y-12 border border-gray-200">
          <Image
            src={brivo1}
            alt="Brivo Reader Device"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </div>
      </div>
    </div>
  );
}

export default ImagesSection
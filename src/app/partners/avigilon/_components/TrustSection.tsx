import { CheckCircle2, Clock, Wrench } from "lucide-react";
import imgImg1 from "../../../../assets/partners/avigilon/img_1.png";
import imgImg2 from "../../../../assets/partners/avigilon/img_2.png";
import imgImg3 from "../../../../assets/partners/avigilon/img_3.png";
import imgImg4 from "../../../../assets/partners/avigilon/img_4.png";

export function TrustSection() {
  return (
    <section className="w-full border-b border-gray-100 bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <p className="text-center text-gray-600 mb-8">
          Trusted by education, healthcare, stadiums and enterprise campuses.
        </p>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 mb-12">
          <img src={imgImg4.src} alt="Partner" className="h-12 w-auto object-contain" />
          <img src={imgImg1.src} alt="Partner" className="h-12 w-auto object-contain" />
          <img src={imgImg2.src} alt="Partner" className="h-12 w-auto object-contain" />
          <img src={imgImg3.src} alt="Partner" className="h-12 w-auto object-contain" />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
            <p className="text-sm text-gray-600">Certified enterprise appliances</p>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <p className="text-sm text-gray-600">24/7 support</p>
          </div>
          <div className="flex items-center gap-3">
            <Wrench className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <p className="text-sm text-gray-600">VMware & Hyper-V ready</p>
          </div>
        </div>
      </div>
    </section>
  );
}

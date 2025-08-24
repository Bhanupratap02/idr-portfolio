/** @format */

export function IntercomTrackRecordSection() {
  return (
    <section className="bg-white py-[86px]">
      <div className="container mx-auto px-[82px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-[648px]">
            <h2 className="text-[#2E2E2E] text-[36px] font-medium leading-[40px] mb-6">
              Proven Track Record
            </h2>
            <p className="text-[#4B5563] text-[24px] font-normal leading-[150%] mb-12">
              IDR has installed intercom systems in over 100 buildings across
              New York City, New Jersey, and Florida — from small walk-ups to
              large-scale luxury developments.
            </p>

            {/* Statistics */}
            <div className="flex justify-center gap-6 mb-12">
              <div className="text-center">
                <div className="text-blue-600 text-[30px] font-bold leading-normal mb-2">
                  100+
                </div>
                <div className="text-[#4B5563] text-[20px] font-normal leading-normal">
                  Buildings Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-blue-600 text-[30px] font-bold leading-normal mb-2">
                  3
                </div>
                <div className="text-[#4B5563] text-[20px] font-normal leading-normal">
                  States Covered
                </div>
              </div>
              <div className="text-center">
                <div className="text-blue-600 text-[30px] font-bold leading-normal mb-2">
                  24/7
                </div>
                <div className="text-[#4B5563] text-[20px] font-normal leading-normal">
                  Support Available
                </div>
              </div>
            </div>

            <p className="text-[#4B5563] text-[24px] font-normal leading-[150%]">
              We understand the unique demands of multifamily properties in
              urban and coastal environments, and we build systems that stand up
              to both.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-[584px] h-[384px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f0f1f92beca43fe605bb02bc3b44eae8b2492b5d?width=1168"
              alt="IDR team working on intercom system"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

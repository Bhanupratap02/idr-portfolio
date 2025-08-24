/** @format */

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white min-h-[689px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2F0704fb8039254e6881ebea6562f7bc69%2F47f6056577de4bc2bb2ada720fc41a22?format=webp&width=800')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Conference Room Solutions
            </h1>
            <div className="space-y-5 text-lg md:text-xl">
              <p className="font-light">
                Smart, Seamless Meeting Spaces — Designed by IDR
              </p>
              <p className="font-light">
                A great meeting room isn't just about the table and chairs —
                it's about how well people can see, hear, and connect.
              </p>
              <p className="font-light">
                At IDR Technology Solutions, we design, install, and support
                conference room systems that look sharp, sound amazing, and just
                work — from huddle rooms to executive boardrooms.
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors flex items-center gap-3">
              Book a Free Walkthrough
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Content - Conference Room Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7525f589cee74bca8e462f00891d2b3ae4e63091?width=1138"
                alt="Modern Conference Room"
                className="w-full max-w-[569px] h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

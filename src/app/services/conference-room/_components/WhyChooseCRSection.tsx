/** @format */

export default function WhyChooseCRSection() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9v6c0 3.87 3.13 7 7 7s7-3.13 7-7V9c0-3.87-3.13-7-7-7zM4 12.4c0-.77-.63-1.4-1.4-1.4S1.2 11.63 1.2 12.4v1.5c0 5.22 3.89 9.54 8.9 10.26v1.84H7.5c-.77 0-1.4.63-1.4 1.4s.63 1.4 1.4 1.4h4.6 4.6c.77 0 1.4-.63 1.4-1.4s-.63-1.4-1.4-1.4h-2.6v-1.84c5.01-.72 8.9-5.04 8.9-10.26v-1.5c0-.77-.63-1.4-1.4-1.4s-1.4.63-1.4 1.4v1.5c0 4.14-3.36 7.5-7.5 7.5S4 18.04 4 13.9v-1.5z" />
        </svg>
      ),
      title: "Crystal-Clear Audio",
      description:
        "Experience perfect audio clarity with our ceiling tile, pendant, lavalier, or podium microphones, strategically placed for optimal sound capture.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 24H0V0h24v24z" stroke="#E5E7EB" />
          <path d="M0 20.5c0 .83.67 1.5 1.5 1.5H4.2c.58 1.33 1.89 2.25 3.42 2.25s2.84-.92 3.42-2.25h11.46c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H11.04c-.58-1.33-1.89-2.25-3.42-2.25s-2.84.92-3.42 2.25H1.5c-.83 0-1.5.67-1.5 1.5zM6 20.5c0-.42.33-.75.75-.75s.75.33.75.75-.33.75-.75.75S6 20.92 6 20.5zm9.38-8c.42 0 .75-.33.75-.75s-.33-.75-.75-.75-.75.33-.75.75.33.75.75.75zm.75-4.75c0-.42-.33-.75-.75-.75s-.75.33-.75.75.33.75.75.75.75-.33.75-.75zM16.88 4.5c-1.29 0-2.42.82-2.83 2.05H1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h12.55c.41 1.23 1.54 2.05 2.83 2.05s2.42-.82 2.83-2.05H22.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-2.79c-.41-1.23-1.54-2.05-2.83-2.05z" />
        </svg>
      ),
      title: "Optimized Sound Processing",
      description:
        "Our digital signal processors and power amplifiers ensure balanced, noise-free audio that reaches every corner of your meeting space.",
    },
    {
      icon: (
        <svg
          className="w-10 h-8 text-blue-600"
          fill="currentColor"
          viewBox="0 0 40 24"
        >
          <path d="M4 4v16h32V4H4zM0 4c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4zM8 26h24c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H8c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5z" />
        </svg>
      ),
      title: "Stunning Visuals",
      description:
        "Transform presentations with large-format displays, interactive panels, or dual monitors that deliver crystal-clear images and videos.",
    },
    {
      icon: (
        <svg
          className="w-7 h-8 text-blue-600"
          fill="currentColor"
          viewBox="0 0 28 32"
        >
          <path d="M0 4.5C0 2.02 2.02 0 4.5 0h19c2.48 0 4.5 2.02 4.5 4.5v23c0 2.48-2.02 4.5-4.5 4.5h-19C2.02 32 0 29.98 0 27.5v-23zM15 27c0-.41-.16-.78-.44-1.06-.28-.28-.65-.44-1.06-.44s-.78.16-1.06.44c-.28.28-.44.65-.44 1.06s.16.78.44 1.06c.28.28.65.44 1.06.44s.78-.16 1.06-.44c.28-.28.44-.65.44-1.06zM23.5 4.5h-19v18.5h19V4.5z" />
        </svg>
      ),
      title: "One-Touch Controls",
      description:
        "Start meetings with a single tap using intuitive Kramer control panels or tablet interfaces that simplify complex technology.",
    },
    {
      icon: (
        <svg
          className="w-9 h-8 text-blue-600"
          fill="currentColor"
          viewBox="0 0 36 32"
        >
          <path d="M0 8c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v15c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V8zm33.52 1.76c.61.33 1.02.95 1.02 1.68v12c0 .73-.41 1.35-1.02 1.68-.61.33-1.35.29-1.93-.11L26.83 22.4 26 21.84v-1v-8v-1.02l.83-.56 5.76-2.61c.58-.41 1.32-.44 1.93-.11z" />
        </svg>
      ),
      title: "Seamless Integration",
      description:
        "Connect effortlessly with Zoom, Teams, Webex, and Google Meet platforms for hybrid meetings that feel natural and engaging.",
    },
    {
      icon: (
        <svg
          className="w-9 h-8 text-blue-600"
          fill="currentColor"
          viewBox="0 0 36 32"
        >
          <path d="M0 4.9c0-1.55 1.26-2.81 2.81-2.81h5.63c1.55 0 2.81 1.26 2.81 2.81v.94h11.25v-.94c0-1.55 1.26-2.81 2.81-2.81h5.63c1.55 0 2.81 1.26 2.81 2.81v5.63c0 1.55-1.26 2.81-2.81 2.81h-5.63c-1.55 0-2.81-1.26-2.81-2.81v-.94H11.25v.94c0 .1-.006.2-.018.295L15.9 17.1h5.63c1.55 0 2.81 1.26 2.81 2.81v5.63c0 1.55-1.26 2.81-2.81 2.81h-5.63c-1.55 0-2.81-1.26-2.81-2.81v-5.63c0-.1.006-.2.018-.295L8.44 13.35H2.81C1.26 13.35 0 12.09 0 10.53V4.9z" />
        </svg>
      ),
      title: "Thoughtful Room Design",
      description:
        "Benefit from our expertise in room layouts and acoustic planning that optimize every inch of your meeting space.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            Why Choose IDR for Your Conference Room?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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

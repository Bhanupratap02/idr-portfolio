
// /** @format */
// // components/Hero.tsx
// "use client";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";

// const slides = [
//   { src: "/videos/video_1.mov", title: "", text: "" },
//   {
//     src: "/videos/Hero Banner Video Camera Monitoring.mp4",
//     title: "",
//     text: "",
//   },

//   // {
//   //   src: "/videos/Hero Banner Video Camera Monitoring.mp4",
//   //   title: "Design. Installation.Support. One Trusted Partner.",
//   //   text: "Founded in 2007, IDR Technology Solutions is a full-service systems integrator specializing in A/V, security, networking, and IT infrastructure. Our mission is simple: deliver high-quality technology solutions with expert execution, total transparency, and unmatched customer support — every step of the way.",
//   // },
//   {
//     src: "/videos/video_4.mp4",
//     title: "Design. Installation.Support. One Trusted Partner.",
//     text: "Founded in 2007, IDR Technology Solutions is a full-service systems integrator specializing in A/V, security, networking, and IT infrastructure. Our mission is simple: deliver high-quality technology solutions with expert execution, total transparency, and unmatched customer support — every step of the way.",
//   },
// ];

// export default function Hero() {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const [secondsLeft, setSecondsLeft] = useState<number>(0);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [hasError, setHasError] = useState<boolean>(false);
//   const [isVideoReady, setIsVideoReady] = useState<boolean>(false);

//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const currentSlide = slides[activeIndex];


//   // Utility: detect Safari (WebKit but not Chrome)
//   const isSafari = (() => {
//     if (typeof navigator === "undefined") return false;
//     return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
//   })();

//   useEffect(() => {
//     let mounted = true;

//     // If no ref video element yet, bail out.
//     const initialVideo = videoRef.current;
//     if (!initialVideo) return;

//     // Reset UI state
//     setIsLoading(true);
//     setHasError(false);
//     setIsVideoReady(false);

//     // Handlers use videoRef.current each time to satisfy TS null checks.
//     function onLoadedData() {
//       if (!mounted) return;
//       const v = videoRef.current;
//       if (!v) return;

//       setIsVideoReady(true);
//       setIsLoading(false);

//       // Safari tiny seek to trigger frame paint if necessary
//       if (isSafari) {
//         try {
//           if (v.currentTime === 0) v.currentTime = 0.001;
//         } catch (err) {
//           // ignore
//         }
//       }

//       requestAnimationFrame(() => {
//         setTimeout(() => {
//           v.play().catch(() => {
//             // attach gesture-based resume if autoplay blocked
//             const resumePlayback = () => {
//               const vv = videoRef.current;
//               if (vv) vv.play().catch(() => {});
//               window.removeEventListener("click", resumePlayback);
//               window.removeEventListener("touchstart", resumePlayback);
//             };
//             window.addEventListener("click", resumePlayback, { once: true });
//             window.addEventListener("touchstart", resumePlayback, {
//               once: true,
//             });
//           });
//         }, 60);
//       });
//     }

//     function onCanPlay() {
//       if (!mounted) return;
//       if (!isSafari) {
//         setIsVideoReady(true);
//         setIsLoading(false);
//       }
//     }

//     function onTimeUpdate() {
//       if (!mounted) return;
//       const v = videoRef.current;
//       if (!v) return;
//       if (v.duration) {
//         const remaining = Math.ceil(v.duration - v.currentTime);
//         setSecondsLeft(remaining > 0 ? remaining : 0);
//       }
//     }

//     function onEnded() {
//       if (!mounted) return;
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//     }

//     // Event parameter typed as Event (no any)
//     function onError(e: Event) {
//       if (!mounted) return;
//       console.error("Hero video error:", e);
//       setHasError(true);
//       setIsLoading(false);

//       // Try a gentle reload attempt to recover
//       setTimeout(() => {
//         const v = videoRef.current;
//         if (!v) return;
//         try {
//           v.pause();
//         } catch (err) {
//           /*ignore*/
//         }
//         try {
//           // force reload by clearing src and reassigning it
//           v.removeAttribute("src");
//           v.load();
//         } catch (err) {
//           /*ignore*/
//         }
//         try {
//           v.src = currentSlide.src;
//           v.preload = "auto";
//           v.load();
//           v.play().catch(() => {});
//         } catch (err) {
//           /*ignore*/
//         }
//       }, 700);
//     }

//     // Attach listeners safely
//     const v = initialVideo;
//     v.addEventListener("loadeddata", onLoadedData);
//     v.addEventListener("canplay", onCanPlay);
//     v.addEventListener("timeupdate", onTimeUpdate);
//     v.addEventListener("ended", onEnded);
//     v.addEventListener("error", onError as EventListener);

//     // Force a robust reload sequence to avoid Safari cached/decoded glitches:
//     (async () => {
//       try {
//         const vv = videoRef.current;
//         if (!vv) return;

//         // Pause and clear src to reset decoder/cache
//         try {
//           vv.pause();
//         } catch (err) {
//           /*ignore*/
//         }

//         try {
//           vv.removeAttribute("src");
//           vv.load();
//         } catch (err) {
//           /*ignore*/
//         }

//         // Allow the removal to propagate
//         await new Promise((r) => setTimeout(r, 40));

//         // Assign new src and load
//         try {
//           vv.src = currentSlide.src;
//           vv.preload = "auto";
//           vv.load();
//         } catch (err) {
//           /*ignore*/
//         }

//         if (isSafari) {
//           await new Promise((r) => setTimeout(r, 70));
//           try {
//             if (vv.currentTime === 0) vv.currentTime = 0.001;
//           } catch (err) {
//             /*ignore*/
//           }
//         }

//         // Attempt to play; swallow rejection (handlers will recover)
//         try {
//           const p = vv.play();
//           if (p !== undefined) p.catch(() => {});
//         } catch (err) {
//           /*ignore*/
//         }
//       } catch (err) {
//         /*ignore*/
//       }
//     })();

//     // Cleanup
//     return () => {
//       mounted = false;
//       const vv = videoRef.current ?? initialVideo;
//       try {
//         vv.removeEventListener("loadeddata", onLoadedData);
//         vv.removeEventListener("canplay", onCanPlay);
//         vv.removeEventListener("timeupdate", onTimeUpdate);
//         vv.removeEventListener("ended", onEnded);
//         vv.removeEventListener("error", onError as EventListener);
//       } catch (err) {
//         /*ignore*/
//       }
//     };
//   }, [activeIndex, currentSlide.src, isSafari]);

//   // Preload next video


//   useEffect(() => {
//     const nextIndex = (activeIndex + 1) % slides.length;
//     try {
//       const nextVideo = document.createElement("video");
//       nextVideo.src = slides[nextIndex].src;
//       nextVideo.preload = "auto";
//     } catch (e) {
//       // ignore
//     }
//   }, [activeIndex]);

//   return (
//     <section className="relative w-full bg-[#202020] overflow-hidden">
//       {/* Use aspect ratio container for consistent video display with increased height for ultrawide */}
//       <div className="relative w-full min-h-[400px] h-[70vh] sm:h-[75vh] lg:h-[78vh] 2xl:min-h-[600px] 2xl:h-[83vh] hero-container">
//         {/* Custom breakpoint for ultrawide screens */}
//         <style jsx>{`
//           @media (min-width: 2400px) {
//             .hero-container {
//               min-height: 80vh;
//               height: 88vh;
//             }
//           }
//         `}</style>
//         {/* Video Container */}
//         <div className="absolute inset-0 w-full h-full ">
//           <video
//             // We intentionally don't key the element by timestamp here.
//             // The effect above clears src/load to force a true re-decode on reload.
//             ref={videoRef}
//             muted
//             playsInline
//             autoPlay
//             preload="auto"
//             className="w-full h-full object-cover xl:object-fill scale-113"
//             // no src attribute in JSX to avoid Next/React SSR differences — we set src programmaticall
//           />
//           {/* Loading Overlay */}
//           {(!isVideoReady || isLoading) && (
//             <div className="absolute inset-0 bg-[#202020] flex items-center justify-center transition-opacity duration-300" />
//           )}

//           {/* Error State - show if video fails to load */}

//           {hasError && (
//             <div className="absolute inset-0 bg-[#202020] flex items-center justify-center">
//               <div className="text-red-400 opacity-75">
//                 Failed to load video
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Text Overlay for 3rd and 4th slides */}
//         {activeIndex === 2 && (
//           <div className="absolute inset-0 top-[10%] md:top-0 flex items-start md:items-center justify-start ">
//             <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 ">
//               {/* Left-aligned container with max width to prevent centering */}
//               <div className="max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
//                 <div className="rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 text-white">
//                   <h2 className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-4 xl:mb-4 2xl:mb-8 leading-tight">
//                     {currentSlide.title}
//                   </h2>
//                   <p className="text-sm sm:text-base lg:text-lg xl:text-lg 2xl:text-2xl mb-4 lg:mb-6 xl:mb-8 2xl:mb-10 leading-relaxed opacity-90 max-w-3xl xl:max-w-4xl">
//                     {currentSlide.text}
//                   </p>
//                   <div className="flex flex-row gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
//                     <Link
//                       href="/services/"
//                       className="bg-[#052557] hover:bg-[#052557]/90 text-white px-6 lg:px-8 xl:px-8 2xl:px-12 py-2 lg:py-3 xl:py-4 2xl:py-5 rounded-lg font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl transition-colors cursor-pointer"
//                     >
//                       Our Products
//                     </Link>
//                     <Link
//                       href={"/portfolio"}
//                       className="border border-white hover:bg-white hover:text-black text-white px-6 lg:px-8 xl:px-8 2xl:px-12 py-2 lg:py-3 xl:py-4 2xl:py-5 rounded-lg font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl transition-colors"
//                     >
//                       Learn More
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Slider Dots with Countdown - Responsive positioning */}
//         <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 xl:bottom-10 left-4 sm:left-6 lg:left-8 xl:left-10 sm:right-4  lg:right-8 xl:right-10 z-20">
//           <div className="flex sm:hidden items-center justify-start space-x-4">
//             {/* Mobile: Horizontal dots at bottom left */}
//             {[0, 1, 2].map((i) =>
//               i === activeIndex ? (
//                 <div
//                   key={i}
//                   className="w-6 h-6 rounded-full border-2 border-white bg-[#052557] flex items-center justify-center text-white text-xs font-medium shadow-lg"
//                 >
//                   {secondsLeft}
//                 </div>
//               ) : (
//                 <div
//                   key={i}
//                   onClick={() => setActiveIndex(i)}
//                   className="w-2 h-2 rounded-full bg-white/60 hover:bg-white/80 transition-colors cursor-pointer"
//                 ></div>
//               )
//             )}
//           </div>

//           <div className="hidden sm:flex sm:absolute sm:bottom-0 sm:right-0 flex-col items-center space-y-4 lg:space-y-6">
//             {/* Desktop: Vertical dots at bottom right */}
//             {[0, 1, 2].map((i) =>
//               i === activeIndex ? (
//                 <div
//                   key={i}
//                   className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white bg-[#052557] flex items-center justify-center text-white text-xs lg:text-sm font-medium shadow-lg"
//                 >
//                   {secondsLeft}
//                 </div>
//               ) : (
//                 <div
//                   key={i}
//                   className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-white/60 hover:bg-white/80 transition-colors cursor-pointer"
//                   onClick={() => setActiveIndex(i)}
//                 ></div>
//               )
//             )}
//           </div>
//           <button id="myButton">click</button>
//         </div>
//       </div>
//     </section>
//   );
// }


/** @format */
// components/Hero.tsx
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const slides = [
  { 
    src: "https://idr-portfolio-storage.s3.amazonaws.com/public/videos/video_1.mov", 
    title: "", 
    text: "",
    slogan: "Trusted by top institutions and powered by precision."
  },
  {
    src: "https://idr-portfolio-storage.s3.amazonaws.com/public/videos/Hero%20Banner%20Video%20Camera%20Monitoring.mp4",
    title: "",
    text: "",
    slogan: "Trusted by top institutions and powered by precision."
  },
  {
    src: "https://idr-portfolio-storage.s3.amazonaws.com/public/videos/video_4.mp4",
    title: "Design. Installation. Support. One Trusted Partner.",
    text: "Founded in 2007, IDR Technology Solutions is a full-service systems integrator specializing in A/V, security, networking, and IT infrastructure. Our mission is simple: deliver high-quality technology solutions with expert execution, total transparency, and unmatched customer support — every step of the way.",
    slogan: "Trusted by top institutions and powered by precision."
  },
];


export default function Hero() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const [userGestureGranted, setUserGestureGranted] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentSlide = slides[activeIndex];
  const FALLBACK_DURATION = 12;

  // Utility: detect Safari (WebKit but not Chrome)
  const isSafari = (() => {
    if (typeof navigator === "undefined") return false;
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  })();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let mounted = true;
    let fallbackTimer: number | null = null;
    let countdownInterval: number | null = null;

    const clearAllTimers = () => {
      if (fallbackTimer) clearTimeout(fallbackTimer);
      if (countdownInterval) clearInterval(countdownInterval);
    };

    const getDuration = () => {
      return v.duration && isFinite(v.duration) && v.duration > 1
        ? Math.ceil(v.duration)
        : FALLBACK_DURATION;
    };

    const startCountdown = (duration: number) => {
      let remaining = duration;
      setSecondsLeft(remaining);

      countdownInterval = window.setInterval(() => {
        if (!mounted) return;
        remaining -= 1;
        setSecondsLeft(remaining);
        if (remaining <= 0) {
          clearAllTimers();
          setActiveIndex((prev) => (prev + 1) % slides.length);
        }
      }, 1000);
    };

    const playVideoSafely = () => {
      if (!mounted || !v) return;
      v.play().catch(() => {
        console.warn("Autoplay blocked — waiting for user gesture.");
      });
    };

    const onLoadedData = () => {
      if (!mounted) return;
      setIsVideoReady(true);
   

      const duration = getDuration();
      startCountdown(duration);

      playVideoSafely();

      fallbackTimer = window.setTimeout(() => {
        if (mounted) setActiveIndex((prev) => (prev + 1) % slides.length);
      }, duration * 1000);
    };

    const onEnded = () => {
      if (!mounted) return;
      clearAllTimers();
      setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const onError = (e: Event) => {
      console.error("Hero video error:", e);
      setHasError(true);

      clearAllTimers();
      fallbackTimer = window.setTimeout(() => {
        if (mounted) setActiveIndex((prev) => (prev + 1) % slides.length);
      }, FALLBACK_DURATION * 1000);
    };

    // Attach listeners
    v.addEventListener("loadeddata", onLoadedData);
    v.addEventListener("ended", onEnded);
    v.addEventListener("error", onError as EventListener);

    // Reset & load new video
    v.pause();
    v.removeAttribute("src");
    v.load();
    v.src = currentSlide.src;
    v.preload = "auto";
    v.load();

    // Fallback if onLoadedData never fires
    fallbackTimer = window.setTimeout(() => {
      if (mounted) setActiveIndex((prev) => (prev + 1) % slides.length);
    }, FALLBACK_DURATION * 1000);

    return () => {
      mounted = false;
      clearAllTimers();
      v.removeEventListener("loadeddata", onLoadedData);
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("error", onError as EventListener);
    };
  }, [activeIndex, currentSlide.src, isSafari]);

  // ✅ Handle first user gesture globally (anywhere on page)
  useEffect(() => {
    if (userGestureGranted) return;

    const handleUserGesture = () => {
      const v = videoRef.current;
      if (v) {
        v.muted = true;
        v.play().catch(() => {});
      }
      setUserGestureGranted(true);
      window.removeEventListener("click", handleUserGesture);
    };

    window.addEventListener("click", handleUserGesture);
    return () => window.removeEventListener("click", handleUserGesture);
  }, [userGestureGranted]);

  // ✅ Clicking video directly skips to next slide immediately
  const handleVideoClick = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative w-full bg-[#202020] overflow-hidden"
      // onClick={handleVideoClick}
    >
      {/* Use aspect ratio container for consistent video display with increased height for ultrawide */}
      <div className="relative w-full min-h-[400px] h-[70vh] sm:h-[75vh] lg:h-[78vh] 2xl:min-h-[600px] 2xl:h-[83vh] hero-container">
        {/* Custom breakpoint for ultrawide screens */}
        <style jsx>{`
          @media (min-width: 2400px) {
            .hero-container {
              min-height: 80vh;
              height: 88vh;
            }
          }
        `}</style>
        {/* Video Container */}
        <div className="absolute inset-0 w-full h-full ">
          <video
            // We intentionally don't key the element by timestamp here.
            // The effect above clears src/load to force a true re-decode on reload.
            ref={videoRef}
            muted
            playsInline
            autoPlay
            preload="auto"
            className="w-full h-full object-cover xl:object-fill scale-113"
            // no src attribute in JSX to avoid Next/React SSR differences — we set src programmaticall
          />
          {/* Loading Overlay */}
          {(!isVideoReady) && (
            <div className="absolute inset-0 bg-[#202020] flex items-center justify-center transition-opacity duration-300" />
          )}
    

          {/* Error State - show if video fails to load */}

          {hasError && (
            <div className="absolute inset-0 bg-[#202020] flex items-center justify-center">
              <div className="text-red-400 opacity-75">
                Failed to load video
              </div>
            </div>
          )}
        </div>

        {/* Text Overlay for 3rd and 4th slides */}
        {/* Text Overlay - Full content for slide 3, slogan only for slides 1 & 2 */}
        {activeIndex === 2 ? (
          <div className="absolute inset-0 top-[10%] md:top-0 flex items-start md:items-center justify-start ">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 ">
              {/* Left-aligned container with max width to prevent centering */}
              <div className="max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
                <div className="rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 text-white">
                   <p className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium drop-shadow-lg"
                    style={{ 
                 textShadow: '0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.9)' 
               }}>
                {currentSlide.slogan}
              </p>
                  <h2 className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-4 xl:mb-4 2xl:mb-8 leading-tight">
                    {currentSlide.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-lg 2xl:text-2xl mb-4 lg:mb-6 xl:mb-8 2xl:mb-10 leading-relaxed opacity-90 max-w-3xl xl:max-w-4xl">
                    {currentSlide.text}
                  </p>
                  <div className="flex flex-row gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
                    <Link
                      href="/services/"
                      className="bg-[#052557] hover:bg-[#052557]/90 text-white px-6 lg:px-8 xl:px-8 2xl:px-12 py-2 lg:py-3 xl:py-4 2xl:py-5 rounded-lg font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl transition-colors cursor-pointer"
                    >
                      Our Products
                    </Link>
                    <Link
                      href={"/portfolio"}
                      className="border border-white hover:bg-white hover:text-black text-white px-6 lg:px-8 xl:px-8 2xl:px-12 py-2 lg:py-3 xl:py-4 2xl:py-5 rounded-lg font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
           <div className="absolute inset-0 top-[10%] md:top-0 flex items-start  justify-start ">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 ">
              <div className="max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
                <div className="rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
                  <p className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium" 
                     style={{ 
                       textShadow: '0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.9)' 
                     }}>
                    {currentSlide.slogan}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slider Dots with Countdown - Responsive positioning */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 xl:bottom-10 left-4 sm:left-6 lg:left-8 xl:left-10 sm:right-4  lg:right-8 xl:right-10 z-20">
          <div className="flex sm:hidden items-center justify-start space-x-4">
            {/* Mobile: Horizontal dots at bottom left */}
            {[0, 1, 2].map((i) =>
              i === activeIndex ? (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-white bg-[#052557] flex items-center justify-center text-white text-xs font-medium shadow-lg"
                >
                  {secondsLeft}
                </div>
              ) : (
                <div
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent skipping video
                    setActiveIndex(i);
                  }}
                  className="w-2 h-2 rounded-full bg-white/60 hover:bg-white/80 transition-colors cursor-pointer"
                ></div>
              )
            )}
          </div>

          <div className="hidden sm:flex sm:absolute sm:bottom-0 sm:right-0 flex-col items-center space-y-4 lg:space-y-6">
            {/* Desktop: Vertical dots at bottom right */}
            {[0, 1, 2].map((i) =>
              i === activeIndex ? (
                <div
                  key={i}
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white bg-[#052557] flex items-center justify-center text-white text-xs lg:text-sm font-medium shadow-lg"
                >
                  {secondsLeft}
                </div>
              ) : (
                <div
                  key={i}
                  className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-white/60 hover:bg-white/80 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent skipping video
                    setActiveIndex(i);
                  }}
                ></div>
              )
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}






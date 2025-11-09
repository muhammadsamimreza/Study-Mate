import { useEffect, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const videos = [
  "https://www.pexels.com/download/video/3209298/",
  "https://www.pexels.com/download/video/6860434/",
  "https://www.pexels.com/download/video/6985525/",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play the carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
  setCurrent((current - 1 + videos.length) % videos.length);
  const nextSlide = () => setCurrent((current + 1) % videos.length);

  return (
    <>
    <div className="absolute w-full flex top-[66px] left-0 justify-center ">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full overflow-hidden bg-black rounded-2xl shadow">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {videos.map((src, i) => (
              <div key={i} className="w-full shrink-0 relative">
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[60vh] object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
          >
            <FaAngleDoubleLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
          >
            <FaAngleDoubleRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  current === i ? "bg-white w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="mb-[500px]"></div>
    </>
  );
};

export default HeroSection;

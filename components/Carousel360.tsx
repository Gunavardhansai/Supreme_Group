"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play } from "lucide-react";

const Carousel360 = () => {
  const [category, setCategory] = useState<"passenger" | "commercial">("passenger");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const passengerVideos = [
    "/videos/Passenger Alpha.bc06b347f5b526ad9a60.mp4",
    "/videos/Front.8f5fda304d3095ab6b02.mp4",
    "/videos/Trunk.54bfaa734c0395172c08.mp4",
    "/videos/Exterior.a127ebb308e655c7e32c.mp4",
  ];

  const commercialVideos = [
    "/videos/Commercial Alpha.92c92d40f9116c837d1d.mp4",
    "/videos/Commercial-Engine.d8957f7c027ca396858e.mp4",
    "/videos/Commercial-Cabin.69adf15a8021267cbe8c.mp4",
  ];

  const activeVideos = category === "passenger" ? passengerVideos : commercialVideos;
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleCategoryChange = (cat: "passenger" | "commercial") => {
    setCategory(cat);
    setActiveIndex(0);
  };

  return (
    <section className="relative flex flex-col justify-center bg-black text-white min-h-screen overflow-hidden px-6 py-10 md:py-0">
      {/* Title */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug">
          Evolving the drive with{" "}
          <span className="font-semibold">360-degree</span> comprehensive solutions
        </h2>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full gap-10">
        {/* Left text content */}
        <div className="md:w-1/3 space-y-8">
          <div
            className={`border-l-2 pl-4 cursor-pointer transition-all ${
              category === "passenger" ? "border-white opacity-100" : "border-gray-700 opacity-40"
            }`}
            onClick={() => handleCategoryChange("passenger")}
          >
            <h3 className="text-2xl font-semibold">Passenger vehicles</h3>
            <p className="text-sm mt-2 text-gray-300">
              Revving up innovation from interior to exterior.
            </p>
          </div>

          <div
            className={`border-l-2 pl-4 cursor-pointer transition-all ${
              category === "commercial" ? "border-white opacity-100" : "border-gray-700 opacity-40"
            }`}
            onClick={() => handleCategoryChange("commercial")}
          >
            <h3 className="text-2xl font-semibold">Commercial vehicles</h3>
            <p className="text-sm mt-2 text-gray-300">
              Advancing engineering for heavy-duty vehicles.
            </p>
          </div>
        </div>

        {/* Video container */}
        <div className="relative md:w-2/3 w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.video
              key={`${category}-${activeIndex}`}
              ref={videoRef}
              src={activeVideos[activeIndex]}
              className="w-full max-h-[70vh] object-contain rounded-lg"
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="absolute bottom-6 right-6 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-200 transition"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>

          {/* Thumbnail selectors */}
          <div className="flex justify-center space-x-6 mt-8">
            {activeVideos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-10 h-10 rounded-full border transition ${
                  idx === activeIndex ? "bg-white border-white" : "border-gray-500 opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel360;

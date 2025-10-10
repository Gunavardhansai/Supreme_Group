import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background video */}
      <video
        src="/videos/automotive.224e7418884105595114.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center hero-overlay px-6">
        <p className="text-sm opacity-90">Driven by performance</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mt-4">
          Soft trims and <span className="text-primaryBlue">NVH solutions</span><br/>for seamless rides
        </h1>
      </div>
    </section>
  )
}

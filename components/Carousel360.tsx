import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const passenger = [
  { id: 'p1', src: '/videos/p_1.mp4', label: 'Passenger 1' },
  { id: 'p2', src: '/videos/p_2.mp4', label: 'Passenger 2' },
  { id: 'p3', src: '/videos/p_3.mp4', label: 'Passenger 3' },
  { id: 'p4', src: '/videos/p_4.mp4', label: 'Passenger 4' },
]

const commercial = [
  { id: 'c1', src: '/videos/c_1.mp4', label: 'Commercial 1' },
  { id: 'c2', src: '/videos/c_2.mp4', label: 'Commercial 2' },
  { id: 'c3', src: '/videos/c_3.mp4', label: 'Commercial 3' },
]

export default function Carousel360(){
  const [activeGroup, setActiveGroup] = useState<'passenger'|'commercial'>('passenger')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement|null>(null)

  // Intersection observer to toggle group based on scroll
  const passengerRef = useRef(null)
  const commercialRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (e.target === passengerRef.current) setActiveGroup('passenger')
          if (e.target === commercialRef.current) setActiveGroup('commercial')
          setActiveIndex(0)
        }
      })
    }, { threshold: 0.5 })

    if (passengerRef.current) obs.observe(passengerRef.current)
    if (commercialRef.current) obs.observe(commercialRef.current)

    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    // reset index when group changes
    setActiveIndex(0)
  }, [activeGroup])

  useEffect(() => {
    if (!videoRef.current) return
    if (isPlaying) videoRef.current.play().catch(()=>{})
    else videoRef.current.pause()
  }, [isPlaying, activeIndex, activeGroup])

  const current = activeGroup === 'passenger' ? passenger[activeIndex] : commercial[activeIndex]

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-28">
        {/* Passenger block */}
        <div ref={passengerRef as any} className="grid md:grid-cols-2 gap-8 items-center">
          <div className="pl-6 border-l border-white/40">
            <h2 className="text-3xl font-semibold">Evolving the drive with <span className="font-bold">360-degree</span> comprehensive solutions</h2>
            <div className="mt-6">
              <h3 className="text-xl font-medium">Passenger vehicles</h3>
              <p className="mt-3 text-sm text-white/70">Revving up innovation from interior to exterior.</p>
            </div>

            <div className="flex gap-3 mt-6">
              {passenger.map((p,i) => (
                <button key={p.id} onClick={() => { setActiveGroup('passenger'); setActiveIndex(i) }} className={`w-12 h-12 rounded-full border ${activeGroup==='passenger' && activeIndex===i ? 'bg-white text-black' : 'bg-transparent text-white/60'}`}>
                  {i+1}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}>
              <video ref={videoRef} src={current.src} muted loop playsInline className="w-full max-w-3xl mx-auto" autoPlay />
            </motion.div>
            <div className="absolute right-6 bottom-6">
              <button aria-label="play-pause" onClick={() => setIsPlaying(p => !p)} className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
                {isPlaying ? '||' : '▶'}
              </button>
            </div>
          </div>
        </div>

        {/* Commercial block */}
        <div ref={commercialRef as any} className="grid md:grid-cols-2 gap-8 items-center">
          <div className="pl-6 border-l border-white/40">
            <h3 className="text-xl font-medium">Commercial vehicles</h3>
            <p className="mt-3 text-sm text-white/70">Advancing engineering for heavy-duty vehicles.</p>

            <div className="flex gap-3 mt-6">
              {commercial.map((p,i) => (
                <button key={p.id} onClick={() => { setActiveGroup('commercial'); setActiveIndex(i) }} className={`w-12 h-12 rounded-full border ${activeGroup==='commercial' && activeIndex===i ? 'bg-white text-black' : 'bg-transparent text-white/60'}`}>
                  {i+1}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}>
              <video ref={videoRef} src={current.src} muted loop playsInline className="w-full max-w-3xl mx-auto" autoPlay />
            </motion.div>
            <div className="absolute right-6 bottom-6">
              <button aria-label="play-pause" onClick={() => setIsPlaying(p => !p)} className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
                {isPlaying ? '||' : '▶'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Car3D from './Car3D'

const HeroSection = () => {
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-ferrari-dark to-black"></div>

      {/* Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-ferrari-red opacity-10 blur-[150px] rounded-full"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(220, 0, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 0, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* 3D Car */}
      <div className="absolute inset-0 z-10">
        <Car3D mousePosition={mousePosition} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="text-ferrari-gold text-sm md:text-base tracking-[0.3em] mb-4 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Introducing
          </motion.p>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 neon-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            FERRARIO
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Born for <span className="text-ferrari-red font-bold">SPEED</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            Where engineering excellence meets unbridled performance.
            Experience the future of supercar innovation.
          </motion.p>

          <motion.button
            className="group relative px-10 py-5 bg-gradient-to-r from-ferrari-red via-red-600 to-ferrari-red text-white font-bold text-lg rounded-full overflow-hidden cursor-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-3">
              <span>EXPERIENCE THE DRIVE</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>

            {/* Animated glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />

            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 border-2 border-ferrari-red rounded-full"
              animate={{
                scale: [1, 1.2, 1.2, 1],
                opacity: [0.8, 0, 0, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-white text-xs mb-2 tracking-widest">SCROLL</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-ferrari-red">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-ferrari-red rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection

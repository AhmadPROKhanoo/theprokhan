import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Red streaks background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 bg-gradient-to-r from-transparent via-ferrari-red to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              width: '100%',
            }}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ 
              x: '100%', 
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="mx-auto mb-8"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DC0000" />
                <stop offset="50%" stopColor="#FF0000" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 20 30 L 70 30 L 70 50 L 35 50 L 35 60 L 65 60 L 65 90 L 20 90 Z"
              fill="url(#logoGradient)"
              stroke="#D4AF37"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
            />
            {/* Speed lines around logo */}
            {[...Array(3)].map((_, i) => (
              <motion.line
                key={i}
                x1="100"
                y1={40 + i * 20}
                x2="110"
                y2={40 + i * 20}
                stroke="#DC0000"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.5 + i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </svg>
        </motion.div>

        <motion.h1
          className="text-5xl font-bold text-white neon-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          FERRARIO
        </motion.h1>

        <motion.p
          className="text-ferrari-gold text-sm tracking-widest mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          BORN FOR SPEED
        </motion.p>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-ferrari-red to-ferrari-gold"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.p
          className="text-white text-xs mt-4 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen

import { motion } from 'framer-motion'

const SpeedLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-ferrari-red to-transparent opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            width: '100%',
          }}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default SpeedLines

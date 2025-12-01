import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const features = [
  {
    title: 'Aero Engineered',
    description: 'Advanced aerodynamics with active downforce management for supreme stability at any speed.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Lightning Acceleration',
    description: '0-60 mph in 2.3 seconds. Pure electric power meets raw combustion force.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    title: 'Track-Born Precision',
    description: 'Race-derived suspension and chassis engineering for unmatched handling dynamics.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'AI Performance Mode',
    description: 'Machine learning optimizes power delivery and traction in real-time for peak performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

const FeatureCard = ({ feature, index }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className="group relative glass p-8 rounded-2xl cursor-glow overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Metallic gradient background */}
      <div className="absolute inset-0 metallic opacity-50"></div>
      
      {/* Red glow on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-ferrari-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(220, 0, 0, 0.5), transparent)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="text-ferrari-red mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {feature.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-ferrari-red transition-colors duration-300">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">
          {feature.description}
        </p>

        {/* Animated line */}
        <motion.div
          className="mt-6 h-1 bg-gradient-to-r from-ferrari-red to-ferrari-gold rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-full h-full bg-ferrari-gold opacity-20"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  )
}

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ferrari-dark via-black to-ferrari-dark"></div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #DC0000 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-ferrari-gold text-sm tracking-[0.3em] mb-4 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Engineering Excellence
          </motion.p>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Pure <span className="text-ferrari-red neon-text">PERFORMANCE</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Every component designed with a singular focus: delivering an unparalleled driving experience
            that pushes the boundaries of automotive achievement.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { value: '1200', label: 'HORSEPOWER', suffix: 'HP' },
            { value: '2.3', label: '0-60 MPH', suffix: 'SEC' },
            { value: '217', label: 'TOP SPEED', suffix: 'MPH' },
            { value: '8500', label: 'RPM LIMIT', suffix: '' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-black text-ferrari-red mb-2 neon-text">
                {stat.value}
                <span className="text-2xl text-ferrari-gold ml-1">{stat.suffix}</span>
              </div>
              <div className="text-gray-500 text-sm tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection

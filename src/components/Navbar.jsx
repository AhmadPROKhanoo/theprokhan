import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'Features', 'Gallery', 'About', 'Contact']

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'glass backdrop-blur-xl py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <svg width="40" height="40" viewBox="0 0 120 120">
            <defs>
              <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DC0000" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            <path
              d="M 20 30 L 70 30 L 70 50 L 35 50 L 35 60 L 65 60 L 65 90 L 20 90 Z"
              fill="url(#navLogoGradient)"
            />
          </svg>
          <span className="text-2xl font-bold text-white">FERRARIO</span>
        </motion.div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-ferrari-red transition-colors duration-300 relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ferrari-red group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="hidden md:block px-6 py-3 bg-gradient-to-r from-ferrari-red to-red-700 text-white font-semibold rounded-full metallic-sweep hover:shadow-lg hover:shadow-ferrari-red/50 transition-all duration-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          CONFIGURE
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar

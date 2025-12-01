import { motion } from 'framer-motion'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    title: 'Front Profile',
    description: 'Aggressive aerodynamics meet timeless design',
    gradient: 'from-red-900 via-ferrari-red to-orange-600',
  },
  {
    id: 2,
    title: 'Side View',
    description: 'Sculpted lines for maximum performance',
    gradient: 'from-ferrari-dark via-gray-800 to-ferrari-red',
  },
  {
    id: 3,
    title: 'Rear Design',
    description: 'Dual exhausts and active aerodynamics',
    gradient: 'from-ferrari-red via-red-800 to-black',
  },
  {
    id: 4,
    title: 'Interior Luxury',
    description: 'Handcrafted Italian leather and carbon fiber',
    gradient: 'from-amber-900 via-ferrari-gold to-yellow-600',
  },
  {
    id: 5,
    title: 'Engine Bay',
    description: 'V12 hybrid powerplant engineering',
    gradient: 'from-gray-900 via-ferrari-red to-orange-700',
  },
  {
    id: 6,
    title: 'Night Mode',
    description: 'LED lighting and neon underglow',
    gradient: 'from-black via-ferrari-dark to-ferrari-red',
  },
]

const GalleryCard = ({ image, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image placeholder with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`}>
        {/* Overlay pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)
            `,
          }}
        ></div>
      </div>

      {/* Red neon outline on hover */}
      <motion.div
        className="absolute inset-0 border-4 border-ferrari-red rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: isHovered ? '0 0 40px rgba(220, 0, 0, 0.8)' : 'none',
        }}
      ></motion.div>

      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
        <motion.h3
          className="text-2xl font-bold text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {image.title}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {image.description}
        </motion.p>

        {/* View button */}
        <motion.button
          className="mt-4 px-4 py-2 bg-ferrari-red text-white rounded-full text-sm font-semibold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Detail
        </motion.button>
      </div>

      {/* Parallax effect elements */}
      <motion.div
        className="absolute top-4 right-4 w-16 h-16 border-2 border-ferrari-gold rounded-full opacity-50"
        animate={{
          y: isHovered ? -10 : 0,
          rotate: isHovered ? 90 : 0,
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 right-6 w-8 h-8 bg-ferrari-red/30 rounded-lg"
        animate={{
          y: isHovered ? 10 : 0,
          rotate: isHovered ? -45 : 0,
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </motion.div>
  )
}

const Gallery = () => {
  return (
    <section id="gallery" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ferrari-dark via-black to-ferrari-dark"></div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-ferrari-red to-transparent"
            style={{
              top: `${20 + i * 20}%`,
              width: '100%',
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
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
            Visual Excellence
          </motion.p>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Gallery of <span className="text-ferrari-red neon-text">POWER</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Witness automotive artistry from every angle. Each frame captures the essence of speed and luxury.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <GalleryCard key={image.id} image={image} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative px-10 py-5 bg-transparent border-2 border-ferrari-red text-white font-bold text-lg rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-3">
              <span>VIEW FULL GALLERY</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>

            <motion.div
              className="absolute inset-0 bg-ferrari-red"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery

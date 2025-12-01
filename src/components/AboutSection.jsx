import { motion } from 'framer-motion'
import { useState } from 'react'

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('heritage')

  const tabs = {
    heritage: {
      title: 'Heritage',
      content: 'Born from decades of racing excellence, Ferrario represents the pinnacle of automotive engineering. Our legacy is built on victories, innovation, and an unwavering commitment to performance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-16 h-16">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    innovation: {
      title: 'Innovation',
      content: 'Cutting-edge hybrid technology meets traditional craftsmanship. Our engineers push boundaries with AI-driven performance systems, active aerodynamics, and revolutionary lightweight materials.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-16 h-16">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    craftsmanship: {
      title: 'Craftsmanship',
      content: 'Every Ferrario is handcrafted by master artisans in our Italian workshop. From the hand-stitched leather interior to the precision-tuned engine, perfection is our standard.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-16 h-16">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  }

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-ferrari-dark to-black"></div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] bg-ferrari-red opacity-5 blur-[120px] rounded-full"></div>
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
            The Ferrario Story
          </motion.p>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Passion Meets <span className="text-ferrari-red neon-text">PRECISION</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {Object.entries(tabs).map(([key, tab]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeTab === key
                      ? 'glass border-2 border-ferrari-red bg-ferrari-red/10'
                      : 'glass border-2 border-transparent hover:border-ferrari-red/50'
                  }`}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{tab.title}</h3>
                  <div className={`h-1 bg-gradient-to-r from-ferrari-red to-ferrari-gold rounded-full transition-all duration-300 ${
                    activeTab === key ? 'w-24' : 'w-0'
                  }`}></div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="glass p-10 rounded-3xl min-h-[400px] flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-ferrari-red mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {tabs[activeTab].icon}
              </motion.div>

              <h3 className="text-3xl font-bold text-white mb-6">{tabs[activeTab].title}</h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {tabs[activeTab].content}
              </p>

              {/* Stats related to active tab */}
              <div className="grid grid-cols-3 gap-4">
                {activeTab === 'heritage' && (
                  <>
                    <div className="text-center">
                      <div className="text-3xl font-black text-ferrari-red">75+</div>
                      <div className="text-xs text-gray-500 uppercase">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-ferrari-red">350+</div>
                      <div className="text-xs text-gray-500 uppercase">Victories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-ferrari-red">12</div>
                      <div className="text-xs text-gray-500 uppercase">Championships</div>
                    </div>
                  </>
                )}
                {activeTab === 'innovation' && (
                  <>
                    <div className="text-center">
                      <div className="text-3xl font-black text-ferrari-red">200+</div>
                      <div className="text-xs text-gray-500 uppercase">Patents</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-ferrari-red">98%</div>
                      <div className="text-xs text-gray-500 uppercase">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-ferrari-red">AI</div>
                      <div className="text-xs text-gray-500 uppercase">Powered</div>
                    </div>
                  </>
                )}
                {activeTab === 'craftsmanship' && (
                  <>
                    <div className="text-center">
                      <div className="text-3xl font-black text-ferrari-red">500+</div>
                      <div className="text-xs text-gray-500 uppercase">Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-ferrari-red">100%</div>
                      <div className="text-xs text-gray-500 uppercase">Handmade</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-ferrari-red">1/1</div>
                      <div className="text-xs text-gray-500 uppercase">Unique</div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-ferrari-red via-ferrari-gold to-ferrari-red"></div>

            {[
              { year: '1947', event: 'Foundation of Ferrario', description: 'The dream begins in Maranello' },
              { year: '1975', event: 'First Championship Victory', description: 'Dominance on the world stage' },
              { year: '2000', event: 'Hybrid Technology Pioneer', description: 'Leading the electric revolution' },
              { year: '2025', event: 'The Future is Here', description: 'Introducing the ultimate supercar' },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="glass p-6 rounded-xl">
                    <div className="text-ferrari-gold font-black text-2xl mb-2">{milestone.year}</div>
                    <h4 className="text-white font-bold text-xl mb-2">{milestone.event}</h4>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>

                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className="w-6 h-6 bg-ferrari-red rounded-full border-4 border-ferrari-gold"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  ></motion.div>
                </div>

                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

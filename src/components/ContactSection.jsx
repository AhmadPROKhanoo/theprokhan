import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      detail: 'info@ferrario.com',
      link: 'mailto:info@ferrario.com',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      detail: 'Maranello, Italy',
      link: '#',
    },
  ]

  const socialLinks = [
    { icon: FaFacebookF, link: '#', name: 'Facebook' },
    { icon: FaTwitter, link: '#', name: 'Twitter' },
    { icon: FaInstagram, link: '#', name: 'Instagram' },
    { icon: FaYoutube, link: '#', name: 'YouTube' },
    { icon: FaLinkedinIn, link: '#', name: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ferrari-dark via-black to-ferrari-dark"></div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 0, 0, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 0, 0, 0.5) 1px, transparent 1px)
            `,
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
            Get In Touch
          </motion.p>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Start Your <span className="text-ferrari-red neon-text">JOURNEY</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to experience the ultimate in automotive excellence? Contact us to schedule your private viewing.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass p-8 rounded-3xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2" htmlFor="name">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-gray-800 rounded-lg text-white focus:outline-none focus:border-ferrari-red transition-all duration-300"
                  required
                  animate={{
                    borderColor: focusedField === 'name' ? '#DC0000' : '#1f2937',
                  }}
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2" htmlFor="email">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-gray-800 rounded-lg text-white focus:outline-none focus:border-ferrari-red transition-all duration-300"
                  required
                  animate={{
                    borderColor: focusedField === 'email' ? '#DC0000' : '#1f2937',
                  }}
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-gray-800 rounded-lg text-white focus:outline-none focus:border-ferrari-red transition-all duration-300"
                  animate={{
                    borderColor: focusedField === 'phone' ? '#DC0000' : '#1f2937',
                  }}
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2" htmlFor="message">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows="5"
                  className="w-full px-4 py-3 bg-black/50 border-2 border-gray-800 rounded-lg text-white focus:outline-none focus:border-ferrari-red transition-all duration-300 resize-none"
                  required
                  animate={{
                    borderColor: focusedField === 'message' ? '#DC0000' : '#1f2937',
                  }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-ferrari-red to-red-700 text-white font-bold text-lg rounded-full overflow-hidden relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>SEND MESSAGE</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    className="flex items-start space-x-4 group cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-ferrari-red/20 rounded-lg flex items-center justify-center text-ferrari-red group-hover:bg-ferrari-red group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.detail}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 bg-ferrari-dark border-2 border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:border-ferrari-red hover:text-ferrari-red hover:bg-ferrari-red/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">Showroom Hours</h3>
              
              <div className="space-y-3 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-ferrari-red font-semibold">By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-12 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <svg width="40" height="40" viewBox="0 0 120 120">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DC0000" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>
                <path
                  d="M 20 30 L 70 30 L 70 50 L 35 50 L 35 60 L 65 60 L 65 90 L 20 90 Z"
                  fill="url(#footerLogoGradient)"
                />
              </svg>
              <span className="text-xl font-bold text-white">FERRARIO MOTORS</span>
            </div>

            <p className="text-gray-500 text-sm">
              © 2025 Ferrario Motors. All rights reserved. | Born for Speed
            </p>

            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-ferrari-red transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-ferrari-red transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

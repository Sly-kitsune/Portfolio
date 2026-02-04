'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 px-6 md:px-12">


      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: '#FE8254' }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: '#3F5A62' }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
        {/* Left side - Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <span className="text-primary/60 text-sm font-semibold uppercase tracking-widest">Welcome to my portfolio</span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold font-heading text-primary leading-tight">
              Yashitha
              <br />
              <span className="relative">
                Mishra
                <motion.span
                  className="absolute bottom-0 left-0 h-1 bg-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-primary/80 leading-relaxed"
          >
            Quantitative Engineer & Algorithmic Trader building intelligent trading systems
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 pt-6">
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="https://github.com/Sly-kitsune"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-secondary transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View GitHub
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-8 pt-8">
            <div>
              <p className="text-primary/60 text-xs uppercase tracking-widest">Based in</p>
              <p className="text-primary font-semibold text-lg">Kochi, India</p>
            </div>
            <div>
              <p className="text-primary/60 text-xs uppercase tracking-widest">Status</p>
              <p className="text-primary font-semibold text-lg">Open to Work</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Profile Picture with animation */}
        <motion.div
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96"
            variants={floatingVariants}
            animate="animate"
          >
            {/* Animated border ring */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Image container */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
              <img
                src="/pfp.png"
                alt="Yashitha Mishra"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-secondary opacity-0"
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-primary/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  )
}

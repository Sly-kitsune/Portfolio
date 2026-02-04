'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B0B0B] relative overflow-hidden px-6 py-24 md:px-12">
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-[rgba(198,40,40,0.08)] blur-[80px] md:blur-[100px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[10%] w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full bg-[rgba(29,53,87,0.15)] blur-[60px] md:blur-[80px]"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Two-column layout */}
      <div className="w-full max-w-[1200px] flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20">
        
        {/* Left side - Text content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-bold leading-[0.95] text-[#EAEAEA] mb-6 font-heading">
              Yashitha
              <br />
              <span className="text-[#C62828]">Mishra</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-[rgba(234,234,234,0.7)] leading-relaxed max-w-[500px] mb-8 md:mb-10 font-body mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Quantitative engineer building trading systems, AI agents, and full-stack applications. 
            Focused on automation, predictive modeling, and clean system architecture.
          </motion.p>
          
          {/* Status row */}
          <motion.div
            className="flex justify-center md:justify-start gap-8 sm:gap-12 mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[rgba(234,234,234,0.4)] mb-2 font-mono">Location</div>
              <div className="text-[#EAEAEA] font-medium font-body text-sm sm:text-base">Kochi, India</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[rgba(234,234,234,0.4)] mb-2 font-mono">Status</div>
              <div className="text-[#C62828] font-medium font-body text-sm sm:text-base">Open to Work</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-[#C62828] text-[#EAEAEA] font-semibold uppercase tracking-wider text-sm no-underline rounded text-center"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 15px 40px rgba(198, 40, 40, 0.4)' 
              }}
              transition={{ duration: 0.3 }}
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border border-[rgba(234,234,234,0.3)] text-[#EAEAEA] font-semibold uppercase tracking-wider text-sm no-underline rounded bg-transparent text-center hover:border-[#C62828] hover:text-[#C62828] transition-colors"
              whileHover={{ borderColor: '#C62828', color: '#C62828' }}
              transition={{ duration: 0.3 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>

        {/* Right side - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full relative overflow-hidden border-4 border-[#C62828] shadow-[0_0_40px_rgba(198,40,40,0.4)] md:shadow-[0_0_60px_rgba(198,40,40,0.4)]">
            <Image
              src="/pfp.jpg"
              alt="Yashitha Mishra"
              fill
              style={{ objectFit: 'cover' }}
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-[rgba(234,234,234,0.3)] text-xs font-mono tracking-[0.3em]">SCROLL</div>
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 gap-20 items-center px-8 md:px-16 pt-32 md:pt-0 bg-[#800020]" id="home">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-montserrat text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight text-white">
          Your Name
        </h1>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
          Quantitative engineer building trading systems, AI agents, and full-stack applications. 
          Focused on automation, predictive modeling, and clean system architecture.
        </p>

        <div className="flex gap-16 mb-10">
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-300 mb-1">Location</div>
            <div className="text-white">Your City, Country</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-300 mb-1">Status</div>
            <div className="text-white">Open to Work</div>
          </div>
        </div>

        <div className="flex gap-5">
          <a 
            href="#projects" 
            className="px-9 py-4 text-xs uppercase tracking-widest border-2 border-[#1C1C1C] bg-[#1C1C1C] text-white hover:bg-transparent hover:text-[#1C1C1C] transition-all"
          >
            View Work
          </a>
          <a 
            href="#contact" 
            className="px-9 py-4 text-xs uppercase tracking-widest border-2 border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-all"
          >
            Contact
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block w-full h-[600px] bg-[#1C1C1C] rounded"
      >
        {/* Add your image here */}
        {/* <img src="/pfp.jpg" alt="Profile" className="w-full h-full object-cover rounded" /> */}
      </motion.div>

      <div className="absolute bottom-12 left-8 md:left-16 flex items-center gap-4 text-xs uppercase tracking-wider text-gray-300">
        <div className="w-8 h-px bg-gray-400"></div>
        SCROLL
      </div>
    </section>
  )
}

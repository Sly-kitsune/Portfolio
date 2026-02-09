'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section 
      className="min-h-screen grid md:grid-cols-2 gap-20 items-center px-8 md:px-16 pt-32 md:pt-0" 
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-montserrat text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
          {/* ← Replace with your real name */}
          Sly Kitsune
        </h1>
        <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
          {/* ← Update this to your real bio / focus areas */}
          Quantitative engineer & developer building high-performance trading systems, 
          autonomous AI agents, full-stack applications, and automated workflows. 
          Passionate about low-latency infrastructure, predictive modeling, clean code architecture, 
          and turning data into alpha.
        </p>
        <div className="flex gap-16 mb-10">
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">Location</div>
            {/* ← Your real location */}
            <div className="text-white">Lisbon, Portugal (Remote-friendly)</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">Status</div>
            {/* ← Your current status */}
            <div className="text-white">Open to Full-time / Contract Opportunities</div>
          </div>
        </div>
        <div className="flex gap-5">
          <a
            href="#projects"
            className="px-9 py-4 text-xs uppercase tracking-widest border border-burgundy text-white hover:bg-burgundy transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">View Work</span>
          </a>
          <a
            href="#contact"
            className="px-9 py-4 text-xs uppercase tracking-widest border border-gray-600 text-white hover:border-white transition-all"
          >
            Contact
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block w-full h-[600px] bg-gradient-to-br from-burgundy to-midnight-black rounded overflow-hidden"
      >
        <img 
          src="/pfp.jpg" 
          alt="Sly Kitsune" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute bottom-12 left-8 md:left-16 flex items-center gap-4 text-xs uppercase tracking-wider text-gray-400">
        <div className="w-8 h-px bg-gray-600"></div>
        SCROLL
      </div>
    </section>
  )
}

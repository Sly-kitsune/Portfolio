'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 items-start">
          <h2 className="text-5xl md:text-6xl font-bold sticky top-32 font-heading text-primary">About</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-16"
          >
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Quantitative Engineer</h3>
              <p className="text-primary/85 text-lg leading-relaxed">
                Trading bot architect with expertise in Python strategy execution, market data pipelines, and risk management. Delivered production-ready systems for crypto and equities trading with measurable performance gains.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <motion.div whileHover={{ x: 5, scale: 1.05 }}>
                <p className="text-primary/60 text-xs uppercase tracking-widest mb-2">Location</p>
                <p className="text-primary font-semibold text-lg">Kochi, India</p>
              </motion.div>
              <motion.div whileHover={{ x: 5, scale: 1.05 }}>
                <p className="text-primary/60 text-xs uppercase tracking-widest mb-2">Status</p>
                <p className="text-primary font-semibold text-lg">Open to Work</p>
              </motion.div>
              <motion.div whileHover={{ x: 5, scale: 1.05 }}>
                <p className="text-primary/60 text-xs uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:lerandomnomad@gmail.com" className="text-primary font-semibold hover:underline">
                  lerandomnomad@gmail.com
                </a>
              </motion.div>
              <motion.div whileHover={{ x: 5, scale: 1.05 }}>
                <p className="text-primary/60 text-xs uppercase tracking-widest mb-2">GitHub</p>
                <a href="https://github.com/Sly-kitsune" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                  Sly-kitsune
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

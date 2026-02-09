'use client'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="py-32 px-8 md:px-16" id="contact">
      <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">GET IN TOUCH</div>
      <h2 className="font-montserrat text-5xl md:text-6xl font-black mb-6 tracking-tight">
        Let's Connect
      </h2>
      <p className="text-gray-400 max-w-2xl mb-16 leading-relaxed">
        Open to full-time opportunities, contract work, technical collaborations, 
        or just interesting conversations about quant trading, AI agents, and system design.
      </p>

      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-3">Email</h4>
          <a
            href="mailto:hello@slykitsune.dev"  // ← change to yours
            className="text-xl md:text-2xl text-white hover:text-burgundy transition-colors duration-200 block"
          >
            hello@slykitsune.dev
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-3">GitHub</h4>
          <a
            href="https://github.com/Sly-kitsune"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-white hover:text-burgundy transition-colors duration-200 block"
          >
            Sly-kitsune
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-3">LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/your-real-profile"  // ← change to yours
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-white hover:text-burgundy transition-colors duration-200 block"
          >
            Your Real Name
          </a>
        </motion.div>
      </div>

      {/* If you ever want to add more (Discord, personal site, etc.) just drop another motion.div here */}
    </section>
  )
}

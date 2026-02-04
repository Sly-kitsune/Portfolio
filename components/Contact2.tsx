'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-[#0B0B0B] flex justify-center">
      <div className="w-full max-w-[900px]">
        {/* Centered header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-[#C62828] tracking-[0.3em] text-xs font-mono block mb-6">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] mb-6 font-heading">
            Let's Connect
          </h2>
          <p className="text-[rgba(234,234,234,0.5)] text-base md:text-lg mx-auto font-body">
            Available for full-time roles, consulting, and technical partnerships.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.a
            href="mailto:lerandomnomad@gmail.com"
            className="block p-6 md:p-10 bg-[#141414] border border-[#2a2a2a] rounded-xl text-center no-underline"
            whileHover={{ 
              y: -5,
              borderColor: '#C62828',
              boxShadow: '0 15px 30px rgba(198, 40, 40, 0.15)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[rgba(234,234,234,0.4)] font-mono mb-3 md:mb-4">
              Email
            </div>
            <div className="text-[#EAEAEA] font-body text-sm md:text-[15px] break-all">
              lerandomnomad@gmail.com
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/Sly-kitsune"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 md:p-10 bg-[#141414] border border-[#2a2a2a] rounded-xl text-center no-underline"
            whileHover={{ 
              y: -5,
              borderColor: '#C62828',
              boxShadow: '0 15px 30px rgba(198, 40, 40, 0.15)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[rgba(234,234,234,0.4)] font-mono mb-3 md:mb-4">
              GitHub
            </div>
            <div className="text-[#EAEAEA] font-body text-sm md:text-[15px]">
              Sly-kitsune
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/yashitha-m-0320355b/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 md:p-10 bg-[#141414] border border-[#2a2a2a] rounded-xl text-center no-underline"
            whileHover={{ 
              y: -5,
              borderColor: '#C62828',
              boxShadow: '0 15px 30px rgba(198, 40, 40, 0.15)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[rgba(234,234,234,0.4)] font-mono mb-3 md:mb-4">
              LinkedIn
            </div>
            <div className="text-[#EAEAEA] font-body text-sm md:text-[15px]">
              Yashitha Mishra
            </div>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 md:mt-20 pt-8 border-t border-[#2a2a2a] flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-[rgba(234,234,234,0.3)] text-xs font-mono tracking-[0.2em]">
            © 2026 YASHITHA MISHRA
          </p>
          <p className="text-[rgba(234,234,234,0.3)] text-xs font-mono tracking-[0.2em]">
            KOCHI, INDIA
          </p>
        </motion.div>
      </div>
    </section>
  )
}

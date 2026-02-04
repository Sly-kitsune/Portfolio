'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0B0B0B', position: 'relative', overflow: 'hidden' }}>
      {/* Parallax background elements */}
      <motion.div
        style={{ position: 'absolute', top: '20%', right: '15%', width: '400px', height: '400px', borderRadius: '50%', backgroundColor: 'rgba(198, 40, 40, 0.08)', filter: 'blur(100px)' }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{ position: 'absolute', bottom: '20%', left: '10%', width: '300px', height: '300px', borderRadius: '50%', backgroundColor: 'rgba(29, 53, 87, 0.15)', filter: 'blur(80px)' }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Two-column layout */}
      <div style={{ width: '100%', maxWidth: '1200px', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px', flexWrap: 'wrap' }}>
        
        {/* Left side - Text content */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 style={{ fontSize: 'clamp(48px, 10vw, 100px)', fontWeight: 700, lineHeight: 0.95, color: '#EAEAEA', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif' }}>
              Yashitha
              <br />
              <span style={{ color: '#C62828' }}>Mishra</span>
            </h1>
          </motion.div>

          <motion.p
            style={{ fontSize: '18px', color: 'rgba(234,234,234,0.7)', lineHeight: 1.7, maxWidth: '500px', marginBottom: '40px', fontFamily: 'Lexend Deca, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Quantitative engineer building trading systems, AI agents, and full-stack applications. 
            Focused on automation, predictive modeling, and clean system architecture.
          </motion.p>
          
          {/* Status row */}
          <motion.div
            style={{ display: 'flex', gap: '48px', marginBottom: '40px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(234,234,234,0.4)', marginBottom: '8px', fontFamily: 'monospace' }}>Location</div>
              <div style={{ color: '#EAEAEA', fontWeight: 500, fontFamily: 'Lexend Deca, sans-serif' }}>Kochi, India</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(234,234,234,0.4)', marginBottom: '8px', fontFamily: 'monospace' }}>Status</div>
              <div style={{ color: '#C62828', fontWeight: 500, fontFamily: 'Lexend Deca, sans-serif' }}>Open to Work</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            style={{ display: 'flex', gap: '20px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <motion.a
              href="#projects"
              style={{ padding: '16px 40px', backgroundColor: '#C62828', color: '#EAEAEA', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', textDecoration: 'none', borderRadius: '4px' }}
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
              style={{ padding: '16px 40px', border: '1px solid rgba(234,234,234,0.3)', color: '#EAEAEA', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', textDecoration: 'none', borderRadius: '4px', backgroundColor: 'transparent' }}
              whileHover={{ borderColor: '#C62828', color: '#C62828' }}
              transition={{ duration: 0.3 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>

        {/* Right side - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{ flexShrink: 0 }}
        >
          <div style={{ 
            width: '320px', 
            height: '320px', 
            borderRadius: '50%', 
            position: 'relative',
            overflow: 'hidden',
            border: '4px solid #C62828',
            boxShadow: '0 0 60px rgba(198, 40, 40, 0.4)',
          }}>
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

      {/* Scroll indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ color: 'rgba(234,234,234,0.3)', fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.3em' }}>SCROLL</div>
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 24px', backgroundColor: '#0B0B0B', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '900px' }}>
        {/* Centered header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '64px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span style={{ color: '#C62828', letterSpacing: '0.3em', fontSize: '12px', fontFamily: 'monospace', display: 'block', marginBottom: '24px' }}>
            CONTACT
          </span>
          <h2 style={{ fontSize: 'clamp(36px, 7vw, 64px)', fontWeight: 700, color: '#EAEAEA', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif' }}>
            Let's Connect
          </h2>
          <p style={{ color: 'rgba(234,234,234,0.5)', fontSize: '18px', margin: '0 auto', fontFamily: 'Lexend Deca, sans-serif' }}>
            Available for full-time roles, consulting, and technical partnerships.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.a
            href="mailto:lerandomnomad@gmail.com"
            style={{
              display: 'block',
              padding: '40px 24px',
              backgroundColor: '#141414',
              border: '1px solid #2a2a2a',
              borderRadius: '12px',
              textAlign: 'center',
              textDecoration: 'none',
            }}
            whileHover={{ 
              y: -5,
              borderColor: '#C62828',
              boxShadow: '0 15px 30px rgba(198, 40, 40, 0.15)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(234,234,234,0.4)', fontFamily: 'monospace', marginBottom: '16px' }}>
              Email
            </div>
            <div style={{ color: '#EAEAEA', fontFamily: 'Lexend Deca, sans-serif', fontSize: '15px' }}>
              lerandomnomad@gmail.com
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/Sly-kitsune"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '40px 24px',
              backgroundColor: '#141414',
              border: '1px solid #2a2a2a',
              borderRadius: '12px',
              textAlign: 'center',
              textDecoration: 'none',
            }}
            whileHover={{ 
              y: -5,
              borderColor: '#C62828',
              boxShadow: '0 15px 30px rgba(198, 40, 40, 0.15)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(234,234,234,0.4)', fontFamily: 'monospace', marginBottom: '16px' }}>
              GitHub
            </div>
            <div style={{ color: '#EAEAEA', fontFamily: 'Lexend Deca, sans-serif', fontSize: '15px' }}>
              Sly-kitsune
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/yashitha-m-0320355b/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '40px 24px',
              backgroundColor: '#141414',
              border: '1px solid #2a2a2a',
              borderRadius: '12px',
              textAlign: 'center',
              textDecoration: 'none',
            }}
            whileHover={{ 
              y: -5,
              borderColor: '#C62828',
              boxShadow: '0 15px 30px rgba(198, 40, 40, 0.15)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(234,234,234,0.4)', fontFamily: 'monospace', marginBottom: '16px' }}>
              LinkedIn
            </div>
            <div style={{ color: '#EAEAEA', fontFamily: 'Lexend Deca, sans-serif', fontSize: '15px' }}>
              Yashitha Mishra
            </div>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          style={{ 
            marginTop: '80px', 
            paddingTop: '32px', 
            borderTop: '1px solid #2a2a2a',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p style={{ color: 'rgba(234,234,234,0.3)', fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.2em' }}>
            © 2026 YASHITHA MISHRA
          </p>
          <p style={{ color: 'rgba(234,234,234,0.3)', fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.2em' }}>
            KOCHI, INDIA
          </p>
        </motion.div>
      </div>
    </section>
  )
}

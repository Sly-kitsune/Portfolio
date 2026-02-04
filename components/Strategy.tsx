'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Go', 'Swift', 'TypeScript', 'SQL'],
  },
  {
    title: 'ML / AI',
    skills: ['PyTorch', 'Transformers', 'LangChain', 'NLP', 'Scikit-learn'],
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'Vapor', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'SwiftUI', 'Tailwind CSS'],
  },
]

export default function Strategy() {
  return (
    <section id="skills" style={{ padding: '120px 24px', backgroundColor: '#0f0f0f', display: 'flex', justifyContent: 'center' }}>
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
            EXPERTISE
          </span>
          <h2 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 700, color: '#EAEAEA', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif' }}>
            Technical Stack
          </h2>
          <p style={{ color: 'rgba(234,234,234,0.5)', fontSize: '18px', margin: '0 auto', fontFamily: 'Lexend Deca, sans-serif' }}>
            Building quantitative systems, AI automation, and production-grade applications across the full stack.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <motion.div
                style={{
                  padding: '40px 24px',
                  backgroundColor: '#141414',
                  border: '1px solid #2a2a2a',
                  borderRadius: '12px',
                  height: '100%',
                  textAlign: 'center',
                }}
                whileHover={{ 
                  y: -5,
                  borderColor: '#C62828',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ color: '#C62828', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: 'monospace', marginBottom: '28px' }}>
                  {category.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {category.skills.map((skill) => (
                    <li 
                      key={skill} 
                      style={{ color: 'rgba(234,234,234,0.8)', fontSize: '15px', fontFamily: 'Lexend Deca, sans-serif' }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    title: 'Sentiment-Bot',
    subtitle: 'Real-time Crypto Sentiment Analysis',
    description: 'NLP-powered trading signal system analyzing social media and news sentiment for cryptocurrency markets. Built with transformer models fine-tuned on financial text data.',
    tech: ['Python', 'Transformers', 'NLP', 'Crypto APIs'],
    features: ['Real-time sentiment scoring', 'Multi-source data aggregation', 'Signal generation pipeline'],
    link: 'https://github.com/Sly-kitsune/Sentiment-Bot',
  },
  {
    title: 'Jobaru',
    subtitle: 'LLM-Powered Job Application Agent',
    description: 'Autonomous AI agent that automates job applications using LLM reasoning. Handles resume tailoring, cover letter generation, and form submission across multiple platforms.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'Selenium'],
    features: ['Automated form filling', 'Context-aware resume matching', 'Multi-platform support'],
    link: 'https://github.com/Sly-kitsune/jobaru-llm-job-agent',
  },
  {
    title: 'Lilith',
    subtitle: 'Lunar-Synced Cycle Tracker',
    description: 'Full-stack iOS application tracking menstrual cycles with lunar phase correlation. Native Swift frontend with Vapor backend handling user data and push notifications.',
    tech: ['Swift', 'SwiftUI', 'Vapor', 'PostgreSQL'],
    features: ['Lunar phase integration', 'Predictive cycle modeling', 'Secure cloud sync'],
    link: 'https://github.com/Sly-kitsune/Lilith-Blood-Moon-Tracker',
  },
  {
    title: 'Chiron Oracle',
    subtitle: 'Natal Chart Calculator',
    description: 'Lightweight Go binary for calculating natal Chiron positions. Designed for zero-dependency distribution—single executable, instant deployment anywhere.',
    tech: ['Go', 'Astronomy', 'CLI'],
    features: ['Zero external dependencies', 'Cross-platform binary', 'Ephemeris calculations'],
    link: 'https://github.com/Sly-kitsune/chiron-oracle',
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const project = projects[currentIndex]

  return (
    <section id="projects" style={{ padding: '120px 24px', backgroundColor: '#0B0B0B', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '900px' }}>
        {/* Section header - centered */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span style={{ color: '#C62828', letterSpacing: '0.3em', fontSize: '12px', fontFamily: 'monospace', display: 'block', marginBottom: '24px' }}>
            PORTFOLIO
          </span>
          <h2 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 700, color: '#EAEAEA', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif' }}>
            Selected Work
          </h2>
          <p style={{ color: 'rgba(234,234,234,0.5)', fontSize: '18px', margin: '0 auto', fontFamily: 'Lexend Deca, sans-serif' }}>
            Trading systems, AI automation, and full-stack applications built for performance and scale.
          </p>
        </motion.div>

        {/* Navigation arrows and project counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <motion.button
            onClick={goToPrevious}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              border: '1px solid #2a2a2a',
              backgroundColor: '#141414',
              color: '#EAEAEA',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
            }}
            whileHover={{ scale: 1.1, borderColor: '#C62828', backgroundColor: '#1a1a1a' }}
            whileTap={{ scale: 0.95 }}
          >
            ←
          </motion.button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {projects.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1)
                  setCurrentIndex(idx)
                }}
                style={{
                  width: idx === currentIndex ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  border: 'none',
                  backgroundColor: idx === currentIndex ? '#C62828' : '#2a2a2a',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ backgroundColor: idx === currentIndex ? '#C62828' : '#444' }}
              />
            ))}
          </div>

          <motion.button
            onClick={goToNext}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              border: '1px solid #2a2a2a',
              backgroundColor: '#141414',
              color: '#EAEAEA',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
            }}
            whileHover={{ scale: 1.1, borderColor: '#C62828', backgroundColor: '#1a1a1a' }}
            whileTap={{ scale: 0.95 }}
          >
            →
          </motion.button>
        </div>

        {/* Project carousel */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px' }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.a
              key={currentIndex}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textDecoration: 'none' }}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <motion.div
                style={{
                  padding: '48px',
                  backgroundColor: '#141414',
                  border: '1px solid #2a2a2a',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}
                whileHover={{ 
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                  borderColor: '#C62828',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Tech stack - centered */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px', justifyContent: 'center' }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        padding: '8px 16px',
                        backgroundColor: '#0B0B0B',
                        color: 'rgba(234,234,234,0.6)',
                        fontFamily: 'monospace',
                        border: '1px solid #2a2a2a',
                        borderRadius: '4px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title & subtitle */}
                <h3 style={{ fontSize: '36px', fontWeight: 700, color: '#EAEAEA', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#C62828', fontSize: '14px', fontWeight: 500, marginBottom: '24px' }}>
                  {project.subtitle}
                </p>
                
                {/* Description */}
                <p style={{ color: 'rgba(234,234,234,0.7)', fontSize: '16px', lineHeight: 1.8, marginBottom: '40px', fontFamily: 'Lexend Deca, sans-serif' }}>
                  {project.description}
                </p>

                {/* Features */}
                <div style={{ paddingTop: '32px', borderTop: '1px solid #2a2a2a' }}>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(234,234,234,0.4)', fontFamily: 'monospace', marginBottom: '20px' }}>
                    Key Features
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px 32px', justifyContent: 'center' }}>
                    {project.features.map((feature, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#C62828' }}>→</span>
                        <span style={{ color: 'rgba(234,234,234,0.8)', fontFamily: 'Lexend Deca, sans-serif', fontSize: '15px' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <div style={{ marginTop: '28px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(234,234,234,0.5)', fontSize: '13px', fontFamily: 'monospace' }}>
                      VIEW ON GITHUB →
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.a>
          </AnimatePresence>
        </div>

        {/* Project counter text */}
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <span style={{ color: 'rgba(234,234,234,0.4)', fontSize: '14px', fontFamily: 'monospace' }}>
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}

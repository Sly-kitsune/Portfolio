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
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 bg-[#0B0B0B] flex justify-center">
      <div className="w-full max-w-[900px]">
        {/* Section header - centered */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-[#C62828] tracking-[0.3em] text-xs font-mono block mb-6">
            PORTFOLIO
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#EAEAEA] mb-6 font-heading">
            Selected Work
          </h2>
          <p className="text-[rgba(234,234,234,0.5)] text-base md:text-lg mx-auto font-body">
            Trading systems, AI automation, and full-stack applications built for performance and scale.
          </p>
        </motion.div>

        {/* Navigation arrows and project counter */}
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <motion.button
            onClick={goToPrevious}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#2a2a2a] bg-[#141414] text-[#EAEAEA] cursor-pointer flex items-center justify-center text-xl md:text-2xl"
            whileHover={{ scale: 1.1, borderColor: '#C62828', backgroundColor: '#1a1a1a' }}
            whileTap={{ scale: 0.95 }}
          >
            ←
          </motion.button>

          <div className="flex items-center gap-2 md:gap-3">
            {projects.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1)
                  setCurrentIndex(idx)
                }}
                className={`h-2 md:h-[10px] rounded cursor-pointer transition-all duration-300 border-none ${
                  idx === currentIndex ? 'w-6 md:w-8 bg-[#C62828]' : 'w-2 md:w-[10px] bg-[#2a2a2a]'
                }`}
                whileHover={{ backgroundColor: idx === currentIndex ? '#C62828' : '#444' }}
              />
            ))}
          </div>

          <motion.button
            onClick={goToNext}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#2a2a2a] bg-[#141414] text-[#EAEAEA] cursor-pointer flex items-center justify-center text-xl md:text-2xl"
            whileHover={{ scale: 1.1, borderColor: '#C62828', backgroundColor: '#1a1a1a' }}
            whileTap={{ scale: 0.95 }}
          >
            →
          </motion.button>
        </div>

        {/* Project carousel */}
        <div className="relative overflow-hidden min-h-[400px] md:min-h-[500px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.a
              key={currentIndex}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <motion.div
                className="p-6 sm:p-8 md:p-12 bg-[#141414] border border-[#2a2a2a] rounded-xl text-center"
                whileHover={{ 
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                  borderColor: '#C62828',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Tech stack - centered */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 justify-center">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] md:text-[11px] uppercase tracking-wider px-3 py-2 md:px-4 md:py-2 bg-[#0B0B0B] text-[rgba(234,234,234,0.6)] font-mono border border-[#2a2a2a] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title & subtitle */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-2 font-heading">
                  {project.title}
                </h3>
                <p className="text-[#C62828] text-sm font-medium mb-4 md:mb-6">
                  {project.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-[rgba(234,234,234,0.7)] text-sm md:text-base leading-relaxed mb-6 md:mb-10 font-body">
                  {project.description}
                </p>

                {/* Features */}
                <div className="pt-6 md:pt-8 border-t border-[#2a2a2a]">
                  <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[rgba(234,234,234,0.4)] font-mono mb-4 md:mb-5">
                    Key Features
                  </div>
                  <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-[#C62828]">→</span>
                        <span className="text-[rgba(234,234,234,0.8)] font-body text-sm md:text-[15px]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <div className="mt-6 md:mt-7">
                    <span className="inline-flex items-center gap-2 text-[rgba(234,234,234,0.5)] text-xs font-mono">
                      VIEW ON GITHUB →
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.a>
          </AnimatePresence>
        </div>

        {/* Project counter text */}
        <div className="text-center mt-6">
          <span className="text-[rgba(234,234,234,0.4)] text-sm font-mono">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}

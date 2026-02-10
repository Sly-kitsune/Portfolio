'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    tags: ['Python', 'Transformers', 'NLP', 'Crypto APIs'],
    title: 'Sentiment-Bot',
    subtitle: 'Real-time Crypto Sentiment Analysis',
    description: 'NLP-powered trading signal system analyzing social media and news sentiment for cryptocurrency markets.',
    features: [
      'Real-time sentiment scoring',
      'Multi-source data aggregation',
      'Signal generation pipeline'
    ],
    link: '#',
    number: '01'
  },
  {
    tags: ['React', 'TypeScript', 'Next.js'],
    title: 'Project Two',
    subtitle: 'Modern Web Application',
    description: 'Full-stack web application with modern architecture and seamless user experience.',
    features: [
      'Server-side rendering',
      'Type-safe development',
      'Optimized performance'
    ],
    link: '#',
    number: '02'
  },
  {
    tags: ['FastAPI', 'PostgreSQL', 'Docker'],
    title: 'API Platform',
    subtitle: 'High-Performance Backend System',
    description: 'Scalable API platform with advanced features and robust architecture.',
    features: [
      'RESTful API design',
      'Database optimization',
      'Containerized deployment'
    ],
    link: '#',
    number: '03'
  },
  {
    tags: ['PyTorch', 'ML', 'AI'],
    title: 'AI Model',
    subtitle: 'Machine Learning Pipeline',
    description: 'End-to-end ML pipeline for predictive modeling and data analysis.',
    features: [
      'Custom model architecture',
      'Training optimization',
      'Production deployment'
    ],
    link: '#',
    number: '04'
  }
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const current = projects[currentIndex]

  return (
    <section className="py-32 px-8 md:px-16 bg-[#1C1C1C]" id="projects">
      <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">PORTFOLIO</div>
      <h2 className="font-montserrat text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">Selected Work</h2>
      <p className="text-gray-400 max-w-2xl mb-20">
        Trading systems, AI automation, and full-stack applications built for performance and scale.
      </p>

      <div className="flex gap-4 mb-10">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="w-14 h-14 border-2 border-[#800020] hover:bg-[#800020] transition-all disabled:opacity-30 disabled:cursor-not-allowed text-xl text-white"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={currentIndex === projects.length - 1}
          className="w-14 h-14 border-2 border-[#800020] hover:bg-[#800020] transition-all disabled:opacity-30 disabled:cursor-not-allowed text-xl text-white"
        >
          →
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-[#800020] border-2 border-[#1C1C1C] p-12 md:p-16 grid md:grid-cols-2 gap-20"
        >
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              {current.tags.map((tag, i) => (
                <span key={i} className="px-4 py-2 border-2 border-[#1C1C1C] text-[#1C1C1C] text-xs uppercase tracking-wide font-bold">
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="font-montserrat text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">{current.title}</h3>
            <p className="text-gray-200 mb-8 text-lg">{current.subtitle}</p>
            <p className="text-gray-300 mb-8">{current.description}</p>

            <ul className="mb-10">
              {current.features.map((feature, i) => (
                <li key={i} className="py-3 border-b-2 border-[#1C1C1C] text-gray-200 text-sm">
                  <span className="text-[#1C1C1C] font-black mr-4 text-xl">→</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a href={current.link} className="text-white text-xs uppercase tracking-widest hover:text-[#1C1C1C] transition-colors inline-flex items-center gap-2 font-bold">
              VIEW ON GITHUB →
            </a>
          </div>

          <div className="flex items-end justify-end">
            <div className="font-montserrat text-8xl font-black text-[#1C1C1C] opacity-50">
              {current.number} / 04
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    title: 'Sentiment-Bot',
    description: 'Real-time crypto sentiment analysis with fine-tuned NLP models',
    link: 'https://github.com/Sly-kitsune/Sentiment-Bot'
  },
  {
    title: 'Jobaru LLM Job Agent',
    description: 'Autonomous AI job application agent running locally on Ollama',
    link: 'https://github.com/Sly-kitsune/jobaru-llm-job-agent'
  },
  {
    title: 'Lilith: Shadow Cycle Tracker',
    description: 'Menstrual cycle tracker synced with lunar phases. Built with Swift & Vapor.',
    link: 'https://github.com/Sly-kitsune/Lilith-Blood-Moon-Tracker'
  },
  {
    title: 'Chiron Oracle',
    description: 'Natal Chiron calculator. Single Go binary, zero dependencies.',
    link: 'https://github.com/Sly-kitsune/chiron-oracle',
    tags: ['Go', 'Astronomy', 'CLI'],
    color: 'from-yellow-500 to-orange-500'
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-32 px-6 md:px-12 border-t border-primary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-4 gap-16"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold sticky top-32 font-heading text-primary">
            Projects
          </motion.h2>

          <motion.div variants={itemVariants} className="md:col-span-3 space-y-12">
            {projects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group block"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="relative border-b border-primary/20 pb-8 overflow-hidden"
                  whileHover={{ paddingBottom: 32 }}
                >
                  <motion.h3
                    className="text-3xl font-bold mb-4 text-primary group-hover:text-primary transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-primary/85 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <motion.p
                    className="text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: hoveredIndex === idx ? 8 : 0 }}
                  >
                    View Project →
                  </motion.p>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

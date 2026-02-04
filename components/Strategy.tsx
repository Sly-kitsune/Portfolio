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
    <section id="skills" className="py-20 md:py-32 px-6 bg-[#0f0f0f] flex justify-center">
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
            EXPERTISE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#EAEAEA] mb-6 font-heading">
            Technical Stack
          </h2>
          <p className="text-[rgba(234,234,234,0.5)] text-base md:text-lg mx-auto font-body max-w-xl">
            Building quantitative systems, AI automation, and production-grade applications across the full stack.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="p-6 md:p-10 bg-[#141414] border border-[#2a2a2a] rounded-xl h-full text-center"
                whileHover={{ 
                  y: -5,
                  borderColor: '#C62828',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-[#C62828] text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono mb-5 md:mb-7">
                  {category.title}
                </h3>
                <ul className="list-none p-0 m-0 flex flex-col gap-3 md:gap-4">
                  {category.skills.map((skill) => (
                    <li 
                      key={skill} 
                      className="text-[rgba(234,234,234,0.8)] text-sm md:text-[15px] font-body"
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

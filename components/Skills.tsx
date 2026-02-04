'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skillCategories = [
  {
    title: 'Trading & Finance',
    skills: ['Algorithmic Trading', 'Quantitative Analysis', 'Risk Management', 'Portfolio Optimization', 'Backtesting', 'Market Data Pipelines']
  },
  {
    title: 'Programming',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Swift', 'Shell/Bash']
  },
  {
    title: 'Data & Tools',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Docker', 'Linux', 'Git']
  },
  {
    title: 'Platforms & APIs',
    skills: ['Binance API', 'Delta Exchange', 'REST APIs', 'Websockets', 'Crypto Markets', 'Equities Trading']
  }
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-32 px-6 md:px-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-4 gap-16"
        >
          <motion.h2 variants={categoryVariants} className="text-5xl md:text-6xl font-bold sticky top-32 font-heading text-primary">
            Skills
          </motion.h2>

          <motion.div variants={categoryVariants} className="md:col-span-3 space-y-12">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={categoryVariants}
                onHoverStart={() => setActiveCategory(idx)}
              >
                <motion.div
                  className="cursor-pointer group"
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors mb-6">
                    {cat.title}
                  </h3>

                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.05 }}
                  >
                    {cat.skills.map((skill, sidx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: sidx * 0.05 }}
                        className="group/skill"
                      >
                        <motion.div
                          className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                          whileHover={{ x: 8, backgroundColor: 'rgba(254, 130, 84, 0.15)' }}
                        >
                          <motion.span
                            className="w-2 h-2 bg-primary rounded-full flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-primary/85 group-hover/skill:text-primary text-base">
                            {skill}
                          </span>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

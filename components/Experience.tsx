'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Independent Quantitative Trader & Engineer',
    company: 'Remote',
    period: 'Feb 2022 – Present',
    description: 'Deployed Python trading bots executing strategies with automated risk controls, monitoring, and PnL tracking. Built market data pipelines and structured logging.'
  },
  {
    title: 'Freelance Quant & Systems Developer',
    company: 'Remote',
    period: 'Dec 2021 – Present',
    description: 'Delivered analytics automation, data extraction, and reporting pipelines for international clients. Streamlined workflows, cutting manual processing and improving data accuracy.'
  }
]

export default function Experience() {
  return (
    <section className="py-20 px-6 md:px-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <h2 className="text-5xl md:text-6xl font-bold sticky top-32 font-heading text-primary">Work</h2>
          
          <div className="md:col-span-3 space-y-20">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="border-b border-primary/20 pb-10">
                  <h3 className="text-3xl font-bold text-primary mb-4">{exp.title}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mb-6 text-primary/60 text-base">
                    <span>{exp.period}</span>
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-primary/85 text-lg leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

const education = [
  {
    degree: 'B.A. Economics',
    school: 'Indira Gandhi National Open University',
    period: '2017 – 2021'
  },
  {
    degree: 'Advanced Data Analytics',
    school: 'Google',
    period: '2021'
  },
  {
    degree: 'CS50: Computer Science for Business Professionals',
    school: 'Harvard University',
    period: '2023'
  },
  {
    degree: 'High-Dimensional Data Analysis',
    school: 'Harvard Business School Online',
    period: '2024'
  }
]

const certifications = [
  'Data Analytics Essentials – Cisco',
  'Entrepreneurship in Emerging Economics – Harvard',
  'Advanced International Business – Saylor Academy',
  'Quantitative and Qualitative Research in Finance – Open University'
]

export default function Education() {
  return (
    <section className="py-20 px-6 md:px-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <h2 className="text-5xl md:text-6xl font-bold sticky top-32 font-heading text-primary">Education</h2>
          
          <div className="md:col-span-3 space-y-16">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-b border-primary/20 pb-8"
              >
                <h3 className="text-3xl font-bold mb-4 text-primary">{edu.degree}</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-primary/60 text-base">
                  <span>{edu.school}</span>
                  <span>{edu.period}</span>
                </div>
              </motion.div>
            ))}

            <div className="pt-8">
              <h3 className="text-3xl font-bold mb-8 text-primary">Certifications</h3>
              <ul className="space-y-4">
                {certifications.map((cert, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-primary/85 text-lg flex items-start"
                  >
                    <span className="mr-3">•</span>
                    <span>{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

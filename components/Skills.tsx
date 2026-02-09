'use client'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Core Languages',
    skills: [
      'Python (advanced)',
      'TypeScript / JavaScript',
      'C++ (performance-critical)',
      'SQL & PostgreSQL',
    ],
  },
  {
    title: 'Machine Learning & AI',
    skills: [
      'PyTorch & Transformers',
      'NLP & Sentiment Analysis',
      'Reinforcement Learning',
      'LangChain / LangGraph',
      'Scikit-learn & Pandas / NumPy',
      'MLOps basics (Docker, CI/CD)',
    ],
  },
  {
    title: 'Trading & Quant Infrastructure',
    skills: [
      'Algorithmic Trading Systems',
      'Backtesting & Simulation',
      'Crypto / Exchange APIs (CCXT, Binance)',
      'Time Series & Statistical Modeling',
      'Risk & Portfolio Optimization',
    ],
  },
  {
    title: 'Full-Stack & DevOps',
    skills: [
      'Next.js & React',
      'FastAPI & Node.js',
      'Tailwind CSS & Framer Motion',
      'Docker & Containerization',
      'Redis & Real-time Systems',
      'Cloud (AWS / GCP basics)',
    ],
  },
]

export default function Skills() {
  return (
    <section className="py-32 px-8 md:px-16" id="skills">
      <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">EXPERTISE</div>
      <h2 className="font-montserrat text-5xl md:text-6xl font-black mb-6 tracking-tight">
        Technical Stack
      </h2>
      <p className="text-gray-400 max-w-2xl mb-20 leading-relaxed">
        Core tools and frameworks for building high-performance trading systems, autonomous AI agents,
        predictive models, and scalable full-stack applications in production environments.
      </p>

      <div className="grid md:grid-cols-4 gap-12 md:gap-16">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h4 className="font-montserrat text-xl font-black mb-6 tracking-tight text-white">
              {category.title}
            </h4>
            <ul className="space-y-3">
              {category.skills.map((skill, j) => (
                <li
                  key={j}
                  className="text-gray-300 hover:text-burgundy transition-colors duration-200 text-sm font-medium flex items-center gap-2"
                >
                  <span className="text-burgundy opacity-70">→</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

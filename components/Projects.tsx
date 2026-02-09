'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    tags: ['Python', 'Transformers', 'NLP', 'Crypto APIs', 'CCXT', 'VADER + BERT'],
    title: 'Sentiment-Bot',
    subtitle: 'Real-time Crypto Sentiment Analysis & Trading Signals',
    description:
      'Live pipeline that scrapes Twitter/X, Reddit, and news APIs, computes sentiment scores using fine-tuned transformers, and generates buy/sell signals for major cryptocurrencies.',
    features: [
      'Multi-source real-time data aggregation (X API, NewsAPI, Reddit)',
      'Hybrid sentiment model (rule-based + deep learning)',
      'Backtesting framework with historical signal performance',
      'Webhook alerts to Discord / Telegram',
    ],
    link: 'https://github.com/Sly-kitsune/sentiment-bot', // ← replace with your real repo
    image: '/projects/sentiment-bot.jpg', // add this file to public/projects/
    number: '01',
  },
  {
    tags: ['PyTorch', 'Reinforcement Learning', 'Trading Gym', 'Docker'],
    title: 'RL-Trader',
    subtitle: 'Autonomous Trading Agent with Deep RL',
    description:
      'Deep reinforcement learning agent trained to trade BTC/USD on live and simulated data, optimizing for Sharpe ratio and drawdown control.',
    features: [
      'Custom OpenAI Gym-compatible trading environment',
      'PPO + DQN algorithms with reward shaping',
      'Live paper trading integration via Binance / Bybit APIs',
      'Jupyter notebooks for training visualization & analysis',
    ],
    link: 'https://github.com/Sly-kitsune/rl-trader', // ← your repo
    image: '/projects/rl-trader.jpg',
    number: '02',
  },
  {
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Supabase'],
    title: 'Quant Dashboard',
    subtitle: 'Personal Quantitative Analytics Platform',
    description:
      'Full-stack dashboard for monitoring trading signals, portfolio performance, risk metrics, and backtest results with real-time updates.',
    features: [
      'Server-side rendering + real-time subscriptions',
      'Interactive charts (Recharts / TradingView lightweight)',
      'Authentication & data persistence with Supabase',
      'Responsive design with dark mode',
    ],
    link: 'https://github.com/Sly-kitsune/quant-dashboard',
    image: '/projects/quant-dashboard.jpg',
    number: '03',
  },
  {
    tags: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    title: 'Algo-Orchestrator',
    subtitle: 'Backend for Multi-Strategy Trading System',
    description:
      'High-performance REST + WebSocket API serving as the backbone for executing and monitoring multiple algorithmic trading strategies.',
    features: [
      'Asynchronous task queues with Celery + Redis',
      'Rate-limited external exchange API wrappers',
      'Robust logging, monitoring & alerting',
      'CI/CD with GitHub Actions + Docker Compose',
    ],
    link: 'https://github.com/Sly-kitsune/algo-orchestrator',
    image: '/projects/algo-orchestrator.jpg',
    number: '04',
  },
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
    <section className="py-32 px-8 md:px-16" id="projects">
      <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">PORTFOLIO</div>
      <h2 className="font-montserrat text-5xl md:text-6xl font-black mb-6 tracking-tight">
        Selected Work
      </h2>
      <p className="text-gray-400 max-w-2xl mb-20">
        Trading systems, autonomous AI agents, quantitative tools, and full-stack infrastructure built for performance, reliability, and alpha generation.
      </p>

      <div className="flex gap-4 mb-10">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="w-14 h-14 border border-gray-600 hover:border-burgundy hover:bg-burgundy transition-all disabled:opacity-30 disabled:cursor-not-allowed text-xl font-bold"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={currentIndex === projects.length - 1}
          className="w-14 h-14 border border-gray-600 hover:border-burgundy hover:bg-burgundy transition-all disabled:opacity-30 disabled:cursor-not-allowed text-xl font-bold"
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
          className="bg-midnight-black border border-white/5 p-8 md:p-16 grid md:grid-cols-2 gap-12 md:gap-20 rounded-lg overflow-hidden"
        >
          {/* Left: Content */}
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-3 mb-8">
              {current.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 border border-burgundy/60 text-burgundy text-xs uppercase tracking-wide rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-montserrat text-4xl md:text-5xl font-black mb-4 tracking-tight">
              {current.title}
            </h3>
            <p className="text-xl text-gray-300 mb-6 font-medium">{current.subtitle}</p>
            <p className="text-gray-400 mb-8 leading-relaxed">{current.description}</p>

            <ul className="mb-10 space-y-3">
              {current.features.map((feature, i) => (
                <li key={i} className="text-gray-300 text-sm flex items-start">
                  <span className="text-burgundy font-bold mr-4 mt-1">→</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={current.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xs uppercase tracking-widest hover:text-burgundy transition-colors inline-flex items-center gap-2 font-medium"
            >
              VIEW PROJECT ON GITHUB →
            </a>
          </div>

          {/* Right: Visual / Number */}
          <div className="relative flex items-center justify-center md:items-end md:justify-end">
            {current.image ? (
              <img
                src={current.image}
                alt={current.title}
                className="max-h-[420px] w-auto object-contain rounded-md shadow-2xl border border-white/10"
              />
            ) : (
              <div className="w-full h-80 bg-gradient-to-br from-burgundy/20 to-midnight-black rounded-md flex items-center justify-center">
                <span className="text-6xl font-black text-white/10">Project Visual</span>
              </div>
            )}

            <div className="absolute bottom-6 right-6 font-montserrat text-8xl md:text-9xl font-black text-white/5 pointer-events-none">
              {current.number} / {projects.length.toString().padStart(2, '0')}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

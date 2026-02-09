'use client'

import AnimatedCursor from '@/components/AnimatedCursor'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <AnimatedCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-6 flex justify-between items-center">
          <div className="text-xl font-montserrat font-bold tracking-wider">YM</div>
          <ul className="flex gap-10 md:gap-12">
            <li><a href="#projects" className="text-gray-400 hover:text-white text-xs uppercase tracking-widest transition-colors">Projects</a></li>
            <li><a href="#skills" className="text-gray-400 hover:text-white text-xs uppercase tracking-widest transition-colors">Tech Stack</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white text-xs uppercase tracking-widest transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      <Hero />
      <Projects />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-400">
          <p>© 2026 YOUR NAME</p>
          <p>YOUR CITY, COUNTRY</p>
        </div>
      </footer>
    </>
  )
}

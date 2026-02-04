'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero2'
import Projects from '@/components/Projects2'
import Strategy from '@/components/Strategy'
import Contact from '@/components/Contact2'
import AnimatedCursor from '@/components/AnimatedCursor'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <AnimatedCursor />
      <Navigation />
      <Hero />
      <Projects />
      <Strategy />
      <Contact />
    </div>
  )
}

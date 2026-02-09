'use client'

import { useEffect, useState } from 'react'

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY })
      }, 80)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updatePosition)

    const interactiveElements = document.querySelectorAll('a, button')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div 
        className="hidden md:block fixed w-3 h-3 bg-burgundy rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease'
        }}
      />
      <div 
        className={`hidden md:block fixed border border-burgundy rounded-full pointer-events-none z-[9999] transition-all duration-150 ${isHovering ? 'w-16 h-16 bg-burgundy/10' : 'w-8 h-8'}`}
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  )
}

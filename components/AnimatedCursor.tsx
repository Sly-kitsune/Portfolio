'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    document.body.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={{ duration: 0, type: 'tween' }}
    >
      <div className="w-3 h-3 -ml-1.5 -mt-1.5 bg-[#C62828] rounded-full mix-blend-difference" />
    </motion.div>
  )
}

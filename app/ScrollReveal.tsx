'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveal = () => {
      if (ref.current) {
        const windowHeight = window.innerHeight;
        const elementTop = ref.current.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          ref.current.classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

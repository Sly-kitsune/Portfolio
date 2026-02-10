'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveal = () => {
      if (ref.current) {
        const windowHeight = window.innerHeight;
        const elementTop = ref.current.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
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

'use client';

import Link from 'next/link';
import { useCallback } from 'react';

export default function Navbar() {
  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <nav className="fixed top-0 w-full px-[60px] py-[30px] flex justify-between items-center z-[1000] bg-background/80 backdrop-blur-[10px]">
      <div className="logo text-accent text-[24px] font-bold tracking-[2px]">YASHITHA MISHRA</div>
      <ul className="nav-links flex gap-[40px] list-none">
        <li>
          <a 
            href="#home" 
            onClick={(e) => handleScroll(e, '#home')} 
            className="text-text text-[14px] tracking-[1px] uppercase transition-colors hover:text-accent relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-width after:duration-300 hover:after:w-full"
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, '#about')} 
            className="text-text text-[14px] tracking-[1px] uppercase transition-colors hover:text-accent relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-width after:duration-300 hover:after:w-full"
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, '#projects')} 
            className="text-text text-[14px] tracking-[1px] uppercase transition-colors hover:text-accent relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-width after:duration-300 hover:after:w-full"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, '#contact')} 
            className="text-text text-[14px] tracking-[1px] uppercase transition-colors hover:text-accent relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-width after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

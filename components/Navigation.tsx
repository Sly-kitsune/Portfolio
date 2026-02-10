'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 bg-background/80 backdrop-blur-md">
      <div className="logo text-accent text-2xl font-bold tracking-widest">YOUR NAME</div> {/* Update from resume */}
      <ul className="flex gap-10 text-sm uppercase tracking-wide">
        <li><Link href="#home" className="hover:text-accent relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-width hover:after:w-full">Home</Link></li>
        <li><Link href="#about" className="hover:text-accent relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-width hover:after:w-full">About</Link></li>
        <li><Link href="#portfolio" className="hover:text-accent relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-width hover:after:w-full">Portfolio</Link></li>
        <li><Link href="#contact" className="hover:text-accent relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-width hover:after:w-full">Contact</Link></li>
      </ul>
    </nav>
  );
}

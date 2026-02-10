'use client';

import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement | null;
    const follower = document.querySelector('.cursor-follower') as HTMLElement | null;

    if (!cursor || !follower) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      setTimeout(() => {
        follower.style.left = `${e.clientX}px`;
        follower.style.top = `${e.clientY}px`;
      }, 100);
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div className="cursor" />
      <div className="cursor-follower" />
    </>
  );
}

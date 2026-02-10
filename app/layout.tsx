import type { Metadata } from 'next';
import './globals.css';
import Cursor from '@/components/Cursor'; // Adjust path if needed
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Yashitha Mishra - Quant Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

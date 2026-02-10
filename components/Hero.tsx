import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-full h-full z-0 overflow-hidden">
        <motion.div className="circle absolute rounded-full bg-gradient-radial from-[rgba(128,0,32,0.1)] to-transparent w-[300px] h-[300px] top-[10%] left-[10%]" animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity }} />
        <motion.div className="circle absolute rounded-full bg-gradient-radial from-[rgba(128,0,32,0.1)] to-transparent w-[200px] h-[200px] top-[60%] right-[20%]" animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, delay: 5 }} />
        <motion.div className="circle absolute rounded-full bg-gradient-radial from-[rgba(128,0,32,0.1)] to-transparent w-[400px] h-[400px] bottom-[10%] left-[50%]" animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, delay: 10 }} />
      </div>
      <div className="text-center z-10">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-8xl font-black tracking-tighter">Yashitha <span className="text-accent">Mishra</span><br />Quant Developer</motion.h1> {/* Customize from resume */}
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-xl text-muted tracking-widest uppercase">Building AI-Driven Trading Systems</motion.p>
        <motion.button initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="mt-10 px-10 py-4 border-2 border-accent text-text uppercase tracking-widest relative overflow-hidden hover:bg-accent transition-all">
          Explore Projects
        </motion.button>
      </div>
    </section>
  );
}

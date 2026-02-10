import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="h-[100vh] flex items-center justify-center relative overflow-hidden">
      <div className="bg-animation absolute w-full h-full overflow-hidden z-[1]">
        <motion.div 
          className="circle absolute rounded-[50%] bg-gradient-radial from-[rgba(128,0,32,0.1)] to-transparent w-[300px] h-[300px] top-[10%] left-[10%]" 
          animate={{ translateX: [0, 50, 0], translateY: [0, 50, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} 
        />
        <motion.div 
          className="circle absolute rounded-[50%] bg-gradient-radial from-[rgba(128,0,32,0.1)] to-transparent w-[200px] h-[200px] top-[60%] right-[20%]" 
          animate={{ translateX: [0, 50, 0], translateY: [0, 50, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }} 
        />
        <motion.div 
          className="circle absolute rounded-[50%] bg-gradient-radial from-[rgba(128,0,32,0.1)] to-transparent w-[400px] h-[400px] bottom-[10%] left-[50%]" 
          animate={{ translateX: [0, 50, 0], translateY: [0, 50, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 10 }} 
        />
      </div>
      <div className="hero-content text-center z-[2]">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-[80px] font-[900] mb-[20px] tracking-[-2px]"
        >
          Yashitha <span className="text-accent">Mishra</span><br />Quant Developer
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.2 }} 
          className="text-[20px] text-muted tracking-[3px] uppercase"
        >
          Designing Automated Trading Strategies
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.4 }} 
          className="cta-button mt-[40px] px-[40px] py-[15px] bg-transparent border-2 border-accent text-text text-[14px] tracking-[2px] uppercase cursor-pointer transition-all relative overflow-hidden hover:before:left-0 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-accent before:transition-left before:duration-300 before:z-[-1]"
          onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Work
        </motion.button>
      </div>
    </section>
  );
}

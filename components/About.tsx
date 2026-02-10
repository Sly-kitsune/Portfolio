export default function About() {
  return (
    <section id="about" className="py-[150px] px-[60px] grid grid-cols-1 md:grid-cols-2 gap-[100px] items-center">
      <div className="about-text">
        <h2 className="text-[60px] mb-[30px] tracking-[-1px]">About Me</h2>
        <p className="text-[18px] leading-[1.8] text-muted mb-[20px]">
          Experienced in designing automated trading strategies for crypto/equities, data analysis, risk management, and bot development. Thrives in fast-paced settings.
        </p>
        <p className="text-[18px] leading-[1.8] text-muted mb-[20px]">
          BA in Economics (IGNOU, 2017–2021); Certifications in Data Analytics, CS for Business, and more from Harvard, Google, Cisco.
        </p>
        {/* Add more from resume */}
      </div>
      <div className="about-image w-full h-[500px] bg-gradient-to-br from-accent to-background rounded-[10px] relative overflow-hidden hover:before:left-[100%] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,255,255,0.1)] before:to-transparent before:transition-left before:duration-500" />
    </section>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Sentiment-Bot',
      description: 'Live pipeline for sentiment analysis on crypto via NLP (VADER + BERT).',
      repo: 'https://github.com/Sly-kitsune/sentiment-bot',
      bg: '/sentiment-bot.jpg', // Add image to public/
    },
    {
      title: 'RL-Trader',
      description: 'Reinforcement learning agent for BTC/USD trading with PyTorch.',
      repo: 'https://github.com/Sly-kitsune/rl-trader',
      bg: '/rl-trader.jpg',
    },
    // Add more: Quant Dashboard, Algo-Orchestrator, Lilith, Chiron from resume
  ];

  return (
    <section id="projects" className="py-[150px] px-[60px]">
      <h2 className="text-[60px] text-center mb-[80px] tracking-[-1px]">Selected Works</h2>
      <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {projects.map((project, index) => (
          <a href={project.repo} key={index} target="_blank" rel="noopener noreferrer">
            <div 
              className="portfolio-item h-[500px] bg-card rounded-[10px] overflow-hidden relative cursor-pointer transition-transform hover:-translate-y-[10px]" 
              style={{ backgroundImage: `url(${project.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(128,0,32,0.8)] to-[rgba(0,0,0,0.8)] opacity-0 transition-opacity duration-300 hover:opacity-100" />
              <div className="portfolio-info absolute bottom-[30px] left-[30px] z-[2] opacity-0 translate-y-[20px] transition-all duration-300 hover:opacity-100 hover:translate-y-0">
                <h3 className="text-[28px] mb-[10px]">{project.title}</h3>
                <p className="text-[#ccc] text-[14px] tracking-[1px]">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

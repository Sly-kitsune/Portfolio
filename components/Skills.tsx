'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'ML / AI',
      skills: ['PyTorch', 'Transformers', 'LangChain', 'NLP', 'Scikit-learn']
    },
    {
      title: 'Backend',
      skills: ['FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']
    }
  ]

  return (
    <section className="py-32 px-8 md:px-16" id="skills">
      <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">EXPERTISE</div>
      <h2 className="font-montserrat text-5xl md:text-6xl font-black mb-6 tracking-tight">Technical Stack</h2>
      <p className="text-gray-400 max-w-2xl mb-20">
        Building quantitative systems, AI automation, and production-grade applications across the full stack.
      </p>

      <div className="grid md:grid-cols-4 gap-16">
        {skillCategories.map((category, i) => (
          <div key={i}>
            <h4 className="font-montserrat text-lg font-bold mb-6 tracking-wide">{category.title}</h4>
            <ul>
              {category.skills.map((skill, j) => (
                <li key={j} className="py-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

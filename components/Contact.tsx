'use client'

export default function Contact() {
  return (
    <section className="py-32 px-8 md:px-16" id="contact">
      <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">CONTACT</div>
      <h2 className="font-montserrat text-5xl md:text-6xl font-black mb-6 tracking-tight">Let's Connect</h2>
      <p className="text-gray-400 max-w-2xl mb-20">
        Available for full-time roles, consulting, and technical partnerships.
      </p>

      <div className="grid md:grid-cols-3 gap-16">
        <div>
          <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">Email</h4>
          <a href="mailto:your.email@example.com" className="text-xl text-white hover:text-burgundy transition-colors">
            your.email@example.com
          </a>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">GitHub</h4>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-burgundy transition-colors">
            yourusername
          </a>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">LinkedIn</h4>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-burgundy transition-colors">
            Your Name
          </a>
        </div>
      </div>
    </section>
  )
}

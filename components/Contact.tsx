'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <h2 className="text-5xl md:text-6xl font-bold sticky top-32 font-heading text-primary">Contact</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-8"
          >
            <a
              href="mailto:lerandomnomad@gmail.com"
              className="block text-primary text-xl font-semibold hover:underline"
            >
              Email →
            </a>
            <a
              href="https://github.com/Sly-kitsune"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary text-xl font-semibold hover:underline"
            >
              GitHub →
            </a>
            <a
              href="https://www.linkedin.com/in/yashitha-m-0320355b/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary text-xl font-semibold hover:underline"
            >
              LinkedIn →
            </a>
            <a
              href="tel:+919074284505"
              className="block text-primary text-xl font-semibold hover:underline"
            >
              Phone →
            </a>
          </motion.div>
        </div>

        <div className="border-t border-primary/20 mt-20 pt-12 text-center text-primary/60">
          <p>© 2024 Yashitha Mishra. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Tanish<br />Shah
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            Software Developer
          </motion.p>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-8 md:px-16 lg:px-32">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Passionate software developer with expertise in modern web technologies.
            I create elegant, efficient solutions that bridge creativity and functionality.
            Always learning, always building.
          </p>
        </motion.div>
      </section>

      {/* My Projects */}
      <section className="py-20 px-8 md:px-16 lg:px-32 bg-gray-900">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Project One', desc: 'A modern web application built with React and Node.js.' },
              { title: 'Project Two', desc: 'Mobile-first design with responsive layouts.' },
              { title: 'Project Three', desc: 'Full-stack solution with cloud integration.' },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-black p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Who I've Worked With */}
      <section className="py-20 px-8 md:px-16 lg:px-32">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Who I've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company, index) => (
              <motion.div
                key={index}
                className="text-center p-4 border border-gray-800 rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-medium">{company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* My Skills */}
      <section className="py-20 px-8 md:px-16 lg:px-32 bg-gray-900">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">My Skills</h2>
          <div className="flex flex-wrap gap-4">
            {[
              'JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'TypeScript',
              'Tailwind CSS', 'Framer Motion', 'Git', 'AWS'
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-black border border-gray-800 rounded-full text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
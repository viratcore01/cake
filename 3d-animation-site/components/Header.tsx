'use client'

import { motion } from 'framer-motion'

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark/30 border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-glow"
          >
            3D.Studio
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Gallery', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: '#00d9ff' }}
                className="text-gray-300 hover:text-accent transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-lg bg-accent text-dark font-bold glow hover:glow-strong transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </header>
  )
}

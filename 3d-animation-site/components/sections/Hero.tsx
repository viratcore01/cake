'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-96 h-96 bg-accent-2/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 5 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold mb-6 text-glow"
        >
          Welcome to <span className="text-accent">3D.Studio</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Experience stunning 3D animations and scroll-triggered visual effects with cutting-edge technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-accent text-dark font-bold transition-all"
          >
            Explore Gallery
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg glass text-white font-bold transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 mt-20"
        >
          <ArrowDown className="w-6 h-6 text-accent" />
        </motion.div>
      </div>
    </motion.section>
  )
}

'use client'

import { motion } from 'framer-motion'
import ScrollImageSequence from '@/components/ScrollImageSequence'

interface GalleryProps {
  images: string[]
}

export default function Gallery({ images }: GalleryProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  return (
    <section id="gallery" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 text-glow">
            Scroll Animation Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Scroll through our collection of immersive 3D animations. Each frame transitions smoothly with your scroll position.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-32"
        >
          <ScrollImageSequence
            images={images.slice(0, 19)}
            title="Breaking Animation"
            description="A smooth 19-frame animation sequence triggered by scroll. Watch as objects break and transform across frames."
          />

          {/* Additional Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="h-96 glass rounded-2xl flex items-center justify-center"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-glow mb-4">
                More Animations Coming
              </h3>
              <p className="text-gray-300">
                Upload more image sequences to create additional animations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

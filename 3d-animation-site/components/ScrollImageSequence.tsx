'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

interface ScrollImageProps {
  images: string[]
  title: string
  description: string
}

export default function ScrollImageSequence({
  images,
  title,
  description,
}: ScrollImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeFrame, setActiveFrame] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9])
  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10])

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const maxFrame = Math.max(images.length - 1, 0)
    const nextFrame = Math.round(progress * maxFrame)
    const clampedFrame = Math.min(Math.max(nextFrame, 0), maxFrame)
    setActiveFrame(clampedFrame)
  })

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center glass rounded-2xl overflow-hidden"
      style={{
        opacity,
        scale,
        rotate,
      }}
    >
      {/* Background animated grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-2/10" />

      {/* Image Display */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="relative w-4/5 h-4/5 max-w-2xl">
          {images.length > 0 && (
            <motion.img
              key={images[activeFrame]}
              src={images[activeFrame]}
              alt={`Frame ${activeFrame + 1}`}
              className="absolute inset-0 w-full h-full object-contain rounded-xl"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.18, ease: 'linear' }}
            />
          )}
        </div>
      </div>

      {/* Info Overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl font-bold mb-2 text-glow">{title}</h3>
        <p className="text-lg text-gray-300">{description}</p>
      </motion.div>
    </motion.div>
  )
}

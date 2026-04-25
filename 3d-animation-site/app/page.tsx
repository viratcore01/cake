'use client';

import CakeScrollCanvas from '@/components/CakeScrollCanvas';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative w-full bg-[#110A0A] text-[#F8F3EA]">
      {/* 1. Background Animation Canvas */}
      <CakeScrollCanvas />

      {/* 2. Scrollable Content wrapper */}
      <div className="relative z-10 w-full" style={{ height: '400vh' }}>
        
        {/* Section 1: Hero */}
        <section className="h-screen w-full flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="font-playfair text-6xl md:text-8xl font-bold tracking-tight text-[#D4AF37] mb-4 drop-shadow-lg">
              Velvet Crumb
            </h1>
            <p className="font-lato text-xl md:text-2xl font-light tracking-widest uppercase text-white/90">
              Artisan Cakes & Confections
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 flex flex-col items-center"
          >
            <span className="text-sm uppercase tracking-widest mb-2 font-lato">Scroll to Discover</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </section>

        {/* Section 2: Introduction to breaking texture */}
        <section className="h-screen w-full flex items-center justify-start px-8 md:px-24">
          <div className="max-w-xl group">
             <div className="p-10 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-700">
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold mb-6 text-white group-hover:text-[#D4AF37] transition-colors">
                The Perfect Break
              </h2>
              <p className="font-lato text-lg text-white/80 leading-relaxed font-light">
                Our signature cakes are crafted with precision. The delicate exterior shatters to reveal a rich, velvety center. Every bite is an orchestrated symphony of textures—from the brittle artisan chocolate shell to the soft sponge within.
              </p>
             </div>
          </div>
        </section>

        {/* Section 3: Flavors */}
        <section className="h-screen w-full flex items-center justify-end px-8 md:px-24">
          <div className="max-w-xl group">
             <div className="p-10 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#8A334B]/50 transition-all duration-700">
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold mb-6 text-white group-hover:text-[#8A334B] transition-colors text-right">
                Masterful Flavors
              </h2>
              <p className="font-lato text-lg text-white/80 leading-relaxed font-light text-right">
                Dark chocolate infused with hazelnut praline, raspberry coulis sealed in a shell of ivory chocolate, and classic Madagascan vanilla bean. Handcrafted daily in our master bakery for your ultimate indulgence.
              </p>
             </div>
          </div>
        </section>

        {/* Section 4: Ending / Call to action */}
        <section className="h-screen w-full flex flex-col items-center justify-center px-6 relative">
          <div className="p-16 rounded-3xl bg-black/60 backdrop-blur-xl border border-[#D4AF37]/20 text-center shadow-2xl">
            <h2 className="font-playfair text-5xl md:text-7xl font-bold mb-8 text-[#D4AF37]">
              Taste the Magic
            </h2>
            <p className="font-lato text-xl mb-12 text-white/80">
              Reserve your custom creation today.
            </p>
            <button className="px-10 py-4 bg-[#D4AF37] text-black font-semibold uppercase tracking-widest font-lato text-sm hover:bg-white transition-colors duration-300 rounded-full">
              Place an Order
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero.jpeg" 
          alt="MemoRing Hero Background" 
          fill 
          className="object-cover" 
          priority 
        />
        {/* Gradient Overlay for readability and theme */}
        <div className="absolute inset-0 bg-white/30 bg-gradient-to-r from-white/80 via-white/40 to-white/20" />
        
        {/* Animated Orbs blended in background */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-light blur-[120px] mix-blend-multiply"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-accent-cyan blur-[140px] mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-dark mb-8 leading-[1.1]">
            Votre mémoire, <br />
            <span className="text-brand">augmentée.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-slate mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            MemoRing combine une bague connectée élégante et une IA puissante pour capturer vos idées, transcrire vos conversations et vous rappeler ce qui compte vraiment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="pill" className="text-lg px-10 py-6 h-auto shadow-xl shadow-brand/25 text-white">
              Découvrir la plateforme
            </Button>
            <Button variant="glass" size="pill" className="text-lg px-10 py-6 h-auto bg-white/40 hover:bg-white/60 border-white/60">
              Voir comment ça marche
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

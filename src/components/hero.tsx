"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-dark mb-8 leading-[1.1] drop-shadow-md">
            Votre mémoire, <br />
            <span className="text-brand drop-shadow-md">augmentée.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-slate mb-10 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
            MemoRing combine une bague connectée élégante et une IA puissante pour capturer vos idées, transcrire vos conversations et vous rappeler ce qui compte vraiment.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex justify-center mt-8"
          >
            <motion.a
              href="#product"
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center gap-2 text-brand hover:text-brand-dark transition-colors cursor-pointer group"
            >
              <span className="text-sm font-medium tracking-widest uppercase opacity-80 group-hover:opacity-100">Découvrir</span>
              <div className="p-3 rounded-full bg-white/30 backdrop-blur-md border border-white/50 shadow-lg group-hover:bg-white/50 transition-all">
                <ArrowDown className="w-6 h-6" />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

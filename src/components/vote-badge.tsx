"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function VoteBadge() {
  return (
    <motion.a
      href="#vote"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50 group cursor-pointer"
    >
      <div className="relative">
        {/* Ping animation */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-brand"></span>
        </span>

        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md border border-brand/20 px-5 py-3 rounded-full shadow-2xl hover:shadow-brand/30 transition-all duration-300 hover:-translate-y-1">
          <div className="bg-brand/10 p-2 rounded-full text-brand group-hover:scale-110 transition-transform duration-300">
            <Trophy className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-brand uppercase tracking-wider">Soutenez-nous</span>
            <span className="text-sm font-bold text-text-dark">Votez MemoRing</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

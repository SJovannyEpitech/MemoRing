"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

export default function VoteCounter({ count }: { count: number }) {
  // Spring animation for the number
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    spring.set(count);
  }, [spring, count]);

  return (
    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
      <div className="bg-white/20 p-1.5 rounded-full">
        <Mail className="w-4 h-4 text-white" />
      </div>
      <div className="flex flex-col items-start leading-none">
        <motion.span className="text-white font-bold text-lg tabular-nums">
          {display}
        </motion.span>
        <span className="text-white/70 text-[10px] uppercase tracking-wider font-medium">
          Votes enregistrés
        </span>
      </div>
    </div>
  );
}

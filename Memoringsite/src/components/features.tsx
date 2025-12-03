"use client";

import { Mic, Sparkles, Bell, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Mic,
    title: "Enregistrement instantané",
    description: "Capturez vos idées et conversations d'un simple tap sur votre bague. Plus besoin de sortir votre téléphone.",
    color: "text-brand",
    bg: "bg-brand/10"
  },
  {
    icon: Sparkles,
    title: "Transcription & Résumés",
    description: "Notre IA transforme votre voix en texte structuré et génère des résumés clairs et actionnables.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: Bell,
    title: "Rappels Intelligents",
    description: "Recevez des micro-vibrations discrètes pour vos rendez-vous et tâches importantes.",
    color: "text-accent-cyan", // Using hex color class might need custom config or style, using closest tailwind class or style
    styleColor: "#ABDCE1",
    bg: "bg-[#ABDCE1]/20"
  },
  {
    icon: Calendar,
    title: "Timeline & To-do Auto",
    description: "Vos notes sont automatiquement organisées dans votre calendrier et votre liste de tâches.",
    color: "text-accent-mint",
    styleColor: "#CAE9DA",
    bg: "bg-[#CAE9DA]/30"
  }
];

export function Features() {
  return (
    <section id="product" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Tout ce dont vous avez besoin, <br/> à portée de main
          </h2>
          <p className="text-text-slate text-lg">
            MemoRing est conçu pour s'intégrer parfaitement à votre vie quotidienne, sans friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 hover:bg-white/80 transition-colors duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${feature.bg}`}>
                <feature.icon 
                  className={`w-6 h-6 ${feature.color}`} 
                  style={feature.styleColor ? { color: feature.styleColor.replace('text-', '') } : undefined} 
                />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
              <p className="text-text-slate leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

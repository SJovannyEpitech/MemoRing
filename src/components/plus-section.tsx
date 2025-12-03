"use client";

import { Button } from "@/components/ui/button";
import { Activity, Heart, Share2, User } from "lucide-react";
import { motion } from "framer-motion";

export function PlusSection() {
  return (
    <section id="plus" className="py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[3rem] bg-gradient-to-br from-brand-light to-accent-cyan p-8 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-text-dark font-semibold text-sm mb-6">
                MemoRing Plus
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
                Allez plus loin avec <br/>votre santé mentale.
              </h2>
              <p className="text-text-dark/80 text-lg mb-8 max-w-md">
                Débloquez des fonctionnalités avancées pour suivre votre humeur, analyser vos tendances émotionnelles et partager vos bilans avec vos proches ou thérapeutes.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-text-dark font-medium">
                  <div className="p-2 rounded-full bg-white/40">
                    <Activity className="w-5 h-5" />
                  </div>
                  Journal vocal & analyse de sentiments
                </li>
                <li className="flex items-center gap-3 text-text-dark font-medium">
                  <div className="p-2 rounded-full bg-white/40">
                    <Heart className="w-5 h-5" />
                  </div>
                  Tendances émotionnelles hebdomadaires
                </li>
                <li className="flex items-center gap-3 text-text-dark font-medium">
                  <div className="p-2 rounded-full bg-white/40">
                    <Share2 className="w-5 h-5" />
                  </div>
                  Bilan partageable sécurisé
                </li>
              </ul>

              <Button className="bg-text-dark text-white hover:bg-text-dark/90 border-none shadow-lg">
                Découvrir MemoRing Plus
              </Button>
            </div>

            {/* Visual for Plus Plan */}
            <div className="flex flex-col gap-6">
                {/* Weekly Mood Evolution Chart */}
                <div className="glass-panel p-6 bg-white/40 border-white/50">
                    <h3 className="text-sm font-semibold text-text-dark mb-4 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-brand" />
                        Weekly Mood Evolution
                    </h3>
                    <div className="h-32 w-full relative flex items-end mb-2">
                        {/* Simple SVG Curve */}
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#8480F1" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#8480F1" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                d="M0,35 C15,35 15,20 25,20 C35,20 35,40 50,40 C65,40 65,10 75,10 C85,10 85,25 100,15"
                                fill="none"
                                stroke="#8480F1"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <motion.path
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                d="M0,35 C15,35 15,20 25,20 C35,20 35,40 50,40 C65,40 65,10 75,10 C85,10 85,25 100,15 L100,50 L0,50 Z"
                                fill="url(#gradient)"
                                stroke="none"
                            />
                        </svg>
                        
                        {/* Days labels */}
                        <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-text-slate">
                            <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
                        </div>
                    </div>
                </div>

                {/* Fake Chat */}
                <div className="glass-panel p-5 bg-white/60 border-white/60">
                    <div className="space-y-4">
                        {/* User Message */}
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex gap-3 justify-end"
                        >
                            <div className="bg-brand text-white p-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-sm">
                                J'ai peur de ma prochaine opération...
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 border border-white">
                                <User className="w-4 h-4 text-gray-500" />
                            </div>
                        </motion.div>

                        {/* AI Message */}
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 }}
                          className="flex gap-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-accent-cyan flex items-center justify-center flex-shrink-0 border border-white shadow-sm">
                                <Heart className="w-4 h-4 text-text-dark" />
                            </div>
                            <div className="bg-white p-3 rounded-2xl rounded-tl-sm text-sm text-text-dark max-w-[85%] shadow-sm border border-gray-100">
                                C'est tout à fait normal de ressentir cela. Rappelez-vous du taux de réussite dont vous a parlé votre professionnel de santé. Tout se passera bien. 💙
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

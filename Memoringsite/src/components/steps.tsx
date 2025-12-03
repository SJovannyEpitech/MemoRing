"use client";

import { Button } from "@/components/ui/button";
import { Fingerprint, Cloud, FileText, BellRing, Mic, CheckCircle, ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Fingerprint,
    title: "Capturez",
    description: "Un simple tap sur votre bague lance l'enregistrement."
  },
  {
    icon: Cloud,
    title: "Traitez",
    description: "L'audio est envoyé sécurisé dans le cloud et traité par notre IA."
  },
  {
    icon: FileText,
    title: "Organisez",
    description: "Obtenez des résumés, des tâches et des événements calendrier."
  },
  {
    icon: BellRing,
    title: "Rappelez",
    description: "Recevez des notifications discrètes au bon moment."
  }
];

export function Steps() {
  return (
    <section id="how-it-works" className="py-24 bg-white/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-text-slate text-lg">
            Du bout du doigt à votre second cerveau, en quelques secondes.
          </p>
        </div>

        {/* MemoRing Normal Plan Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[3rem] bg-gradient-to-br from-neutral-light to-white p-8 md:p-16 relative overflow-hidden shadow-xl border border-gray-100"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-mint/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-white/50 backdrop-blur-md border border-gray-200 text-text-slate font-semibold text-sm mb-6">
                MemoRing Normal Plan
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
                L'essentiel pour <br/>rester organisé.
              </h2>
              <p className="text-text-slate text-lg mb-8 max-w-md">
                Profitez d'une expérience fluide pour capturer vos idées et gérer vos tâches quotidiennes sans complexité inutile.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-text-dark font-medium">
                  <div className="p-2 rounded-full bg-white">
                    <Mic className="w-5 h-5 text-brand" />
                  </div>
                  Enregistrement vocal illimité
                </li>
                <li className="flex items-center gap-3 text-text-dark font-medium">
                  <div className="p-2 rounded-full bg-white">
                    <FileText className="w-5 h-5 text-brand" />
                  </div>
                  Transcription & Résumés IA
                </li>
                <li className="flex items-center gap-3 text-text-dark font-medium">
                  <div className="p-2 rounded-full bg-white">
                    <CheckCircle className="w-5 h-5 text-brand" />
                  </div>
                  Gestion de tâches basique
                </li>
              </ul>

              <Button className="bg-white text-text-dark hover:bg-gray-50 border border-gray-200 shadow-sm">
                Découvrir le plan Standard
              </Button>
            </div>

            {/* Visual for Normal Plan - Steps Grid */}
            <div className="glass-panel p-6 md:p-8 bg-white/60 border-white/60 h-full flex items-center justify-center">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {steps.map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center p-4 rounded-2xl bg-white/50 border border-white/60 shadow-sm hover:shadow-md transition-shadow">
                      {/* Arrows */}
                      {index % 2 === 0 && (
                         <div className="hidden sm:block absolute -right-5 top-1/2 -translate-y-1/2 text-brand/30 z-10">
                           <ArrowRight className="w-6 h-6" />
                         </div>
                      )}
                      {index < 3 && (
                         <div className="sm:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 text-brand/30 z-10">
                           <ArrowDown className="w-6 h-6" />
                         </div>
                      )}

                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shadow-sm">
                        {index + 1}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center mb-3 text-brand">
                        <step.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-text-dark text-sm mb-1">{step.title}</h3>
                      <p className="text-xs text-text-slate leading-relaxed">{step.description}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

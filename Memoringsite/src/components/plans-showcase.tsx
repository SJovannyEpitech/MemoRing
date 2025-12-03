"use client";

import { useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function PlansShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
            Découvrez l'interface <br />
            <span className="text-brand">MemoRing</span>
          </h2>
          <p className="text-text-slate text-lg max-w-2xl mx-auto">
            Une application intuitive conçue pour vous donner une vue d'ensemble claire de votre journée et de votre santé mentale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
          {/* Card 1 */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Tableau de bord quotidien
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Visualisez vos tâches, vos rappels et votre progression en un coup d'œil.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div 
                  className="relative w-full h-64 sm:h-80 bg-white p-4 shadow-xl rotate-[-2deg] rounded-sm border border-gray-200 cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => setSelectedImage("/plan1.jpeg")}
                >
                    {/* Pin */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-[2px_4px_6px_rgba(0,0,0,0.3)] border border-red-800 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white/40 blur-[1px]" />
                    </div>
                    
                    <div className="relative w-full h-full overflow-hidden rounded-sm bg-gray-100">
                        <Image
                        src="/plan1.jpeg"
                        height="1000"
                        width="1000"
                        className="h-full w-full object-cover"
                        alt="Interface Plan 1"
                        />
                        {/* Overlay Label */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                          <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-text-slate font-semibold text-xs shadow-sm">
                            MemoRing Normal Plan
                          </div>
                        </div>
                    </div>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Card 2 */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Analyse & Insights
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Comprenez vos habitudes et optimisez votre bien-être mental.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div 
                  className="relative w-full h-64 sm:h-80 bg-white p-4 shadow-xl rotate-[2deg] rounded-sm border border-gray-200 cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => setSelectedImage("/plan2.jpeg")}
                >
                    {/* Pin */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-6 h-6 rounded-full bg-gradient-to-br from-brand to-indigo-700 shadow-[2px_4px_6px_rgba(0,0,0,0.3)] border border-indigo-800 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white/40 blur-[1px]" />
                    </div>

                    <div className="relative w-full h-full overflow-hidden rounded-sm bg-gray-100">
                        <Image
                        src="/plan2.jpeg"
                        height="1000"
                        width="1000"
                        className="h-full w-full object-cover"
                        alt="Interface Plan 2"
                        />
                        {/* Overlay Label */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                          <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-brand/20 text-brand font-semibold text-xs shadow-sm">
                            MemoRing Plus
                          </div>
                        </div>
                    </div>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] aspect-video bg-transparent rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <Image
                src={selectedImage}
                alt="Plan Preview"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

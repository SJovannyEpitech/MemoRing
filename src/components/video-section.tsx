"use client";

import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section id="product" className="py-12 md:py-24 bg-white/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Produit
            </h2>
            <p className="text-text-slate text-lg max-w-2xl mx-auto">
              Pour le moment, nous proposons deux types de bagues entièrement personnalisables. 
              Découvrez nos modèles en action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vidéo 1 */}
            <div className="group relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 bg-white/40 backdrop-blur-md transition-all duration-500 hover:shadow-brand/20 hover:-translate-y-1">
              <div className="absolute top-6 left-6 z-10 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white font-medium text-sm shadow-lg">
                Design 01
              </div>
              <div className="relative w-full aspect-video bg-gray-100">
                <video 
                  className="w-full h-full object-cover" 
                  controls 
                  preload="metadata"
                  playsInline
                >
                  <source src="https://res.cloudinary.com/ddvabefhf/video/upload/v1764790227/Vid%C3%A9o_K_Bague_Tournante_Fond_Noir_ali1pd.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>

            {/* Vidéo 2 */}
            <div className="group relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 bg-white/40 backdrop-blur-md transition-all duration-500 hover:shadow-brand/20 hover:-translate-y-1">
              <div className="absolute top-6 left-6 z-10 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white font-medium text-sm shadow-lg">
                Design 02
              </div>
              <div className="relative w-full aspect-video bg-gray-100">
                <video 
                  className="w-full h-full object-cover" 
                  controls 
                  preload="metadata"
                  playsInline
                >
                  <source src="https://res.cloudinary.com/ddvabefhf/video/upload/v1764795632/Vid%C3%A9o_K_Bague_Or_Rotative_dwb3nt.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

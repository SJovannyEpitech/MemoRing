"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-48 overflow-hidden">
              <Image 
                src="/logo.svg" 
                alt="MemoRing Logo" 
                fill 
                className="object-cover object-left" 
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#product" className="text-sm font-medium text-text-slate hover:text-brand transition-colors">
              Produit
            </Link>
            <Link href="#ring" className="text-sm font-medium text-text-slate hover:text-brand transition-colors">
              Bague
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-text-slate hover:text-brand transition-colors">
              Comment ça marche
            </Link>
            <Link href="#plus" className="text-sm font-medium text-text-slate hover:text-brand transition-colors">
              Plus
            </Link>
            <Link href="#security" className="text-sm font-medium text-text-slate hover:text-brand transition-colors">
              Sécurité
            </Link>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button variant="default" size="sm" className="hidden md:inline-flex rounded-full px-6">
              Essayer MemoRing
            </Button>
            
            <button 
              className="md:hidden p-2 text-text-dark"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 z-40 md:hidden"
          >
            <div className="glass-panel flex flex-col p-6 gap-4">
              <Link 
                href="#product" 
                className="text-lg font-medium text-text-dark py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Produit
              </Link>
              <Link 
                href="#ring" 
                className="text-lg font-medium text-text-dark py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Bague
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-lg font-medium text-text-dark py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Comment ça marche
              </Link>
              <Link 
                href="#plus" 
                className="text-lg font-medium text-text-dark py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Plus
              </Link>
              <Link 
                href="#security" 
                className="text-lg font-medium text-text-dark py-2"
                onClick={() => setIsOpen(false)}
              >
                Sécurité
              </Link>
              <Button className="w-full mt-4 rounded-full">
                Essayer MemoRing
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

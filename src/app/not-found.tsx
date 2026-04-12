"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <h1 className="text-[15rem] md:text-[25rem] font-black uppercase tracking-tighter leading-none opacity-10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-foreground text-background px-8 py-4 border-4 border-foreground rounded-2xl rotate-3 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.2)]">
              <span className="text-4xl md:text-6xl font-black uppercase">Lost?</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8 max-w-lg mx-auto">
          <p className="text-2xl font-bold uppercase tracking-tight text-foreground/70">
            The page you're looking for was either moved, deleted, or never existed in this dimension.
          </p>
          
          <Link 
            href="/"
            className="inline-flex items-center space-x-4 bg-foreground text-background px-12 py-6 rounded-full font-black text-2xl uppercase tracking-tighter hover:scale-105 transition-transform group"
          >
            <MoveLeft className="group-hover:-translate-x-2 transition-transform" />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

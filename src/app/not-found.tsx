"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="ambient-orb w-[400px] h-[400px] bg-[var(--gradient-start)] top-1/4 left-1/4" />
      <div className="ambient-orb w-[300px] h-[300px] bg-[var(--gradient-end)] bottom-1/4 right-1/4" style={{ animationDelay: "3s" }} />

      <div className="text-center space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <h1 className="text-[10rem] md:text-[16rem] font-black tracking-tighter leading-none gradient-text select-none opacity-30">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass rounded-2xl px-8 py-4 shadow-xl">
              <span className="text-3xl md:text-5xl font-bold">Lost?</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6 max-w-lg mx-auto">
          <p className="text-lg text-muted leading-relaxed">
            The page you&apos;re looking for was either moved, deleted, or never existed in this dimension.
          </p>
          
          <Link 
            href="/"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-[var(--gradient-start)]/25 transition-all hover:-translate-y-0.5 group"
          >
            <MoveLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { Download, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AppShowcase() {
  return (
    <section className="relative w-full py-24 sm:py-32 flex justify-center overflow-hidden bg-background text-foreground px-6 transition-colors duration-500">
      {/* Background radial gradient to give a subtle premium glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full flex flex-col items-center text-center relative z-10 space-y-8">
        
        {/* Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-border bg-foreground/5 backdrop-blur-md"
        >
          <Smartphone size={14} className="text-foreground" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-foreground/80 uppercase">
            Android Productivity App
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400">Strive</span>.
          </h2>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            A comprehensive focus and productivity tool designed to help you lock in and get things done. 
            Block distractions and track your study sessions with ease.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 w-full sm:w-auto"
        >
          <Link
            href="/strive-app-release.apk"
            download="Strive-App.apk"
            className="group flex items-center justify-center space-x-3 bg-foreground text-background px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto shadow-2xl hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            <Download size={22} className="group-hover:-translate-y-1 transition-transform" />
            <span>Download for Android</span>
          </Link>
          <p className="mt-4 text-xs font-medium tracking-wide text-muted uppercase">
            Requires Android 8.0 or higher
          </p>
        </motion.div>

        {/* Provided Mockup Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-24 w-full max-w-4xl relative drop-shadow-2xl flex justify-center"
        >
          <Image
            src="/strive-mockup.jpg"
            alt="Strive App Showcase"
            width={1200}
            height={800}
            className="w-full h-auto object-contain rounded-xl md:rounded-[40px]"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}

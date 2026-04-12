"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-foreground/10 bg-foreground/5 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Available for Freelance
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter uppercase"
            >
              Turning <span className="text-muted">Code</span> <br />
              Into <span className="text-foreground">Reality.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl font-medium leading-relaxed"
            >
              A focused Full-Stack Developer specializing in the MERN ecosystem. 
              Building visually stunning, high-performance web applications that demand attention.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <Link 
              href="/resume.pdf" 
              target="_blank"
              className="group relative px-8 py-4 bg-foreground text-background font-bold text-lg border-2 border-foreground hover:bg-background hover:text-foreground transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">RESUME</span>
              <motion.div 
                className="absolute inset-0 bg-background"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            
            <Link 
              href="#contact" 
              className="flex items-center space-x-2 text-lg font-bold border-b-2 border-foreground hover:text-muted hover:border-muted transition-all"
            >
              <span>Say Hello</span>
              <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full aspect-square lg:aspect-auto h-[600px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-foreground/5 to-transparent rounded-full blur-3xl" />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/hero-illustration.png"
              alt="Full-Stack Developer workstation illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-foreground/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-foreground/[0.02] rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

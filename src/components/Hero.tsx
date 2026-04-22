"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background orbs */}
      <div className="ambient-orb w-[500px] h-[500px] bg-[var(--gradient-start)] -top-32 -left-32" />
      <div className="ambient-orb w-[400px] h-[400px] bg-[var(--gradient-end)] top-1/2 -right-20" style={{ animationDelay: "3s" }} />
      <div className="ambient-orb w-[300px] h-[300px] bg-[var(--gradient-mid)] bottom-0 left-1/3" style={{ animationDelay: "5s" }} />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass w-fit"
          >
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-semibold tracking-wide text-muted">
              Available for Freelance
            </span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight"
            >
              Turning{" "}
              <span className="gradient-text">Code</span>
              <br />
              Into{" "}
              <span className="relative">
                Reality
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
              <span className="gradient-text">.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-muted max-w-xl leading-relaxed"
            >
              A focused Full-Stack Developer specializing in the MERN ecosystem. 
              Building high-performance web applications that demand attention.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link 
              href="/resume.pdf" 
              target="_blank"
              className="group relative px-8 py-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-semibold text-base rounded-2xl hover:shadow-xl hover:shadow-[var(--gradient-start)]/25 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View Resume</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-mid)] to-[var(--gradient-start)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </Link>
            
            <Link 
              href="/contact" 
              className="px-8 py-4 font-semibold text-base rounded-2xl border border-border hover:bg-foreground/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              Say Hello
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center gap-8 pt-4"
          >
            {[
              { value: "4+", label: "Projects" },
              { value: "MERN", label: "Stack" },
              { value: "2+", label: "Years Coding" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full aspect-square lg:aspect-auto lg:h-[550px]"
        >
          {/* Glow behind illustration */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--gradient-start)]/10 via-transparent to-[var(--gradient-end)]/10 rounded-3xl blur-3xl" />
          
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <div className="absolute inset-4 rounded-3xl gradient-border" />
            <Image
              src="/hero-illustration.png"
              alt="Full-Stack Developer workstation illustration"
              fill
              className="object-contain p-4 drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

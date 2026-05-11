"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Shield, Zap } from "lucide-react";

export default function CopySection() {
  const [copied, setCopied] = useState(false);
  const textToCopy = "AIzaSyA2uRxApI0dZKyWNqyf-ZAfV8ZEwV7jTeA";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full z-[100] bg-background/80 backdrop-blur-2xl border-b border-border/50 overflow-hidden"
    >
      {/* Animated background glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-md rounded-full animate-pulse" />
            <div className="relative p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Zap size={20} />
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.25em]">System Token</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="text-[10px] font-bold text-muted uppercase tracking-[0.1em]">Public Access</span>
            </div>
            <div className="group relative mt-0.5">
              <span className="text-sm md:text-base font-mono font-medium text-foreground/70 selection:bg-indigo-500/30 break-all md:break-normal tracking-tight">
                {textToCopy}
              </span>
              <div className="absolute -bottom-px left-0 w-0 h-px bg-indigo-500/50 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="group relative w-full md:w-auto overflow-hidden bg-foreground text-background px-8 py-3 rounded-2xl text-xs font-extrabold uppercase tracking-[0.15em] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-foreground/5"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer-slide_2s_infinite] pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="flex items-center justify-center space-x-2"
              >
                <Check size={16} strokeWidth={3} className="text-emerald-400" />
                <span>Copied to Clipboard</span>
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="flex items-center justify-center space-x-2"
              >
                <Copy size={16} strokeWidth={2.5} />
                <span>Copy Token</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Subtle bottom progress line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
    </motion.section>
  );
}

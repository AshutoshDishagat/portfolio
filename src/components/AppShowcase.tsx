"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AppShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="glass rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-border relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Name and Logo info */}
        <div className="flex items-center space-x-4 relative z-10 w-full sm:w-auto">
          {/* Styled app logo */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white font-extrabold text-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
            S
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-foreground text-base sm:text-lg">
                Strive
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold border border-accent/20">
                Android App
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted font-medium mt-0.5">
              A comprehensive focus and productivity companion designed to block distractions and track study sessions.
            </p>
          </div>
        </div>

        {/* View Project Action Button */}
        <div className="relative z-10 shrink-0 w-full sm:w-auto flex justify-end">
          <Link
            href="/projects#strive"
            className="group/btn flex items-center justify-center space-x-2 bg-foreground text-background px-6 py-3 rounded-xl font-bold text-sm hover:scale-102 active:scale-98 transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg"
          >
            <span>View Project</span>
            <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

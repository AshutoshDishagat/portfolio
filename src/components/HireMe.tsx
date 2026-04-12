"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden z-20 md:left-8 md:bottom-8">
      <div className="w-48 h-auto flex items-center justify-center relative">
        {/* Rotating Circular Text */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            className="fill-foreground"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[10px] font-black uppercase tracking-[2px]">
              <textPath xlinkHref="#circlePath">
                Full-Stack Developer • Open for hire • Freelance Projects • 
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Center Button */}
        <Link
          href="/contact"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 bg-foreground text-background rounded-full border border-solid border-foreground font-black text-sm transition-all hover:bg-background hover:text-foreground shadow-2xl group"
        >
          <span className="flex items-center space-x-1">
            <span>HIRE ME</span>
            <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </div>
  );
}

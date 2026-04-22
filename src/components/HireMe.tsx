"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 md:left-8 md:bottom-8 flex items-center justify-center overflow-hidden z-20">
      <div className="w-24 md:w-40 h-auto flex items-center justify-center relative">
        {/* Rotating Circular Text */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            className="fill-muted"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[10px] font-semibold tracking-[2px]">
              <textPath xlinkHref="#circlePath">
                Full-Stack Developer • Open for hire • Freelance • 
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Center Button */}
        <Link
          href="/contact"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] text-white rounded-xl md:rounded-2xl font-semibold text-[8px] md:text-xs transition-all hover:scale-110 hover:shadow-xl hover:shadow-[var(--gradient-start)]/30 group"
        >
          <span className="flex items-center space-x-0.5">
            <span>HIRE</span>
            <MoveRight className="w-2.5 h-2.5 md:w-3 md:h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>
    </div>
  );
}

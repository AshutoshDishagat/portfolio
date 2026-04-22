"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center text-white font-bold text-xs">
              A
            </div>
            <span className="text-base font-semibold tracking-tight">
              Ashutosh Dishagat
            </span>
          </div>

          {/* Center: Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/AshutoshDishagat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-foreground/5 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashutosh-dishagat-10343625a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-foreground/5 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.fiverr.com/ashutosh_tech1?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white hover:opacity-90 transition-opacity"
            >
              Hire on Fiverr
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-xs text-muted font-medium">
            © {new Date().getFullYear()} Ashutosh Dishagat
          </div>
        </div>
      </div>
    </footer>
  );
}

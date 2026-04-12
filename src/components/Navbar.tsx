"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { GithubIcon, LinkedinIcon } from "./Icons";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/AshutoshDishagat", icon: GithubIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ashutosh-dishagat-10343625a/", icon: LinkedinIcon },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-12 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Navigation Links */}
        <div className="flex-1 hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-muted transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Center: Empty */}
        <div className="flex-none md:w-32" />

        {/* Right: Socials & Toggle */}
        <div className="flex-1 flex justify-end items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:scale-110 transition-transform"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="hidden md:block px-4 py-1.5 text-sm font-bold border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-300"
          >
            RESUME
          </Link>

          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background border-t border-border mt-4"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-foreground"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex space-x-6">
                  {socials.map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="px-4 py-2 text-xs font-bold border border-foreground bg-foreground text-background"
                >
                  RESUME
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}


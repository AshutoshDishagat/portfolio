"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll to update navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-[100] ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-4 md:mx-8">
        <div className={`glass rounded-2xl px-6 py-4 shadow-lg transition-all duration-300 ${
          scrolled 
            ? "shadow-black/10 dark:shadow-black/40 border-accent/20 bg-background/80 backdrop-blur-xl" 
            : "shadow-black/[0.03] dark:shadow-black/20"
        }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden transition-transform group-hover:scale-110 group-hover:rotate-3 border border-border">
                <Image
                  src="/assets/profile.jpg"
                  alt="Ashutosh Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Ashutosh
              </span>
            </Link>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "text-accent bg-accent/10" 
                        : "text-muted hover:text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-accent/10 rounded-xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right: Socials & Toggle */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <Link
                href="/resume.pdf"
                target="_blank"
                className="hidden md:flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white hover:opacity-90 transition-opacity shadow-lg shadow-[var(--gradient-start)]/20"
              >
                <span>Resume</span>
              </Link>

              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl text-foreground hover:bg-foreground/5 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2"
          >
            <div className="bg-background/95 backdrop-blur-3xl border border-border rounded-2xl p-4 space-y-1 shadow-2xl">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : "text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="flex items-center justify-between pt-3 mt-2 border-t border-border">
                <div className="flex space-x-3">
                  {socials.map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl text-muted hover:text-foreground transition-colors">
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white"
                >
                  Resume
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

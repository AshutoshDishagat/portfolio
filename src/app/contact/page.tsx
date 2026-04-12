"use client";

import { motion } from "framer-motion";
import { Send, Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Centered Content */}
        <div className="lg:col-span-2 space-y-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 max-w-4xl"
          >
            <h1 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-none">
              Let's <br className="hidden md:block" />
              <span className="text-muted italic underline decoration-foreground underline-offset-[12px]">CONNECT.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-foreground/70 uppercase mx-auto max-w-2xl leading-tight">
              I'm always open to new projects, collaborations, or just a technical chat. 
              Find me on my professional platforms below.
            </p>
          </motion.div>

          {/* Expanded Social Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <Link 
              href="mailto:dishagatashutosh@gmail.com" 
              className="group p-10 border-4 border-foreground rounded-3xl hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]"
            >
              <Mail size={48} className="mx-auto mb-6" />
              <h3 className="text-xl font-black uppercase tracking-widest">Email</h3>
              <p className="text-sm font-bold opacity-60 group-hover:opacity-100 truncate pt-2">dishagatashutosh@gmail.com</p>
            </Link>
            
            <Link 
              href="https://www.linkedin.com/in/ashutosh-dishagat-10343625a/" 
              target="_blank"
              className="group p-10 border-4 border-foreground rounded-3xl hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]"
            >
              <LinkedinIcon className="w-12 h-12 mx-auto mb-6 transition-colors group-hover:text-background" />
              <h3 className="text-xl font-black uppercase tracking-widest">LinkedIn</h3>
              <p className="text-sm font-bold opacity-60 group-hover:opacity-100 pt-2">@ashutosh-dishagat</p>
            </Link>

            <Link 
              href="https://github.com/AshutoshDishagat" 
              target="_blank"
              className="group p-10 border-4 border-foreground rounded-3xl hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]"
            >
              <GithubIcon className="w-12 h-12 mx-auto mb-6 transition-colors group-hover:text-background" />
              <h3 className="text-xl font-black uppercase tracking-widest">GitHub</h3>
              <p className="text-sm font-bold opacity-60 group-hover:opacity-100 pt-2">@AshutoshDishagat</p>
            </Link>

            <Link 
              href="https://www.fiverr.com/ashutosh_tech1?public_mode=true" 
              target="_blank"
              className="group p-10 bg-foreground text-background border-4 border-foreground rounded-3xl hover:bg-background hover:text-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)]"
            >
              <ExternalLink size={48} className="mx-auto mb-6" />
              <h3 className="text-xl font-black uppercase tracking-widest">Fiverr</h3>
              <p className="text-sm font-bold opacity-60 group-hover:opacity-100 pt-2">Hire @ashutosh_tech1</p>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

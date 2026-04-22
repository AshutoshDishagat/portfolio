"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Heart, Briefcase } from "lucide-react";
import Image from "next/image";

export default function About() {
  const education = [
    {
      institution: "Tilak Maharashtra Vidyapeeth (TMV)",
      degree: "Computer Science / Applications",
      period: "Pune, India",
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-12 md:px-24 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="ambient-orb w-[400px] h-[400px] bg-[var(--gradient-start)] -top-20 -right-40" />
      <div className="ambient-orb w-[300px] h-[300px] bg-[var(--gradient-end)] bottom-1/3 -left-40" style={{ animationDelay: "4s" }} />

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold text-accent tracking-widest uppercase">About</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              A bit about{" "}
              <span className="gradient-text">myself</span>
            </h1>
            <div className="flex items-center space-x-2 text-muted text-sm font-medium">
              <MapPin size={16} />
              <span>Pune, Maharashtra, India</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="relative w-full max-w-[300px] mx-auto lg:mx-0 aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="/assets/profile.jpg"
                alt="Ashutosh Dishagat"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-lg text-muted leading-relaxed space-y-5">
              <p>
                I&apos;m <span className="font-semibold text-foreground">Ashutosh Dishagat</span>, 
                a Full-Stack Developer driven by the challenge of bridging complex backend logic with elegant user interfaces.
              </p>
              <p>
                With a background in BCA from TMV and hands-on experience at Edulyt India, I specialize in building 
                scalable web solutions using the MERN stack and exploring the frontiers of AI integration.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Education */}
        <section className="flex justify-center">
          <div className="space-y-6 w-full max-w-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i }}
                  className="glass rounded-2xl p-6 space-y-2 glow-hover"
                >
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <div className="flex flex-wrap justify-between items-center text-muted text-sm font-medium gap-2">
                    <span>{edu.institution}</span>
                    <span className="px-3 py-1 rounded-lg bg-foreground/5 text-xs font-semibold">{edu.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <motion.section 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white p-10 md:p-16 rounded-3xl space-y-6 shadow-2xl shadow-[var(--gradient-start)]/20"
        >
          <div className="flex items-center space-x-3">
            <Heart size={28} fill="currentColor" className="opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Philosophy</h2>
          </div>
          <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-4xl opacity-90">
            &ldquo;I believe that great software isn&apos;t just about code that works—it&apos;s about creating 
            meaningful digital experiences that solve real-world problems through logic and empathy.&rdquo;
          </p>
        </motion.section>

      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Heart } from "lucide-react";

export default function About() {
  const education = [
    {
      institution: "Tilak Maharashtra Vidyapeeth (TMV)",
      degree: "Computer Science / Applications",
      period: "Pune, India",
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6 sm:px-12 md:px-24">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              A bit about <br />
              <span className="text-muted">MYSELF.</span>
            </h1>
            <div className="flex items-center space-x-3 text-muted-foreground font-bold uppercase tracking-widest text-sm">
              <MapPin size={18} />
              <span>Pune, Maharashtra, India</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/80 space-y-6"
          >
            <p>
              I'm <span className="font-bold text-foreground underline decoration-4 decoration-muted">Ashutosh Dishagat</span>, 
              a Full-Stack Developer driven by the challenge of bridging complex backend logic with elegant user interfaces.
            </p>
            <p>
              With a background in BCA from TMV and hands-on experience at Edulyt India, I specialize in building 
              scalable web solutions using the MERN stack and exploring the frontiers of AI integration.
            </p>
          </motion.div>
        </section>

        {/* Experience & Education Grid */}
        <section className="flex justify-center">
          
          {/* Education */}
          <div className="space-y-8 w-full max-w-2xl">
            <div className="flex items-center space-x-4 border-b-4 border-foreground pb-4">
              <GraduationCap size={32} />
              <h2 className="text-3xl font-black uppercase tracking-tight">Education</h2>
            </div>
            <div className="space-y-8 pl-4 border-l-4 border-foreground/10">
              {education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i }}
                  className="space-y-2"
                >
                  <h3 className="text-2xl font-black">{edu.degree}</h3>
                  <div className="flex justify-between items-center text-muted-foreground font-bold text-sm uppercase">
                    <span>{edu.institution}</span>
                    <span>{edu.period}</span>
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
          className="bg-foreground text-background p-12 md:p-20 rounded-3xl space-y-8"
        >
          <div className="flex items-center space-x-4">
            <Heart size={40} fill="currentColor" />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Philosophy</h2>
          </div>
          <p className="text-2xl md:text-3xl font-bold leading-tight max-w-4xl">
            "I believe that great software isn't just about code that works—it's about creating 
            meaningful digital experiences that solve real-world problems through logic and empathy."
          </p>
        </motion.section>

      </div>
    </main>
  );
}

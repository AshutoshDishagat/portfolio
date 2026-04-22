"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Layout, 
  Smartphone, 
  Terminal, 
  Zap 
} from "lucide-react";

const skillGroups = [
  {
    name: "Core",
    radius: 120,
    duration: 20,
    skills: [
      { name: "React", icon: Code2, color: "#61DAFB" },
      { name: "Node.js", icon: Terminal, color: "#339933" },
      { name: "Express", icon: Cpu, color: "#8b5cf6" },
      { name: "MongoDB", icon: Globe, color: "#47A248" },
    ],
  },
  {
    name: "Tools",
    radius: 200,
    duration: 35,
    skills: [
      { name: "Next.js", icon: Zap, color: "#818cf8" },
      { name: "Tailwind", icon: Layout, color: "#06B6D4" },
      { name: "TypeScript", icon: Smartphone, color: "#3178C6" },
      { name: "Framer", icon: Layers, color: "#a78bfa" },
    ],
  },
];

const Orbit = ({ radius, duration, skills }: any) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ 
        width: radius * 2, 
        height: radius * 2,
        border: "1px solid var(--border)",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {skills.map((skill: any, index: number) => {
        const angle = (index / skills.length) * 360;
        return (
          <div
            key={skill.name}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              className="flex items-center justify-center w-12 h-12 rounded-2xl glass glow-hover group cursor-help"
            >
              <skill.icon 
                size={22} 
                style={{ color: skill.color }} 
                className="transition-transform group-hover:scale-125"
              />
              <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all origin-bottom glass text-foreground text-[10px] font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                {skill.name}
              </div>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default function OrbitingSkills() {
  return (
    <section id="skills" className="relative py-32 flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="ambient-orb w-[400px] h-[400px] bg-[var(--gradient-start)] top-1/4 -left-20" />
      <div className="ambient-orb w-[300px] h-[300px] bg-[var(--gradient-end)] bottom-1/4 -right-20" style={{ animationDelay: "4s" }} />

      <div className="text-center space-y-4 mb-24 z-10">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-accent tracking-widest uppercase"
        >
          Tech Stack
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Tools I{" "}
          <span className="gradient-text">Work With</span>
        </motion.h2>
        <p className="text-muted font-medium text-base max-w-md mx-auto">
          High performance architecture with modern frameworks and libraries
        </p>
      </div>

      <div className="relative flex items-center justify-center w-full h-[600px]">
        {/* Center Logo */}
        <div className="z-20 w-28 h-28 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-bold text-xl tracking-tight shadow-2xl shadow-[var(--gradient-start)]/30">
          STACK
        </div>

        {/* Orbits */}
        {skillGroups.map((group) => (
          <Orbit 
            key={group.name} 
            radius={group.radius} 
            duration={group.duration} 
            skills={group.skills} 
          />
        ))}

        {/* Background Decorative Rings */}
        <div className="absolute w-[300px] h-[300px] border border-border rounded-full pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] border border-border rounded-full pointer-events-none" />
      </div>
    </section>
  );
}

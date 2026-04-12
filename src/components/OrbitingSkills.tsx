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
      { name: "Express", icon: Cpu, color: "#000000" },
      { name: "MongoDB", icon: Globe, color: "#47A248" },
    ],
  },
  {
    name: "Tools",
    radius: 200,
    duration: 35,
    skills: [
      { name: "Next.js", icon: Zap, color: "#000000" },
      { name: "Tailwind", icon: Layout, color: "#06B6D4" },
      { name: "TypeScript", icon: Smartphone, color: "#3178C6" },
      { name: "Framer", icon: Layers, color: "#0055FF" },
    ],
  },
];

const Orbit = ({ radius, duration, skills }: any) => {
  return (
    <motion.div
      className="absolute border border-foreground/5 rounded-full"
      style={{ width: radius * 2, height: radius * 2 }}
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
              className="flex items-center justify-center w-12 h-12 rounded-full border border-foreground/10 bg-background shadow-xl group cursor-help"
            >
              <skill.icon 
                size={24} 
                style={{ color: skill.color }} 
                className="transition-transform group-hover:scale-125"
              />
              <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap uppercase tracking-wider">
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
    <section id="skills" className="relative py-32 flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="text-center space-y-4 mb-24 z-10">
        <h2 className="text-5xl font-black uppercase tracking-tighter">Stack & Skills</h2>
        <p className="text-muted-foreground font-medium uppercase tracking-[2px] text-sm italic">
          High Performance Architecture • Planetary Interaction
        </p>
      </div>

      <div className="relative flex items-center justify-center w-full h-[600px]">
        {/* Center Logo/Text */}
        <div className="z-20 w-32 h-32 flex items-center justify-center bg-foreground text-background rounded-full border-4 border-solid border-foreground font-black text-2xl tracking-tighter shadow-2xl animate-pulse">
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
        <div className="absolute w-[300px] h-[300px] border border-foreground/[0.03] rounded-full pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] border border-foreground/[0.02] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}

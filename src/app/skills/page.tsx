"use client";

import OrbitingSkills from "@/components/OrbitingSkills";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)"],
    color: "#6366f1",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"],
    color: "#06b6d4",
  },
  {
    category: "Mobile",
    skills: ["Android Studio", "Java (Android)", "Flutter", "Dart", "XML"],
    color: "#f43f5e",
  },
  {
    category: "Languages",
    skills: ["Java (DSA)", "Python (AI)", "C++", "JavaScript", "Dart"],
    color: "#8b5cf6",
  },
  {
    category: "Tools",
    skills: ["Git & GitHub", "Vercel", "Postman", "VS Code", "Android Emulator"],
    color: "#10b981",
  }
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Visual Splash */}
      <div className="pt-24">
        <OrbitingSkills />
      </div>

      {/* Detailed Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass rounded-2xl p-6 space-y-5 glow-hover"
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: group.color }}
                >
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{group.category}</h3>
              </div>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-3 group cursor-default">
                    <div 
                      className="w-1.5 h-1.5 rounded-full group-hover:scale-[2] transition-transform"
                      style={{ backgroundColor: group.color }}
                    />
                    <span className="text-base text-muted group-hover:text-foreground transition-colors font-medium">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Closing Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-10 md:p-14 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white text-center rounded-3xl shadow-2xl shadow-[var(--gradient-start)]/20"
        >
          <p className="text-2xl md:text-3xl font-bold tracking-tight">
            &ldquo;Always learning. Always building. Always optimizing.&rdquo;
          </p>
        </motion.div>
      </section>
    </main>
  );
}

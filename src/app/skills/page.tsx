"use client";

import OrbitingSkills from "@/components/OrbitingSkills";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"]
  },
  {
    category: "Mobile",
    skills: ["Android Studio", "Java (Android)", "Flutter", "Dart", "XML"]
  },
  {
    category: "Languages",
    skills: ["Java (DSA)", "Python (AI)", "C++", "JavaScript", "Dart"]
  },
  {
    category: "Tools",
    skills: ["Git & GitHub", "Vercel", "Postman", "VS Code", "Android Emulator"]
  }
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Visual Splash */}
      <div className="pt-24">
        <OrbitingSkills />
      </div>

      {/* Detailed Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 border-b-4 border-foreground pb-2 w-fit">
                <span className="text-sm font-black opacity-20 italic">0{idx + 1}</span>
                <h3 className="text-3xl font-black uppercase tracking-tight">{group.category}</h3>
              </div>
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-3 group cursor-default">
                    <div className="w-2 h-2 bg-foreground rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-xl font-bold text-foreground/70 group-hover:text-foreground transition-colors uppercase tracking-tight leading-tight">
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 bg-foreground text-background text-center rounded-3xl"
        >
          <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">
            "Always learning. Always building. Always optimizing."
          </p>
        </motion.div>
      </section>
    </main>
  );
}

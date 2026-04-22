"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Cpu, Globe, Rocket, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import Link from "next/link";

const projects = [
  {
    title: "Strive",
    description: "Flutter-based productivity application focused on focus-mode and app blocking for students.",
    tech: ["Flutter", "Dart", "Firebase", "Android Studio"],
    github: "https://github.com/AshutoshDishagat/Strive-",
    icon: Rocket,
    color: "#f43f5e",
  },
  {
    title: "ChatBotMongoose",
    description: "An intelligent chatbot system built with Node.js and MongoDB for seamless conversational experiences.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/AshutoshDishagat/ChatBotMongoose",
    icon: Code2,
    color: "#6366f1",
  },
  {
    title: "ADkart",
    description: "A comprehensive e-commerce platform featuring product management, cart functionality, and secure checkout.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/AshutoshDishagat/ADkart",
    icon: Globe,
    color: "#06b6d4",
  },
  {
    title: "Booking-App",
    description: "Real-time reservation system for managing appointments and bookings with an intuitive dashboard.",
    tech: ["React", "Node", "MongoDB", "Tailwind"],
    github: "https://github.com/AshutoshDishagat/Booking-App",
    icon: Cpu,
    color: "#8b5cf6",
  }
];

const services = [
  {
    title: "AI & Full-Stack Software",
    description: "Building production-ready applications with Python, React, and integrated AI models for intelligent automation.",
    features: ["Python Integration", "Custom AI Models", "Scalable Architecture"],
    link: "https://www.fiverr.com/ashutosh_tech1/build-python-and-react-fullstack-ai-websites-and-software"
  },
  {
    title: "Responsive React Landing Pages",
    description: "High-performance, pixel-perfect landing pages optimized for conversion and speed.",
    features: ["SEO Optimized", "Mobile Responsive", "Framer Motion Animations"],
    link: "https://www.fiverr.com/ashutosh_tech1/build-a-responsive-react-landing-page"
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-12 md:px-24 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="ambient-orb w-[500px] h-[500px] bg-[var(--gradient-start)] -top-40 -right-40" />
      <div className="ambient-orb w-[400px] h-[400px] bg-[var(--gradient-end)] bottom-1/4 -left-40" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* Header */}
        <section className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold text-accent tracking-widest uppercase"
          >
            Portfolio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Digital{" "}
            <span className="gradient-text">Works</span>
          </motion.h1>
          <p className="text-lg text-muted max-w-xl">
            Selected projects and freelance services showcasing my development expertise.
          </p>
        </section>

        {/* Project Gallery */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-2xl p-8 md:p-10 hover:bg-surface-hover transition-all duration-500 glow-hover overflow-hidden"
            >
              <div className="relative z-10 space-y-5">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${project.color}15` }}>
                    <project.icon size={24} style={{ color: project.color }} />
                  </div>
                  <span className="text-7xl font-black text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-colors leading-none">
                    0{i + 1}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-foreground/5 text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-base text-muted leading-relaxed">
                  {project.description}
                </p>
                <Link 
                  href={project.github} 
                  target="_blank" 
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-accent hover:underline group/link"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                  <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Services / Fiverr */}
        <section className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-accent tracking-widest uppercase">Services</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to <span className="gradient-text">Build</span>?
            </h2>
            <p className="text-lg text-muted">Hire me on Fiverr for your next project.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="gradient-border rounded-2xl"
              >
                <div className="bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-mid)] p-8 md:p-10 h-full rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{service.title}</h3>
                  <p className="text-base font-medium opacity-85 mb-8 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-10">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center space-x-3 text-sm font-medium opacity-90">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link}
                    target="_blank"
                    className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/30 transition-all"
                  >
                    <span>View on Fiverr</span>
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Cpu, Globe, Rocket } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import Link from "next/link";

const projects = [
  {
    title: "Strive-",
    description: "Flutter-based productivity application focused on focus-mode and app blocking for students.",
    tech: ["Flutter", "Dart", "Firebase", "Android Studio"],
    github: "https://github.com/AshutoshDishagat/Strive-",
    icon: Rocket
  },
  {
    title: "ChatBotMongoose",
    description: "An intelligent chatbot system built with Node.js and MongoDB for seamless conversational experiences.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/AshutoshDishagat/ChatBotMongoose",
    icon: Code2
  },
  {
    title: "ADkart",
    description: "A comprehensive e-commerce platform featuring product management, cart functionality, and secure checkout.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/AshutoshDishagat/ADkart",
    icon: Globe
  },
  {
    title: "Booking-App",
    description: "Real-time reservation system for managing appointments and bookings with an intuitive dashboard.",
    tech: ["React", "Node", "MongoDB", "Tailwind"],
    github: "https://github.com/AshutoshDishagat/Booking-App",
    icon: Cpu
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
    <main className="min-h-screen bg-background pt-32 pb-20 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Header */}
        <section className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black uppercase tracking-tighter"
          >
            Digital <br />
            <span className="text-muted italic underline decoration-foreground underline-offset-8">WORKS.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-widest text-muted-foreground italic">
            Selected Projects & Freelance Services
          </p>
        </section>

        {/* Project Gallery */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-foreground/[0.02] border border-foreground/5 p-8 md:p-12 hover:bg-foreground hover:text-background transition-all duration-500 rounded-2xl overflow-hidden"
            >
              <div className="relative z-10 space-y-6">
                <project.icon size={48} className="text-muted group-hover:text-background transition-colors" />
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-black uppercase px-2 py-1 border border-current">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-lg md:text-xl font-medium opacity-80 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center space-x-6 pt-4">
                  <Link href={project.github} target="_blank" className="flex items-center space-x-2 font-bold uppercase tracking-widest text-sm hover:underline">
                    <GithubIcon className="w-5 h-5" />
                    <span>Source Code</span>
                  </Link>
                </div>
              </div>
              {/* Artistic Background Number */}
              <div className="absolute top-4 right-8 text-8xl font-black opacity-[0.03] group-hover:opacity-10 transition-opacity">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Services / Fiverr */}
        <section className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic">Services</h2>
            <p className="text-xl text-muted-foreground font-bold uppercase">Ready to start a project? Hire me on Fiverr.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10 }}
                className="p-1 border-[4px] border-foreground rounded-3xl"
              >
                <div className="bg-foreground text-background p-10 md:p-12 h-full rounded-[1.4rem]">
                  <h3 className="text-3xl font-black mb-6 uppercase leading-tight">{service.title}</h3>
                  <p className="text-xl font-medium opacity-80 mb-8">{service.description}</p>
                  <ul className="space-y-3 mb-12">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center space-x-3 font-bold uppercase tracking-wider text-sm italic">
                        <div className="w-4 h-4 rounded-full border-2 border-background flex items-center justify-center">
                          <div className="w-2 h-2 bg-background rounded-full" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link}
                    target="_blank"
                    className="inline-flex items-center space-x-3 bg-background text-foreground px-8 py-4 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform"
                  >
                    <span>View on Fiverr</span>
                    <ExternalLink size={20} />
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

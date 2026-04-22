"use client";

import { motion } from "framer-motion";
import { Send, Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Link from "next/link";

const contacts = [
  {
    title: "Email",
    subtitle: "dishagatashutosh@gmail.com",
    href: "mailto:dishagatashutosh@gmail.com",
    icon: Mail,
    color: "#f43f5e",
  },
  {
    title: "LinkedIn",
    subtitle: "@ashutosh-dishagat",
    href: "https://www.linkedin.com/in/ashutosh-dishagat-10343625a/",
    icon: LinkedinIcon,
    color: "#0077b5",
    isCustomIcon: true,
  },
  {
    title: "GitHub",
    subtitle: "@AshutoshDishagat",
    href: "https://github.com/AshutoshDishagat",
    icon: GithubIcon,
    color: "#6366f1",
    isCustomIcon: true,
  },
  {
    title: "Fiverr",
    subtitle: "Hire @ashutosh_tech1",
    href: "https://www.fiverr.com/ashutosh_tech1?public_mode=true",
    icon: ExternalLink,
    color: "#1dbf73",
    featured: true,
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-12 md:px-24 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="ambient-orb w-[500px] h-[500px] bg-[var(--gradient-start)] top-1/4 -left-40" />
      <div className="ambient-orb w-[400px] h-[400px] bg-[var(--gradient-end)] bottom-0 -right-40" style={{ animationDelay: "3s" }} />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold text-accent tracking-widest uppercase"
          >
            Get in Touch
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            I&apos;m always open to new projects, collaborations, or just a technical chat. 
            Find me on my professional platforms below.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <Link 
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                className={`group flex items-center space-x-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 glow-hover ${
                  contact.featured 
                    ? "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-xl shadow-[var(--gradient-start)]/20"
                    : "glass hover:bg-surface-hover"
                }`}
              >
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    contact.featured ? "bg-white/20" : ""
                  }`}
                  style={!contact.featured ? { backgroundColor: `${contact.color}15` } : {}}
                >
                  {contact.isCustomIcon ? (
                    <contact.icon className="w-5 h-5" style={!contact.featured ? { color: contact.color } : { color: "white" }} />
                  ) : (
                    <contact.icon size={20} style={!contact.featured ? { color: contact.color } : { color: "white" }} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold">{contact.title}</h3>
                  <p className={`text-sm truncate ${contact.featured ? "opacity-85" : "text-muted"}`}>
                    {contact.subtitle}
                  </p>
                </div>
                <ArrowUpRight 
                  size={18} 
                  className={`flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${
                    contact.featured ? "opacity-70" : "text-muted"
                  }`}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <div className="glass rounded-2xl p-10 md:p-14 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Have a project in <span className="gradient-text">mind</span>?
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              Let&apos;s discuss how we can bring your idea to life with modern technology and great design.
            </p>
            <Link
              href="mailto:dishagatashutosh@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-[var(--gradient-start)]/25 transition-all hover:-translate-y-0.5"
            >
              <Send size={18} />
              <span>Send an Email</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

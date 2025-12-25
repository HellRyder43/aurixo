"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: "ecosaga",
    title: "EcoSaga Pickleball Club",
    subtitle: "Premium court booking & membership platform",
    category: "Full-Stack Development",
    description:
      "A sophisticated booking platform for a premium pickleball facility in Malaysia, featuring court reservations, membership packages, and social game organization.",
    features: [
      "Online court booking system with instant confirmation",
      "Membership management with flexible credit packages",
      "Social game hosting and player matchmaking",
      "Automated cost splitting between players",
      "Responsive design with luxury aesthetic",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://ecosaga.vercel.app/",
  },
  {
    id: "ismail-jazlan-studio",
    title: "Ismail Jazlan Photography Studio",
    subtitle: "Professional photography portfolio with AI integration",
    category: "Web Development & AI",
    description:
      "A minimalist portfolio website for a professional photographer in Kuala Lumpur, featuring an innovative AI Creative Director tool to help clients conceptualize custom photoshoots.",
    features: [
      "Dynamic portfolio gallery with category filtering",
      "AI-powered creative concierge for concept development",
      "Service booking system with pricing tiers",
      "Dark/light mode toggle for optimal viewing",
      "Smooth animations and modern UI transitions",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "AI Integration", "Framer Motion"],
    liveUrl: "https://ismail-jazlan-studio.vercel.app/",
  },
  {
    id: "klinik-adelia",
    title: "Klinik Adelia Alamsari",
    subtitle: "Medical clinic website with appointment booking",
    category: "Healthcare Web Development",
    description:
      "A comprehensive healthcare website for a family clinic in Kajang, Malaysia, featuring WhatsApp appointment booking, insurance panel information, and SEO optimization for local medical search.",
    features: [
      "WhatsApp integration for instant appointment booking",
      "Insurance panel directory with 12+ providers",
      "Doctor credentials and service catalog",
      "SEO-optimized with Schema.org medical markup",
      "Bilingual support (Malay/English)",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Schema.org",
      "Google Analytics",
      "WhatsApp API",
    ],
    liveUrl: "https://klinikadelia.vercel.app/",
  },
];

export default function FeaturedWork() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-indigo/5 to-transparent" />
      <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-brand-magenta/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Featured <span className="text-gradient font-normal">Projects</span>
          </h2>
          <p className="text-lg text-slate-gray dark:text-slate-text max-w-2xl mx-auto leading-relaxed">
            Real-world solutions for diverse industries. From booking platforms
            to AI-powered portfolios,{" "}
            <span className="text-gradient font-normal">
              built to perform
            </span>
            .
          </p>
        </motion.div>

        {/* Portfolio Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Project Card */}
              <div className="relative h-full bg-white/80 dark:bg-carbon/80 backdrop-blur-xl border border-slate-200 dark:border-[#1e1e1e] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-brand-indigo/50 transition-all duration-500 flex flex-col">
                {/* Category Badge */}
                <div className="inline-block w-fit px-4 py-1.5 bg-gradient-to-r from-brand-indigo/20 to-brand-purple/20 border border-brand-indigo/30 rounded-full text-sm font-normal text-brand-indigo mb-4">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-light mb-2 text-charcoal dark:text-white">
                  {project.title}
                </h3>
                <p className="text-base text-brand-purple mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-gray dark:text-slate-text leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-normal text-charcoal dark:text-white mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-gray dark:text-slate-text leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-brand-indigo mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 mt-auto">
                  <h4 className="text-sm font-normal text-charcoal dark:text-white mb-3 uppercase tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-brand-indigo/10 to-brand-purple/10 border border-brand-indigo/20 rounded-full text-xs text-slate-gray dark:text-slate-text hover:border-brand-indigo/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Live Site Button */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-magenta text-white rounded-xl font-normal hover:shadow-lg hover:shadow-brand-indigo/50 transition-all duration-300 group-hover:scale-105"
                >
                  View Live Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-slate-gray dark:text-slate-text mb-6">
            Want to see your project achieve similar results?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-magenta text-white rounded-xl font-normal hover:shadow-lg hover:shadow-brand-indigo/50 transition-all duration-300 group"
          >
            Let's Build Something Great
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

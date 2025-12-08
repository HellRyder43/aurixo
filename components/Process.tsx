"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Pencil, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "Deep dive into your business needs, goals, and technical requirements. Defining success metrics and project scope together.",
  },
  {
    icon: Pencil,
    title: "Design",
    description:
      "User-centric design and system architecture planning. Wireframes, prototypes, and technical specifications.",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "Agile development with weekly sprints. Continuous integration, code reviews, and transparent progress tracking.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description:
      "Seamless launch with zero-downtime deployment. Performance optimization, security hardening, and load testing.",
  },
  {
    icon: Headphones,
    title: "Support",
    description:
      "Ongoing maintenance, updates, and scaling support. Your long-term technology partner, not just a vendor.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-10 w-72 h-72 bg-brand-indigo/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]) }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl"
      />

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
            How I <span className="text-gradient font-normal">Work</span>
          </h2>
          <p className="text-lg text-slate-gray dark:text-slate-text max-w-2xl mx-auto leading-relaxed">
            A proven process refined over years of delivering successful
            projects. Transparent, collaborative, and results-driven.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-indigo via-brand-purple to-brand-magenta hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-light mb-4 text-charcoal dark:text-white">
                    <span className="text-gradient font-normal">
                      {String(index + 1).padStart(2, "0")}.
                    </span>{" "}
                    {step.title}
                  </h3>
                  <p className="text-slate-gray dark:text-slate-text leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 flex-shrink-0 w-20 h-20 rounded-full bg-gradient-brand flex items-center justify-center shadow-lg shadow-brand-purple/30"
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Server,
  Workflow,
  Brain,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Custom web platforms built with modern frameworks. Responsive, fast, and tailored to your business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile solutions that deliver exceptional user experiences on iOS and Android.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Robust server architectures and RESTful/GraphQL APIs designed for performance, security, and scalability.",
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    description:
      "Connect your systems, automate workflows, and eliminate manual processes to boost operational efficiency.",
  },
  {
    icon: Brain,
    title: "AI & Agentic Solutions",
    description:
      "Leverage cutting-edge AI and intelligent agents to enhance decision-making and automate complex tasks.",
  },
  {
    icon: Database,
    title: "Data & Workflow Optimization",
    description:
      "Transform raw data into actionable insights with optimized pipelines, analytics, and reporting systems.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent" />

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
            Services & <span className="text-gradient font-normal">Expertise</span>
          </h2>
          <p className="text-lg text-slate-gray dark:text-slate-text max-w-2xl mx-auto leading-relaxed">
            Comprehensive software development services designed to solve real
            business problems and drive measurable outcomes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-white dark:bg-carbon rounded-2xl border border-cool-gray dark:border-white/5 hover:border-brand-indigo/50 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 to-brand-magenta/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-normal mb-3 text-charcoal dark:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-gray dark:text-slate-text leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

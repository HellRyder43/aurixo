"use client";

import { motion } from "framer-motion";
import { Target, Zap, Layers, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Business-Focused Approach",
    description:
      "Prioritizing outcomes over output. Every technical decision is aligned with your business goals and ROI.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    description:
      "Maintainable, well-documented codebases built with industry best practices. Easy to scale, extend, and hand off.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Agile development cycles with regular milestones. See progress weekly, not quarterly. Launch faster, iterate smarter.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description:
      "Future-proof solutions designed to grow with your business. Performance and reliability from day one.",
  },
];

export default function WhyAurixo() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />

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
            Why <span className="text-gradient font-normal">Aurixo</span>
          </h2>
          <p className="text-lg text-slate-gray dark:text-slate-text max-w-2xl mx-auto leading-relaxed">
            Trusted by forward-thinking companies to deliver software that
            matters. Here's what sets me apart.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex gap-6"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-indigo/20 to-brand-magenta/20 border border-brand-indigo/30 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-brand-indigo" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-normal mb-3 text-charcoal dark:text-white">
                  {value.title}
                </h3>
                <p className="text-slate-gray dark:text-slate-text leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl md:text-5xl font-light text-gradient mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-slate-text">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

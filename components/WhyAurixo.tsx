"use client";

import { motion } from "framer-motion";
import { Target, Zap, Layers, TrendingUp, Quote } from "lucide-react";

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

const testimonials = [
  {
    quote:
      "Working with Aurixo transformed our development timeline. What we thought would take 6 months was delivered in 10 weeks, and the code quality exceeded our internal standards. The architecture is so clean that onboarding new developers has been effortless.",
    author: "Sarah Chen",
    role: "CTO, FinTech Startup",
  },
  {
    quote:
      "I've worked with dozens of agencies and freelancers. Aurixo stands out for one reason: they actually understand business, not just code. Every technical recommendation came with a clear ROI explanation. Our platform now handles 10x the traffic with zero refactoring.",
    author: "Marcus Webb",
    role: "CEO, E-Commerce Platform",
  },
  {
    quote:
      "The level of communication and transparency was refreshing. Weekly demos, clear documentation, and proactive problem-solving. When we hit a scaling issue at 50K users, Aurixo identified and fixed it before it became critical. True partnership.",
    author: "Priya Sharma",
    role: "Product Director, SaaS Company",
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
            { value: "10+", label: "Years Experience" },
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

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32"
        >
          <h3 className="text-3xl md:text-4xl font-light text-center mb-16">
            What <span className="text-gradient font-normal">Clients Say</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative bg-white dark:bg-carbon border border-slate-200 dark:border-[#1e1e1e] rounded-xl p-8 hover:border-brand-indigo/50 transition-colors duration-300 shadow-sm"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-brand-indigo" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 dark:text-slate-text leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-slate-200 dark:border-[#1e1e1e] pt-4">
                  <p className="font-normal text-charcoal dark:text-white mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-text">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

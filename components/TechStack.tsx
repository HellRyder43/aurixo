"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    category: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    tools: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    category: "Mobile",
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    category: "Cloud & DevOps",
    tools: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    category: "AI & Data",
    tools: ["OpenAI", "LangChain", "TensorFlow", "Pandas", "Vector DBs"],
  },
  {
    category: "Tools",
    tools: ["Git", "Figma", "Postman", "Linear", "Notion"],
  },
];

export default function TechStack() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
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
            Trusted <span className="text-gradient font-normal">Technologies</span>
          </h2>
          <p className="text-lg text-slate-text max-w-2xl mx-auto leading-relaxed">
            Industry-leading tools and frameworks to build reliable, performant,
            and future-proof solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-carbon rounded-xl border border-white/5"
            >
              <h3 className="text-lg font-normal mb-4 text-brand-indigo">
                {tech.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-sm bg-deep-black border border-white/10 rounded-lg text-slate-text hover:border-brand-indigo/30 hover:text-white transition-all"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Enterprise-Grade Security",
              description: "GDPR compliant, SOC 2 standards, encrypted data.",
            },
            {
              title: "99.9% Uptime Guarantee",
              description:
                "Robust infrastructure with monitoring and failover systems.",
            },
            {
              title: "Ongoing Support",
              description:
                "Post-launch maintenance, updates, and technical assistance.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center p-6"
            >
              <h4 className="text-xl font-normal mb-2 text-white">
                {item.title}
              </h4>
              <p className="text-sm text-slate-text">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

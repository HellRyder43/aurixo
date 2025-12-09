"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Zap,
  Users,
  ArrowRight,
  TrendingUp,
  Database,
  Cloud,
  Smartphone,
  Code,
} from "lucide-react";

interface Metric {
  label: string;
  value: string;
  change?: string;
  icon: React.ElementType;
}

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: Metric[];
  techStack: string[];
  lighthouseScore?: number;
  systemDiagram: {
    components: string[];
    description: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: "fintech-platform",
    title: "FinTech Payment Platform",
    subtitle: "Real-time transaction processing at scale",
    category: "Full-Stack Development",
    description:
      "Built a secure, high-performance payment gateway handling 10K+ transactions per minute with 99.99% uptime.",
    challenge:
      "Legacy monolith couldn't handle peak loads. Transaction processing took 3-5 seconds, causing user drop-off.",
    solution:
      "Microservices architecture with event-driven processing. Redis caching layer, PostgreSQL with read replicas, message queues for async operations.",
    metrics: [
      {
        label: "Response Time",
        value: "< 200ms",
        change: "95% faster",
        icon: Zap,
      },
      {
        label: "Concurrent Users",
        value: "50K+",
        change: "10x increase",
        icon: Users,
      },
      {
        label: "Uptime",
        value: "99.99%",
        change: "from 94%",
        icon: TrendingUp,
      },
      {
        label: "Performance Score",
        value: "98/100",
        change: "Lighthouse",
        icon: Gauge,
      },
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
      "Kubernetes",
    ],
    lighthouseScore: 98,
    systemDiagram: {
      components: [
        "Load Balancer",
        "API Gateway",
        "Auth Service",
        "Payment Service",
        "Notification Queue",
        "Database Cluster",
        "Cache Layer",
      ],
      description:
        "Event-driven microservices with horizontal auto-scaling and multi-region failover.",
    },
  },
  {
    id: "ecommerce-mobile",
    title: "E-Commerce Mobile App",
    subtitle: "Cross-platform shopping experience",
    category: "Mobile Development",
    description:
      "Native-quality mobile app for iOS and Android with offline-first architecture and instant search.",
    challenge:
      "Slow product search, poor offline experience, and cart abandonment rate at 68%.",
    solution:
      "React Native with local-first database sync. Implemented Algolia search, optimistic UI updates, and smart prefetching. Reduced bundle size by 40%.",
    metrics: [
      {
        label: "App Load Time",
        value: "1.2s",
        change: "75% faster",
        icon: Zap,
      },
      {
        label: "Cart Conversion",
        value: "87%",
        change: "+19% increase",
        icon: TrendingUp,
      },
      {
        label: "Monthly Active Users",
        value: "120K",
        change: "3x growth",
        icon: Users,
      },
      {
        label: "App Store Rating",
        value: "4.8★",
        change: "from 3.2★",
        icon: Smartphone,
      },
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "GraphQL",
      "WatermelonDB",
      "Algolia",
      "Firebase",
    ],
    lighthouseScore: 95,
    systemDiagram: {
      components: [
        "Mobile Client",
        "GraphQL API",
        "Search Engine",
        "Image CDN",
        "Analytics Service",
        "Push Notifications",
      ],
      description:
        "Offline-first architecture with background sync and smart caching strategy.",
    },
  },
  {
    id: "ai-analytics",
    title: "AI-Powered Analytics Dashboard",
    subtitle: "Real-time insights with predictive models",
    category: "AI & Data Engineering",
    description:
      "Intelligent dashboard processing 2TB of daily data with ML-powered anomaly detection and forecasting.",
    challenge:
      "Manual report generation took 4-6 hours. No real-time alerting. Data scattered across 12 sources.",
    solution:
      "Built data pipeline with Airflow orchestration. Implemented real-time stream processing, custom ML models for predictions, and interactive visualizations.",
    metrics: [
      {
        label: "Report Generation",
        value: "Real-time",
        change: "from 6 hours",
        icon: Zap,
      },
      {
        label: "Data Processing",
        value: "2TB/day",
        change: "automated",
        icon: Database,
      },
      {
        label: "Prediction Accuracy",
        value: "94%",
        change: "ML models",
        icon: TrendingUp,
      },
      {
        label: "Dashboard Load",
        value: "< 1s",
        change: "with caching",
        icon: Gauge,
      },
    ],
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Airflow",
      "TensorFlow",
      "React",
      "D3.js",
    ],
    lighthouseScore: 96,
    systemDiagram: {
      components: [
        "Data Ingestion",
        "ETL Pipeline",
        "ML Training Service",
        "Prediction API",
        "Time-Series DB",
        "WebSocket Server",
        "Dashboard UI",
      ],
      description:
        "Stream processing with real-time ML inference and delta-based updates.",
    },
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
            Featured <span className="text-gradient font-normal">Work</span>
          </h2>
          <p className="text-lg text-slate-gray dark:text-slate-text max-w-2xl mx-auto leading-relaxed">
            Real projects. Real results. From concept to production,{" "}
            <span className="text-gradient font-normal">
              precision engineering
            </span>{" "}
            that delivers measurable impact.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              {/* Case Study Card */}
              <div className="relative bg-white/80 dark:bg-carbon/80 backdrop-blur-xl border border-slate-200 dark:border-[#1e1e1e] rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl hover:border-brand-indigo/50 transition-all duration-500">
                {/* Category Badge */}
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-brand-indigo/20 to-brand-purple/20 border border-brand-indigo/30 rounded-full text-sm font-normal text-brand-indigo mb-6">
                  {study.category}
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-light mb-3 text-charcoal dark:text-white">
                  {study.title}
                </h3>
                <p className="text-lg text-brand-purple mb-6">
                  {study.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-gray dark:text-slate-text leading-relaxed mb-8 text-lg">
                  {study.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {study.metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-gradient-to-br from-white dark:from-carbon to-slate-50 dark:to-carbon border border-slate-200 dark:border-[#1e1e1e] rounded-xl p-6 hover:border-brand-indigo/50 transition-colors duration-300"
                    >
                      <metric.icon className="w-6 h-6 text-brand-indigo mb-3" />
                      <div className="text-2xl md:text-3xl font-light text-gradient mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-slate-gray dark:text-slate-text">
                        {metric.label}
                      </div>
                      {metric.change && (
                        <div className="text-xs text-brand-purple mt-1">
                          {metric.change}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h4 className="text-xl font-normal mb-3 text-charcoal dark:text-white flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-brand-indigo to-brand-purple rounded-full" />
                      The Challenge
                    </h4>
                    <p className="text-slate-gray dark:text-slate-text leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-normal mb-3 text-charcoal dark:text-white flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-brand-purple to-brand-magenta rounded-full" />
                      The Solution
                    </h4>
                    <p className="text-slate-gray dark:text-slate-text leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* System Architecture Diagram */}
                <div className="mb-8 bg-gradient-to-br from-slate-50 dark:from-deep-black to-white dark:to-carbon border border-slate-200 dark:border-[#1e1e1e] rounded-xl p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-5 h-5 text-brand-indigo" />
                    <h4 className="text-lg font-normal text-charcoal dark:text-white">
                      System Architecture
                    </h4>
                  </div>
                  <p className="text-sm text-slate-gray dark:text-slate-text mb-6 leading-relaxed">
                    {study.systemDiagram.description}
                  </p>

                  {/* Architecture Component Flow */}
                  <div className="flex flex-wrap items-center gap-3">
                    {study.systemDiagram.components.map((component, i) => (
                      <div key={component} className="flex items-center">
                        <div className="px-4 py-2 bg-white dark:bg-carbon border border-brand-indigo/30 rounded-lg text-sm text-charcoal dark:text-white">
                          {component}
                        </div>
                        {i < study.systemDiagram.components.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-brand-indigo mx-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-brand-indigo/10 to-brand-purple/10 border border-brand-indigo/20 rounded-full text-sm text-slate-gray dark:text-slate-text hover:border-brand-indigo/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Lighthouse Score Badge */}
                {study.lighthouseScore && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-lg">
                    <Gauge className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-normal text-emerald-600 dark:text-emerald-400">
                      Lighthouse Score: {study.lighthouseScore}/100
                    </span>
                  </div>
                )}
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

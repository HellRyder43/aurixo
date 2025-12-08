"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import { useState } from "react";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you! I'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-transparent via-brand-indigo/5 to-transparent"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Let's Build Something{" "}
            <span className="text-gradient font-normal">Exceptional</span>
          </h2>
          <p className="text-lg text-slate-text max-w-2xl mx-auto leading-relaxed">
            Ready to transform your idea into reality? Book a free consultation
            and let's discuss how I can help your business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-normal mb-2 text-slate-text"
              >
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-carbon border border-white/10 rounded-lg text-white placeholder-slate-text focus:border-brand-indigo focus:outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-normal mb-2 text-slate-text"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-carbon border border-white/10 rounded-lg text-white placeholder-slate-text focus:border-brand-indigo focus:outline-none transition-all"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-normal mb-2 text-slate-text"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-carbon border border-white/10 rounded-lg text-white placeholder-slate-text focus:border-brand-indigo focus:outline-none transition-all"
                placeholder="Your Company Ltd."
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-normal mb-2 text-slate-text"
              >
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-carbon border border-white/10 rounded-lg text-white placeholder-slate-text focus:border-brand-indigo focus:outline-none transition-all resize-none"
                placeholder="Tell me about your project, goals, and timeline..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 rounded-full bg-gradient-brand text-white font-normal flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:shadow-brand-purple/30"
            >
              Send Message
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:pl-8"
          >
            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light mb-6 text-white">
                Prefer a Direct Approach?
              </h3>

              <motion.a
                href="mailto:contact@aurixo.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-carbon border border-white/10 rounded-xl hover:border-brand-indigo/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-indigo/20 to-brand-magenta/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-indigo" />
                </div>
                <div>
                  <div className="text-sm text-slate-text">Email me</div>
                  <div className="text-white font-normal group-hover:text-brand-indigo transition-colors">
                    contact@aurixo.com
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://cal.com/aurixo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-carbon border border-white/10 rounded-xl hover:border-brand-indigo/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-indigo/20 to-brand-magenta/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-brand-indigo" />
                </div>
                <div>
                  <div className="text-sm text-slate-text">Schedule a call</div>
                  <div className="text-white font-normal group-hover:text-brand-indigo transition-colors">
                    Book a meeting
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Response Time */}
            <div className="p-6 bg-gradient-to-br from-brand-indigo/10 to-brand-magenta/10 border border-brand-indigo/20 rounded-xl">
              <h4 className="text-lg font-normal mb-2 text-white">
                Quick Response Time
              </h4>
              <p className="text-sm text-slate-text leading-relaxed">
                I typically respond to all inquiries within 24 hours during
                business days. For urgent projects, I offer same-day
                consultations.
              </p>
            </div>

            {/* What to Expect */}
            <div>
              <h4 className="text-lg font-normal mb-4 text-white">
                What Happens Next?
              </h4>
              <ul className="space-y-3 text-sm text-slate-text">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-indigo/20 flex items-center justify-center text-brand-indigo text-xs font-normal">
                    1
                  </span>
                  <span>I'll review your project details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-indigo/20 flex items-center justify-center text-brand-indigo text-xs font-normal">
                    2
                  </span>
                  <span>Schedule a discovery call</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-indigo/20 flex items-center justify-center text-brand-indigo text-xs font-normal">
                    3
                  </span>
                  <span>Receive a tailored proposal</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

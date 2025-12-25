"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  // WhatsApp configuration
  const whatsappNumber = "60102651179";
  const defaultMessage = encodeURIComponent(
    "Hi! I'm interested in discussing a project with Aurixo."
  );
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

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
          <p className="text-lg text-slate-gray dark:text-slate-text max-w-2xl mx-auto leading-relaxed">
            Ready to transform your idea into reality? Book a free consultation
            and let's discuss how I can help your business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="p-8 bg-white dark:bg-carbon border border-cool-gray dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-indigo/20 to-brand-magenta/20 flex items-center justify-center">
                  <MessageCircle className="w-10 h-10 text-brand-indigo" />
                </div>
              </div>

              <h3 className="text-2xl font-light text-center mb-4 text-charcoal dark:text-white">
                Let's Chat on{" "}
                <span className="text-gradient font-normal">WhatsApp</span>
              </h3>

              <p className="text-center text-slate-gray dark:text-slate-text mb-6 leading-relaxed">
                Get instant responses to your questions. I'm available to
                discuss your project, provide quotes, and answer any queries you
                might have.
              </p>

              <motion.a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full px-8 py-4 rounded-full bg-gradient-brand text-white font-normal text-center transition-all hover:shadow-xl hover:shadow-brand-purple/30"
              >
                <span className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Start WhatsApp Chat
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.a>

              <div className="mt-6 pt-6 border-t border-cool-gray dark:border-white/10">
                <div className="flex items-center justify-center gap-2 text-sm text-slate-gray dark:text-slate-text">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Usually responds within minutes
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-brand-indigo/10 to-brand-magenta/10 border border-brand-indigo/20 rounded-xl">
              <h4 className="text-lg font-normal mb-2 text-charcoal dark:text-white">
                Why WhatsApp?
              </h4>
              <ul className="space-y-2 text-sm text-slate-gray dark:text-slate-text">
                <li className="flex items-start gap-2">
                  <span className="text-brand-indigo mt-1">✓</span>
                  <span>Instant communication and quick responses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-indigo mt-1">✓</span>
                  <span>Share files, screenshots, and documents easily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-indigo mt-1">✓</span>
                  <span>Voice messages for detailed explanations</span>
                </li>
              </ul>
            </div>
          </motion.div>

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
              <h3 className="text-2xl font-light mb-6 text-charcoal dark:text-white">
                Available on WhatsApp
              </h3>

              <motion.a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-carbon border border-cool-gray dark:border-white/10 rounded-xl hover:border-brand-indigo/50 transition-all group shadow-sm dark:shadow-none"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-indigo/20 to-brand-magenta/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-brand-indigo" />
                </div>
                <div>
                  <div className="text-sm text-slate-gray dark:text-slate-text">
                    Message me
                  </div>
                  <div className="text-charcoal dark:text-white font-normal group-hover:text-brand-indigo transition-colors">
                    WhatsApp Chat
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-carbon border border-cool-gray dark:border-white/10 rounded-xl hover:border-brand-indigo/50 transition-all group shadow-sm dark:shadow-none"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-indigo/20 to-brand-magenta/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-brand-indigo" />
                </div>
                <div>
                  <div className="text-sm text-slate-gray dark:text-slate-text">
                    Schedule a call
                  </div>
                  <div className="text-charcoal dark:text-white font-normal group-hover:text-brand-indigo transition-colors">
                    Book via WhatsApp
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Response Time */}
            <div className="p-6 bg-gradient-to-br from-brand-indigo/10 to-brand-magenta/10 border border-brand-indigo/20 rounded-xl">
              <h4 className="text-lg font-normal mb-2 text-charcoal dark:text-white">
                Quick Response Time
              </h4>
              <p className="text-sm text-slate-gray dark:text-slate-text leading-relaxed">
                I typically respond to all inquiries within 24 hours during
                business days. For urgent projects, I offer same-day
                consultations.
              </p>
            </div>

            {/* What to Expect */}
            <div>
              <h4 className="text-lg font-normal mb-4 text-charcoal dark:text-white">
                What Happens Next?
              </h4>
              <ul className="space-y-3 text-sm text-slate-gray dark:text-slate-text">
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

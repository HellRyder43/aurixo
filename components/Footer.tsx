"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light mb-4 text-white">AURIXO</h3>
            <p className="text-sm text-slate-text leading-relaxed">
              Precision engineering for scalable solutions. Building the future,
              one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-normal mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Process", href: "#process" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-text hover:text-brand-indigo transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-normal mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/aurixo" },
                { icon: Linkedin, href: "https://linkedin.com/company/aurixo" },
                { icon: Twitter, href: "https://twitter.com/aurixo" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-carbon border border-white/10 flex items-center justify-center hover:border-brand-indigo/50 transition-all"
                >
                  <social.icon className="w-5 h-5 text-slate-text hover:text-brand-indigo transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-text">
            &copy; {new Date().getFullYear()} Aurixo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="text-sm text-slate-text hover:text-brand-indigo transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-slate-text hover:text-brand-indigo transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-deep-black/80 backdrop-blur-lg border-b border-cool-gray dark:border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/brand/logos/aurixo-logo-primary.svg"
            alt="Aurixo"
            width={210}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </a>

        {/* Right Side Container */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full bg-gradient-brand text-white font-normal text-sm transition-all hover:shadow-lg hover:shadow-brand-purple/25"
          >
            Book Consultation
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

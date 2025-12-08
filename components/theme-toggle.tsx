"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-white dark:bg-carbon border border-cool-gray dark:border-white/10" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-10 h-10 rounded-lg bg-white dark:bg-carbon border border-cool-gray dark:border-white/10 flex items-center justify-center hover:border-brand-indigo/50 transition-all group overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 to-brand-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative z-10"
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-slate-text" />
        ) : (
          <Sun className="w-5 h-5 text-charcoal" />
        )}
      </motion.div>
    </motion.button>
  );
}

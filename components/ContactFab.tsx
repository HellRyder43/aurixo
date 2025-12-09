"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function ContactFab() {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with actual WhatsApp number (format: 60123456789 for Malaysia)
  const whatsappNumber = "60102651179";
  const predefinedMessage = encodeURIComponent(
    "Hi Aurixo! I'm interested in discussing a project with you. Could we schedule a consultation?"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${predefinedMessage}`;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-4">
      {/* Contact Options - Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            {/* WhatsApp Button */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white dark:bg-carbon border border-cool-gray dark:border-white/10 rounded-full shadow-lg hover:shadow-xl hover:border-brand-indigo/50 transition-all group"
            >
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-brand">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-xs md:text-sm font-normal text-charcoal dark:text-white pr-1 md:pr-2 group-hover:text-brand-indigo transition-colors">
                WhatsApp
              </span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button with Pulse Effect */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-brand shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center group"
      >
        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-brand opacity-75"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.75, 0, 0.75],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Icon with Rotation Animation */}
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {isOpen ? (
            <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
          ) : (
            <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Tooltip - Shows on hover when closed (hidden on mobile, shown on desktop) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 px-3 py-2 bg-charcoal dark:bg-white text-white dark:text-charcoal text-sm font-normal rounded-lg shadow-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Get in touch
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-charcoal dark:bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

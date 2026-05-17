"use client"

import * as React from "react"
import { MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919150464242"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} fill="currentColor" />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  )
}

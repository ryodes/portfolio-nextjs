// src/components/AnimatedText.tsx
"use client";

import { motion } from "framer-motion";

export function AnimatedText() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold"
    >
      Salut, je suis Adel 👋
    </motion.h1>
  );
}

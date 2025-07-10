// src/components/AnimatedText.tsx
"use client";

import { motion } from "framer-motion";

export function AnimatedText({ title }: { title: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold mb-6"
    >
      {title}
    </motion.h1>
  );
}

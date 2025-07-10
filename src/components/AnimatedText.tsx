"use client";

import { motion, type Target } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  initial?: Target;
  animate?: Target;
  transition?: object;
}

export default function AnimatedText({
  children,
  className = "text-3xl font-bold mb-6",
  initial = { opacity: 0, y: -30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

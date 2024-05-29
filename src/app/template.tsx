"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      className="w-full mx-auto"
      initial={{ zoom: 0.9, opacity: 0 }}
      animate={{ zoom: 1, opacity: 1 }}
      exit={{ zoom: 0, opacity: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      {children}
    </motion.main>
  );
}

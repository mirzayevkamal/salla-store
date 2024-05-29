"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function ZoomInOut({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "circInOut", duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

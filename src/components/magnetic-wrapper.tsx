import { FC, useRef, useState } from "react";
import { motion } from "framer-motion";

const MagneticWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: any) => {
    if (ref?.current) {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        ref?.current?.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative", width: "100%" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 250, damping: 15, mass: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;

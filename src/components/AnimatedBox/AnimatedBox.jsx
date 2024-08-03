import React from "react";
import { motion } from "framer-motion";

const AnimatedBox = ({ children, delay = 0, duration = 1 }) => {
  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;


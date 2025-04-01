"use client";

import React from "react";
import { motion } from "framer-motion";

type FloatingAnimationProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  yOffset?: number;
  className?: string;
  rotationIntensity?: number;
};

export const FloatingAnimation = ({
  children,
  duration = 4,
  delay = 0,
  yOffset = 15,
  className = "",
  rotationIntensity = 2,
}: FloatingAnimationProps) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        rotate: [-rotationIntensity, rotationIntensity, -rotationIntensity],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}; 
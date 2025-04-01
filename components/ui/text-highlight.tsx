"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextHighlightProps {
  children: React.ReactNode;
  className?: string;
  highlightColor?: string;
  highlightHeight?: number;
  highlightWidth?: string;
  highlightOffset?: number;
  delayIn?: number;
  autoAnimate?: boolean;
}

export const TextHighlight = ({
  children,
  className = "",
  highlightColor = "#CBACF9",
  highlightHeight = 10,
  highlightWidth = "100%",
  highlightOffset = 0,
  delayIn = 0,
  autoAnimate = false
}: TextHighlightProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Animation variants
  const highlightVariants = {
    initial: { width: "0%", opacity: 0 },
    hover: { 
      width: highlightWidth, 
      opacity: 0.4,
      transition: { duration: 0.3, delay: delayIn }
    },
    autoAnimate: {
      width: ["0%", highlightWidth, highlightWidth, "0%"],
      opacity: [0, 0.4, 0.4, 0],
      transition: { 
        width: {
          duration: 1.5,
          times: [0, 0.3, 0.7, 1],
          repeat: Infinity,
          repeatDelay: 3
        },
        opacity: {
          duration: 1.5,
          times: [0, 0.3, 0.7, 1],
          repeat: Infinity,
          repeatDelay: 3
        }
      }
    }
  };
  
  // This will add delay between each animation when multiple are on the page
  React.useEffect(() => {
    if (autoAnimate) {
      // Already using the autoAnimate variant
    }
  }, [autoAnimate]);
  
  return (
    <span 
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text content */}
      <span className="relative z-10">{children}</span>
      
      {/* Highlight element */}
      <motion.span
        className="absolute left-0 bottom-0 z-0 block"
        style={{ 
          height: highlightHeight,
          bottom: -highlightOffset,
          backgroundColor: highlightColor,
          borderRadius: highlightHeight / 2
        }}
        initial="initial"
        animate={autoAnimate ? "autoAnimate" : (isHovered ? "hover" : "initial")}
        variants={highlightVariants}
      />
    </span>
  );
}; 
"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useScroll } from 'framer-motion';

interface ScrollIndicatorProps {
  color?: string;
  height?: number;
  showPercentage?: boolean;
  smooth?: boolean;
  showIndicator?: boolean;
  customIndicator?: React.ReactNode;
}

export const ScrollIndicator = ({
  color = "#CBACF9",
  height = 5,
  showPercentage = true,
  smooth = true,
  showIndicator = true,
  customIndicator
}: ScrollIndicatorProps) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Apply spring physics to smoothen the scroll progress
  const scaleX = smooth 
    ? useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 }) 
    : scrollYProgress;
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', latest => {
      // Update percentage display
      setScrollPercentage(Math.round(latest * 100));
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 origin-left"
        style={{ 
          height, 
          backgroundColor: color,
          scaleX 
        }}
      />
      
      {/* Visual scroll indicator */}
      {showIndicator && (
        <motion.div
          className="fixed top-[7px] z-50 flex items-center justify-center"
          style={{ 
            left: `calc(${scrollPercentage}% - 15px)`,
            y: smooth ? useSpring(scrollYProgress.get() > 0.02 ? 0 : -50, { stiffness: 100, damping: 30 }) : (scrollYProgress.get() > 0.02 ? 0 : -50)
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollPercentage > 1 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {customIndicator || (
            <div 
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
            >
              {showPercentage && scrollPercentage}
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}; 
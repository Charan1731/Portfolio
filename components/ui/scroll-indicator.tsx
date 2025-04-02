"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

interface ScrollIndicatorProps {
  color?: string;
  height?: number;
  smooth?: boolean;
  showIndicator?: boolean;
  customIndicator?: React.ReactNode;
}

export const ScrollIndicator = ({
  color = "#CBACF9",
  height = 4,
  smooth = true,
  showIndicator = true,
  customIndicator
}: ScrollIndicatorProps) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Always define spring configuration, but only use it when smooth is true
  const springConfig = {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001
  };

  useEffect(() => {
    // Update scroll percentage when scrollYProgress changes
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollPercentage(Math.min(100, Math.round(latest * 100)));
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Main progress bar */}
      <motion.div
        className="origin-left"
        style={{
          height,
          backgroundColor: color,
          scaleX: smooth ? undefined : scrollYProgress,
          width: '100%',
          transformOrigin: 'left',
          ...(smooth && { scaleX: scrollYProgress })
        }}
        transition={smooth ? springConfig : undefined}
      />
      
      {/* Optional visual indicator */}
      {showIndicator && (
        <div className="absolute top-4 right-4 bg-black bg-opacity-70 rounded-lg px-3 py-1 text-white text-sm flex items-center">
          {customIndicator || (
            <>
              <div className="mr-2 w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              <span>{scrollPercentage}%</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}; 
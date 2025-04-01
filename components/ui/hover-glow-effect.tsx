"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HoverGlowEffectProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: number;
  glowSize?: number;
  animateOnLoad?: boolean;
  rotateOnHover?: boolean;
  glowOnClick?: boolean;
}

export const HoverGlowEffect = ({
  children,
  className = "",
  glowColor = "#CBACF9",
  hoverScale = 1.03,
  glowSize = 250,
  animateOnLoad = true,
  rotateOnHover = true,
  glowOnClick = true
}: HoverGlowEffectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasClicked, setHasClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle glow position relative to the element
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the container
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  
  // Handle click animation
  const handleClick = () => {
    if (glowOnClick) {
      setHasClicked(true);
      setTimeout(() => setHasClicked(false), 600);
    }
  };
  
  // Initial animation
  useEffect(() => {
    if (animateOnLoad && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: rect.width / 2,
        y: rect.height / 2
      });
      setIsHovered(true);
      const timer = setTimeout(() => setIsHovered(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [animateOnLoad]);
  
  return (
    <motion.div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      initial={{ scale: 1 }}
      animate={{ 
        scale: isHovered ? hoverScale : 1,
        rotate: isHovered && rotateOnHover ? [0, -0.5, 0.5, 0] : 0
      }}
      transition={{ 
        scale: { type: "spring", stiffness: 400, damping: 17 },
        rotate: { repeat: Infinity, duration: 2 }
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: glowSize,
          height: glowSize,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${glowColor}40 0%, transparent 70%)`,
          filter: 'blur(10px)',
          left: mousePosition.x - glowSize / 2,
          top: mousePosition.y - glowSize / 2,
          zIndex: 0
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 0.7 : 0,
          scale: hasClicked ? [1, 1.5, 1] : 1
        }}
        transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.6 } }}
      />
      
      {/* Click ripple animation */}
      {hasClicked && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            backgroundColor: glowColor,
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            zIndex: 0
          }}
          initial={{ opacity: 0.8, scale: 0 }}
          animate={{ opacity: 0, scale: 6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
      
      {/* Content with raised z-index */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}; 
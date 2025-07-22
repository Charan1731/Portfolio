"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltEffectProps {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
  scale?: number;
  rotateXMax?: number;
  rotateYMax?: number;
  transitionDuration?: number;
  transitionEasing?: [number, number, number, number];
  glareEffect?: boolean;
  glarePositionOption?: string;
  glareColor?: string;
  glareOpacity?: number;
  glareSize?: number;
  reset?: boolean;
  shadow?: boolean;
  shadowColor?: string;
}

export const TiltEffect = ({
  children,
  className = "",
  perspective = 1000,
  scale = 1.05,
  rotateXMax = 15,
  rotateYMax = 15,
  transitionDuration = 0.2,
  transitionEasing = [0.17, 0.67, 0.83, 0.67],
  glareEffect = false,
  glarePositionOption = "all",
  glareColor = "rgba(255, 255, 255, 0.8)",
  glareOpacity = 0.8,
  glareSize = 0.6,
  reset = true,
  shadow = false,
  shadowColor = "rgba(0, 0, 0, 0.3)"
}: TiltEffectProps) => {
  const [tiltRotation, setTiltRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Calculate the tilt rotation based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    
    // Calculate the center of the element
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate the mouse position relative to the center of the element
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate the percentage position from -1 to 1
    const posX = mouseX / (rect.width / 2);
    const posY = mouseY / (rect.height / 2);
    
    // Calculate the tilt angle based on the mouse position
    // Negate rotateX to make the tilt effect feel more natural
    setTiltRotation({
      rotateX: -posY * rotateXMax,
      rotateY: posX * rotateYMax
    });
    
    // Calculate the position of the glare effect
    if (glareEffect) {
      setGlarePosition({
        x: (posX + 1) / 2, // Normalize to 0-1
        y: (posY + 1) / 2  // Normalize to 0-1
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (reset) {
      setTiltRotation({ rotateX: 0, rotateY: 0 });
    }
  };
  
  // Get glare styles based on position and hover state
  const getGlareStyles = () => {
    if (!glareEffect || !isHovered) return {};
    
    let gradientPosition = '';
    const { x, y } = glarePosition;
    
    switch (glarePositionOption) {
      case 'top':
        gradientPosition = 'to top';
        break;
      case 'right':
        gradientPosition = 'to right';
        break;
      case 'bottom':
        gradientPosition = 'to bottom';
        break;
      case 'left':
        gradientPosition = 'to left';
        break;
      case 'all':
      default:
        // Calculate angle based on mouse position
        const angle = Math.atan2(y - 0.5, x - 0.5) * (180 / Math.PI);
        gradientPosition = `${angle}deg`;
        break;
    }
    
    return {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 'inherit',
      zIndex: 1,
      pointerEvents: 'none' as const,
      background: `linear-gradient(${gradientPosition}, ${glareColor} 0%, transparent ${glareSize * 100}%)`,
      opacity: glareOpacity,
      mixBlendMode: 'overlay' as const
    };
  };
  
  // Get shadow styles
  const getShadowStyles = () => {
    if (!shadow || !isHovered) return {};
    
    const { rotateX, rotateY } = tiltRotation;
    const shadowX = rotateY / rotateYMax * 10;
    const shadowY = rotateX / rotateXMax * 10;
    
    return {
      filter: `drop-shadow(${shadowX}px ${shadowY}px 10px ${shadowColor})`
    };
  };

  return (
    <motion.div
      ref={elementRef}
      className={cn("relative", className)}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
        ...getShadowStyles()
      }}
      animate={{
        rotateX: tiltRotation.rotateX,
        rotateY: tiltRotation.rotateY,
        scale: isHovered ? scale : 1
      }}
      transition={{
        duration: transitionDuration,
        ease: transitionEasing,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
      
      {/* Glare effect */}
      {glareEffect && <div style={getGlareStyles()} />}
    </motion.div>
  );
}; 
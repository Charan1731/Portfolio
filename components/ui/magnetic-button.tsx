"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
  tolerance?: number;
  scale?: number;
  onClick?: () => void;
  href?: string;
  target?: string;
}

export const MagneticButton = ({
  children,
  className = "",
  strength = 30,
  radius = 200,
  tolerance = 0.8,
  scale = 1.05,
  onClick,
  href,
  target
}: MagneticButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  
  const buttonRef = useRef<HTMLDivElement>(null);
  
  // Memoize handleMouseMove to avoid recreation on each render
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    if (distance < radius * tolerance) {
      // Scale the movement based on distance from center
      const scaleFactor = 1 - distance / (radius * tolerance);
      
      // Apply movement based on strength
      const moveX = distanceX * scaleFactor * (strength / 10);
      const moveY = distanceY * scaleFactor * (strength / 10);
      
      setPosition({ x: moveX, y: moveY });
    } else {
      // If outside radius, reset position
      setPosition({ x: 0, y: 0 });
    }
  }, [radius, strength, tolerance]);
  
  const handleMouseEnter = () => {
    setHover(true);
  };
  
  const handleMouseLeave = () => {
    setHover(false);
    setPosition({ x: 0, y: 0 });
  };
  
  const handleMouseDown = () => {
    setPressed(true);
  };
  
  // Move handleMouseUp into useCallback
  const handleMouseUp = useCallback(() => {
    setPressed(false);
  }, []);
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]); // handleMouseUp is now memoized
  
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      target={target}
      onClick={onClick}
      className={cn("inline-block", className)}
    >
      <motion.div
        ref={buttonRef}
        className="relative"
        animate={{
          x: position.x,
          y: position.y,
          scale: hover ? (pressed ? 0.95 : scale) : 1
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 20,
          mass: 1
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
      >
        {children}
      </motion.div>
    </Component>
  );
}; 
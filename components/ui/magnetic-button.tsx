"use client";

import React, { useState, useRef, useEffect } from 'react';
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
  strength = 25,
  radius = 400,
  tolerance = 0.8,
  scale = 1.1,
  onClick,
  href,
  target
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  // Handle mouse position
  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef.current || !isHovered) return;
    
    // Get button dimensions
    const rect = buttonRef.current.getBoundingClientRect();
    
    // Calculate distance from cursor to center of button
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    
    // Calculate distance from cursor to center
    const distance = Math.sqrt(x * x + y * y);
    
    // Only move if cursor is within radius
    if (distance < radius) {
      // Scale the movement based on distance - closer means stronger pull
      const distanceStrength = Math.max(0, 1 - distance / radius);
      
      // Set position with the calculated strength
      setPosition({
        x: x * distanceStrength * tolerance * (isPressed ? 0.5 : 1),
        y: y * distanceStrength * tolerance * (isPressed ? 0.5 : 1)
      });
    } else {
      // Reset position if out of radius
      setPosition({ x: 0, y: 0 });
    }
  };
  
  // Handle mouse entering button
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  // Handle mouse leaving button
  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };
  
  // Handle mouse down
  const handleMouseDown = () => {
    setIsPressed(true);
    // Reduce the movement strength when pressed
    setPosition(prev => ({ x: prev.x * 0.5, y: prev.y * 0.5 }));
  };
  
  // Handle mouse up
  const handleMouseUp = () => {
    setIsPressed(false);
  };
  
  // Set up event listeners
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isHovered, isPressed]);
  
  // Create the component - wrap in a link if href is provided
  const ButtonComponent = (
    <motion.div
      ref={buttonRef}
      className={cn("inline-block cursor-pointer", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onClick={onClick}
      animate={{
        x: position.x / strength,
        y: position.y / strength,
        scale: isHovered ? scale : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.5
      }}
    >
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
  
  // Return link if href is provided, otherwise return the button
  if (href) {
    return (
      <a href={href} target={target} className="inline-block" style={{ lineHeight: 0 }}>
        {ButtonComponent}
      </a>
    );
  }
  
  return ButtonComponent;
}; 
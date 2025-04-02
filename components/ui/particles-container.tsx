"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
}

interface ParticlesContainerProps {
  className?: string;
  count?: number;
  color?: string;
  maxSize?: number;
  minSize?: number;
  speed?: number;
  interactive?: boolean;
  interactionDistance?: number;
  interactionForce?: number;
  randomOpacity?: boolean;
}

export const ParticlesContainer = ({
  className = "",
  count = 50,
  color = "#CBACF9",
  maxSize = 5,
  minSize = 1,
  speed = 1,
  interactive = true,
  interactionDistance = 100,
  interactionForce = 1,
  randomOpacity = false
}: ParticlesContainerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const animationRef = useRef<number | null>(null);
  
  // Memoize initParticles to include in useEffect dependencies
  const initParticles = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const width = canvas.width;
    const height = canvas.height;
    
    particlesRef.current = [];
    
    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxSize - minSize) + minSize,
        color,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        alpha: randomOpacity ? Math.random() * 0.5 + 0.5 : 1
      });
    }
  }, [count, maxSize, minSize, color, speed, randomOpacity]);
  
  // Memoize animate function to include in useEffect dependencies
  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particlesRef.current.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Mouse interaction if enabled
      if (interactive && mouseRef.current.isActive) {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < interactionDistance) {
          const forceFactor = (interactionDistance - distance) / interactionDistance;
          particle.vx += dx * forceFactor * 0.01 * interactionForce;
          particle.vy += dy * forceFactor * 0.01 * interactionForce;
        }
      }
      
      // Boundary check with bounce
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -1;
      }
      
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -1;
      }
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `${particle.color}${Math.round(particle.alpha * 255).toString(16).padStart(2, '0')}`;
      ctx.fill();
    });
    
    // Continue animation
    animationRef.current = requestAnimationFrame(animate);
  }, [interactive, interactionDistance, interactionForce]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas size
    const updateSize = () => {
      if (!canvas) return;
      
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      
      // Reinitialize particles on resize
      initParticles();
    };
    
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isActive = true;
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };
    
    // Initialize
    updateSize();
    window.addEventListener('resize', updateSize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, initParticles]); // Add memoized functions to dependencies
  
  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 z-10", className)}
    />
  );
}; 
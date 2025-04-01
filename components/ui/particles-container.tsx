"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
};

interface ParticlesContainerProps {
  className?: string;
  quantity?: number;
  stationary?: boolean;
  color?: string;
  children?: React.ReactNode;
}

export const ParticlesContainer = ({
  className,
  quantity = 30,
  stationary = false,
  color = "#CBACF9",
  children,
}: ParticlesContainerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  
  const updateDimensions = () => {
    if (canvasRef.current && canvasRef.current.parentElement) {
      const { width, height } = canvasRef.current.parentElement.getBoundingClientRect();
      setDimensions({ width, height });
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }
  };

  // Initialize particles
  const initParticles = () => {
    const particles: Particle[] = [];
    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: color,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    particlesRef.current = particles;
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    
    particlesRef.current.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, "0")}`;
      ctx.fill();
      
      if (!stationary) {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check with wraparound
        if (particle.x < 0) particle.x = dimensions.width;
        if (particle.x > dimensions.width) particle.x = 0;
        if (particle.y < 0) particle.y = dimensions.height;
        if (particle.y > dimensions.height) particle.y = 0;
      }
    });
    
    animationRef.current = requestAnimationFrame(animate);
  };
  
  useEffect(() => {
    updateDimensions();
    
    window.addEventListener("resize", updateDimensions);
    
    return () => {
      window.removeEventListener("resize", updateDimensions);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles();
      animate();
    }
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, quantity, stationary, color]);
  
  return (
    <div className={cn("relative w-full h-full", className)}>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}; 
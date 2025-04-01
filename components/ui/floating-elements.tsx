"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ElementShape = 'circle' | 'square' | 'triangle' | 'custom';
type ElementSize = 'small' | 'medium' | 'large' | number;

interface Element {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  shape: ElementShape;
  rotation: number;
  rotationSpeed: number;
  customPath?: string; // For SVG custom shapes
}

interface FloatingElementsProps {
  className?: string;
  count?: number;
  colors?: string[];
  shapes?: ElementShape[];
  sizes?: ElementSize[];
  minSpeed?: number;
  maxSpeed?: number;
  interactive?: boolean;
  opacityRange?: [number, number];
  useGradient?: boolean;
  customElements?: React.ReactNode[];
  zIndex?: number;
}

export const FloatingElements = ({
  className = "",
  count = 15,
  colors = ['#CBACF9', '#6D28D9', '#4F46E5', '#2563EB', '#A78BFA'],
  shapes = ['circle', 'square', 'triangle'],
  sizes = ['small', 'medium', 'large'],
  minSpeed = 0.5,
  maxSpeed = 2,
  interactive = true,
  opacityRange = [0.2, 0.6],
  useGradient = false,
  customElements = [],
  zIndex = -1
}: FloatingElementsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<Element[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  // Convert size string to actual pixel value
  const getSizeValue = (size: ElementSize): number => {
    if (typeof size === 'number') return size;
    switch (size) {
      case 'small': return Math.random() * 10 + 5; // 5-15px
      case 'medium': return Math.random() * 15 + 15; // 15-30px
      case 'large': return Math.random() * 20 + 30; // 30-50px
      default: return 10;
    }
  };

  // Initialize elements
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();
    
    // Generate random elements
    elementsRef.current = Array.from({ length: count }).map((_, i) => {
      const sizeOption = sizes[Math.floor(Math.random() * sizes.length)];
      const size = getSizeValue(sizeOption);
      
      return {
        id: `element-${i}`,
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() * 2 - 1) * 0.5
      };
    });
    
    // Mouse move listener for interactive mode
    if (interactive) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mousePosition.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      };
      
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [count, colors, shapes, sizes, minSpeed, maxSpeed, interactive]);
  
  // Animation loop
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();
    
    const animate = () => {
      elementsRef.current = elementsRef.current.map(element => {
        let { x, y, speed, rotation, rotationSpeed } = element;
        
        // Update position
        y += speed;
        
        // If interactive, apply subtle attraction to mouse
        if (interactive && mousePosition.current.x && mousePosition.current.y) {
          const dx = mousePosition.current.x - x;
          const dy = mousePosition.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const force = 0.2 * (1 - distance / 150);
            x += dx * force * 0.05;
            y += dy * force * 0.05;
          }
        }
        
        // Reset if element goes offscreen
        if (y > height) {
          y = -element.size;
          x = Math.random() * width;
        }
        
        // Update rotation
        rotation = (rotation + rotationSpeed) % 360;
        
        return { ...element, x, y, rotation };
      });
      
      // Force re-render
      setForceRender(prev => prev + 1);
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [interactive]);
  
  // Force re-render on animation frame
  const [forceRender, setForceRender] = React.useState<number>(0);
  
  // Render shape based on type
  const renderShape = (element: Element) => {
    const { shape, size, color, rotation } = element;
    const opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
    
    const commonStyles: React.CSSProperties = {
      width: size,
      height: size,
      transform: `rotate(${rotation}deg)`,
      opacity
    };
    
    if (useGradient) {
      commonStyles.backgroundImage = `linear-gradient(45deg, ${color}, ${colors[Math.floor(Math.random() * colors.length)]})`;
    } else {
      commonStyles.backgroundColor = color;
    }
    
    switch (shape) {
      case 'circle':
        return (
          <div 
            style={{
              ...commonStyles,
              borderRadius: '50%'
            }} 
          />
        );
      case 'square':
        return (
          <div 
            style={{
              ...commonStyles,
              borderRadius: '4px'
            }} 
          />
        );
      case 'triangle':
        return (
          <div 
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size/2}px solid transparent`,
              borderRight: `${size/2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
              transform: `rotate(${rotation}deg)`,
              opacity
            }} 
          />
        );
      case 'custom':
        if (element.customPath) {
          return (
            <svg 
              width={size}
              height={size}
              viewBox="0 0 24 24"
              style={{
                transform: `rotate(${rotation}deg)`,
                opacity
              }}
            >
              <path d={element.customPath} fill={color} />
            </svg>
          );
        }
        return null;
      default:
        return null;
    }
  };
  
  // Add custom elements if provided
  const renderElements = () => {
    // Render both system-generated elements and custom elements if provided
    return (
      <>
        {elementsRef.current.map((element) => (
          <div
            key={element.id}
            className="absolute"
            style={{
              left: `${element.x}px`,
              top: `${element.y}px`,
              willChange: 'transform',
              pointerEvents: 'none'
            }}
          >
            {renderShape(element)}
          </div>
        ))}
        
        {customElements.length > 0 && customElements.map((element, index) => {
          const randomElement = elementsRef.current[index % elementsRef.current.length];
          return (
            <div
              key={`custom-${index}`}
              className="absolute"
              style={{
                left: `${randomElement?.x || Math.random() * 100}%`,
                top: `${randomElement?.y || Math.random() * 100}%`,
                transform: `scale(${Math.random() * 0.5 + 0.5}) rotate(${Math.random() * 360}deg)`,
                opacity: Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0],
                pointerEvents: 'none'
              }}
            >
              {element}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div 
      ref={containerRef} 
      className={cn("relative overflow-hidden", className)}
      style={{ zIndex }}
    >
      {renderElements()}
    </div>
  );
}; 
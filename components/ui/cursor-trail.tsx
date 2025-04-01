"use client";

import React, { useEffect, useRef } from 'react';

interface CursorTrailProps {
  color?: string;
  size?: number;
  trailLength?: number;
  fadeSpeed?: number;
}

export const CursorTrail = ({
  color = "#CBACF9",
  size = 15,
  trailLength = 20,
  fadeSpeed = 0.95
}: CursorTrailProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorPosition = useRef({ x: 0, y: 0 });
  const cursorPositions = useRef<{ x: number; y: number; alpha: number }[]>([]);
  const animRef = useRef<number>(0);
  const isPointerMoved = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const handlePointerMove = (e: PointerEvent) => {
      cursorPosition.current = { x: e.clientX, y: e.clientY };
      isPointerMoved.current = true;
    };

    window.addEventListener('pointermove', handlePointerMove);

    const animate = () => {
      const ctx = canvas?.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add current position to the start of the array
      if (isPointerMoved.current) {
        cursorPositions.current.unshift({
          x: cursorPosition.current.x,
          y: cursorPosition.current.y,
          alpha: 1
        });
        isPointerMoved.current = false;
      }

      // Keep the array at the specified length
      if (cursorPositions.current.length > trailLength) {
        cursorPositions.current = cursorPositions.current.slice(0, trailLength);
      }

      // Draw the trail
      cursorPositions.current.forEach((pos, index) => {
        const alpha = pos.alpha;
        const adjustedSize = size * (1 - index / trailLength);

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, adjustedSize, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Fade out
        pos.alpha *= fadeSpeed;
      });

      // Remove completely faded points
      cursorPositions.current = cursorPositions.current.filter(pos => pos.alpha > 0.01);

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animRef.current);
    };
  }, [color, size, trailLength, fadeSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ opacity: 0.7 }}
    />
  );
};
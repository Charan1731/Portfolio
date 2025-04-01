"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AnimatedSkillBarProps {
  name: string;
  level: number; // 0-100
  image: string;
  color?: string;
  className?: string;
}

export const AnimatedSkillBar = ({
  name,
  level,
  image,
  color = "#CBACF9",
  className,
}: AnimatedSkillBarProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${level}%`,
        transition: { duration: 1.2, type: "spring", bounce: 0.4 },
      });
    }
  }, [controls, isInView, level]);

  return (
    <div 
      className={cn("mb-6 group", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 flex justify-center items-center bg-black-200/50">
            <Image 
              src={`/tech/${image}`} 
              alt={name} 
              width={20} 
              height={20} 
              className="object-contain"
            />
          </div>
          <span className="text-sm font-medium transition-colors duration-300 group-hover:text-white">
            {name}
          </span>
        </div>
        <span className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-purple">{level}%</span>
      </div>
      <div className="h-2 w-full bg-black/30 rounded-full overflow-hidden border border-white/5" ref={ref}>
        <motion.div
          className="h-full rounded-full"
          style={{ 
            backgroundColor: color,
            boxShadow: hovered ? `0 0 10px ${color}` : 'none',
            width: "0%"
          }}
          animate={controls}
        />
      </div>
    </div>
  );
}; 
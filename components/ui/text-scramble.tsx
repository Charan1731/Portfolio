"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
  scrambleOnHover?: boolean;
}

export const TextScramble = ({
  text,
  className = "",
  speed = 10,
  scrambleOnHover = false,
}: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const currentTextRef = useRef(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

  const scramble = () => {
    let iteration = 0;
    const maxIterations = text.length * 2;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setIsScrambling(true);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prevText => {
        return currentTextRef.current
          .split("")
          .map((char, index) => {
            if (index < iteration / 2) {
              return text[index];
            }
            
            return randomChar();
          })
          .join("");
      });
      
      iteration += 1;
      
      if (iteration >= maxIterations) {
        setIsScrambling(false);
        setDisplayText(text);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, speed);
  };
  
  useEffect(() => {
    currentTextRef.current = text;
    
    if (!scrambleOnHover) {
      scramble();
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, scrambleOnHover]);
  
  return (
    <span 
      className={cn("inline-block", className)}
      onMouseEnter={() => scrambleOnHover && scramble()}
    >
      {displayText || text}
    </span>
  );
}; 
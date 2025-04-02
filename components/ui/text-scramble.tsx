"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
  scrambleSpeed?: number;
  delay?: number;
  scrambleOnMount?: boolean;
  iterationCount?: number;
  chars?: string;
}

export const TextScramble = ({
  text,
  className,
  speed = 20,
  scrambleSpeed = 10,
  delay = 0,
  scrambleOnMount = true,
  iterationCount = 1,
  chars = '!<>-_\\/[]{}—=+*^?#________'
}: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState('');
  const scramble = useCallback(() => {
    let iteration = 0;
    let finalIndex = 0;
    let timer: NodeJS.Timeout | null = null;
    
    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];
    

    if (timer) clearTimeout(timer);
    
    const doScramble = () => {

      const scrambleText = text
        .split('')
        .map((char, index) => {
          if (index < finalIndex) {
            return text[index];
          }
          
          if (char === ' ') return ' ';
          return randomChar();
        })
        .join('');
      
      setDisplayText(scrambleText);
      
      if (finalIndex >= text.length && iteration >= iterationCount - 1) {
        setDisplayText(text);
        return;
      }
      
      if (iteration >= Math.floor(scrambleSpeed / 10)) {
        iteration = 0;
        finalIndex = Math.min(finalIndex + 1, text.length);
      }
      
      iteration++;
      
      timer = setTimeout(doScramble, speed);
    };
    
    setTimeout(doScramble, delay);
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [text, chars, speed, scrambleSpeed, delay, iterationCount]);

  useEffect(() => {
    if (scrambleOnMount) {
      return scramble();
    } else {
      setDisplayText(text);
    }
  }, [text, scrambleOnMount, scramble]);

  return (
    <span className={cn("inline-block", className)}>
      {displayText || text}
    </span>
  );
}; 
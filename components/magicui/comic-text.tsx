"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { CSSProperties } from "react";

type ComicTextProps = {
  children: string;
  className?: string;
  style?: CSSProperties;
  fontSize?: number;
};

export function ComicText({
  children,
  className,
  style,
  fontSize = 1.5, // Much smaller for inline use
}: ComicTextProps) {
  if (typeof children !== "string") {
    throw new Error("children must be a string");
  }

  const dotColor = "#A78BFA"; // Purple to match the website theme
  const backgroundColor = "#CBACF9"; // Primary purple from the website

  return (
    <motion.span // Changed from div to span for inline use
      className={cn("select-none inline-block", className)}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers', 'Comic Sans MS', 'Impact', sans-serif",
        fontWeight: "900",
        WebkitTextStroke: `${fontSize * 0.1}px #000000`, // Much thinner for inline text
        transform: "skewX(-2deg)", // Very subtle skew
        textTransform: "uppercase",
        filter: `
          drop-shadow(1px 1px 0px #000000) 
          drop-shadow(0.5px 0.5px 0px ${dotColor})
          drop-shadow(0 0 5px rgba(203, 172, 249, 0.3))
        `, // Subtle shadows for inline use
        backgroundColor: backgroundColor,
        backgroundImage: `
          radial-gradient(circle at 0.5px 0.5px, ${dotColor} 0.5px, transparent 0),
          linear-gradient(135deg, ${backgroundColor} 0%, #9333EA 50%, ${dotColor} 100%)
        `, // Smaller dots for inline text
        backgroundSize: "3px 3px, 100% 100%", // Very small dots
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        verticalAlign: "baseline", // Align with text baseline
        lineHeight: "1", // Prevent line height issues
        margin: "0 2px", // Small margin for breathing room
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: [0.175, 0.885, 0.32, 1.275],
        type: "spring",
      }}
    >
      {children}
    </motion.span>
  );
}

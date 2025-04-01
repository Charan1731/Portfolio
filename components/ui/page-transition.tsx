"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

// Transition types
type TransitionType = 
  | 'fade'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale'
  | 'rotate'
  | 'flip'
  | 'wipe'
  | 'custom';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  type?: TransitionType;
  duration?: number;
  easingIn?: string;
  easingOut?: string;
  delayIn?: number;
  delayOut?: number;
  staggerChildren?: number;
  customVariants?: any;
  bgColor?: string;
  onAnimationComplete?: () => void;
}

export const PageTransition = ({
  children,
  className = "",
  type = 'fade',
  duration = 0.4,
  easingIn = "easeOut",
  easingOut = "easeIn",
  delayIn = 0,
  delayOut = 0,
  staggerChildren = 0.1,
  customVariants,
  bgColor = "#000",
  onAnimationComplete
}: PageTransitionProps) => {
  const pathname = usePathname();
  const [transitioning, setTransitioning] = useState(false);
  
  // Animation variants for different transition types
  const getVariants = () => {
    if (customVariants) return customVariants;
    
    switch (type) {
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { 
            opacity: 1,
            transition: { 
              duration, 
              ease: easingIn,
              delay: delayIn,
              staggerChildren 
            }
          },
          exit: { 
            opacity: 0,
            transition: { 
              duration, 
              ease: easingOut,
              delay: delayOut,
              staggerChildren 
            }
          }
        };
      
      case 'slide-up':
        return {
          initial: { opacity: 0, y: 50 },
          animate: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration, 
              ease: easingIn,
              delay: delayIn,
              staggerChildren 
            }
          },
          exit: { 
            opacity: 0, 
            y: -50,
            transition: { 
              duration, 
              ease: easingOut,
              delay: delayOut,
              staggerChildren 
            }
          }
        };
        
      case 'slide-down':
        return {
          initial: { opacity: 0, y: -50 },
          animate: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration, 
              ease: easingIn,
              delay: delayIn,
              staggerChildren 
            }
          },
          exit: { 
            opacity: 0, 
            y: 50,
            transition: { 
              duration, 
              ease: easingOut,
              delay: delayOut,
              staggerChildren 
            }
          }
        };
        
      case 'slide-left':
        return {
          initial: { opacity: 0, x: 50 },
          animate: { 
            opacity: 1, 
            x: 0,
            transition: { 
              duration, 
              ease: easingIn,
              delay: delayIn,
              staggerChildren 
            }
          },
          exit: { 
            opacity: 0, 
            x: -50,
            transition: { 
              duration, 
              ease: easingOut,
              delay: delayOut,
              staggerChildren 
            }
          }
        };
        
      case 'slide-right':
        return {
          initial: { opacity: 0, x: -50 },
          animate: { 
            opacity: 1, 
            x: 0,
            transition: { 
              duration, 
              ease: easingIn,
              delay: delayIn,
              staggerChildren 
            }
          },
          exit: { 
            opacity: 0, 
            x: 50,
            transition: { 
              duration, 
              ease: easingOut,
              delay: delayOut,
              staggerChildren 
            }
          }
        };
        
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { 
            opacity: 1, 
            scale: 1,
            transition: { 
              duration, 
              ease: easingIn,
              delay: delayIn,
              staggerChildren 
            }
          },
          exit: { 
            opacity: 0, 
            scale: 1.2,
            transition: { 
              duration, 
              ease: easingOut,
              delay: delayOut,
              staggerChildren 
            }
          }
        };
        
      case 'rotate':
        return {
          initial: { opacity: 0, rotate: -5 },
          animate: { 
            opacity: 1, 
            rotate: 0,
            transition: { 
              duration, 
              ease: easingIn,
              delay: delayIn,
              staggerChildren 
            }
          },
          exit: { 
            opacity: 0, 
            rotate: 5,
            transition: { 
              duration, 
              ease: easingOut,
              delay: delayOut,
              staggerChildren 
            }
          }
        };
        
      case 'flip':
        return {
          initial: { opacity: 0, rotateY: 90 },
          animate: { 
            opacity: 1, 
            rotateY: 0,
            transition: { 
              duration, 
              ease: easingIn,
              delay: delayIn,
              staggerChildren 
            }
          },
          exit: { 
            opacity: 0, 
            rotateY: -90,
            transition: { 
              duration, 
              ease: easingOut,
              delay: delayOut,
              staggerChildren 
            }
          }
        };
        
      case 'wipe':
        return {
          initial: { clipPath: 'inset(0 100% 0 0)' },
          animate: { 
            clipPath: 'inset(0 0% 0 0)',
            transition: { 
              duration, 
              ease: easingIn,
              delay: delayIn,
              staggerChildren 
            }
          },
          exit: { 
            clipPath: 'inset(0 0 0 100%)',
            transition: { 
              duration, 
              ease: easingOut,
              delay: delayOut,
              staggerChildren 
            }
          }
        };
        
      default:
        return {
          initial: { opacity: 0 },
          animate: { 
            opacity: 1,
            transition: { 
              duration, 
              ease: easingIn,
              delay: delayIn,
              staggerChildren 
            }
          },
          exit: { 
            opacity: 0,
            transition: { 
              duration, 
              ease: easingOut,
              delay: delayOut,
              staggerChildren 
            }
          }
        };
    }
  };
  
  // Handle animation completion
  const handleAnimationComplete = () => {
    setTransitioning(false);
    onAnimationComplete?.();
  };
  
  // Set transitioning state when pathname changes
  useEffect(() => {
    setTransitioning(true);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={getVariants()}
        className={cn("w-full", className)}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
        
        {/* Overlay transition for certain effects */}
        {(type === 'wipe' || type === 'flip') && (
          <motion.div
            className="fixed inset-0 z-50 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { duration: duration / 2, delay: duration / 2 } }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: bgColor }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}; 
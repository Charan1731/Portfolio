"use client";
import { useEffect, useState } from 'react';

export default function SplineScene() {
  const [isClient, setIsClient] = useState(false);
  const [SplineComponent, setSplineComponent] = useState<React.ComponentType<{ scene: string; style: React.CSSProperties }> | null>(null);

  useEffect(() => {
    setIsClient(true);
    
    // Dynamically import Spline only on client side
    const loadSpline = async () => {
      try {
        const { default: Spline } = await import('@splinetool/react-spline');
        setSplineComponent(() => Spline);
      } catch (error) {
        console.warn('Failed to load Spline component:', error);
      }
    };

    loadSpline();
  }, []);

  if (!isClient || !SplineComponent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 w-80 h-80 z-10 pointer-events-none">
      <div className="w-full h-full">
        <SplineComponent
          scene="https://prod.spline.design/q38YStnIHKrXskvB/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}

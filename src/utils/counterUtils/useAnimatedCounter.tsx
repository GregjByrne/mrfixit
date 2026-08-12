import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

export const useAnimatedCounter = (
  endValue: number,
  elementRef: RefObject<HTMLElement | null>,
  durationMs: number = 2000
): number => {
  const [count, setCount] = useState<number>(0);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  // 1. Handle Intersection Observing
  useEffect(() => {
    const element = elementRef.current;
    if (!element || startAnimation) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [elementRef, startAnimation]);

  // 2. Handle the Counter Animation
  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number): void => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const rate = Math.min(progress / durationMs, 1);
      const easeOutQuad = rate * (2 - rate);
      
      setCount(Math.floor(easeOutQuad * endValue));

      if (rate < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [startAnimation, endValue, durationMs]);

  return count;
};
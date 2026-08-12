import React, { useRef } from 'react';
import { useAnimatedCounter } from './useAnimatedCounter';
import type { CounterData }  from '../../types.ts';

export const CounterItem: React.FC<{ metric: CounterData }> = ({ metric }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const count = useAnimatedCounter(metric.target, containerRef, metric.duration || 2000);

  return (
    <div ref={containerRef} className="sigma_counter style-3">
        <metric.icon size={60} color="#ffffff" strokeWidth={1} />
        <div className="ps-4">
            <span>
            <span className="counter text-white">{count}</span>
            <span className="plus text-white">{metric.suffix}</span>
            </span>
            <p className="text-white mb-0">{metric.label}</p>
        </div>
    </div>
  );
};
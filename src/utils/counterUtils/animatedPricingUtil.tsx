import React, { useRef } from 'react';
import { useAnimatedCounter } from './useAnimatedCounter';
import type { PricingData }  from '../../types.ts';

export const CounterItem: React.FC<{ metric: PricingData }> = ({ metric }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const count = useAnimatedCounter(metric.target, containerRef, metric.duration || 2000);

  return (
    <div ref={containerRef} className="col-md-6">
        <div className="sigma_counter">
            <span>
            <span className="counter">{count}</span>
            <span className="plus">{metric.suffix}</span>
            </span>
            <p>{metric.label}</p>
        </div>
    </div>
  );
};


import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

interface AnimatedCounterProps {
  end: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  decimals = 0,
  duration = 1800,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo for dramatic counter speedup then smooth deceleration
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * end;
      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, end, duration]);

  const formattedValue = decimals > 0 
    ? count.toLocaleString('vi-VN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : Math.round(count).toLocaleString('vi-VN');

  return (
    <span ref={ref} className={`inline-flex items-baseline flex-wrap gap-x-1.5 ${className}`}>
      {prefix && <span className="text-[0.7em] font-medium opacity-90">{prefix}</span>}
      <span className="font-extrabold text-amber-300 drop-shadow-sm">{formattedValue}</span>
      {suffix && <span className="text-[0.68em] font-semibold text-sky-200/95 ml-0.5">{suffix}</span>}
    </span>
  );
};

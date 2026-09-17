import React, { useEffect, useState } from 'react';

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
  duration = 1600,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
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
  }, [end, duration]);

  const formattedValue = decimals > 0 
    ? count.toLocaleString('vi-VN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : Math.round(count).toLocaleString('vi-VN');

  return (
    <span className={`inline-flex items-baseline flex-wrap gap-x-1 ${className}`}>
      {prefix && <span className="text-[0.85em] font-medium opacity-90">{prefix}</span>}
      <span className="font-extrabold">{formattedValue}</span>
      {suffix && <span className="text-[0.78em] font-semibold text-sky-200/95">{suffix}</span>}
    </span>
  );
};

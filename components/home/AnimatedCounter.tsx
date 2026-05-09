'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
}

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

export default function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { num: target, suffix } = parseValue(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const start = performance.now();

          function animate(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="stat-number">
        {display}
        {suffix}
      </div>
      <p className="mt-2 text-sm md:text-base text-[#333333]">{label}</p>
    </div>
  );
}

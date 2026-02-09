import { useEffect, useRef, useState } from 'react';

/** Parse "50,000+", "50K+", "45+", "200+", "4.8/5" into { target, suffix } */
function parseMetricValue(str) {
  if (!str || typeof str !== 'string') return { target: 0, suffix: '' };
  const match = str.match(/^([\d.,]+)(.*)$/);
  if (!match) return { target: 0, suffix: str };
  const numStr = match[1].replace(/,/g, '');
  let target = parseFloat(numStr);
  let suffix = match[2] || '';
  if (suffix.toUpperCase().startsWith('K')) {
    target *= 1000;
    suffix = 'K' + suffix.slice(1);
  }
  return { target, suffix };
}

function useCountUp(valueStr, isVisible, duration = 1500) {
  const { target, suffix } = parseMetricValue(valueStr);
  const [display, setDisplay] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isVisible || target <= 0) {
      setDisplay(target);
      return;
    }
    setDisplay(0);
    startRef.current = null;

    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 2;
      const current = target * eased;
      setDisplay(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, suffix, isVisible, duration]);

  const n = Math.round(display);
  const formatted = target >= 1000 && suffix.startsWith('K')
    ? `${Math.round(display / 1000)}${suffix}`
    : target % 1 !== 0
      ? display.toFixed(1) + suffix
      : (n >= 1000 ? n.toLocaleString() : n.toString()) + suffix;

  return formatted;
}

function MetricCard({ metric, isVisible }) {
  const displayValue = useCountUp(metric.value, isVisible);

  return (
    <div className="group text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-emerald-100 hover:-translate-y-0.5 transition-all duration-300">
      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
        {displayValue}
      </div>
      <div className="text-sm text-gray-600 mt-2 font-medium">{metric.label}</div>
    </div>
  );
}

export function TrustMetricsSection({ payload }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!payload?.metrics?.length) return null;
  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {payload.metrics.map((m, i) => (
            <MetricCard key={i} metric={m} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

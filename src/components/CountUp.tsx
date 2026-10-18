"use client";

import { useEffect, useRef } from "react";

// Counts a number up when it scrolls into view. The server renders the final value
// (so it is correct without JavaScript and for search engines); numbers already on
// screen when the page loads are left alone. Updates the text directly — no React
// re-render per frame — and reserves the final width so nothing shifts.
export function CountUp({
  value,
  decimals = 0,
  suffix = "",
  duration = 1400,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = (n: number) =>
    n.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.style.minWidth = `${el.offsetWidth}px`;
    el.textContent = format(0);
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4); // ease-out quart
          el.textContent = format(value * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
          else el.style.minWidth = "";
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, decimals, suffix, duration]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {format(value)}
    </span>
  );
}

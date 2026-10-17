"use client";

import { useEffect } from "react";

// Fades and lifts page content into view as it scrolls in.
// Content is rendered visible on the server; only elements still below the fold
// when this runs are hidden and revealed, so nothing flickers and the page
// works without JavaScript. Skipped entirely when the visitor prefers reduced motion.
const BLOCKS = "main section:not(#top) .container-page > *";
const ITEMS = "main section:not(#top) :is(ul, ol, .grid) > :is(li, article)";

export function Reveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fold = window.innerHeight;
    const targets = new Set<HTMLElement>();
    document.querySelectorAll<HTMLElement>(`${BLOCKS}, ${ITEMS}`).forEach((el) => {
      if (el.getBoundingClientRect().top > fold) targets.add(el);
    });

    // Items in the same list come in one after another
    targets.forEach((el) => {
      if (el.matches(ITEMS) && el.parentElement) {
        const index = Array.prototype.indexOf.call(el.parentElement.children, el);
        el.style.setProperty("--reveal-delay", `${Math.min(index, 8) * 60}ms`);
      }
      el.classList.add("reveal");
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("reveal-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}

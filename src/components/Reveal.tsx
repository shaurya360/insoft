"use client";

import { useEffect } from "react";

// Scroll-reveal for page content, plus pausing the hero's ambient motion off screen.
//
// What animates (kept deliberately small — every animated element costs a
// compositor layer and style work while scrolling):
//   • each direct child of a section's .container-page, as one block
//   • the children of any element marked data-stagger (card grids), one by one
//     — the data-stagger element itself is not animated, so nothing moves twice.
// Content is rendered visible on the server; only elements still below the fold
// when this runs are hidden, so nothing flickers and it all works without JS.
// After an element has arrived its reveal classes are removed, so its own hover
// transitions apply again. Skipped entirely for prefers-reduced-motion.
const BLOCKS = "main section:not(#top) .container-page > :not([data-stagger])";
const ITEMS = "main section:not(#top) [data-stagger] > *";
const STAGGER_ITEM_MS = 70;
const STAGGER_BLOCK_MS = 90;

export function Reveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const root = document.documentElement;

    // Pause the hero's drifting shapes while the hero is off screen
    const hero = document.getElementById("top");
    const heroIO = hero
      ? new IntersectionObserver(([e]) => {
          if (e.isIntersecting) root.removeAttribute("data-hero-offscreen");
          else root.setAttribute("data-hero-offscreen", "");
        })
      : null;
    if (hero && heroIO) heroIO.observe(hero);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => heroIO?.disconnect();
    }

    const fold = window.innerHeight;
    const targets: HTMLElement[] = [];
    const add = (el: HTMLElement, delay: number) => {
      if (el.getBoundingClientRect().top <= fold) return; // already on screen: leave it alone
      if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
      el.classList.add("reveal");
      targets.push(el);
    };
    const indexIn = (el: Element, selector: string) =>
      el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.matches(selector)).indexOf(el) : 0;

    document.querySelectorAll<HTMLElement>(BLOCKS).forEach((el) => add(el, Math.min(indexIn(el, ":not([data-stagger])"), 3) * STAGGER_BLOCK_MS));
    document.querySelectorAll<HTMLElement>(ITEMS).forEach((el) => add(el, Math.min(indexIn(el, "*"), 6) * STAGGER_ITEM_MS));

    // Once the transform transition has finished, hand the element back to its own styles
    const settle = (el: HTMLElement) => {
      el.classList.remove("reveal", "reveal-in");
      el.style.removeProperty("--reveal-delay");
    };
    const onEnd = (e: TransitionEvent) => {
      if (e.propertyName === "transform" && e.target instanceof HTMLElement && e.target.classList.contains("reveal-in")) {
        settle(e.target);
      }
    };
    document.addEventListener("transitionend", onEnd);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("reveal-in");
          io.unobserve(el);
          // Safety net in case transitionend never fires (e.g. tab hidden mid-animation)
          window.setTimeout(() => el.classList.contains("reveal-in") && settle(el), 1600);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );
    targets.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      heroIO?.disconnect();
      document.removeEventListener("transitionend", onEnd);
    };
  }, []);

  return null;
}

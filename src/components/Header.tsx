"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { COMPANY, NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Frosted header + shadow once the page leaves the top. Watches a marker at the
  // top of the page instead of listening to every scroll event.
  useEffect(() => {
    const marker = document.getElementById("page-top");
    if (!marker) return;
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting));
    io.observe(marker);
    return () => io.disconnect();
  }, []);

  // Highlight the menu link of the section crossing the middle of the screen
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.href.slice(1))).filter((s): s is HTMLElement => !!s);
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        const current = sections.find((s) => visible.has(s.id));
        setActive(current ? current.id : null);
      },
      { rootMargin: "-42% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // While the mobile menu is open: Escape or a tap outside closes it
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b backdrop-blur-md backdrop-saturate-150 transition-[background-color,box-shadow,border-color] duration-ui ${
        scrolled || open
          ? "border-line/70 bg-white/85 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.35)]"
          : "border-transparent bg-white/95"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Insoft Technology — back to top">
          <Image
            src="/insoft-technology-logo.png"
            alt="Insoft Technology"
            width={364}
            height={176}
            priority
            className="h-10 w-auto"
          />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.95rem] font-medium text-ink-soft">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link" aria-current={active === item.href.slice(1) ? "true" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${COMPANY.phones[0].tel}`}
            className="flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-brand"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {COMPANY.phones[0].display}
          </a>
          <a href="#contact" className="btn-primary px-4 py-2 text-sm">
            Request a quote
          </a>
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="relative -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper active:bg-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="menu-icon absolute h-6 w-6" data-shown={!open} aria-hidden="true" />
          <X className="menu-icon absolute h-6 w-6" data-shown={open} aria-hidden="true" />
        </button>
      </div>

      <div
        className="scroll-progress absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brand via-sky-400 to-brand"
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        data-open={open}
        inert={!open}
        className="mobile-menu absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-y border-line bg-white shadow-lg lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page py-3">
          <ul className="divide-y divide-line">
            {NAV.map((item, i) => (
              <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                <a
                  href={item.href}
                  aria-current={active === item.href.slice(1) ? "true" : undefined}
                  className="block py-3 text-base font-medium text-ink transition-colors active:text-brand aria-[current=true]:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid gap-2 pb-2 sm:grid-cols-2">
            <a href={`tel:${COMPANY.phones[0].tel}`} className="btn-secondary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {COMPANY.phones[0].display}
            </a>
            <a href="#contact" className="btn-primary" onClick={() => setOpen(false)}>
              Request a quote
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

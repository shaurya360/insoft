"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { COMPANY, NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu with Escape and return focus to the toggle
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
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
                <a href={item.href} className="hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={`tel:${COMPANY.phones[0].tel}`} className="flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-brand">
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
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-y border-line bg-white shadow-lg lg:hidden">
        <nav aria-label="Mobile" className="container-page py-3">
          <ul className="divide-y divide-line">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block py-3 text-base font-medium text-ink" onClick={() => setOpen(false)}>
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

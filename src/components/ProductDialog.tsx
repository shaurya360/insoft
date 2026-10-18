"use client";

import { useRef } from "react";
import { ArrowRight, X } from "lucide-react";

// "See all products" button + a native <dialog> holding the full list.
// The list is rendered on the server (children), so it stays in the page for search engines.
// Native dialog gives focus trapping and Escape-to-close; a click on the backdrop also closes it.
export function ProductDialog({
  id,
  title,
  count,
  children,
}: {
  id: string;
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const close = () => ref.current?.close();

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-controls={`${id}-dialog`}
        onClick={() => ref.current?.showModal()}
        className="group/btn inline-flex items-center gap-1.5 rounded-full py-1 text-sm font-semibold text-brand"
      >
        See all {count} products
        <ArrowRight
          className="h-4 w-4 transition-transform duration-ui group-hover/btn:translate-x-1"
          aria-hidden="true"
        />
      </button>

      <dialog
        ref={ref}
        id={`${id}-dialog`}
        aria-labelledby={`${id}-dialog-title`}
        className="sheet"
        onClick={(e) => {
          if (e.target === e.currentTarget) close(); // click on the backdrop area
        }}
      >
        <div className="sheet-panel">
          <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-4">
            <h3 id={`${id}-dialog-title`} className="text-lg font-semibold leading-snug">
              {title}
            </h3>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="-mr-2 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-paper hover:text-ink active:bg-paper"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="overflow-y-auto overscroll-contain px-6 py-5">{children}</div>
          <div className="flex flex-col gap-2 border-t border-line px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink-muted">Single units or bulk — we&apos;ll quote with GST and delivery time.</p>
            <a href="#contact" onClick={close} className="btn-primary shrink-0 px-5 py-2.5 text-sm">
              Request a quote
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}

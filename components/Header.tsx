"use client";

import { useEffect, useState } from "react";
import { NavTab } from "@/components/scrapbook/FolderTab";
import { cx } from "@/lib/cx";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#stats", label: "Stats" },
  { href: "#samples", label: "Samples" },
  { href: "#brands", label: "Brands" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Close on Escape, and when the viewport grows past the hamburger breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-20 border-b-[2.5px] border-ink bg-cream">
      <a
        href="#main"
        className="sr-only rounded-pill bg-ink px-2 py-1 text-body-sm text-cream focus:not-sr-only focus:absolute focus:top-1 focus:left-1 focus:z-30"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-[20px] py-[18px] lg:items-end lg:px-5 lg:pb-0">
        <a
          href="#home"
          className="font-display text-[20px] leading-normal font-bold italic lg:text-[26px]"
        >
          Llarie
        </a>

        {/* Desktop: folder tabs sitting on the header's bottom border */}
        <nav
          aria-label="Main"
          className="hidden items-end gap-[6px] text-body-eyebrow font-semibold tracking-[.04em] uppercase lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <NavTab key={link.href} href={link.href}>
              {link.label}
            </NavTab>
          ))}
        </nav>

        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="-m-[10px] flex h-[44px] w-[44px] items-center justify-center lg:hidden"
        >
          <span aria-hidden="true" className="relative block h-[17.5px] w-[24px]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={cx(
                  "absolute left-0 block h-[2.5px] w-full rounded-[2px] bg-ink transition-[rotate,translate,opacity] duration-200 motion-reduce:transition-none",
                  i === 0 && "top-0",
                  i === 1 && "top-[7.5px]",
                  i === 2 && "top-[15px]",
                  open && i === 0 && "translate-y-[7.5px] rotate-45",
                  open && i === 1 && "opacity-0",
                  open && i === 2 && "-translate-y-[7.5px] -rotate-45",
                )}
              />
            ))}
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div id="mobile-menu" hidden={!open} className="lg:hidden">
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 top-[var(--header-h)] -z-10 cursor-default bg-ink/20"
        />
        <nav
          aria-label="Main"
          className="absolute inset-x-0 top-full border-b-[2.5px] border-ink bg-cream px-[20px] pt-2 pb-3"
        >
          <ul className="mx-auto flex max-w-[480px] flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href} style={{ rotate: `${i % 2 ? 0.6 : -0.6}deg` }}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cx(
                    "block rounded-sm border-2 border-ink px-2 py-[12px] text-body-label tracking-[.04em] uppercase transition-colors duration-150",
                    "hover:bg-pink focus-visible:bg-pink",
                    i % 2 ? "bg-cream" : "bg-blush2",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

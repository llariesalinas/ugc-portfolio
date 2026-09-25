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
  const [active, setActive] = useState("#home");

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

  // Scrollspy: the active section is the last one (in document order) whose
  // top has scrolled up past the header line — i.e. the one most recently
  // entered. Checked on scroll/resize rather than via IntersectionObserver,
  // since a naive "topmost intersecting" pick mis-highlights the section
  // just above once it starts leaving on the far side of a short section.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    let ticking = false;
    const update = () => {
      ticking = false;

      // At the bottom of the page the last section's top can never reach
      // the header line — there's no content below it left to scroll past.
      // Treat "scrolled to the bottom" as that last section being active.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(`#${sections[sections.length - 1].id}`);
        return;
      }

      const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 0;
      const line = headerH + 1;
      let current = sections[0];
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= line) current = el;
      }
      setActive(`#${current.id}`);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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
          className="inline-block font-display text-[20px] leading-normal font-bold italic transition-transform duration-200 hover:-rotate-2 hover:scale-105 lg:text-[26px]"
        >
          Llarie
        </a>

        {/* Desktop: folder tabs sitting on the header's bottom border */}
        <nav
          aria-label="Main"
          className="hidden items-end gap-[6px] text-body-eyebrow font-semibold tracking-[.04em] uppercase lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <NavTab key={link.href} href={link.href} isActive={active === link.href}>
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
            {NAV_LINKS.map((link, i) => {
              const isActive = active === link.href;
              return (
                <li key={link.href} style={{ rotate: `${i % 2 ? 0.6 : -0.6}deg` }}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setOpen(false)}
                    className={cx(
                      "block rounded-sm border-2 border-ink px-2 py-[12px] text-body-label tracking-[.04em] uppercase",
                      "transition-[background-color,translate,box-shadow] duration-200",
                      "hover:-translate-y-px hover:bg-pink hover:shadow-btn-tab",
                      "focus-visible:-translate-y-px focus-visible:bg-pink focus-visible:shadow-btn-tab",
                      isActive ? "-translate-y-px bg-pink shadow-btn-tab" : "bg-cream",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

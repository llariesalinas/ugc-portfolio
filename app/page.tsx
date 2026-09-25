import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { cx } from "@/lib/cx";

// Placeholder sections so the nav anchors can be tested. Each one is
// replaced by its real component in phases 4–8.
const STUBS = [
  { id: "about", label: "About", phase: 4, className: "bg-blush" },
  { id: "stats", label: "Stats", phase: 5, className: "bg-cream" },
  { id: "samples", label: "Samples", phase: 6, className: "bg-blush" },
  { id: "brands", label: "Brands", phase: 7, className: "bg-cream" },
  { id: "contact", label: "Contact", phase: 8, className: "bg-ink text-cream" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        {STUBS.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className={cx("flex min-h-[80vh] items-center justify-center px-[20px]", s.className)}
          >
            <p className="text-body-eyebrow tracking-[.14em] uppercase opacity-55">
              [ {s.label} — phase {s.phase} ]
            </p>
          </section>
        ))}
      </main>
    </>
  );
}

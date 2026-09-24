// TEMPORARY: step-1 review sheet for tokens + scrapbook components.
// Replaced section by section as the real page is built.
import { Folder, NavTab } from "@/components/scrapbook/FolderTab";
import { Pushpin } from "@/components/scrapbook/Pushpin";
import { Tape } from "@/components/scrapbook/Tape";

const COLORS = [
  { name: "cream", hex: "#F6F1E6", className: "bg-cream" },
  { name: "ink", hex: "#221E1B", className: "bg-ink" },
  { name: "pink", hex: "#FBC7D9", className: "bg-pink" },
  { name: "pink-deep", hex: "#F4A6C2", className: "bg-pink-deep" },
  { name: "blush", hex: "#FBE6EC", className: "bg-blush" },
  { name: "blush2", hex: "#F4C9D6", className: "bg-blush2" },
];

const SPACING = [
  { name: "space-1", px: 8, className: "w-1" },
  { name: "space-2", px: 14, className: "w-2" },
  { name: "space-3", px: 22, className: "w-3" },
  { name: "space-4", px: 32, className: "w-4" },
  { name: "space-5", px: 40, className: "w-5" },
  { name: "space-6", px: 70, className: "w-6" },
  { name: "space-7", px: 110, className: "w-7" },
];

const RADII = [
  { name: "radius-sm", className: "rounded-sm" },
  { name: "radius-md", className: "rounded-md" },
  { name: "radius-lg", className: "rounded-lg" },
  { name: "radius-pill", className: "rounded-pill" },
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b-2 border-ink pb-1 text-body-eyebrow tracking-[.14em] uppercase">
      {children}
    </h2>
  );
}

export default function TokenSheet() {
  return (
    <main className="mx-auto max-w-[1200px] px-3 py-5 md:px-5 md:py-7">
      <p className="mb-5 text-body-sm opacity-70">
        Step 1 review — design tokens &amp; scrapbook components
      </p>

      <section className="mb-6">
        <Heading>Color</Heading>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {COLORS.map((c) => (
            <div key={c.name}>
              <div className={`${c.className} h-[80px] rounded-md border-2 border-ink`} />
              <div className="mt-1 text-body-label">{c.name}</div>
              <div className="text-body-sm opacity-70">{c.hex}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <Heading>Type</Heading>
        <div className="flex flex-col gap-3">
          <p className="font-display text-[44px] leading-none font-bold italic text-shadow-collage-sm md:text-display-hero md:text-shadow-collage">
            Llarie Salinas
          </p>
          <p className="font-display text-display-h2 italic">The girl behind the camera</p>
          <p className="font-display text-display-h3 uppercase">The numbers don&apos;t lie</p>
          <p className="font-display text-display-stat text-pink text-shadow-ink">20.8K+</p>
          <p className="max-w-[480px] text-body-lg opacity-85">
            Beauty, tech &amp; lifestyle content that feels like a text from your bestie —
            not an ad. (body-lg)
          </p>
          <p className="max-w-[520px] text-body-md opacity-85">
            21-year-old Filipina creator blending beauty, tech, and everyday chaos. (body-md)
          </p>
          <p className="text-body-label uppercase tracking-[.04em]">TikTok Followers (body-label)</p>
          <p className="text-body-sm">245K+ likes · 10.6M+ views (body-sm)</p>
          <p className="text-body-eyebrow tracking-[.14em] uppercase">UGC Content Creator (body-eyebrow)</p>
          <p className="inline-block -rotate-3 self-start font-hand text-hand-accent text-pink text-shadow-ink">
            meet llarie
          </p>
        </div>
      </section>

      <section className="mb-6 grid gap-5 md:grid-cols-2">
        <div>
          <Heading>Spacing</Heading>
          <div className="flex flex-col gap-1">
            {SPACING.map((s) => (
              <div key={s.name} className="flex items-center gap-2">
                <div className={`${s.className} h-[14px] bg-pink-deep`} />
                <span className="text-body-sm">
                  {s.name} · {s.px}px
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Heading>Radius</Heading>
          <div className="flex flex-wrap gap-2">
            {RADII.map((r) => (
              <div key={r.name} className="text-center">
                <div className={`${r.className} h-[64px] w-[88px] border-[2.5px] border-ink bg-blush2`} />
                <div className="mt-1 text-body-sm">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-6">
        <Heading>Pushpin &amp; Tape</Heading>
        <div className="grid grid-cols-2 gap-4 pt-3 sm:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{ rotate: `${[-2, 1.5, -1, 2][i]}deg` }}
              className="relative rounded-lg border-3 border-ink bg-cream p-[14px]"
            >
              {i % 2 === 0 ? <Tape centered rotate={i === 0 ? -4 : -2} /> : <Pushpin centered />}
              <div className="flex aspect-9/16 items-center justify-center rounded-[14px] bg-blush">
                <span className="text-[12px] opacity-55">[ sample {i + 1} ]</span>
              </div>
            </div>
          ))}
        </div>
        <div className="relative mt-5 rounded-md bg-ink px-4 py-5 text-center text-cream">
          <Tape centered tone="dark" rotate={-3} />
          <span className="text-body-sm">Tape, dark tone (Contact section)</span>
        </div>
      </section>

      <section className="mb-6">
        <Heading>Folder tabs</Heading>
        <div className="mb-6 flex items-end justify-center gap-[6px] overflow-x-auto border-b-[2.5px] border-ink pt-2 text-body-eyebrow tracking-[.04em] uppercase">
          {["Home", "About", "Stats", "Samples", "Brands", "Contact"].map((l) => (
            <NavTab key={l} href="#">
              {l}
            </NavTab>
          ))}
        </div>
        <Folder label="Tech & Devices" rotate={0.6}>
          <Pushpin className="top-[-16px] right-[34px]" />
          <div className="flex flex-wrap gap-[12px]">
            {["Samsung", "Grab", "Aolon", "Ulanzi"].map((b) => (
              <span
                key={b}
                className="rounded-pill border-2 border-ink bg-cream px-[18px] py-1 text-body-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </Folder>
      </section>
    </main>
  );
}

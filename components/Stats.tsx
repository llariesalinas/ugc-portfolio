import { Pushpin } from "@/components/scrapbook/Pushpin";

const CARDS = [
  { value: "20.8K+", label: "TikTok Followers", detail: "245K+ likes · 10.6M+ views (365 days)", rotate: -1.5 },
  { value: "2.1K+", label: "Instagram Followers", detail: "300K+ likes · 2M+ views (90 days)", rotate: 1 },
  { value: "2.8K+", label: "YouTube Subscribers", detail: "188K+ total views", rotate: -1 },
];

export function Stats() {
  return (
    <section id="stats" className="py-[70px] text-center lg:py-[110px]">
      <div className="mx-auto max-w-[1200px] px-[20px] lg:px-5">
        <span
          style={{ rotate: "-2deg" }}
          className="inline-block font-hand text-[28px] text-pink text-shadow-ink lg:text-hand-accent"
        >
          by the numbers
        </span>
        <h2 className="mt-[6px] mb-[36px] font-display text-[32px] font-bold uppercase tracking-[.01em] lg:mb-[56px] lg:text-display-h3">
          The numbers don&rsquo;t lie
        </h2>

        <div className="grid gap-[22px] text-left lg:grid-cols-3 lg:gap-[32px]">
          {CARDS.map((card) => (
            <div
              key={card.label}
              style={{ rotate: `${card.rotate}deg` }}
              className="relative rounded-md border-[2.5px] border-ink bg-cream px-[22px] py-[28px] lg:px-[28px] lg:py-[36px]"
            >
              <Pushpin centered />
              <div className="font-display text-[36px] font-bold text-pink text-shadow-ink lg:text-display-stat">
                {card.value}
              </div>
              <div className="mt-[6px] mb-[8px] text-body-sm font-bold tracking-[.04em] uppercase">
                {card.label}
              </div>
              <div className="text-body-sm font-normal opacity-70">{card.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

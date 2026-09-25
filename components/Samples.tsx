import { Pushpin } from "@/components/scrapbook/Pushpin";
import { Tape } from "@/components/scrapbook/Tape";

const BLOB = "https://d5gzeazkxfhs83i9.public.blob.vercel-storage.com";

const CARDS = [
  {
    caption: "Edna tote & flats",
    src: `${BLOB}/sample-1.mp4`,
    rotate: -2,
    deco: "tape" as const,
    decoRotate: -4,
  },
  {
    caption: "G2G 3-in-1 sunscreen",
    src: `${BLOB}/sample-2.mp4`,
    rotate: 1.5,
    deco: "pin" as const,
  },
  {
    caption: "Skintific green cushion",
    src: `${BLOB}/sample-3.mp4`,
    rotate: -1,
    deco: "tape" as const,
    decoRotate: -2,
  },
  {
    caption: "SACE LADY lip tint",
    src: `${BLOB}/sample-4.mp4`,
    rotate: 2,
    deco: "pin" as const,
  },
];

export function Samples() {
  return (
    <section id="samples" className="bg-blush py-[70px] text-center lg:py-[110px]">
      <div className="mx-auto max-w-[1200px] px-[20px] lg:px-5">
        <span
          style={{ rotate: "2deg" }}
          className="inline-block font-hand text-[28px] text-pink text-shadow-ink lg:text-hand-accent"
        >
          peep the content
        </span>
        <h2 className="mt-[6px] mb-[36px] font-display text-[32px] font-bold uppercase lg:mb-[56px] lg:text-display-h3">
          UGC Samples
        </h2>

        <div className="grid grid-cols-2 gap-[16px] text-left lg:grid-cols-4 lg:gap-[26px]">
          {CARDS.map((card) => (
            <div
              key={card.caption}
              style={{ rotate: `${card.rotate}deg` }}
              className="relative rounded-lg border-[3px] border-ink bg-cream p-[10px] lg:p-[14px]"
            >
              {card.deco === "tape" ? (
                <Tape centered rotate={card.decoRotate} />
              ) : (
                <Pushpin centered />
              )}
              <video
                src={card.src}
                className="aspect-[9/16] w-full rounded-[10px] bg-cream object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="mt-[8px] text-body-sm font-normal italic opacity-75 lg:mt-[10px]">
                {card.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

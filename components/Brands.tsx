import { Folder } from "@/components/scrapbook/FolderTab";
import { Pushpin } from "@/components/scrapbook/Pushpin";

const BEAUTY = [
  "Maybelline", "Nivea", "Vaseline", "Pond's", "Charles & Keith", "Sunsilk", "Skintific",
  "Sunnies Face", "Colourette", "Modess", "Isntree", "Grace and Glow", "Mirai", "Elyzza",
  "Hottielab", "Tala by Kyla", "blk cosmetics", "Dazzle Me", "SACE LADY", "peripera",
  "Glad2Glow", "Shawill", "WestBronco", "Bremod", "KiLaLa", "O.TWO.O", "SKYKO",
  "Suteki Skincare", "Lab on Hair", "SOMEBYMI", "Mlen Diary", "VXN", "Maange", "Timephoria",
  "Byond", "Perscents", "Sunbare", "EvoSnow", "+Ful", "Wosado", "Keraluxe", "Hodekt", "Uyaai",
];

const TECH = [
  "Samsung", "Grab", "Aolon", "Ulanzi", "Yoole", "Murioki", "JisuLife", "Orashare", "maono",
  "bella", "GOOJODOQ",
];

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-pill border-2 border-ink bg-cream px-[18px] py-[8px] text-body-sm">
      {label}
    </span>
  );
}

export function Brands() {
  return (
    <section id="brands" className="py-[70px] text-center lg:py-[110px]">
      <div className="mx-auto max-w-[1200px] px-[20px] lg:px-5">
        <span
          style={{ rotate: "-2deg" }}
          className="inline-block font-hand text-[28px] text-pink text-shadow-ink lg:text-hand-accent"
        >
          brands i&rsquo;ve vibed with
        </span>
        <h2 className="mt-[6px] mb-[36px] font-display text-[32px] font-bold uppercase lg:mb-[56px] lg:text-display-h3">
          Collabs
        </h2>

        <Folder label="Beauty & Skincare" rotate={-0.6} className="mb-[40px] text-left lg:mb-[56px]">
          <div className="flex flex-wrap gap-[10px] lg:gap-[12px]">
            {BEAUTY.map((brand) => (
              <Chip key={brand} label={brand} />
            ))}
          </div>
        </Folder>

        <Folder label="Tech & Devices" rotate={0.6} className="text-left">
          <Pushpin className="top-[-16px] right-[34px]" />
          <div className="flex flex-wrap gap-[10px] lg:gap-[12px]">
            {TECH.map((brand) => (
              <Chip key={brand} label={brand} />
            ))}
          </div>
        </Folder>
      </div>
    </section>
  );
}

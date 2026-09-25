import Image from "next/image";
import { Pushpin } from "@/components/scrapbook/Pushpin";

const ABOUT_PHOTO_URL =
  "https://d5gzeazkxfhs83i9.public.blob.vercel-storage.com/about-portrait-KlHtTamLpxyM258Xwfhuwk3coiSNO4.jpg";

export function About() {
  return (
    <section id="about" className="bg-blush py-[70px] lg:py-[110px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-[40px] px-[20px] text-center lg:grid-cols-[1.15fr_1fr] lg:gap-[70px] lg:px-5 lg:text-left">
        <div>
          <span
            style={{ rotate: "-3deg" }}
            className="mb-[4px] inline-block font-hand text-[30px] text-pink text-shadow-ink lg:text-hand-accent"
          >
            meet llarie
          </span>
          <h2 className="mb-[16px] font-display text-[36px] leading-[1.1] font-bold italic lg:mb-[22px] lg:text-display-h2">
            The girl behind
            <br />
            the camera
          </h2>
          <p className="mx-auto mb-[18px] max-w-[520px] text-body-sm leading-[1.6] opacity-85 lg:mx-0 lg:text-body-md lg:leading-[1.7]">
            21-year-old Filipina creator blending beauty, tech, and everyday chaos into content
            that Gen Z girls actually stop scrolling for. GRWMs, honest reviews, and the
            occasional &ldquo;pov: you&rsquo;re starting an app&rdquo; — all shot between CS
            classes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-[10px] lg:justify-start">
            <span
              style={{ rotate: "-2deg" }}
              className="inline-block rounded-pill border-2 border-ink bg-cream px-[18px] py-[8px] text-body-sm"
            >
              5 years creating
            </span>
            <span
              style={{ rotate: "1deg" }}
              className="inline-block rounded-pill border-2 border-ink bg-cream px-[18px] py-[8px] text-body-sm"
            >
              Beauty · Tech · Lifestyle
            </span>
          </div>
        </div>

        <div className="relative mx-auto">
          <Pushpin size="md" className="top-[-16px] left-[36px]" />
          <div className="relative h-[300px] w-[240px] overflow-hidden rounded-lg border-[3px] border-ink bg-cream shadow-frame-left rotate-3 lg:h-[400px] lg:w-[320px]">
            <Image
              src={ABOUT_PHOTO_URL}
              alt="Llarie Salinas portrait"
              fill
              sizes="(min-width: 1024px) 320px, 240px"
              className="object-cover"
            />
          </div>
          <div
            style={{ rotate: "8deg" }}
            className="absolute -top-[18px] -right-[10px] flex h-[74px] w-[74px] items-center justify-center rounded-full border-[2.5px] border-ink bg-pink text-center font-body text-[11px] leading-[1.2] font-bold lg:h-[88px] lg:w-[88px] lg:text-body-sm"
          >
            5 YRS
            <br />
            EXP
          </div>
        </div>
      </div>
    </section>
  );
}

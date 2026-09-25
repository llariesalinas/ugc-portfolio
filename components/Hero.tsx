import Image from "next/image";
import { Pushpin } from "@/components/scrapbook/Pushpin";
import { Tape } from "@/components/scrapbook/Tape";

const HERO_PHOTO_URL =
  "https://d5gzeazkxfhs83i9.public.blob.vercel-storage.com/hero-photo-QxCSQvgnTkKOQf3oH6cJTCf56FDvK2.jpg";

// Real profile links; email routes through the Contact section's mailto.
const SOCIALS = [
  {
    href: "https://www.tiktok.com/@llariesalinas",
    label: "TikTok",
    path: (
      <>
        <path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.46" />
        <path d="M14 4a5 5 0 0 0 5 5" />
      </>
    ),
  },
  {
    href: "https://www.instagram.com/llariesalinas",
    label: "Instagram",
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" />
      </>
    ),
  },
  {
    href: "https://www.youtube.com/@llarie",
    label: "YouTube",
    path: (
      <>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    href: "mailto:llariesalinas@gmail.com",
    label: "Email",
    path: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 6.5l9 6.5 9-6.5" />
      </>
    ),
  },
];

const STATS = [
  { value: "20.8K+", label: "followers" },
  { value: "1.8M+", label: "likes" },
  { value: "6.1M+", label: "views / 60d" },
];

function SocialIcon({ href, label, path }: (typeof SOCIALS)[number]) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      aria-label={label}
      className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-ink transition-[background-color,translate] duration-150 hover:-translate-y-[2px] hover:bg-pink focus-visible:-translate-y-[2px] focus-visible:bg-pink"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        {path}
      </svg>
    </a>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-[1200px] items-center gap-[32px] px-[20px] py-[70px] text-center lg:grid-cols-[1fr_1.15fr] lg:gap-[70px] lg:px-5 lg:py-[110px] lg:text-left"
    >
      {/* Photo */}
      <div className="relative mx-auto lg:mx-0">
        <svg
          width="440"
          height="440"
          viewBox="0 0 440 440"
          aria-hidden="true"
          className="pointer-events-none absolute -top-[30px] -left-[40px] z-0 hidden lg:block"
        >
          <circle
            cx="220"
            cy="220"
            r="200"
            fill="none"
            stroke="#FF6FA0"
            strokeWidth="2"
            strokeDasharray="1 14"
            strokeLinecap="round"
          />
        </svg>

        <Tape rotate={-8} className="top-[26px] left-[44px] hidden lg:block" />
        <Pushpin size="lg" className="top-[14px] right-[24px] hidden lg:block" />

        <span
          aria-hidden="true"
          style={{ rotate: "-7deg" }}
          className="absolute -top-[6px] left-[60px] z-2 hidden font-hand text-[30px] lg:block"
        >
          hi, i&rsquo;m
        </span>

        <div className="relative mx-auto h-[270px] w-[220px] overflow-hidden rounded-lg border-[3px] border-ink bg-blush2 shadow-frame-sm lg:mx-0 lg:ml-[40px] lg:h-[460px] lg:w-[380px] lg:-rotate-3 lg:shadow-frame">
          <Image
            src={HERO_PHOTO_URL}
            alt="Llarie Salinas"
            fill
            sizes="(min-width: 1024px) 380px, 220px"
            quality={95}
            className="object-cover object-[50%_100%]"
            priority
          />
        </div>
      </div>

      {/* Copy */}
      <div>
        <p className="text-body-eyebrow tracking-[.14em] uppercase text-pink [text-shadow:0.5px_0_var(--color-ink)] mb-[10px] lg:mb-[14px]">
          UGC Creator · Iloilo City
        </p>

        <h1 className="font-display text-[44px] leading-none font-bold italic text-shadow-collage-sm mb-[14px] lg:text-display-hero lg:text-shadow-collage lg:mb-[22px]">
          Llarie
          <br />
          Salinas
        </h1>

        <p className="mx-auto max-w-[480px] text-body-sm leading-[1.5] opacity-85 mb-[22px] lg:mx-0 lg:text-body-lg lg:leading-[1.55] lg:mb-[26px]">
          Beauty, tech &amp; lifestyle content that feels like a text from your bestie — not an ad. The
          kind that stops the scroll, earns the comments, and gets people tapping &ldquo;add to
          cart.&rdquo;
        </p>

        <div className="mb-[22px] hidden flex-wrap items-center justify-center gap-[22px] text-body-sm font-bold lg:mb-[34px] lg:flex lg:justify-start">
          {STATS.map((stat, i) => (
            <span key={stat.label} className="contents">
              {i > 0 && <span aria-hidden="true">·</span>}
              <span>
                {stat.value} <span className="font-medium opacity-70">{stat.label}</span>
              </span>
            </span>
          ))}
        </div>

        <div className="mb-[22px] flex flex-col gap-[12px] lg:mb-[34px] lg:flex-row lg:flex-wrap lg:items-center lg:gap-[18px]">
          <a
            href="#samples"
            className="block rounded-pill border-2 border-ink bg-ink px-[30px] py-[15px] text-center font-body text-body-sm font-semibold tracking-[.02em] text-cream shadow-btn-sm transition-[translate,box-shadow] duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-btn-pressed lg:shadow-btn lg:py-[16px]"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="block rounded-pill border-2 border-ink px-[28px] py-[13px] text-center font-body text-body-sm font-semibold tracking-[.02em] lg:py-[14px]"
          >
            Request Media Kit
          </a>
        </div>

        <div className="flex justify-center gap-[12px] lg:justify-start lg:gap-[14px]">
          {SOCIALS.map((social) => (
            <SocialIcon key={social.label} {...social} />
          ))}
        </div>
      </div>
    </section>
  );
}

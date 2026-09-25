import { Tape } from "@/components/scrapbook/Tape";

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
    href: "https://www.youtube.com/@llariesalinas",
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

export function Contact() {
  return (
    <section id="contact" className="bg-ink px-[20px] py-[70px] text-center text-cream lg:py-[120px] lg:pb-[70px]">
      <div className="relative mx-auto max-w-[760px]">
        <Tape centered rotate={-3} tone="dark" />

        <span
          style={{ rotate: "-2deg" }}
          className="mb-[4px] inline-block font-hand text-[28px] text-pink lg:text-hand-accent"
        >
          let&rsquo;s create something
        </span>
        <h2 className="mb-[16px] font-display text-[34px] leading-[1.1] font-bold italic lg:mb-[22px] lg:text-display-h2">
          Let&rsquo;s work together
        </h2>
        <p className="mx-auto mb-[28px] max-w-[560px] text-body-sm leading-[1.5] opacity-80 lg:mb-[36px] lg:text-body-lg lg:leading-[1.6]">
          Open to PR gifting, campaign collabs &amp; UGC for paid social — custom packages for
          beauty, tech, and lifestyle partnerships.
        </p>

        <a
          href="mailto:llariesalinas@gmail.com?subject=Media%20Kit%20Request"
          className="inline-block rounded-pill border-2 border-ink bg-pink px-[30px] py-[16px] font-body text-body-sm font-bold text-ink shadow-btn-on-dark lg:px-[38px] lg:py-[18px] lg:text-body-md"
        >
          Request My Media Kit →
        </a>
        <p className="mt-[14px] text-body-eyebrow font-normal tracking-normal opacity-55">
          Rates shared on request — no public price list
        </p>

        <div className="mt-[36px] flex justify-center gap-[14px] lg:mt-[44px]">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={social.label}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-cream transition-[background-color,translate] duration-150 hover:-translate-y-[2px] hover:bg-pink focus-visible:-translate-y-[2px] focus-visible:bg-pink"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {social.path}
              </svg>
            </a>
          ))}
        </div>

        <p className="mt-[48px] text-body-eyebrow font-normal tracking-[.04em] uppercase opacity-50 lg:mt-[60px]">
          Iloilo City, Philippines
        </p>
      </div>
    </section>
  );
}

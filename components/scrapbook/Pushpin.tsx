import { cx } from "@/lib/cx";

// Widths used in the mock: 30 (hero photo), 28 (about portrait), 26 (cards, folders).
const WIDTHS = { lg: 30, md: 28, sm: 26 } as const;

type PushpinProps = {
  size?: keyof typeof WIDTHS;
  /** Pin to the top-center edge of the parent (stat and sample cards). */
  centered?: boolean;
  /** Positioning classes when not centered, e.g. "top-[-16px] left-[36px]". */
  className?: string;
};

/**
 * A pink-deep pushpin pinning a card or photo to the page.
 * The parent must be `relative`.
 */
export function Pushpin({ size = "sm", centered = false, className }: PushpinProps) {
  const width = WIDTHS[size];

  return (
    <span
      aria-hidden="true"
      className={cx(
        "pointer-events-none absolute z-3 block drop-shadow-[0_3px_2px_rgba(0,0,0,0.18)]",
        centered && "top-[-16px] left-1/2 -translate-x-1/2",
        className,
      )}
    >
      <svg
        width={width}
        height={(width * 34) / 30}
        viewBox="0 0 30 34"
        className="block"
      >
        <ellipse cx="15" cy="30" rx="7" ry="2.5" fill="#000" opacity=".15" />
        <circle
          cx="15"
          cy="14"
          r="11"
          fill="var(--color-pink-deep)"
          stroke="var(--color-ink)"
          strokeWidth="2"
        />
        <circle cx="11" cy="10" r="3" fill="#fff" opacity=".55" />
      </svg>
    </span>
  );
}

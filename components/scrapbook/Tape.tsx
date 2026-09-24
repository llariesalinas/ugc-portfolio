import { cx } from "@/lib/cx";

type TapeProps = {
  /** Rotation in degrees; keep within ±8. */
  rotate?: number;
  /** "dark" is the lighter, cream-edged strip used on the ink Contact section. */
  tone?: "light" | "dark";
  /** Tape across the top-center edge of the parent (sample cards, contact). */
  centered?: boolean;
  /** Positioning classes when not centered, e.g. "top-[26px] left-[44px]". */
  className?: string;
};

/**
 * A translucent strip of washi tape laid across a card edge.
 * The parent must be `relative`. Alternate with <Pushpin /> between
 * neighbouring cards.
 */
export function Tape({ rotate = 0, tone = "light", centered = false, className }: TapeProps) {
  return (
    <span
      aria-hidden="true"
      style={{ rotate: `${rotate}deg` }}
      className={cx(
        "pointer-events-none absolute z-2 block h-[26px] w-[70px] border-[1.5px]",
        tone === "light" ? "border-ink bg-pink/90" : "border-cream bg-pink/55",
        centered && "top-[-10px] left-1/2 -translate-x-1/2",
        className,
      )}
    />
  );
}

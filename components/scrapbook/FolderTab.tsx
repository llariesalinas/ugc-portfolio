import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/lib/cx";

// Shared folder-tab shape: blush2 fill, ink outline, open bottom edge.
const TAB_BASE = "bg-blush2 border-ink border-b-0 rounded-t-sm";

type NavTabProps = ComponentPropsWithoutRef<"a">;

/**
 * A nav link drawn as a folder tab sitting on the header's bottom border.
 * Alternates blush2/cream by position; lifts and turns pink on hover.
 */
export function NavTab({ className, ...props }: NavTabProps) {
  return (
    <a
      {...props}
      className={cx(
        TAB_BASE,
        "relative mb-[-2.5px] translate-y-[5px] border-2 px-[18px] pt-[10px] pb-[9px]",
        "transition-[translate,background-color] duration-150 ease-[ease] even:bg-cream",
        "hover:translate-y-0 hover:bg-pink focus-visible:translate-y-0 focus-visible:bg-pink",
        className,
      )}
    />
  );
}

type FolderProps = {
  label: ReactNode;
  /** Rotation in degrees; the mock uses ±0.6. */
  rotate?: number;
  className?: string;
  children: ReactNode;
};

/** A cream folder with a labelled blush2 tab on its top edge. */
export function Folder({ label, rotate = 0, className, children }: FolderProps) {
  return (
    <div
      style={{ rotate: `${rotate}deg` }}
      className={cx(
        "relative rounded-md rounded-tl-[4px] border-[2.5px] border-ink bg-cream px-[30px] pt-[46px] pb-[30px]",
        className,
      )}
    >
      <div
        className={cx(
          TAB_BASE,
          "absolute top-[-23px] left-[26px] border-[2.5px] px-[20px] pt-[7px] pb-[9px]",
          "font-display text-[17px] font-bold italic",
        )}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  cubicBezier,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

const easeIntoFocus = cubicBezier(0.22, 1, 0.36, 1);
const easeOutOfFocus = cubicBezier(0, 0, 0.58, 1);
const focusEase: [typeof easeIntoFocus, typeof easeOutOfFocus] = [
  easeIntoFocus,
  easeOutOfFocus,
];

export type Side = "L" | "R";

export type ScrollTiltedTileProps = {
  children: ReactNode;
  side?: Side;
  perspective?: number;
  maxTilt?: number;
  maxBlur?: number;
  className?: string;
};

/**
 * Wraps any content so it rises tipped-forward, settles into focus, then tilts
 * back as it exits the viewport. Layout/margins on the wrapper are preserved —
 * pass them via `className`.
 */
export function ScrollTiltedTile({
  children,
  side = "L",
  perspective = 900,
  maxTilt = 70,
  maxBlur = 8,
  className,
}: ScrollTiltedTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const reduce = useReducedMotion();
  const sign = side === "L" ? -1 : 1;

  const blur = useTransform(p, [0, 0.5, 1], [maxBlur, 0, maxBlur], { ease: focusEase });
  const bright = useTransform(p, [0, 0.5, 1], [0.4, 1, 0.4], { ease: focusEase });
  const contrast = useTransform(p, [0, 0.5, 1], [2, 1, 2], { ease: focusEase });

  const ty = useTransform(p, [0, 0.5, 1], ["40%", "0%", "-40%"], { ease: focusEase });
  const tz = useTransform(p, [0, 0.5, 1], [300, 0, 300], { ease: focusEase });
  const rx = useTransform(p, [0, 0.5, 1], [maxTilt, 0, -maxTilt], { ease: focusEase });

  const tx = useTransform(p, [0, 0.5, 1], [`${sign * 20}%`, "0%", `${sign * 20}%`], {
    ease: focusEase,
  });
  const rot = useTransform(p, [0, 0.5, 1], [-sign * 5, 0, sign * 5], { ease: focusEase });
  const sk = useTransform(p, [0, 0.5, 1], [sign * 10, 0, -sign * 10], { ease: focusEase });

  const filter = useMotionTemplate`blur(${blur}px) brightness(${bright}) contrast(${contrast})`;

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ perspective, willChange: "transform" }}
    >
      <motion.div
        className="will-change-[filter,transform]"
        style={{
          filter,
          x: tx,
          y: ty,
          z: tz,
          rotate: rot,
          rotateX: rx,
          skewX: sk,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useTransform, useMotionValue } from "framer-motion";

export default function Counter({
  to,
  decimals = 0,
  suffix = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, value]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{display}</motion.span>
      <span className="text-gradient">{suffix}</span>
    </span>
  );
}
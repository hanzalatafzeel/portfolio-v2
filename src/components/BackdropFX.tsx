"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function BackdropFX() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="grid-bg absolute inset-0" />
      <motion.div
        style={prefersReduced ? undefined : { y: y1 }}
        className="orb left-[-12rem] top-[-14rem] h-[38rem] w-[38rem]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.32), transparent 62%)" }}
        />
      </motion.div>
      <motion.div
        style={prefersReduced ? undefined : { y: y2 }}
        className="orb right-[-10rem] top-[20rem] h-[34rem] w-[34rem]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.34), transparent 62%)" }}
        />
      </motion.div>
      <motion.div
        style={prefersReduced ? undefined : { y: y3 }}
        className="orb bottom-[-14rem] left-[28%] h-[30rem] w-[30rem]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(244,114,182,0.26), transparent 62%)" }}
        />
      </motion.div>
      <div className="noise absolute inset-0" />
    </div>
  );
}
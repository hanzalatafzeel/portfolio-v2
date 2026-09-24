"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="max-w-2xl"
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-fog sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 leading-relaxed text-mist">{sub}</p>}
    </motion.div>
  );
}
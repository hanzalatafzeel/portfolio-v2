"use client";

import { motion } from "framer-motion";
import { marqueeTech, skillGroups } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const card = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Skills() {
  const track = [...marqueeTech, ...marqueeTech];
  return (
    <section id="skills" className="relative scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="skills"
          title={<>The stack I ship with</>}
          sub="Seven years of tinkering distilled into tools I reach for every day — from data pipelines to production APIs."
        />

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((g) => (
            <motion.div key={g.title} variants={card} className="glass card-lift rounded-2xl p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-base font-semibold text-fog">{g.title}</h3>
                <span className="font-mono text-xs text-mute">0{g.items.length}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          <motion.div
            variants={card}
            className="glass flex flex-col justify-center gap-3 rounded-2xl border-dashed p-6"
          >
            <p className="eyebrow">always learning</p>
            <p className="font-display text-lg font-semibold leading-snug text-fog">
              Currently diving deeper into <span className="text-gradient">LLMs & RAG systems</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="marquee mt-16 border-y border-line/70 py-5">
        <div className="marquee-track">
          {track.map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center gap-6 whitespace-nowrap">
              <span className="font-display text-xl font-medium tracking-tight text-mute transition-colors hover:text-fog">
                {t}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-neon-violet/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
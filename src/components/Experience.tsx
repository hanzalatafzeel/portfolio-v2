"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const card = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="experience"
          title={<>Where I&apos;ve built things</>}
          sub="From a 48-hour marketplace sprint to long-running production services — the common thread is shipping under real constraints."
        />

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative mt-12 space-y-10 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-neon-cyan/60 before:via-neon-violet/60 before:to-neon-pink/60 sm:before:left-[9px]"
        >
          {experience.map((e) => (
            <motion.article key={e.company} variants={card} className="relative pl-10 sm:pl-14">
              <span className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-neon-violet/70 bg-ink shadow-[0_0_14px_rgba(139,92,246,0.55)] sm:h-[19px] sm:w-[19px]" />
              <div className="glass card-lift group rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-fog">{e.role}</h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-mist">
                      <Briefcase size={14} className="text-neon-cyan" />
                      <span>{e.company}</span>
                      <span className="text-mute">·</span>
                      <span>{e.location}</span>
                    </p>
                  </div>
                  <span className="font-mono rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-neon-cyan">
                    {e.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {e.points.map((p) => (
                    <li key={p.slice(0, 32)} className="flex gap-2.5 text-sm leading-relaxed text-mist">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan/70" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {e.stack.map((s) => (
                      <span key={s} className="chip !px-2.5 !py-1 !text-[0.7rem]">
                        {s}
                      </span>
                    ))}
                  </div>
                  {e.link && e.link !== "#" && (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-neon-cyan transition-colors hover:text-fog"
                    >
                      {e.linkLabel}
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
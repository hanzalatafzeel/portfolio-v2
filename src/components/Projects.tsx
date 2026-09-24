"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Folder, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="projects"
          title={<>Things I&apos;ve built</>}
          sub="A mix of NLP research-grade systems, production e-commerce, and small tools — each with a measurable outcome."
        />

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={card}
              className="glass card-lift group flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={p.alt ?? p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className={`bg-gradient-to-br ${p.accent} grid-bg flex h-full w-full items-center justify-center`}>
                    <span className="font-mono text-4xl font-bold text-fog/25">{p.monogram}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="font-mono rounded-full border border-white/15 bg-ink/70 px-3 py-1 text-xs text-fog backdrop-blur">
                    {p.year}
                  </span>
                  {p.tag && (
                    <span className="font-mono rounded-full border border-neon-green/40 bg-neon-green/10 px-3 py-1 text-xs text-neon-green backdrop-blur">
                      {p.tag}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <Folder size={17} className="text-violet-400" />
                  <h3 className="font-display text-xl font-semibold text-fog transition-colors group-hover:text-neon-cyan">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-mist">{p.blurb}</p>

                <ul className="mt-4 space-y-1.5">
                  {p.points.slice(0, 2).map((pt) => (
                    <li key={pt.slice(0, 28)} className="flex gap-2 text-sm leading-relaxed text-mute">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-neon-violet/80" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="chip !px-2.5 !py-1 !text-[0.7rem]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-5 pt-5">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href === "#" ? undefined : l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-1.5 text-sm font-medium text-fog transition-colors hover:text-neon-cyan"
                    >
                      {l.label === "Live Demo" || l.label === "Website" ? (
                        <ExternalLink size={15} />
                      ) : (
                        <ArrowUpRight size={15} />
                      )}
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
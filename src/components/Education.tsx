"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, MapPin, PenTool, Trophy } from "lucide-react";
import { achievements, education } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const card = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const iconMap: Record<string, typeof Trophy> = {
  trophy: Trophy,
  award: Award,
  pen: PenTool,
};

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="education"
          title={<>Learning never stopped</>}
          sub="IIT Madras for data science, a diploma in engineering, and a habit of building since Class X."
        />

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {education.map((e) => (
            <motion.div
              key={e.school}
              variants={card}
              className="glass card-lift group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 opacity-60 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="font-mono rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-neon-cyan">
                  {e.period}
                </span>
                <span className="font-mono text-xs text-mute">{e.status}</span>
              </div>
              <h3 className="font-display mt-4 text-lg font-semibold leading-snug text-fog">
                {e.school}
              </h3>
              <p className="mt-1 text-sm text-mist">{e.degree}</p>
              <p className="mt-4 flex items-center gap-1.5 text-xs text-mute">
                <MapPin size={13} className="text-neon-cyan" /> {e.location}
              </p>
              <p className="mt-2 font-mono text-xs text-neon-green">{e.note}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="eyebrow"
          >
            achievements & leadership
          </motion.p>
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-8 grid gap-5 md:grid-cols-3"
          >
            {achievements.map((a) => {
              const Icon = iconMap[a.icon] ?? Award;
              return (
                <motion.div
                  key={a.title}
                  variants={card}
                  className="glass card-lift rounded-2xl p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/30 bg-gradient-to-br from-cyan-500/15 to-pink-500/15 text-neon-amber">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display mt-4 text-base font-semibold leading-snug text-fog">
                    {a.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 font-mono text-xs text-mute">
                    <GraduationCap size={13} className="text-neon-violet" />
                    <span>{a.org}</span>
                    <span className="text-mute">·</span>
                    <span className="text-neon-cyan">{a.year}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{a.detail}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
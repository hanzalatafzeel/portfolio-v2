"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { profile, stats, education } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Counter from "@/components/Counter";

const card = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="about" title={<>Turning ideas into shipped products</>} />
            <motion.div
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-8 space-y-4"
            >
              {profile.about.map((p) => (
                <motion.p
                  key={p.slice(0, 24)}
                  variants={card}
                  className="leading-relaxed text-mist"
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {profile.quickFacts.map((f) => (
                <motion.div key={f.label} variants={card} className="glass rounded-2xl p-4">
                  <p className="eyebrow !text-[0.6rem]">{f.label}</p>
                  <p className="mt-2 text-sm font-medium text-fog">{f.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="glass overflow-hidden rounded-2xl">
              <div className="flex items-center gap-2 border-b border-line px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-neon-pink/80" />
                <span className="h-3 w-3 rounded-full bg-neon-amber/80" />
                <span className="h-3 w-3 rounded-full bg-neon-green/80" />
                <span className="font-mono ml-3 text-xs text-mute">hanzala — zsh</span>
              </div>
              <div className="space-y-3 px-5 py-6 font-mono text-sm leading-relaxed">
                <p className="text-mute">
                  <span className="text-neon-green">➜</span> <span className="text-neon-cyan">~</span> whoami
                </p>
                <p className="text-fog">full-stack · data-science @ iitm</p>
                <p className="text-mute">
                  <span className="text-neon-green">➜</span> <span className="text-neon-cyan">~</span> ls ./projects
                </p>
                <p className="text-fog">
                  mcq-solver &nbsp; e-commerce &nbsp; quiz-analytics &nbsp; cardbox &nbsp; canteen
                </p>
                <p className="text-mute">
                  <span className="text-neon-green">➜</span> <span className="text-neon-cyan">~</span> python -c &quot;print(&#39;let&#39;s build something great&#39;)&quot;
                </p>
                <p className="text-neon-green">let&#39;s build something great</p>
                <p className="text-mute">
                  <span className="text-neon-green">➜</span> <span className="cursor-blink text-neon-cyan">▍</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="glass card-lift rounded-2xl p-5"
                >
                  <p className="font-display text-3xl font-bold text-fog">
                    <Counter to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-mute">{s.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
              <MapPin size={18} className="shrink-0 text-neon-cyan" />
              <p className="text-sm text-mist">
                {profile.location} · {education[0].school.split("Indian Institute")[1]?.trim() ?? "IIT Madras"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
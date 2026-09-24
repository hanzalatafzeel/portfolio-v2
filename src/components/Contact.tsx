"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Contact() {
  const tiles = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: "Location", value: profile.location, href: undefined, Icon: MapPin },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="contact"
          title={<>Let&apos;s build something great together</>}
          sub={"I'm always up for an interesting project, an internship, or just a good conversation about AI and the web."}
        />

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {tiles.map(({ label, value, href, Icon }) => {
            const inner = (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/15 to-violet-500/15 text-neon-cyan">
                  <Icon size={20} />
                </div>
                <p className="eyebrow mt-4 !text-[0.62rem]">{label}</p>
                <p className="mt-1 break-all text-sm font-medium text-fog">{value}</p>
              </>
            );
            return href ? (
              <motion.a
                key={label}
                variants={item}
                href={href}
                className="glass card-lift block rounded-2xl p-6"
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div key={label} variants={item} className="glass card-lift rounded-2xl p-6">
                {inner}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mt-12 overflow-hidden rounded-3xl p-px"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500" />
          <div className="glass relative flex flex-col items-center gap-6 rounded-3xl !bg-ink-2/90 px-8 py-14 text-center sm:px-14">
            <h3 className="font-display max-w-xl text-2xl font-bold leading-snug text-fog sm:text-3xl">
              Have a role or a wild idea?{" "}
              <span className="text-gradient">My inbox is open.</span>
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-mist">
              Currently based in Chennai & New Delhi — open to remote or onsite internships across backend, full-stack, and ML/NLP roles.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={`mailto:${profile.email}`} className="btn-glow">
                <Mail size={17} /> Say Hello
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <GithubIcon size={17} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <LinkedinIcon size={17} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
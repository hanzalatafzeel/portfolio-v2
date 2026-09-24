"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import Typewriter from "@/components/Typewriter";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-svh flex-col justify-center pt-28 pb-14">
      <motion.div
        variants={prefersReduced ? undefined : container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl px-6"
      >
        <div className="grid items-center gap-x-12 gap-y-14 lg:grid-cols-[minmax(0,18rem)_1fr]">
          <motion.div variants={item} className="relative mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-500/25 via-violet-500/25 to-pink-500/25 blur-2xl"
              />
              <div className="relative rounded-[2rem] bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 p-[2px] shadow-[0_18px_60px_rgba(0,0,0,0.5)]">
                <div className="overflow-hidden rounded-[calc(2rem-2px)] bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/my_img.jpg"
                    alt="Hanzala Tafzeel"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </div>

              <div className="glass absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl px-4 py-2.5 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-neon-green shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                <span className="text-xs font-medium text-fog">Open to work</span>
              </div>

              <div className="glass absolute -right-4 -top-4 rounded-2xl px-4 py-2.5 shadow-lg">
                <p className="font-mono text-[0.62rem] text-mute">BS · Data Science</p>
                <p className="font-display text-sm font-semibold text-fog">IIT Madras</p>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p variants={item} className="eyebrow">
              {"// hello, I'm"}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display mt-5 text-5xl font-extrabold leading-[1.04] tracking-tight text-fog sm:text-6xl lg:text-7xl"
            >
              {profile.firstName}{" "}
              <span className="text-gradient inline-block">{profile.lastName}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="font-mono mt-6 flex flex-wrap items-center gap-x-3 text-lg text-mist sm:text-xl"
            >
              <span className="text-neon-green">&gt;</span>
              <Typewriter />
            </motion.p>

            <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed text-mist">
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-glow">
                View Projects
              </a>
              <a href="#contact" className="btn-ghost">
                Contact Me
              </a>
              <div className="ml-1 flex items-center gap-2">
                {[
                  { href: profile.github, label: "GitHub", Icon: GithubIcon },
                  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
                  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="glass flex h-11 w-11 items-center justify-center rounded-xl text-mist transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-fog hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="animate-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-mute transition-colors hover:text-fog sm:block"
      >
        <ChevronDown size={26} />
      </a>
    </section>
  );
}
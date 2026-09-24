"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 140) current = link.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled ? "bg-gradient-to-b from-ink/95 via-ink/65 to-transparent" : ""
      }`}
    >
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "glass-strong mt-3 rounded-2xl shadow-lg shadow-black/30" : "bg-transparent"
        }`}
      >
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-3"
          aria-label="Back to top"
        >
          <span className="text-gradient flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-display text-sm font-bold">
            {profile.initials}
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-fog">
            {profile.firstName}
            <span className="text-mist">.</span>
            <span className="text-gradient">{profile.lastName}</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                active === l.id ? "text-fog" : "text-mist hover:text-fog"
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full border border-violet-400/40 bg-white/5"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{l.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-glow hidden !px-5 !py-2 text-sm lg:inline-flex">
            Hire Me
          </a>
          <button
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-fog lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="glass-strong mx-4 mt-2 rounded-2xl p-3 shadow-2xl shadow-black/40 lg:hidden"
            aria-label="Mobile"
          >
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-colors ${
                  active === l.id ? "bg-white/5 text-fog" : "text-mist hover:bg-white/5"
                }`}
              >
                {l.label}
                <ArrowUpRight size={16} className="opacity-60" />
              </button>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="btn-glow mt-2 w-full justify-center text-sm"
            >
              Hire Me
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
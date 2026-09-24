"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export default function Typewriter() {
  const words = profile.roles;
  const [word, setWord] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[word];
    let delay = deleting ? 38 : 72;
    if (!deleting && text === full) delay = 1600;
    if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setDeleting(true);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWord((w) => (w + 1) % words.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, word, words]);

  return (
    <span className="inline-flex items-center">
      <span className="truncate">{text}</span>
      <span className="cursor-blink ml-0.5 inline-block h-6 w-[3px] rounded bg-neon-cyan align-middle" />
    </span>
  );
}